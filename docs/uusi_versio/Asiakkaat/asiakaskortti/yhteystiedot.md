---
sidebar_position: 3
title: Yhteystiedot
---

# Yhteystiedot

**Yhteystiedot**-välilehdellä ylläpidetään asiakkaan nimi-, osoite- ja yhteystietoja sekä yritysasiakkaan tunnisteita. Välilehti on jaettu osioihin Asiakas, Osoite, Yhteystiedot ja Lisätiedot.

Osa kentistä näkyy vain tietyille asiakkaille tai vain tietyssä sovelluksen tilassa. Ylläpitäjä voi lisäksi piilottaa kenttiä kohdassa [Asetukset → Asiakkaan tietokentät](/docs/uusi_versio/asetukset/asiakkaan-tietokentat).

## Asiakas

| Kenttä | Ohje |
| --- | --- |
| **Sukunimi ja Etunimi** | Asiakkaan nimi. |
| **Asiakastyyppi** | Asiakkaan tyyppi: Henkilö, Yritys, Yhteisö tai Kuolinpesä. Kuolinpesä on valittavissa vain ilmoitusten hallintaa käyttävillä. |
| **Syntymävuosi** | Henkilön syntymävuosi. Näkyy vain Henkilö-asiakastyypillä. |
| **Kuollut** | Katso Kuollut-valinta. Näkyy vain Henkilö-asiakastyypillä. |
| **Yritys ja Osasto** | Yrityksen ja mahdollisen osaston nimi. |
| **Markkinointinimi** | Nimi, jota käytetään markkinoinnissa. Näkyy vain ilmoitusten hallintaa käyttävillä. |
| **Myyjä** | Asiakkaalle määritetty myyjä. Valitaan valikosta. |
| **Y-tunnus** | Yrityksen Y-tunnus muodossa 1234567-8. |
| **VAT-numero** | Yrityksen arvonlisäverotunniste.|

Henkilön kentät (Syntymävuosi ja Kuollut) näkyvät henkilöasiakkaalla heti nimirivin jälkeen. Henkilöksi katsotaan asiakas, jonka tyyppi on Henkilö. Jos tyyppiä ei ole valittu, asiakas katsotaan henkilöksi, kun yrityksen nimeä ei ole. Yritykselle ja yhteisölle nämä kentät näkyvät vain, jos niissä on jo arvo.

### Y-tunnus ja VAT-numero

Mitkä tunnuskentät näkyvät, riippuu asiakastyypistä ja maasta:

| Asiakas | Näkyvät kentät |
|---|---|
| **Suomalainen yritys tai yhteisö (maa FI tai AX)** | Y-tunnus. Kentän alla näkyy Y-tunnuksesta johdettu VAT-numero, esimerkiksi VAT-numero FI12345678. |
| **Ulkomainen yritys tai yhteisö** | VAT-numero / verotunniste. Ohje: Esim. EU VAT (DE123456789), USA:n EIN (12-3456789). Y-tunnus näkyy vain, jos kentässä on arvo. |

Ahvenanmaalla on suomalainen Y-tunnus, joten Ahvenanmaan yrityksen kentät noudattavat suomalaisen yrityksen sääntöä.

**Y-tunnuksen tarkistus.** Y-tunnus tarkistetaan muodon ja tarkistusmerkin perusteella. Jos arvo ei ole kelvollinen, kentän alla näkyy huomautus:

| Huomautus | Mitä tehdä |
|---|---|
| **Y-tunnus ei ole muodossa 1234567-8.** | Y-tunnus on kirjoitettu toisin, esimerkiksi ilman väliviivaa tai FI-etuliitteellä. Napsauta Korjaa muotoon 1234567-8. |
| **Ulkomainen tunniste kuuluu VAT-numero / verotunniste -kenttään** | Kentässä on ulkomainen tunniste. Napsauta Siirrä VAT-numeroksi, niin arvo siirtyy VAT-kenttään ja Y-tunnus tyhjenee. Painiketta ei ole, jos VAT-numero-kentässä on jo eri arvo. |
| **Y-tunnus ei ole kelvollinen: muoto 1234567-8 ja tarkistusmerkki.** | Tarkista tunnus. Korjauspainiketta ei ole. |

Jos suomalaisella asiakkaalla on VAT-numero-kentässä FI-alkuinen numero mutta ei kelvollista Y-tunnusta, kentän alla on painike *Aseta Y-tunnukseksi*, joka asettaa Y-tunnuksen VAT-numerosta. Jos VAT-numero poikkeaa Y-tunnuksesta johdetusta, kentän alla näkyy varoitus.

### Kuollut-valinta

Kuollut-valinta näkyy vain henkilöasiakkaalla.

- **Kuollut**-valinnan päälle laittaminen asettaa samalla kaikki markkinointikiellot ([**Markkinointitiedot**](/docs/uusi_versio/Asiakkaat/asiakaskortti/markkinointitiedot)-välilehti). Valinnan poistaminen ei poista kieltoja.
- **Kuollut**-merkintä ei vaikuta postitukseen eikä tilauksen tilaan. Kuolleen tilaajan voimassa olevat tilaukset katkaistaan erikseen tilaukselta antamalla katkaisupäivä ja katkaisun syyksi **SAIRAUS_VANHUUS_KUOLEMA**.
- Kuolleeksi merkityllä asiakkaalla on asiakasluettelossa ja [asiakaskortin](/docs/uusi_versio/Asiakkaat/asiakaskortti) otsikossa **Kuollut**-merkki.

![Asiakaskortin yhteystiedot](/img/versio2/asiakaskortti3.png)

## Osoite

| Kenttä | Ohje |
|---|---|
| **Lähiosoite** | Kadun tai tien nimi. |
| **Katunro, Porras ja Huoneisto** | Osoitteen tarkentavat tiedot omissa kentissään. |
| **Postinumero ja Postitoimipaikka** | Kun kirjoitat postinumeron, Postitoimipaikka täydentyy automaattisesti. |
| **Maa** | Valitse maa valikosta. Kun postitoimipaikka on Suomassa, maaksi täyttyy automaattisesti FI - Suomi. Valikossa näkyy maan koodi ja suomenkielinen nimi ja tietokantaan tallentuu kaksimerkkinen maakoodi (esimerkiksi FI). |
| **C/O-osoite** | Osoitetta täydentävä c/o-tieto. |

### Yhteystiedot

| Kenttä | Ohje |
|---|---|
| **Sähköposti** | Asiakkaan sähköpostiosoite. |
| **Sähköposti #2** | Asiakkaan toinen sähköpostiosoite. Se on vain tieto [asiakaskortilla](/docs/uusi_versio/Asiakkaat/asiakaskortti): laskujen lähetys käyttää Sähköposti-kenttää tai laskutuksen sähköpostiosoitetta, eikä Sähköposti #2 vaikuta lähetyksiin. |
| **Puhelin, Puhelin 2 ja Puhelin 3** | Asiakkaan puhelinnumerot. Puhelin 2 ja Puhelin 3 näkyvät, jos ne on otettu käyttöön asetuksissa. |
| **Asiakkaan nettisivun URL** | Asiakkaan verkkosivun osoite. Näkyy vain ilmoitusten hallintaa käyttävillä. |

## Lisätiedot

Lisätiedot-kenttään voit kirjoittaa vapaamuotoisia lisätietoja asiakkaasta. Asiakas ei näe hänestä kirjoitettuja lisätietoja.
