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

## Tunnukset

Hallintakäyttäjän hakutoiminto mahdollistaa tilaajien käyttäjätunnusten (Maksumuuri ja OmaPalvelu) etsimisen. Hakutuloksissa näytetään, koska tunnusta on viimeksi käytetty eri palveluissa. Voit hakea tunnusta syöttämällä asiakkaan käyttäjätunnukseksi liitetyn sähköpostin **Käyttäjätunnus**-kenttään.

![Viestit](/img/ohjeet/tunnukset.png)

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

Asiakaskohtaisesti sovitaan myös näytettävät muut muutokset, kuten **kenttäkohtaiset** muutostiedot, joita käyttäjät ovat tehneet (asiakas-/tilaus-/laskutustietojen päivitykset jne.) esim. OmaPalvelussa.

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

## Tuplien käsittely

**Tuplien käsittely** -välilehdellä voit yhdistää kaksi asiakaskorttia yhdeksi. Näin toimitaan esimerkiksi silloin, kun samalla asiakkaalla on kaksi asiakaskorttia. 

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely.png)

### Ohjeet tuplien käsittelyyn

**1.** Jos tiedät yhdistettävän asiakkaan asiakasnumerot, voit syöttää ne **Säilytettävä Kontakti** ja **Poistettava Kontakti** -kenttiin ja painaa **Hae**.

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely2.png)

**1.b.** Vaihtoehtoisesti voit hakea asiakkaan asiakaskortit **Etusivun** kautta ja siirtää ne **Leikepöydälle**. 

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely3.png)

**1.b.2.** Jos hakutulos tuo suuren määrän asiakkaita, voit siirtää haluamasi asiakaskortit suoraan asiakaskortilta **Leikepöydälle**

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely4.png)

**2.** Kun haluamasi asiakaskortit ovat leikepöydällä, voit siirtää ne tuplien käsittelyyn painamalla **Tuplien käsittely** -painikkeesta

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely5.png)

**3.** Kun asiakaskortit ovat tuplien käsittelyssä, voit:

- Vaihtaa kontaktit keskenään **Vaihda kontaktit päittäin** -painikkeella
- Siirtää tietoja asiakaskortista toiseen painamalla kenttien vieressä olevaa **Ota**-painiketta
- Täydentää **säilytettävän kontaktin tietoja**, esimerkiksi lisäämällä puhelinnumeron

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely6.png)

**4.** Kun **Säilytettävän kontaktin** tiedot ovat kunnossa, paina **Suorita kontaktien yhdistäminen** -painiketta yhdistääksesi asiakaskortit. 

- Tämä siirtää **Poistettavan kontaktin** roskakoriin ja sen **laskut sekä tilaukset Säilytettävän kontaktin alle**.

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely7.png)

**5.** Järjestelmä pyytää vahvistusta. Paina OK, jos haluat yhdistää kontaktit.

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely8.png)

**6.** Järjestelmä näyttää viestin yhdistämisen onnistumisesta.

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely9.png)

**7.** Painamalla **Hae** kontaktien kohdalla voit tarkastaa, että tilaukset ja laskut ovat siirtyneet ja että poistettava kontakti on roskakorissa.

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely10.png)

## Kontaktien päivitys

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys.png)

**Kontaktien päivitys** -välilehdellä voit päivittää yhdellä kertaa monta asiakasta ja heidän tietojaan rekisteriin. Tällä toiminnolla voi esimerkiksi ajaa rekisterin tarkistuspalvelun tuottamat muutostiedot tai messuilta kerättyjen listojen päivityksen. Tuontitoiminto tunnistaa muuttuneet tiedot ja kysyy käyttäjältä niiden käsittelystä.

Tämä välilehti on näkyvissä **vain pääkäyttäjille**. Ennen kuin pystyt tekemään toimintoja välilehdellä, pitää sinun tehdä **lisätunnistautuminen sähköpostin kautta**. Käyttäjääsi yhdistettyyn sähköpostiin lähetetään **koodi**, mikä sinun pitää syöttää osoitettuun kenttään. Oikean koodin syöttämisen jälkeen voit tehdä toimintoja välilehdellä.

![Kontaktien päivitys](/img/ohjeet/tuplat9.png)

![Kontaktien päivitys](/img/ohjeet/tuplat10.png)

**HUOM! KAIKKI DATA ESIMERKISSÄ ON KEKSITTYÄ!**

### Ohjeet kontaktien päivitykseen

1. Aloitetaan kontaktien päivitys painamalla **Luo kontakteista CSV-tiedosto**

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys11.png)

2. Valitse kontaktien kentät (esim. etunimi, sukunimi, sähköposti)

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys2.png)

3. Kun olet valinnut haluamasi kentät, paina **Luo CSV**

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys3.png)

4. Järjestelmä luo tiedoston, jossa on kaikki kontaktit valitsemallasi kentillä. Lataa se koneellesi painamalla **Lataa**-napista.

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys4.png)

