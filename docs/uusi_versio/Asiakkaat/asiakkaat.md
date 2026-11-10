---
sidebar_position: 1
title: Asiakkaat
description: Asiakkaat — Asiakkaiden hakeminen, Hakuhistoria, Lisähakuehdot.
---

# Asiakkaat

**Asiakkaat**-sivulla voit hakea ja tarkastella asiakkaita sekä lisätä uusia asiakkaita. Avaa sivu yläreunan päävalikon **Asiakkaat**-painikkeesta.

![Asiakkaat-sivun hakunäkymä](/img/versio2/asiakkaat.png)

## Asiakkaiden hakeminen

Kirjoita sivun yläreunan hakukenttään esimerkiksi asiakasnumero, nimi, yritys, osoite, sähköpostiosoite, puhelinnumero tai lisätieto. Osoitehaku hakee myös väliaikaisesta osoitteesta.

Asiakasluettelo päivittyy jo kirjoittaessasi, joten Hae-painiketta ei tarvitse napsauttaa. Hae-painike ja Enter-näppäin tallentavat hakusanan lisäksi hakuhistoriaan.

Hakutulokset näytetään alla olevassa asiakasluettelossa.

Hakukentän vieressä ovat painikkeet:

| Painike | Toiminto |
|---|---|
| **Kellokuvake** | Avaa hakuhistorian. |
| **Hae** | Suorittaa haun ja tallentaa hakusanan hakuhistoriaan. |
| **Tyhjennä** | Tyhjentää hakukentän ja päivittää luettelon. Painike ei tyhjennä lisähakuehtoja. |
| **Lisähakuehdot** | Avaa tarkemmat hakuehdot. Painike on tummempi, kun jokin lisähakuehto on käytössä. |

Sovellus muistaa hakusanasi, luettelon lajittelun ja näytettävät sarakkeet, joten ne ovat ennallaan, kun palaat sivulle.

![Asiakkaiden hakukenttä ja hakutoiminnot](/img/versio2/asiakas-hakuehdot.png)

### Hakuhistoria

Hakukentän vieressä olevasta kellokuvakkeesta voit avata aiemmin tekemäsi haut. Valikon otsikko on **Aiemmat haut**. Historiassa on enintään 15 uusinta hakua, uusin ylimpänä. Jos historia on tyhjä, valikossa lukee *Ei aiempia hakuja.*

- Valitse hakusana. Hakukenttä täytetään valitulla hakusanalla ja haku suoritetaan automaattisesti.
- Poista yksittäinen hakusana historiasta napsauttamalla sen oikealla puolella olevaa rastia.
- Tyhjennä koko historia valitsemalla valikon alareunasta Tyhjennä historia.

Hakuhistoria on henkilökohtainen, eivätkä muut käyttäjät näe sitä.

## Lisähakuehdot

Avaa tarkemmat hakuehdot napsauttamalla hakukentän vieressä olevaa Lisähakuehdot-painiketta. Painike on tummempi, kun jokin lisähakuehto on käytössä. Voit rajata asiakkaita asiakastyypin, asiakasryhmän, lisäys- tai muokkauspäivän, tilausten, markkinointitietojen ja yksittäisten tietokenttien perusteella sekä tallentaa usein käyttämäsi hakuehdot.

Paneelin oikeassa yläkulmassa on Asetukset-kuvake. Sillä voit valita, mitkä lisähakuehdot näkyvät sinulle. Kaikkien käyttäjien yhteinen oletus määritetään kohdassa [**Asetukset → Listat**](/docs/uusi_versio/asetukset/listat). Osa ehdoista näkyy vain tietyssä sovelluksen tilassa:

- Tilaukset-osion ehdot eivät näy, kun vain ilmoitusten hallinta on käytössä.
- Ilmoitusasiakas näkyy vain, kun käytössä on sekä tilaukset että ilmoitusten hallinta.
- Kuolinpesä-asiakastyyppi ja Myyjä-hakukenttä näkyvät vain ilmoitusten hallintaa käyttävillä.

Paneelin alareunassa on **Hae**- ja **Tyhjennä lisäehdot** -painikkeet. **Tyhjennä lisäehdot** -painike tyhjentää kaikki lisähakuehdot, mutta ei hakukentän tekstiä.

### Rajaaminen asiakastyypin ja ryhmän mukaan

