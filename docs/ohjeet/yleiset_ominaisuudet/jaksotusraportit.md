---
sidebar_position: 7
---

# Jaksotusraportit

## Yleistä jaksotusraporteista

Jaksotusraportit jakavat tilausmaksut kuukausille tilausjakson mukaisesti. Raporttien avulla nähdään, kuinka paljon tilausmaksuista on jo tuloutettu ja kuinka paljon on siirtovelkaa (ennakkoon saatua, vielä toimittamatonta tuloa).

Jaksotusraportit löytyvät **Raportit**-välilehdeltä **Tilausten raportit** -osiosta. Raportit suoritetaan tausta-ajona ja ladataan **Raportit / Tausta-ajot** -välilehdeltä.

Tällä sivulla kuvataan kaksi keskeistä jaksotusraporttia:

- **Tilausten jaksotus aikajanalla (tiliöintien kautta)** — tilauskohtainen kuukausittainen jaksotus
- **Tilausten jaksotus siirtovelkaraportti** — kuukausittainen yhteenveto siirtovelasta ja tuloutetusta myynnistä

## Hakuehdot

Molemmilla raporteilla on samat perushakuehdot:

### Aikaväli

- **Alkupäivä** ja **Loppupäivä** rajaavat, miltä kuukausilta jaksotus lasketaan
- Jos alkupäivä = loppupäivä, lasketaan vain kyseisen päivän tilanne

### Jaksotustapa

Jaksotustapa koostuu kahdesta valinnasta:

**Tilauksen voimassaolon määritys** (miten tilausjakso jaetaan kuukausille):

| Valinta | Kuvaus |
|---|---|
| **Aika** | Tilauksen hinta jaetaan tasaisesti tilausjakson päiville. Jokaiselle kuukaudelle kohdistuu osuus päivien lukumäärän mukaan. |
| **Ilmestymiskalenteri** | Tilauksen hinta jaetaan ilmestyvien numeroiden mukaan. Kuukauteen kohdistuu osuus vain jos lehti ilmestyy kyseisenä kuukautena. |

**Tilauksen hinnan määritys** (mistä tilauksen rahamäärä haetaan):

| Valinta | Tietolähde | Summien verollisuus |
|---|---|---|
| **Laskut** | Laskun luontivaiheen myyntitiliöinnit (TilinTyyppi = MY) | **Veroton** |
| **Suoritukset** | Laskun maksuvaiheen kuittaukset (Tiliointitapa = K) | **Verollinen** (sis. ALV) |

Nämä yhdistyvät neljäksi hakuvaihtoehdoksi:
- Aika / Laskut
- Aika / Suoritukset
- Ilmestymiskalenteri / Laskut
- Ilmestymiskalenteri / Suoritukset

### Lehti

Valitaan tuoteryhmä (lehti) jonka tilauksia jaksotetaan, tai **Kaikki** kaikkien lehtien tilauksille.

### Testitilausnumero

Valinnainen kenttä yksittäisen tilauksen testaamiseen. Kun tilausnumero annetaan, raportti ajetaan vain kyseiselle tilaukselle.

## Tilausten jaksotus aikajanalla (tiliöintien kautta)

Raportti tuottaa kuukausittaisen jaksotuksen ja haluttaessa tilauskohtaisen erittelyn.

### Raportin sarakkeet

**Yhteenvetorivi jokaiselta kuukaudelta:**

| Sarake | Kuvaus |
|---|---|
| **Päivä** | Kuukauden viimeinen päivä |
| **Laskutettu myynti kuussa** | Kuukaudelle kirjattujen myyntitiliöintien summa |
| **Myynti kk** | Kuukauden tuloutettu myynti (jaksotuksen mukaan) |
| **Kuitattu** | Kumulatiivinen kuitattu osuus tilausjakson alusta |
| **Velka** | Siirtovelka kuukauden lopussa |
| **Julkaisuja** | Lehden numeroiden lukumäärä kuukaudessa (ilmestymiskalenterijaksotuksessa) |

**Tilauskohtaiset rivit** (valinnaisesti):

Jokaisesta tilauksesta näytetään lisäksi tilausnumero, tilausjakso, laskun numero, veroton ja verollinen laskun summa, tiliöintitiedot sekä jaksotuslaskennan yksityiskohdat (kesto päivinä/julkaisuina, hinta per päivä/julkaisu).

### Summien verollisuus

Yhteenvetosarakkeiden (Myynti kk, Kuitattu, Velka) verollisuus riippuu hakuehdosta:

- **Laskut**: summat ovat **verottomia** (MY-tiliöinnit)
- **Suoritukset**: summat ovat **verollisia** (K-kuittaukset, sis. ALV)

Tilauskohtaisissa riveissä näytetään erikseen sekä laskun veroton että verollinen summa.

## Tilausten jaksotus siirtovelkaraportti

Raportti tuottaa kuukausittaisen tase-tyyppisen yhteenvedon siirtovelasta. Jaksotuslogiikka on sama kuin aikajanaraportin.

### Lisähakuehdot

Perusehdoiden lisäksi:

| Hakuehto | Kuvaus |
|---|---|
| **Näytä pankkisuoritukset** | Lisää raporttiin sarakkeet "Kaikki tiliöidyt maksut" ja "Pankkisuoritukset" |
| **Muoto** | Tulostetaanko raportti Exceliin vai näytölle |

### Raportin sarakkeet

