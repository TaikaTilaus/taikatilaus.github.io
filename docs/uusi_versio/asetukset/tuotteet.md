---
sidebar_position: 2
description: Tuotteet — Tilaus-, erillis- ja myyntituotteet.
---

# Tuotteet

**Tuotteet**-sivulla voit tarkastella ja hallita tilaus-, erillis- ja myyntituotteita.

Avaa sivu valitsemalla ylävalikosta **Asetukset → Tuotteet**.

![Tuotteet-sivun yleisnäkymä](/img/versio2/tuotteet.png)

## Tuotetyypin valitseminen

Valitse sivun yläreunasta tarkasteltava tuotetyyppi:

- **Tilaustuotteet**
- **Erillistuotteet**
- **Myyntituotteet**.

## Tuotteen muokkaaminen

Avaa tuotteen tiedot napsauttamalla riviä tai rivin vasemmassa reunassa olevaa kynäkuvaketta (Muokkaa lomakkeella). Lomake avautuu listan tilalle. 

Tallenna muutokset napsauttamalla **Tallenna** tai poistu tallentamatta napsauttamalla **Peruuta**. Lomakkeen alareunassa näkyy, milloin ja kuka tuotteen on lisännyt ja muuttanut.

![Tuotteen avaaminen muokattavaksi kynäkuvakkeella](/img/versio2/tuotteet4.png)

### Muokkaa listassa

Valitse listan yläreunasta **Muokkaa listassa**, niin voit muokata useita tuotteita suoraan listassa. Listassa voi muokata seuraavia tietoja: tuotenimi, ulkoinen tuotenimi, kampanja, lisätiedot, hinnat (myös erähinnat), uuden hinnan aktivoitumispäivä, ALV-%, kirjanpidon tilit ja piilotettu. 

Muuttuneet rivit merkitään, ja yläreunan **Tallenna muutokset (n)** -painike tallentaa ne kaikki kerralla. Rivin oman **Tallenna**-painikkeen avulla voit tallentaa yhden rivin.

### Tuotteen kopioiminen

Napsauta rivin **kopiokuvaketta** (Kopioi uudeksi tuotteeksi), tai tuotteen lomakkeella **Kopioi tuote**. 

Kopio avautuu lomakkeelle, mutta se tallentuu vasta, kun napsautat **Tallenna**. 

Kopio ei sisällä **Stripe-kytkentää** (tuotetyyppi ja hinta, kuponki), vaan ne täytyy kytkeä uudelle tuotteelle erikseen.

### Tuotteen poistaminen

Napsauta tuotteen lomakkeella **Poista** ja vahvista. Tuotetta ei poisteta kokonaan, vaan se merkitään piilotetuksi, koska tilaukset ja laskut viittaavat siihen edelleen. Piilotetun tuotteen näet listassa valinnalla **Näytä piilotetut**.

## Sarakkeet

**Sarakkeet**-painikkeesta valitset, mitkä sarakkeet listassa näytetään, ja **Palauta oletukset** palauttaa oletusvalinnat. 

Valinta tallentuu käyttäjäkohtaisesti. 

Listassa on sarakkeita esimerkiksi tuotteen tiedoista, hinnoista (veroton ja verollinen), uudesta hinnasta (aktivoitumispäivä, veroton ja verollinen), kirjanpidon tileistä, tilaustyypistä ja Stripe-kytkennästä (Stripe tuotetyyppi ja hinta, Stripe kuponki ja hinta). Voit lajitella listan napsauttamalla yksittäistä sarakeotsikkoa.

## Tuotteiden vieminen

Napsauta **Export** avataksesi vientivalikon. Valikossa näkyy vietävien rivien määrä.

Voit:

- tulostaa tuoteluettelon
- kopioida tuoteluettelon leikepöydälle
- viedä tuoteluettelon PDF-, Excel-, CSV-, JSON- tai HTML-muodossa.

![Tuoteluettelon tulostus- ja vientivalikko](/img/versio2/tuotteet3.png)

## Tilaustuotteet

### Tilaustuotteiden hakeminen ja suodattaminen

Hakukenttä hakee sitä mukaa, kun kirjoitat. Kentän ohjeteksti kertoo, mistä tiedoista haetaan (esimerkiksi tuoteryhmä, kampanja, tuotenimi, lisätiedot, tilauslaji, SKU tai TuoteID, ja Tuotenumero silloin, kun se on käytössä). Hakusanan täytyy löytyä jostakin kentästä. Osumat korostetaan listassa.

