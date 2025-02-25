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

Voit hakea lähettämättömät viestit painamalla **Hae lähettämättömät** -painiketta.

![Viestit](/img/ohjeet/viestit2.png)

Saat hakutuloksen listaan lisäkenttiä aktivoimalla niitä **Listan lisäkentät** -valikosta ja suorittamalla Haun.

![Viestit](/img/ohjeet/viestit3.png)

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

Valitsemalla asiakaskortin aktivoimalla täpän asiakasnumeron edessä ja painamalla **Palauta roskakorista aktiiviseksi** -painiketta, voit palauttaa asiakaskortin tietokantaan. Ohjelma kysyy sinua varmistamaan, että haluat suorittaa palautuksen.

![Kontaktien roskakori](/img/ohjeet/roskakori2.png)

Valitsemalla asiakaskortin aktivoimalla täpän asiakasnumeron edessä ja painamalla **Poista lopullisesti** -painiketta, voit poistaa asiakaskortin lopullisesti tietokannasta. Tämän jälkeen ei asiakasta voi palauttaa. Ohjelma kysyy sinua varmistamaan, että haluat suorittaa poiston.

![Kontaktien roskakori](/img/ohjeet/roskakori3.png)

## Tuplien käsitttely

![Tuplien käsittely](/img/ohjeet/tuplat.png)

**Tuplien käsitelly** -välilehdellä voit yhdistää tuplana olevia asiakaskortteja. 

### Ohje tuplien käsittelyyn

Tämä välilehti on näkyvissä **vain pääkäyttäjille**. Ennen kuin pystyt tekemään toimintoja välilehdellä, pitää sinun tehdä **lisätunnistautuminen sähköpostin kautta**. Käyttäjääsi yhdistettyyn sähköpostiin lähetetään **koodi**, mikä sinun pitää syöttää osoitettuun kenttään. Oikean koodin syöttämisen jälkeen voit tehdä toimintoja välilehdellä.

![Tuplien käsittely](/img/ohjeet/tuplat9.png)

![Tuplien käsittely](/img/ohjeet/tuplat10.png)

**HUOM! KAIKKI DATA ESIMERKISSÄ ON KEKSITTYÄ!**

1. Aloita tuplien käsittely painamalla **Luo CSV-tiedosto koko rekisteristä** -painiketta. Tiedoston luomisessa kestää jonkin verran aikaan, riippuen rekisterin koosta. Päivittämällä välilehden (klikkaamalla Tuplien käsittely -tekstiä) voit seurata tiedoston luomisen edistystä. Kun tiedosto on valmis ladattavaksi, ilmestyy näytölle **Lataa CSV** -painike.

![Tuplien käsittely](/img/ohjeet/tuplat2.png)

2. Lataa rekisteri painamalla **Lataa CSV** -painiketta.

![Tuplien käsittely](/img/ohjeet/tuplat3.png)

3. Avaa tiedosto Excelissä. Valitse kaikki data tiedostossa painamalla **Ctrl+A** ja valitse **Muotoile taulukoksi**

![Tuplien käsittely](/img/ohjeet/tuplat4.png)

4. Löydät tuplat helpoiten **lajittelemalla taulukon osoitteen mukaan**. Klikkaa osoitesarakkeessa olevaa nuolta ja lajittele osoitteet **aakkosjärjestyksessä**. (Katso kuva alta)

![Tuplien käsittely](/img/ohjeet/tuplat5.png)

5. Kun löydät tupla-asiakkaan, määritä ensin kumpi tuplista on **master-tunnus**, johon tupla yhdistetään. Tarvittaessa täydennä masterin tietoja esim. sähköpostilla. CSV-tiedostossa on valmiina **PAAK** ja **ALIK** sarakkeet, joissa on kontaktin yksilöivä **KontaktiID**.

![Tuplien käsittely](/img/ohjeet/tuplat6.png)

6. **Alitunnuksen (tuplan) KontaktiID** siirretään **PAAK-sarakkeesta ALIK-sarakkeeseen**. Kopioidaan **Masterin KontaktiID** ja lisätään se **Masterin ALIK-sarakkeeseen** ja **alitunnuksen PAAK-sarakkeeseen**. Esim.

- Nessa Karjalahden päätunnuksen (jolle siirretään tuplan tiedot) KontaktiID on **746232**
- Nessan alitunnuksen (tuplan) KontaktiID on **746768**

![Tuplien käsittely](/img/ohjeet/tuplat6.png)

- Siirretään **alitunnuksen KontaktiID PAAK-sarakkeesta ALIK-sarakkeeseen**.

![Tuplien käsittely](/img/ohjeet/tuplat8.png)

- Kopioidaan **Masterin KontaktiID** ja lisätään se **Masterin ALIK**-sarakkeeseen ja **alitunnuksen PAAK**-sarakkeeseen.

![Tuplien käsittely](/img/ohjeet/tuplat7.png)

7. Käsittele tietoja Excelissä haluamallasi tavalla ja **sovi TaikaTilauksen kanssa** tietojen takaisin tuomisesta. Ole tarkkana että **rivien KontaktiID:t pysyvät oikeilla riveillä**.