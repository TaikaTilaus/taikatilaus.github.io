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
 *
 * Kaadutaan kuitenkin vain siella missa asian voi korjata: paikallisessa
 * buildissa. CI:ssa (CI-ymparistomuuttuja) vanhentuneet vektorit ovat
 * varoitus, ei virhe - muuten yksikin ohjemuutos ilman embeddingien ajoa
 * estaisi koko sivuston julkaisun, vaikka itse ohjeet olisivat kunnossa.
 * Semanttinen haku jaa siksi hetkeksi jalkeen; sivusto ei jaa julkaisematta.
 *
 * Kaytoksen voi pakottaa ymparistomuuttujilla:
 *   VEKTORIT_TARKISTUS=varoita  - ei koskaan kaadu
 *   VEKTORIT_TARKISTUS=virhe    - kaatuu myos CI:ssa
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

const asetus = process.env.VEKTORIT_TARKISTUS;
const kaadetaan =
  asetus === 'virhe' ? true : asetus === 'varoita' ? false : !process.env.CI;

function kaada(viesti) {
  if (kaadetaan) {
    console.error(`\nVEKTORIT EIVAT VASTAA OHJEITA\n\n  ${viesti}\n${OHJE}`);
    process.exit(1);
  }

  console.warn(
    `\nVAROITUS: VEKTORIT EIVAT VASTAA OHJEITA\n\n  ${viesti}\n${OHJE}` +
      `  Build jatkuu, mutta semanttinen haku toimii vanhoilla vektoreilla\n` +
      `  siihen asti kunnes embeddingit ajetaan ja commitoidaan.\n`
  );
  // Nakyy Actions-ajon yhteenvedossa, ettei varoitus huku lokiin.
  if (process.env.GITHUB_ACTIONS) {
    const rivi = viesti.replace(/\s+/g, ' ').trim();
    console.log(
      `::warning title=Vektorit vanhentuneet::${rivi} Aja node scripts/rakenna-embeddingit.mjs ja commitoi static/ohjeindeksi-vektorit.json.`
    );
  }
  process.exit(0);
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
