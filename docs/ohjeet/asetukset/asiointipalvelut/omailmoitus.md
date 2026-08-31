---
sidebar_position: 3
---

# OmaIlmoitus

![OmaIlmoitus](/img/ohjeet/omailmoitus.png)

**OmaIlmoitus**–välilehdellä voit muokata OmaIlmoitus-sovelluksen asetuksia. OmaIlmoitus sovellus on loppuasiakkaille tarkoitettu itsepalvelusovellus ilmoituksien suunnitteluun ja ostoon. 

Voit esikatsella sovellusta painamalla alla olevista painikkeista. 

- **Tyhjä OmaIlmoitus** -vie sinut sovellukseen
- **Esitäytetty OmaIlmoitus** -vie sinut sovellukseen, jossa on esitäytetty tietoa, esim. esimerkkitekstejä ilmoituksissa.

![OmaIlmoitus](/img/ohjeet/omailmo-esikatselu.png)

## Yleiset asetukset

- **Omailmoitus-palvelun nimi** –kenttään laitetaan OmaIlmoitus-sovelluksen etusivulla näkyvä nimi sovellukselle.
- **Ilmoita.aspx ohjeteksti / HTML** –kenttään laitetaan OmaIlmoitus-sovelluksen etuvsivulla näkyvä infoteksti HTML-muodosssa.

![OmaIlmoitus](/img/ohjeet/omailmo-yleiset.png)

## Käytössä olevat ilmoitustyypit

Alla olevia kenttiä aktivoimalla asetuksista, OmaIlmoitus-sovellukseen tulee näkyviin valitut kategoriat.

- **Luokitellut ilmoitukset** - luokitellut ilmoitukset ovat rivi-ilmoituksia, esim. Ostaan, Myydään, Löydetty, Vuokrataan, jne
- **Perheilmoitukset** - esim. rippi-, hää-, vihki-, ja ristiäisilmoitukset
- **Kuolinilmoitukset**
- **Kokousilmoitukset** 
- **Tapahtumailmoitukset**
- **Jätä valmis ilmoitus** - toiminnolla asiakas voi jättää jo valmiin ilmoituksen palveluun 

![OmaIlmoitus](/img/ohjeet/omailmo-tyypit.png)

## Myyntituotteet ilmoitustyypeittäin