| Sarake | Kuvaus | Tietolähde |
|---|---|---|
| **Kuukausi** | Raportointikuukausi | |
| **Siirtovelka kuukauden alussa (IB)** | Alkusaldo, edellisen kuukauden loppusaldo | Edellisen kuukauden EB |
| **Tilausmaksut sisään ja ulos** | Siirtovelkaan tullut/lähtenyt rahamäärä | Johdettu: EB - IB + Tuloutettu myynti |
| **Kaikki tiliöidyt maksut** | Kaikki kuittaustiliöinnit kuukaudella (K) | Tiliöinnit (valinnainen sarake) |
| **Pankkisuoritukset** | Pankkitilille tulleet suoritukset | Suoritukset (valinnainen sarake) |
| **Siirtovelka kuukauden lopussa (EB)** | Loppusaldo | Jaksotuksen VelkaSumma |
| **Tuloutettu myynti sis. ALV** | Kuukauden tuloutettu myynti verollisena | Jaksotuksen MyyntiSumma |
| **Tuloutettu myynti veroton** | Kuukauden tuloutettu myynti verottomana | Laskettu verollisesta tai jaksotuksesta |
| **Julkaisupäivät** | Lehden julkaisupäivät kuukaudessa | Julkaisukalenteri |

### Kaikki tiliöidyt maksut vs. Pankkisuoritukset

Nämä valinnaiset sarakkeet eroavat toisistaan:

| | Kaikki tiliöidyt maksut | Pankkisuoritukset |
|---|---|---|
| **Tietolähde** | TaikaTilaus_Tiliointi (K-kuittaukset) | TaikaTilaus_Suoritus (pankkisuoritukset) |
| **Laajuus** | Vain raportin aikavälillä voimassa olevien tilausten tiliöinnit | Kaikki kyseisen lehden pankkisuoritukset aikavälillä |
| **Maksukanavat** | Kaikki kuittaukset (pankki, kortti, verkkomaksu ym.) | Vain pankkitilille tulleet (SaajanTilinumero ei tyhjä) |
| **Verollisuus** | Verollinen (bruttomaksu) | Verollinen (bruttomaksu) |

Sarakkeiden arvot voivat poiketa toisistaan, koska ne haetaan eri tietolähteistä ja eri rajauksilla.

### Summien verollisuus

Siirtovelkaraportti näyttää aina sekä verollisen että verottoman tuloutetun myynnin. Muiden sarakkeiden (IB, EB, Tilausmaksut) verollisuus riippuu hakuehdosta:

- **Laskut**: IB/EB/Tilausmaksut ovat **verottomia**
- **Suoritukset**: IB/EB/Tilausmaksut ovat **verollisia**

## Eroavaisuudet Kirjanpitoyhteenvetoon ja Laskupäiväkirjaan

### Kirjanpitoyhteenveto

<a href="/docs/ohjeet/yleiset_ominaisuudet/raportit#kirjanpitoyhteenveto">**Kirjanpitoyhteenveto**</a> ja jaksotusraportit mittaavat eri asioita:

| | Kirjanpitoyhteenveto | Jaksotusraportit |
|---|---|---|
| **Näkökulma** | Tiliöintitapahtumat tileittäin (debet/kredit) | Tilausmaksujen jakaminen tilausjakson kuukausille |
| **Aikaväliltä haetaan** | Tiliöinnit, joiden **kirjauspäivä** osuu aikavälille | Tilaukset, jotka ovat **voimassa** aikavälillä |
| **Summien peruste** | Tiliöintien tosiasiallinen kirjauspäivä | Laskennallinen jaksotus (hinta jaettu tilausjaksolle) |
| **Käyttötarkoitus** | Kirjanpidon täsmäytys, debet = kredit | Siirtovelka-tase, tuloutetun myynnin seuranta |

Kirjanpitoyhteenveto näyttää mitä on **kirjattu** aikavälillä. Jaksotusraportti näyttää mitä **pitäisi tulouttaa** aikavälillä tilausjaksojen perusteella.

### Laskupäiväkirja

<a href="/docs/ohjeet/yleiset_ominaisuudet/raportit#laskupäiväkirja">**Laskupäiväkirja**</a> ja jaksotusraportit tarkastelevat laskuja eri tavoin:

| | Laskupäiväkirja | Jaksotusraportit |
|---|---|---|
| **Näkökulma** | Laskut laskun päivämäärän mukaan | Tilausten tulouttaminen tilausjakson mukaan |
| **Aikaväliltä haetaan** | Laskut, joiden **laskun päivä** osuu aikavälille | Tilaukset, jotka ovat **voimassa** aikavälillä |
| **Summien peruste** | Laskun kokonaissumma laskupäivänä | Laskun tai suorituksen summa jaettuna tilausjakson kuukausille |
| **Maksutiedot** | Näyttää laskun maksutilanteen raportin ajohetkellä | Ei näytä yksittäisen laskun maksutilannetta |
| **Käyttötarkoitus** | Laskutuksen seuranta, myyntireskontran täsmäytys | Siirtovelka-tase, tuloutetun myynnin jaksotus |

Laskupäiväkirjalla laskun koko summa näkyy laskun päivämääräkuukaudella. Jaksotusraportilla sama summa jakautuu usealle kuukaudelle tilausjakson mukaan.

**Esimerkki:** Asiakas maksaa 120 euron vuositilauksen tammikuussa.
- **Laskupäiväkirja**: 120 € näkyy tammikuussa
- **Jaksotusraportti (aika)**: 10 € tuloutetaan joka kuukausi tammi–joulukuu, siirtovelka pienenee kuukausittain