1. Valitse haluamasi rajaukset:
   - **Asiakastyyppi:** valitse haettava asiakastyyppi: Henkilö, Yritys, Yhteisö tai ilmoitusten hallinnassa käyttävillä Kuolinpesä. Valinta (ei rajausta) sisältää kaikki asiakastyypit. Valinta (ei tyyppiä) hakee asiakkaat, joille ei ole valittu asiakastyyppiä.
   - **Ryhmän tyyppi:** valitse, minkä tyyppisen asiakasryhmän perusteella haluat rajata hakua.
   - **Arvo:** valitse haluamasi ryhmän arvo. Valinta (kaikki arvot) sisältää kaikki valitun ryhmätyypin arvot. Arvo aktivoituu, kun olet valinnut ryhmän tyypin.
   - **Ilmoitusasiakas:** kytkimellä haet asiakkaat, joilla on myyjä tai vähintään yksi ilmoitusvaraus.
2. Napsauta **Hae**. Ilmoitusasiakas-kytkin hakee heti, eikä Hae-painiketta tarvita.

Voit käyttää rajauksia yhdessä tai erikseen. **Tyhjennä lisäehdot** -painikkeella voit tyhjentää lisäehdot.

Esimerkiksi valinnoilla **Yritys — Ryhmä — AUTOLIIKKEET** haetaan asiakkaat, joiden asiakastyyppi on Yritys ja jotka kuuluvat AUTOLIIKKEET-ryhmään.

Käytettävissä olevat ryhmät määritetään kohdassa [**Asetukset → Asiakasryhmät**](/docs/uusi_versio/asetukset/ryhmien-muokkaus).

![Asiakkaiden rajaus asiakastyypin ja ryhmän mukaan](/img/versio2/lisahaku.png)

#### Rajaaminen lisäys- tai muokkauspäivän mukaan

**Milloin asiakas on lisätty tai muokattu** -osiolla voit hakea asiakkaita sen mukaan, milloin heidät on lisätty järjestelmään tai heidän tietojaan on viimeksi muutettu.

1. Valitse **Päivämäärä**-valikosta peruste: **Lisäyspäivä** tai **Muokkauspäivä**. Valinta **(ei rajausta)** poistaa päivämäärärajauksen.
2. Anna **Alkupäivä, Loppupäivä** tai **molemmat**. Kentät aktivoituvat, kun olet valinnut perusteen. Alku- ja loppupäivä ovat molemmat mukana haussa.
3. Napsauta **Hae**.

### Rajaaminen tilausten mukaan

**Tilaukset** -osiolla voit hakea asiakkaita, jotka ovat tilaajina tilauksissa.

**Tilauksen tila.** Valitse tilat painikkeista. Voit valita useita tiloja. Valittu tila on merkitty ruksilla. Tilat ovat samat kuin [Tilaukset](/docs/uusi_versio/tilaukset)-sivulla ( Voimassa, Tulossa voimaan, Nukutettu, Päättynyt ja Katkaistu).

**Tuoteryhmä ja tuote.** Lisää tuoteryhmä valikosta Lisää tuoteryhmä…. Valitut ryhmät näkyvät värillisinä merkkeinä, jotka voit poistaa rastilla. Tuote valitaan aina tuoteryhmän kautta. Lisää tuote -valikko aktivoituu, kun olet valinnut tuoteryhmän. Jos et valitse tuotetta, haku käyttää kaikkia valittujen tuoteryhmien tuotteita.

Saman tilauksen on täytettävä kaikki valinnat. Poistettuja tilauksia ei huomioida.

**Aktiivinen tilaaja ja Passiivinen tilaaja.** Kytkimillä haet asiakkaat tilaajuuden mukaan:

| Kytkin | Hakee |
|---|---|
| **Aktiivinen tilaaja** | Asiakkaat, joilla on tilaajana vähintään yksi tilaus tilassa Voimassa tai Tulossa voimaan. |
| **Passiivinen tilaaja** | Asiakkaat, joilla on ollut tilaus, mutta joilla ei ole nyt yhtään tilausta tilassa Voimassa, Nukutettu tai Tulossa voimaan. |

Kytkimet sulkevat toisensa pois: kun otat toisen käyttöön, toinen poistuu käytöstä.

### Rajaaminen markkinointitietojen mukaan

