---
sidebar_position: 1
description: Uudistuksia TaikaTilaus-tuotteeseen 1.4.-31.5.2026 välisenä aikana
image: /img/social.png
keywords: [versiotiedote, vakioniput, raportit, tuottoerittely, tilaus- ja laskutusennuste, ALV-myynnit, avoimet laskut, laskupäiväkirja]
---

# Huhti-Toukokuu 2026

Uudistuksia TaikaTilaus-tuotteeseen 1.4.-31.5.2026 välisenä aikana.

> Kysy tarkemmin yksittäisten toiminnallisuuksien käyttöönotosta [tuestamme](https://taikatilaus.freshdesk.com/).

<!-- ## Laskujen lähetysyhteenveto

**Laskut/Laskujen haku** -välilehdeltä löytyy uusi laskujen lähetysyhteenveto, joka näytää halutulta aikaväliltä lähetettyjen laskujen yhteenlasketut summat kanavittain (laskuja yhteensä, kirje, verkkolasku, sähköposti).

> HUOM! Yhteenveto lasketaan lähetettyjen laskujen summien perusteella. Saman laskun summa voi näkyä yhteenvedossa useaan kertaan, jos laskusta on lähetetty maksumuistutuksia tai jos lasku on lähetetty uudelleen.

Voit hakea laskuja hakuehdoilla:
- Edellinen viikko
- Kuluva kuukausi
- Edellinen kuukausi
- Kuluva vuosi
- Edellinen vuosi
- Tietty kuukausiväli 

Voit viedä tiedot myös Exceliin painamalla **Vie tiedot Exceliin** -painiketta. 

![Laskujen haku](/img/versiotiedotteet/lahetysyhteenveto1.png)
*Löydät yhteenvedon Laskujen haku -välilehdeltä*

![Lähetysyhteenveto](/img/versiotiedotteet/lahetysyhteenveto.png)
*Voit valita haluamasi aikavälin, jolta tarkkailet lähetettyjen laskujen määrää.* -->

## Vakionippujen muokkausta on uudistettu

Vakionippujen muokkausta on muutettu helppokäyttöisemmäksi. Entinen versio aiheutti liikaa virheitä järjestelmässä. Löydät ohjeet uuden näkymän käyttöön [täältä](https://support.taikatilaus.fi/docs/ohjeet/asetukset/postitus/vakioniput).

![Varhaisjakelu](/img/ohjeet/vakioniput.png)

## Raportit

### Näytölle tulostuvat raportit tulostuvat nyt raportin ehtojen alle

Kun valitset raportin Tulostusmuodoksi **Näytölle**, raportti tulostuu nyt raportin hakuehtojen alle. Raportin ehtoja on täten helppo muuttaa ja näet muutokset heti tulosteessa. 

![Raportit](/img/versiotiedotteet/raportti-naytto.png)

### Tuottoerittely printti/digi -raportti

Raportti hakee laskujen kirjanpitotiliöinneistä myyntitiliöinnit kirjauspäivän mukaan. Tuottolaji päätellään laskun tyypistä: **TILAUS**, **ILMOITUS** tai **ERILLIST**. Tilaustuotot luokitellaan sähköiseksi, jos tuotteella on **Digituote**-asetus päällä. Ilmoitustuotot luokitellaan painetuksi, jos kanava on **LEHTI** tai **VAIHTOILMOITUS**. Muut ilmoitustuotot luokitellaan sähköiseksi. Jos tilaustuotolta puuttuu tuote tai ilmoitustuotolta kanava, rivi näkyy **Ei jaoteltu** -sarakkeessa.

Voit jättää raportilta pois valitsemiasi myyntitilejä.

Aktivoimalla **Näytä rivierittely** -kentän, saat raportin loppuun tuottojen erittelyt rivi kerrallaan. 

![Raportit](/img/versiotiedotteet/tuottoerittely.png)

### Tilaus ja laskutusennuste

Ohjelma jatkaa (ei oikeasti) valitun lehden tilauksia päivä kerrallaan kohdepäivään saakka. Jatkamisen yhteydessä luodaan laskut (ei oikeasti). Ohjelma näyttää jokaiselle päivälle erikseen kuinka monta tilausta on jatkettu ja millä summilla laskuja on tehty. Huomaa, että tyypillisesti lasku luodaan vasta tilauksen alkamispäivänä eli tilauksen jatkamisesta seuraavana päivänä.

Raporttia voi käyttää tilaustulojen ennustamiseen.

Raportin hakuehdoiksi voit valita haluamasi lehden ja kohdepäivän, johon saakka laskutusta ennustetaan. 

Raportti ajetaan taustajona ja sen saa tulostettua vain Excel-muotoisena.

![Raportit](/img/versiotiedotteet/laskutusennuste1.png)
*Raportti löytyy tilausten raporteista.*

![Raportit](/img/versiotiedotteet/laskutusennuste.png)
*Raportin hakuehdot*

### ALV-myynnit maittain

Tilauslaskujen ALV-raportti laskun tuoteriveiltä maittain. Raportista saa erittelyn tai yhteenvedon Suomi / EU / muu maailma -jaolla.

Raportin hakuehtoja ovat:

- Valitse tietty **tuoteryhmä/tuotteet** raportille tai kaikki tuotteet
- Valise tilauksen **toimistusmaan maakoodi** tai kaikki
    - haetaan vain valittuihin maakoodeihin liittyvät tilaukset ja niiden laskut
- **Hakuaikaväli**
- **Asiakastyyppi:** Kaikki, Yritysasiakkaat (VAT- tai Y-tunnus löytyy), Henkilöasiakkaat (ei VAT- tai Y-tunnusta) 
    - haetaan vain valitun asiakastyyppiin liittyvät laskut
- **Raportin tarkkuus:** Erittely tai Yhteenveto
    - **Erittely** näyttää kaikki laskut
    - **Yhteenveto** näyttää laskujen yhteen lasketut summat maittain

![Raportit](/img/versiotiedotteet/alvmyynnit.png)

### Avoimet laskut -raporttia muokattu

**Avoimet laskut** -raportin Excel-versioon saa nyt mukaan laskujen tuoterivit sekä laskun viitenumeron

![Raportit](/img/versiotiedotteet/avoimet-laskut.png)

### Laskupäiväkirja-raporttia muokattu

- Raportista näkee nyt asiakkaan Y-tunnuksen, jos sellainen on asiakkaan tiedoissa
- Raportin lopussa näkee yhteenlaskettuna kuukausittaiset summat

![Raportit](/img/versiotiedotteet/laskupaivakirja.png)

![Raportit](/img/versiotiedotteet/laskupaivakirja2.png)

*Kuva demo-järjestelmästä, keksittyä tietoa.*