Hakutuloksia voi rajata myös seuraavilla valinnoilla:

- **Tuoteryhmät:** voit valita useita ryhmiä kerralla.
- **Kampanja:** hae kaikki tiettyyn kampanjaan liittyvät tuotteet.
- **Tilaustyyppi:** Ei määritelty, Kesto, Määräaikainen tai Ulkoinen kesto.
- **Voimassa (vuosi):** näyttää tuotteet, jotka ovat valittavissa valittuna vuonna (Valittavissa aikavälillä -jakso osuu vuoteen). Piilotetut tuotteet näytetään vain, kun Näytä piilotetut on päällä.
- **Näytä piilotetut:** tuo luetteloon myös piilotetut tuotteet.
- **Näytä osamaksuhinnat:** näyttää listassa myös osissa maksettavat tuotehinnat (2, 3 ja 4 erää, veroton ja verollinen).
- **Laske voimassa olevat tilaukset:** lisää listaan sarakkeen Voimassa olevia tilauksia ja näyttää niiden yhteismäärän. Laskenta hidastaa hakua.

Listassa näytetään enintään 500 tuotetta. Jos tuotteita on enemmän, tarkenna hakua. Vienti sisältää aina kaikki suodatetut tuotteet.

![Tilaustuotteiden hakukenttä ja suodatusvalinnat](/img/versio2/tuotteet2.png)

### Uuden tilaustuotteen lisääminen

1. Valitse **Tilaustuotteet**-välilehti.
2. Napsauta **Lisää tilaustuote**.
3. Täytä tuotteen perustiedot, hinnat ja tilausasetukset.
4. Valitse tarvittaessa digituotteen asetukset.
5. Valitse pakolliset kirjanpidon tilit.
6. Napsauta **Tallenna**.

Voit poistua tallentamatta napsauttamalla **Peruuta**.

![Uuden tilaustuotteen lomake](/img/versio2/tuotteet5.png)

### Perustiedot

Määritä tuotteelle tarvittavat perustiedot:

- **Tuotenumero**
- **Tuoteryhmä**: Lehti tai digilehti, jonka alle tilaus kuuluu. 
- **Kampanja**: Kampanjan avulla tuotteita voidaan ryhmitellä tuoteryhmän alle ja rajata tilauksen luonnissa näytettäviä tuotteita.
- **Tuotenimi**: esim. Kestotilaus 12 kk
- **Ulkoinen tuotenimi**: Asiakkaalle esimerkiksi tilauslomakkeella ja laskulla näkyvä nimi. Jos kenttä jätetään tyhjäksi, käytetään tuotteen tuotenimeä.
- **Lisätiedot**: Tuotteen lisätiedot. Eivät näy tilaajalle.
- **Tilauslaji**: Informatiivinen kenttä (esim. Vapaakappale, Irtonumero). Ei näy tilaajalle. 
- **SKU-koodi**: Tuotteen yksilöivä koodi mm. kirjanmyynnissä.
- **PortalID**: Yrityksen tunniste, jos TaikaTilauksessa on useita yrityksiä. 

Valitse **Tuote on piilotettu**, jos tuotetta ei haluta näyttää tuotteiden valintalistoilla.

:::info HUOM!

Osa kentistä voidaan piilottaa **Asetukset → Muut asetukset → Yleisasetukset** -sivulla (Tuotteet-sivun kentät): Tuotenumero, Tilauslaji, SKU-koodi, PortalID, Jatkotuote, Karenssi päivää, Digituote, Oikeuttaa digipalveluun ja Digipalvelu-kenttä. Jos et näe jotakin tässä ohjeessa mainittua kenttää, se on piilotettu.
:::

![Tilaustuotteen perustiedot ja piilotusvalinta](/img/versio2/tilaustuote.png)

### Hinnat

Määritä:

- **ALV-prosentti**
- **Laskuerien lukumäärä**
- veroton kokonaishinta yhdellä laskuerällä
- tarvittaessa verottomat kokonaishinnat kahdelle, kolmelle tai neljälle laskuerälle.

