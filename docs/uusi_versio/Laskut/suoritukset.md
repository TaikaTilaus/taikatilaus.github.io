---
sidebar_position: 4
title: Suoritukset
description: Suoritukset uuden version Laskut-valikossa.
---

# Suoritukset

**Suoritukset**-sivulla haet ja tarkastelet asiakkaiden maksuja eli suorituksia ja kohdistat suorituksen laskuun. Avaa sivu yläreunan päävalikosta valitsemalla **Laskut → Suoritukset**.

Suoritus on pankkiin tai kassaan tullut maksu. Yleensä suoritukset tulevat pankkiaineistosta (**Laskut → Pankki**) ja kohdistuvat laskuihin viitenumeron perusteella automaattisesti. Tällä sivulla voit tarkistaa, mitkä suoritukset ovat kohdistuneet ja käsitellä ne, jotka eivät ole.

:::warning HUOMIO:
Uudessa versiossa voit hakea ja katsella suorituksia ja tehdä raportteja. Suorituksen liittäminen laskuun, lisäys käsin, muokkaus, poisto, hyvitys ja tiliöintien poisto tehdään vielä vanhassa versiossa.
:::

## Suoritusten hakeminen

1. Valitse hakupäivän tyyppi ja aikaväli.
2. Täytä tarvittaessa muita rajauksia.
3. Napsauta **Hae** tai paina **Enter**.

Napsauta **Tyhjennä**, kun haluat palauttaa rajaukset oletusarvoihin. Rajaukset säilyvät, kun siirryt sivulta toiselle ja palaat takaisin.

