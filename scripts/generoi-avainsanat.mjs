#!/usr/bin/env node
/**
 * Generoi description- ja keywords-kentat ohjesivujen frontmatteriin.
 *
 *   node scripts/generoi-avainsanat.mjs [--kirjoita]
 *
 * Ilman --kirjoita tulostaa vain ehdotukset. TULOKSET OVAT LUONNOKSIA:
 * vaara avainsana ohjaa kayttajan vaaraan ohjeeseen, joten ne pitaa lukea lapi.
 *
 * Miksi nain: BM25-haku typistaa sanat 6 merkkiin, joten taivutusmuodot
 * (suoritus / suorituksen / suorituksia) osuvat jo ilman avainsanoja.
 * Avainsanojen arvo on kahdessa muussa asiassa:
 *   1. SYNONYYMIT - asiakas sanoo "paattaminen", ohje sanoo "katkaisu"
 *   2. PAINO - keywords-kentalla on haussa 3x paino, joten sivun ydintermit
 *      nousevat sielta vahvemmin kuin leipatekstista
 *
 * Suunnitelma: Ohjesivuston-korjaukset-suunnitelma.md, tehtava 2
 */

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, relative, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const JUURI = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = join(JUURI, 'docs');

/**
 * Toimialan synonyymikartta: kun sivulla esiintyy avain, lisataan arvot.
 * Vasen puoli on dokumentin kieli, oikea asiakkaan kieli.
 * Tama on kasin kirjoitettu ja siksi taman skriptin arvokkain osa.
 */
const SYNONYYMIT = [
  [/katkais/i,        ['päättäminen', 'lopettaminen', 'peruminen', 'peruutus', 'irtisanominen']],
  [/suorit/i,         ['maksu', 'maksusuoritus', 'kohdistus', 'kohdistaminen', 'viitesuoritus']],
  [/hyvity/i,         ['hyvityslasku', 'palautus', 'mitätöinti']],
  [/näköisleh|digileh|digituo/i, ['näköislehti', 'digilehti', 'digitilaus', 'e-lehti', 'verkkolehti']],
  [/vakionipp|nipp/i, ['nippu', 'niput', 'kimppu', 'lehtinippu']],
  [/postitu|jakelu/i, ['jakelu', 'toimitus', 'lehden toimitus']],
  [/lasku/i,          ['laskutus', 'veloitus', 'laskuttaminen']],
  [/asiaka|kontakt/i, ['tilaaja', 'asiakas', 'kontakti', 'asiakaskortti']],
  [/tunnu/i,          ['käyttäjätunnus', 'lukutunnus', 'digitunnus', 'kirjautuminen']],
  [/keskeyt/i,        ['tauko', 'tauotus', 'väliaikainen keskeytys']],
  [/osoite/i,         ['osoitteenmuutos', 'muutto', 'toimitusosoite']],
  [/raport/i,         ['listaus', 'kooste', 'yhteenveto', 'luettelo', 'tuloste']],
  [/eräpäiv/i,        ['maksupäivä', 'eräpäivän siirto']],
  [/muistutu|perint/i,['karhu', 'karhukirje', 'maksumuistutus', 'perintä']],
  [/tilausjaks|tilauskau/i, ['tilauskausi', 'kausi', 'jakso']],
  [/kestotila/i,      ['kesto', 'jatkuva tilaus']],
  [/määräaika/i,      ['määräaikainen', 'määräaikaistilaus']],
  [/varhaisjak/i,     ['aamujakelu', 'varhaisjakelu', 'jakelureitti']],
  [/ilmoitu/i,        ['mainos', 'ilmoitusmyynti', 'mediamyynti']],
  [/tiliöin|kirjanpi/i, ['tiliöinti', 'kirjanpito', 'tili', 'alv']],
  [/saldo/i,          ['ennakkomaksu', 'saldo', 'hyvitys']],
  [/haku|hakuehto/i,  ['haku', 'hakuehto', 'suodatus', 'etsiminen']],
];

const TURHAT = new Set([
  // yleiset kayttoliittymatermit
  'sivu', 'kohta', 'tieto', 'tiedot', 'kenttä', 'kentät', 'valinta', 'painike', 'näkymä',
  'välilehti', 'valikko', 'esimerkki', 'yleistä', 'yleistietoa', 'yleiskatsaus', 'huomaa',
  'taikatilaus', 'ohjelmisto', 'järjestelmä', 'palvelu', 'käyttö', 'ohje', 'ohjeet',
  'sekä', 'joka', 'jossa', 'kaikki', 'muut', 'uusi', 'vanha', 'oikea', 'vasen',
  // kysymyssanat: harvinaisia sivutasolla (matala DF) mutta hyodyttomia avainsanoina,
  // joten dokumenttifrekvenssi ei karsi niita - tarvitaan nimenomainen lista
  'miten', 'kuinka', 'mistä', 'missä', 'mihin', 'miksi', 'milloin', 'voiko', 'voinko',
  'voitteko', 'onko', 'saako', 'saanko', 'pitääkö', 'onnistuuko', 'miksei', 'siirtyvätkö',
  'tuleeko', 'kannattaako', 'täytyykö',
  // yleisverbit ja taytesanat
  'tehdä', 'teen', 'haluan', 'lisään', 'lisätä', 'lähetän', 'selvitän', 'näen', 'löydän',
  'toimii', 'tulee', 'tulevat', 'menee', 'kannattaa', 'pitäisi', 'täytyy', 'olisi',
  'enemmän', 'vähemmän', 'paitsi', 'niissä', 'niiden', 'jotka', 'jonka', 'mutta',
  'vanhat', 'uudet', 'itse', 'sitten', 'aina', 'yleensä', 'esim', 'esimerkiksi',
  // tekninen roska
  'iframe', 'youtube', 'mailto', 'https', 'http', 'width', 'height', 'align', 'style',
  'allowfullscreen', 'frameborder', 'embed',
]);

