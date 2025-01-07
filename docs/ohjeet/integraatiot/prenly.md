---
---

# Prenly

[Prenly](https://www.prenly.com/)-näköislehden maksumuuri-integraatio. 

Tämä ohje kuvaa, kuinka TaikaTilauksen tilaajatiedot ja lukuoikeudet yhdistetään reaaliaikaisesti Prenlyn näköislehden kirjautumiseen. Ratkaisu varmistaa tilaajille sujuvan käyttökokemuksen ja ajantasaiset käyttöoikeudet.

## Käyttötarkoitus

Reaaliaikainen integraatio TaikaTilauksen ja Prenlyn välillä mahdollistaa:
- Välittömän pääsyn näköislehteen tilausvahvistuksen tai maksun jälkeen
- Salasanan uusimisen suoraan TaikaTilauksen kautta

## Taustaa

Ajantasainen tieto voimassaolevista tilauksista ja digilehden lukuoikeuksista on TaikaTilauksessa. Tilauksen yhteydessä tilaaja on luonut käyttäjätunnuksen TaikaTilaukseen, jota voidaan käyttää digipalveluihin kirjautumisessa. Tarvittaessa myös TaikaTilauksen pääkäyttäjä voi luoda käyttäjätunnuksia tilaajalle.

Prenly-näköislehteen (mobiili tai web) kirjautumisessa voidaan toteuttaa pääsynhallinta eri tavoin. Aktiiviset tilaajat voidaan ylläpitää Prenlyssä manuaalisesti, tuoda eräajoina, tai hakea kirjautumisen yhteydessä reaaliaikaisesti tilausjärjestelmästä, kuten TaikaTilaus-integraatiossa tehdään. 

Reaaliaikainen lukuoikeuden tarkistus mahdollistaa, että lukuoikeuden saa heti kun tilaus on voimassa, esim. tilausvahvistuksen tai verkkomaksun jälkeen.

## Liittymän toimintaperiaate

Liittymä perustuu [Prenly Remote API](https://support.prenly.com/p/sign-in-subscriptions/remote-api/a/prenly-remote-authority-api/5567/1013545/40483451) -määrittelyyn.

Liittymässä hyödynnetään [Prenly Remote authority API](https://apidoc.prenly.com/remote-api/) -rajapinnan varianttia 2:
* Prenly built-in login form - login credentials are validated by your system

Tämä tarkoittaa, että Prenly näyttää käyttäjälle kirjautumislomakkeen, joka välittää käyttäjätunnuksen ja salasanan TaikaTilaukseen tarkistettavaksi.

Täsmällisemmin Prenlyn kirjautumislomakkeelle syötetty käyttäjätunnus ja salasana lähetetään TaikaTilauksen [authenticateWithUsernameAndPassword](https://apidoc.prenly.com/remote-api/#/2.%20Built-in%20login%20form%2C%20remote%20accounts/authenticateWithUsernameAndPassword) endpointiin, joka palauttaa yksilöivän käyttäjätunnisteen, jos kirjautuminen onnistuu ja virhetiedon muussa tapauksessa.

Tämän jälkeen käyttäjätunnisteella voidaan hakea käyttäjän tiedot [getUser](https://apidoc.prenly.com/remote-api/#/2.%20Built-in%20login%20form%2C%20remote%20accounts/getUser) -kutsulla.

Käyttäjän tiedot kertovat mihin tuotteisiin on käyttäjällä on lukuoikeus ja tilauksen voimassaoloajan.

##  Liittymän käyttöönotto


1. Yhteydenotto: Ota yhteys Prenlyn tukeen ja sovi käyttöönotosta TaikaTilauksen kanssa.

2. Prenlyn konfigurointi
   - TaikaTilaus toimittaa tarvittavat tiedot Prenlyyn [liittymäkuvauksen](https://support.prenly.com/p/sign-in-subscriptions/remote-api/a/prenly-remote-authority-api/5567/1013545/40483451) mukaisesti.
  
3. Testaus testiympäristössä. 
   - TaikaTilaus testaa käyttäen Prenlyn [testisovellusta](https://remoteapi.prenly.com/). 
   - Prenly vahvistaa teknisen toimivuuden.

4. Käyttöönotto tuotannossa
   * Prenly kytkee päälle kirjautumislomakkeen. 
   * Huom! Aiemmat tunnukset lakkaavat toimimasta, jos Prenlyyn sisäänrakennettu autentikointi oli aiemmin käytössä.
   * Asiakas viestii muutoksesta lukijoille

## Hinta

TaikaTilauksen osalta Liittymästä veloitetaan käyttöönottomaksu sekä [hinnaston](https://www.taikatilaus.fi/hinnasto) mukainen kiinteä kuukausimaksu. 

Lisätietoja:   
Jari Mäkelä  
p. 050 557 6130  
jari.makela@taikatilaus.fi
