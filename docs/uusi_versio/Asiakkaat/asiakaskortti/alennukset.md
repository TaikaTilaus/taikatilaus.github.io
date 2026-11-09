---
sidebar_position: 5
title: Alennukset
---

# Alennukset

**Alennukset**-välilehdellä ylläpidetään kaikkia asiakkaan alennuksia yhdessä paikassa. Välilehti näkyy vain tallennetulla asiakkaalla ja vain silloin, kun alennussäännöt on otettu käyttöön järjestelmän asetuksista. Jos välilehteä ei näy, alennusprosentit ovat [**Laskutustiedot**](/docs/uusi_versio/Asiakkaat/asiakaskortti/laskutustiedot)-välilehden [**Laskun ehdot**](/docs/uusi_versio/Asiakkaat/asiakaskortti/laskutustiedot#laskun-ehdot) -osiossa.

Kun välilehti on käytössä, [Laskutustiedot](/docs/uusi_versio/Asiakkaat/asiakaskortti/laskutustiedot)-välilehden Ale-%-kenttiä ei näytetä.

Välilehdellä on kaksi osiota: **Tilausten alennus** ja **Ilmoitusten alennussäännöt**. Tilausten alennus -osio näkyy vain, jos sovelluksessa on tilauksia. Kun järjestelmää käytetään vain ilmoitusten hallintaa, on vain Ilmoitusten alennussäännöt.

## Tilausten alennus

Tilausten alennus on asiakkaan oma alennusprosentti. Sitä käytetään uusille tilauksille, kestojatkoille ja käsin tehdyille laskuriveille.

1. Kirjoita alennusprosentti kenttään (0–100 %).
2. Napsauta Tallenna. Voit myös napsauttaa Peruuta, jolloin kenttään palaa aiempi arvo.

Tallenna ja Peruuta -painikkeet näkyvät vasta, kun olet muuttanut prosenttia. Tämä tallennus on erillinen [asiakaskortin](/docs/uusi_versio/Asiakkaat/asiakaskortti) Tallenna-painikkeesta: se tallentaa vain alennuksen.

## Ilmoitusten alennussäännöt

Ilmoitusten alennukset määritetään säännöillä. Säännöt tulevat ilmoitusvarauslomakkeen Asiakasalennus-valintaan. Muutos ei muuta jo tallennettuja varauksia. Osion otsikon vieressä näkyy asiakkaan sääntöjen määrä. Jos sääntöjä ei ole, näkyy teksti Ei alennussääntöjä.

Jokainen sääntö näkyy listassa omana lohkonaan:

| Rivi | Sisältö |
|---|---|
| **Ylärivi** | Säännön tila, voimassaoloaika, käyttökerrat ja painikkeet. |
| **Alennukset** | Säännön alennukset omina merkkeinään, esimerkiksi Yleinen 10 % tai Kanava 20 %. Yksikköhinta näkyy muodossa 1,20 €/pmm. |
| **Selite** | Säännön selite yhdellä rivillä. Koko teksti näkyy, kun viet hiiren selitteen päälle. |

**Tila.** Säännön tila näkyy värillisenä merkkinä:

| Tila | Merkitys |
|---|---|
| **Voimassa** | Sääntö on aktiivinen ja tämä päivä on voimassaoloajalla. Voimassaolon alku- ja päättymispäivä ovat mukana. |
| **Tuleva** | Sääntö alkaa vasta tulevaisuudessa. |
| **Päättynyt** | Voimassaolo on päättynyt. |
| **Passiivinen** | Sääntö on otettu pois käytöstä. |

Voimassaolo näytetään tekstinä: Aina voimassa, Alkaen päivämäärä, Päättyen päivämäärä tai alkamis- ja päättymispäivä. Jos sääntö ei ole prosenttialennus, tyyppi näkyy lisäksi merkkinä, esimerkiksi Yksikköhinta.

**Käyttökerrat.** Jos sääntöä on käytetty ilmoitusvarauksilla, näkyy varausten määrä muodossa 3 var.

Säännöt on järjestetty niin, että voimassa olevat ovat ylimpänä. Sen jälkeen tulevat tulevat, päättyneet ja passiiviset säännöt. Poistettuja sääntöjä ei näytetä.

**Painikkeet.** Rivin oikeassa reunassa on kolme painiketta:

- **Kynä (Muokkaa sääntöä):** avaa säännön muokkauksen. Sama tapahtuu, kun napsautat lohkoa.
- **Passivoi / Aktivoi:** poistaa säännön käytöstä tai ottaa sen takaisin käyttöön.
- **Roskakori (Poista):** poistaa säännön. Järjestelmä pyytää vahvistuksen ja näyttää säännön tiedot. Jos sääntöä on käytetty varauksilla, vahvistuksessa on varoitus. Varauksille tallennetut alennukset säilyvät.

Kaikkia sääntöjä ei voi muokata [asiakaskortilla](/docs/uusi_versio/Asiakkaat/asiakaskortti). Muut kuin asiakkaalle tehdyt ilmoitusvaraussäännöt näkyvät listassa, mutta niitä ei voi avata. Ne muokataan vanhan TaikaTilauksen **Asetukset → Alennukset** -sivulla. Vie hiiri lohkon päälle, niin näet ohjeen.

## Alennussäännön lisääminen ja muokkaaminen

1. Napsauta osion otsikon vieressä olevaa **Lisää sääntö** -painiketta. Muokkaat olemassa olevaa sääntöä kynäkuvakkeella.
2. Täytä **Sääntö**-osion kentät.
3. Lisää tarvittaessa kohdistukset.
4. Napsauta **Tallenna**.

Muokkausikkunan otsikko on **Uusi alennussääntö**. Olemassa olevan säännön otsikossa näkyy säännön numero.

**Sääntö**

| Kenttä | Ohje |
|---|---|
| **Hinnoittelutapa** | Alennusprosentti tai Yksikköhinta (€/pmm). |
| **Yleinen alennus-%** | Näkyy, kun hinnoittelutapa on Alennusprosentti. Alennus koskee kaikkia ilmoituksia, joihin mikään kohdistus ei osu. |
| **Alennustuoterivi laskulla** | Näkyy vain, jos järjestelmässä on alennustuotteita. Valitse tuote, jolla alennus näkyy laskulla. |
| **Voimassa alkaen ja Voimassa päättyen** | Säännön voimassaoloaika. Uuden säännön alkupäivä on oletuksena tämä päivä. Päättymispäivä ei voi olla ennen alkupäivää. |
| **Selite** | Vapaa teksti, esimerkiksi sopimuksen numero. |
| **Aktiivinen** | Kun valinta on pois päältä, sääntö on passiivinen. |

**Kohdistukset**

Kohdistuksilla alennus voidaan rajata tiettyihin ilmoituksiin. Tyhjä kenttä koskee kaikkia. Jos useampi kohdistus osuu samaan ilmoitukseen, tarkin voittaa. Tarkkuusjärjestys on julkaisu, kanava, myyntituote ja ryhmä.

| Kenttä | Ohje |
|---|---|
| **Kanava** | Rajaa alennuksen tiettyyn kanavaan. |
| **Julkaisu** | Rajaa alennuksen tiettyyn julkaisuun. Voit valita julkaisun vasta, kun olet valinnut kanavan. |
| **Ryhmä** | Rajaa alennuksen tiettyyn tuoteryhmään. |
| **Myyntituote** | Rajaa alennuksen tiettyyn myyntituotteeseen. Lista rajautuu valitun kanavan ja ryhmän mukaan. |
| **Alennus-% tai €/pmm** | Kohdistuksen alennus. Sarakkeen nimi riippuu hinnoittelutavasta. |

- Lisää uusi kohdistus napsauttamalla **Lisää kohdistus**.
- Poista kohdistus rivin lopussa olevalla **rastilla**.
- Kun vaihdat kanavan tai ryhmän, järjestelmä tyhjentää valinnan, joka ei enää sovi siihen.
- Kun kohdistuksia ei ole, näkyy teksti **Ei kohdistuksia**.
- Tyhjät kohdistusrivit jätetään tallennuksessa pois.

Prosenttialennukselle on annettava yleinen alennus-% tai vähintään yksi kohdistus, jossa on prosentti. Yksikköhinnalle tarvitaan vähintään yksi kohdistus ja yksikköhinta, joka on suurempi kuin nolla. Järjestelmä ilmoittaa virheestä tallennettaessa.

Jos joku on muuttanut samaa sääntöä sen jälkeen, kun avasit muokkauksen, tallennus ei onnistu. Avaa sääntö uudelleen ja tee muutos uudestaan.
