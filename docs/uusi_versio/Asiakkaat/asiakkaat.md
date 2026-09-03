---
sidebar_position: 1
title: Asiakkaat
description: Asiakkaat — Asiakkaiden hakeminen, Hakuhistoria, Lisähakuehdot.
---

# Asiakkaat

**Asiakkaat**-sivulla voit hakea ja tarkastella asiakkaita sekä lisätä uusia asiakkaita. Avaa sivu yläreunan päävalikon **Asiakkaat**-painikkeesta.

![Asiakkaat-sivun hakunäkymä](/img/versio2/asiakkaat.png)

## Asiakkaiden hakeminen

1. Kirjoita sivun yläreunan hakukenttään esimerkiksi asiakasnumero, nimi, yritys, sähköpostiosoite, puhelinnumero tai lisätieto.
2. Napsauta **Hae**.
3. Hakutulokset näytetään alla olevassa asiakasluettelossa.

Voit tarkentaa hakua **Lisähakuehdot**-painikkeesta. **Tyhjennä**-painikkeella voit tyhjentää haun.

![Asiakkaiden hakukenttä ja hakutoiminnot](/img/versio2/asiakas-hakuehdot.png)

### Hakuhistoria

Hakukentän vieressä olevasta **kellokuvakkeesta** voit avata aiemmin tekemäsi haut.

Valitse hakuhistoriasta haluamasi hakusana. Hakukenttä täytetään valitulla hakusanalla ja haku suoritetaan automaattisesti.

### Lisähakuehdot

Avaa tarkemmat hakuehdot napsauttamalla hakukentän vieressä olevaa **Lisähakuehdot**-painiketta. Voit rajata asiakkaita asiakastyypin, asiakasryhmän ja yksittäisten tietokenttien perusteella sekä tallentaa usein käyttämäsi hakuehdot.

#### Rajaaminen asiakastyypin ja ryhmän mukaan

1. Valitse haluamasi rajaukset:
   - **Asiakastyyppi:** valitse haettava asiakastyyppi. Valinta **(ei rajausta)** sisältää kaikki asiakastyypit.
   - **Ryhmän tyyppi:** valitse, minkä tyyppisen asiakasryhmän perusteella haluat rajata hakua.
   - **Arvo:** valitse haluamasi ryhmän arvo. Valinta **(kaikki arvot)** sisältää kaikki valitun ryhmätyypin arvot.
2. Napsauta **Hae**.

Voit käyttää asiakastyyppi- ja ryhmärajausta yhdessä tai erikseen. **Tyhjennä lisäehdot** -painikkeella voit tyhjentää lisäehdot.

Esimerkiksi valinnoilla **Yritys — Ryhmä — AUTOLIIKKEET** haetaan asiakkaat, joiden asiakastyyppi on Yritys ja jotka kuuluvat AUTOLIIKKEET-ryhmään.

Käytettävissä olevat asiakastyypit ja ryhmät määritetään järjestelmän asetuksissa.

![Asiakkaiden rajaus asiakastyypin ja ryhmän mukaan](/img/versio2/lisahaku.png)

#### Kenttäkohtaisten hakuehtojen lisääminen

1. Napsauta **+ Lisää ehto**.
2. Valitse ensimmäisestä valikosta haettava kenttä, esimerkiksi **Sukunimi**.
3. Valitse toisesta valikosta vertailutapa:

   | Vertailutapa | Merkitys |
   | --- | --- |
   | **Sisältää** | Kentässä esiintyy hakemasi teksti missä tahansa kohdassa. |
   | **Alkaa** | Kentän sisältö alkaa hakemallasi tekstillä. |
   | **On (=)** | Kentän sisältö vastaa täsmälleen hakemaasi arvoa. |
   | **Tyhjä** | Kentässä ei ole tietoa. |
   | **Ei tyhjä** | Kentässä on tietoa. |

4. Kirjoita hakemasi arvo tekstikenttään. Vertailutavat **Tyhjä** ja **Ei tyhjä** eivät tarvitse arvoa.
5. Lisää tarvittaessa muita ehtoja **+ Lisää ehto** -painikkeella.
6. Napsauta **Hae**.

Esimerkiksi ehto **Sukunimi — On (=) — Aalto** hakee asiakkaat, joiden sukunimi on täsmälleen Aalto. Haku ei sisällä asiakkaita, joiden sukunimi on esimerkiksi Aaltola.

**Kaikkien ehtojen on täytyttävä**, jotta asiakas tulee hakutuloksiin (JA-haku). Keskeneräiset ehtorivit jätetään huomiotta.

Voit poistaa yksittäisen ehdon napsauttamalla ehtorivin oikeassa reunassa olevaa punaista **X-painiketta**.

