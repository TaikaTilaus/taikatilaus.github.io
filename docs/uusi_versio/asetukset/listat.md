---
sidebar_position: 7
description: Listat — Asiakaslista, Tilauslista.
---

# Listat

**Listat**-sivulla määrität asiakas-, tilaus-, lasku- ja ilmoituslistojen oletusasetukset: miten tekstit näytetään ja mitkä lisähakuehdot ovat käytössä.

Avaa sivu valitsemalla **Asetukset → Listat.**

Muutokset tallennetaan vasta, kun napsautat sivun alareunan **Tallenna**-painiketta. Onnistuneen tallennuksen jälkeen painikkeen vieressä lukee **Tallennettu**.

:::warning HUOM!

Sivun asetukset ovat koko yrityksen oletuksia. Jokainen käyttäjä voi poiketa niistä omissa listoissaan valitsemalla listan **Sarakkeet**-valikosta **Lisäasetukset**. Käyttäjän oma valinta ohittaa yrityksen oletuksen. Jos käyttäjä palauttaa valinnan oletukseksi, hän seuraa jatkossa yrityksen oletusta.
:::

## Asiakaslista

### Lisätiedot kokonaisuudessaan

**Lisätiedot**-kentässä voi olla paljon tekstiä. Oletuksena asiakaslistalla näytetään vain tekstin alku, ja koko sisältö tulee näkyviin viemällä hiiren kentän päälle.

Ota **Näytä Lisätiedot kokonaisuudessaan listassa** käyttöön, jos haluat näyttää kentän koko sisällön suoraan listassa.

### Osoitteen osat

Valinta **Erota osoitteen osat omiin sarakkeisiin** jakaa listan osoitesarakkeet osiin:

- Katuosoite näytetään sarakkeina lähiosoite, katunumero, porras ja huoneisto.
- Postitoimipaikka näytetään sarakkeina postinumero ja postitoimipaikka.

Jako koskee myös Exportia.

### Tekstien kirjainkoko listassa

Valinnalla määrität, miten asiakas- ja tilauslistojen tekstisarakkeet näytetään:

- **Sellaisenaan (kuten tallennettu):** tekstit näytetään täsmälleen niin kuin ne on tallennettu.
- **KAIKKI ISOILLA KIRJAIMILLA:** kaikki tekstit näytetään isoilla kirjaimilla.
- **Nimet, paikat ja yritysten nimet isolla alkukirjaimella:** nimet, paikkakunnat ja yritysten nimet muutetaan alkukirjaimeltaan isoiksi. Muut tekstit, esimerkiksi tila ja lisätiedot, näytetään sellaisenaan.

Asetus koskee Asiakkaat-listan Nimi-, Myyjä-, Yritys-, Katuosoite- ja Postitoimipaikka-sarakkeita sekä Tilaukset-listan Tilaajan, Maksajan ja osoitteiden sarakkeita (postitoimipaikat mukaan lukien). Se on vain näyttöasetus: tallennettuja tietoja, hakua ja Exportia ei muuteta. [TARKISTA: koskeeko myös muita listoja, esimerkiksi Laskujen hakua; docs/listat.md mainitsee myös tilan ja Kyllä/Ei-sarakkeet]

### Lisähakuehdot käytössä

Valitse, mitkä lisähakuehdot näkyvät Asiakkaat-näkymän lisähakuehdoissa. Jokaisella ehdolla on valitsin: päällä oleva ehto näytetään, pois päältä oleva piilotetaan. Kaikki ehdot ovat oletuksena käytössä, ja uudet ehdot tulevat oletuksena käyttöön. Asiakkaan lisätietokenttien ehdot näkyvät aina.

Ehdot on ryhmitelty samoihin osioihin kuin hakupaneelissa:

**Asiakastyyppi ja ryhmä**
- Asiakastyyppi
- Ryhmän tyyppi ja arvo
- Ilmoitusasiakas (vain, kun tilaukset ja mediasivusto ovat molemmat käytössä)
- Lisäys- tai muokkauspäivä (alku- ja loppupäivä)

**Tilaukset (asiakas on tilaajana)** (vain tilausten hallinnassa)
- Tilauksen tila, tuoteryhmä ja tuote
- Aktiivinen tilaaja
- Passiivinen tilaaja

**Markkinointi**
- Markkinointi (kiellot ja kanavat)

**Hakukentät**
- Sukunimi, Etunimi, Yritys, Sähköposti, Puhelin
- Myyjä (vain mediasivustolla)
- Syntymävuosi, Laskun toimitustapa
- Lähiosoite, Postinumero, Postitoimipaikka, Maa
- Väliaikainen osoite: Lähiosoite, Postinumero ja Postitoimipaikka (vain tilausten hallinnassa)
- Estolista (vain tilausten hallinnassa)
- Markkinointikielto, Kuollut
- Päätunnus ja Alitunnus (vain, kun asiakkaiden käyttäjätunnukset ovat käytössä)

## Tilauslista

Osio näkyy vain, kun tilausten hallinta on käytössä.

### Lisätiedot kokonaisuudessaan

Asetus koskee sekä **Lisätiedot**- että **Lisätiedot tilaajalle** -saraketta. Ota **Näytä Lisätiedot kokonaisuudessaan listassa** käyttöön, jos haluat näyttää kenttien koko sisällön suoraan listassa.

### Lisähakuehdot käytössä

Valitse, mitkä lisähakuehdot näkyvät Tilaukset-näkymän lisähakuehdoissa:

- Asiakas (Valitse asiakas: tilaajana tai maksajana)
- Alkupäivä, loppupäivä ja aikavälin peruste
- Piilota poistetut tilaukset
- Tyyppi
- Maksettu-tila
- Uudet tilaukset ja jatkot
- Katkaistu
- Katkaisun syy
- Tilaajan maa
- Sama tai eri tilaaja ja maksaja

## Laskujen haku

Valitse, mitkä lisähakuehdot näkyvät Laskut → Laskujen haku -näkymässä:

- Tila
- Päiväkenttä, alkupäivä ja loppupäivä
- Toimitustapa
- Tyyppi
- Laskun muoto
- Asiakas (maksaja)

## Ilmoitukset

Valitse, mitkä lisähakuehdot näkyvät Ilmoitukset-näkymän lisähakuehdoissa:

- Myyjä
- Varauksen tila
- Ryhmä
- Tuote
- Ilmoitusosasto
- Myynnin numero
- Ilman aikaa
- Vain poliittiset
- Näytä maksajavaraukset
- Asiakkaan valinta