Jos määrität vain **Hinta veroton** -kentän ja valitset esimerkiksi kaksi laskuerää, ohjelma jakaa hinnan automaattisesti kahteen erään tilausta luotaessa.

Eri laskuerämäärille voidaan myös määrittää omat kokonaishintansa. Tätä voidaan käyttää esimerkiksi silloin, kun tilauksen halutaan maksavan enemmän, jos se laskutetaan useammassa erässä.

:::warning Huomio

**Hinta veroton 2 erässä**, **Hinta veroton 3 erässä** ja **Hinta veroton 4 erässä** -kenttiin merkitään koko tilauksen hinta, ei yksittäisen laskuerän hintaa.

Jos tilauksen kokonaishinta kahdessa erässä on 110 euroa, merkitään **Hinta veroton 2 erässä** -kenttään 110 euroa. Ohjelma jakaa hinnan automaattisesti kahdelle laskuerälle, kun tilausta luodessa valitaan, että tilaus maksetaan kahdessa erässä.
:::

Järjestelmä näyttää hinnan myös verollisena. Voit tarvittaessa laskea verottoman hinnan verollisesta hinnasta kirjoittamalla verollisen hinnan kenttään ja napsauttamalla sen vieressä olevaa **nuolipainiketta**.

![Tilaustuotteen ALV-prosentti ja hinnat eri laskuerämäärille](/img/versio2/tilaustuote2.png)

### Uusi hinta

**Uusi hinta** -osiossa määrität tuotteelle myöhemmin voimaan tulevan hinnan.

1. Valitse **Hinnaston aktivoitumispäivä**.
2. Lisää uusi veroton hinta. Voit antaa myös verollisen hinnan, jolloin veroton lasketaan siitä.
3. Lisää tarvittaessa uudet hinnat kahdelle, kolmelle tai neljälle laskuerälle (koko tilauksen hinta).

Automaattinen yöajo ottaa uudet hinnat käyttöön aktivoitumispäivänä. Päivityksen jälkeen aktivoitumispäivää kasvatetaan sadalla vuodella (esimerkiksi 8.10.2025 → 8.10.2125), jotta hinnat eivät vaihdu uudelleen.

:::warning Huomio

**Hinta veroton 2 erässä**, **Hinta veroton 3 erässä** ja **Hinta veroton 4 erässä** -kenttiin merkitään koko tilauksen hinta, ei yksittäisen laskuerän hintaa.

:::

![Tilaustuotteen uusi hinta ja hinnaston aktivoitumispäivä](/img/versio2/tilaustuote3.png)

### Kirjanpidon tilit

Valitse tuotteelle:

- myyntitili
- ALV-velkatili
- myyntisaamisten tili.

![Tilaustuotteen kirjanpidon tilivalinnat](/img/versio2/tilaustuote4.png)

### Tilauksen asetukset

Valitse tuotteen Tilaustyyppi:

- **Ei määritelty**
- **Kesto**
- **Määräaikainen**
- **Ulkoinen kesto** (näkyy vain, kun ulkoinen kesto on otettu käyttöön TaikaTilauksessa)

Ulkoinen kesto on kestotilaus, jonka jatkosta tulee pyyntö ulkoisesta korttimaksupalvelusta (esimerkiksi Stripe).

Postituslistalle kerätään vain kesto- ja määräaikaiset tilaukset. Valitse **Ei määritelty**, jos tuotteen ei pidä nousta postituslistalle. Jos tuote on digitilaus, valitse kesto tai määräaikainen.

Määritä lisäksi tarvittaessa:

- tilauksen kesto ja keston yksikkö (esim. kuukausi, päivä, numero)
- onko tuote kotimaan- vai ulkomaan tilaus
- jatkotuote (tuote, jolla jatketaan tilausta jatketaan automaattisesti, esim. tarjoustuotteen jälkeen)
- aikaväli, jolloin tuote on valittavissa tilauslomakkeella
- aikaväli, jolle tilaus voidaan tehdä
- määräytyykö tilauksen päättymisaika tuotteen kestosta 
- karenssi päivinä.

Jos **Tilaus mahdollinen aikavälillä** on käytössä, tilauksen loppupäivä rajataan normaalisti määritetyn aikavälin loppuun.

