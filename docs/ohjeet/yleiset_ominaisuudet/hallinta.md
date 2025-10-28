---
sidebar_position: 8
---

# Hallinta

![Hallinta](/img/ohjeet/hallinta.png)

**Hallinta**–välilehdeltä voit hallita järjestelmään liittyviä eri asioita, kuten asiakkaiden käyttäjätunnuksia, roskakoria ja tapahtumalokia.

## Viestit
![Viestit](/img/ohjeet/viestit.png)

**Viestit**–alavälilehdellä voit tarkastella asiakkaille lähetettyjä viestejä, esimerkiksi tilausvahvistusten yhteydessä.

Viestien hakua voi rajata seuraavilla ehdoilla:

- **Päivämäärä**  
- **Kanava** (kirje, sähköposti, verkkolasku, muu)  
- **Lähetyksen tila** (odottaa, lähetyksessä, lähetetty, virhe)  
- Viestistä tai otsikosta löytyvä **merkkijono**  
- **Vastaanottajan osoite**  
- Tai **lähetyksen tunnus** – jokaisella lähetyksellä on oma tunniste; massalähetyksissä tunniste on sama kaikilla viesteillä  

Voit hakea lähettämättömät viestit painamalla **Hae lähettämättömät** -painiketta.

![Viestit](/img/ohjeet/viestit2.png)

Saat hakutulokseen lisätietoja aktivoimalla lisäkenttiä **Listan lisäkentät** -valikosta ja suorittamalla haun uudelleen.

![Viestit](/img/ohjeet/viestit3.png)

## Tunnukset

**Hallintakäyttäjän hakutoiminto** mahdollistaa tilaajien käyttäjätunnusten (Maksumuuri ja OmaPalvelu) etsimisen.  

Hakutuloksissa näytetään, milloin tunnusta on viimeksi käytetty eri palveluissa.  

Voit hakea tunnusta syöttämällä asiakkaan käyttäjätunnukseen liitetyn sähköpostiosoitteen **Käyttäjätunnus**-kenttään.

![Viestit](/img/ohjeet/tunnukset.png)

## Tapahtumaloki

![Tapahtumaloki](/img/ohjeet/tapahtumaloki.png)

**Tapahtumaloki**–välilehdellä tarkastellaan sovelluksessa tapahtuneita toimintoja, joita pidetään oleellisina sovelluksen käytön seurannan kannalta. Lokilta voi esimerkiksi tarkistaa, kuka on poistanut tilauksen tai tehnyt muun vastaavan toimenpiteen.

Lokissa näkyy muun muassa sisään- ja uloskirjautumisia sekä postituslistan luomisia ja kestotilausten jatkamisia.  
- Myös huoltoajot, kuten palvelun päivittäminen versiotietoineen, voidaan tarkastaa täältä.

Lokilta voi hakea suoritettuja toimintoja seuraavilla hakukriteereillä:

- **Toiminto** (esim. Uloskirjaus, Myynnin poisto)  
- **Lisätiedot** (esim. Onnistui)  
- **Käyttäjätunnus ja nimi** (esim. taikauser)  
- **Lisäparametrit** (esim. asiakasnumero tai tilausnumero)  
- **Selain** (käyttäjän käyttämä selain ja sen versio, esim. Chrome 124.0)  
- **TCP/IP** (osoite, josta käyttäjä on kirjautunut)  
- **SessionID** (käyttäjän selaimen yhteystunniste; pysyy samana niin kauan kuin ohjelma on avoinna)  
- **SuoritajaID** (kaikki saman käyttäjän toimet yhden kirjautumissession aikana kirjataan saman tunnisteen alle)

Selaimen, TCP/IP-osoitteen ja SessionID:n **näkyvyyden** hakutuloksissa voi määrittää aktivoimalla **Näytä Selain, TCP/IP, SessionID** -kentän.

![Tapahtumaloki](/img/ohjeet/loki2.png)

Hakuehdot voi tyhjentää painamalla **Tyhjennä hakuehdot** -painiketta. Päivämäärien välillä voi siirtyä **Edellinen päivä** ja **Seuraava päivä** -painikkeilla.

