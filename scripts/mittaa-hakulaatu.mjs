#!/usr/bin/env node
/**
 * Mittaa hakulaadun testikysymyksilla.
 *
 *   node scripts/mittaa-hakulaatu.mjs <testikysymykset.json> [--algolia] [--yksityiskohdat]
 *
 * Vertailtavat menetelmat:
 *   BM25       chunkkien yli, suomen kevyt normalisointi
 *   Algolia    nykyinen DocSearch-indeksi (--algolia)
 *
 * Mittarit:
 *   recall@1   onko oikea sivu ensimmaisena
 *   recall@5   onko oikea sivu viiden parhaan joukossa   <- etenemiskriteeri >= 0,85
 *   MRR        oikean osuman kaanteinen sijaluku, keskiarvo
 *
 * Suunnitelma: artifacts/TaikaTilaus/Tukichatbot-suunnitelma.md, vaihe 0.4
 */

import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const JUURI = join(dirname(fileURLToPath(import.meta.url)), '..');
const INDEKSI = join(JUURI, 'static', 'ohjeindeksi.json');

// Algolian julkinen hakuavain docusaurus.config.js:sta
const ALGOLIA = {
  appId: '21SMQAJV6J',
  apiKey: '9784c5bff78f1c6955a87080cc738edf',
  indexName: 'crawler_support.taikatilaus.fi',
};

// ---------------------------------------------------------------------------
// Suomen kevyt normalisointi
// ---------------------------------------------------------------------------

/**
 * Suomi on taivuttava ja yhdyssanoja suosiva kieli: "suoritusten kohdistaminen"
 * ja "kohdistan maksun" eivat jaa yhtaan yhteista sanamuotoa. Taysi morfologinen
 * analyysi olisi ylimitoitettu, joten typistetaan sanat vartaloon.
 *
 * Typistys 6 merkkiin osuu useimpiin suomen vartaloihin: suoritus/suorituksen/
 * suorituksia -> "suorit". Karkea mutta deterministinen ja mitattavissa.
 */
const VARSI_PITUUS = 6;

// Sanoja jotka esiintyvat lahes joka chunkissa - eivat erottele mitaan
const TURHAT = new Set([
  'ja', 'tai', 'se', 'on', 'ei', 'kun', 'jos', 'etta', 'että', 'kuin', 'myos', 'myös',
  'voi', 'saa', 'jos', 'niin', 'mutta', 'sen', 'tai', 'joka', 'jonka', 'jossa',
  'ole', 'olla', 'ovat', 'oli', 'nyt', 'vain', 'sita', 'sitä', 'tama', 'tämä',
  'han', 'hän', 'me', 'te', 'he', 'ne', 'kaikki', 'jokainen',
  'miten', 'mista', 'mistä', 'mihin', 'miksi', 'missa', 'missä', 'milloin', 'kuinka',
  'taikatilaus', 'ohjelmisto', 'jarjestelma', 'järjestelmä', 'palvelu',
]);

function pilko(teksti) {
  return (teksti || '')
    .toLowerCase()
    .replace(/[^a-zåäö0-9\s-]/g, ' ')
    .split(/[\s-]+/)
    .filter((s) => s.length >= 3 && !TURHAT.has(s))
    .map((s) => (s.length > VARSI_PITUUS ? s.slice(0, VARSI_PITUUS) : s));
}

// ---------------------------------------------------------------------------
// BM25
// ---------------------------------------------------------------------------

const K1 = 1.5;
const B = 0.75;

// Kentat ja niiden painot. Otsikko ja avainsanat ovat vahvempi signaali
// kuin leipateksti, koska ne on kirjoitettu kuvaamaan sisaltoa.
const KENTAT = [
  { nimi: 'otsikko', paino: 3.0 },
  { nimi: 'polku', paino: 2.0 },
  { nimi: 'avainsanat', paino: 3.0 },
  { nimi: 'kuvaus', paino: 2.0 },
  { nimi: 'teksti', paino: 1.0 },
];

function rakennaIndeksi(chunkit) {
  const dokumentit = chunkit.map((c) => {
    const kentat = {
      otsikko: pilko(c.otsikko),
      polku: pilko((c.polku || []).join(' ')),
      avainsanat: pilko((c.avainsanat || []).join(' ')),
      kuvaus: pilko(c.kuvaus || ''),
      teksti: pilko(c.teksti),
    };
    const painotettu = new Map();
    let pituus = 0;
    for (const { nimi, paino } of KENTAT) {
      for (const sana of kentat[nimi]) {
        painotettu.set(sana, (painotettu.get(sana) ?? 0) + paino);
        pituus += paino;
      }
    }
    return { chunk: c, termit: painotettu, pituus };
  });

  const keskipituus = dokumentit.reduce((s, d) => s + d.pituus, 0) / dokumentit.length;

  // dokumenttifrekvenssi
  const df = new Map();
  for (const d of dokumentit) {
    for (const sana of d.termit.keys()) df.set(sana, (df.get(sana) ?? 0) + 1);
  }

  return { dokumentit, keskipituus, df, n: dokumentit.length };
}

