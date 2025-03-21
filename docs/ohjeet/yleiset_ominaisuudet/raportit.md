---
sidebar_position: 6
---

# Raportit

## Yleistä raporteista

![Raportit](/img/ohjeet/raportit.png)

**Raportit**–välilehdellä koostetaan erilaisia raportteja sovelluksen tiedoista käyttäjän valitsemassa tulostusmuodossa.

Raporttien painikkeen **?** -ikonista löytyy lisätietoja sen koostamiseen liittyen.

Valmiita raporttipohjia luodaan tarvittaessa **asiakaskohtaisesti** läpi käytyjen ja kunkin käyttäjän tarpeiden mukaisesti esim.
- Kirjanpitoon
- Laskutukseen
- Tilausmääriin
- Myyntimääriin liittyen

### Raportin hakukriteerien määrittely

![Raportit](/img/ohjeet/raportit2.png)

**Raporttipohjan valinnan** jälkeen määritellään tarkemmat hakukriteerit tietojen listausta varten esim.
- **syöttämällä** itse haluttu hakuaikavälin alku- ja loppupäivät
- Raportin haluttu **tulostustapa** (näytölle, PDF:lle, taulukkoon)
- **Kirjaisinkoko**, jolla voi esim. pienentää fonttia, mikäli haetut tiedot eivät mahdu siististi haetulle raportille
- **Raportin ulkoasu** (ruudukolla tai ilman), jolla voi häivyttää näkyvistä raportin taustataulukoinnin rajaviivat
- muita valintoja **raporttikohtaisesti** (esim. laskun tila Maksamattomat tilaukset -raportissa)

**Tee raportti** –painike tuottaa varsinaisen raportin tulostustavan mukaisesti
- Raportti ilmestyy näytölle
- Ilmestyy linkki raportin lataamiseen Excel-taulukkoon
- Ilmestyy linkki raportin lataamiseen PDF-tulosteeksi

![Raportit](/img/ohjeet/raportit7.png)

**Näytä raportin kuvaus** -painikkeesta saat näkyviin lisätietoa raportin luomiseen liittyen.

## Kirjanpidon raporttien kuvaukset

### Kirjanpitoyhteenveto

**Kirjanpitoyhteenveto**-raportilla haetaan annetulla aikavälillä kirjatut tiliöintitapahtumat tileittäin tilin debet- ja kredit puolille sekä lasketaan näiden summat. Jos kirjanpidossa ei ole virheitä, pitäisi debet ja kredet yhteensä olla saman suuruisia.

![Raportit](/img/ohjeet/kirjanpitoyhteenveto.png)

### Vientiluettelo

**Vientiluettelo**-raportilla näytetään kaikki tiliöintitapahtumat valitulta aikaväliltä ja ryhmitellään ne tileittäin. Raportilla näytetään myös tiliöintitapahtumaan liittyvä lasku ja laskun maksajan asiakasnumero.

![Raportit](/img/ohjeet/vientiluettelo.png)

### Laskupäiväkirja

Raportille haetaan annetulla aikavälillä päivätyt laskut ja näytetään niiden summa ja maksutiedot kuluvaan päivään verrattuna.

![Raportit](/img/ohjeet/laskupaivakirja.png)

<!--  ### Laskupäiväkirja Digi

Raportille haetaan annetulla aikavälillä päivätyt laskut, jotka sisältävät digituotteita, ja näytetään niiden summa ja maksutiedot kuluvaan päivään verrattuna. (Huom. Laskuissa voi olla muitakin tuotteita kuin Digi).

![Raportit](/img/ohjeet/laskupaivakirja-digi.png)-->

### Laskupäiväkirja ilman maksutietoja

Raportille haetaan annetulla aikavälillä päivätyt laskut ja näytetään niiden summa, mutta ei näytetä maksutietoja.

![Raportit](/img/ohjeet/laskupaivakirja2.png)

### Laskupäiväkirja tuoteriveillä

