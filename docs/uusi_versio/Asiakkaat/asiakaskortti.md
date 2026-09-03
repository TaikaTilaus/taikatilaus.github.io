---
sidebar_position: 2
title: Asiakaskortti
---

# Asiakaskortti

![Asiakkaat](/img/versio2/asiakaskortti2.png)

Asiakaskortilla voit tarkastella ja muokata asiakkaan tietoja sekä siirtyä asiakkaan tilauksiin ja laskuihin.

Avaa asiakaskortti napsauttamalla asiakasluettelossa asiakkaan **asiakasnumeroa** tai asiakasrivin **kynäkuvaketta**.

![Asiakkaat](/img/versio2/asiakaskortti.png)

## Asiakkaan tiedot

Asiakaskortin yläreunassa näkyvät asiakasnumero, asiakkaan nimi ja mahdollinen yritys. Nimen vieressä olevasta **keräilylistakuvakkeesta** voit lisätä asiakkaan keräilylistalle.

Asiakkaan tiedot on jaettu välilehdille:

- **Yhteystiedot**
- **Laskutustiedot**
- **Markkinointitiedot**
- **Ryhmittely**
- **Muut tiedot**
- **Jakelupoikkeukset**
- **Lisäkentät**
- **Muutosloki**

![Asiakkaat](/img/versio2/asiakaskortti3.png)

## Yhteystiedot

**Yhteystiedot**-välilehdellä ylläpidetään asiakkaan nimi-, osoite- ja yhteystietoja.

| Kenttä | Ohje |
| --- | --- |
| **Sukunimi ja Etunimi** | Asiakkaan nimi. |
| **Yritys ja Osasto** | Yrityksen ja mahdollisen osaston nimi. |
| **Lähiosoite** | Kadun tai tien nimi. |
| **Katunumero, Porras ja Huoneisto** | Osoitteen tarkentavat tiedot omissa kentissään. |
| **Postinumero ja Postitoimipaikka** | Osoitteen postinumero ja postitoimipaikka. |
| **Maa** | Maatunnus, esimerkiksi **FI**. |
| **Sähköposti** | Asiakkaan sähköpostiosoite. |
| **Puhelin, Puhelin 2 ja Puhelin 3** | Asiakkaan puhelinnumerot. |
| **C/O-osoite** | Osoitetta täydentävä c/o-tieto. |
| **Asiakastyyppi** | Asiakkaan tyyppi, esimerkiksi henkilö, yritys tai yhteisö. Käytettävissä olevat asiakastyypit määritetään järjestelmän asetuksissa. |
| **Lisätiedot** | Vapaamuotoiset lisätiedot asiakkaasta. |

Muokkaa tarvittavia tietoja ja napsauta **Tallenna**.

![Asiakkaat](/img/versio2/asiakaskortti3.png)

## Laskutustiedot

**Laskutustiedot**-välilehdellä ylläpidetään asiakkaan pankki- ja verkkolaskutietoja sekä laskutukseen liittyviä asetuksia.

### Pankki- ja verkkolaskutiedot

| Kenttä | Sisältö |
| --- | --- |
| **IBAN** | Asiakkaan tilinumero IBAN-muodossa. |
| **BIC** | Pankin BIC-tunnus. |
| **OVT-tunnus** | Asiakkaan OVT-tunnus. |
| **Verkkolaskuosoite** | Asiakkaan verkkolaskuosoite. |
| **Välittäjätunnus** | Verkkolaskuvälittäjän tunnus. |
| **Laskutusviite / sopimusnumero** | Asiakkaan laskutuksessa käytettävä viite tai sopimusnumero. |

### Laskutuksen asetukset

| Kenttä | Sisältö |
| --- | --- |
| **Laskun toimitustapa** | Laskun toimitustapa, esimerkiksi sähköposti. |
| **Laskun kieli** | Laskussa käytettävä kieli. |
| **Laskutusosoite (KontaktiID)** | Laskutusosoitteena käytettävän kontaktin KontaktiID. Huomaa, että KontaktiID on eri tieto kuin asiakasnumero. |
| **Ale-% (tilaus)** | Asiakkaan tilausalennus prosentteina. |
| **Ale-% (ilmoitus)** | Asiakkaan ilmoitusalennus prosentteina. |
| **Maksuehto (päivää)** | Asiakkaan maksuehto päivinä. Oletuksena käytetään 14 päivää. |
| **Myyjä (KayttajaID)** | Asiakkaalle määritetyn myyjän käyttäjätunniste. |
| **Suoramaksu** | Suoramaksu on laskujen maksutapa, jossa pankki veloittaa laskun summan tililtä automaattisesti eräpäivänä ilman verkkopankin käyttöä. Laskun toimistapana pitää olla VERKKOLASKU. |
| **Koontilasku** | Jos asiakkaalla on monta laskutuspyyntöä, muodostetaan niistä yksittäinen koontilasku. |
| **Ei laskutuslisää** | Asiakkaan laskuille ei lisätä laskutuslisiä (esim. kirjelaskutuslisä). |
| **Maskumuistutuskielto** | Asiakkaalle ei lähetetä maksumuistutuksia laskuista. |