![Tapahtumaloki](/img/ohjeet/loki-haku.png)
*Lokista voi hakea suoritettuja toimintoja erilaisten hakukriteerien avulla.*

Klikkaamalla sarakkeissa olevia **Hakuun**-painikkeita voit siirtää kyseisen rivin tietoja hakukriteereiksi ja hakea esimerkiksi samalla IP-osoitteella tehtyjä toimintoja.

![Tapahtumaloki](/img/ohjeet/loki-hakuun.png)
*Klikkaamalla Hakuun-painiketta voit siirtää lokissa esiintyviä tietoja hakukriteereiksi.*

Asiakaskohtaisesti voidaan määrittää myös muut näytettävät muutokset, kuten **kenttäkohtaiset muutostiedot**, joita käyttäjät ovat tehneet (esim. asiakas-, tilaus- tai laskutustietojen päivitykset) esimerkiksi OmaPalvelussa.

## Kontaktien roskakori

![Kontaktien roskakori](/img/ohjeet/roskakori.png)

**Kontaktien roskakori** -välilehdellä voit hakea, palauttaa tai lopullisesti poistaa poistettuja asiakaskortteja.

Roskakorin listauksessa näet poistettujen asiakkaiden:

- asiakasnumeron
- yhteystiedot
- poistoajan

Valitsemalla asiakaskortin aktivoimalla täpän asiakasnumeron edessä ja painamalla **Palauta roskakorista aktiiviseksi** -painiketta, voit palauttaa asiakaskortin tietokantaan. Ohjelma kysyy sinua varmistamaan, että haluat suorittaa palautuksen.

**Kontaktien roskakori**–välilehdellä voit hakea, palauttaa tai lopullisesti poistaa poistettuja asiakaskortteja.

Roskakorin listauksessa näkyvät poistettujen asiakkaiden:

- asiakasnumero  
- yhteystiedot  
- poistoaika  

Valitse palautettava asiakaskortti aktivoimalla täppä asiakasnumeron edessä ja paina **Palauta roskakorista aktiiviseksi** -painiketta. Ohjelma pyytää vahvistamaan, että haluat palauttaa asiakaskortin tietokantaan.

![Kontaktien roskakori](/img/ohjeet/roskakori2.png)

Valitse poistettava asiakaskortti aktivoimalla täppä asiakasnumeron edessä ja paina **Poista lopullisesti** -painiketta. Tämän jälkeen asiakaskorttia ei voi enää palauttaa. Ohjelma pyytää vahvistamaan, että haluat suorittaa poiston.

![Kontaktien roskakori](/img/ohjeet/roskakori3.png)

## Tuplien käsittely

**Tuplien käsittely**–välilehdellä voit yhdistää kaksi asiakaskorttia yhdeksi. Tätä toimintoa käytetään esimerkiksi silloin, kun samalla asiakkaalla on vahingossa kaksi erillistä asiakaskorttia. 

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely.png)

### Ohjeet tuplien käsittelyyn

**1.** Jos tiedät yhdistettävien asiakkaiden asiakasnumerot, syötä ne **Säilytettävä kontakti** ja **Poistettava kontakti** -kenttiin ja paina **Hae**.

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely2.png)

**1.b.** Vaihtoehtoisesti voit hakea asiakkaiden asiakaskortit **Etusivun** kautta ja siirtää ne **Leikepöydälle**.

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely3.png)

**1.b.2.** Jos hakutulos sisältää suuren määrän asiakkaita, voit siirtää haluamasi asiakaskortit suoraan yksittäiseltä asiakaskortilta **Leikepöydälle**.

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely4.png)

**1.b.3.** Kun haluamasi asiakaskortit ovat leikepöydällä, siirrä ne tuplien käsittelyyn painamalla **Tuplien käsittely** -painiketta.

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely5.png)

**2.** Kun asiakaskortit ovat tuplien käsittelyssä, voit:

