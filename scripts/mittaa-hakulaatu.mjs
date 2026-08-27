#!/usr/bin/env node
/**
 * Mittaa hakulaadun testikysymyksilla.
 *
 *   node scripts/mittaa-hakulaatu.mjs <testikysymykset.json> [valinnat]
 *
 *   --algolia          vertaa nykyiseen DocSearch-indeksiin
 *   --kaikki           ota versiotiedotteet mukaan (oletuksena pois)
 *   --yksityiskohdat   listaa epaonnistuneet kysymykset
 *
 * Mittarit:
 *   recall@1   onko oikea sivu ensimmaisena
 *   recall@5   onko oikea sivu viiden parhaan joukossa   <- etenemiskriteeri >= 0,85
 *   MRR        oikean osuman kaanteinen sijaluku, keskiarvo
 *
 * Hakulogiikka on moduulissa haku.mjs, jota myos arvioi-mallit.mjs kayttaa.
 *
 * Suunnitelma: artifacts/TaikaTilaus/Tukichatbot-suunnitelma.md, vaihe 0.4
 */

import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { lataaIndeksi, haeSivut } from './haku.mjs';

const JUURI = join(dirname(fileURLToPath(import.meta.url)), '..');
const INDEKSI = join(JUURI, 'static', 'ohjeindeksi.json');

// Algolian julkinen hakuavain docusaurus.config.js:sta
const ALGOLIA = {
  appId: '21SMQAJV6J',
  apiKey: '9784c5bff78f1c6955a87080cc738edf',
  indexName: 'crawler_support.taikatilaus.fi',
};

async function haeAlgolia(kysely, maara = 5) {
  const url = `https://${ALGOLIA.appId}-dsn.algolia.net/1/indexes/${encodeURIComponent(ALGOLIA.indexName)}/query`;
  const vastaus = await fetch(url, {
    method: 'POST',
    headers: {
      'X-Algolia-Application-Id': ALGOLIA.appId,
      'X-Algolia-API-Key': ALGOLIA.apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ params: `query=${encodeURIComponent(kysely)}&hitsPerPage=20` }),
  });

  if (!vastaus.ok) throw new Error(`Algolia ${vastaus.status}: ${await vastaus.text()}`);
  const data = await vastaus.json();

  const nahty = new Set();
  const sivut = [];
  for (const osuma of data.hits ?? []) {
    let polku;
    try {
      polku = new URL(osuma.url).pathname.replace(/\/$/, '');
    } catch {
      continue;
    }
    if (nahty.has(polku)) continue;
    nahty.add(polku);
    sivut.push({ url: polku, otsikko: osuma.hierarchy?.lvl1 ?? osuma.hierarchy?.lvl0 ?? '' });
    if (sivut.length >= maara) break;
  }
  return sivut;
}

/** Palauttaa oikean osuman sijaluvun (1-alkuinen), 0 jos ei osumaa. */
function arvioi(osumat, odotetut) {
  for (let i = 0; i < osumat.length; i++) {
    if (odotetut.includes(osumat[i].url)) return i + 1;
  }
  return 0;
}

function raportoi(nimi, tulokset) {
  const n = tulokset.length;
  return {
    nimi,
    n,
    r1: tulokset.filter((t) => t.sija === 1).length / n,
    r5: tulokset.filter((t) => t.sija >= 1 && t.sija <= 5).length / n,
    mrr: tulokset.reduce((s, t) => s + (t.sija ? 1 / t.sija : 0), 0) / n,
  };
}

async function main() {
  const kysymysPolku = process.argv[2];
  const kaytaAlgoliaa = process.argv.includes('--algolia');
  const yksityiskohdat = process.argv.includes('--yksityiskohdat');
  const kaikkiTyypit = process.argv.includes('--kaikki');

  if (!kysymysPolku) {
    console.error('Kaytto: node scripts/mittaa-hakulaatu.mjs <testikysymykset.json> [--algolia] [--kaikki] [--yksityiskohdat]');
    process.exit(1);
  }

  const { data, chunkit, indeksi } = await lataaIndeksi(INDEKSI, { kaikkiTyypit });
  if (!kaikkiTyypit) {
    console.log(`Versiotiedotteet suodatettu: ${data.chunkit.length} -> ${chunkit.length} chunkkia (--kaikki ottaa mukaan)`);
  }

  const kysymysData = JSON.parse((await readFile(kysymysPolku, 'utf8')).replace(/^﻿/, ''));
  const kysymykset = kysymysData.kysymykset.filter(
    (k) => k.luokka === 'ohjekysymys' && (k.odotetut ?? []).length > 0
  );

  console.log('Hakulaadun mittaus');
  console.log('==================');
  console.log(`Chunkkeja      ${chunkit.length}`);
  console.log(`Kysymyksia     ${kysymykset.length}`);
  console.log('');

  const menetelmat = [{ nimi: 'BM25', hae: (q) => haeSivut(indeksi, q, 5) }];
  if (kaytaAlgoliaa) menetelmat.push({ nimi: 'Algolia', hae: (q) => haeAlgolia(q, 5) });

  const kaikki = [];
  for (const m of menetelmat) {
    const tulokset = [];
    for (const k of kysymykset) {
      let osumat = [];
      try {
        osumat = await m.hae(k.kysymys);
      } catch (e) {
        console.error(`  virhe (${m.nimi}, kysymys ${k.id}): ${e.message}`);
      }
      tulokset.push({ id: k.id, kysymys: k.kysymys, sija: arvioi(osumat, k.odotetut), osumat, odotetut: k.odotetut });
    }
    kaikki.push({ menetelma: m.nimi, tulokset, yhteenveto: raportoi(m.nimi, tulokset) });
  }

  console.log('Menetelma      recall@1   recall@5      MRR');
  console.log('-------------------------------------------');
  for (const { yhteenveto: y } of kaikki) {
    console.log(
      `${y.nimi.padEnd(14)} ${y.r1.toFixed(2).padStart(7)}   ${y.r5.toFixed(2).padStart(8)} ${y.mrr.toFixed(3).padStart(8)}`
    );
  }

  const paras = kaikki.reduce((a, b) => (b.yhteenveto.r5 > a.yhteenveto.r5 ? b : a));
  console.log('');
  console.log(`Paras: ${paras.menetelma}, recall@5 = ${paras.yhteenveto.r5.toFixed(2)}`);
  console.log(
    paras.yhteenveto.r5 >= 0.85
      ? 'ETENEMISKRITEERI TAYTTYY (>= 0,85) -> vaihe 1'
      : 'ETENEMISKRITEERI EI TAYTY (< 0,85) -> tarkista haku ja avainsanat'
  );

  if (yksityiskohdat) {
    for (const { menetelma, tulokset } of kaikki) {
      console.log('');
      console.log(`--- ${menetelma}: epaonnistuneet ---`);
      for (const t of tulokset.filter((x) => x.sija === 0 || x.sija > 5)) {
        console.log(`  ${t.id}. ${t.kysymys.slice(0, 62)}`);
        console.log(`     odotettu: ${t.odotetut.join(', ')}`);
        console.log(`     sai:      ${t.osumat.slice(0, 3).map((o) => o.url).join(', ') || '(ei osumia)'}`);
      }
    }
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
