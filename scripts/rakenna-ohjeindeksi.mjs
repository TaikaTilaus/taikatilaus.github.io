#!/usr/bin/env node
/**
 * Rakentaa hakuindeksin docs/-hakemiston markdownista.
 *
 * Tuottaa static/ohjeindeksi.json, jonka TaikaTilaus-sovelluksen tukichatbot
 * hakee ja pitaa muistissa (api/v1/Tukichat.ashx).
 *
 * Ohjesivusto itse ei kayta indeksia - sen oma haku on Algolia. Indeksi
 * julkaistaan sivustolle vain siksi, etta sovellus saa sen ilman paasya
 * docs-repoon.
 *
 * Ajo:  node scripts/rakenna-ohjeindeksi.mjs [--tarkista]
 *       --tarkista  ei kirjoita tiedostoa, tulostaa vain tilastot ja varoitukset
 *
 * Suunnitelma: artifacts/TaikaTilaus/Tukichatbot-suunnitelma.md, vaihe 0.2
 */

import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { join, relative, dirname, basename, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import GithubSlugger from 'github-slugger';
import { laskeTiiviste } from './rakenna-embeddingit.mjs';

const JUURI = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = join(JUURI, 'docs');
const TULOS = join(JUURI, 'static', 'ohjeindeksi.json');

// Docusaurus-konfiguraation routeBasePath docs-presetille
const URL_ETULIITE = '/docs';

// Chunkin tavoitekoko merkkeinä. Suomessa ~3,2 merkkiä/token,
// eli 1300-2600 merkkiä ≈ 400-800 tokenia.
const CHUNK_MIN = 400;
const CHUNK_TAVOITE = 2600;
const CHUNK_MAX = 3600;

/**
 * Ominaisuuskartta: dokumenttipolku -> _Kehys.vb:n ominaisuuslippu.
 *
 * Sovellus suodattaa hakutuloksista pois chunkit, joiden ominaisuus ei ole
 * tenantilla käytössä. null = ohje koskee kaikkia asiakkaita.
 *
 * HUOM: tarkista kartta _Kehys.vb:tä vasten ennen tuotantokäyttöä.
 * Lippuja on enemmän kuin tässä, ja osa ohjeista koskee useaa ominaisuutta.
 */
const OMINAISUUSKARTTA = [
  [/^ohjeet\/ilmoitustenhallinta\//, 'ILMOITUSMYYNTI_KAYTOSSA'],
  [/^ohjeet\/asetukset\/tuotteet-ja-julkaisut\/(myyntipaketit|myyntituotteet)/, 'ILMOITUSMYYNTI_KAYTOSSA'],
  [/^ohjeet\/asetukset\/tuotteet-ja-julkaisut\/tilauspaketit/, 'TILAUSPAKETTI_KAYTOSSA'],
  [/varhaisjakelu|aamujakelu/, 'AAMUJAKELU_KAYTOSSA'],
  [/kampanja/, 'KAMPANJA_KAYTOSSA'],
];

// ---------------------------------------------------------------------------
// Frontmatter
// ---------------------------------------------------------------------------

/**
 * Poistaa UTF-8 BOMin ja normalisoi rivinvaihdot.
 *
 * BOM: 17 tiedostoa docs/ohjeet/asetukset/-osiossa alkaa BOMilla, samoin osa
 * _category_.json-tiedostoista.
 *
 * CRLF: docs-tiedostot käyttävät CRLF-rivinvaihtoja. JavaScriptin regexissä
 * "." ei täsmää \r-merkkiin (se on rivinvaihtomerkki), joten esim.
 * /^(\w+):\s*(.*)$/ ei osu riviin "description: teksti\r". Normalisoidaan
 * LF:ksi heti luvun jälkeen, jotta tätä ei tarvitse muistaa joka kohdassa.
 */
function normalisoi(teksti) {
  const ilmanBom = teksti.charCodeAt(0) === 0xfeff ? teksti.slice(1) : teksti;
  return ilmanBom.replace(/\r\n?/g, '\n');
}

/**
 * Kevyt YAML-frontmatter-parseri. Kattaa ne kentät, joita docs/ käyttää:
 * sidebar_position, slug, title, description, keywords, image.
 * Ei yritä olla täydellinen YAML — riittää tähän tarkoitukseen.
 */
function lueFrontmatter(raaka) {
  const teksti = normalisoi(raaka);
  if (!teksti.startsWith('---')) return { fm: {}, sisalto: teksti };

  const loppu = teksti.indexOf('\n---', 3);
  if (loppu === -1) return { fm: {}, sisalto: teksti };

  const lohko = teksti.slice(3, loppu);
  const sisalto = teksti.slice(teksti.indexOf('\n', loppu + 1) + 1);
  const fm = {};

  for (const rivi of lohko.split('\n')) {
    const osuma = rivi.match(/^([a-zA-Z_][a-zA-Z0-9_]*):\s*(.*)$/);
    if (!osuma) continue;
    const [, avain, arvoRaaka] = osuma;
    let arvo = arvoRaaka.trim();

    if (arvo.startsWith('[') && arvo.endsWith(']')) {
      arvo = arvo
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else {
      arvo = arvo.replace(/^["']|["']$/g, '');
    }
    fm[avain] = arvo;
  }
  return { fm, sisalto };
}

// ---------------------------------------------------------------------------
// URL-muodostus
// ---------------------------------------------------------------------------

/**
 * Docusaurus johtaa URLin tiedostopolusta, paitsi jos frontmatterissa on slug.
 * 7 sivua käyttää slugia — ilman tätä ne saisivat väärän osoitteen.
 */
function sivunUrl(suhteellinenPolku, fm) {
  if (fm.slug) {
    const s = String(fm.slug);
    return URL_ETULIITE + (s.startsWith('/') ? s : '/' + s);
  }
  const ilmanPaatetta = suhteellinenPolku.replace(/\.mdx?$/, '').split(sep).join('/');
  return `${URL_ETULIITE}/${ilmanPaatetta}`;
}

// ---------------------------------------------------------------------------
// Kategorialabelit leivänmuruja varten
// ---------------------------------------------------------------------------

async function lueKategoriat(juuri) {
  const kartta = new Map();

  async function kavele(hakemisto) {
    for (const alkio of await readdir(hakemisto, { withFileTypes: true })) {
      const polku = join(hakemisto, alkio.name);
      if (alkio.isDirectory()) {
        await kavele(polku);
      } else if (alkio.name === '_category_.json') {
        try {
          const json = JSON.parse(normalisoi(await readFile(polku, 'utf8')));
          if (json.label) {
            kartta.set(relative(juuri, hakemisto).split(sep).join('/'), json.label);
          }
        } catch (e) {
          varoita(`_category_.json ei jäsenny: ${relative(juuri, polku)} — ${e.message}`);
        }
      }
    }
  }

  await kavele(juuri);
  return kartta;
}

/** Rakentaa leivänmurut hakemistopolusta kategorialabelien avulla. */
function leivanmurut(suhteellinenPolku, kategoriat) {
  const osat = dirname(suhteellinenPolku).split(sep).filter((o) => o && o !== '.');
  const murut = [];
  let kertyva = '';

  for (const osa of osat) {
    kertyva = kertyva ? `${kertyva}/${osa}` : osa;
    murut.push(kategoriat.get(kertyva) ?? siistiNimi(osa));
  }
  return murut;
}

function siistiNimi(nimi) {
  const s = nimi.replace(/[-_]+/g, ' ');
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---------------------------------------------------------------------------
// Markdownin siivous
// ---------------------------------------------------------------------------

/** Poimii kuvat ennen tekstin siivousta: ![alt](polku) */
function poimiKuvat(md) {
  const kuvat = [];
  const re = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  let m;
  while ((m = re.exec(md)) !== null) {
    kuvat.push({ alt: m[1] || null, polku: m[2] });
  }
  return kuvat;
}

/**
 * Muuntaa markdownin hakukelpoiseksi tekstiksi.
 * Taulukot säilytetään — ohjeissa on paljon kenttäselityksiä taulukoina.
 */
function siivoa(md) {
  return md
    .replace(/```[\s\S]*?```/g, ' ')                    // koodilohkot
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')              // kuvat
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')            // linkit -> linkkiteksti
    .replace(/^:::\w*\s*$/gm, '')                       // admonition-rajat
    .replace(/^:::\s*$/gm, '')
    .replace(/<[^>]+>/g, ' ')                           // html-tagit
    .replace(/[*_`]/g, '')                              // korostukset
    .replace(/^\s*\|/gm, '')                            // taulukon reunaviivat
    .replace(/\|\s*$/gm, '')
    .replace(/^\s*[-:| ]+\s*$/gm, '')                   // taulukon erotinrivit
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ---------------------------------------------------------------------------
// Chunkkaus
// ---------------------------------------------------------------------------

/**
 * Pilkkoo sivun H2/H3-otsikoiden kohdalta.
 *
 * - H1 toimii sivun otsikkona, ei omana chunkkinaan
 * - liian lyhyet osiot yhdistetään seuraavaan (pelkkä väliotsikko ei ole chunk)
 * - liian pitkät pilkotaan kappalerajalta
 */
function pilkoOsioihin(sisalto) {
  const rivit = sisalto.split('\n');
  const osiot = [];
  let nykyinen = { otsikko: null, taso: 0, rivit: [] };
  let koodilohkossa = false;

  for (const rivi of rivit) {
    if (/^```/.test(rivi)) koodilohkossa = !koodilohkossa;

    const otsikko = !koodilohkossa && rivi.match(/^(#{1,3})\s+(.+?)\s*$/);
    if (otsikko && otsikko[1].length >= 2) {
      if (nykyinen.rivit.join('').trim() || nykyinen.otsikko) osiot.push(nykyinen);
      nykyinen = { otsikko: otsikko[2].trim(), taso: otsikko[1].length, rivit: [] };
    } else {
      nykyinen.rivit.push(rivi);
    }
  }
  if (nykyinen.rivit.join('').trim() || nykyinen.otsikko) osiot.push(nykyinen);

  return osiot;
}

/** Pilkkoo liian pitkän tekstin kappalerajalta tavoitekokoon. */
function pilkoPituuden(teksti) {
  if (teksti.length <= CHUNK_MAX) return [teksti];

  const palat = [];
  let kertyva = '';
  for (const kappale of teksti.split(/\n\n+/)) {
    if (kertyva && (kertyva.length + kappale.length) > CHUNK_TAVOITE) {
      palat.push(kertyva.trim());
      kertyva = kappale;
    } else {
      kertyva = kertyva ? `${kertyva}\n\n${kappale}` : kappale;
    }
  }
  if (kertyva.trim()) palat.push(kertyva.trim());
  return palat;
}

/**
 * Chunkin tyyppi. Versiotiedotteet ovat julkaisumuistiinpanoja, eivat ohjeita:
 * mittauksessa ne nousivat kohinana ohjekysymysten tuloksiin ja huononsivat
 * recallia. Ne pidetaan indeksissa mutta merkitaan, jotta haku voi suodattaa
 * ne pois - nain "mita uutta toukokuun versiossa" on yha vastattavissa.
 */
/**
 * Kysymysotsikollinen osio on aina oma chunkkinsa, vaikka vastaus olisi lyhyt.
 *
 * CHUNK_MIN yhdistaa lyhyet osiot edelliseen, mikä on oikein juoksevassa
 * ohjetekstissa: valiotsikko ja pari rivia eivat ole itsenainen ajatus.
 * Kysymys-vastaus-sivuilla (docs/faq) se on vaarin. Siella jokainen osio on
 * itsenainen: yhdistaminen niputtaa toisiinsa liittymattomat kysymykset
 * samaan chunkkiin, laimentaa embeddingin ja - pahinta - antaa chunkille
 * ankkurin, joka osoittaa eri kysymykseen kuin mista teksti alkaa. Silloin
 * haku loytaa oikean sivun mutta lahdelinkki vie vaaraan kohtaan.
 */
function onKysymys(otsikko) {
  return typeof otsikko === 'string' && /\?\s*$/.test(otsikko);
}

function tyyppiPolusta(suhteellinenPolku) {
  const p = suhteellinenPolku.split(sep).join('/');
  if (/^versiotiedotteet\//.test(p)) return 'versiotiedote';
  return 'ohje';
}

function ominaisuusPolusta(suhteellinenPolku) {
  const p = suhteellinenPolku.split(sep).join('/');
  for (const [kuvio, lippu] of OMINAISUUSKARTTA) {
    if (kuvio.test(p)) return lippu;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Sivun käsittely
// ---------------------------------------------------------------------------

const varoitukset = [];
function varoita(viesti) {
  varoitukset.push(viesti);
}

async function kasitteleSivu(tiedosto, kategoriat) {
  const suhteellinen = relative(DOCS, tiedosto);
  const raaka = await readFile(tiedosto, 'utf8');
  const { fm, sisalto } = lueFrontmatter(raaka);

  const url = sivunUrl(suhteellinen, fm);
  const murut = leivanmurut(suhteellinen, kategoriat);
  const ominaisuus = ominaisuusPolusta(suhteellinen);
  const tyyppi = tyyppiPolusta(suhteellinen);

  const h1 = sisalto.match(/^#\s+(.+?)\s*$/m);
  const sivunOtsikko = fm.title || (h1 && h1[1].trim()) || siistiNimi(basename(suhteellinen, '.md'));

  const avainsanat = Array.isArray(fm.keywords)
    ? fm.keywords
    : typeof fm.keywords === 'string' && fm.keywords
      ? fm.keywords.split(',').map((s) => s.trim())
      : [];

  if (!fm.description) varoita(`description puuttuu: ${suhteellinen}`);
  if (avainsanat.length === 0) varoita(`keywords puuttuu: ${suhteellinen}`);

  const slugger = new GithubSlugger();
  // H1 varataan sluggerille, jotta ankkurit vastaavat Docusaurusta
  if (h1) slugger.slug(h1[1].trim());

  // H1 poistetaan sisällöstä: se on jo talletettu kenttään "sivu", eikä sen
  // toistaminen chunkin tekstissä tuo hakuun mitään lisää
  const runko = sisalto.replace(/^#\s+.+$/m, '');

  const chunkit = [];
  // Liian lyhyt osio ei ansaitse omaa chunkkia. Jos edellistä chunkkia ei ole
  // (esim. sivun alussa oleva johdantolause), se odottaa tässä ja liitetään
  // seuraavan osion alkuun.
  let odottava = null;

  for (const osio of pilkoOsioihin(runko)) {
    const ankkuri = osio.otsikko ? slugger.slug(osio.otsikko) : null;
    const raakaTeksti = osio.rivit.join('\n');
    const kuvat = poimiKuvat(raakaTeksti);
    const leipa = siivoa(raakaTeksti);

    // Otsikko mukaan chunkin tekstiin: se on usein sivun hakukelpoisin osa.
    // Esim. ohjevideot.md on pelkkiä iframe-upotuksia otsikoiden alla — ilman
    // tätä koko sivu jäisi indeksoimatta.
    let teksti = osio.otsikko ? `${osio.otsikko}\n${leipa}`.trim() : leipa;
    if (odottava) {
      teksti = `${odottava.teksti}\n\n${teksti}`.trim();
      kuvat.unshift(...odottava.kuvat);
      odottava = null;
    }
    if (!teksti) continue;

    // Lyhyt osio yhdistetään edelliseen chunkkiin, tai jää odottamaan seuraavaa
    if (leipa.length < CHUNK_MIN && !onKysymys(osio.otsikko)) {
      if (chunkit.length > 0) {
        const edellinen = chunkit[chunkit.length - 1];
        edellinen.teksti = `${edellinen.teksti}\n\n${teksti}`.trim();
        edellinen.kuvat.push(...kuvat);
      } else {
        odottava = { teksti, kuvat };
      }
      continue;
    }

    const polku = osio.otsikko ? [...murut, sivunOtsikko, osio.otsikko] : [...murut, sivunOtsikko];

    for (const [i, pala] of pilkoPituuden(teksti).entries()) {
      if (!pala.trim()) continue;
      chunkit.push({
        id: `${url}#${ankkuri ?? 'alku'}${i > 0 ? `-${i + 1}` : ''}`,
        url: ankkuri ? `${url}#${ankkuri}` : url,
        polku,
        otsikko: osio.otsikko ?? sivunOtsikko,
        sivu: sivunOtsikko,
        teksti: pala,
        kuvaus: fm.description ?? null,
        avainsanat,
        kuvat: i === 0 ? kuvat : [],
        ominaisuus,
        tyyppi,
      });
    }
  }

  // Lyhyt sivu, jolla ei ole yhtään täysimittaista osiota (esim. pelkkä
  // johdanto ja linkkilista) — indeksoidaan sellaisenaan
  if (odottava) {
    if (chunkit.length > 0) {
      const edellinen = chunkit[chunkit.length - 1];
      edellinen.teksti = `${edellinen.teksti}\n\n${odottava.teksti}`.trim();
      edellinen.kuvat.push(...odottava.kuvat);
    } else {
      chunkit.push({
        id: `${url}#alku`,
        url,
        polku: [...murut, sivunOtsikko],
        otsikko: sivunOtsikko,
        sivu: sivunOtsikko,
        teksti: odottava.teksti,
        kuvaus: fm.description ?? null,
        avainsanat,
        kuvat: odottava.kuvat,
        ominaisuus,
        tyyppi,
      });
    }
  }

  if (chunkit.length === 0) varoita(`ei chunkkeja: ${suhteellinen}`);
  return chunkit;
}

// ---------------------------------------------------------------------------
// Pääohjelma
// ---------------------------------------------------------------------------

async function etsiMarkdown(hakemisto) {
  const tulos = [];
  for (const alkio of await readdir(hakemisto, { withFileTypes: true })) {
    const polku = join(hakemisto, alkio.name);
    if (alkio.isDirectory()) tulos.push(...(await etsiMarkdown(polku)));
    else if (/\.mdx?$/.test(alkio.name)) tulos.push(polku);
  }
  return tulos;
}

async function main() {
  const vainTarkistus = process.argv.includes('--tarkista');

  const kategoriat = await lueKategoriat(DOCS);
  const tiedostot = (await etsiMarkdown(DOCS)).sort();

  const chunkit = [];
  for (const tiedosto of tiedostot) {
    chunkit.push(...(await kasitteleSivu(tiedosto, kategoriat)));
  }

  const merkkeja = chunkit.reduce((s, c) => s + c.teksti.length, 0);
  const pituudet = chunkit.map((c) => c.teksti.length).sort((a, b) => a - b);
  const mediaani = pituudet[Math.floor(pituudet.length / 2)] ?? 0;

  console.log('Ohjeindeksi');
  console.log('-----------');
  console.log(`Sivuja           ${tiedostot.length}`);
  console.log(`Chunkkeja        ${chunkit.length}`);
  console.log(`Merkkejä         ${merkkeja.toLocaleString('fi-FI')} (~${Math.round(merkkeja / 3.2).toLocaleString('fi-FI')} tokenia)`);
  console.log(`Chunkin pituus   mediaani ${mediaani}, lyhin ${pituudet[0] ?? 0}, pisin ${pituudet[pituudet.length - 1] ?? 0}`);
  console.log(`Kuvia            ${chunkit.reduce((s, c) => s + c.kuvat.length, 0)}`);

  const tyypeittain = {};
  for (const c of chunkit) tyypeittain[c.tyyppi] = (tyypeittain[c.tyyppi] ?? 0) + 1;
  console.log('\nTyypeittain');
  for (const [k, v] of Object.entries(tyypeittain)) console.log(`  ${k.padEnd(28)} ${v}`);

  const ominaisuuksittain = {};
  for (const c of chunkit) {
    const k = c.ominaisuus ?? '(kaikille)';
    ominaisuuksittain[k] = (ominaisuuksittain[k] ?? 0) + 1;
  }
  console.log('\nOminaisuussuodatus');
  for (const [k, v] of Object.entries(ominaisuuksittain).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${k.padEnd(28)} ${v}`);
  }

  const puuttuvatKuvaukset = varoitukset.filter((v) => v.startsWith('description')).length;
  const puuttuvatAvainsanat = varoitukset.filter((v) => v.startsWith('keywords')).length;
  const muut = varoitukset.filter((v) => !/^(description|keywords)/.test(v));

  console.log('\nMetadata');
  console.log(`  description puuttuu    ${puuttuvatKuvaukset} / ${tiedostot.length} sivulta`);
  console.log(`  keywords puuttuu       ${puuttuvatAvainsanat} / ${tiedostot.length} sivulta`);

  if (muut.length) {
    console.log('\nVaroitukset');
    for (const v of muut) console.log(`  ${v}`);
  }

  if (vainTarkistus) {
    console.log('\n(--tarkista: tiedostoa ei kirjoitettu)');
    return;
  }

  // Sama tiiviste kuin vektoritiedostossa. Kun se on molemmissa, lukija voi
  // todeta tuoreuden vertaamalla kahta merkkijonoa - sen ei tarvitse toteuttaa
  // chunkinTeksti-esitysta eika sha256:ta uudelleen omalla kielellaan.
  const tiiviste = laskeTiiviste(chunkit.filter((c) => c.tyyppi !== 'versiotiedote'));

  const indeksi = {
    versio: 1,
    luotu: new Date().toISOString(),
    sivuja: tiedostot.length,
    chunkkeja: chunkit.length,
    tiiviste,
    chunkit,
  };

  await writeFile(TULOS, JSON.stringify(indeksi), 'utf8');
  const { size } = await stat(TULOS);
  console.log(`\nKirjoitettu ${relative(JUURI, TULOS)} (${(size / 1024 / 1024).toFixed(2)} MB)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
