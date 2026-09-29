---
sidebar_position: 5
description: Kanavat — julkaisujen lyhenteet, kanavat ja LEHTI-tyyppisen kanavan ilmoitusosastot.
---

# Kanavat

## Julkaisujen lyhenteet

Sivun ensimmäisenä kohtana ovat **julkaisujen lyhenteet**. Kohta näkyy ja on muutettavissa vain **pääkäyttäjille**.

- Anna jokainen julkaisu omalle rivilleen muodossa `Julkaisun nimi:Lyhenne`, esimerkiksi `TaikaNakka:TAN`.
- Jos julkaisulle ei ole annettu lyhennettä, lyhenteenä käytetään julkaisun nimeä. Lyhenne kannattaa antaa, jos nimi on yli 5 merkkiä.
- Lyhenteillä nimetään mm. palvelimen aineistokansiot ja Planner-siirtotiedostot, joten **älä muuta olemassa olevaa lyhennettä**: vanhat aineistopolut katkeaisivat.

## Kanavat ja kanavatyypit

**Kanavat**-välilehdellä määritellään kanavat, joiden alle myyntituotteet ryhmitellään. Kanavia voivat olla esimerkiksi **LEHTI**, **NETTI**, **UUTISKIRJE**, **ILMOITUSTAULU**, **RADIO** ja **VAIHTOILMOITUS**-kanavat.

**Kanavat** erotellaan kentän listauksessa pilkuilla, esim. `LEHTI,UUTISKIRJE,RADIO`. Kanavan voi nimetä myös **lehtikohtaisesti**, esimerkiksi: `Autolehti,Mopolehti,Bike,Suunnistus`.

Määritellyt kanavat lajitellaan ohjelmaan koodattuihin **kanavatyyppeihin**, koska eri kanavilla on **erilaisia ominaisuuksia**, esimerkiksi:

- Lehdillä palstamillimetrit  
- Radiomainoksilla CPM-arvo  
- Lehti-kanavalla julkaisut ovat lehtien numeroita, mutta Radio-kanavalla julkaisu voi olla vuosikohtainen  

![Kanavat-välilehti](/img/ohjeet/kanavat1.png)
*Kanavat lajitellaan eri kanavatyyppeihin*

### LEHTI-tyyppisen kanavan ilmoitusosastot

**LEHTI**-tyyppisille kanaville määritellään ilmoitusosastot.

- Jokainen kanavan ilmoitusosasto kirjoitetaan **omalle rivilleen**, puolipisteillä (;) eroteltuina.  
- Uusi ilmoitusosasto lisätään muodossa: `tunniste;kanavan nimi;ilmoitusosasto;hinta`  
  Esimerkiksi: `1;LEHTI;etusivu;1,55`  
  - Tunnisteen on oltava yksilöllinen, eli se ei saa olla sama kuin toisella ilmoitusosastolla.  
  - Tunniste saa olla mikä tahansa numero tai numeroyhdistelmä, ja sitä käytetään avaimena tietokannassa.

![Ilmoitusosastot](/img/ohjeet/kanavat2.png)
*LEHTI-tyyppisille kanaville määritellään ilmoitusosastot.*

