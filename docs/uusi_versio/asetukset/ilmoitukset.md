---
sidebar_position: 8
description: Ilmoitusten asetukset — käytössä olevat kentät, ilmoitusvarauslomake, Ilmoitukset-lista, uuden asiakkaan oletusmyyjä, ilmoituspaikkojen rajat ja avoimuusilmoitukset (TTPA).
---

# Ilmoitukset

**Ilmoitukset**-asetussivulla määritetään [Ilmoitukset-listan](../Ilmoitukset/ilmoitukset-lista.md) ja [ilmoitusvarauslomakkeen](../Ilmoitukset/ilmoitusvaraus.md) kentät ja toiminnot sekä ilmoituspaikkojen rajat ja avoimuusilmoitusten asetukset.

Avaa sivu valitsemalla **Asetukset → Ilmoitukset**. Pääkäyttäjä pääsee sivulle myös ilmoitusvarauslomakkeen **Asetukset**-painikkeella.

Asetukset koskevat kaikkia käyttäjiä. Vain pääkäyttäjä voi muuttaa niitä. Muut käyttäjät näkevät asetukset, mutta eivät voi muuttaa niitä.

Sivulla on kuusi välilehteä. Neljän ensimmäisen välilehden asetukset tallennetaan sivun alareunan **Tallenna**-painikkeella yhdellä kertaa. Ilmoituspaikat- ja Avoimuusilmoitukset-välilehdillä on omat tallennuspainikkeensa.

## Käytössä olevat kentät

**Ilmoitusvarauksen kentät käytössä** on pääasetus: valitse varauksen kentät, joita käytetään. Kenttä voi näkyä lomakkeella, listalla tai molemmissa.

- Kenttä, joka ei ole käytössä, ei näy lomakkeella, listalla eikä kenenkään Sarakkeet-valikossa. Sitä ei myöskään tarjota Ilmoitusvarauslomake- ja Ilmoitukset-lista-välilehdillä.
- Kanava, tuote, julkaisu ja hinta sekä listan Varausnro ja Tila ovat aina käytössä.
- Kentän tallennetut arvot säilyvät, vaikka kenttä otetaan pois käytöstä.

**Kaikki käyttöön** ottaa kaikki kentät käyttöön. Siirretty Planneriin -kenttä on oletuksena pois käytöstä.

## Ilmoitusvarauslomake

### Lomakkeella näkyvät kentät

Valitse lomakkeella näkyvät kentät. Luettelossa ovat vain käytössä olevat kentät. Piilotettavissa ovat esimerkiksi myyjä, koko, ilmoitusosasto, värillisyys, lisätiedot, aineiston toimittaja, hyväksyntä, tiedostot, pmm-hinta, alennusprosentti, laskutustapa ja laskun maksaja.

Kanava, tuote, julkaisu, Normaalihinta ja lopulliset hinnat ovat aina näkyvissä. Jos osion kaikki kentät piilotetaan, osio piiloutuu. Piilotetun kentän tallennettu arvo säilyy, ja uudella varauksella käytetään oletusarvoa.

**Näytä kaikki** palauttaa kaikki kentät näkyviin.

### Toimintopainikkeet

Valitse, missä lomakkeen Tallenna-, Peruuta- ja muut painikkeet ovat: **Ylhäällä ja alhaalla** (oletus), **Vain ylhäällä** tai **Vain alhaalla**.

### Valmistuslisä

Anna **Valmistuslisän tuoteID**, niin lomakkeen hinta-osioon tulevat Valmistuslisä ja sen hinta. Tyhjä kenttä tarkoittaa, että valmistuslisä ei ole käytössä. Sama asetus on vanhassa TaikaTilauksessa.

### Myyjä

**Käyttäjä oletusmyyjänä**: uuden ilmoitusvarauksen myyjäksi valitaan kirjautunut käyttäjä, jos hänen roolinsa on myyjä. Muuten myyjä on asiakaskortin myyjä. Sama asetus on vanhassa TaikaTilauksessa.

### Laskutus

**Ilmoitusvaraukset luovat laskutuspyynnöt** on oletuksena päällä: tallennettu ja kopioitu varaus saa laskutuspyynnön, joka laskutetaan laskutusajossa. Pakettihintainen myynti ja laskutustapa *Ei laskutusta* eivät saa laskutuspyyntöä.

Ota asetus pois vain, jos ilmoituksia ei laskuteta TaikaTilauksessa. Silloin olemassa oleviin laskutuspyyntöihin ei kosketa.

## Ilmoitukset-lista {#ilmoitukset-lista}

### Käytettävissä olevat sarakkeet

Valitse sarakkeet, jotka ovat Ilmoitukset-listan Sarakkeet-valikossa. Jokainen käyttäjä valitsee niistä itse, mitkä näkyvät. Sarakkeet ovat ryhmissä Varaus, Julkaisu, Myyntituote, Asiakas ja laskutus sekä Aineistot. Luettelossa ovat vain käytössä olevien kenttien sarakkeet.