Valitse **Tilauksen päättymisaika tuotteen kestosta**, jos loppupäivän halutaan määräytyvän sen sijaan tuotteen keston perusteella. Tilauksen alkupäivän täytyy silti olla sallitun aikavälin sisällä.

**Karenssi** määrittää, kuinka pian sama asiakas voi ostaa tuotteen uudelleen tilauslomakkeella. Arvo `0` tarkoittaa, ettei karenssia ole.

![Tilaustuotteen tilaustyyppi, kesto ja voimassaoloasetukset](/img/versio2/tilaustuote5.png)

### Digituotteen asetukset

Valitse tarvittaessa:

- **Digituote**: tuote on digituote.
- **Oikeuttaa digipalveluun**: tuote oikeuttaa digipalveluihin. Valitaan esim. silloin kun tuote on paperitilaus, mutta paperitilaukseen kuuluu digisisältö.

Digituotteet eivät nouse postituslistalle.

**Digipalvelu**-kentässä voidaan määrittää palvelun tunniste. Saman digipalvelun tuotteet voidaan ryhmitellä yhteisen tunnisteen alle.

![Tilaustuotteen digipalvelun ja käyttöoikeuden asetukset](/img/versio2/tilaustuote6.png)

### Ulkoinen maksupalvelu (Stripe)

Osio näkyy tuotteen lomakkeella, kun ulkoinen kesto on käytössä tai tuotteella on jo kytkentä ulkoiseen palveluun.

- **Stripe tuotetyyppi ja hinta:** tuotteen kytkentä Stripen hintaan. Arvo on tyyppi (TOI = toistuva tilaus, KER = kertamaksu) ja Stripen hinnan lookup-avain tai hinnan tunniste.
- **Stripe kuponki ja hinta:** kupongin tunniste ja hinta kupongilla tilauslomakkeella.
- **Webshop Campaign Code:** AccessType-verkkokaupan kampanjakoodi (vain sitä käyttävillä asiakkailla).

Stripe-kentät ovat tällä sivulla vain luettavia. Ne asetetaan StripeGatewayssa (Tuotteet → tuote → Kytke TaikaTilaukseen, kupongit kohdasta Kupongit → Kytke TaikaTilaukseen), ja arvo säilyy tuotetta tallennettaessa. AccessType-asiakkailla kentän nimi on AccessType Subscription plan ID, ja sen voi syöttää tällä sivulla.

## Erillistuotteet

**Erillistuotteet**-välilehdellä voit tarkastella ja hallita laskuille lisättäviä erillistuotteita, kuten laskutuslisiä ja oheistuotteita.

![Erillistuotteiden luettelo](/img/versio2/erillistuote.png)

### Erillistuotteiden hakeminen

Voit hakea erillistuotteita esimerkiksi:

- tuotenumerolla
- tuoteryhmällä
- tuotenimellä
- lisätiedoilla
- TuoteID:llä.

Voit rajata hakutuloksia **Tuoteryhmät**-valinnalla. Ota **Näytä piilotetut** käyttöön, jos haluat nähdä myös piilotetut erillistuotteet.

Tyhjennä hakukenttä ja valitut rajaukset napsauttamalla **Tyhjennä**.

![Erillistuotteiden hakukenttä ja tuoteryhmärajaus](/img/versio2/erillistuote2.png)

### Uuden erillistuotteen lisääminen

1. Valitse **Erillistuotteet**-välilehti.
2. Napsauta **Lisää erillistuote**.
3. Täytä tuotteen perustiedot ja hinta.
4. Valitse tuotteelle kirjanpidon tilit.
5. Napsauta **Tallenna**.

Voit poistua tallentamatta napsauttamalla **Peruuta**.

![Uuden erillistuotteen lomake](/img/versio2/erillistuote3.png)

### Perustiedot

Määritä erillistuotteelle:

- **Tuotenumero**
- **Tuoteryhmä**: Minkä tuoteryhmän alle tuote kuuluu, esim. laskutuslisät, oheistuotteet. 
- **Tuotenimi**
- tarvittaessa **Lisätiedot**
- **Yksikkö**, esimerkiksi `kpl`
- **PortalID**.

**TuoteID** muodostuu automaattisesti, kun tuote tallennetaan.

PortalID on yrityksen, esimerkiksi lehden, tunniste silloin, kun samassa TaikaTilauksessa on useita yrityksiä. Muussa tapauksessa arvoksi merkitään `0`.