**Markkinointi**-osiolla voit hakea asiakkaita [asiakaskortin](/docs/uusi_versio/Asiakkaat/asiakaskortti) [Markkinointitiedot](/docs/uusi_versio/Asiakkaat/asiakaskortti/markkinointitiedot)-välilehden tietojen mukaan.

- **Kaikki markkinointi kielletty:** (ei rajausta), Kyllä tai Ei.
- **Sähköposti, Kirje, Puhelin ja Tekstiviesti:** (ei rajausta), Ei kielletty, Sallittu, Kielletty, Ei tiedossa tai Tila puuttuu.

**Ei kielletty** tarkoittaa kaikkia asiakkaita paitsi Kielletty-tilaisia, myös niitä, joilta tila puuttuu. Esimerkiksi sähköpostimarkkinoinnin listan saat valitsemalla **Sähköposti = Ei kielletty.**

### Kenttäkohtaisten hakuehtojen lisääminen

**Hakukentät**-osiolla voit hakea asiakkaita yksittäisten tietokenttien mukaan.

1. Napsauta **+ Lisää ehto**.
2. Valitse ensimmäisestä valikosta haettava kenttä, esimerkiksi **Sukunimi**.
3. Valitse toisesta valikosta **vertailutapa**. Vaihtoehdot riippuvat kentän tyypistä (ks. alla).
4. **Kirjoita tai valitse** hakemasi arvo. Vertailutavat Tyhjä ja Ei tyhjä eivät tarvitse arvoa.
5. Lisää tarvittaessa muita ehtoja **+ Lisää ehto** -painikkeella.
6. Napsauta **Hae**. 

Voit poistaa yksittäisen ehdon napsauttamalla ehtorivin oikeassa reunassa olevaa punaista **X-painiketta.**

**Haettavat kentät.** Valikossa on seuraavat kentät. Osa kentistä näkyy vain tietyssä sovelluksen tilassa, ja ylläpitäjä voi piilottaa kenttiä kohdassa [**Asetukset → Listat**](/docs/uusi_versio/asetukset/listat).

- Sukunimi, Etunimi, Yritys, Sähköposti ja Puhelin
- Myyjä (ilmoitusten hallinta)
- Syntymävuosi
- Laskun toimitustapa
- Lähiosoite, Postinumero, Postitoimipaikka ja Maa
- Väliaikainen osoite: Lähiosoite, Postinumero ja Postitoimipaikka (vain tilaussivustolla)
- Estolista (vain tilaussivustolla)
- Markkinointikielto
- Kuollut
- Päätunnus ja Alitunnus (kun asiakkaiden käyttäjätunnukset ovat käytössä)
- Asiakaskortin [Lisäkentät](/docs/uusi_versio/Asiakkaat/asiakaskortti/lisakentat)-välilehden kentät omilla nimillään.

Lähiosoite-, Postinumero- ja Postitoimipaikka-ehdot hakevat vain asiakkaan pysyvästä osoitteesta. Väliaikaista osoitetta haet Väl.osoite-kentillä.

**Vertailutavat.** Vertailutapa riippuu kentän tyypistä:

| Vertailutapa | Merkitys |
|---|---|
| **Sisältää** | Kentässä esiintyy hakemasi teksti missä tahansa kohdassa. |
| **Alkaa** | Kentän sisältö alkaa hakemallasi tekstillä. |
| **On (=)** | Kentän sisältö vastaa täsmälleen hakemaasi arvoa. |
| **Suurempi (&gt;) ja Pienempi (&lt;)** | Kentän arvo on suurempi tai pienempi kuin hakemasi arvo. |
| **Välillä** | Kentän arvo on kahden hakemasi arvon välissä. Kirjoita molemmat arvot. |
| **Tyhjä** | Kentässä ei ole tietoa. |
| **Ei tyhjä** | Kentässä on tietoa. |

Esimerkiksi ehto **Sukunimi — On (=) — Aalto** hakee asiakkaat, joiden sukunimi on täsmälleen Aalto. Haku ei sisällä asiakkaita, joiden sukunimi on esimerkiksi Aaltola.

Jos päällä on monta hakuehtoa, kaikkien ehtojen on täytyttävä, jotta asiakas tulee hakutuloksiin. Keskeneräiset ehtorivit jätetään huomiotta. Esimerkiksi ehdot **Etunimi — Alkaa — A** ja **Sähköposti — Tyhjä** hakevat asiakkaat, joiden etunimi alkaa A:lla ja joilla ei ole sähköpostiosoitetta.