### Hakuehdot

| Asetus | Kuvaus |
|---|---|
| **Ilman aikaa -valinta käytössä** | Hakuehtoihin tulee valintaruutu, joka näyttää vain varaukset ilman alkupäivää. |
| **Näytä maksajavaraukset -valinta käytössä** | Hakuehtoihin tulee valintaruutu, joka tuo listalle yhteisilmoitusten maksajavaraukset. Näkyy vain, jos maksajajako on käytössä. |
| **Näytä poistetut tuotteet tuotevalinnassa** | Oletuksena Tuote-valinnassa ei ole poistettuja tuotteita. Poistettujen tuotteiden varaukset näkyvät listalla silti muiden hakuehtojen mukaan. |

### Sijoittelu

**Sijoittelu-välilehti käytössä**: Ilmoitukset-sivulle tulee Sijoittelu-välilehti, jossa valitaan julkaisu, ja sen sivurakenne avautuu Sisu-monijulkaisusta. Välilehdellä ovat julkaisut, joiden **Ulkoinen ID** -kenttään on [Julkaisut](./julkaisut.md)-sivulla tallennettu julkaisun Sisu-tunnus.

## Asiakkaat

**Uuden asiakkaan oletusmyyjä**: tämä käyttäjä valitaan asiakaskortin Myyjä-kenttään, kun asiakas lisätään. Käyttäjä voi vaihtaa myyjän. Vaihtoehtoina ovat käyttäjät, joiden rooli on myyjä.

## Ilmoituspaikat

Ilmoituspaikkojen rajoilla estetään ilmoituspaikan ylivaraus. Esimerkiksi etusivulle mahtuu yksi ilmoitus, ja takasivun ilmoitukset saavat olla yhteensä enintään 2 160 palstamillimetriä. Raja koskee yhtä julkaisua eli lehden yhden päivän numeroa.

Jokaisella rivillä on:

| Sarake | Kuvaus |
|---|---|
| **Lehti** | *Kaikki lehdet* tai yksi lehti. Lehden oma rivi korvaa samaa paikkaa koskevan Kaikki lehdet -rivin. Jos lehden rivillä ei ole kumpaakaan rajaa, lehdellä ei ole rajaa. |
| **Paikka (ilmoitusosasto tai tuotteen ryhmä)** | Verrataan varauksen ilmoitusosastoon. Jos varauksella ei ole osastoa, verrataan myyntituotteen ryhmään. Kirjainkoolla ei ole väliä. |
| **Enintään kpl** | Varausten enimmäismäärä. Tyhjä = ei rajaa. |
| **Enintään pmm** | Varausten palstamillimetrit yhteensä. Tyhjä = ei rajaa. |
| **Osuu** | Montako tuotetta ja osastoa paikkaan osuu. *Ei osumia* tarkoittaa, että nimi on todennäköisesti kirjoitettu väärin. |

Raja saa täyttyä tasan. Kaikki julkaisun poistamattomat varaukset lasketaan, myös tyhjät varaukset. Muokattavaa varausta ei lasketa mukaan.

**Mitä varaaja näkee:** varauslomakkeen, Lisää uusi varaus -ikkunan ja Kopioi-ikkunan julkaisulistassa näkyy paikan tilanne, esimerkiksi "Takasivu: varattu 1 800 / 2 160 pmm". Täysi julkaisu näkyy punaisena. Jos ilmoitus ei mahdu, näkyy varoitus, ja tallennettaessa kysytään *Varaa silti* / Peruuta. Raja ei siis estä varaamista, vaan varaaja päättää.

Raja koskee vain lehtikanavia, ei nettiä tai radiota. Vanha TaikaTilaus ei tarkista rajoja. Jos taulukossa ei ole rivejä, toiminto ei ole käytössä.

## Avoimuusilmoitukset (TTPA)

Välilehdellä määritetään poliittisten mainosten avoimuusilmoitusten asetukset. Asetukset ovat yhteiset vanhan TaikaTilauksen kanssa. Välilehdellä on myös linkki julkiseen avoimuusilmoitusten luetteloon.

Tallenna muutokset napsauttamalla **Tallenna TTPA-asetukset**.

## Muut ilmoitusten asetukset

- **Euroalennus (Alennus EUR)** ja **varausvahvistus** otetaan käyttöön ylläpidon asetuksista. Jos et näe niitä lomakkeella, ota yhteyttä ylläpitoon.
- Ilmoitusten alennussäännöt ylläpidetään asiakaskortin [Alennukset](../Asiakkaat/asiakaskortti/alennukset.md)-välilehdellä.
- Microsoft 365 -aineistotuotanto määritetään sivulla [Asetukset → Muut asetukset → Microsoft 365](./muut-asetukset/microsoft-365.md).
- Yhteislehdet määritetään sivulla [Julkaisut](./julkaisut.md) → Lyhenteet ja asetukset → Yhteislehdet.
