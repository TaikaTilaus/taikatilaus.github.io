/**
 * Jaettu hakukerros: BM25 ohjeindeksin yli, suomen kevyt normalisointi.
 *
 * Kaytetaan seka mittauksessa (mittaa-hakulaatu.mjs) etta mallien
 * arvioinnissa (arvioi-mallit.mjs). Yhteinen moduuli varmistaa, etta
 * molemmat hakevat samalla tavalla - muuten vertailu ei kerro mitaan.
 *
 * Sama logiikka toteutetaan aikanaan VB.NETilla sovelluksen puolella
 * (Tukichatbot-suunnitelma.md, vaihe 2).
 */

import { readFile } from 'node:fs/promises';

/**
 * Suomi on taivuttava ja yhdyssanoja suosiva kieli: "suoritusten kohdistaminen"
 * ja "kohdistan maksun" eivat jaa yhtaan yhteista sanamuotoa. Taysi morfologinen
 * analyysi olisi ylimitoitettu, joten typistetaan sanat vartaloon.
 */
export const VARSI_PITUUS = 6;

const TURHAT = new Set([
  'ja', 'tai', 'se', 'on', 'ei', 'kun', 'jos', 'etta', 'että', 'kuin', 'myos', 'myös',
  'voi', 'saa', 'niin', 'mutta', 'sen', 'joka', 'jonka', 'jossa',
  'ole', 'olla', 'ovat', 'oli', 'nyt', 'vain', 'sita', 'sitä', 'tama', 'tämä',
  'han', 'hän', 'me', 'te', 'he', 'ne', 'kaikki', 'jokainen',
  'miten', 'mista', 'mistä', 'mihin', 'miksi', 'missa', 'missä', 'milloin', 'kuinka',
  'taikatilaus', 'ohjelmisto', 'jarjestelma', 'järjestelmä', 'palvelu',
]);

export function pilko(teksti) {
  return (teksti || '')
    .toLowerCase()
    .replace(/[^a-zåäö0-9\s-]/g, ' ')
    .split(/[\s-]+/)
    .filter((s) => s.length >= 3 && !TURHAT.has(s))
    .map((s) => (s.length > VARSI_PITUUS ? s.slice(0, VARSI_PITUUS) : s));
}

const K1 = 1.5;
const B = 0.75;

// Otsikko ja avainsanat ovat vahvempi signaali kuin leipateksti,
// koska ne on kirjoitettu kuvaamaan sisaltoa.
const KENTAT = [
  { nimi: 'otsikko', paino: 3.0 },
  { nimi: 'polku', paino: 2.0 },
  { nimi: 'avainsanat', paino: 3.0 },
  { nimi: 'kuvaus', paino: 2.0 },
  { nimi: 'teksti', paino: 1.0 },
];

export function rakennaIndeksi(chunkit) {
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
  const df = new Map();
  for (const d of dokumentit) {
    for (const sana of d.termit.keys()) df.set(sana, (df.get(sana) ?? 0) + 1);
  }
  return { dokumentit, keskipituus, df, n: dokumentit.length };
}

/** Palauttaa chunkit pisteytettyna, parhaat ensin. */
export function haeChunkit(indeksi, kysely, maara = 5) {
  const { dokumentit, keskipituus, df, n } = indeksi;
  const termit = pilko(kysely);
  const pisteet = [];

  for (const d of dokumentit) {
    let p = 0;
    for (const t of termit) {
      const tf = d.termit.get(t);
      if (!tf) continue;
      const dfT = df.get(t) ?? 0;
      const idf = Math.log(1 + (n - dfT + 0.5) / (dfT + 0.5));
      p += idf * ((tf * (K1 + 1)) / (tf + K1 * (1 - B + B * (d.pituus / keskipituus))));
    }
    if (p > 0) pisteet.push({ chunk: d.chunk, p });
  }

  pisteet.sort((a, b) => b.p - a.p);
  return pisteet.slice(0, maara);
}

/** Sama haku sivutasolle tiivistettyna - mittausta varten. */
export function haeSivut(indeksi, kysely, maara = 5) {
  const osumat = haeChunkit(indeksi, kysely, 200);
  const nahty = new Set();
  const sivut = [];
  for (const { chunk, p } of osumat) {
    const url = chunk.url.split('#')[0];
    if (nahty.has(url)) continue;
    nahty.add(url);
    sivut.push({ url, otsikko: chunk.otsikko, p });
    if (sivut.length >= maara) break;
  }
  return sivut;
}

/**
 * Lataa indeksin. Versiotiedotteet suodatetaan oletuksena pois: mittaus
 * 24.8.2026 osoitti niiden nostavan kohinaa (recall@5 0,89 -> 0,94).
 */
export async function lataaIndeksi(polku, { kaikkiTyypit = false } = {}) {
  const data = JSON.parse(await readFile(polku, 'utf8'));
  const chunkit = kaikkiTyypit
    ? data.chunkit
    : data.chunkit.filter((c) => c.tyyppi !== 'versiotiedote');
  return { data, chunkit, indeksi: rakennaIndeksi(chunkit) };
}