Raportille haetaan annetulla aikavälillä päivätyt laskut ja näytetään niiden summa, maksutiedot ja tuoterivit kuluvaan päivään verrattuna. Raportin lopussa esitetään eri tuotteiden summat yhteensä

![Raportit](/img/ohjeet/laskupaivakirja3.png)

![Raportit](/img/ohjeet/laskupaivakirja3-2.png)

### Reskontraluottelo

Raportille haetaan laskut, joilla on tiliöintitapahtumia annetulla aikavälillä ja lasketaan näiden summat. Raportin lopussa esitetään reskontran alkusaldo, aikavälin laskutiliöinnit, aikavälin maksut (kuittaukset), aikavälin maksut (suoritukset) sekä reskontran loppusaldo löytyneiden kirjausten mukaan laskettuna.

![Raportit](/img/ohjeet/reskontra.png)

![Raportit](/img/ohjeet/reskontra2.png)

### Maksutapahtumaluottelo

Raportille haetaan aikavälillä tulleet suoritukset ja näytetään ne ryhmiteltyinä kirjauspäivän mukaan. Kirjauspäivien sisällä suoritukset ryhmitellään tileittäin. Raportin lopussa esitetään eri tilien summat. Huomaa, että suoritus pitää tiliöidä (kohdistaa laskulle), jotta suoritus näkyy suorituspäiväkirjalla.

![Raportit](/img/ohjeet/maksutapahtumaluettelo.png)

![Raportit](/img/ohjeet/maksutapahtumaluettelo2.png)

### Avoimet laskut

Raportille haetaan kohdepäivänä maksamaton-tilassa olevat laskut. Raportilla huomioidaan laskujen kaikki maksusuoritukset kohdepäivää ennen ja kohdepäivänä. Maksetut laskut jätetään pois raportilta ja osasuoritukset huomioidaan maksamatta summassa. Tilinpäätöksessä (kalenterivuosi) kohdepäivänä on 31.12. jolloin huomioidaan kaikki suoritukset mitkä ovat tuleet ennen kello 23:59. Raportin lopussa näytetään asiakkaat (asiakasnumero ja nimi) ja kuinka paljon yksittäisillä asiakkailla on avoimia maksuja.

![Raportit](/img/ohjeet/avoimet-laskut.png)

![Raportit](/img/ohjeet/avoimet-laskut2.png)

### Laskut joissa ylisuoritus

Raportille haetaan annetulla aikaväliltä laskut, joilla maksamatta summa alle 0 euroa (ylisuoritus). Ylisuorituksella tarkoitetaan suoritusta, joka on suurempi kuin laskun summa. 

![Raportit](/img/ohjeet/ylisuoritus.png)

### Laskujen kaikki tiedot

**Laskujen kaikki tiedot** -raportilla listataan oikeellisten laskujen kaikki tiedot (asiakastiedot, tuotetiedot, summatiedot, tiliöinnit). Raportilla näytetään lisäksi myös tiedot puuttuvista tili-/tiliöintimäärityksistä Tilaus- & Myyntituotteissa, jos niitä on.

![Raportit](/img/ohjeet/raportit4.png)

### Suorituspäiväkirja

Raportille haetaan aikavälillä kirjatut suoritukset tiliöinneille. Huomaa, että suoritus ei näy tällä raportilla, jos sitä ei ole tiliöity (suoritusta ei ole liitetty laskulle).

![Raportit](/img/ohjeet/suorituspaivakirja.png)

### Suorituspäiväkirja myyntitilillä

1. Haetaan laskut joissa on aikavälillä tiliöityjä suorituksia ja lajitellaan laskut kirjauspäivän mukaan.
2. Käydään laskut läpi ja haetaan laskuun kohdistuvat tiliöinnit (ei myyntisaamiset MS)
* Pankkiin kohdistuvat tiliöinnit (tiliöinnin tyyppi PA)
* Myyntiin kohdistuvat tiliöinnit (tiliöinnin tyyppi MY)
* ALV:hen kohdistuvat tiliöinnit (tiliöinnin tyyppi ALV)
* Loput tiliöinnit (ei MS)

