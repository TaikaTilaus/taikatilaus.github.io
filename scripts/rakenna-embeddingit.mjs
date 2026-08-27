#!/usr/bin/env node
/**
 * Laskee embeddingit ohjeindeksin chunkeille.
 *
 *   $env:OPENROUTER_API_KEY = "..."
 *   node scripts/rakenna-embeddingit.mjs
 *
 * Tuottaa static/ohjeindeksi-vektorit.json (gitignore).
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

const JUURI = join(dirname(fileURLToPath(import.meta.url)), '..');
const INDEKSI = join(JUURI, 'static', 'ohjeindeksi.json');
const TULOS = join(JUURI, 'static', 'ohjeindeksi-vektorit.json');

const API = 'https://openrouter.ai/api/v1/embeddings';
const MALLI = 'openai/text-embedding-3-small';
const ERA = 64;

function avain() {
  const k = process.env.OPENROUTER_API_KEY;
  if (!k) {
    console.error('Aseta avain: $env:OPENROUTER_API_KEY = "sk-or-..."');
    process.exit(1);
  }
  return k.trim();
}

export async function haeVektorit(tekstit, key, malli = MALLI) {
  const v = await fetch(API, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: malli, input: tekstit }),
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
export function chunkinTeksti(c) {
  const polku = (c.polku || []).join(' > ');
  const avainsanat = (c.avainsanat || []).join(', ');
  return [polku, c.kuvaus || '', avainsanat, c.teksti].filter(Boolean).join('\n').slice(0, 6000);
}

async function main() {
  const key = avain();
  const data = JSON.parse(await readFile(INDEKSI, 'utf8'));
  const chunkit = data.chunkit.filter((c) => c.tyyppi !== 'versiotiedote');

  console.log(`Lasketaan embeddingit ${chunkit.length} chunkille (${MALLI})`);

  const vektorit = [];
  for (let i = 0; i < chunkit.length; i += ERA) {
    const era = chunkit.slice(i, i + ERA);
    const v = await haeVektorit(era.map(chunkinTeksti), key);
    vektorit.push(...v);
    process.stdout.write(`  ${Math.min(i + ERA, chunkit.length)} / ${chunkit.length}\r`);
  }
  console.log('');

  // Talletetaan 5 desimaalilla - tarkkuus riittaa kosinille, koko puolittuu
  const ulos = {
    malli: MALLI,
    luotu: new Date().toISOString(),
    ulottuvuuksia: vektorit[0].length,
    idt: chunkit.map((c) => c.id),
    vektorit: vektorit.map((v) => v.map((x) => Number(x.toFixed(5)))),
  };

  await writeFile(TULOS, JSON.stringify(ulos), 'utf8');
  const koko = JSON.stringify(ulos).length / 1024 / 1024;
  console.log(`Kirjoitettu ${TULOS} (${koko.toFixed(1)} MB, ${vektorit[0].length} ulottuvuutta)`);
}

// Aja main vain kun tiedosto suoritetaan suoraan, ei kun se importataan.
// process.argv[1] puuttuu kun node ajetaan --input-type=module -e:lla.
if (process.argv[1]?.endsWith('rakenna-embeddingit.mjs')) {
  main().catch((e) => { console.error(e); process.exit(1); });
}
