---
sidebar_position: 2
---

# Tilaustuotteet

### Yleistietoa

**Tilaustuotteet**–välilehdeltä voidaan tarkastella olemassa olevien tuotteiden tietoja sekä **muokata ja lisätä yksittäisiä tuotteita**, joita asiakkaille myydään (esim. *Autolehti Kestotilaus 12 kk*).

**Tuotelistauksessa** on tuotteista seuraavat tiedot:

- **Tuotenumero**
- **Tuoteryhmä**
- kuuluuko tuote johonkin **Kampanjaan**
- tilauksen kesto kuukausina (**KestoKK**)
- tuotteen **veroton hinta**
- tuotteen **ALV-prosentti**
- tuotteen **verollinen hinta**
- **Myyntitili**
- **ALV-velkatili**
- **Myyntisaamiset**-tili
- tuotteen mahdolliset **lisätiedot**
- **TuoteID**
- **Tilaustyyppi**
- **Jatkotuote ID** - sen tuotteen ID, jolla esim. tarjoustuotteen tilausta jatketaan
- **PortalID**
- **Piilotettu**-sarake, josta näkee, onko tuote aktiivinen vai piilotettu

Tuotteita lisätään painamalla **Lisää tilaustuote** –painiketta. Jo valmiiksi olemassa olevia tuotteita pääset muokkaamaan painamalla **tuotenumeroa**.

![Tilaustuotteet-näkymä](/img/ohjeet/asetukset3.png)
*Tilaustuotteet-välilehdeltä voit mm. hakea ja muokata olemassa olevia tuotteita tai lisätä uuden tuotteen.*

Taulukon sarakkeiden **otsikoita** klikkaamalla voi tiedot järjestää uudelleen (esim. aakkosjärjestyksessä tai pienimmästä suurimpaan).

### Tuotteiden haku

Oletuksena välilehti näyttää **kaikki aktiiviset tuotteet**. Piilotetut tuotteet saa näkyviin listaukseen aktivoimalla **Näytä piilotetut** -kentän, joka sijaitsee **Hae**-painikkeen vieressä.

Olemassa olevia **tuotteita voi hakea** valitsemalla hakukriteerin ja syöttämällä hakuehdon sille tarkoitettuun kenttään.

**Esimerkki:** Haet tuotteita, jotka ovat kestotilauksia:

1. Valitse sopiva **hakukriteeri**  
2. Kirjoita *kestotilaus* **Hakuehto**-kenttään  
3. Paina **Hae**

Näet tuotelistauksen kaikista kestotilaustuotteista.

![Tilaustuotteet - tuotteiden hakeminen](/img/ohjeet/asetukset2.png)

Klikkaamalla aktiiviseksi **Näytä osamaksuhinnat** -kentän haun yhteydessä saat tuotelistaukseen näkyviin tuotteiden osamaksuhinnat eri erissä, jos ne on erikseen määritelty.

![Tilaustuotteet - Näytä osamaksuhinnat](/img/ohjeet/tilaustuotteet-osamaksu.png)

Klikkaamalla aktiiviseksi **Laske voimassa olevat tilaukset** -kentän haun yhteydessä laskee ohjelma uuteen kenttään kaikkien yksittäisten tuotteiden voimassa olevat tilaukset.

![Tilaustuotteet - Lasku voimassa olevat tilaukset](/img/ohjeet/tilaustuotteet-voimassa.png)

### Tuotteen lisääminen tai muokkaaminen

Olemassa olevan tuotteen käsittelylomake ja **Tuotteen lisääminen** -lomake näyttävät samoilta. Niiden tietoja lisäämällä tai muokkaamalla voi tuotteiden tietoja hallita.

Lomakkeelle lisätään tai muokataan **tuotteen perustietoja**, kuten:

- mihin **Tuoteryhmään** ja **Kampanjaan** tuote kuuluu  
- asiakkaille näkyvä **tuotenimi**, joka näkyy esimerkiksi lehden tilauslomakkeella tai laskussa  
  - jos tämä kenttä on tyhjä, käytetään oletuksena tuotteen sisäistä nimeä  
