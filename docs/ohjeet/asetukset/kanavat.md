---
sidebar_position: 8
---

# Kanavat

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