Jos pankkiin tullut summa on eri kuin muiden tiliöintien summa näytetään erotus punaisella.

![Raportit](/img/ohjeet/suorituspaivakirja-tili.png)

### Laskujen tiliöinnit

Raportille haetaan annetun aikavälin laskut sekä laskuihin liittyvät tiliöinnit. Raportilla voidaan rajata, minkä tilin/tilien laskuja haetaan. Voit valita näytetäänkö laskulla pelkästään valitun tilin tiliöinnit vai kaikki. Raportti summaa loppuun tilien debet ja kredit -puolet.

![Raportit](/img/ohjeet/laskujen-tilioinnit.png)

![Raportit](/img/ohjeet/laskujen-tilioinnit2.png)

### Luottotappiot

Raportille haetaan luottotappioiksi kirjatut laskut. Luottotappio on myyjälle syntyvä tappio, joka syntyy, kun laskun saaja ei kykene maksamaan laskuaan.

![Raportit](/img/ohjeet/luottotappiot.png)

<!-- ### Luottotappioiksi kirjatut toimitetut tuotteet -->

<!-- ### Maksumuistutukset -->

### Tilit ja tuotteet

Raportille haetaan annetulle aikavälille kirjattuihin tiliöinteihin liittyvät tilit ja niihin liittyvät tuotteet.

![Raportit](/img/ohjeet/tilit-ja-tuotteet.png)

### Kaikki tiliöinnit

Raportilla näytetään kaikki tiliöinnit aikajärjestyksessä, uusin ylinnä. Raporttia voi käyttää uusien maksujen tiliöintien tarkastamiseen.

![Raportit](/img/ohjeet/tilioinnit.png)

### Asiakassaldot

**Raportit**-välilehdeltä löydät raportin **Asiakassaldot**, jolta näet asiakkailla olevat saldot ja saldotapahtumat (esim. saldoa on käytetty laskun maksamiseen).

![Asiakaskortti - Laskutiedot](/img/ohjeet/asiakassaldot.png)

Raportin määrityksistä voit valita:
- Aikavälin, jolta haetaan palautettavia summia
- Tulostusmuodon (Näytölle, Excel, PDF)
- Kirjaisinkoon
- Raportin ulkoasun (ruudukolla tai ilman)

![Asiakaskortti - Laskutiedot](/img/ohjeet/asiakassaldot2.png)

Raportilta näet:
- SaldoIDn
- Kirjauspäivän
- Saldosumman
- Sisäisen selitteen, jossa lukee tiedot saldon käytöstä, esim. saldon summa ja minkä laskun maksamiseen saldoa on käytetty.
- Ulkoisen selitteen, joka näkyy laskulla
- Lehden, johon saldo liittyy
- Laskun numeron, johon saldoa on käytetty
- Käyttöpäivän

Viimeisellä rivillä ennen seuraava asiakasta, lukee asiakkaan tämänhetkinen saldo.

![Asiakaskortti - Laskutiedot](/img/ohjeet/asiakassaldot3.png)

### Ennakkomaksut-tili

**Raportit**-välilehdeltä löydät raportin **Ennakkomaksut-tili**, jolta näet Ennakkomaksutilin (saldotili) tapahtumat ja saldon kohdepäivänä.

![Asiakaskortti - Laskutiedot](/img/ohjeet/ennakkomaksut.png)

Raportilla näkyy:
- saldotiliin liittyvät tiliöinnit (lisäys tilille on miinusmerkkinen - , ja saldon käyttö on plussamerkkinen +)
- kirjauspäivät
- summat
- laskun numerot
- asiakasnumerot
- asiakkaan tiedot
- tiliöintien määrät ja summan yhteensä per asiakas
- yhteenvedon raportin lopussa

![Asiakaskortti - Laskutiedot](/img/ohjeet/ennakkomaksut3.png)

### Maksun palautukset

