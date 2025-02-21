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

### Maksun palautukset

Raportilla näytetään asiakkaille palautettavat summat. Palautuksen jälkeen tiliöinnit voi kuitata pois (raha palautettu).

![Raportit](/img/ohjeet/maksunpalautus.png)

### Kaikki tiliöinnit

Raportilla näytetään kaikki tiliöinnit aikajärjestyksessä, uusin ylinnä. Raporttia voi käyttää uusien maksujen tiliöintien tarkastamiseen.

![Raportit](/img/ohjeet/tilioinnit.png)

### Asiakassaldot

Raportilla näytetään asiakkaiden saldona olevat maksut.

![Raportit](/img/ohjeet/asiakassaldo.png)

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

## Tilausten raportit

### Tilausmyynti vuosittain

Raportilla näytetään tilausmyynti jokaiselta kuukaudelta vuoden aikana. Myyntimäärät näytetään ALV:illa ja ALV:ittomana.

![Raportit](/img/ohjeet/tilausmyynti-vuosittain.png)

### Maksamattomat tilaukset

Raportille haetaan maksamattomat laskut. Hakuehtoina voit käyttää:

- lasku on erääntynyt
- maksumuistus #1/#2 erääntynyt
- tilausta ei ole katkaistu
- laskua maksamattomista ei ole luotu
- lasku maksamattomista on luotu

Raportin luominen vaatii vähintään yhden hakuehdon aktivointia.

1. Haetaan ne tilausten laskujen maksajat joita löytyy ainakin yksi hakuehdot täyttävä lasku.
- Hakuehtoihin osuvat tilaukset lihavoidaan.
2. Käydään jokainen maksaja läpi ja haetaan tämän kaikki tilauslaskut. Laskun maksamatta summa korostetaan punaisella mikäli laskun eräpäivästä on kulunut yli 14 vrk.

![Raportit](/img/ohjeet/maksamattomat.png)

### Maksetut tilaukset

Haetaan tilaukset joiden lasku on maksettu annetulla aikavälillä. Lasketaan maksettujen laskujen summa yhteensä sekä Myyjittäin.

![Raportit](/img/ohjeet/maksetut-tilaukset.png)

### Tilaukset ja niiden laskut

1. Haetaan tilaukset mitkä ainakin osittain voimassa annetulla aikavälillä. Tilaus haetaan vaikka se olisi katkaistu.
2. Haetaan tilauksen hinta ja tilaukseen liittyvät laskut.

![Raportit](/img/ohjeet/tilaukset-laskut.png)

### Tilaajan tilaukset laskutietoineen

Aikavälin tilausten tilaajien kaikki tilaustiedot, laskutuspyynnöt ja laskut. Tilauksista haetaan vain ne mitkä päättyvät annetun alkupäivän jälkeen.

![Raportit](/img/ohjeet/tilaus-laskutiedot.png)

### Voimassaolevat tilaukset

 **Voimassaolevat tilaukset** –raportille koostetaan aktiiviset Tilaustuotteet kappalemäärineen. Aikavälin tilausten tilaajien kaikki tilaustiedot, laskutuspyynnöt ja laskut. Tilauksista haetaan vain ne mitkä päättyvät annetun alkupäivän jälkeen.
 
![Raportit](/img/ohjeet/raportit3.png)

### Päättyvät tilaukset joita uudempi tilaus löytyy

![Raportit](/img/ohjeet/paat-tilaukset.png)

### Päättyvät tilaukset joita uudempi tilaus löytyy katkaistuna

![Raportit](/img/ohjeet/paat-tilaukset2.png)

### Tilaajien uusimmat tilaukset

Haetaan tilaajat joilla aikavälillä voimassa olevia tilauksia. Tämän jälkeen haetaan erikseen jokaisen tilaajan tilaukset taulukkoon uusimmasta alkaen. Tilauksille haetaan myös niihin liittyvät laskutuspyynnöt ja laskut. Katkaistut tilaukset voidaan karsia pois valinalla.

![Raportit](/img/ohjeet/uudet-tilaukset.png)

### Tilaustulojen jaksotus (laskuilla)

Raportti perustuu laskutettuihin tilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten laskut ja niiden maksusuoritukset. Laskun summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

![Raportit](/img/ohjeet/tilausten-jaksotus.png)

### Tilaustulojen jaksotus (laskuilla), digi

Raportti perustuu laskutettuihin tilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten laskut ja niiden maksusuoritukset. Laskun summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

### Tilaustulojen jaksotus yhteenveto

![Raportit](/img/ohjeet/tilausten-jaksotus3.png)

### Tilaustulojen jaksotus (suorituksilla)

Raportti perustuu maksettuihin tilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten suoritukset ja niiden laskut. Suorituksen summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

![Raportit](/img/ohjeet/tilausten-jaksotus4.png)

### Tilaustulojen jaksotus (suorituksilla), digi

