#!/usr/bin/env node
/**
 * Varmistaa, etta static/ohjeindeksi-vektorit.json vastaa nykyista indeksia.
 *
 *   node scripts/tarkista-vektorit.mjs
 *
 * Vektorit generoidaan paikallisesti eika buildissa, koska generointi vaatii
 * API-avaimen: julkaisu ei saa riippua ulkoisesta palvelusta eika avainta
 * haluta CI:hin. Hinta on se, etta vektorit voivat jaada jalkeen, jos joku
 * muokkaa ohjetta ajamatta generointia.
 *
 * Tama skripti tekee siita aanekkaan virheen hiljaisen sijaan. Ilman sita
 * haku osuisi sisaltoon, jota ei enaa ole - ja se nakyisi vasta kayttajalle
 * vaarina vastauksina.
 */

import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { laskeTiiviste } from './rakenna-embeddingit.mjs';

const JUURI = join(dirname(fileURLToPath(import.meta.url)), '..');
const INDEKSI = join(JUURI, 'static', 'ohjeindeksi.json');
const VEKTORIT = join(JUURI, 'static', 'ohjeindeksi-vektorit.json');

const OHJE = `
  Aja:  node scripts/rakenna-embeddingit.mjs

  Vaatii ymparistomuuttujan OPENROUTER_API_KEY. Commitoi syntynyt
  static/ohjeindeksi-vektorit.json samassa muutoksessa ohjemuutosten kanssa.
`;

function kaada(viesti) {
  console.error(`\nVEKTORIT EIVAT VASTAA OHJEITA\n\n  ${viesti}\n${OHJE}`);
  process.exit(1);
}

async function lue(polku, mika) {
  try {
    return JSON.parse(await readFile(polku, 'utf8'));
  } catch (e) {
    if (e.code === 'ENOENT') kaada(`${mika} puuttuu: ${polku}`);
    throw e;
  }
}

const indeksi = await lue(INDEKSI, 'Ohjeindeksi');
const vektorit = await lue(VEKTORIT, 'Vektoritiedosto');

const chunkit = indeksi.chunkit.filter((c) => c.tyyppi !== 'versiotiedote');
const odotettu = laskeTiiviste(chunkit);

if (vektorit.tiiviste !== odotettu) {
  kaada(
    `Ohjeiden tiiviste on ${odotettu}, vektoritiedostossa ${vektorit.tiiviste ?? '(puuttuu)'}.\n` +
      `  Ohjeita on muutettu sen jalkeen kun vektorit viimeksi laskettiin.`
  );
}

if (vektorit.idt.length !== chunkit.length) {
  kaada(`Chunkkeja on ${chunkit.length}, vektoreita ${vektorit.idt.length}.`);
}

console.log(
  `Vektorit ajan tasalla (${chunkit.length} chunkkia, ${vektorit.ulottuvuuksia}d, tiiviste ${odotettu})`
);