Alla oleviin kategoriohin voi valita oletus myyntituotteen, jota käytetään OmaIlmoituksessa ilmoitusten hinnoittelussa ja jotka näkyvät asiakkaan laskulla. Painamalla kategoriaa avautuu drop-down valikko, josta voit valita myyntituotteen järjestelmässä olemassa olevista myyntituotteista. Myyntituotteita voi lisätä [Asetukset / Tuotteet & Julkaisut / Myyntituotteet](https://support.taikatilaus.fi/docs/ohjeet/asetukset/tuotteet-ja-julkaisut/myyntituotteet) -välilehdeltä.

- **Luokitellut ilmoitukset** 
- **Perheilmoitukset** 
- **Kuolinilmoitukset** 
- **Kokousilmoitukset** 
- **Tapahtumailmoitukset** 
- **Jätä valmis ilmoitus** 

![OmaIlmoitus](/img/ohjeet/omailmo-tyypit2.png)

## Rivi-ilmoitusten osastot

**Rivi-ilmoitusten osastot** -kentässä määritellään ilmoittajan valittavissa olevat osastot, kuten Myytävänä ja Ostetaan. Osastoille voidaan määrittää oma myyntituote ja hinnoittelu, ilmoitusosaston tunniste sekä lisäasetuksia.

### Osaston lisääminen

Kirjoita jokainen osasto omalle rivilleen. Erota rivin tiedot puolipisteillä seuraavassa järjestyksessä:

```text
Nimi;MyyntituoteID;Tunniste;Liput
```

Vain osaston nimi on pakollinen. Jos jätät jonkin tiedon tyhjäksi mutta lisäät sen jälkeen muita tietoja, säilytä puolipisteet, jotta tiedot pysyvät oikeilla paikoillaan.

Voit lisätä osaston myös kentän alapuolella olevasta myyntituotteiden luettelosta. Napsauta haluamasi tuotteen kohdalla **Lisää**-painiketta, jolloin tuote lisätään kenttään osastoriviksi.

Jos jätät koko **Rivi-ilmoitusten osastot** -kentän tyhjäksi, käytössä ovat seuraavat oletusosastot: Halutaan vuokrata, Kadonnut, Löydetty, Myytävänä, Ostetaan ja Vuokrattavana.

### Osaston tiedot

| Kenttä | Ohje |
| --- | --- |
| **Nimi** | Ilmoittajalle näkyvä osaston nimi. Ilman nimeä oleva rivi ohitetaan. |
| **MyyntituoteID** | Osaston oman myyntituotteen tunniste. Myyntituote määrittää osaston palstamillimetrihinnan ja arvonlisäveron. Oman myyntituotteen avulla osaston hintaa voi muuttaa vaikuttamatta muihin osastoihin. Jos jätät kentän tyhjäksi, osasto käyttää rivi-ilmoitusten yhteistä myyntituotetta. |
| **Tunniste** | Ilmoitusosaston tunniste, joka siirtyy ilmoitusvaraukselle ja ohjaa ilmoituksen oikealle osastolle lehdessä. Käytä samaa tunnistetta kuin **Ilmoitusosastot**-asetuksessa. Jos jätät kentän tyhjäksi, tunniste päätellään myyntituotteen nimestä. Tällöin myyntituotteen nimen on vastattava Ilmoitusosastot-asetuksessa olevaa nimeä. |
| **Liput** | Osaston lisäasetukset. Tällä hetkellä käytettävissä on `VAKUUTUS`, joka edellyttää ilmoittajalta erillistä ”Vakuutan, että tiedot ovat oikein” -vahvistusta ennen maksamista. |

#### Esimerkki

```text
Myytävänä
Ostetaan;;052
Seuranhaku;1240;055;VAKUUTUS
```

- **Myytävänä:** käyttää yhteistä myyntituotetta ja sen hintaa. Ilmoitusosaston tunniste päätellään myyntituotteen nimestä.
- **Ostetaan:** käyttää yhteistä myyntituotetta, mutta ilmoitusosaston tunnisteeksi määritetään `052`. Kaksi peräkkäistä puolipistettä jättää MyyntituoteID-kentän tyhjäksi.
- **Seuranhaku:** käyttää myyntituotetta `1240` ja sen hinnoittelua. Ilmoitusosaston tunniste on `055`. Ilmoittajan on vahvistettava tietojen oikeellisuus ennen maksamista.

Esimerkin tunnisteet ovat havainnollistavia. Korvaa ne oman järjestelmäsi myyntituotteiden ja ilmoitusosastojen tunnisteilla.

![OmaIlmoitus](/img/ohjeet/rivi-ilmoitusten-osastot.png)

## Suunnittelu

Alla oleviin kentiin voit laittaa sovelluksen eri sivuilla olevia ohjetekstejä HTML-muodossa.

- **Suunnittelun oletusohje / HTML** - kenttään voit laittaa ohjeen, joka tulee oletuksena ilmoitusten suunnittelu sivulle.
- **Kuolinilmoitusten ohje / HTML** - kenttään voit laittaa ohjeen, joka tulee kuolinilmoitusten suunnittelu sivulle. Tämä ohittaa suunnittelun oletusohjeen.
- **Valmiin ilmoituksen ohje / HTML** - kenttää voi laitta ohjeen, joka tulee valmiin ilmoituksen lähetyssivulle.
- **Suunnittelun yhteydenotto-ohje / HTML** -kenttään voi laittaa erillisen ohjeen yhteydenotosta esim. ongelmatapauksissa, joka tulee suunnittelu -sivulle oletusohjeen tai kuolinilmoitusohjeen jälkeen.

![OmaIlmoitus](/img/ohjeet/omailmo-suunnittelu.png)

## Hyväksy ja maksa

- **Verkkomaksu käytössä** -kentän aktivoimalla sovelluksessa käytetään verkkomaksupalvelua ilmoitusten maksamiseen.
- **Maksupalvelu** -valikosta voit valita käytössä olevan maksupalvelun, esim. Paytrail tai Visma Pay. Maksupalvelu pitää olla jo yrityksellänne käytössä.
- **Käyttöehtojen URL** -kenttään voi laittaa osoitteen, josta lyötyy sovelluksen käyttöehdot.
- **Ilmoitusten käsittelijän sähköposti** -kenttään voi laittaa sähköpostiosoitteen, johon lähetetään kuittaukset asiakkaiden ostamista ilmoituksista.
- **Paluuosoite** -kenttään voi laittaa verkko-osoitteen, johon asiakas palautetaan Kiitos-sivun jälkeen. Esim. lehden etusivu.

![OmaIlmoitus](/img/ohjeet/omailmo-maksu.png)