![Asiakkaiden kenttäkohtaiset lisähakuehdot](/img/versio2/lisahaku2.png)

### Tallennetut haut

Voit tallentaa usein käyttämäsi hakuehdot, jolloin niitä ei tarvitse määrittää uudelleen jokaisella hakukerralla. Tallennetut haut ovat henkilökohtaisia, eivätkä muut käyttäjät näe niitä.

#### Haun tallentaminen

1. Määritä haluamasi **hakuehdot**.
2. Kirjoita haulle kuvaava nimi **Tallenna nykyiset ehdot nimellä** -kenttään, esimerkiksi **Autoliikkeet**.
3. Valitse halutessasi **Sarakkeet mukaan**, jos haluat tallentaa myös sillä hetkellä valitut sarakkeet. Valitse sarakkeet ensin **Sarakkeet**-valikosta.
4. Napsauta **Tallenna**. Onnistuneesta tallennuksesta näkyy ilmoitus **Haku nimi tallennettu**. Jos et ole antanut nimeä, näkyy teksti **Anna haulle nimi**.

Tallennukseen sisältyvät kaikki lisähakuehdot sekä halutessasi käytetyt sarakkeet.

**Huom:** samalla nimellä tallentaminen korvaa aiemmin tallennetun haun.

#### Tallennetun haun käyttäminen

Valitse haluamasi haku **Omat haut** -valikosta. Järjestelmä asettaa tallennetut hakuehdot automaattisesti ja suorittaa haun heti. **Hae**-painiketta ei tarvitse napsauttaa erikseen. Jos haku on tallennettu sarakkeineen, myös sarakkeet vaihtuvat.

Tallennettu haku korvaa vapaan hakukentän tekstin tallennetulla tekstillä, joten aiempi hakusana ei jää rajaamaan tulosta. Jos hakua ei ole tallennettu tekstin kanssa, hakukenttä tyhjenee.

#### Tallennetun haun poistaminen

1. Valitse poistettava haku **Omat haut** -valikosta.
2. Napsauta **Poista haku.**
3. Vahvista poisto napsauttamalla **Poista haku.** Vahvistusikkuna kertoo, että haku poistetaan pysyvästi omista tallennetuista hauistasi. Se ei tyhjennä hakukenttiä.

![Asiakkaiden tallennetun haun valitseminen](/img/versio2/haut-tallennettu.png)

## Asiakasluettelo

Asiakasluettelossa näet asiakkaiden perustiedot ja tilauksiin liittyvät merkinnät. Luettelossa näkyvät oletuksena seuraavat sarakkeet:

| Sarake | Sisältö |
|---|---|
| **Asiakasnro** | Asiakkaan yksilöllinen asiakasnumero. |
| **Nimi** | Asiakkaan nimi ja sen edessä asiakastyypin kuvake. Kuolleeksi merkityllä asiakkaalla on nimen perässä Kuollut-merkki. |
| **Tilaukset** | Asiakkaan voimassa olevien tilausten lehtien tai tuoteryhmien lyhenteet värillisinä merkkeinä. Vie hiiri merkin päälle, niin näet tuoteryhmän ja tilan. Ilmoitusten hallinnassa sarakkeen nimi on Viimeisin myynti ja siinä näkyy asiakkaan viimeisimmän myynnin numero ja päivämäärä. Napsauta numeroa, niin myynti avautuu. |
| **Viimeisin myynti** | Asiakkaan viimeisimmän ilmoitusmyynnin numero ja päivämäärä. Näkyy vain, kun käytössä on sekä tilaukset että ilmoitusten hallinta. |
| **Myyjä** | Asiakkaan myyjä. Näkyy vain ilmoitusten hallintaa käyttävillä. |
| **Yritys** | Asiakkaan yrityksen ja osaston nimi. |
| **Katuosoite** | Asiakkaan katuosoite. |
| **Postitoimipaikka** | Postinumero ja postitoimipaikka. |
| **Sähköposti** | Asiakkaan sähköpostiosoite. |
| **Puhelin** | Asiakkaan puhelinnumerot. Jos asiakkaalla on useita numeroita, ne näytetään pisteellä erotettuina. |
| **Maa** | Asiakkaan maatunnus. |

Hakusanasi korostetaan luettelossa keltaisella.

![Asiakasluettelo ja asiakkaiden perustiedot](/img/versio2/asiakasluettelo2.png)