**HUOM! ETTÄ RAHANPALAUTUS TILIÖITYY OIKEIN, PITÄÄ RAHANPALAUTUKSET KÄSITELLÄ TÄLLÄ RAPORTILLA.**

**Raportit**-välilehdeltä löydät raportin **Maksun palautukset**, millä listataan asiakkaille tehtävät palautukset. Raportilta voi kuitata palautetuiksi summia, jonka jälkeen ne eivät enää näy raportilla (ellet erikseen valitse niitä näkyviksi) ja ne tiliöityvät oikein.

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti.png)
*Raportti löytyy kirjanpidon raporteista.*

Raportin määrityksistä voit valita:
- Näkyvätkö jo käsitellyt palautukset raportilla
- Aikavälin, jolta haetaan palautettavia summia
- Tulostusmuodon (Näytölle, Excel, PDF)
- Kirjaisinkoon
- Raportin ulkoasun (ruudukolla tai ilman)

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti2.png)

Kun raportti on tulostettu näytölle, voit käsitelle yksittäisiä palautuksia (esimerkin raportissa näkyy myös ennakkomaksut).

Raportin ensimmäisessä sarakkeessa näkyy jokaisen palautuksen uniikki **TiliöintiID**, kopiomalla sen raportin alla olevaan kenttään (TiliöintiID) voit:
- Kuitata summan käsitellyksi (palautus on tehty asiakkaalle), jolloin se poistuu raportilta, ellet raportin määrityksistä aseta käsiteltyjä summia näkyviksi
    - **Kuittaa käsitellyksi** -toiminto palauttaa kyseisen summan (-) pankkiin (pankkitilin tiliöinti) sekä tiliöi summan pois palautusten tililtä (+).

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti3.png)

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti5.png)

*Valitse yrityksesi pankkitili, jolta palautus asiakkaan tilille tehtiin.*

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti6.png)

*Painamalla Kuittaa palautus käsitellyksi -painiketta, luot palautuksen tiliöinnit ja merkitset palautuksen käsitellyksi, jolloin se poistuu raportilta.*

- muokata tiliöinnin 
    - lisätietoja
    - tilinumeroa, mihin palautus tehdään

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti4.png)

### Tiliöintien lukitseminen

Tiliöintitapahtumat voidaan lukita haluttuun historiapäivään saakka. Esim. edellisen vuoden viimeinen päivä. Kirjauksia ei voi lukitsemisen jälkeen tehdä valitulle päivälle tai sitä aikaisemmille päiville.

![Tiliöintien lukitseminen](/img/ohjeet/lukittu.png)

![Tiliöintien lukitseminen](/img/ohjeet/lukittu2.png)

## Tarkastusraportit

### Laskut joiden tiliöinneissä virheitä

**Laskut joiden tiliöinneissä virheitä** –raportti listaa laskut, joissa on virheellisiä tiliöintejä. Jos raportti löytää virheellisiä tiliöintejä, pitää mennä kyseiselle laskunumerolle ja korjata tiliöinnit niin että tiliöintien summa on nolla. Näet esimerkkejä suorituksien korjaamiseen [täältä](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/suoritukset)

![Raportit](/img/ohjeet/raportit5.png)

### Kirjanpitoyhteenvedon tiliöintien tarkastaminen

Raportti hakee aikavälin laskuihin liitetyt tiliöinnit tiliöinnin kirjauspäivällä. Kunkin laskun tiliöinnit summataan ja jos summa on eri kuin nolla näytetään punaisella erotuksen määrä. Tiliöintien summan **täytyy olla nolla**, muuten tiliöinti on **virheellinen**. Hae kuukausi kerrallaan jolloin virheellisesti eri kuukausille kirjatut tiliöinnit selviävät. Jos raportti löytää virheellisiä tiliöintejä, pitää mennä kyseiselle laskunumerolle ja korjata tiliöinnit niin että tiliöintien summa on nolla. 

![Raportit](/img/ohjeet/tarkistusraportti.png)

