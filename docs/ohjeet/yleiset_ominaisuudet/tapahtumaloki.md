---
sidebar_position: 8
---

# Tapahtumaloki

![Tapahtumaloki](/img/ohjeet/loki.png)

**Tapahtumaloki**–välilehdellä tarkastellaan sovelluksessa tapahtuneita asioita, joiden on katsottu olevan oleellisia sovelluksen käytön seurannan kannalta. Lokilta voi esimerkiksi tarkistaa kuka on poistanut tilauksen tai tehnyt muun vastaavan virheen.

Näitä ovat mm. sisään- ja uloskirjautuminen, sekä postituslistan luominen ja kestotilausten jatkaminen
- Myös huoltoajot, kuten palvelun päivittäminen versiotietoineen voidaan tarkastaa täältä

Listausta voi myös suodattaa 
- **Toiminto**-sarakkeen (esim. Uloskirjaus, Myynnin poisto)
- **Lisätiedot**-sarakkeen (esim. Onnistui)
- **Käyttäjätunnus ja nimi** -sarakkeen (esim. taikauser)
- **Lisäparametrit**-sarakkeen (mm. Asiakasnumero / Tilausnumero tieto)
- **Selain**-sarakkeen (ns. ohjelmiston käyttäjän käyttämä selain ja sen version esim. Chrome 124.0)
- **TCP/IP**-sarakkeen (TCP/IP -osoite kertoo missä osoitteessa käyttäjä on)
- **SessionID**-sarakkeen (käyttäjän selaimen yhteystunniste. tunniste on sama niin kauan kun ohjelma on selaimella auki.)
- **SuoritajaID**-sarakkeen (kaikki saman käyttäjän suorittamat toimet yhdellä kirjaustumissessiolla kirjataan suoritusID:n alle) avulla

![Tapahtumaloki](/img/ohjeet/loki-haku.png)
*Lokista voi hakea suoritettuja toimintoja erilaisten hakukriteerien avulla.*

Asiakaskohtaisesti sovitaan myös näytettävät muut muutokset, kuten **kenttäkohtaiset** muutostiedot, joita käyttäjät ovat tehneet (asiakas-/tilaus-/laskutustietojen päivitykset jne.) esim. OmaPalvelussa

**Hakukenttien** avulla voi hakea merkkijonoja, jotka löytyvät kyseisen hakukriteerin tietosarakkeelta. Klikkaamalla sarakkeissa olevia **Hakuun**-nappeja, siirtyvät tiedot hakukriteereiksi, ja voit näin hakea esim. samalla IP-llä suoritettuja toimintoja.

Selaimen, TCP/IP -osoitteen, ja SessionID:n **näkyvyys** määritellään käyttäjäkohtaisesti.