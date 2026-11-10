---
sidebar_position: 3
title: Laskujen lähetys
description: Laskujen lähetys uuden version Laskut-valikossa.
---

# Laskujen lähetys

**Laskujen lähetys** -sivulla näet laskut ja maksumuistutukset, jotka ovat valmiita lähetettäväksi, ja voit lähettää laskut manuaalisesti. Avaa sivu yläreunan päävalikosta valitsemalla **Laskut → Laskujen lähetys.**

Sivulla on kaksi välilehteä:

- **Lähetettävät laskut:** lista lähettämättömistä laskuista ja maksumuistutuksista.
- **Luodut aineistot:** lähetysten yhteydessä tallennetut PDF-tiedostot.

:::warning HUOMIO:

 Uudessa versiossa voit lähettää tällä sivulla vain sähköpostilaskuja, ja vain jos laskujen lähetys on otettu asiakkaallesi käyttöön uudessa versiossa. Muut toimitustavat (verkkolasku, kirje, tulostus) voit tässä katsella ja tulostaa PDF:ksi, mutta lähetä ne vanhassa versiossa. Jos laskujen lähetystä ei ole otettu käyttöön, sivu antaa tehdä vain PDF:n tarkastelua varten. Ylläpitäjä ottaa lähetyksen käyttöön kohdassa Ylläpito → TaikaTilaus → Laskutus. [TARKISTA: ylläpidon polku ja onko sivulla muita rajoituksia]

Jos asiakkaan laskut lähetetään Orbyt-kanavan kautta, sivun yläreunassa näkyy punainen huomautus. Orbyt-asiakkaiden laskut lähetetään vanhassa versiossa.
:::

## Lähetettävien laskujen hakeminen

1. Valitse **Toimituspäivä viimeistään**. Oletuksena tämä päivä.
2. Valitse **Toimitustapa**.
3. Napsauta **Hae**. Haku tehdään myös, kun vaihdat toimitustapaa.

| Rajaus | Kuvaus |
|---|---|
| **Toimituspäivä viimeistään** | Hakee laskut, joiden toimituspäivä on tämä päivä tai sitä aiempi. |
| **Toimitustapa** | Kaikki, Sähköposti, Verkkolasku, Kirje tai Tulostus. Maksumuistutuksilla on oma toimitustapansa. |

Valitse Lisähakuehdot, niin saat näkyviin lisärajaukset:

| Rajaus | Kuvaus |
|---|---|
| **Laskun muoto** | Kaikki, Lasku, Hyvityslasku, Loppulasku, Maksum.#1 tai Maksum.#2. |
| **Laskun päivä alkaen / päättyen** | Rajaa laskut laskun päivän mukaan. |
| **Laskun tyyppi sisältää** | Kaikki, ILMOITUS, TILAUS, ERILLIST. |
| **Luontitunnus** | Hakee yhden laskujen luontiajon laskut. |
| **Summa** | Hakee laskut, joiden summa on annettu summa. |
| **Teksti tuoterivissä** | Hakee laskut, joiden tuoteriveillä on kirjoittamasi teksti. |

Listassa ovat vain laskut ja muistutukset, joita ei ole vielä lähetetty. Lähetetty lasku katoaa listalta.

## Hakutulokset

Listan yläreunassa näkyy yhteenveto: laskuja ja muistutuksia yhteensä sekä niiden summa (myös ALV 0 %), eriteltynä laskuihin, hyvityslaskuihin ja maksumuistutuksiin.

Yhteenvedossa voi olla punaisia huomautuksia:

- **Virheellisiä toimitustietoja:** näitä laskuja ei voi lähettää.
- **Joukossa on laskuja, joissa on maksumuistutuskielto:** tarkista nämä ennen lähetystä.

Listassa on oletuksena seuraavat sarakkeet: 
- **Laskun nro**, 
- **Muoto,**
- **Päivä,**
- **Eräpäivä,**
- **Summa,**
- **Maksamatta,**
- **Toimituspäivä,**
- **Toimitustapa,**
- **Toimitustiedot,**
- **Tyyppi,**
- **Kieli,**
- **Luontitunnus**
- **PID**

Valitse näytettävät sarakkeet Sarakkeet-painikkeella.

Voit lajitella listan napsauttamalla sarakeotsikkoa, selata sivuja ja viedä 
koko listan Export-valikosta (esimerkiksi Excel).

Napsauta laskun numeroa, niin lasku avautuu uuteen välilehteen.

## Virheelliset laskut

Lasku, jota ei voi lähettää, näkyy punaisella rivillä ilman valintaruutua. 

Virheen syy näkyy punaisella **Toimitustiedot**-sarakkeessa. Toimitustiedot luetaan laskulle tallennetuista tiedoista.

Tyypillinen syy on puuttuva tai virheellinen sähköposti-, verkkolasku- tai postiosoite sekä puuttuva viitenumero. Korjaa tieto maksajan asiakaskortilla ja hae uudelleen. 

