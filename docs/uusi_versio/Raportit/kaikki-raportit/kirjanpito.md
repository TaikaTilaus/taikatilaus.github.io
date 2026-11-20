---
sidebar_position: 9
title: Kirjanpito-raportit
description: Kirjanpito-ryhmän raporttien avaaminen ja käyttäminen.
---

# Kirjanpito-raportit

Avaa **Raportit → Kaikki raportit** ja valitse **Kirjanpito**-ryhmä. Luettelossa näkyvät tämän ryhmän raportit ja tallennetut haut. Voit rajata luetteloa raportin nimellä ja lisääjällä.

1. Avaa haluamasi raportti napsauttamalla sen riviä tai **Avaa**-painiketta.
2. Valitse raportin hakuehdot. Käytettävissä olevat ehdot vaihtelevat raportin mukaan.
3. Napsauta **Hae** ja tarkista tulosten yhteenvetoon merkityt hakuehdot.

Valitse **Sarakkeet**-painikkeella taulukossa ja viennissä tarvittavat sarakkeet sekä niiden järjestys. Sarakevalinta tallentuu sinulle raporttikohtaisesti. Kuvaaja käyttää koko raporttia sarakevalinnasta riippumatta.

Raporttien yhteiset toiminnot, kuten kuvaajat, vientimuodot, hakuehtojen tallentaminen ja arkistointi, kuvataan sivulla [Kaikki raportit](./index.md#raportin-käyttäminen).

## ALV myynnit maittain

Raportti näyttää myynnin ja arvonlisäveron maittain. Voit valita erittelyn tai yhteenvedon ja rajata tuloksen asiakastyypin, tuotteiden ja maiden mukaan.

Hakuehdot:

- **Aikaväli**
- **Erittely tai yhteenveto**
- **Asiakastyyppi**
- **Tuotteet**
- **Maat**

## Avoimet laskut

Raportti näyttää laskut, jotka ovat avoinna valittuna päivänä. Voit ryhmitellä ne maksajittain ja ottaa mukaan maksumuistutusten päivät, myöhemmin maksetut laskut ja poistetut laskut.

Hakuehdot:

- **Kohdepäivä**
- **Laskutyyppi**
- **Maksajittain**
- **Maksumuistutusten päivät**
- **Myöhemmin maksetut**
- **Poistetut**

## Ennakkomaksut-tili

Raportti näyttää Ennakkomaksut-tilin kirjaukset. Tili määritetään asetuksessa MAKSUJEN_ENNAKKOMAKSUJEN_TILI.

Hakuehdot:

- **Aikaväli**

## Kaikki tiliöinnit

Raportti listaa aikavälin kaikki tiliöinnit. Voit rajata tulosta tileillä.

Hakuehdot:

- **Aikaväli**
- **Tilit**

## Kirjanpitoyhteenvedon tiliöintien tarkistaminen

Raportti listaa laskut, joiden aikavälin tiliöinnit eivät summaudu nollaan, ja näyttää laskun ja maksujen tiliöinnit ja erotuksen. Valinta **Ilman laskuliitoksia** listaa aikavälin kaikki tiliöinnit ja merkitsee puuttuvan tai poistetun laskun ja puuttuvan suorituksen.

Hakuehdot:

- **Aikaväli**
- **Ilman laskuliitoksia**

## Kirjanpitoyhteenveto

Raportti kokoaa aikavälin laskujen ja maksujen kirjanpitosummat tileittäin. Sillä voit tarkistaa, mitä kirjanpitoon on menossa.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**
- **Vertailu laskujen kautta**

## Laskujen kaikki tiedot

Raportti näyttää laskun kaikki tiedot yhdellä rivillä. Valinnalla **Vain virheelliset** näet vain laskut, joissa on virhe.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**
- **Vain virheelliset**

## Laskujen tiliöinnit

Raportti listaa laskujen tiliöinnit riveittäin. Voit ottaa mukaan laskun kaikki tiliöinnit, ei vain valitun tilin tiliöintejä.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**
- **Tilit**
- **Laskun kaikki tiliöinnit**

## Laskupäiväkirja

Raportti on aikavälin laskupäiväkirja. Tuloksen alla ovat tilisummat. Voit rajata sen vain laskuihin, vain hyvityslaskuihin tai vain hyvittämättömiin.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi sekä valinta vain laskut**
- **Vain hyvityslaskut tai vain hyvittämättömät**

## Laskupäiväkirja ilman maksutietoja

Sama laskupäiväkirja ilman maksutietoja. Käytä sitä, kun tarvitset pelkän laskujen luettelon.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**

## Laskupäiväkirja tuoteriveillä

Laskupäiväkirja, jossa jokaisen laskun tuoterivit näkyvät. Raportti näyttää kaikki rivit myös suurilla laskumäärillä.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**

## Laskut

Tätä raporttia ei ole vielä tuotu uuteen järjestelmään.

## Laskut, joiden summa ja suoritusten tai kuittausten summa eroaa

Raportti listaa laskut, joiden suoritus- tai kuittaustiliöintien summa eroaa laskun summasta. Päätaulukossa näkyvät lasku, poikkeama ja virheet, esimerkiksi tuoterivi ilman tuotetta, tuotteelta puuttuva tili tai kirjauspäivä ennen laskun päivää. Alla ovat laskujen tuoterivit ja tiliöinnit.

Hakuehdot:

- **Aikaväli (laskun päivä)**
- **Laskutyyppi**

## Laskut, joiden tiliöinneissä on virheitä

Raportti listaa laskut, joiden laskun tai maksujen tiliöinnit eivät summaudu nollaan tai joilta laskun tiliöinnit puuttuvat. Asetuksella TILIOINTITARKISTUS_VANHAT_LASKUT_ENNEN (päivä) voit jättää pois tiliöinnittömät hyvitykset, joiden hyvitettävä lasku on tätä päivää vanhempi eikä sillä ole tiliöintejä. Ohitettujen määrä näkyy kuvauksessa.

Hakuehdot:

- **Aikaväli (laskun päivä)**
- **Laskutyyppi**

## Laskut, joissa ylisuoritus

Raportti listaa laskut, joille on maksettu enemmän kuin laskun summa. Näin löydät maksut, jotka pitää palauttaa tai kohdistaa toiseen laskuun.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**

## Luottotappioiksi kirjatut toimitetut tuotteet

Raportti näyttää tuotteet, jotka on toimitettu laskutetulle asiakkaalle ennen kuin lasku kirjattiin luottotappioksi.

Hakuehdot:

- **Aikaväli**

## Luottotappiot

Raportti listaa luottotappioksi kirjatut laskut.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**

## Maksumuistutukset

Raportti näyttää aikavälin maksumuistutukset. Maksumuistutusmaksut kirjataan tilille 9170.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**

## Maksun palautukset-tili

Raportti näyttää Maksun palautukset -tilin kirjaukset. Tili määritetään asetuksessa MAKSUJEN_PALAUTUSTEN_TILI.

Hakuehdot:

- **Aikaväli**

## Maksutapahtumaluettelo

Raportti luettelee aikavälin maksutapahtumat.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**

## Reskontraluettelo

Raportti listaa laskut ja maksut reskontran muodossa. Sitä käytetään myyntireskontran tarkasteluun.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**

## Suoritukset, joiden tiliöinneissä on virheitä

Raportti listaa aikavälin suoritukset, joilta puuttuu lasku, joiden laskulla ei ole kuittaustiliöintejä tai joiden rahamäärä eroaa kuittausten summasta.

Hakuehdot:

- **Aikaväli (kirjauspäivä)**
- **Ohita käsitellyt**

## Suorituspäiväkirja

Raportti on aikavälin suorituspäiväkirja, eli maksujen luettelo kirjauspäivän mukaan.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**

## Suorituspäiväkirja myyntitilillä

Suorituspäiväkirja, jossa suoritukset on eritelty myyntitilin mukaan.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**

## Tilausmyynti vuosittain

Raportti kertoo, paljonko tilauksia on myyty kuukausittain valitulla vuodella. Se laskee kunkin kuukauden aikana alkaneiden tilausten tuotteiden hinnat verottomana ja arvonlisäveron kanssa. Mukana ovat myös poistetut tilaukset.

Hakuehdot:

- **Kohdevuosi:** vuosi, jonka myynnin haluat nähdä.

:::note
Jos tuotteella ei ole hintaa, raportti laskee sen nollana eikä pysähdy siihen.
:::

## Tilausten laskutuspyynnöt ja laskut, joissa on poikkeavuutta

Raportti vertaa aikavälillä alkaneiden tilausten laskutuspyyntöjä ja laskuja tuotteen verolliseen hintaan. Virhe on, jos hinnalliselle tuotteelle ei ole pyyntöä eikä laskua, tai jos summa eroaa hinnasta.

Hakuehdot:

- **Tilauksen alkupäivä**
- **Vain virheelliset**

## Tiliöinnit (graafinen)

Tätä raporttia ei ole vielä tuotu uuteen järjestelmään.

## Tilit ja tuotteet

Raportti näyttää, mitkä tilit liittyvät mihinkin tuotteisiin aikavälin laskuilla.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**

## Tuottoerittely printti/digi

Raportti erittelee tuotot tuotteittain ja jakaa ne printti- ja digituotteisiin. Voit jättää tiettyjä myyntitilejä pois ja valita rivierittelyn.

Hakuehdot:

- **Aikaväli**
- **Pois jätettävät myyntitilit**
- **Rivierittely**

## Vientiluettelo

Raportti näyttää tiedot, jotka viedään kirjanpitoon valitulta aikaväliltä.

Hakuehdot:

- **Aikaväli**
- **Laskutyyppi**