![Asiakkaiden kenttäkohtaiset lisähakuehdot](/img/versio2/lisahaku2.png)

### Tallennetut haut

Voit tallentaa usein käyttämäsi hakuehdot, jolloin niitä ei tarvitse määrittää uudelleen jokaisella hakukerralla. Tallennetut haut ovat henkilökohtaisia, eivätkä muut käyttäjät näe niitä.

#### Haun tallentaminen

1. Määritä haluamasi hakuehdot.
2. Kirjoita haulle kuvaava nimi **Tallenna nykyiset ehdot nimellä** -kenttään, esimerkiksi **Autoliikkeet**.
3. Napsauta **Tallenna**.

Tallennukseen sisältyvät asiakastyyppi, ryhmärajaus ja kenttäkohtaiset ehdot.

**Huom:** samalla nimellä tallentaminen korvaa aiemmin tallennetun haun.

#### Tallennetun haun käyttäminen

Valitse haluamasi haku **Omat haut** -valikosta. Järjestelmä asettaa tallennetut hakuehdot automaattisesti ja suorittaa haun heti. **Hae**-painiketta ei tarvitse napsauttaa erikseen.

#### Tallennetun haun poistaminen

1. Valitse poistettava haku **Omat haut** -valikosta.
2. Napsauta **Poista**.

![Asiakkaiden tallennetun haun valitseminen](/img/versio2/haut-tallennettu.png)

## Asiakasluettelo

Asiakasluettelossa näet asiakkaiden perustiedot ja tilauksiin liittyvät merkinnät.

| Sarake | Sisältö |
| --- | --- |
| **Asiakasnro** | Asiakkaan yksilöllinen asiakasnumero. |
| **Nimi** | Asiakkaan nimi. |
| **Tilaukset** | Asiakkaan tilauksiin liittyvät lehtien tai kanavien lyhenteet. |
| **Yritys** | Asiakkaan yrityksen nimi. |
| **Katuosoite** | Asiakkaan katuosoite. |
| **Postitoimipaikka** | Postinumero ja postitoimipaikka. |
| **Sähköposti** | Asiakkaan sähköpostiosoite. |
| **Puhelin** | Asiakkaan puhelinnumero. |
| **Maa** | Asiakkaan maatunnus. |

Avaa asiakkaan tiedot uuteen välilehteen napsauttamalla **asiakasnumeroa**.

![Asiakasluettelo ja asiakkaiden perustiedot](/img/versio2/asiakasluettelo2.png)

### Asiakkaan tietojen avaaminen

Avaa asiakkaan esikatselu napsauttamalla asiakkaan riviä. Esikatselu avautuu asiakasluettelon oikealle puolelle. Siinä näkyvät asiakkaan perustiedot ja laskutustiedot sekä asiakkaaseen liittyvät tilaukset ja laskut.

Esikatselussa voit:

- muokata asiakkaan tietoja samassa välilehdessä napsauttamalla **kynäkuvaketta**
- avata asiakkaan tiedot uuteen välilehteen napsauttamalla **nuolella varustettua laatikkokuvaketta**
- lisätä asiakkaan keräilylistalle napsauttamalla **henkilö- ja listakuvaketta**.
- luoda asiakkaalle uuden tilauksen napsauttamalla **Lisää tilaus**
- luoda asiakkaalle uuden laskun napsauttamalla **Lisää lasku**.

![Asiakkaan esikatselu asiakasluettelossa](/img/versio2/asiakkaat2.png)

### Asiakasluettelon kuvakkeet

Asiakasrivin vasemmassa reunassa on kaksi toimintopainiketta:

- **Kynäkuvake:** avaa asiakkaan tiedot muokattavaksi.
- **Keräilylistakuvake:** lisää asiakkaan keräilylistalle.

Asiakkaan nimen edessä oleva kuvake kertoo asiakastyypin:

- **Henkilökuvake:** henkilö.
- **Rakennuskuvake:** yritys.
- **Ryhmäkuvake:** yhteisö.

![Asiakasluettelon toiminto- ja asiakastyyppikuvakkeet](/img/versio2/asiakasluettelo3.png)

### Luettelon selaaminen ja järjestäminen

Luettelon yläreunassa näet näytettävien asiakkaiden määrän ja hakutulosten kokonaismäärän. Esimerkiksi **100 / 1011** tarkoittaa, että nykyisellä sivulla näytetään 100 asiakasta yhteensä 1 011 hakutuloksesta.