function haeBM25(indeksi, kysely, maara = 5) {
  const { dokumentit, keskipituus, df, n } = indeksi;
  const termit = pilko(kysely);
  const pisteet = [];

  for (const d of dokumentit) {
    let p = 0;
    for (const t of termit) {
      const tf = d.termit.get(t);
      if (!tf) continue;
      const idf = Math.log(1 + (n - (df.get(t) ?? 0) + 0.5) / ((df.get(t) ?? 0) + 0.5));
      p += idf * ((tf * (K1 + 1)) / (tf + K1 * (1 - B + B * (d.pituus / keskipituus))));
    }
    if (p > 0) pisteet.push({ url: d.chunk.url.split('#')[0], otsikko: d.chunk.otsikko, p });
  }

  pisteet.sort((a, b) => b.p - a.p);

  // Tiivistetaan sivutasolle: chunkkeja voi olla samalta sivulta useita
  const nahty = new Set();
  const sivut = [];
  for (const osuma of pisteet) {
    if (nahty.has(osuma.url)) continue;
    nahty.add(osuma.url);
    sivut.push(osuma);
    if (sivut.length >= maara) break;
  }
  return sivut;
}

// ---------------------------------------------------------------------------
// Algolia
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Mittaus
// ---------------------------------------------------------------------------

function arvioi(osumat, odotetut) {
  for (let i = 0; i < osumat.length; i++) {
    if (odotetut.includes(osumat[i].url)) return i + 1; // sijaluku 1-alkuinen
  }
  return 0; // ei osumaa
}

function raportoi(nimi, tulokset) {
  const n = tulokset.length;
  const r1 = tulokset.filter((t) => t.sija === 1).length / n;
  const r5 = tulokset.filter((t) => t.sija >= 1 && t.sija <= 5).length / n;
  const mrr = tulokset.reduce((s, t) => s + (t.sija ? 1 / t.sija : 0), 0) / n;
  return { nimi, r1, r5, mrr, n };
}

async function main() {
  const kysymysPolku = process.argv[2];
  const kaytaAlgoliaa = process.argv.includes('--algolia');
  const yksityiskohdat = process.argv.includes('--yksityiskohdat');

  if (!kysymysPolku) {
    console.error('Kaytto: node scripts/mittaa-hakulaatu.mjs <testikysymykset.json> [--algolia] [--yksityiskohdat]');
    process.exit(1);
  }

  // Versiotiedotteet ovat julkaisumuistiinpanoja, eivat ohjeita. Mittaus
  // 24.8.2026: niiden poisto nosti recall@5 0,89 -> 0,94 ja recall@1 0,28 -> 0,39.
  // Oletuksena pois; --kaikki ottaa ne mukaan vertailua varten.
  const kaikkiTyypit = process.argv.includes('--kaikki');

  const indeksiData = JSON.parse(await readFile(INDEKSI, 'utf8'));
  const kysymysData = JSON.parse((await readFile(kysymysPolku, 'utf8')).replace(/^﻿/, ''));

  if (!kaikkiTyypit) {
    const ennen = indeksiData.chunkit.length;
    indeksiData.chunkit = indeksiData.chunkit.filter((c) => c.tyyppi !== 'versiotiedote');
    indeksiData.chunkkeja = indeksiData.chunkit.length;
    console.log(`Versiotiedotteet suodatettu: ${ennen} -> ${indeksiData.chunkit.length} chunkkia (--kaikki ottaa mukaan)`);
  }

  const kysymykset = kysymysData.kysymykset.filter(
    (k) => k.luokka === 'ohjekysymys' && (k.odotetut ?? []).length > 0
  );

  console.log('Hakulaadun mittaus');
  console.log('==================');
  console.log(`Chunkkeja      ${indeksiData.chunkkeja}`);
  console.log(`Kysymyksia     ${kysymykset.length}`);
  console.log('');

  const indeksi = rakennaIndeksi(indeksiData.chunkit);

  const menetelmat = [{ nimi: 'BM25', hae: (q) => haeBM25(indeksi, q, 5) }];
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
      : 'ETENEMISKRITEERI EI TAYTY (< 0,85) -> avainsanat frontmatteriin ja mittaa uudelleen'
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

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