## Laskujen valitseminen

Valinta tehdään yhdelle toimitustavalle kerrallaan. Jos toimitustapana on Kaikki, listassa ei ole valintaruutuja. Valitse toimitustapa, niin laskut voi valita.

- Valitse yksittäisiä laskuja rivin alussa olevalla valintaruudulla.
- **Valitse kaikki** valitsee kaikki lähetettävät laskut koko hakutuloksesta, ei vain nykyiseltä sivulta.
- Painikkeet **10**, **100**, **200** ja **500** valitsevat listan ensimmäiset laskut siinä järjestyksessä, jossa lista on.
- **Peruuta valinnat** tyhjentää valinnat.

Valittujen laskujen määrä näkyy painikkeissa.

## Tulosta PDF

Napsauta **Tulosta PDF (N valittua)**. Järjestelmä tekee valituista laskuista yhden PDF-tiedoston, joka latautuu koneellesi. Laskut ovat tiedostossa listan järjestyksessä.

:::warning HUOMIO:
Tulosta PDF on esikatselu. Se ei merkitse laskuja lähetetyiksi eikä poista niitä listalta. Jos tulostat laskut ja lähetät ne postitse itse, merkitse ne lähetetyiksi vanhassa versiossa.
:::

## Lähetä laskut sähköpostilla

Painike **Lähetä laskut sähköpostilla (N)** näkyy, kun toimitustavaksi on valittu Sähköposti ja laskuja on valittu.

1. Valitse haluamasi laskut ja napsauta painiketta. Laskulistan yläpuolelle avautuu **Lähetä laskut sähköpostilla** -osio.
2. Tarkista vastaanottajat. Osio kertoo, kuinka monelle vastaanottajalle viesti on lähdössä. Virheellisiin sähköpostiosoitteisiin ei lähetetä. Jokaisesta laskusta näkyy numero, muoto, maksaja ja sähköpostiosoite.
3. Kirjoita tarvittaessa **Lähettäjän sähköposti, Otsikko ja Viesti**.
4. Lisää tarvittaessa **Lisäliitteet**. Voit lisätä enintään 5 liitettä, ja ne lähtevät jokaiselle vastaanottajalle.
5. Tee ensin testi (katso alla) ja tarkista PDF.
6. Poista valinta **Älä lähetä, tee laskuista vain PDF tarkastelua varten** ja napsauta **Lähetä laskut**.
7. Vahvista lähetys. Vahvistus kertoo, kuinka monta laskua lähtee ja että ne merkitään lähetetyiksi.

Osiossa on oletuksena valittuna **Älä lähetä, tee laskuista vain PDF tarkastelua varten**. Silloin painikkeen nimi on **Tee PDF, mitään ei lähetetä eikä merkitä, ja PDF latautuu koneellesi**. Näin voit tarkistaa laskujen ulkoasun ennen oikeaa lähetystä.

### Viestin tekstit

Jos valitut laskut ovat samaa portaalia, tyyppiä ja muotoa, otsikko, viesti ja lähettäjä tulevat laskutusmäärityksistä ja ne ovat valmiina kentissä. Voit muokata niitä, ja viimeksi lähettämäsi tekstit tulevat oletuksena seuraavalla kerralla. Jos laskut ovat eri portaaleja, tyyppejä tai muotoja, osiossa ei ole tekstikenttiä. Silloin viesti määritellään asetuksissa laskuittain.

## Lähetyksen jälkeen

- Laskut merkitään lähetetyiksi ja lähtevät sähköpostitse. Laskun PDF liitetään viestiin.
- Lähetetyt laskut poistuvat listalta.
- Sivun yläreunassa näkyy yhteenveto: montako laskua lähetettiin. Mahdolliset huomiot näkyvät sen alla.
- Laskun lähetystieto tallentuu laskulle ja laskun muutoslokiin.
- Lähetettyjen laskujen yhdistetty PDF tallentuu **Luodut aineistot** -välilehdelle.
- Jos lähetys keskeytyy virheeseen, sivu ilmoittaa siitä. Vain onnistuneet laskut merkitään lähetetyiksi.

Sama lasku ei lähde kahdesti, vaikka kaksi käyttäjää lähettäisi samaan aikaan: lähetys tarkistaa listan uudelleen ennen lähettämistä.

:::warning HUOMIO:
Kun laskujen sähköpostilähetys on otettu käyttöön uudessa versiossa, vanha versio ei lähetä sähköpostilaskuja. Kirje- ja verkkolaskut lähtevät edelleen vanhan version kautta.
:::

## Luodut aineistot

**Luodut aineistot** -välilehdellä on lista asiakkaan tallennetuista lähetysaineistoista (PDF-tiedostot). Napsauta tiedoston nimeä, niin tiedosto latautuu koneellesi. Listassa ovat sarakkeet Tiedosto, Koko (kt) ja Päivä. Lista on oletuksena uusin ensin. Voit lajitella ja selata listaa ja viedä sen Export-valikosta.