function normalisoi(t) {
  const b = t.charCodeAt(0) === 0xfeff ? t.slice(1) : t;
  return b.replace(/\r\n?/g, '\n');
}

function lueFrontmatter(raaka) {
  const teksti = normalisoi(raaka);
  if (!teksti.startsWith('---')) return null;
  const loppu = teksti.indexOf('\n---', 3);
  if (loppu === -1) return null;
  const lohko = teksti.slice(3, loppu).replace(/^\n/, '');
  const sisalto = teksti.slice(teksti.indexOf('\n', loppu + 1) + 1);
  const avaimet = new Set();
  for (const rivi of lohko.split('\n')) {
    const m = rivi.match(/^([a-zA-Z_][a-zA-Z0-9_]*):/);
    if (m) avaimet.add(m[1]);
  }
  return { lohko, sisalto, avaimet };
}

/**
 * Poimii sivun ydintermit TF-IDF-tyylisesti.
 *
 * Kiintea poissulkulista ei riita: "miten", "kuinka", "asiakkaalle", "tehda"
 * ovat yleisia mutta eivat erottele mitaan. Dokumenttifrekvenssi hoitaa taman
 * automaattisesti - termi joka esiintyy monella sivulla saa matalan pisteen.
 */
/** Poistaa kuvat, linkit ja HTML:n ennen termipoimintaa - muuten mukaan tulee
 *  tiedostonimia ("katkaisun-syyt2") ja upotusten attribuutteja. */
function riisu(md) {
  return md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')      // kuvat, myos alt-teksti
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')    // linkit -> linkkiteksti
    .replace(/<[^>]+>/g, ' ')                   // html
    .replace(/```[\s\S]*?```/g, ' ')            // koodilohkot
    .replace(/`[^`]*`/g, ' ');
}

function laskeTermit(sisalto) {
  const puhdas = riisu(sisalto);
  const laskuri = new Map();
  const lisaa = (teksti, paino) => {
    for (const raaka of (teksti || '').split(/[^A-Za-zÅÄÖåäö-]+/)) {
      const s = raaka.toLowerCase().replace(/^-+|-+$/g, '');
      // hylkaa numerot, tiedostonimijaanteet ja liian lyhyet
      if (s.length < 5 || s.length > 24 || TURHAT.has(s)) continue;
      if (/\d/.test(s) || /--/.test(s)) continue;
      laskuri.set(s, (laskuri.get(s) ?? 0) + paino);
    }
  };
  for (const m of puhdas.matchAll(/^#{2,4}\s+(.+)$/gm)) lisaa(m[1], 4);
  for (const m of puhdas.matchAll(/\*\*([^*]{3,40})\*\*/g)) lisaa(m[1], 2);
  lisaa(puhdas.replace(/^#{1,6}.*$/gm, ''), 1);
  return laskuri;
}

/** Yhdistaa saman vartalon muodot; pisin muoto edustaa vartaloa. */
function vartaloita(laskuri) {
  const v = new Map();
  for (const [sana, n] of laskuri) {
    const k = sana.slice(0, 6);
    const nyk = v.get(k);
    if (!nyk) v.set(k, { sana, n });
    else v.set(k, { sana: sana.length > nyk.sana.length ? sana : nyk.sana, n: nyk.n + n });
  }
  return v;
}

function poimiTermit(vartalot, df, sivuja) {
  const pisteet = [];
  for (const [k, { sana, n }] of vartalot) {
    const d = df.get(k) ?? 1;
    if (d > sivuja * 0.35) continue;            // liian yleinen erottelemaan
    pisteet.push({ sana, p: n * Math.log(sivuja / d) });
  }
  return pisteet.sort((a, b) => b.p - a.p).map((x) => x.sana);
}

function synonyymit(sisalto, otsikko) {
  const kohde = otsikko + ' ' + sisalto.slice(0, 4000);
  const ulos = new Set();
  for (const [kuvio, sanat] of SYNONYYMIT) {
    if (kuvio.test(kohde)) sanat.forEach((s) => ulos.add(s));
  }
  return [...ulos];
}

/** Rakentaa kuvauksen otsikosta ja paaotsikoista. Ei koloneita - rikkoisi YAMLin. */
function teeKuvaus(otsikko, sisalto) {
  const alaotsikot = [...sisalto.matchAll(/^#{2,3}\s+(.+)$/gm)]
    .map((m) => m[1].replace(/[*`]/g, '').trim())
    .filter((s) => s.length > 3 && !/^\d+\.?$/.test(s) && !TURHAT.has(s.toLowerCase()))
    .slice(0, 3);

  let kuvaus = alaotsikot.length
    ? `${otsikko}: ${alaotsikot.join(', ')}.`
    : `${otsikko}.`;

  kuvaus = kuvaus.replace(/:/g, ' —').replace(/\s+/g, ' ').trim();
  if (kuvaus.length > 155) kuvaus = kuvaus.slice(0, 152).replace(/[\s,]+$/, '') + '...';
  return kuvaus;
}

