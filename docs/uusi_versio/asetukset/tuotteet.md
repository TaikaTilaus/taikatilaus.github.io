---
sidebar_position: 2
description: Tuotteet — Tilaus-, erillis- ja myyntituotteet.
---

# Tuotteet

**Tuotteet**-sivulla voit tarkastella ja hallita tilaus-, erillis- ja myyntituotteita.

Voit avata sivun kahdella tavalla:

- valitse ylävalikosta **Asetukset → Tuotteet**
- valitse **Asetukset → Kaikki asetukset** ja napsauta **Tuotteet**-korttia.

![Tuotteet-sivun yleisnäkymä](/img/versio2/tuotteet.png)

## Tuotetyypin valitseminen

Valitse sivun yläreunasta tarkasteltava tuotetyyppi:

- **Tilaustuotteet**
- **Erillistuotteet**
- **Myyntituotteet**.

## Tuotteen muokkaaminen

Avaa tuotteen tiedot muokattavaksi napsauttamalla rivin vasemmassa reunassa olevaa **kynäkuvaketta**.

![Tuotteet-sivun yleisnäkymä](/img/versio2/tuotteet4.png)

## Tuotteiden vieminen

Napsauta **Export** avataksesi vientivalikon. Valikossa näkyy vietävien rivien määrä.

Voit:

- tulostaa tuoteluettelon
- kopioida tuoteluettelon leikepöydälle
- viedä tuoteluettelon PDF-, Excel-, CSV-, JSON- tai HTML-muodossa.

![Tuotteet-sivun yleisnäkymä](/img/versio2/tuotteet3.png)

## Tilaustuotteet

### Tilaustuotteiden hakeminen ja suodattaminen

Voit hakea tilaustuotteita esimerkiksi tuotenumerolla, tuoteryhmällä, kampanjalla tai tuotenimellä.

Hakutuloksia voi rajata myös seuraavilla valinnoilla:

- **Tuoteryhmät**
- **Kampanja**: hae kaikki tiettyyn kampaanjaan liittyvät tuotteet.
- **Tilaustyyppi**: kesto, määräaikainen, ulkoinen kesto (Stripe).
- **Näytä piilotetut**: tuo luetteloon myös piilotetut tuotteet.
- **Näytä osamaksuhinnat**: näyttää tuotteiden osamaksuhinnat luettelossa. 
- **Laske voimassa olevat tilaukset**: laskee tuotteisiin liittyvien voimassa olevien tilausten määrät.

**Näytä piilotetut** tuo luetteloon myös piilotetut tuotteet. **Laske voimassa olevat tilaukset** laskee tuotteisiin liittyvien voimassa olevien tilausten määrät.

Tyhjennä hakukenttä ja valitut rajaukset napsauttamalla **Tyhjennä**.

![Tuotteet-sivun yleisnäkymä](/img/versio2/tuotteet2.png)

### Uuden tilaustuotteen lisääminen

1. Valitse **Tilaustuotteet**-välilehti.
2. Napsauta **Lisää tilaustuote**.
3. Täytä tuotteen perustiedot, hinnat ja tilausasetukset.
4. Valitse tarvittaessa digituotteen asetukset.
5. Valitse pakolliset kirjanpidon tilit.
6. Napsauta **Tallenna**.

Voit poistua tallentamatta napsauttamalla **Peruuta**.

![Tuotteet-sivun yleisnäkymä](/img/versio2/tuotteet5.png)

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

![Tuotteet-sivun yleisnäkymä](/img/versio2/tilaustuote.png)

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

![Tuotteet-sivun yleisnäkymä](/img/versio2/tilaustuote2.png)

### Uusi hinta

**Uusi hinta** -osiossa voit määrittää tuotteelle myöhemmin voimaan tulevan hinnan.

1. Valitse **Hinnaston aktivoitumispäivä**.
2. Lisää uusi veroton hinta.
3. Lisää tarvittaessa uudet hinnat kahdelle, kolmelle tai neljälle laskuerälle.

:::warning Huomio

**Hinta veroton 2 erässä**, **Hinta veroton 3 erässä** ja **Hinta veroton 4 erässä** -kenttiin merkitään koko tilauksen hinta, ei yksittäisen laskuerän hintaa.

:::

Uusi hinta otetaan käyttöön määritettynä aktivoitumispäivänä.

![Tuotteet-sivun yleisnäkymä](/img/versio2/tilaustuote3.png)

### Kirjanpidon tilit

Valitse tuotteelle:

- myyntitili
- ALV-velkatili
- myyntisaamisten tili.

![Tuotteet-sivun yleisnäkymä](/img/versio2/tilaustuote4.png)

### Tilauksen asetukset

Valitse tuotteen **Tilaustyyppi**:

- **Ei määritelty**
- **Kesto**
- **Määräaikainen**.

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

![Tuotteet-sivun yleisnäkymä](/img/versio2/tilaustuote5.png)

### Digituotteen asetukset

Valitse tarvittaessa:

- **Digituote**: tuote on digituote.
- **Oikeuttaa digipalveluun**: tuote oikeuttaa digipalveluihin. Valitaan esim. silloin kun tuote on paperitilaus, mutta paperitilaukseen kuuluu digisisältö.

Digituotteet eivät nouse postituslistalle.

**Digipalvelu**-kentässä voidaan määrittää palvelun tunniste. Saman digipalvelun tuotteet voidaan ryhmitellä yhteisen tunnisteen alle.