Valitse **Tuote on piilotettu**, jos tuotetta ei haluta näyttää tuotteiden valintalistoilla.

![Erillistuotteen perustiedot ja piilotusvalinta](/img/versio2/erillistuote4.png)

### Hinta

1. Määritä tuotteen **ALV-prosentti**.
2. Kirjoita tuotteen veroton hinta **Hinta veroton** -kenttään.

Järjestelmä laskee ja näyttää verollisen hinnan automaattisesti.

Voit laskea verottoman hinnan verollisesta hinnasta:

1. Kirjoita hinta **Laske veroton verollisesta** -kenttään.
2. Napsauta kentän vieressä olevaa **nuolipainiketta**.

![Erillistuotteen ALV-prosentti ja verottoman hinnan laskenta](/img/versio2/erillistuote5.png)

#### Kirjanpidon tilit

Kirjanpidon tilit ovat pakollisia. Valitse tuotteelle:

- **Myyntitili, ALV 0 % tili**
- **ALV-velkatili, ALV x % tili**
- **Myyntisaamiset tili**.

![Erillistuotteen kirjanpidon tilivalinnat](/img/versio2/erillistuote6.png)

## Myyntituotteet

**Myyntituotteet**-välilehdellä voit tarkastella ja hallita ilmoitusmyynnissä käytettäviä tuotteita.

![Ilmoitusmyynnin myyntituotteiden luettelo](/img/versio2/myyntituotteet.png)

### Myyntituotteiden hakeminen

Voit hakea myyntituotteita esimerkiksi:

- tuotenumerolla
- kanavalla
- ryhmällä
- tuotekoodilla
- tuotteen nimellä
- lisätiedoilla
- TuoteID:llä.

Voit rajata hakutuloksia **Kanava**- ja **Ryhmät**-valinnoilla. Ota **Näytä piilotetut** käyttöön, jos haluat nähdä myös piilotetut myyntituotteet.

Tyhjennä hakukenttä ja valitut rajaukset napsauttamalla **Tyhjennä**.

Listassa näytetään enintään 500 tuotetta. Jos tuotteita on enemmän, tarkenna hakua. Vienti sisältää aina kaikki suodatetut tuotteet. Napsauta rivin otsikkoa, kun haluat lajitella listan sen mukaan.

![Myyntituotteiden hakukenttä sekä kanava- ja ryhmärajaukset](/img/versio2/myyntituotteet2.png)

### Uuden myyntituotteen lisääminen

1. Valitse **Myyntituotteet**-välilehti.
2. Napsauta **Lisää myyntituote**.
3. Täytä tuotteen perustiedot, saatavuus ja hinta.
4. Valitse tuotteelle kirjanpidon tilit.
5. Määritä tarvittaessa käsittelijä ja aineistolinkin lähetys.
6. Napsauta **Tallenna**.

Voit poistua tallentamatta napsauttamalla **Peruuta**.

![Uuden myyntituotteen lomake](/img/versio2/myyntituotteet3.png)

### Perustiedot

Määritä myyntituotteelle:

- **Numero**
- **Kanava**: esim. lehti, radio, mainostaulu (kanavat määritetään erikseen asetuksissa)
- **Ryhmä**: esim. bannerit, ilmoitusosastot, rivi-ilmoitukset
- **Tuotekoodi**: Tuotekoodia käytetään kirjanpidossa. Sama tuotekoodi voi olla käytössä saman median eri kanavilla.
- **Nimi**
- tarvittaessa **Lisätiedot**
- **PortalID**: PortalID on yrityksen tunniste silloin, kun samassa TaikaTilauksessa on useita yrityksiä. Muussa tapauksessa arvoksi merkitään `0`.

**TuoteID** muodostuu automaattisesti, kun tuote tallennetaan.

Valitse tarvittaessa:

- **Piilotettu**, jos tuotetta ei haluta näyttää tuotteiden valintalistoilla
- **Itsepalvelutuote**, jos tuote on käytettävissä itsepalvelussa.

![Myyntituotteen perustiedot sekä piilotus- ja itsepalveluvalinnat](/img/versio2/myyntituotteet4.png)

### Kanavatyypin mukaiset kentät