| Rajaus | Kuvaus |
|---|---|
| **Hakupäivä** | Kirjauspäivä tai Maksupäivä. Valinta määrää, kumman päivän mukaan aikaväli tulkitaan. |
| **Alkaen / Päättyen** | Aikaväli. Oletuksena viikko taaksepäin tähän päivään. Jos Päättyen-päivä on menneisyydessä, kentän alla on huomautus. Alkupäivä ei saa olla loppupäivän jälkeen. |
| **Maksajan nimi** | Osa nimestä. Voit kirjoittaa ääkköset tai jättää ne pois, koska pankki lähettää nimet omalla tavallaan (esimerkiksi RÄISÄNEN muodossa R[IS[NEN). |
| **Viitenumero** | Suorituksen viitenumero. |
| **Laskun numero** | Laskun numero, johon suoritus on kohdistettu. |

Napsauta **Lisää ehtoja**, niin saat näkyviin lisärajaukset:

| Rajaus | Kuvaus |
|---|---|
| **SuoritusID** | Suorituksen yksilöivä numero. Kun annat sen, muut ehdot ohitetaan. |
| **AineistoID** | Pankkiaineiston tunniste. Sama aineisto voi sisältää useita suorituksia. |
| **Pankkitilin numero** | Tilinumero, jolle maksu on tullut. |
| **Yritysnumero** | Näkyy vain TaikaTilauksen asiakkailla, joilla on useita yrityksiä. Rajaa laskun yrityksen mukaan. |
| **Kirjauspäivä / Maksupäivä** | Tarkka päivä. |
| **Arkistointitunnus** | Pankin arkistointitunnus. |
| **Info / Käsitelty info** | Teksti suorituksen info-kentissä. |

Voit lisäksi valita:

| Valinta | Merkitys |
|---|---|
| **Hae vain käsittelyä vaativat** | Hakee suoritukset, joiden Info ei ala OK:lla ja joiden Käsitelty info on tyhjä. Näin löydät suoritukset, joita ei ole kohdistettu. |
| **Näytä enintään 500** | Näyttää enintään 500 suoritusta. Oletuksena valittuna. Jos poistat valinnan, haku näyttää enintään 20 000 suoritusta, ja haku voi kestää kauemmin. |

## Hakutulokset

Listan yläreunassa näkyy suoritusten yhteissumma. Jos suorituksia löytyi enemmän kuin näytetään, sivu varoittaa punaisella: **näytetään ensimmäiset, ja löydettyjen määrä on kaikkiaan N**. Rajaa hakua tai poista valinta **Näytä enintään 500**.

Voit lajitella listan napsauttamalla sarakeotsikkoa. Tiliöinnit-saraketta ei voi lajitella. Listassa on oletuksena seuraavat sarakkeet:  

| Sarake | Sisältö |
|---|---|
| **SuoritusID** | Suorituksen yksilöivä numero. |
| **Pankkitili** | Tili, jolle suoritus on tiliöity, sekä pankki ja saajan tilinumero. |
| **Lasku** | Laskun numero. Napsauta numeroa, niin lasku avautuu uuteen välilehteen. Punainen numero ja kysymysmerkki tarkoittaa, että laskua ei löydy. |
| **Laskun tiedot** | Laskun päivä, eräpäivä, summa, maksamatta oleva summa ja tila. |
| **Tiliöinnit** | Suorituksen tiliöinnit. Punainen EI TILIÖINTEJÄ tarkoittaa, että suoritusta ei ole kohdistettu. |
| **Rahamäärä** | Suorituksen summa. |
| **Kirjauspäivä** | Minä päivänä suoritus on kirjattu. |
| **Maksupäivä** | Päivä, jolloin suoritus on maksettu. |
| **Arkistointitunnus** | Pankin arkistointitunnus.|
| **Viitenumero** | Viitenumero ilman etunollia. |
| **Maksajan nimi** | Suorituksen maksajan nimi. |
| **Info** |Kohdistuksen tulos ja mahdolliset huomautukset. Teksti OK tarkoittaa, että suoritus on kohdistunut oikein. |
| **Käsitelty info** | Suorituksen manuaalisen käsittelyn yhteydessä kirjoitettava teksti. |

Napsauta riviä, niin suoritus avautuu.

Valitse näytettävät sarakkeet **Sarakkeet**-painikkeella ja selaa sivuja listan yläreunasta. **Export**-valikosta voit viedä listan esimerkiksi Exceliin.

## Suorituksen tiedot

Kun napsautat suoritusta, sen tiedot näkyvät omassa osiossaan. Osiossa on:

- pankki- tai kassatili,
- rahamäärä,
- kirjaus- ja maksupäivä, 
- arkistointitunnus, 
- viitenumero, 
- maksajan nimi, 
- pankkitili, 
- Info ja 
- Käsitelty info.

**Lasku.** Jos suoritus on kohdistettu laskuun, näet laskun numeron linkkinä ja laskun tiedot ja maksajan. Jos suoritusta ei ole kohdistettu, tekstinä on **Ei kohdistettu laskuun**. Jos lasku puuttuu, näkyy punainen teksti: **Laskua … ei löydy, se on todennäköisesti poistettu.**

**Tiliöinnit.** Taulukossa on suorituksen tiliöinnit: TiliöintiID, Lasku, Tili, Summa, Kirjauspäivä, Tapa, Asiakasnro ja Lisätiedot. Jos tiliöintejä ei ole, näkyy punainen **EI SUORITUSTILIÖINTEJÄ**.

**Täsmäytys.** Taulukon alla on täsmäytys, jossa verrataan suorituksen rahamäärää suoritustiliöintien summaan. Teksti on vihreä, kun summat täsmäävät, ja punainen, kun ne eivät täsmää.

Napsauta **Takaisin listaan**, kun haluat palata hakulistaan.

<!-- ## Tuo suoritus sisään

Jos suorituksella ei ole tiliöintejä, osiossa on painike **Tuo suoritus sisään**. Se kohdistaa suorituksen laskuun, tekee tiliöinnit ja kuittaa laskun maksetuksi.

1. Avaa suoritus, jolla ei ole tiliöintejä.
2. Napsauta **Tuo suoritus** sisään.
3. Vahvista. Vahvistusikkuna kertoo, että suoritus kohdistetaan laskuun viitenumerolla ja että jos summa täsmää, tehdään tiliöinnit ja lasku kuitataan maksetuksi.

Käsittelyn jälkeen sivu näyttää tuloksen: kohdistuiko suoritus, mihin laskuun ja mitkä tiliöinnit tehtiin. Suoritusta ei voi tuoda sisään uudelleen, jos sillä on jo tiliöintejä.

Pankkiaineiston tuonti kohdistaa suoritukset samalla tavalla automaattisesti. -->

## Tiedot Exceliin

Napsauta **Tiedot Exceliin**, niin haun suoritukset latautuvat Excel-tiedostona.

## Kohdistusraportti

**Kohdistusraportti** kokoaa haun suoritukset yhteen raporttiin. Napsauta painiketta, niin raportti latautuu PDF-tiedostona. Viereisestä Excel-painikkeesta saat raportin Exceliin.

Raportissa on kaikki haun suoritukset tileittäin ja päivittäin. Kohdistumattomat suoritukset ovat omana ryhmänään. Raportissa on summat ja kunkin tilin kokonaissumma.

## Hae Paytrail-viitteellä

Verkkomaksun yhteydessä Paytrailin tilausnumero on laskun tunnus (**LaskuID**). 

1. Napsauta **Hae Paytrail-viitteellä**
2. Kirjoita Paytrailin tilausnumero ja napsauta **Hae lasku.** 
3. Sivu näyttää laskun, sen tiedot, maksupäivän ja maksajan. Napsauta laskun numeroa, niin lasku avautuu uuteen välilehteen. Jos laskua ei löydy, sivu kertoo siitä.