### Asiakkaan tietojen avaaminen

Avaa asiakkaan esikatselu napsauttamalla asiakkaan riviä. Esikatselu avautuu asiakasluettelon oikealle puolelle, ja valittu rivi on korostettu. Esikatselussa näet asiakkaan tiedot sekä asiakkaaseen liittyvät tilaukset, myynnit ja laskut.

Esikatselun yläpuolella olevalla palkilla voit:

- palata listaan napsauttamalla **Palaa listaan**
- siirtyä edelliseen tai seuraavaan asiakkaaseen **nuolipainikkeilla**. Painikkeiden välissä oleva luku, esimerkiksi **3 / 100**, kertoo, monesko asiakas luettelossa on.

Esikatselun otsikossa näkyvät asiakkaan asiakasnumero ja nimi sekä tarvittaessa merkit **Kuollut**, **Asiakas on estolistalla** ja **Jakelun keskeytys.** Jakelun keskeytys -merkissä näkyvät keskeytyksen päivät.

Esikatselun otsikossa voit:

- muokata asiakkaan tietoja samassa välilehdessä napsauttamalla **kynäkuvaketta**
- avata asiakkaan tiedot uuteen välilehteen napsauttamalla **nuolella varustettua laatikkokuvaketta**
- lisätä asiakkaan [keräilylistalle](/docs/uusi_versio/Etusivu/kerailylista) napsauttamalla **keräyslistakuvaketta**.

Kortin yläreunassa oleva **Yhteenveto**-palkki on oletuksena suljettu. Napsauta Näytä, niin asiakkaan tilaajuus-, ilmoitus- ja maksutiedot aukeavat. Palkin tarkempi sisältö on kuvattu **Asiakaskortti**-sivun **Yhteenveto**-osiossa.

Esikatselun alapuolella ovat asiakkaan **Tilaukset**- ja **Laskut**-osiot. Luo asiakkaalle uusi tilaus tai lasku napsauttamalla **+ Lisää tilaus** tai **+ Lisää lasku**. Ilmoitushallinta sivustolla osion nimi on **Ilmoitusvaraukset / myynnit**, ja siinä on **+ Lisää varaus -painike**.

![Asiakkaan esikatselu asiakasluettelossa](/img/versio2/asiakkaat2.png)

### Asiakasluettelon kuvakkeet

Asiakasrivin vasemmassa reunassa on kolme toimintopainiketta:

- **Kynäkuvake**: avaa asiakkaan tiedot muokattavaksi.
- **Avaa uuteen välilehteen**: avaa asiakkaan omalle välilehdelleen. Painike näkyy vain, jos asiakkaalla on asiakasnumero.
- **Keräilylistakuvake**: lisää asiakkaan [keräilylistalle](/docs/uusi_versio/Etusivu/kerailylista).

Asiakkaan nimen edessä oleva kuvake kertoo asiakastyypin:

- **Henkilökuvake**: henkilö.
- **Kauppakuvake**: yritys.
- **Ryhmäkuvake**: yhteisö.
- **Risti**: kuolinpesä (vain ilmoitusten hallintaa käyttävillä).
- **Kysymysmerkki**: asiakkaalle ei ole valittu asiakastyyppiä.

![Asiakasluettelon toiminto- ja asiakastyyppikuvakkeet](/img/versio2/asiakasluettelo3.png)

### Luettelon selaaminen ja järjestäminen

Luettelon yläreunassa näet näytettävien asiakkaiden määrän ja hakutulosten kokonaismäärän. Esimerkiksi **100 / 1011** tarkoittaa, että nykyisellä sivulla näytetään 100 asiakasta yhteensä 1 011 hakutuloksesta.

- Valitse **Näytä kerrallaan** -valikosta, kuinka monta asiakasta yhdellä sivulla näytetään.
- Siirry edelliselle tai seuraavalle sivulle nuolipainikkeilla. Sivunumero kertoo nykyisen sivun ja sivujen kokonaismäärän.
- Voit järjestää luettelon napsauttamalla sarakeotsikkoa. Otsikon vieressä oleva nuoli näyttää lajittelusuunnan.

Luettelon yläreunassa näet näytettävien asiakkaiden määrän ja hakutulosten kokonaismäärän. Esimerkiksi **100 / 1011** tarkoittaa, että nykyisellä sivulla näytetään 100 asiakasta yhteensä 1 011 hakutuloksesta.