- **Hinta**- ja **Tili**-tiedot  
- **Tilaustyyppi** ja **Kesto**  
- **Digitiedot** (esim. lehden digitaalisuus)  
- tuotteen **käyttöajat**

### Lomakkeeseen lisättävät tiedot

- **TuoteID**: jokaisella tuotteella on ohjelman automaattisesti luoma TuoteID.
- **Tuotenumero**-kenttään lisätään tuotenumero, joka auttaa mm. tuotteiden ryhmittelyssä.
- **Tuoteryhmä**-kenttään lisätään, mihin tuoteryhmään tuote kuuluu (esim. jos tilaustuotteena on lehti, laitetaan lehden nimi tähän kohtaan).
- **Kampanja**-kenttään voi lisätä, mihin kampanjaan tuote kuuluu, jos mihinkään.
- **Tuotenimi**-kenttään laitetaan tuotteen sisäinen tuotenimi (esim. *Kestotilaus III; Määräaikainen, digi*).
- **Ulkoinen tuotenimi**-kentässä määritellään, miltä tuotenimi näyttää asiakkaalle (esim. tilauslomakkeella tai laskussa).
- **Lisätiedot**-kenttään voi kirjata tuotteelle tärkeitä lisätietoja, jotka haluat muiden käyttäjien tietoon.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen.png)

- **Hinta veroton**, **ALV-prosentti** ja **Hinta verollinen** –kentissä määritellään tuotteelle oletushintatiedot, joita voi tarvittaessa muuttaa tilauksen luomisen jälkeen.
- **Hinta veroton** -tiedon on aina oltava viidellä (5) desimaalilla. Ohjelma pyöristää sen automaattisesti laskua luotaessa.
- Verottomia ja verollisia hintoja voi laskea uudelleen syötettyjen tietojen perusteella **Laske veroton hinta verollisesta** / **Laske verollinen hinta uudelleen** -painikkeita painamalla.
- **Erämaksut:** Jos lasku maksetaan erissä, ohjelma laskee erien hinnat yleensä automaattisesti, mutta ne voi myös määritellä erikseen tähän lomakkeeseen.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen2.png)

- **Tilaustyyppi** tarvitaan, mikäli tuotteen tilaus halutaan jaettavaksi postitse.  
  - Postituslistalle kerätään vain **Kesto-** ja **Määräaikaiset** tilaukset.  
  - Jos halutaan, että tuote **ei nouse** postituslistalle, valitaan tyypiksi **Ei määritelty** (esim. jos lehti ilmestyy digitaalisena).  
  - Määräaikaisen tarjoustuotteen **Tilaustyyppi** tulee olla *Kesto*, mikäli tuote halutaan mukaan automaattisesti jatkettavien tilausten **Kestojatko-listalle**.
- **JatkotuoteID** kertoo esimerkiksi tarjoustuotteella sen tuotteen ID-numeron, jolla tilausta jatketaan automaattisesti tarjousajan päätyttyä (esim. normaali Kestotilaus). 
- **Tilauksen kesto** –kentässä määritellään tuotteen pituus oletuksena kuukausissa.  
  - Keston yksikön voi tarvittaessa muuttaa valikosta, jossa vaihtoehtoina **päivä / viikko / vuosi**.  
  - Kaikissa **Kestotilaus**-tyyppisissä tuotteissa pituuden on oltava jokin muu kuin 0, muuten ne eivät nouse automaattiseen **Kestojatko-ajoon** mukaan.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen3.png)

- **Myyntitili, ALV velkatili** ja **Myyntisaamiset**-tili määritellään **Tilit** -välilehdellä ja ne tulee merkitä kaikille laskutettaville tuotteille. Laskua luotaessa tilöintitilit haetaan tuotekortilta ja niiden avulla muodostetaan laskulle tarvittavat tiliöintirivit, joihin maksetut suoritukset myöhemmin liitetään kirjanpitoa varten.
- **Laskuerien lukumäärä** -kenttään määrätään, kuinka monessa erässä kyseisen tuotteen voi maksaa (ohjelma automaattisesti jakaa laskutuspyynnöt eriin tilauksen tallennuksen yhteydessä)

