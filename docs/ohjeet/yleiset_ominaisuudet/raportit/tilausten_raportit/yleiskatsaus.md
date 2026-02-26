---
sidebar_position: 1
title: Tilausten raportit
---

## Milloin käyttää tätä sivua vs. Jaksotusraportit-sivua

Käytä tätä sivua, kun haluat yleiskuvan kaikista **Tilausten raportit** -osion raporteista.
Siirry [**Jaksotusraportit**-sivulle](/docs/ohjeet/yleiset_ominaisuudet/jaksotusraportit), kun tarvitset tarkemmat ohjeet jaksotuksen hakuehdoista, sarakkeista ja siirtovelkaraportista.

# Tilausten raportit

### Tilausmyynti vuosittain

**Tilausmyynti vuosittain** -raportilla näytetään tilausmyynti jokaiselta kuukaudelta vuoden aikana. Myyntimäärät näytetään sekä ALV:illisina että ALV:ittomina.

![Raportit](/img/ohjeet/tilausmyynti-vuosittain.png)

### Maksamattomat tilaukset

**Maksamattomat tilaukset** -raportille haetaan maksamattomat tilaukset.  

Hakuehtoina voi käyttää mm.:

- lasku on erääntynyt  
- maksumuistutus #1/#2 on erääntynyt  
- tilausta ei ole katkaistu  
- laskua maksamattomista ei ole luotu  
- lasku maksamattomista on luotu  

Raportin luominen vaatii vähintään yhden hakuehdon aktivointia. Voit asettaa päivän, josta eteenpäin maksamattomia laskuja haetaan. Näin voit rajata vanhat maksamattomat tilaukset pois.

1. **Raportti hakee** tilausten laskujen maksajat, joilla löytyy vähintään yksi hakuehdot täyttävä lasku.  
   - Hakuehtoihin osuvat tilaukset lihavoidaan.  
2. Käydään jokainen maksaja läpi ja haetaan tämän kaikki tilauslaskut.  
   - Laskun maksamatta oleva summa korostetaan punaisella, mikäli laskun eräpäivästä on kulunut yli 14 vrk.

![Raportit](/img/ohjeet/maksamattomat.png)

### Maksetut tilaukset

**Maksetut tilaukset** -raportille haetaan tilaukset, joiden lasku on maksettu annetulla aikavälillä. Raportti laskee maksettujen laskujen summan yhteensä sekä erittelee ne myyjittäin.

![Raportit](/img/ohjeet/maksetut-tilaukset.png)

### Tilaukset ja niiden laskut

**Tilaukset ja niiden laskut** -raportille haetaan tilaukset, jotka ovat ainakin osittain voimassa annetulla aikavälillä (myös katkaistut tilaukset haetaan). Raportille haetaan tilauksen hinta sekä siihen liittyvät laskut.

![Raportit](/img/ohjeet/tilaukset-laskut.png)

### Tilaajan tilaukset laskutietoineen

**Tilaajan tilaukset laskutietoineen** -raportille haetaan asetetun aikavälin tilaajien kaikki tilaustiedot, laskutuspyynnöt ja laskut.  
Tilauksista haetaan vain ne, jotka päättyvät annetun alkupäivän jälkeen.

![Raportit](/img/ohjeet/tilaus-laskutiedot.png)

### Voimassaolevat tilaukset

**Voimassaolevat tilaukset** –raportilla koostetaan aktiiviset tilaustuotteet kappalemäärineen. Raportille haetaan aikavälin tilausten tilaajien kaikki tilaustiedot, laskutuspyynnöt ja laskut. Tilauksista haetaan vain ne, jotka päättyvät annetun alkupäivän jälkeen.
 
![Raportit](/img/ohjeet/raportit3.png)

### Päättyvät tilaukset joita uudempi tilaus löytyy

**Päättyvät tilaukset, joita uudempi tilaus löytyy** –raportille haetaan asetetulla aikavälillä päättyvät tilaukset, joiden tilaajilta löytyy uusi alkava tilaus päättyvän tilauksen jälkeen.