- Valitse **Näytä kerrallaa**n -valikosta, kuinka monta asiakasta yhdellä sivulla näytetään: 100, 500, 1 000, 5 000, 10 000 tai Kaikki.
- Jos tuloksia on enemmän kuin sivulle mahtuu, siirry edelliselle tai seuraavalle sivulle **nuolipainikkeilla**. Sivunumero kertoo nykyisen sivun ja sivujen kokonaismäärän.
- Voit järjestää luettelon napsauttamalla sarakeotsikkoa. Otsikon vieressä oleva nuoli näyttää lajittelusuunnan: **▲ nouseva ja ▼ laskeva.** Napsauta samaa otsikkoa uudelleen, niin suunta vaihtuu. Oletuksena luettelo on järjestetty nimen mukaan.

Sovellus muistaa valitsemasi lajittelun ja sivun sarakkeet, joten ne ovat ennallaan, kun palaat sivulle.

![Asiakasluettelon sivutus ja järjestäminen](/img/versio2/asiakasluettelo.png)

### Näytettävien sarakkeiden valitseminen

Voit valita, mitkä sarakkeet asiakasluettelossa näytetään.

1. Napsauta asiakasluettelon oikeassa yläkulmassa **Sarakkeet**-painiketta.
2. Valitse näytettävät sarakkeet valintaruuduista. Poista valinta sarakkeista, jotka haluat piilottaa.
3. Voit hakea saraketta kirjoittamalla nimen valikon ylälaidan **Etsi saraketta**… -kenttään.

Oletuksena näkyvät perustiedot (Asiakasnro, Nimi, Tilaukset, Yritys, Katuosoite, Postitoimipaikka, Sähköposti, Puhelin ja Maa) sekä ilmoitusmyyntiä käyttävillä Viimeisin myynti ja Myyjä. Perustietojen lisäksi voit näyttää esimerkiksi seuraavat tiedot:

- **Lisätiedot**: [asiakaskortilla](/docs/uusi_versio/Asiakkaat/asiakaskortti) olevat asiakkaan lisätiedot
- **Viim. kirjautum. Digi**: viimeinen kirjautuminen näköislehteen
- **Viim. kirjautum. OP:** viimeinen kirjautuminen OmaPalveluun
- **Viim. kirjautum. WWW:** viimeinen kirjautuminen nettisivuille
- **Lisätty ja Lisääjä**: päivämäärä, jolloin asiakas on lisätty, ja kuka asiakkaan on lisännyt
- **Muutettu ja Muuttaja:** päivämäärä, jolloin asiakkaan tietoja on muutettu, ja kuka tietoja muutti

Valikon alaosan **Muut asiakkaan kentät** -kohdasta voit lisätä luetteloon myös muita [asiakaskortin](/docs/uusi_versio/Asiakkaat/asiakaskortti) kenttiä, kuten sähköposti #2, c/o-osoite tai Y-tunnus.

Sarakkeen piilottaminen ei poista asiakkaan tietoja, vaan muuttaa ainoastaan luettelon näkymää. Valinta koskee vain omaa näkymääsi.

Valikon yläreunassa olevasta **Lisäasetukset**-kohdasta pääset sarakkeiden tarkempiin asetuksiin. **Palauta oletukset** -toiminnolla voit palauttaa sarakeasetukset oletusarvoihin.

![Asiakasluettelon sarakevalinnat](/img/versio2/sarakkeet.png)

#### Listan lisäasetukset

Avaa lisäasetukset valitsemalla **Sarakkeet → Lisäasetukset**. Valinnat koskevat vain omaa näkymääsi ja tallentuvat heti. Erillistä tallennusta ei tarvita. Sulje ikkuna **Sulje**-painikkeella tai oikean yläkulman rastista.

**Lisätiedot-sarake**-valikossa voit määrittää, miten lisätietojen teksti näytetään asiakasluettelossa:

| Valinta | Merkitys |
| --- | --- |
| **Käytä oletusta** | Noudattaa järjestelmän oletusasetusta. Voimassa oleva oletus näkyy suluissa, esimerkiksi **(katkaistuna)**. |
| **Näytä aina kokonaan** | Näyttää lisätietojen tekstin kokonaisuudessaan. |
| **Näytä aina katkaistuna** | Näyttää pitkän lisätietotekstin lyhennettynä. Tämä ei muuta tallennettua tekstiä. |

