---
sidebar_position: 1
description: Uudistuksia TaikaTilaus-tuotteeseen 1.4.-31.5.2026 välisenä aikana
image: /img/social.png
keywords: [versiotiedote, vakioniput, raportit, tuottoerittely, tilaus- ja laskutusennuste, ALV-myynnit, avoimet laskut, laskupäiväkirja]
---

# Kesä–elokuu 2026

Uudistuksia TaikaTilaus-tuotteeseen 1.6.–31.8.2026 välisenä aikana.

> Kysy tarkemmin yksittäisten toiminnallisuuksien käyttöönotosta [tuestamme](https://taikatilaus.freshdesk.com/).

## Raportteja voi ajastaa tulevaisuuteen

Tausta-ajona muodostettavan raportin voi ajaa heti tai ajastaa myöhemmäksi valitsemalla päivämäärän ja kellonajan.

Raportin valmistumisesta voi lähettää sähköposti-ilmoituksen valitulle käyttäjälle. 

Ajastus on käytettävissä raporttityypeissä, jotka muodostetaan tausta-ajona. 

![Raportin ajastus](/img/versiotiedotteet/raportin-ajastus.png)

## Uusi sarake Uudet tilaukset -raportissa

**Uudet tilaukset** -raportille on lisätty **Tilaustapa**-sarake.

![Uudet tilaukset -raportti](/img/versiotiedotteet/tilaustapa2.png)

## Mediamyynnin alennussääntöjen hallinta

Asetuksiin on lisätty keskitetty alennussääntöjen hallinta. Sääntöjä voidaan tässä vaiheessa käyttää ilmoitusvarauksissa.

Alennussääntö voidaan määritellä esimerkiksi:

- kampanja- tai asiakaskohtaiseksi
- alennuskoodilla käytettäväksi
- määräajaksi voimassa olevaksi
- prosenttialennukseksi tai kiinteäksi nettohinnaksi
- tietylle tuotteelle, kanavalle tai julkaisulle

Sääntö voi lisäksi ohjata kaupan valitulle **myyjälle**, jolloin alennuskoodilla tullut varaus kohdistuu automaattisesti oikealle myyjälle. 
Kiinteähintaiselle display/uutiskirje -myyntituotteelle voidaan tallentaa myös hinnan sisältämä **näyttömäärä** (impressiot), jota voi tarvittaessa muokata varauskohtaisesti.

Asiakkaan voi hakea nimellä, asiakasnumerolla tai Y-tunnuksella. Tarkemmin kohdistettu sääntö ohittaa yleisemmän säännön.

![Alennukset](/img/versiotiedotteet/alennukset.png)

## Vastaanottoilmoitusten hakuun uusia aikarajauksia

Laskujen vastaanottoilmoituksia voi nyt hakea:

- valitulta kalenterikuukaudelta
- vapaasti määritellyltä alku- ja loppupäivän aikaväliltä

Uudet rajaukset helpottavat tietyn laskutusjakson verkkolaskuvastausten ja virhetilanteiden tarkastamista.

![Vastaanottoilmoitukset](/img/versiotiedotteet/vastaanottoilmoitukset-haku.png)

## Julkaisut voi viedä Exceliin

Asetusten **Julkaisut**-näkymästä voi viedä julkaisut Excel-tiedostoon. Vientiin voi valita kanavan ja ilmestymispäivän, josta alkaen julkaisut otetaan mukaan.

Excel sisältää muun muassa julkaisun:

- kanavan ja nimen
- numeron ja teeman
- sivumäärän
- ilmestymis- ja aineistopäivän
- ulkoisen tunnisteen

![Julkaisut](/img/versiotiedotteet/julkaisut-excel.png)

## Maksetun laskun voi tulostaa alkuperäisessä muodossa

Myös kokonaan maksettu lasku voidaan nyt avata ja tulostaa alkuperäisenä laskuna. Aiemmin alkuperäisen muodon tulostusta tarvittiin ja tarjottiin lähinnä maksumuistutuksiin liittyvissä tilanteissa.

![Lasku](/img/versiotiedotteet/tulosta-lasku.png)

## Kestotilausten jatkoajolle omat päivärajaukset

Kestotilausten jatkoajossa käytettävät päättymispäivän hakurajat voidaan nyt määritellä asetuksissa [**Asetukset/Ylläpito**](/docs/ohjeet/asetukset/yllapito)-välilehdeltä pääkäyttäjän toimesta. Erikseen määritellään, kuinka monta kuukautta menneisyyteen tai tulevaisuuteen jatkettavia tilauksia pystytään hakemaan.

Näin jatkoajon voi rajata omaan tilauskantaan sopivaksi ilman ohjelmakoodin muutoksia. Samalla jatkoajon virhetilanteiden käsittelyä on parannettu.

![Ylläpito](/img/versiotiedotteet/kestojatko.png)

## OmaIlmoituksen osastot ovat määriteltävissä

OmaIlmoituksen rivi-ilmoitusten osastot voidaan nyt määritellä asetuksissa. Osastolle voidaan antaa:

- ilmoittajalle näkyvä nimi
- oma myyntituote ja hinta
- lehden ilmoitusosaston tunniste
- lisävaatimuksia, kuten tietojen oikeellisuuden erillinen vakuuttaminen

Tämä mahdollistaa eri osastojen erilaisen hinnoittelun ilman ohjelmakoodin muutoksia. Asetukset löytyvät [**Asetukset/Asiointipalvelut/OmaIlmoitus**](/docs/ohjeet/asetukset/asiointipalvelut/omailmoitus) -välilehdeltä.

![OmaIlmoitus](/img/versiotiedotteet/omailmoitus.png)

## Tietoturvaa on vahvistettu

Kaudella tehtiin useita tietoturvaa parantavia muutoksia:

- tiedostolatausten käsittelyä on ohjattu kulkemaan tarkistetun reitin kautta
- lomakkeiden palvelinpuolen tarkistuksia on tiukennettu
- käytetyt kolmannen osapuolen komponentit on päivitetty ajantasaisiin versioihin

Lisäksi korjattiin HTML-sisällön puhdistuksessa ollut virhe, joka saattoi hukata osan tallennetusta tekstistä tai rikkoa muotoilun. Korjaus koskee muun muassa asetuksissa määriteltäviä viestipohjia.

## Integraatioiden uudistuksia

Kesän aikana on lisätty ja kehitetty myös asiakaskohtaisia integraatioita:

- uusi julkisten tilaustuotteiden hakurajapinta verkkosivustoja ja tilauslomakkeita varten
- Kärkimedian display-mainosten adConnexion-aineiston muodostaminen
- kirjautuminen ulkoisesta palvelusta JWT-tunnisteella
- Mega-tuonnissa määrän, ALV:n ja laskutuspyyntöjen käsittely lisätty

Näiden toimintojen saatavuus riippuu asiakkaalla käytössä olevista palveluista ja integraatioista.