![Raportit](/img/ohjeet/paat-tilaukset.png)

### Päättyvät tilaukset joita uudempi tilaus löytyy katkaistuna

**Päättyvät tilaukset, joita uudempi tilaus löytyy katkaistuna** –raportille haetaan asetetulla aikavälillä päättyvät tilaukset, joiden tilaajilta löytyy uusi tilaus, jolle on asetettu katkaisupäivämäärä.

![Raportit](/img/ohjeet/paat-tilaukset2.png)

### Tilaajien uusimmat tilaukset

**Tilaajien uusimmat tilaukset** –raportille haetaan tilaajat, joilla on aikavälillä voimassa olevia tilauksia. Tämän jälkeen haetaan erikseen jokaisen tilaajan tilaukset taulukkoon uusimmasta alkaen. Tilauksille haetaan myös niihin liittyvät laskutuspyynnöt ja laskut. Katkaistut tilaukset voidaan karsia pois valinnalla.

![Raportit](/img/ohjeet/uudet-tilaukset.png)

### Tilaustulojen jaksotus (laskuilla)

**Tilaustulojen jaksotus (laskuilla)** –raportti perustuu laskutettuihin tilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten laskut ja niiden maksusuoritukset. Laskun summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan, kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

![Raportit](/img/ohjeet/tilausten-jaksotus.png)

### Tilaustulojen jaksotus (laskuilla), digi

**Tilaustulojen jaksotus (laskuilla), digi** –raportti perustuu laskutettuihin digitilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten laskut ja niiden maksusuoritukset. Laskun summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan, kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

### Tilaustulojen jaksotus yhteenveto 

**Tilaustulojen jaksotus, yhteenveto** –raportilla esitetään yhteenveto tilaustulojen jaksotuksesta, jossa lasketaan kuinka paljon tilausmaksuista on jo suoritettu ja kuinka paljon suorittamatta annetulla ajanjaksolla.

![Raportit](/img/ohjeet/tilausten-jaksotus3.png)

### Tilaustulojen jaksotus (suorituksilla)

**Tilaustulojen jaksotus (suorituksilla)** –raportti perustuu maksettuihin tilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten suoritukset ja niiden laskut. Suorituksen summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan, kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

![Raportit](/img/ohjeet/tilausten-jaksotus4.png)

### Tilaustulojen jaksotus (suorituksilla), digi

**Tilaustulojen jaksotus (suorituksilla), digi** –raportti perustuu maksettuihin digitilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten suoritukset ja niiden laskut. Suorituksen summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan, kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

### Tilausten jaksotus laskuilla kuukasittain

**Tilausten jaksotus laskuilla kuukausittain** –raportti näyttää kuukausikohtaisesti laskutettujen tilausten jaksotustiedot.

![Raportit](/img/ohjeet/tilausten-jaksotus6.png)

<!--  ### Tilausten jaksotus II

Raportti perustuu aikavälillä luotuihin tai laskutettuihin tilauksiin.-->

### Aikavälillä päättyneet tilaukset

**Aikavälillä päättyneet tilaukset** –raportille haetaan lehden tilaajat, joiden tilaus on päättynyt tai peruutettu aikavälillä.  
Karsitaan pois poistetut (sis. kuolleet), markkinointikieltoiset sekä ne, joiden tilauksen peruutussyy on KUOLLUT, MAKSAMATTA PÄÄTTYNYT, SAIRAS tai TALOUDELLISET SYYT. Tilauksen peruutussyy näytetään omassa sarakkeessaan.

### Passiivit tilaajat

**Passiiviset tilaajat** –raportille haetaan lehden tilaajat, joiden viimeisin tilaus on päättynyt annettua päivää ennen. Tilauksen peruutussyy näytetään omassa sarakkeessaan (huomioi mm. maksamatta päättyneet). Voit poistaa tuplia sähköpostilla, puhelinnumerolla, osoitteella ja nimellä (hidastaa hakua huomattavasti).  Ohjelma etsii tällöin esimerkiksi samalla osoitteella olevia aktiivisia tilauksia, ja jos löytyy, osaa jättää tilajaan pois raportilta. Kyseiset tilaukset näytetään Excelin lopussa.  