async function etsiMd(hakemisto) {
  const ulos = [];
  for (const a of await readdir(hakemisto, { withFileTypes: true })) {
    const p = join(hakemisto, a.name);
    if (a.isDirectory()) ulos.push(...(await etsiMd(p)));
    else if (a.name.endsWith('.md')) ulos.push(p);
  }
  return ulos;
}

async function main() {
  const kirjoita = process.argv.includes('--kirjoita');
  // Kokeilua varten: jatetaan koneellinen termipoiminta pois ja kaytetaan
  // pelkkaa kasin kirjoitettua synonyymikarttaa.
  const vainSynonyymit = process.argv.includes('--vain-synonyymit');
  const tiedostot = (await etsiMd(DOCS)).sort()
    .filter((t) => !relative(DOCS, t).split(sep).join('/').startsWith('versiotiedotteet/'));

  // 1. ajo: dokumenttifrekvenssi koko korpuksesta
  const sivut = [];
  const df = new Map();
  for (const tiedosto of tiedostot) {
    const raaka = await readFile(tiedosto, 'utf8');
    const fm = lueFrontmatter(raaka);
    if (!fm) { console.log(`  OHITETTU (ei frontmatteria): ${relative(DOCS, tiedosto)}`); continue; }
    const vartalot = vartaloita(laskeTermit(fm.sisalto));
    for (const k of vartalot.keys()) df.set(k, (df.get(k) ?? 0) + 1);
    sivut.push({ tiedosto, raaka, fm, vartalot });
  }

  // 2. ajo: pisteytys ja kirjoitus
  let kasitelty = 0, ohitettu = 0;
  for (const { tiedosto, raaka, fm, vartalot } of sivut) {
    const suht = relative(DOCS, tiedosto).split(sep).join('/');
    if (fm.avaimet.has('description') && fm.avaimet.has('keywords')) { ohitettu++; continue; }

    const h1 = fm.sisalto.match(/^#\s+(.+?)\s*$/m);
    const otsikko = (raaka.match(/^title:\s*(.+)$/m)?.[1] ?? h1?.[1] ?? suht.split('/').pop().replace('.md', ''))
      .replace(/["']/g, '').trim();

    const termit = vainSynonyymit ? [] : poimiTermit(vartalot, df, sivut.length).slice(0, 10);
    const synot = process.argv.includes("--ei-avainsanoja") ? [] : synonyymit(fm.sisalto, otsikko);

    const avainsanat = [];
    const nahty = new Set();
    for (const s2 of [...termit, ...synot]) {
      const v = s2.slice(0, 6).toLowerCase();
      if (nahty.has(v)) continue;
      nahty.add(v);
      avainsanat.push(s2);
      if (avainsanat.length >= 16) break;
    }

    const kuvaus = teeKuvaus(otsikko, fm.sisalto);

    console.log(`\n${suht}`);
    console.log(`  description: ${kuvaus}`);
    console.log(`  keywords: [${avainsanat.join(', ')}]`);

    if (kirjoita) {
      const rivit = normalisoi(raaka).split('\n');
      const loppu = rivit.findIndex((r, i) => i > 0 && r.trim() === '---');
      const uudet = [
        '---',
        ...rivit.slice(1, loppu).filter((r) => !/^(description|keywords):/.test(r)),
        `description: ${kuvaus}`,
        `keywords: [${avainsanat.join(', ')}]`,
        '---',
        ...rivit.slice(loppu + 1),
      ];
      await writeFile(tiedosto, uudet.join('\n'), 'utf8');
    }
    kasitelty++;
  }

  console.log(`\n${'-'.repeat(60)}`);
  console.log(`Kasitelty ${kasitelty} sivua, ohitettu ${ohitettu}.`);
  console.log(kirjoita
    ? 'KIRJOITETTU. Nama ovat LUONNOKSIA - lue lapi ennen committia.'
    : 'Ei kirjoitettu. Aja --kirjoita kun ehdotukset nayttavat jarkevilta.');
}

main().catch((e) => { console.error(e); process.exit(1); });