### Suoritukset joiden tiliöinneissä virheitä

Raportti hakee saapuneista pankkisuorituksista suorituksia, joiden tiliöinneissä on virheitä. Jos raportti löytää virheellisiä tiliöintejä, pitää mennä kyseiselle laskunumerolle ja korjata tiliöinnit niin että tiliöintien summa on nolla. Näet esimerkkejä suorituksien korjaamiseen [täältä](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/suoritukset)

![Raportit](/img/ohjeet/suoritusten-tarkistus.png)

### Laskut joiden summa ja suoritusten tai kuittausten summa eroaa

Raportti näyttää laskut joiden summan ja tiliöintien summan välillä on eroa. Raportti näyttää eroavuudet tilien tarkkuudella. Suoritusten erotus näytetään punaisella. Jos raportti löytää virheellisiä tiliöintejä, pitää mennä kyseiselle laskunumerolle ja korjata tiliöinnit niin että tiliöintien summa on nolla. 

![Raportit](/img/ohjeet/poikkeavuudet.png)

### Tilausten laskutuspyynnöt ja laskut joissa poikkeavuutta

Raportilta voi tarkistaa onko tilausten laskutuspyynnöissä/laskuissa poikkeavuutta tilauksen hinnan kanssa. Joissain tapauksissa poikkeavuudet voivat olla tarkoituksellisia. Esim. asiakkaan kanssa on sovittu erikseen hinnasta. Jos poikkeavuudet eivät ole tarkoituksellisia, pitää mennä kyseiselle tilauksella ja ratkaista tilauksen hinnan ja laskutuspyyntöjen eroavuus, esim. muokkaamalla laskutuspyyntöjä.

![Raportit](/img/ohjeet/lapy-poikkeavuus.png)

<!-- Saldojen tarkastus -->

## Tilausten raportit

### Tilausmyynti vuosittain

Raportilla näytetään tilausmyynti jokaiselta kuukaudelta vuoden aikana. Myyntimäärät näytetään ALV:illa ja ALV:ittomana.

![Raportit](/img/ohjeet/tilausmyynti-vuosittain.png)

### Maksamattomat tilaukset

Raportille haetaan maksamattomat tilaukset. Hakuehtoina voit käyttää:

- lasku on erääntynyt
- maksumuistus #1/#2 erääntynyt
- tilausta ei ole katkaistu
- laskua maksamattomista ei ole luotu
- lasku maksamattomista on luotu

Raportin luominen vaatii vähintään yhden hakuehdon aktivointia. Voit asettaa päivän, josta eteenpäin maksamattomia laskuja haetaan. Näin karsit vanhoja maksamattomia tilauksia.

1. Haetaan ne tilausten laskujen maksajat joita löytyy ainakin yksi hakuehdot täyttävä lasku.
- Hakuehtoihin osuvat tilaukset lihavoidaan.
2. Käydään jokainen maksaja läpi ja haetaan tämän kaikki tilauslaskut. Laskun maksamatta summa korostetaan punaisella mikäli laskun eräpäivästä on kulunut yli 14 vrk.

![Raportit](/img/ohjeet/maksamattomat.png)

### Maksetut tilaukset

Raportille haetaan tilaukset joiden lasku on maksettu annetulla aikavälillä. Lasketaan maksettujen laskujen summa yhteensä sekä Myyjittäin.

![Raportit](/img/ohjeet/maksetut-tilaukset.png)

### Tilaukset ja niiden laskut

1. Raportille haetaan tilaukset, mitkä ovat ainakin osittain voimassa annetulla aikavälillä. Tilaus haetaan vaikka se olisi katkaistu.
2. Raportille haetaan tilauksen hinta ja tilaukseen liittyvät laskut.

![Raportit](/img/ohjeet/tilaukset-laskut.png)

### Tilaajan tilaukset laskutietoineen