Tallenna muutokset napsauttamalla **Tallenna**.

![Asiakkaat](/img/versio2/laskutustiedot.png)

## Markkinointitiedot

**Markkinointitiedot**-välilehdelle kirjataan asiakkaan markkinointiin liittyvät luvat ja kiellot sekä niiden taustatiedot.

### Kaiken markkinoinnin kielto

Jos asiakas on kieltänyt kaiken markkinoinnin:

1. Valitse **Kaikki markkinointi kielletty**.
2. Täytä halutessasi **Kiellon päiväys**, **Kiellon lähde** ja **Kiellon lisätiedot**. Nämä kentät ovat vapaaehtoisia.
3. Napsauta **Tallenna**.

### Markkinointikanavien tiedot

Tiedot voidaan kirjata erikseen seuraaville kanaville:

- **Sähköpostimarkkinointi**
- **Kirjemarkkinointi**
- **Puhelinmarkkinointi**
- **Tekstiviestimarkkinointi**

Jokaiselle kanavalle on omat kenttänsä:

| Kenttä | Sisältö |
| --- | --- |
| **Tila** | Kanavan markkinointiluvan tai -kiellon tila. |
| **Päiväys** | Lupaan tai kieltoon liittyvä päivämäärä. |
| **Lähde** | Tieto siitä, mistä lupa tai kielto on saatu. |
| **Lisätiedot** | Mahdolliset tarkentavat tiedot. |

Tallenna muutokset napsauttamalla **Tallenna**.

![Asiakkaat](/img/versio2/markkinointikiellot.png)

## Ryhmittely

**Ryhmittely**-välilehdellä voit liittää asiakkaan ryhmiin ja määrittää hänelle esimerkiksi roolin. Asiakkaalle lisätyt ryhmittelyt näkyvät **Asiakasryhmittely**-osion yläosassa.

### Ryhmittelyn lisääminen

1. Valitse **Tyyppi**-valikosta ryhmittelyn tyyppi, esimerkiksi **Ryhmä**.
2. Valitse **Arvo**-valikosta haluamasi arvo.
3. Napsauta **+ Lisää**.
4. Lisää tarvittaessa muita ryhmittelyjä.
5. Napsauta **Tallenna**.

Käytettävissä olevat ryhmät määritetään järjestelmän asetuksissa.

### Ryhmittelyn poistaminen

Napsauta poistettavan ryhmittelyn vieressä olevaa **rastia** ja tallenna muutokset.

### Vapaa ryhmittely

**Vapaa ryhmittely** -kenttään voit kirjoittaa vapaamuotoisen ryhmittelytiedon.

![Asiakkaat](/img/versio2/ryhmittely.png)

## Muut tiedot

**Muut tiedot** -välilehdellä ylläpidetään seuraavia tietoja:

| Kenttä | Sisältö |
| --- | --- |
| **Y-tunnus** | Yrityksen Y-tunnus. |
| **VAT-numero** | Yrityksen arvonlisäverotunniste. |
| **ALV-%** | Asiakaskortille määritetty arvonlisäveroprosentti. |
| **Syntymävuosi** | Asiakkaan syntymävuosi. |

Tallenna muutokset napsauttamalla **Tallenna**.

![Asiakkaat](/img/versio2/muut-tiedot.png)

## Jakelupoikkeukset

**Jakelupoikkeukset**-välilehdellä hallitaan asiakkaan jakeluasetuksia, väliaikaista osoitetta, jakelun keskeytystä ja tulevaa osoitteenmuutosta.

![Asiakkaat](/img/versio2/jakelupoikkeukset.png)

### Jakeluasetukset

| Asetus | Merkitys |
| --- | --- |
| **Varhaisjakelu estetty** | Pakottaa asiakkaan tilaaman lehden päiväjakeluun. |
| **Estolista** | Estää lehtien toimittamisen asiakkaalle. Asiakas voi olla estolistalla esimerkiksi maksamattomien laskujen vuoksi. |
| **Pakotettu nippunumero** | Määrittää varhaisjakelun nipun, johon asiakkaan lehti pakotetaan. Käytä kenttää, kun lehti halutaan toimittaa asiakkaalle varhaisjakelussa tietyn nipun kautta. |

Tallenna muutokset napsauttamalla **Tallenna**.

![Asiakkaat](/img/versio2/jakelupoikkeukset2.png)

### Väliaikainen osoite

Väliaikaista osoitetta voidaan käyttää esimerkiksi kesäosoitteena. Se ohittaa asiakkaan perusosoitteen määritetyllä voimassaoloajalla.

1. Anna osoitteen voimassaoloaika kenttiin **Voimassa alkaen** ja **Voimassa asti**.
2. Täytä väliaikaisen osoitteen vastaanottaja- ja osoitetiedot.
3. Valitse **Koskee kaikkea postitusta**, jos väliaikaisen osoitteen tulee koskea kaikkea asiakkaan postitusta, mukaan lukien laskuja.
4. Napsauta **Tallenna**.

Jätä voimassaolopäivämäärät tyhjiksi, jos väliaikaista osoitetta ei käytetä.