Raportti perustuu maksettuihin tilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten suoritukset ja niiden laskut. Suorituksen summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

### Tilausten jaksotus laskuilla kuukasittain

![Raportit](/img/ohjeet/tilausten-jaksotus6.png)

### Tilausten jaksotus II

Raportti perustuu aikavälillä luotuihin tai laskutettuihin tilauksiin.

### Aikavälillä päättyneet tilaukset

Haetaan lehden tilaajat joiden tilaus on päättynyt tai peruutettu aikavälillä. Karsitaan pois: poistetut (sis. kuolleet) ja markkinointikieltoiset sekä ne joiden tilauksen peruutussyy on: KUOLLUT, MAKSAMATTA PÄÄTTYNYT, SAIRAS, TALOUDELLISET SYYT. Tilauksen peruutussyy näytetään omassa sarakkeessaan.

### Passiivit tilaajat

Haetaan lehden tilaajat joiden viimeisin tilaus on päättynyt annetta päivää ennen. Tilauksen peruutussyy näytetään omassa sarakkeessaan (huomioi mm. maksamatta päättyneet). Voit poistaa tuplia sähköpostilla, puhelinnumerolla, osoitteella ja nimellä (hidastaa hakua huomattavasti). Ohjelma etsii tällöin esim samalla osoitteella olevia aktiivisia tilauksia ja jos löytyy osaa jättää passiivisen tilauksen pois. (Tilattu hieman eri tiedoilla). Ko. tilaukset näytetään Excelin lopussa.

### Tilausten tiedot

Haetaan kaikki tilaajat tilaustietoineen. Voit valita näytetäänkö sama tilaaja vain kerran.

![Raportit](/img/ohjeet/tilausten-tiedot.png)

### Kontaktit joilla ei ole tilauksia

Haetaan kaikki kontaktit joilla ei voimassa olevaa tilausta annetulla aikavälillä millään aikavälin osalla.

### Tilausten jaksotus aikajanalla (tiliöintien kautta)

Raportti hakee annettuna aikavälinä ainakin osoittain voimassa olevat tilaukset. Tilauksiin liittyvistä summista haetaan valinnan mukaan joko laskutetut tai maksetut summat. Annettu aikaväli jaetaan kuukausille ja joka kuun vaihteessa haetaan kuitattu (suoritettu) ja maksettava rahamäärä (velka). Jaksotus tehdään valinnan mukaan joko lehden numeroiden ilmestumisillä (kaikissa kuukausissa ei välttämättä ole jaksotusta mikäli lehti ei ilmesty) tai tilausaikaa (joka kuukaudessa jaksotusta tilausajan puitteissa). Summien koostamisessa käytetään laskun tiliöintejä. Laskutetuilla tilauksilla haettaessa summat ovat verottomia (luontivaiheen Myyntitili MY) mutta maksetuilla verollisia (maksuvaiheen kuittaus K).

### Tilausten jaksotus aikajanalla (tuoterivien kautta)

Raportti hakee annettuna aikavälinä ainakin osoittain voimassa olevat tilaukset. Tilauksiin liittyvistä summista haetaan valinnan mukaan joko laskutetut tai maksetut summat. Annettu aikaväli jaetaan kuukausille ja joka kuun vaihteessa haetaan kuitattu (suoritettu) ja maksettava rahamäärä (velka). Jaksotus tehdään valinnan mukaan joko lehden numeroiden ilmestumisillä (kaikissa kuukausissa ei välttämättä ole jaksotusta mikäli lehti ei ilmesty) tai tilausaikaa (joka kuukaudessa jaksotusta tilausajan puitteissa). Summien koostamisessa käytetään laskun tiliöintejä. Laskutetuilla tilauksilla haettaessa summat ovat verottomia (luontivaiheen Myyntitili MY) mutta maksetuilla verollisia (maksuvaiheen kuittaus K).

### Toimitetut tuotteet

Raportti hakee annettuna aikavälinä luodut laskut liittyen maksamattomien tilausten katkaisuihin. Asiakkaan tilaus on katkaistu ja toimitetuista lehdistä on luotu lasku tarkenteella 'toimitetut tuotteet'.

## Ilmoitusmyynnin raportit

### Laskutetut ilmoitusmyynnit

![Raportit](/img/ohjeet/laskutetut-myynnit.png)

### Laskuttamattomat ilmoitusmyynnit

![Raportit](/img/ohjeet/laskuttamattomat-myynnit.png)

### Myynnit myyjittäin laskujen kautta

![Raportit](/img/ohjeet/myynnit-myyjittain.png)

### Myynnit myyjittäin

**Myynnit myyjittäin** –raportille koostetaan kaikki hakuaikavälillä myydyt ilmoitusvaraukset myyjittäin jaoteltuina.

![Raportit](/img/ohjeet/raportit6.png)

### Myynnit myyjittäin, yhteenveto

![Raportit](/img/ohjeet/myynnit-yhteenveto.png)

### Laskutetut erillistuotteet

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