Raportille haetaan asetetun aikavälin tilausten tilaajien kaikki tilaustiedot, laskutuspyynnöt ja laskut. Tilauksista haetaan vain ne, mitkä päättyvät annetun alkupäivän jälkeen.

![Raportit](/img/ohjeet/tilaus-laskutiedot.png)

### Voimassaolevat tilaukset

 **Voimassaolevat tilaukset** –raportille koostetaan aktiiviset Tilaustuotteet kappalemäärineen. Aikavälin tilausten tilaajien kaikki tilaustiedot, laskutuspyynnöt ja laskut. Tilauksista haetaan vain ne mitkä päättyvät annetun alkupäivän jälkeen.
 
![Raportit](/img/ohjeet/raportit3.png)

### Päättyvät tilaukset joita uudempi tilaus löytyy

Raportille haetaan asetetulla aikavälillä päättyvät tilaukset, joiden tilaajilta löytyy uusi alkava tilaus päättyvän tilauksen jälkeen.

![Raportit](/img/ohjeet/paat-tilaukset.png)

### Päättyvät tilaukset joita uudempi tilaus löytyy katkaistuna

Raportille haetaan asetetulla aikavälillä päättyvät tilaukset, joiden tilaajilta löytyy uusi tilaus, jolle on asetettu katkaisupäivämäärä.

![Raportit](/img/ohjeet/paat-tilaukset2.png)

### Tilaajien uusimmat tilaukset

Raportille haetaan tilaajat, joilla on aikavälillä voimassa olevia tilauksia. Tämän jälkeen haetaan erikseen jokaisen tilaajan tilaukset taulukkoon uusimmasta alkaen. Tilauksille haetaan myös niihin liittyvät laskutuspyynnöt ja laskut. Katkaistut tilaukset voidaan karsia pois valinnalla.

![Raportit](/img/ohjeet/uudet-tilaukset.png)

### Tilaustulojen jaksotus (laskuilla)

Raportti perustuu laskutettuihin tilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten laskut ja niiden maksusuoritukset. Laskun summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

![Raportit](/img/ohjeet/tilausten-jaksotus.png)

### Tilaustulojen jaksotus (laskuilla), digi

Raportti perustuu laskutettuihin tilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten laskut ja niiden maksusuoritukset. Laskun summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

### Tilaustulojen jaksotus yhteenveto 

Yhteenveto tilaustulojen jaksotuksesta, jossa lasketaan kuinka paljon tilausmaksuista on jo suoritettu ja kuinka paljon suorittamatta annetulla ajanjaksolla.

![Raportit](/img/ohjeet/tilausten-jaksotus3.png)

### Tilaustulojen jaksotus (suorituksilla)

Raportti perustuu maksettuihin tilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten suoritukset ja niiden laskut. Suorituksen summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

![Raportit](/img/ohjeet/tilausten-jaksotus4.png)

### Tilaustulojen jaksotus (suorituksilla), digi

Raportti perustuu maksettuihin tilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten suoritukset ja niiden laskut. Suorituksen summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

### Tilausten jaksotus laskuilla kuukasittain

![Raportit](/img/ohjeet/tilausten-jaksotus6.png)

<!--  ### Tilausten jaksotus II

Raportti perustuu aikavälillä luotuihin tai laskutettuihin tilauksiin.-->

### Aikavälillä päättyneet tilaukset

Raportille haetaan lehden tilaajat joiden tilaus on päättynyt tai peruutettu aikavälillä. Karsitaan pois: poistetut (sis. kuolleet) ja markkinointikieltoiset sekä ne joiden tilauksen peruutussyy on: KUOLLUT, MAKSAMATTA PÄÄTTYNYT, SAIRAS, TALOUDELLISET SYYT. Tilauksen peruutussyy näytetään omassa sarakkeessaan.

### Passiivit tilaajat

