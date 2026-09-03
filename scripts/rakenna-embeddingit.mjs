#!/usr/bin/env node
/**
 * Laskee embeddingit ohjeindeksin chunkeille.
 *
 *   $env:OPENROUTER_API_KEY = "..."
 *   node scripts/rakenna-embeddingit.mjs
 *
 * Tuottaa static/ohjeindeksi-vektorit.json, joka commitoidaan: buildilla
 * ei ole API-avainta, joten se ei voi laskea vektoreita itse. Syotteena
 * oleva static/ohjeindeksi.json sen sijaan on gitignoressa ja rakennetaan
 * buildissa - aja scripts/rakenna-ohjeindeksi.mjs ensin.
 *
 * Miksi: BM25 yksin loysi oikean sivun vain 38 %:ssa riippumattomista
 * testikysymyksista (mittaus 27.8.2026). Oikea sivu on indeksissa mutta
 * sijoittuu liian alas - kyse on jarjestyksesta, ei kattavuudesta.
 * Semanttinen haku taydentaa leksikaalista: "nakoislehti" ja "digilehti"
 * ovat lahella toisiaan vektoriavaruudessa, vaikka eivat jaa merkkiakaan.
 */

import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const JUURI = join(dirname(fileURLToPath(import.meta.url)), '..');
const INDEKSI = join(JUURI, 'static', 'ohjeindeksi.json');
const TULOS = join(JUURI, 'static', 'ohjeindeksi-vektorit.json');

const API = 'https://openrouter.ai/api/v1/embeddings';
const MALLI = 'openai/text-embedding-3-small';
const ERA = 64;

// text-embedding-3-small on Matryoshka-koulutettu, joten ulottuvuuksia VOISI
// pudottaa - mutta mittaus 27.8.2026 osoitti sen maksavan: recall@5 viritetylla
// setilla 89 % (1536d) -> 81 % (512d) -> 70 % (256d). Koko ratkaistaan sen
// sijaan kvantisoinnilla, joka ei maksa mitaan: int8 antaa saman recallin
// kuin liukuluvut ja kuudesosan koosta.
const ULOTTUVUUDET = 1536;

/**
 * Tiiviste chunkkien sisallosta. Buildi vertaa tata tuoreeseen indeksiin ja
 * kaatuu, jos ne eroavat - muuten vanhentuneet vektorit jaisivat huomaamatta
 * ja haku osuisi sisaltoon, jota ei enaa ole.
 */
export function laskeTiiviste(chunkit) {
  const h = createHash('sha256');
  // Erottimena NUL, koska sita ei voi esiintya sisallossa. Kirjoitettuna
  // escape-sekvenssina: lahdekoodissa nakyva merkki on sama kuin tavu.
  for (const c of chunkit) h.update(c.id + '\0' + chunkinTeksti(c) + '\0');
  return h.digest('hex').slice(0, 16);
}

function avain() {
  const k = process.env.OPENROUTER_API_KEY;
  if (!k) {
    console.error('Aseta avain: $env:OPENROUTER_API_KEY = "sk-or-..."');
    process.exit(1);
  }
  return k.trim();
}

export async function haeVektorit(tekstit, key, malli = MALLI, ulottuvuudet = ULOTTUVUUDET) {
  const v = await fetch(API, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: malli, input: tekstit, dimensions: ulottuvuudet }),
  });
  if (!v.ok) throw new Error(`${v.status}: ${(await v.text()).slice(0, 200)}`);
  const d = await v.json();
  if (d.error) throw new Error(d.error.message || JSON.stringify(d.error));
  // Jarjestys ei ole taattu - lajitellaan index-kentan mukaan
  return d.data.sort((a, b) => a.index - b.index).map((x) => x.embedding);
}

/**
 * Chunkin esitys embeddingille. Otsikkoleivanmurut mukaan, koska ne kertovat
 * kontekstin jota pelkka leipateksti ei valita ("Asetukset > Postitus > Vakioniput").
 */
/**
 * Kvantisoi vektorin int8:aan ja koodaa base64:ksi.
 *
 * Yksi skaala per vektori riittaa: embeddingin komponentit ovat samaa
 * suuruusluokkaa. Tavu talletetaan siirrettyna (x + 128), jolloin lukija saa
 * tavallisen etumerkittoman tavun eika etumerkillisen tulkinnan varaan jaada.
 */
export function kvantisoi(v) {
  const skaala = Math.max(...v.map(Math.abs)) / 127;
  const tavut = Buffer.alloc(v.length);
  for (let i = 0; i < v.length; i++) tavut[i] = Math.round(v[i] / skaala) + 128;
  return { skaala: Number(skaala.toExponential(6)), data: tavut.toString('base64') };
}

/** Purkaa kvantisoi():n tuottaman esityksen takaisin liukuluvuiksi. */
export function pura(data, skaala) {
  const tavut = Buffer.from(data, 'base64');
  const v = new Float64Array(tavut.length);
  for (let i = 0; i < tavut.length; i++) v[i] = (tavut[i] - 128) * skaala;
  return v;
}

export function chunkinTeksti(c) {
  const polku = (c.polku || []).join(' > ');
  const avainsanat = (c.avainsanat || []).join(', ');
  return [polku, c.kuvaus || '', avainsanat, c.teksti].filter(Boolean).join('\n').slice(0, 6000);
}

function lippu(nimi, oletus) {
  const o = process.argv.find((a) => a.startsWith(`--${nimi}=`));
  return o ? o.split('=').slice(1).join('=') : oletus;
}

async function main() {
  const key = avain();
  const ulottuvuudet = Number(lippu('ulottuvuudet', ULOTTUVUUDET));
  const tulosPolku = lippu('ulos', TULOS);

  const data = JSON.parse(await readFile(INDEKSI, 'utf8'));
  const chunkit = data.chunkit.filter((c) => c.tyyppi !== 'versiotiedote');

  console.log(`Lasketaan embeddingit ${chunkit.length} chunkille (${MALLI}, ${ulottuvuudet}d)`);

  const vektorit = [];
  for (let i = 0; i < chunkit.length; i += ERA) {
    const era = chunkit.slice(i, i + ERA);
    const v = await haeVektorit(era.map(chunkinTeksti), key, MALLI, ulottuvuudet);
    vektorit.push(...v);
    process.stdout.write(`  ${Math.min(i + ERA, chunkit.length)} / ${chunkit.length}\r`);
  }
  console.log('');

  const kvantisoidut = vektorit.map(kvantisoi);

  const ulos = {
    malli: MALLI,
    luotu: new Date().toISOString(),
    ulottuvuuksia: vektorit[0].length,
    koodaus: 'int8-base64',
    tiiviste: laskeTiiviste(chunkit),
    idt: chunkit.map((c) => c.id),
    skaalat: kvantisoidut.map((k) => k.skaala),
    vektorit: kvantisoidut.map((k) => k.data),
  };

  await writeFile(tulosPolku, JSON.stringify(ulos), 'utf8');
  const koko = JSON.stringify(ulos).length / 1024 / 1024;
  console.log(`Kirjoitettu ${tulosPolku} (${koko.toFixed(2)} MB, ${vektorit[0].length} ulottuvuutta, tiiviste ${ulos.tiiviste})`);
}

// Aja main vain kun tiedosto suoritetaan suoraan, ei kun se importataan.
// process.argv[1] puuttuu kun node ajetaan --input-type=module -e:lla.
if (process.argv[1]?.endsWith('rakenna-embeddingit.mjs')) {
  main().catch((e) => { console.error(e); process.exit(1); });
}
