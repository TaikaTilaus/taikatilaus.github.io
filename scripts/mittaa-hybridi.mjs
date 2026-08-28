#!/usr/bin/env node
/**
 * Vertaa BM25-hakua, semanttista hakua ja niiden hybridia.
 *
 *   $env:OPENROUTER_API_KEY = "..."
 *   node scripts/mittaa-hybridi.mjs <testikysymykset.json>
 *
 * Tulokset eritellaan viritettyihin (id <= 35) ja riippumattomiin (id > 35).
 * Vain jalkimmainen on rehellinen mittari - ks. hakulaatu-mittaus.md.
 *
 * Yhdistaminen: Reciprocal Rank Fusion. Se kayttaa vain sijalukuja, ei
 * pisteita, joten BM25:n ja kosinin eri asteikkoja ei tarvitse normalisoida
 * eika painoja viritt: yksi viritettava parametri vahemman on tassa
 * projektissa jo osoittautunut hyveeksi.
 */

import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { lataaIndeksi, haeChunkit } from './haku.mjs';
import { haeVektorit, pura } from './rakenna-embeddingit.mjs';

const JUURI = join(dirname(fileURLToPath(import.meta.url)), '..');
const INDEKSI = join(JUURI, 'static', 'ohjeindeksi.json');
const VEKTORIT = join(JUURI, 'static', 'ohjeindeksi-vektorit.json');

const RRF_K = 60;

const yksityiskohdat = process.argv.includes('--yksityiskohdat');
const rivit = [];

function kosini(a, b) {
  let s = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) { s += a[i] * b[i]; na += a[i] * a[i]; nb += b[i] * b[i]; }
  return s / (Math.sqrt(na) * Math.sqrt(nb) || 1);
}

/** Sijaluvut -> RRF-pisteet. Jokainen lista on taulukko chunk-id:ita jarjestyksessa. */
function rrf(listat) {
  const pisteet = new Map();
  for (const lista of listat) {
    lista.forEach((id, i) => {
      pisteet.set(id, (pisteet.get(id) ?? 0) + 1 / (RRF_K + i + 1));
    });
  }
  return [...pisteet.entries()].sort((a, b) => b[1] - a[1]).map(([id]) => id);
}

/**
 * Vuorottelu: otetaan sivutason listoista vuorotellen yksi kerrallaan.
 *
 * RRF vertaa chunkkeja keskenaan ja palkitsee yksimielisyytta: sivu, jonka
 * vain toinen menetelma loytaa, jaa alle vaikka se olisi sen listan ykkonen.
 * Juuri niin kay sanastoeroissa, eli siina tapauksessa jota varten semanttinen
 * haku otettiin mukaan. Vuorottelu sailyttaa kummankin karjen: toisen ykkonen
 * on kokonaislistassa korkeintaan sijalla 2.
 */
function vuorottele(a, b, maara) {
  const nahty = new Set(), ulos = [];
  for (let i = 0; i < Math.max(a.length, b.length) && ulos.length < maara; i++) {
    for (const lista of [a, b]) {
      const url = lista[i];
      if (!url || nahty.has(url)) continue;
      nahty.add(url);
      ulos.push(url);
      if (ulos.length >= maara) break;
    }
  }
  return ulos;
}

function sivutasolle(idt, kartta, maara) {
  const nahty = new Set(), ulos = [];
  for (const id of idt) {
    const c = kartta.get(id);
    if (!c) continue;
    const url = c.url.split('#')[0];
    if (nahty.has(url)) continue;
    nahty.add(url);
    ulos.push(url);
    if (ulos.length >= maara) break;
  }
  return ulos;
}

function osui(sivut, odotetut) {
  for (let i = 0; i < sivut.length; i++) if (odotetut.includes(sivut[i])) return i + 1;
  return 0;
}