Kun olet valinnut Kanavan, lomakkeella näkyy kanavan tyyppi (esimerkiksi LEHTI, NETTI tai RADIO) ja sen mukaiset lisäkentät. Kanavatyypit määritetään kanavien asetuksissa.

#### Lehti-ilmoitus

- **Vakiokoko palstoja** ja **Vakiokoko korkeus mm:** tuotteen vakiokoko.
- **Poikkeava leveys:** jos annettu, leveys poikkeaa vakiopalstoista. Adwizard-tiedostoon kirjataan tämä.
- **Rivi-ilmoitus:** jos valitaan, näkyviin tulevat kentät **Rivi-ilm. min. rivimäärä** ja **Min. rivimäärän hinta**. Minimirivimäärän hinta on pienimmän rivimäärän hinta, ja seuraavat rivit maksavat Hinta-kentän mukaan.

#### Netti-ilmoitus

- **Näyttömäärä**
- **Aineistopäivä (julkaisusta -N pv):** aineisto toimitetaan N päivää ennen julkaisupäivää.
- **Aikaväli pakollinen:** varaukselle täytyy antaa aikaväli.
- **Google Ad Manager Ad Units:** inventory targeting -mainospaikkojen tunnisteet pilkuilla eroteltuina. Kenttä näkyy vain, kun Google Ad Manager on käytössä.

#### Radiomainos

- **Spotin kesto sekuntia**
- **Toistojen määrä**

### Saatavuus

Määritä **Saatavuus / julkaisu** -kenttään, kuinka monta kertaa tuote voidaan varata samaan julkaisuun.

Saatavuutta voidaan rajoittaa esimerkiksi silloin, kun julkaisussa on myynnissä vain yksi kansipaikka.

Arvo `0` tarkoittaa, ettei saatavuutta ole rajoitettu.

**Muut myyntituotteet, joilla jaettu saatavuus:** valitse tästä useampi saman kanavan tuote, jotka jakavat saman paikan julkaisussa (esimerkiksi avausaukeama ja 2. kansi). Jaettu saatavuus tallentuu kaikille ryhmän tuotteille.

![Myyntituotteen julkaisukohtaisen saatavuuden asetus](/img/versio2/myyntituotteet5.png)

### Hinta

1. Kirjoita tuotteen **Hinta**.
2. Määritä **ALV-prosentti**.

Järjestelmä laskee ja näyttää verollisen hinnan automaattisesti.

Valitse tarvittaessa **Sopimus-/moduulihinta**. Tällöin hinta koskee koko ilmoitusta eikä perustu esimerkiksi palstamillimetreihin, näyttömääriin tai kestoon.

Jos yhteistyöhinta on käytössä, lomakkeella on lisäksi **Yhteistyöhinta**: ulkopuolisen aineistovalmistajan kanssa sovittu hinta ilman ALV:ia.

![Myyntituotteen hinta, ALV-prosentti ja sopimus- tai moduulihinnan valinta](/img/versio2/myyntituotteet6.png)

### Kirjanpito

Kirjanpidon tilit ovat pakollisia. Valitse tuotteelle:

- **Myyntitili**
- **ALV-velkatili**
- **Myyntisaamiset tili**.

Voit lisäksi määrittää **Kululajin** kirjanpitoa ja kustannuslaskentaa varten.

![Myyntituotteen kirjanpidon tilit ja kululaji](/img/versio2/myyntituotteet8.png)

### Käsittely ja aineisto

**Käsittelijän sähköposti** -kenttään voidaan määrittää tuotteen oletuskäsittelijä. Käsittelijä saa tiedot esimerkiksi uuden aineiston saapumisesta. Ilmoitus täytyy silti valita erikseen käsittelyyn.

Valitse **Lähetä aineistolinkki**, jos ilmoitusvarauksesta halutaan lähettää aineiston toimituslinkki.

![Myyntituotteen käsittelijän sähköposti ja aineistolinkin lähetysvalinta](/img/versio2/myyntituotteet7.png)

### Myyntituotteen poistaminen

Napsauta tuotteen lomakkeella **Poista** ja vahvista. Tuote merkitään piilotetuksi, joten se ei poistu kokonaan. Piilotetun tuotteen näet listassa valinnalla Näytä piilotetut. Lomakkeen alareunassa näkyy, milloin ja kuka tuotteen on lisännyt ja muuttanut.