**Osoitteen osat.** Valikossa voit valita, näytetäänkö osoite yhdessä sarakkeessa vai osiin jaettuna:

| Valinta | Merkitys |
|---|---|
| **Käytä oletusta** | Noudattaa järjestelmän oletusasetusta. Voimassa oleva oletus näkyy suluissa. |
| **Erota osat omiin sarakkeisiin** | Katuosoite jaetaan sarakkeisiin lähiosoite, katunumero, porras ja huoneisto. Postitoimipaikka jaetaan sarakkeisiin postinumero ja postitoimipaikka. |
| **Näytä yhdessä sarakkeessa** | Osoite näytetään yhdessä sarakkeessa. |

Valinta koskee myös Exportia.

**Lisähakuehdot käytössä.** Kytkimillä voit valita, mitkä lisähakuehdot näkyvät **Lisähakuehdot**-paneelissa. Kytkimet on ryhmitelty paneelin osioiden mukaan. Voit avata saman valinnan myös **Lisähakuehdot**-paneelin oikean yläkulman asetukset-kuvakkeesta.

Kaikkien käyttäjien yhteinen oletusasetus määritetään kohdassa [**Asetukset → Listat**](/docs/uusi_versio/asetukset/listat).

![Asiakasluettelon lisätietosarakkeen asetukset](/img/versio2/sarakkeet2.png)

## Tietojen vienti ja keräilylistalle lisääminen

Avaa vientivalikko napsauttamalla asiakasluettelon oikeassa yläkulmassa olevaa **Export**-painiketta. Painike näkyy, kun luettelossa on asiakkaita.

Valikossa näytetään vietävien rivien määrä, esimerkiksi **100** riviä. Vienti ja [keräilylistalle](/docs/uusi_versio/Etusivu/kerailylista) lisääminen koskevat kaikkia hakuehtoihin osuvia asiakkaita, eivät vain nykyisellä sivulla näkyviä. Rivit viedään luettelon järjestyksessä, ja mukaan tulevat luettelossa näkyvät sarakkeet. Tilaukset-saraketta ei viedä.

| Toiminto | Kuvaus |
|---|---|
| [**Lisää keräilylistaan**](/docs/uusi_versio/Etusivu/kerailylista) | Lisää kaikki hakutulokset [keräilylistalle](/docs/uusi_versio/Etusivu/kerailylista). Valikko ilmoittaa, montako asiakasta lisättiin ja montako oli jo listalla. |
| **Tulosta** | Avaa luettelon tulostettavaksi. |
| **Kopioi** | Kopioi luettelon tiedot tietokoneen leikepöydälle. Tiedot liittyvät esimerkiksi Exceliin suoraan soluiksi. |
| **PDF** | Vie tiedot PDF-tiedostoon. |
| **Excel** | Vie tiedot Excel-tiedostoon. |
| **CSV** | Vie tiedot CSV-tiedostoon. |
| **JSON** | Vie tiedot JSON-tiedostoon. |
| **HTML** | Vie tiedot HTML-tiedostoon. |
| **Parquet** | Vie tiedot Parquet-tiedostoon, joka on tyypitetty sarakemuoto analytiikkaan, esimerkiksi Power BI:hin tai Pythoniin. |

![Asiakasluettelon vientivalikko](/img/versio2/tietojen-vienti.png)

## Uuden asiakkaan lisääminen

1. Napsauta asiakasluettelon yläreunassa **+ Lisää asiakas** -painiketta. **Uusi kontakti** -lomake avautuu uuteen välilehteen.
2. Täytä asiakkaan tiedot [**Yhteystiedot**](/docs/uusi_versio/Asiakkaat/asiakaskortti/yhteystiedot)-välilehdellä.
3. Täydennä tarvittaessa muiden välilehtien tiedot.
4. Napsauta lomakkeen alareunassa **Tallenna**. Asiakas saa asiakasnumeron automaattisesti tallennuksessa.

Joidenkin välilehtien tiedot, kuten [**Ryhmittely**](/docs/uusi_versio/Asiakkaat/asiakaskortti/ryhmittely) ja [**Käyttäjätunnukset**](/docs/uusi_versio/Asiakkaat/asiakaskortti/kayttajatunnukset), voi lisätä vasta, kun asiakas on tallennettu.

![Uuden asiakkaan yhteystietolomake](/img/versio2/lisaa-asiakas.png)