Raportille haetaan lehden tilaajat joiden viimeisin tilaus on päättynyt annetta päivää ennen. Tilauksen peruutussyy näytetään omassa sarakkeessaan (huomioi mm. maksamatta päättyneet). Voit poistaa tuplia sähköpostilla, puhelinnumerolla, osoitteella ja nimellä (hidastaa hakua huomattavasti). Ohjelma etsii tällöin esim samalla osoitteella olevia aktiivisia tilauksia ja jos löytyy osaa jättää passiivisen tilauksen pois. (Tilattu hieman eri tiedoilla). Ko. tilaukset näytetään Excelin lopussa. 

Koska tämä on iso raportti, suoritetaan se taustajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä.

### Tilausten tiedot

Raportille haetaan kaikki tilaajat tilaustietoineen. Voit valita näytetäänkö sama tilaaja vain kerran. Koska tämä on iso raportti, suoritetaan se taustajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä.

![Raportit](/img/ohjeet/tilausten-tiedot.png)

### Kontaktit joilla ei ole tilauksia

Raportille haetaan kaikki kontaktit, joilla ei voimassa olevaa tilausta annetulla aikavälillä millään aikavälin osalla. Koska tämä on iso raportti, suoritetaan se taustajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä.

![Raportit](/img/ohjeet/kontaktit-ei-tilauksia.png)

### Tilausten jaksotus aikajanalla (tiliöintien kautta)

Raportti hakee annettuna aikavälinä ainakin osoittain voimassa olevat tilaukset. Tilauksiin liittyvistä summista haetaan valinnan mukaan joko laskutetut tai maksetut summat. Annettu aikaväli jaetaan kuukausille ja joka kuun vaihteessa haetaan kuitattu (suoritettu) ja maksettava rahamäärä (velka). Jaksotus tehdään valinnan mukaan joko lehden numeroiden ilmestumisillä (kaikissa kuukausissa ei välttämättä ole jaksotusta mikäli lehti ei ilmesty) tai tilausaikaa (joka kuukaudessa jaksotusta tilausajan puitteissa). Summien koostamisessa käytetään laskun tiliöintejä. Laskutetuilla tilauksilla haettaessa summat ovat verottomia (luontivaiheen Myyntitili MY) mutta maksetuilla verollisia (maksuvaiheen kuittaus K).

Koska tämä on iso raportti, suoritetaan se taustajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä.

### Tilausten jaksotus aikajanalla (tuoterivien kautta)

Raportti hakee annettuna aikavälinä ainakin osoittain voimassa olevat tilaukset. Tilauksiin liittyvistä summista haetaan valinnan mukaan joko laskutetut tai maksetut summat. Annettu aikaväli jaetaan kuukausille ja joka kuun vaihteessa haetaan kuitattu (suoritettu) ja maksettava rahamäärä (velka). Jaksotus tehdään valinnan mukaan joko lehden numeroiden ilmestumisillä (kaikissa kuukausissa ei välttämättä ole jaksotusta mikäli lehti ei ilmesty) tai tilausaikaa (joka kuukaudessa jaksotusta tilausajan puitteissa). Summien koostamisessa käytetään laskun tiliöintejä. Laskutetuilla tilauksilla haettaessa summat ovat verottomia (luontivaiheen Myyntitili MY) mutta maksetuilla verollisia (maksuvaiheen kuittaus K).

Koska tämä on iso raportti, suoritetaan se taustajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä.

### Toimitetut tuotteet

Raportti hakee annettuna aikavälinä luodut laskut liittyen maksamattomien tilausten katkaisuihin. Asiakkaan tilaus on katkaistu ja toimitetuista lehdistä on luotu lasku tarkenteella 'toimitetut tuotteet'.

![Raportit](/img/ohjeet/toimitetut.png)

<!-- Jakelureklamaatiot -->

## Ilmoitusmyynnin raportit

### Laskutetut ilmoitusmyynnit

Raportille haetaan laskutetut ilmoitusmyynnit. Raportilla näytetään laskun tiedot, asiakkaan tiedot ja ilmoitusvarauksen tiedot.

![Raportit](/img/ohjeet/laskutetut-myynnit.png)