![Asiakkaat](/img/versio2/jakelupoikkeukset3.png)

### Jakelun keskeytys

Jakelun keskeytyksen ajaksi tilaus nukutetaan.

1. Anna keskeytyksen alkupäivä kenttään **Keskeytys alkaa**.
2. Anna päättymispäivä kenttään **Keskeytys päättyy**.
3. Kirjoita tarvittaessa **Keskeytysviesti seuraavalle laskulle**.
4. Napsauta **Tallenna**.

![Asiakkaat](/img/versio2/jakelupoikkeukset4.png)

### Tuleva osoitteenmuutos

Voit kirjata osoitteenmuutoksen etukäteen. Uusi osoite tulee voimaan annettuna päivänä.

1. Anna muutoksen voimaantulopäivä kenttään **Voimaan (pvm)**.
2. Täytä uuden osoitteen vastaanottaja- ja osoitetiedot.
3. Napsauta **Tallenna**.

Osiossa on myös **Osoitepäivitys tehty (info)** -kenttä osoitepäivityksen tietoa varten.

![Asiakkaat](/img/versio2/jakelupoikkeukset5.png)

## Lisäkentät

[Asetuksissa määritetyt lisätietokentät](/docs/uusi_versio/asetukset/lisatietokentat) näkyvät asiakaskortin **Lisäkentät**-välilehdellä. Välilehden vieressä oleva numero kertoo käytössä olevien lisätietokenttien määrän.

Tietojen lisääminen tai muuttaminen:

1. Avaa asiakkaan asiakaskortti.
2. Siirry **Lisäkentät**-välilehdelle.
3. Täytä tai valitse tarvittavat tiedot.
4. Napsauta **Tallenna**.

![Asiakaskortti - Lisäkentät](/img/versio2/lisakentat.png)

## Muutosloki

Asiakaskortin **Muutosloki**-välilehdellä voit tarkastella asiakkaan tietoihin tehtyjä muutoksia.

Muutoslokissa näytetään:

- muutoksen ajankohta
- muutettu kenttä
- kentän vanha arvo
- kentän uusi arvo.

Välilehden vieressä oleva numero kertoo muutoslokissa olevien tapahtumien määrän. Uusimmat muutokset näytetään ylimpänä.

![Muutosloki](/img/versio2/muutosloki.png)

## Tilaukset

Asiakaskortin oikealla puolella olevassa **Tilaukset**-osiossa näet asiakkaan tilaukset. Otsikon vieressä oleva numero kertoo tilausten määrän.

| Sarake | Sisältö |
| --- | --- |
| **Nro** | Tilauksen numero ja linkki tilauksen tietoihin. |
| **Tuoteryhmä** | Tilauksen tuoteryhmä. |
| **Tuote** | Tilattu tuote. |
| **Tila** | Tilauksen tila, esimerkiksi **Peruutettu** tai **Päättynyt**. |
| **Alkaa** | Tilauksen alkupäivä. |
| **Päättyy** | Tilauksen päättymispäivä. |
| **Peruutus** | Tilauksen peruutuspäivä. |
| **Hinta** | Tilauksen hinta. |
| **Maksettu** | Tilauksen maksutilannetta kuvaava merkintä. |

Avaa tilauksen tiedot napsauttamalla **tilausnumeroa**.

Aloita uuden tilauksen lisääminen asiakkaalle napsauttamalla **+ Lisää tilaus** -painiketta.

![Asiakkaat](/img/versio2/asiakas-tilaukset.png)

## Laskut

**Laskut**-osiossa näet asiakkaan laskut. Otsikon vieressä oleva numero kertoo laskujen määrän.

| Sarake | Sisältö |
| --- | --- |
| **Laskunro** | Laskun numero ja linkki laskun tietoihin. |
| **Pvm** | Laskun päivämäärä. |
| **Eräpäivä** | Laskun eräpäivä. |
| **Summa** | Laskun summa. |
| **Tila** | Laskun tilaa kuvaava merkintä. Erääntyneet laskut on merkitty punaisella **Erääntynyt**-tunnisteella. |

Avaa laskun tiedot napsauttamalla **laskunumeroa**.

Aloita uuden laskun lisääminen asiakkaalle napsauttamalla **+ Lisää lasku** -painiketta.

![Asiakkaat](/img/versio2/asiakas-lasku.png)

## Asiakaskortin sulkeminen

Tallenna mahdolliset muutokset ennen sulkemista. Sulje asiakaskortti napsauttamalla **Sulje välilehti** -painiketta.

![Asiakkaat](/img/versio2/sulje-asiakas.png)

### Tallentamattomat muutokset

Jos yrität sulkea asiakaskortin tallentamatta muutoksia, järjestelmä näyttää **Tallentamattomia muutoksia** -varoituksen.

- **Peruuta:** peruu sulkemisen ja palauttaa sinut asiakaskortille. Voit jatkaa muokkaamista tai tallentaa muutokset **Tallenna**-painikkeella.
- **Sulje tallentamatta:** sulkee välilehden ja hylkää tallentamattomat muutokset.

![Asiakkaat](/img/versio2/sulje-asiakas2.png)