- Vaihtaa kontaktit keskenään painamalla **Vaihda kontaktit päittäin**  
- Siirtää tietoja poistettavasta asiakaskortista säilytettävään painamalla kenttien vieressä olevaa **Ota**-painiketta  
- Täydentää **säilytettävän kontaktin** tietoja, esimerkiksi lisäämällä puhelinnumeron  

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely6.png)

**3.** Kun **säilytettävän kontaktin** tiedot ovat kunnossa, paina **Suorita kontaktien yhdistäminen** -painiketta yhdistääksesi asiakaskortit.  

- Tämä siirtää **poistettavan kontaktin** roskakoriin ja sen **laskut, ilmoitusvaraukset sekä tilaukset säilytettävän kontaktin alle**.

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely7.png)

**4.** Järjestelmä pyytää vahvistusta. Paina **OK**, jos haluat yhdistää kontaktit.

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely8.png)

**5.** Yhdistämisen jälkeen järjestelmä näyttää viestin onnistuneesta yhdistämisestä.

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely9.png)

**6.** Paina **Hae** kontaktien kohdalla tarkistaaksesi, että tilaukset ja laskut ovat siirtyneet oikein ja että poistettava kontakti näkyy roskakorissa.

![Tuplien käsittely](/img/ohjeet/tuplien-kasittely10.png)

## Kontaktien päivitys

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys.png)

**Kontaktien päivitys**–välilehdellä voit päivittää useiden asiakkaiden tietoja kerralla rekisteriin. Tätä toimintoa voidaan käyttää esimerkiksi silloin, kun ajetaan rekisterin tarkistuspalvelun tuottamat muutostiedot tai päivitetään messuilla kerättyjä asiakaslistoja.  

Tuontitoiminto tunnistaa muuttuneet tiedot ja kysyy käyttäjältä, miten ne käsitellään.

> Tämä välilehti on näkyvissä **vain pääkäyttäjille**. Ennen kuin voit suorittaa toimintoja välilehdellä, sinun on tehtävä **lisätunnistautuminen sähköpostin kautta**. Käyttäjään liitettyyn sähköpostiin lähetetään **vahvistuskoodi**, joka syötetään sille varattuun kenttään. Kun olet syöttänyt oikean koodin, voit jatkaa toimintoja välilehdellä.

![Kontaktien päivitys](/img/ohjeet/tuplat9.png)

![Kontaktien päivitys](/img/ohjeet/tuplat10.png)

> **HUOM! KAIKKI DATA ESIMERKISSÄ ON KEKSITTYÄ!**

### Ohjeet kontaktien päivitykseen

1. Aloita kontaktien päivitys painamalla **Luo kontakteista CSV-tiedosto**.

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys11.png)

2. Valitse haluamasi kontaktien kentät (esim. etunimi, sukunimi, sähköposti).

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys2.png)

3. Kun olet valinnut kentät, paina **Luo CSV**.

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys3.png)

4. Järjestelmä luo tiedoston, jossa on kaikki kontaktit valitsemillasi kentillä. Lataa tiedosto koneellesi painamalla **Lataa**-painiketta.

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys4.png)

5. Avaa tiedosto **Excelissä** (ei CSV-muodossa) ja muokkaa kontaktien tietoja. Kun olet valmis, kopioi kaikki tiedot (Ctrl + A → Ctrl + C).

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys5.png)

6. Palaa **Kontaktien päivitys** -välilehdelle ja paina **Tuo kontaktien tiedot** -painiketta. Liitä kopioimasi tiedot **Tuotavat Excelin tiedot** -kenttään (Ctrl + V) ja paina **Luo sisään esikatseluun**.

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys6.png)

7. Tarkista tuomasi data esikatselussa ja paina **Vertaa tietoja tietokantaan**.

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys7.png)

8. Tarkista kontaktien muuttuneet tiedot. Muuttuneet tiedot näkyvät **vihreällä**, ja **ensimmäisessä sarakkeessa** ilmoitetaan, onko kontaktin tiedoissa muutoksia. Kun olet varmistanut, että tiedot ovat oikein, paina **Lue tiedot sisään tietokantaan**.

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys8.png)