5. Avaa tiedosto **Excel-tiedostona** (EI CSV-muodossa) ja muokkaa kontaktien tietoja. Kun olet valmis, kopioi tiedot (Ctrl+A -> Ctrl + C)

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys5.png)

6. Kun olet valmis, palaa **Kontaktien päivitys** -välilehteen ja paina **Tuo kontaktien tiedot** -painiketta. Liitä kopioimasi tiedot **Tuotavat Excelin tiedot** -kenttään (Ctrl + V). Paina **Luo sisään esikatseluun.**

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys6.png)

7. Tarkista tuomasi data esikatselussa. Kun olet tarkistanut datan, paina **Vertaa tietoja tietokantaa**.

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys7.png)

8. Tarkista kontaktien muuttuneet tiedot. Muuttuneet tiedot näkyvät **vihreällä** ja **ensimmäisessä sarakkeessa** lukee ovatko kontaktin tiedot muuttuneet. Katso, että muuttuneet tiedot ovat järkeviä. Kun olet valmis, paina **Lue tiedot sisään tietokantaan.**

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys8.png)

9. Tieto onnistuneesta tietojen tuonnista näytetään ruudulla.

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys9.png)

10. **Tapahtumalokilta** näet tiedot kontaktien muuttuneista tiedoista. 

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys10.png)

## Rekisterin huoltotoimet

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet.png)

**Rekisterin huoltotoimet** -välilehdellä voit etsiä rekisteristä virheellisiä asiakastietoja ja suorittaa manuaalisia ja automaattisia korjauksia. Ohjelma tutki rekisteriä ja etsii virheitä. Vain löydetyt virheelliset kontaktit näytetään.
Osan korjauksista ohjelma pystyy tekemään automaattisesti, mutta suuressa osassa korjaus tulee tehdä manuaalisesti. Manuaalista korjausta voidaan tehdä suoraan käyttöliittymässä tai massakorjauksia varten tiedot voi siirtää Exceliin ja **Kontaktien päivitys** -toiminnon kautta takaisin rekisteriin. 

- **Tarkista sähköpostiosoitteet** -painike hakee virheelliset sähköpostit.
- **Tarkista postinumerot** -painike hakee virheelliset postinumerot.
- **Tarkista puhelinnumerot** -painike hakee virheelliset puhelinnumerot.
- **Hae kaikki** -painike hakee koko rekisterin.

Tämä välilehti on näkyvissä **vain pääkäyttäjille**. Ennen kuin pystyt tekemään toimintoja välilehdellä, pitää sinun tehdä **lisätunnistautuminen sähköpostin kautta**. Käyttäjääsi yhdistettyyn sähköpostiin lähetetään **koodi**, mikä sinun pitää syöttää osoitettuun kenttään. Oikean koodin syöttämisen jälkeen voit tehdä toimintoja välilehdellä.

![Tuplien käsittely](/img/ohjeet/tuplat9.png)

![Tuplien käsittely](/img/ohjeet/tuplat10.png)

### Ohjeet rekisterin huoltotoimiin

<!--  **Päivitä tiedot vain vertailuja varten (ei kosketa näkyviin tietoihin)** -painikkeesta

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet8.png) -->

Päivitämme esimerkissä asiakkaiden sähköpostiosoitteita. **HUOM! KAIKKI DATA ESIMERKISSÄ ON KEKSITTYÄ!**

1. Painetaan **Tarkista sähköpostiosoitteet** -painiketta.

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet7.png)

2. Järjestelmä tarkistaa asiakkaiden sähköpostiosoitteet ja listaa virheelliset. Voit rajata näytettävää tietomäärää **pienentämällä Asiakasnumeroiden hakuväliä**.

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet2.png)

3. Kun virheenä on tyhjä tila datan edessä/takana, voit valita ne aktivoimalla kentän asiakasnumeron edessä ja painaa **Korjaa valitut automaattisesti** -painiketta.

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet5.png)

4. Järjestelmä näyttää vahvistusviestin, kun automaattinen korjaus on suoritettu.

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet6.png)

5. Kun virhettä ei voi korjata automaattisesti, painetaan ensimmäisessä sarakkeessa olevaa **Kynä**-ikonia. Näytölle tulee pop-up ikkuna, jossa voit korjata asiakkaan tietoja. 

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet3.png)

6. Kun tiedot ovat oikein, paina **Tallenna** (ei sulje pop-up ikkunaa ja näyttää pop-ikkunalla vahvistusviestin) tai **Tallenna ja sulje** (sulkee pop-ikkunan). Voit siirtyä edelliseen/seuravaan asiakkaaseen **Edellinen/Seuraava**-painikkeilla.

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet4.png)

## Tuplien massakäsittely

![Tuplien käsittely](/img/ohjeet/tuplat.png)

**Tuplien käsittely** -välilehdellä voit yhdistää tuplana olevia asiakaskortteja. 

### Ohje tuplien massakäsittelyyn

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