- **Myyntitili**, **ALV-velkatili** ja **Myyntisaamiset**-tili määritellään **Tilit**-välilehdellä, ja ne tulee merkitä kaikille laskutettaville tuotteille.  
  Laskua luotaessa tiliöintitilit haetaan tuotekortilta, ja niiden avulla muodostetaan laskulle tarvittavat tiliöintirivit, joihin maksetut suoritukset myöhemmin liitetään kirjanpitoa varten.

- **Laskuerien lukumäärä** -kenttään määritellään, kuinka monessa erässä kyseinen tuote voidaan maksaa.  
  Ohjelma jakaa laskutuspyynnöt automaattisesti eriin tilauksen tallennuksen yhteydessä.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen4.png)

- **Kotimaan/ulkomaan tilaus** -valinta määrittelee tuotteen tilauksen näkyvyyden ja käsittelyn mm. postituslistalla (esim. lähetetäänkö ulkomaille eri reittiä).  
- **Digituote**-valinta määrittelee tuotteen olevan käytettävissä vain verkon kautta, esim. näköislehti.  
- **Oikeuttaa digipalveluun** -valinta määrittelee, kuuluuko tuotteeseen oikeus digipalveluun, esim. näköislehteen.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen5.png)

- Tuotteelle on määriteltävä **Valittavissa aikavälillä** -aikarajaus.  
  Jos tuote halutaan olevan aina valittavissa, tulee päättymispäivämäärän olla riittävän kaukana tulevaisuudessa (esim. 31.12.2050).  
  Valittavuus tarkoittaa, että tuote on valittavissa ohjelman valikoissa ja ulkoisella tilauslomakkeella tässä määritetyn ajan.

- Tuotteelle määritellään myös **Tilaus mahdollinen aikavälillä** -aikarajaus, joka rajaa sen käytettävissä olevan tilausjakson.  
  Yksittäisen tilauksen alku- ja loppupäivien tulee mahtua annetun aikarajoituksen sisään.  
  Mikäli tuote halutaan olevan aina valittavissa, tulee päättymispäivämäärän olla riittävän kaukana tulevaisuudessa (esim. 31.12.2050), koska *toistaiseksi voimassa olevaa* tuotetyyppiä ei ole käytettävissä.

- **Tilauksen päättymisaika tuotteesta** -kentän aktivoimalla tilauksen päättymisaika määräytyy tuotteen keston mukaan.  
  *Tilaus mahdollinen aikavälillä* määrittää mahdollisen aloitusajan, mutta ei päättymisaikaa.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen6.png)

- **Tuote on piilotettu**: Tuotteen voi piilottaa, jolloin sitä ei näe hakuja tehtäessä eikä sitä voi valita uutta tilausta tehtäessä.  
- **Digipalvelu**-kentän avulla tuotteita voi ryhmitellä saman Digipalvelu-ryhmän alle.  
  Digipalveluissa voidaan tarkistaa, onko tilaajalla aktiivisena tietty digipalvelu, ja näyttää esimerkiksi verkkosivun sisältö sen mukaan.  
- **SKU-koodi**: Tuotteen yksilöivä koodi, esimerkiksi kirjamyynnissä.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen7.png)

Voit muuttaa tuotteen hintaa etukäteen asettamalla seuraavat kentät:

- **Hinnaston aktivoitumispäivä** – ohjelma siirtää uuden hinnan automaattisesti vanhan hinnan paikalle kyseisenä päivänä.  
  Palvelimella ajetaan joka yö prosessi, joka tarkistaa aktivoitumispäivät.
- **Uusi hinta** – tuotteen uusi hinta, joka astuu voimaan aktivoitumispäivänä.
- Jos tuotteella on eri hinta erämaksuissa, voit muuttaa erähinnan vastaaviin kenttiin.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen8.png)