9. Onnistuneesta tietojen tuonnista näytetään ilmoitus näytöllä.

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys9.png)

10. **Tapahtumaloki**-välilehdeltä voit tarkastella tuontiprosessissa tehtyjä muutoksia.

![Kontaktien päivitys](/img/ohjeet/kontaktien-paivitys10.png)

## Rekisterin huoltotoimet

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet.png)

**Rekisterin huoltotoimet**–välilehdellä voit etsiä rekisteristä virheellisiä asiakastietoja sekä suorittaa manuaalisia ja automaattisia korjauksia. Ohjelma käy rekisterin läpi ja listaa vain ne kontaktit, joista löytyy virheitä.

Osa virheistä voidaan korjata automaattisesti, mutta suurin osa edellyttää manuaalista korjausta. Manuaaliset korjaukset voidaan tehdä suoraan käyttöliittymässä tai tarvittaessa Excelin kautta: tiedot voidaan viedä Exceliin ja tuoda takaisin rekisteriin **Kontaktien päivitys** -toiminnon avulla.

- **Tarkista sähköpostiosoitteet** – hakee virheelliset sähköpostiosoitteet  
- **Tarkista postinumerot** – hakee virheelliset postinumerot  
- **Tarkista puhelinnumerot** – hakee virheelliset puhelinnumerot  
- **Hae kaikki** – hakee koko rekisterin  

> Tämä välilehti on näkyvissä **vain pääkäyttäjille**. Ennen kuin voit suorittaa toimintoja välilehdellä, sinun on tehtävä **lisätunnistautuminen sähköpostin kautta**. Käyttäjään liitettyyn sähköpostiin lähetetään **vahvistuskoodi**, joka syötetään sille varattuun kenttään. Kun olet syöttänyt oikean koodin, voit jatkaa toimintoja välilehdellä.

![Tuplien käsittely](/img/ohjeet/tuplat9.png)

![Tuplien käsittely](/img/ohjeet/tuplat10.png)

### Ohjeet rekisterin huoltotoimiin

<!--  **Päivitä tiedot vain vertailuja varten (ei kosketa näkyviin tietoihin)** -painikkeesta

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet8.png) -->

Päivitetään esimerkissä asiakkaiden sähköpostiosoitteita.  
> **HUOM! Kaikki esimerkkidatassa näkyvä tieto on keksittyä.**

1. Paina **Tarkista sähköpostiosoitteet** -painiketta.

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet7.png)

2. Järjestelmä tarkistaa asiakkaiden sähköpostiosoitteet ja listaa virheelliset. Voit rajata näytettävää tietomäärää **pienentämällä asiakasnumeroiden hakuväliä**.

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet2.png)

3. Jos virhe johtuu esimerkiksi ylimääräisestä välilyönnistä datan alussa tai lopussa, valitse virheelliset rivit aktivoimalla täpät asiakasnumeron edessä ja paina **Korjaa valitut automaattisesti** -painiketta.

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet5.png)

4. Järjestelmä näyttää vahvistusviestin, kun automaattinen korjaus on suoritettu.

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet6.png)

5. Jos virhettä ei voi korjata automaattisesti, paina ensimmäisessä sarakkeessa olevaa **Kynä**-ikonia. Näytölle avautuu pop-up-ikkuna, jossa voit korjata asiakkaan tietoja.

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet3.png)

6. Kun tiedot ovat oikein, paina **Tallenna** (ei sulje pop-up ikkunaa ja näyttää pop-ikkunalla vahvistusviestin) tai **Tallenna ja sulje** (sulkee pop-ikkunan). Voit siirtyä edelliseen/seuravaan asiakkaaseen **Edellinen/Seuraava**-painikkeilla.

6. Kun tiedot ovat oikein, paina **Tallenna** (ei sulje pop-up-ikkunaa ja näyttää vahvistusviestin)  
tai **Tallenna ja sulje** (tallentaa ja sulkee pop-upin).  
Voit siirtyä edelliseen tai seuraavaan asiakkaaseen **Edellinen** / **Seuraava** -painikkeilla.

