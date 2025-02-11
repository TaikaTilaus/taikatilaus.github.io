---
sidebar_position: 8
---

# Hallinta

![Hallinta](/img/ohjeet/hallinta.png)

Hallinta-välilehdeltä voit hallita järjestelmään liittyviä eri asioita, kuten asiakkaiden käyttäjätunnuksia, roskakoria ja tapahtumalokia.

## Viestit
![Viestit](/img/ohjeet/viestit.png)

Hallinta-välilehden **Viestit**-alavälilehdellä voit tarkastella asiakkaille lähetettyjä viestejä, esim. tilausvahvistuksen yhteydessä.

Voit hakea viestejä:

- **päivän**
- **kanavan** (kirje, sähköposti, verkkolasku, muu)
- **lähetyksen tilan** (odottaa, lähetyksessä, lähetetty, virhe)
- viestistä tai otsikosta löytyvän **merkkijonon**
- **vastaanottojan osoitteen**
- TAI **lähetyksen tunnuksen** perusteella (jokaisella lähetyksellä on oma tunniste, massalähetyksissä tunniste on sama kaikilla viesteillä)

## Tapahtumaloki

![Tapahtumaloki](/img/ohjeet/tapahtumaloki.png)

**Tapahtumaloki**–välilehdellä tarkastellaan sovelluksessa tapahtuneita asioita, joiden on katsottu olevan oleellisia sovelluksen käytön seurannan kannalta. Lokilta voi esimerkiksi tarkistaa kuka on poistanut tilauksen tai tehnyt muun vastaavan virheen.

Näitä ovat muun muassa sisään- ja uloskirjautuminen, sekä postituslistan luominen ja kestotilausten jatkaminen
- Myös huoltoajot, kuten palvelun päivittäminen versiotietoineen voidaan tarkastaa täältä

Lokilta voi hakea suoritettuja toimintoja seuraavilla hakukriteereillä:
- **Toiminto** (esim. Uloskirjaus, Myynnin poisto)
- **Lisätiedot** (esim. Onnistui)
- **Käyttäjätunnus ja nimi** (esim. taikauser)
- **Lisäparametrit** (mm. Asiakasnumero / Tilausnumero tieto)
- **Selain** (ns. ohjelmiston käyttäjän käyttämä selain ja sen version esim. Chrome 124.0)
- **TCP/IP** (TCP/IP -osoite kertoo missä osoitteessa käyttäjä on)
- **SessionID** (käyttäjän selaimen yhteystunniste. tunniste on sama niin kauan kun ohjelma on selaimella auki.)
- **SuoritajaID** (kaikki saman käyttäjän suorittamat toimet yhdellä kirjaustumissessiolla kirjataan suoritusID:n alle)

Selaimen, TCP/IP -osoitteen, ja SessionID:n **näkyvyys** voidaan määrittää aktivoimalla **Näytä Selain, TCP/IP, SessionID** -kenttä.

![Tapahtumaloki](/img/ohjeet/loki2.png)

Hakuehdot voi tyhjentää painamalla **Tyhjennä hakuehdot** -painiketta. Voit siirtyä päivästä toiseen **Edellinen päivä** ja **Seuraava päivä** -painikkeista.

![Tapahtumaloki](/img/ohjeet/loki-haku.png)
*Lokista voi hakea suoritettuja toimintoja erilaisten hakukriteerien avulla.*

Klikkaamalla sarakkeissa olevia **Hakuun**-nappeja, siirtyvät tiedot hakukriteereiksi, ja voit näin hakea esim. samalla IP-llä suoritettuja toimintoja.

![Tapahtumaloki](/img/ohjeet/loki-hakuun.png)
*Klikkaamalla Hakuun-painiketta saat siirrettyä lokissa esiintyviä tietoja hakukriteereiksi.*

Asiakaskohtaisesti sovitaan myös näytettävät muut muutokset, kuten **kenttäkohtaiset** muutostiedot, joita käyttäjät ovat tehneet (asiakas-/tilaus-/laskutustietojen päivitykset jne.) esim. OmaPalvelussa

## Kontaktien roskakori

![Kontaktien roskakori](/img/ohjeet/roskakori.png)

**Kontaktien roskakori** -välilehdellä voit hakea, palauttaa tai lopullisesti poistaa poistettuja asiakaskortteja.

Roskakorin listauksessa näet poistettujen asiakkaiden:

- asiakasnumeron
- yhteystiedot
- poistoajan