---
---

# Prenly

[Prenly](https://www.prenly.com/) näköislehden maksumuuri-integraatio. Käyttäjän kirjautuessa näköislehteen haetaan tilaajan tiedot sekä käyttöoikeudet reaaliaikaisesti TaikaTilauksesta.

## Käyttötarkoitus

Ajantasainen tieto voimassaolevista tilauksista ja digilehden lukuoikeuksista on TaikaTilauksessa.

Prenly-näköislehteen (mobiili tai web) kirjautumisessa voidaan toteuttaa pääsynhallinta eri tavoin. Aktiiviset tilaajat voidaan ylläpitää Prenlyssä manuaalisesti, tuoda eräajoina, tai hakea kirjautumisen yhteydessä tilausjärjestelmästä.

Reaaliaikainen lukuoikeuden tarkistus tilausjärjestelmästä on lehden lukijalle sujuvin, koska lukuoikeuden saa heti kun tilaus on voimassa, esim. tilausvahvistuksen tai verkkomaksun jälkeen.

Prenly-kirjautumissivulla näytetään myös linkki unohtuneen salasanan uusimiseen TaikaTilauksessa.

## Liittymän toimintaperiaate

Liittymä perustuu [Prenly Remote API](https://support.prenly.com/p/sign-in-subscriptions/remote-api/a/prenly-remote-authority-api/5567/1013545/40483451) -määrittelyyn.

Liittymässä hyödynnetään [Prenly Remote authority API](https://apidoc.prenly.com/remote-api/) -rajapinnan varianttia 2:
* Prenly built-in login form - login credentials are validated by your system

Prenlyn kirjautumislomakkeelle syötetty käyttäjätunnus ja salasana välitetään TaikaTilauksen [authenticateWithUsernameAndPassword](https://apidoc.prenly.com/remote-api/#/2.%20Built-in%20login%20form%2C%20remote%20accounts/authenticateWithUsernameAndPassword) endpointiin, joka palauttaa yksilöivän käyttäjätunnisteen.

Tämän jälkeen käyttäjätunnisteella voidaan hakea käyttäjän tiedot [getUser](https://apidoc.prenly.com/remote-api/#/2.%20Built-in%20login%20form%2C%20remote%20accounts/getUser) -kutsulla.

Käyttäjän tiedot kertovat mihin tuotteisiin on käyttäjällä on lukuoikeus ja tilauksen voimassaoloajan.

##  Liittymän käyttöönotto

Prenly-integraation käyttöönotto tulee sopia Prenlyn ja TaikaTilauksen kanssa. Ota ensin yhteys Prenlyn tukeen.

1. Prenlyn konfigurointi
   - TaikaTilaus toimittaa tarvittavat tiedot Prenlyyn, jotka on märitelty [liittymäkuvauksessa](https://support.prenly.com/p/sign-in-subscriptions/remote-api/a/prenly-remote-authority-api/5567/1013545/40483451).
  
2. Liittymän testaus testiympäristössä. 
   - TaikaTilaus testaa käyttäen Prenlyn [testisovellusta](https://remoteapi.prenly.com/). 
   - Prenly vahvistaa, että liittymä on teknisesti kunnossa.

3. Liittymän käyttöönotto tuotannossa
   * Prenly kytkee päälle kirjautumislomakkeen. Jos aikaisemmin on ollut käytössä Prenlyyn sisäänrakennettu autentikointi, nämä tunnukset lakkaavat toimimasta.
   * Asiakas viestii muutoksesta lukijoille

## Hinta

TaikaTilauksen osalta Liittymästä veloitetaan käyttöönottomaksu sekä [hinnaston](https://www.taikatilaus.fi/hinnasto) mukainen kiinteä kuukausimaksu. 

Lisätietoja:   
Jari Mäkelä  
p. 050 557 6130  
jari.makela@taikatilaus.fi