![Rekisterin huoltotoimet](/img/ohjeet/huoltotoimet4.png)

## Tuplien massakäsittely

![Tuplien käsittely](/img/ohjeet/tuplat.png)

**Tuplien käsittely** –välilehdellä voit yhdistää tuplana olevia asiakaskortteja.

### Ohje tuplien massakäsittelyyn

> Tämä välilehti on näkyvissä **vain pääkäyttäjille**. Ennen kuin voit suorittaa toimintoja välilehdellä, sinun on tehtävä **lisätunnistautuminen sähköpostin kautta**. Käyttäjään liitettyyn sähköpostiin lähetetään **vahvistuskoodi**, joka syötetään sille varattuun kenttään. Kun olet syöttänyt oikean koodin, voit jatkaa toimintoja välilehdellä.

![Tuplien käsittely](/img/ohjeet/tuplat9.png)

![Tuplien käsittely](/img/ohjeet/tuplat10.png)

> **HUOM! KAIKKI DATA ESIMERKISSÄ ON KEKSITTYÄ!**

1. Aloita tuplien käsittely painamalla **Luo CSV-tiedosto koko rekisteristä** -painiketta.  
   Tiedoston luomisessa kestää jonkin verran aikaa rekisterin koosta riippuen.  
   Päivittämällä välilehden (klikkaamalla *Tuplien käsittely* -tekstiä) voit seurata tiedoston luomisen etenemistä.  
   Kun tiedosto on valmis ladattavaksi, näytölle ilmestyy **Lataa CSV** -painike.

![Tuplien käsittely](/img/ohjeet/tuplat2.png)

2. Lataa rekisteri painamalla **Lataa CSV** -painiketta.

![Tuplien käsittely](/img/ohjeet/tuplat3.png)

3. Avaa tiedosto Excelissä.  
   Valitse kaikki tiedot painamalla **Ctrl + A** ja valitse **Muotoile taulukoksi**.

![Tuplien käsittely](/img/ohjeet/tuplat4.png)

4. Löydät tuplat helpoiten **lajittelemalla taulukon osoitteen mukaan**.  
   Klikkaa osoitesarakkeen nuolta ja lajittele osoitteet **aakkosjärjestykseen** (katso kuva alla).

![Tuplien käsittely](/img/ohjeet/tuplat5.png)

5. Kun löydät tupla-asiakkaan, määritä kumpi on **master-tunnus**, johon tupla yhdistetään.  
   Tarvittaessa täydennä masterin tietoja, esimerkiksi sähköpostiosoitteella.  
   CSV-tiedostossa on valmiina **PAAK**- ja **ALIK**-sarakkeet, joissa on kontaktin yksilöivä **KontaktiID**.

![Tuplien käsittely](/img/ohjeet/tuplat6.png)

6. Siirrä **alitunnuksen (tuplan) KontaktiID** PAAK-sarakkeesta **ALIK-sarakkeeseen**.  
   Kopioi **masterin KontaktiID** ja lisää se sekä **masterin ALIK**- että **alitunnuksen PAAK**-sarakkeeseen.

**Esimerkki:**
- Nessa Karjalahden päätunnuksen (jolle tiedot yhdistetään) **KontaktiID** on **746232**  
- Nessan alitunnuksen (tuplan) **KontaktiID** on **746768**

![Tuplien käsittely](/img/ohjeet/tuplat6.png)

- Siirrä **alitunnuksen KontaktiID** PAAK-sarakkeesta ALIK-sarakkeeseen.

![Tuplien käsittely](/img/ohjeet/tuplat8.png)

- Kopioi **masterin KontaktiID** ja lisää se **masterin ALIK**-sarakkeeseen sekä **alitunnuksen PAAK**-sarakkeeseen.

![Tuplien käsittely](/img/ohjeet/tuplat7.png)

7. Käsittele tiedot Excelissä haluamallasi tavalla ja **sovi TaikaTilauksen kanssa** tietojen tuomisesta takaisin järjestelmään.  
   Ole tarkkana, että **rivien KontaktiID-arvot pysyvät oikeilla riveillä.**