### Laskuttamattomat ilmoitusmyynnit

Raportille haetaan laskuttamattomat ilmoitusmyynnit. Raportilla näytetään laskutuspyynnön tiedot, asiakkaan tiedot ja ilmoitusvarauksen tiedot.

![Raportit](/img/ohjeet/laskuttamattomat-myynnit.png)

### Myynnit myyjittäin laskujen kautta

Raportille koostetaan kaikki hakuaikavälillä myydyt ilmoitusvaraukset myyjittäin jaoteltuina, laskujen kautta haettuna.

![Raportit](/img/ohjeet/myynnit-myyjittain.png)

### Myynnit myyjittäin

**Myynnit myyjittäin** –raportille koostetaan kaikki hakuaikavälillä myydyt ilmoitusvaraukset myyjittäin jaoteltuina.

![Raportit](/img/ohjeet/raportit6.png)

### Myynnit myyjittäin, yhteenveto

Raportilla näytetään yhteenveto ilmoitusvarausmyynneistä myyjittäin, annetun aikavälin sisällä.

![Raportit](/img/ohjeet/myynnit-yhteenveto.png)

### Laskutetut erillistuotteet

Raportille haetaan asetetulla aikavälillä laskutetut erillistuotteet (esim. kirjat).

![Raportit](/img/ohjeet/erillistuotteet-raportti.png)

### Ilmoitusvarauksien raportit

Saat lisää ilmoitusmyyntiin liittyviä raportteja [**Ilmoitusvaraukset**](/docs/ohjeet/ilmoitustenhallinta/ilmoistusvaraukset)-välilehdeltä.

**Hakutuloksista** voi luoda erilaisia raportteja painamalla **Raportit**-painiketta ja sitten:
- **Luo Excel** –painikketta (hakutuloksien vienti Exceliin)
- **Lehden varausluettelo** -painikketta (yksittäisen julkaisun ilmoitusvaraukset)
- **Varausluettelo**-painikketta (kaikki varaukset valitulta aikaväliltä)
- **Palstamillimetritilasto** –painikketta <!-- //selitys -->
- **Laskutuksen tarkastuslista** -painikketta (määritellyn aikavälin ilmoitusvaraukset laskutustietoineen)
- **Laskutettavien lista** -painiketta (tiettynä päivänä laskutettavat ilmoitusvaraukset)

![Ilmoitusvaraukset](/img/ohjeet/ilmoitusvaraukset5.png)

## Graafiset raportit

### Tilaukset graafinen

**Tilaukset graafinen** -raportilta näet tilausmäärien kehittymisen valitsemallasi aikavälillä. Voit valita tietyt tilaustuotteet tai kaikki tilaustuotteet lehtikohtaisesti, ja verrata niiden tilausmäärien kehitystä keskenään.

![Raportit](/img/ohjeet/tilaukset-graafinen.png)

![Raportit](/img/ohjeet/tilaukset-graafinen2.png)

### Tiliöinnit graafinen

**Tiliöinnit graafinen** -raportilla näet eri tilien debet ja kredet määrien kehittymisen valitsemallassi aikavälillä.

![Raportit](/img/ohjeet/tilioinnit-graafinen.png)

![Raportit](/img/ohjeet/tilioinnit-graafinen2.png)

## Raporttien näkyvyyden muokkaus

Jos ole pääkäyttäjä, voit muokata raporttien näkyvyyttä eri käyttäjille Raportit-välilehdellä, painamalla **Raporttien näkyvyydet** -painiketta.

![Raportit](/img/ohjeet/raporttien-nakyvyys.png)

Kun olet painanut nappia, valitse haluamasi käyttäjä **Käyttäjätunnus**-valikosta. Säädä raporttien näkyvyyttä painamalla raporttien kohdalta. Vihreä painike tarkoittaa, että kyseinen raportti näkyy valitulle käyttäjälle ja punainen painike tarkoittaa, että se ei näy.

![Raportit](/img/ohjeet/raporttien-nakyvyys2.png)