> Koska tämä on iso raportti, se suoritetaan tausta-ajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä, kun se on valmis.

### Tilausten tiedot

**Tilausten tiedot** –raportille haetaan kaikki tilaajat tilaustietoineen. Voit valita, näytetäänkö sama tilaaja vain kerran.  

> Koska tämä on iso raportti, se suoritetaan tausta-ajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä, kun se on valmis.

![Raportit](/img/ohjeet/tilausten-tiedot.png)

### Kontaktit joilla ei ole tilauksia

**Kontaktit, joilla ei ole tilauksia** –raportille haetaan kaikki kontaktit, joilla ei ole voimassa olevaa tilausta annetulla aikavälillä.  

> Koska tämä on iso raportti, se suoritetaan tausta-ajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä, kun se on valmis.

![Raportit](/img/ohjeet/kontaktit-ei-tilauksia.png)

### Tilausten jaksotus aikajanalla (tiliöintien kautta)

**Tilausten jaksotus aikajanalla (tiliöintien kautta)** –raportti hakee annettuna aikavälinä ainakin osittain voimassa olevat tilaukset. Tilauksiin liittyvistä summista haetaan valinnan mukaan joko laskutetut tai maksetut summat. Annettu aikaväli jaetaan kuukausille, ja joka kuun vaihteessa haetaan kuitattu (suoritettu) ja maksettava rahamäärä (velka). Jaksotus tehdään valinnan mukaan joko lehden numeroiden ilmestymisten mukaan (kaikissa kuukausissa ei välttämättä ole jaksotusta, mikäli lehti ei ilmesty) tai tilausajan perusteella (joka kuukaudessa jaksotusta tilausajan puitteissa). Summien koostamisessa käytetään laskun tiliöintejä. Laskutetuilla tilauksilla summat ovat verottomia (luontivaiheen Myyntitili MY), mutta maksetuilla verollisia (maksuvaiheen kuittaus K).  

> Koska tämä on iso raportti, se suoritetaan tausta-ajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä, kun se on valmis.

### Tilausten jaksotus aikajanalla (tuoterivien kautta)

**Tilausten jaksotus aikajanalla (tuoterivien kautta)** –raportti hakee annettuna aikavälinä ainakin osittain voimassa olevat tilaukset. Tilauksiin liittyvistä summista haetaan valinnan mukaan joko laskutetut tai maksetut summat. Annettu aikaväli jaetaan kuukausille, ja joka kuun vaihteessa haetaan kuitattu (suoritettu) ja maksettava rahamäärä (velka). Jaksotus tehdään valinnan mukaan joko lehden numeroiden ilmestymisten mukaan (kaikissa kuukausissa ei välttämättä ole jaksotusta, mikäli lehti ei ilmesty) tai tilausajan perusteella (joka kuukaudessa jaksotusta tilausajan puitteissa). Summien koostamisessa käytetään laskun tiliöintejä. Laskutetuilla tilauksilla summat ovat verottomia (luontivaiheen Myyntitili MY), mutta maksetuilla verollisia (maksuvaiheen kuittaus K).  

> Koska tämä on iso raportti, se suoritetaan tausta-ajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä, kun se on valmis.

### Toimitetut tuotteet

**Toimitetut tuotteet** –raportti hakee annettuna aikavälinä luodut laskut, jotka liittyvät maksamattomien tilausten katkaisuihin.  
Asiakkaan tilaus on katkaistu, ja toimitetuista lehdistä on luotu loppulasku tarkenteella “toimitetut tuotteet”.

![Raportit](/img/ohjeet/toimitetut.png)

<!-- Jakelureklamaatiot -->