async function main() {
  const kysymysPolku = process.argv[2];
  if (!kysymysPolku) { console.error('Kaytto: node scripts/mittaa-hybridi.mjs <testikysymykset.json>'); process.exit(1); }
  const key = (process.env.OPENROUTER_API_KEY || '').trim();
  if (!key) { console.error('Aseta OPENROUTER_API_KEY'); process.exit(1); }

  const vektoriPolku =
    process.argv.find((a) => a.startsWith('--vektorit='))?.split('=')[1] ?? VEKTORIT;

  const { chunkit, indeksi } = await lataaIndeksi(INDEKSI);
  const vekt = JSON.parse(await readFile(vektoriPolku, 'utf8'));
  const kartta = new Map(chunkit.map((c) => [c.id, c]));

  // Uusi muoto on int8+base64; vanhat tiedostot ovat pelkkia lukutaulukoita.
  const vIndeksi = vekt.idt.map((id, i) => ({
    id,
    v: vekt.koodaus === 'int8-base64' ? pura(vekt.vektorit[i], vekt.skaalat[i]) : vekt.vektorit[i],
  }));

  const kysymysData = JSON.parse((await readFile(kysymysPolku, 'utf8')).replace(/^﻿/, ''));
  const kysymykset = kysymysData.kysymykset.filter(
    (k) => k.luokka === 'ohjekysymys' && (k.odotetut ?? []).length > 0
  );

  console.log(`Hybridihaun mittaus`);
  console.log('===================');
  console.log(`Chunkkeja   ${chunkit.length}`);
  console.log(`Vektoreita  ${vIndeksi.length} (${vekt.malli}, ${vekt.ulottuvuuksia}d)`);
  console.log(`Kysymyksia  ${kysymykset.length}\n`);

  // Kysymysten vektorit yhdella kutsulla
  // Kysymysvektorien on tultava samasta mallista JA samasta ulottuvuusmaarasta
  // kuin chunkkien - muuten kosini ei ole maaritelty.
  const kysVektorit = await haeVektorit(
    kysymykset.map((k) => k.kysymys), key, vekt.malli, vekt.ulottuvuuksia
  );

  const menetelmat = ['BM25', 'Semanttinen', 'Hybridi (RRF)', 'Vuorottelu'];
  const tulokset = {};
  for (const m of menetelmat) tulokset[m] = { viritetyt: [], riippumattomat: [] };

  for (const [i, k] of kysymykset.entries()) {
    const bm = haeChunkit(indeksi, k.kysymys, 100).map((o) => o.chunk.id);
    const kv = kysVektorit[i];
    const sem = vIndeksi
      .map((x) => ({ id: x.id, p: kosini(kv, x.v) }))
      .sort((a, b) => b.p - a.p)
      .slice(0, 100)
      .map((x) => x.id);
    const hyb = rrf([bm, sem]);

    const ryhma = k.id <= 35 ? 'viritetyt' : 'riippumattomat';
    // Vuorottelu tehdaan sivutasolla, joten kummastakin haetaan reilusti sivuja
    const bmSivut = sivutasolle(bm, kartta, 20);
    const semSivut = sivutasolle(sem, kartta, 20);
    const sijat = {
      BM25: osui(bmSivut.slice(0, 5), k.odotetut),
      Semanttinen: osui(semSivut.slice(0, 5), k.odotetut),
      'Hybridi (RRF)': osui(sivutasolle(hyb, kartta, 5), k.odotetut),
      Vuorottelu: osui(vuorottele(bmSivut, semSivut, 5), k.odotetut),
    };
    for (const m of menetelmat) tulokset[m][ryhma].push(sijat[m]);
    if (yksityiskohdat && ryhma === 'riippumattomat') {
      rivit.push({ id: k.id, kysymys: k.kysymys, sijat, sem10: sivutasolle(sem, kartta, 10) });
    }
  }

  const kerro = (sijat) => {
    const n = sijat.length;
    return {
      n,
      r1: sijat.filter((s) => s === 1).length / n,
      r5: sijat.filter((s) => s >= 1 && s <= 5).length / n,
      mrr: sijat.reduce((a, s) => a + (s ? 1 / s : 0), 0) / n,
    };
  };
  const p = (x) => (Number.isFinite(x) ? (x * 100).toFixed(0) : '—').padStart(4) + ' %';
  const m3 = (x) => (Number.isFinite(x) ? x.toFixed(3) : '—').padStart(7);

  const nR = tulokset['BM25'].riippumattomat.length, nV = tulokset['BM25'].viritetyt.length;
  console.log(`                     RIIPPUMATTOMAT (${nR})${' '.repeat(Math.max(1, 8 - String(nR).length))}      VIRITETYT (${nV})`);
  console.log('menetelmä          rec@1  rec@5    MRR      rec@1  rec@5    MRR');
  console.log('-'.repeat(68));
  for (const m of menetelmat) {
    const r = kerro(tulokset[m].riippumattomat);
    const v = kerro(tulokset[m].viritetyt);
    console.log(
      m.padEnd(20) + p(r.r1) + p(r.r5) + m3(r.mrr) + '   ' +
      p(v.r1) + p(v.r5) + m3(v.mrr)
    );
  }
  console.log('-'.repeat(68));
  console.log('Vain riippumaton sarake on rehellinen mittari.');

  if (yksityiskohdat) {
    console.log('');
    console.log('Riippumattomat kysymykset, sijaluku top-5:ssa (0 = ei osunut)');
    console.log('  id  BM25  Sem  Hybr  Vuor  kysymys');
    for (const r of rivit) {
      const s = (x) => String(x || '-').padStart(4);
      console.log(`  ${String(r.id).padStart(3)} ${s(r.sijat.BM25)} ${s(r.sijat.Semanttinen)} ${s(r.sijat['Hybridi (RRF)'])} ${s(r.sijat.Vuorottelu)}  ${r.kysymys.slice(0, 55)}`);
    }
    // Semanttisen haun top-10 niille, jotka eivat osuneet top-5:een
    for (const r of rivit) {
      if (r.sijat.Semanttinen) continue;
      console.log(`\n  #${r.id} ${r.kysymys}`);
      console.log(`    odotettu: ${(kysymykset.find((k) => k.id === r.id).odotetut || []).join(', ')}`);
      r.sem10.forEach((u, i) => console.log(`    ${i + 1}. ${u}`));
    }
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