![Tuotteet-sivun yleisnäkymä](/img/versio2/tilaustuote6.png)

## Erillistuotteet

**Erillistuotteet**-välilehdellä voit tarkastella ja hallita laskuille lisättäviä erillistuotteita, kuten laskutuslisiä ja oheistuotteita.

![Tuotteet-sivun yleisnäkymä](/img/versio2/erillistuote.png)

### Erillistuotteiden hakeminen

Voit hakea erillistuotteita esimerkiksi:

- tuotenumerolla
- tuoteryhmällä
- tuotenimellä
- lisätiedoilla
- TuoteID:llä.

Voit rajata hakutuloksia **Tuoteryhmät**-valinnalla. Ota **Näytä piilotetut** käyttöön, jos haluat nähdä myös piilotetut erillistuotteet.

Tyhjennä hakukenttä ja valitut rajaukset napsauttamalla **Tyhjennä**.

![Tuotteet-sivun yleisnäkymä](/img/versio2/erillistuote2.png)

### Uuden erillistuotteen lisääminen

1. Valitse **Erillistuotteet**-välilehti.
2. Napsauta **Lisää erillistuote**.
3. Täytä tuotteen perustiedot ja hinta.
4. Valitse tuotteelle kirjanpidon tilit.
5. Napsauta **Tallenna**.

Voit poistua tallentamatta napsauttamalla **Peruuta**.

![Tuotteet-sivun yleisnäkymä](/img/versio2/erillistuote3.png)

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

![Tuotteet-sivun yleisnäkymä](/img/versio2/erillistuote4.png)

### Hinta

1. Määritä tuotteen **ALV-prosentti**.
2. Kirjoita tuotteen veroton hinta **Hinta veroton** -kenttään.

Järjestelmä laskee ja näyttää verollisen hinnan automaattisesti.

Voit laskea verottoman hinnan verollisesta hinnasta:

1. Kirjoita hinta **Laske veroton verollisesta** -kenttään.
2. Napsauta kentän vieressä olevaa **nuolipainiketta**.

![Tuotteet-sivun yleisnäkymä](/img/versio2/erillistuote5.png)

#### Kirjanpidon tilit

Kirjanpidon tilit ovat pakollisia. Valitse tuotteelle:

- **Myyntitili, ALV 0 % tili**
- **ALV-velkatili, ALV x % tili**
- **Myyntisaamiset tili**.

![Tuotteet-sivun yleisnäkymä](/img/versio2/erillistuote6.png)

## Myyntituotteet

**Myyntituotteet**-välilehdellä voit tarkastella ja hallita ilmoitusmyynnissä käytettäviä tuotteita.

![Tuotteet-sivun yleisnäkymä](/img/versio2/myyntituotteet.png)

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

![Tuotteet-sivun yleisnäkymä](/img/versio2/myyntituotteet2.png)

### Uuden myyntituotteen lisääminen

1. Valitse **Myyntituotteet**-välilehti.
2. Napsauta **Lisää myyntituote**.
3. Täytä tuotteen perustiedot, saatavuus ja hinta.
4. Valitse tuotteelle kirjanpidon tilit.
5. Määritä tarvittaessa käsittelijä ja aineistolinkin lähetys.
6. Napsauta **Tallenna**.

Voit poistua tallentamatta napsauttamalla **Peruuta**.

![Tuotteet-sivun yleisnäkymä](/img/versio2/myyntituotteet3.png)

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

![Tuotteet-sivun yleisnäkymä](/img/versio2/myyntituotteet4.png)

### Saatavuus

Määritä **Saatavuus / julkaisu** -kenttään, kuinka monta kertaa tuote voidaan varata samaan julkaisuun.

Saatavuutta voidaan rajoittaa esimerkiksi silloin, kun julkaisussa on myynnissä vain yksi kansipaikka.

Arvo `0` tarkoittaa, ettei saatavuutta ole rajoitettu.

![Tuotteet-sivun yleisnäkymä](/img/versio2/myyntituotteet5.png)

### Hinta

1. Kirjoita tuotteen **Hinta**.
2. Määritä **ALV-prosentti**.

Järjestelmä laskee ja näyttää verollisen hinnan automaattisesti.

Valitse tarvittaessa **Sopimus-/moduulihinta**. Tällöin hinta koskee koko ilmoitusta eikä perustu esimerkiksi palstamillimetreihin, näyttömääriin tai kestoon.

![Tuotteet-sivun yleisnäkymä](/img/versio2/myyntituotteet6.png)

### Kirjanpito

Kirjanpidon tilit ovat pakollisia. Valitse tuotteelle:

- **Myyntitili**
- **ALV-velkatili**
- **Myyntisaamiset tili**.

Voit lisäksi määrittää **Kululajin** kirjanpitoa ja kustannuslaskentaa varten.

![Tuotteet-sivun yleisnäkymä](/img/versio2/myyntituotteet8.png)

### Käsittely ja aineisto

**Käsittelijän sähköposti** -kenttään voidaan määrittää tuotteen oletuskäsittelijä. Käsittelijä saa tiedot esimerkiksi uuden aineiston saapumisesta. Ilmoitus täytyy silti valita erikseen käsittelyyn.

Valitse **Lähetä aineistolinkki**, jos ilmoitusvarauksesta halutaan lähettää aineiston toimituslinkki.

![Tuotteet-sivun yleisnäkymä](/img/versio2/myyntituotteet7.png)