- Valitse **Näytä kerrallaan** -valikosta, kuinka monta asiakasta yhdellä sivulla näytetään.
- Siirry edelliselle tai seuraavalle sivulle nuolipainikkeilla. Sivunumero kertoo nykyisen sivun ja sivujen kokonaismäärän.
- Voit järjestää luettelon napsauttamalla sarakeotsikkoa. Otsikon vieressä oleva nuoli näyttää lajittelusuunnan.

![Asiakasluettelon sivutus ja järjestäminen](/img/versio2/asiakasluettelo.png)

### Näytettävien sarakkeiden valitseminen

Voit valita, mitkä sarakkeet asiakasluettelossa näytetään.

1. Napsauta asiakasluettelon oikeassa yläkulmassa **Sarakkeet**-painiketta.
2. Valitse näytettävät sarakkeet valintaruuduista. Poista valinta sarakkeista, jotka haluat piilottaa.

Perustietojen lisäksi voit näyttää esimerkiksi seuraavat tiedot:

- **Lisätiedot**: asiakaskortilla olevat asiakkaan lisätiedot
- **Viim. kirjautum. Digi**: viimeinen kirjautuminen näköislehteen
- **Viim. kirjautum. OP**: viimeinen kirjautuminen OmaPalveluun
- **Viim. kirjautum. WWW**: viimeinen kirjautuminen nettisivuille
- **Lisätty** ja **Lisääjä**: päivämäärä, jolloin asiakas on lisätty ja kuka asiakkaan on lisännyt
- **Muutettu** ja **Muuttaja**: päivämäärä, jolloin asiakkaan tietoja on muutettu ja kuka tietoja muutti

Sarakkeen piilottaminen ei poista asiakkaan tietoja, vaan muuttaa ainoastaan luettelon näkymää.

Valikon alareunan **Lisäasetukset**-kohdasta pääset sarakkeiden tarkempiin asetuksiin. **Palauta oletukset** -toiminnolla voit palauttaa sarakeasetukset oletusarvoihin.

![Asiakasluettelon sarakevalinnat](/img/versio2/sarakkeet.png)

#### Listan lisäasetukset

Avaa lisäasetukset valitsemalla **Sarakkeet → Lisäasetukset**.

**Lisätiedot-sarake**-valikossa voit määrittää, miten lisätietojen teksti näytetään asiakasluettelossa:

| Valinta | Merkitys |
| --- | --- |
| **Käytä oletusta** | Noudattaa järjestelmän oletusasetusta. Voimassa oleva oletus näkyy suluissa, esimerkiksi **(katkaistuna)**. |
| **Näytä aina kokonaan** | Näyttää lisätietojen tekstin kokonaisuudessaan. |
| **Näytä aina katkaistuna** | Näyttää pitkän lisätietotekstin lyhennettynä. Tämä ei muuta tallennettua tekstiä. |

Valinta koskee vain omaa näkymääsi ja tallentuu heti. Erillistä tallennusta ei tarvita. Sulje ikkuna **Sulje**-painikkeella tai oikean yläkulman rastista.

Kaikkien käyttäjien yhteinen oletusasetus määritetään kohdassa **Asetukset → Listat**.

![Asiakasluettelon lisätietosarakkeen asetukset](/img/versio2/sarakkeet2.png)

## Tietojen vienti ja keräilylistalle lisääminen

Avaa vientivalikko napsauttamalla asiakasluettelon oikeassa yläkulmassa olevaa **Export**-painiketta.

Valikossa näytetään vietävien rivien määrä, esimerkiksi **100 riviä**.

| Toiminto | Kuvaus |
| --- | --- |
| **Lisää keräilylistaan** | Lisää asiakkaita keräilylistalle. |
| **Tulosta** | Avaa luettelon tulostettavaksi. |
| **Kopioi** | Kopioi luettelon tiedot tietokoneen leikepöydälle. |
| **PDF** | Vie tiedot PDF-tiedostoon. |
| **Excel** | Vie tiedot Excel-tiedostoon. |
| **CSV** | Vie tiedot CSV-tiedostoon. |
| **JSON** | Vie tiedot JSON-tiedostoon. |
| **HTML** | Vie tiedot HTML-tiedostoon. |

![Asiakasluettelon vientivalikko](/img/versio2/tietojen-vienti.png)

## Uuden asiakkaan lisääminen

1. Napsauta asiakasluettelon yläreunassa **+ Lisää asiakas** -painiketta. **Uusi kontakti** -lomake avautuu uuteen välilehteen.
2. Täytä asiakkaan tiedot **Yhteystiedot**-välilehdellä.
3. Täydennä tarvittaessa muiden välilehtien tiedot.
4. Napsauta lomakkeen alareunassa **Tallenna**.

![Uuden asiakkaan yhteystietolomake](/img/versio2/lisaa-asiakas.png)
