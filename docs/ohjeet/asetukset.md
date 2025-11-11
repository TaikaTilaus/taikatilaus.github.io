---
sidebar_position: 2
---

# Asetukset

## Asetuksien hallinnointi

Käytön yhteydessä hyödynnetään tiettyjä yleisiä perustietoja, joiden määrityksiä käytetään oletuksena eri toiminnoissa.

Vasemmasta valikosta klikataan **Asetukset**–linkkiä, jolloin avautuu näkymä, jossa sovelluksen perustietoja voi luoda ja muokata.

![Asetukset - välilehti](/img/ohjeet/asetukset.png)
*Asetukset-välilehti päävalikossa*

Uuden näkymän yläreunassa on **valikko**, josta perustietoja päivitetään osa-alueittain.

![Asetukset - päävalikko](/img/ohjeet/asetukset1.png)
*Asetuksien päävalikko*

## Tilaustuotteet

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

## Tilauspaketit

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilauspaketti-etusivu.png)

**Tilauspaketit**-välilehdellä voit muodostaa eri tilaustuotteista tilauspaketteja. Tilauspaketille voi antaa erillisen hinnan, jolloin tilaustuotteiden yksittäisiä hintoja ei huomioida.

Voit hakea tilauspaketteja valitsemalla **hakukenttään hakukriteerin** ja **syöttämällä hakuehdon**.

**Näytä piilotetut** -kentän aktivoimalla saat näkyviin piilotetut tilauspaketit.  
**Näytä vain tarjouspaketit** -kentän aktivoimalla listaukseen tulee näkyviin vain tarjouspaketit.  
**Näytä vain hinnalliset** -kentän aktivoimalla listaukseen tulee näkyviin vain paketit, joille on asetettu hinta.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilauspaketti2.png)

### Tilauspakettien lisääminen

**Olemassa olevaa** tilauspakettia voi muokata klikkaamalla **pakettinumeroa**. 

Uuden paketin voi lisätä painamalla **Lisää tilauspaketti** -painiketta.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilauspaketti.png)

- Tilauspaketille muodostuu uniikki **TilauspakettiID**, kun se on tallennettu.
- Paketille annetaan **pakettinumero**, **pakettiryhmä** (esim. BlackWeek) ja **paketin nimi**.
- **Paketin ulkoinen nimi** on se nimi, joka näkyy asiakkaille esimerkiksi tilauslomakkeella.
- Paketille voidaan antaa **hinta**, jolloin siihen kuuluvien tilaustuotteiden hintoja ei huomioida hintaa muodostettaessa.
- Voit myös asettaa paketin hinnan, kun se maksetaan **useassa erässä**.
- Paketille asetetaan **aikaväli**, jolloin se on valittavissa tilauslomakkeen valikosta.
- **Pakettityyppi**-kenttä on informatiivinen. Tilaustuotteen tyyppi määrittää, millä tilauksen tyypillä (kestotilaus, määräaikainen) tilaus muodostuu.
- Paketille annetaan **tilausjakso**, joka määrittää, kuinka kauan siihen kuuluvat tilaukset kestävät (esim. 12 kuukautta).
- Jos paketti kuuluu **kampanjaan**, sille voidaan asettaa **kampanjanumero ja nimi**.
- **Lisätietoihin** voi kirjoittaa oleellisia lisätietoja paketista.
- Jos paketti on **tarjouspaketti**, joka jatkuu tarjousjakson jälkeen normaalilla tilauspaketilla, lomakkeeseen lisätään sen paketin **PakettiID**, jolla tilaus jatkuu.
- Kun **Piilotettu**-kenttä on aktivoitu, paketti on piilotettu hausta ja valintavalikoista.
- **Pakettiin kuuluvat tuotteet** lisätään valitsemalla ne valikosta.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilauspaketin-lisaaminen.png)

## Erillistuotteet

![Erillistuotteet-näkymä](/img/ohjeet/erillistuotteet.png)
*Erillistuotteet-välilehdellä voit muokata ja lisätä erillistuotteita sekä tarkastella jo olemassa olevia tuotteita.*

Erillistuotteita ovat tuotteet, jotka **eivät sovi tilaustuotteisiin tai myyntituotteisiin**. Esimerkkejä erillistuotteista ovat esimerkiksi *Laskutuslisä*, *Paperilaskutuslisä*, *Oheistuote*, jne.

**Erillistuotteet**-välilehdellä voit muokata ja lisätä erillistuotteita.  
- Olemassa olevaa erillistuotetta voi muokata klikkaamalla sen tuotenumerosta.  
- Uuden erillistuotteen voi lisätä painamalla **Lisää erillistuote** -painiketta.

Erillistuotteelle lisätään:

- **Tuotenumero** – tuotteen yksilöivä numero, joka auttaa mm. tuotteiden ryhmittelyssä  
- **Tuoteryhmä** – mihin tuoteryhmään tuote kuuluu (esim. oheistuote)  
- **Tuotteen nimi** – tuotteen nimi (esim. Lippalakki M)  
- Tarvittaessa **lisätietoja**  
- **Yksikkö** (esim. kpl)  
- Veroton **hinta**  
- **ALV-prosentti** erillistuotteen tyypin mukaisesti  
- Voit myös antaa **verollisen hinnan** ja laskea siitä verottoman hinnan (muista lisätä ALV)  
- **Myyntitili**, **ALV-velkatili** ja **Myyntisaamiset**-tilit  
- Voit **piilottaa tuotteen** välilehdeltä ja valikoista aktivoimalla **Tuote on piilotettu** -kentän

![Erillistuotteet- Tuotteen muokkaus](/img/ohjeet/erillistuotteet2.png)

## Tilit

**Tilit**-välilehdellä voit tarkastella ja muokata olemassa olevia tilejä sekä lisätä uusia.

- Kun klikkaat tietyn tilin **tilinumeroa**, pääset muokkaamaan olemassa olevan tilin tietoja. Voit myös poistaa tilin.  
- Kun klikkaat **Lisää tili** -painiketta, pääset kirjaamaan uuden tilin tiedot.

Tilaus- ja myyntituotteilla käytetään tällä välilehdellä määriteltyjä tilitietoja.

![Tilit-välilehti](/img/ohjeet/tilit.png)
*Tilit-välilehdeltä voit muokata ja lisätä tilejä*

### Tilien lisääminen ja muokkaaminen

Kun tiliä lisätään tai muokataan, tarvitaan seuraavat tiedot:

- **Tilinumero**  
- **Tilin nimi**  
- Onko tili **pankkitili, myyntitili vai kulutili**  
- **Tilin tyyppi** tiliöintejä varten, joka määritellään **lyhenteellä** (PA = Pankki, MS = Myyntisaamiset, ALV, MY = Myynti, PY = Pyöristys, LT = Luottotappio, MUU = jokin muu tili)

![Tilit-välilehti - Tilien lisääminen](/img/ohjeet/tilin-lisaaminen.png)

**Tilin käsittely** -lomake on muuten samanlainen, mutta siinä on myös vaihtoehto tilin poistamiseen.

## Laskutekstit

**Laskutekstit**-välilehdeltä voi luoda laskuille lisättäviä tekstipohjia, jotka ovat laskun lähetyksen yhteydessä edelleen muokattavissa. Valmiit viestipohjat voi lisätä laskuille, maksumuistutus #1:lle, maksumuistutus #2:lle ja hyvityslaskuille.

![Laskutekstit-välilehti](/img/ohjeet/laskutekstit.png)
*Laskutekstit-välilehdeltä voi luoda laskuille tekstipohjia.*

Välilehdeltä voi lisätä eri tekstipohjia tilaustuotteiden, erillistuotteiden ja ilmoitusmyynnin laskuille sekä määrittää sähköpostin kautta lähetettävien laskujen sähköpostipohjat ja lähetystiedot.

Tilauslaskuille voi lisätä:

- tekstin laskulle  
- tilauslaskun laskutekstin  
- maksumuistutusten tekstit  

![Laskutekstit-välilehti](/img/ohjeet/laskutekstit2.png)

Sähköpostin lähetystietoihin voi lisätä:

- sähköpostiosoitteen, josta lasku lähetetään  
- otsikon  
- laskuviestin  
- maksumuistutusten otsikot ja viestit  
- hyvityslaskun otsikon ja viestin  

![Laskutekstit-välilehti](/img/ohjeet/laskutekstit3.png)

Viesti-kenttien kokoa voi laajentaa oikeasta alakulmasta vetämällä kursorilla.

Ohjelma valitsee automaattisesti oikean sähköpostiviestin riippuen siitä, minkä lehden laskusta on kyse ja mikä on laskun muoto (tilauslasku, ilmoituslasku, maksumuistus).

## Viestipohjat

**Viestipohjat**-välilehdellä voi muokata **tilaus- ja ilmoitusvarausvahvistusten viestipohjia**. Voit muokata:

- lähettäjän sähköpostiosoitetta  
- sähköpostin piilokopion vastaanottajaa  
- sähköpostin otsikkoa  
- sähköpostin viestiä  

![Viestipohjat-välilehti](/img/ohjeet/viestipohjat.png)
*Viestipohjat-välilehdellä voit muokata tilaus- ja myyntivahvistusten tekstejä.*

Klikkaamalla **Näytä mallipohja** -painiketta saat näkyviin esimerkkiviestin, jonka pohjalta voit laatia oman viestisi.

![Esimerkkiviesti](/img/ohjeet/esimerkkiviesti.png)

*Esimerkkiviesti toimii mallina viestipohjalle.*

## Kanavat

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

## Myyntituotteet

**Myyntituotteet**-välilehdellä voit tarkastella ja muokata olemassa olevia myyntituotteita sekä lisätä uusia. Myyntituote on **järjestelmässä myytävä asia**, esimerkiksi lehden etusivun mainos tai radiokanavan spotti.  

Piilotetut myyntituotteet saa näkyviin aktivoimalla **Näytä piilotetut** -kentän.

Jo luotuja myyntituotteita pääset katsomaan ja muokkaamaan klikkaamalla **Numero**-sarakkeessa olevan tuotteen numeroa. **Lisää**-painiketta painamalla (oikeassa yläkulmassa) voit lisätä uuden myyntituotteen.

![Myyntituotteet](/img/ohjeet/myyntituotteet.png)

Myyntituotteelle lisätään siihen liittyviä perustietoja:

- **Numero** – tuotteen numero järjestelmässä, jonka avulla sitä voidaan hakea ja järjestää.
- **Kanava** – kanava, jolla tuote julkaistaan, esim. *LEHTI*, *RADIO*, *WWW* tai *UUTISKIRJE*.
- **Ryhmä** – ryhmä, johon tuote kuuluu, esim. *bannerit*.
- **Tuotekoodi**
- **Nimi** – tuotteen nimi, esim. *pysty 120x300*.
- **Vakiokoko (palstoja)** – jos tuotteella on vakiokoko, sen leveyden voi määrittää palstoina.
- **Vakiokoko (korkeus mm)** – jos tuotteella on vakiokoko, sen korkeuden voi määrittää millimetreinä.
- **Poikkeava leveys** – jos tuotteen leveys poikkeaa vakiopalstakoista, se voidaan antaa tähän kenttään.
- **Rivi-ilmoitus** – aktivoimalla kentän määrität, että tuote on rivi-ilmoitus, jonka hinnan ohjelma laskee rivien määrän mukaan.
- **Saatavuus / Julkaisu** – jos julkaisukanavalla on rajattu määrä kyseistä tuotetta, voit antaa määrän tähän (esim. etusivulla on vain yksi mainospaikka).
- **Muut myyntituotteet, joilla jaettu saatavuus** – jos tuote jakaa saatavuuden toisen tuotteen kanssa, sen tuotteen tai tuotteet voi valita tästä valikosta.
- **Hinta** – tuotteen hinta.
- **ALV-%** – tuotteen arvonlisäveroprosentti.
- **Sopimus- / moduulihinta** – aktivoi kenttä, jos hinta koskee koko ilmoitusta eikä määräydy esimerkiksi palstojen määrän tai näyttökertojen mukaan.
- **Lisätiedot** – kenttään voi kirjoittaa valinnaisia lisätietoja tuotteesta, jotka haluat esimerkiksi myyjien tietoon.
- **Myyntitili** – tuotteen myyntitili.
- **ALV-velkatili** – tuotteen ALV-velkatili.
- **Myyntisaamiset-tili** – tuotteen myyntisaamistili.
- **Kululaji** – kululajinumero, esimerkiksi kirjanpitoa varten.
- **Käsittelijän sähköposti** – tuotteelle voidaan liittää oletuskäsittelijä, joka saa tiedon esimerkiksi aineistojen tulosta.
- **Lähetä aineistolinkki** – jos kenttä on valittuna, myyntituotteen ilmoitusvarauksesta lähetetään aineistolinkki, jonka kautta esimerkiksi mainostoimisto voi toimittaa ilmoitusaineiston.
- **Piilotettu** – jos kenttä on valittuna, tuote ei ole valittavissa myyntejä tehdessä eikä se näy myyntituotelistauksessa.

![Myyntituotteiden muokkaus](/img/ohjeet/myyntituotteen-muokkaus.png)

## Paketit

**Paketit**-välilehdellä voit luoda yksittäisistä myyntituotteista **erillishinnoiteltuja tuotepaketteja** sekä tarkastella ja muokata jo olemassa olevia paketteja.  

**Lisää**-painiketta painamalla voit lisätä uuden paketin, ja olemassa olevan paketin **numeroa** klikkaamalla pääset muokkaamaan sitä.

![Paketit-välilehti](/img/ohjeet/paketit.png)
*Paketit-välilehdellä voit muokata olemassa olevia paketteja ja luoda uusia.*

### Paketin lisääminen

Kun pakettia lisätään, sille määritellään seuraavat tiedot:

- **Numero**: numero, jolla paketti ryhmitellään ja jota voidaan käyttää haussa  
- **Nimi**: myyntipaketin nimi, esimerkiksi *Black Week I*  
- **Hinta**: paketin veroton hinta (kun hinta on annettu, yksittäisten myyntituotteiden hinnat jätetään huomiotta)  
- **Lisätiedot**: paketille oleellisia lisätietoja, esimerkiksi milloin pakettia myydään  
- **Myyntituotteet**: tuotteet, jotka paketti sisältää  

Myyntituotteita **lisätään** pakettiin valitsemalla yksittäisiä tuotteita tai kaikki tuotteet vasemmasta laatikosta (*Kaikki myyntituotteet*) ja siirtämällä ne oikeanpuoleiseen laatikkoon (*Pakettiin valitut tuotteet*) **nuolipainikkeiden avulla**.

![Pakettien lisääminen](/img/ohjeet/paketin-lisaaminen.png)
*Tuotteita siirretään ja poistetaan paketista nuolien avulla.*

Yksittäisiä myyntituotteita voi tarvittaessa kopioida **Monista**-painikkeen avulla, jos samassa paketissa halutaan myydä useita samoja myyntituotteita.

## Julkaisut

**Julkaisut**-välilehdellä voi muokata ja lisätä julkaisuja. **Julkaisu on tuote**, jossa mainos tai ilmoitus esitetään, kuten lehti, radiomainos, uutiskirje tai www-sivu.  

**Lisää**-painikkeella voidaan lisätä yksittäisiä julkaisuja eri kanavia varten.  

Julkaisuja voi muuttaa tai poistaa klikkaamalla **Nimi**-sarakkeessa olevaa julkaisun nimeä.

![Julkaisut](/img/ohjeet/julkaisut.png)
*Julkaisut-välilehti*

### Julkaisun lisääminen

**Julkaisulle määritellään** muun muassa seuraavat tiedot:

- **Kanava** (esim. tietty lehti, verkkosivu, mainostaulu), joka valitaan valikosta  
- **Nimi** ja **Numero**, jotka ovat vapaasti määriteltävissä  
- **Teema**, joka on vapaasti määriteltävissä  
- **Sivumäärä**  
- **Ilmestymispäivä**, eli päivä jolloin julkaisu ilmestyy (esim. lehden jakelupäivä)  
- **Aineistopäivä ja -aika**, eli määräpäivä, johon mennessä ainestot on toimitettava painolle

**Valmiin julkaisun (PDF-tiedoston)** voi ladata palveluun, jolloin se tulee välittömästi näkyviin **OmaPalveluun** kaikille kyseisen julkaisun tilanneille asiakkaille ja/tai niille, jotka ovat siihen ostaneet mainos- tai ilmoitustilaa.

![Julkaisujen lisääminen](/img/ohjeet/julkaisun-lisaaminen.png)
*Julkaisun tiedot*

## Irtonumerot

**Irtonumerot**-välilehdellä lisätään lehtien irtonumeroiden saajat.  

Tiedot lisätään vain **postituslistaan**, ja tilaus- sekä asiakasnumeroksi asetetaan **999999**.

Irtonumeroiden **lisäyksessä syötetään** jokainen lehden irtonumero **omalle rivilleen**, ja kentät erotetaan **puolipisteillä (;)** seuraavassa muodossa:

- Lehden nimi;
- Lehden ilmestymispäivä;
- Nimi (suku- ja etunimi);
- Yritys;
- Katuosoite;
- Katunumero;
- Porras;
- Huoneisto;
- Postinumero;
- Postitoimipaikka

![Irtonumerot](/img/ohjeet/irtonumerot.png)
*Irtonumerot-välilehdellä lisätään irtonumeroiden saajat.*

## Muut asetukset

**Muut asetukset** -välilehdellä voi lisätä **asiakasryhmiä** ja **-rooleja**, sekä määrittää **tilausten katkaisujen syitä**.

![Muut asetukset](/img/ohjeet/muut-asetukset.png)
*Muut asetukset -välilehti*

### Asiakasryhmät ja roolit

Voit luetella kenttiin erilaisia **asiakasryhmiä** ja **asiakasrooleja**, jotka:

- näkyvät **asiakaskortin valintalistalla**  
- ovat käytettävissä erilaisissa **hauissa** (esim. jos halutaan lähettää sähköpostia asiakkaille, joiden rooli on "johtaja" asiakasyrityksessä)

Tämä on hyödyllistä esimerkiksi **kohdennetun markkinoinnin** kannalta.

![Muut asetukset](/img/ohjeet/muut-asetukset2.png)

![Ryhmittely](/img/ohjeet/ryhmittely.png)
*Asiakasryhmän ja -roolin voi asettaa asiakkaalle asiakaskortin Ryhmittely-alavalikossa.*

### Tilauksien katkaisujen syiden luettelu

**Katkaisun syyt** -valikkoon kirjataan mahdolliset tilauksen katkaisusyyt, jotka voidaan valita tilauksen katkaisun yhteydessä (esim. *"Lehti on liian kallis"*).

![Katkaisun syyt](/img/ohjeet/katkaisun-syyt.png)
*Voit asettaa katkaisujen syyt ja karsintaperusteet Muut asetukset -välilehdeltä*

![Katkaisun syyt](/img/ohjeet/katkaisun-syyt2.png)
*Voit valita tällä välilehdellä asettamasi syyt tilauksen katkaisun yhteydessä.*

**Muut asetukset-välilehdellä** voidaan määritellä, mitkä katkaisun syyt **sisältyvät Haut-välilehden ehtoon:** 
`[KAIKKI, PAITSI ASETUKSISSA MÄÄRITELLYT]`.  
Tähän asetetaan ne katkaisun syyt, jotka halutaan **karsia hausta.**

Esimerkiksi **[Haut](/docs/ohjeet/yleiset_ominaisuudet/haut)**-välilehdellä voidaan hakea katkaistujen tilausten asiakkaita soittolistaan.  
Jos halutaan rajata pois katkaisut, jotka johtuvat tilaajan kuolemasta, määritellään **Asetukset → Muut asetukset** -välilehdeltä, että katkaisusyy **“ESTE: Kuollut”** karsitaan hausta, kun hakuehtona on **KAIKKI, PAITSI ASETUKSISSA MÄÄRITELLYT.**

![Muut asetukset](/img/ohjeet/muut-asetukset3.png)

![Muut asetukset](/img/ohjeet/muut-asetukset4.png)

## Pääkäyttäjä

![Pääkäyttäjä](/img/ohjeet/paakayttaja.png)

**Pääkäyttäjä**-välilehden tietoja voivat muokata vain palvelun **pääkäyttäjiksi nimetyt käyttäjät**. 

Välilehdeltä voi muokata mm.:

- yrityksen ja sen tuotteiden perustietoja  
- uusia lehtien tilaustapoja  
- laskunumerosarjan alku- ja loppunumerointeja  
- kampanjatuotteiden käytön aktivointia  
- rajoituksia tekstiviestien määrälle per päivä  
- jakelunippujen minimikokoa  
- **Ilmoitusmyynti**-toimintojen ja niihin liittyvien kenttien aktivointia  
- **OmaPalvelu**-toimintojen aktivointia  
- **Paperilaskutuslisän** käyttöönottoa  

Voit myös lähettää tiedostoja ylläpitäjälle, esimerkiksi asiakastietojen massapäivitystä varten, tai **noutaa tiedostoja ylläpitäjältä** tarkastamista varten.

### Laskun muodostamistiedot

![Pääkäyttäjä](/img/ohjeet/paakayttaja13.png)

Painamalla **Laskun muodostamistiedot** -kohdan vieressä olevaa **NÄYTÄ**-painiketta avautuu uusi välilehti, jossa näet laskutustiedot eri tuotteille.  

Välilehdeltä näet mm.:

- minä päivinä laskuja muodostetaan automaattisesti  
- minä päivinä luodut laskut lähetetään automaattisesti
- eri tuotteiden huomautusajan maksumuistutuksille  

Laskun muodostamistietoja voidaan muokata **vain TaikaTilauksen puolelta**.  
Jos haluat muuttaa näitä asetuksia, ota yhteyttä: **tuki@taikatilaus.fi**

![Pääkäyttäjä](/img/ohjeet/paakayttaja3.png)
*Laskujen muodostamistiedot -näkymä.*

### Välilehden alkupään toiminnot

- **Yrityksen nimi** -kentästä voit muokata yrityksen nimeä.  
- **Lehtien tuoteryhmät** -kenttään syötetään tuoteryhmät, joiden alta lehtituotteet löytyvät.
- **Julkaisujen lyhenteet** -kenttään kirjataan eri lehtijulkaisujen nimien lyhenteet omille riveilleen.
- **Lehtien tilaustavat** -kenttään kirjataan, miltä kanavilta lehtiä voi tilata.
- **Etusivun asiakkaiden max. näyttömäärä** -kenttään kirjataan, kuinka monta asiakasta näytetään enintään etusivun hakulistassa.  
- **Kontaktin perintäkielto -kenttä käytössä** -kentän aktivoimalla asiakaskortin *Laskutustiedot*-osioon tulee näkyviin *Perintäkielto*-kenttä, jonka aktivoimalla kyseisen asiakkaan laskuista ei lähetetä maksumuistutuksia eikä niitä peritä.  
- **Laske laskun summat 5:llä desimaalilla** -kentän aktivoidessa laskujen summat lasketaan viiden desimaalin tarkkuudella yksikköhinnasta.  
- **OmaPalvelu-osio näkyvissä kontaktikortilla** -kentän aktivoidessa *OmaPalvelu*-alivalikko näytetään asiakaskortilla.  

![Pääkäyttäjä](/img/ohjeet/paakayttaja2.png)

- **Ei laskutuslisää -kenttä käytössä** -kentän aktivoidessa asiakaskortille tulee näkyviin *Ei laskutuslisää* -kenttä.
- **Uusi tilaus -kenttä käytössä** -kentän aktivoidessa *Tilaus*-näytölle ilmestyy *Uusi tilaus* -kenttä.
- **Kampanja käytössä** -kentän aktivoidessa tuotteita voidaan ryhmitellä erilaisiin kampanjoihin.
- **Tekstiviestien max. lähetysmäärä päivässä** -kenttään syötetään luku (0–10 000), joka kertoo, kuinka monta tekstiviestiä voi lähettää päivittäin ohjelman avulla.
- **Lehtien painoaineistossa minimi nippukoko** -kenttään annetaan lehtien nippujen minimikoko.
- **Lehtien tilausmyyjät** -kenttään annetaan lista lehtimyyjistä, joita voi tämän jälkeen valita valikosta tilauksia tehtäessä.
- **Myyjätieto laskulle** -kentän aktivoidessa *Lasku*-näkymään ilmestyy *Myyjä*-valintalista.
- **Kirjautumistunniste käytössä** -kentän aktivoidessa käytetään ePaper-kirjautumispinnassa vaihtuvaa käyttäjäkohtaista kirjautumistunnistetta.
- **Paketti käytössä** -kentän aktivoidessa tilaustuotteista voi muodostaa paketteja, ja asetuksiin tulee näkyviin *Tilauspaketit*-välilehti.
- **Osissa maksettaviin tilauksiin jaksotieto päivinä** -kentän aktivoidessa osissa maksettavien tilausten laskuille lisätään laskutusjakso päivinä, esim. 1.1.2025–31.1.2025.
- **Tilausjakson hyvitysviesti käytössä** – kentän aktivoidessa tilaukselle tulee näkyviin *Hyvitä tilausjaksoa* -painike, jonka avulla voi siirtää tilauksen loppupäivää ja lisätä seuraavalle laskulle tekstin, jossa kerrotaan hyvityksestä.

![Pääkäyttäjä](/img/ohjeet/paakayttaja4.png)

### Saldoasetukset

Näitä asetuksia tarvitaan [saldo ja rahan palautus](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo) -toiminnon käyttöönottoon.

- **Ennakkomaksujen (saldo) tili:** mille tilille saldoa lisätään ja käytetään
- **Saldon käytön TuoteID**: sen erillistuotteen TuoteID, jota käytetään tuoterivin luomiseen laskulle, kun saldoa käytetään laskun maksamiseen.
- **Maksun palautusten tili**: mille tilille palautettavat rahat merkitään odottamaan palautusta ja miltä palautukset kuitataan maksetuiksi
- **Maksetun laskun rahan palautus** -kentän aktivoidessa laskulle tulee painike, jota painamalla voi hyvittää kyseisen laskun ja laskun maksetun summan voi siirtää asiakkaalle palautettavaksi

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-palautus3.png)

### Ilmoitusmyynti

- **Vapauta ilmoitusvaraus laskutukseen** – kenttään annetaan ilmoitusvarauksen varausnumero ja painetaan *Vapauta ilmoitusvaraus laskutukseen* -painiketta. Toimintoa käytetään esimerkiksi silloin, kun lasku on lähtenyt väärälle henkilölle ja ilmoitusvaraus täytyy vapauttaa uudelleen laskutettavaksi.  
- **OmaIlmo-sovelluksen nimi** – kenttään annetaan OmaIlmoitus-sovelluksen nimi.  
- **Myyntituotteen lisääminen laskulla** – kentän aktivoidessa laskun tuoteriviksi voi lisätä myyntituotteen.  
- **Julkiset lisätiedot käytössä** – kentän aktivoidessa ilmoitusvarauksen lisätiedot ovat julkisia ja siten asiakkaalle näkyvissä.  
- **Laskutuspäivä käytössä** – kentän aktivoidessa ilmoitusvaraukseen voidaan lisätä laskutuspäivä, jolloin lasku lähetetään asiakkaalle.  
- **Värillisyys käytössä** – kentän aktivoidessa ilmoitusvarauslomakkeella voidaan valita ilmoituksen väriksi mustavalkoinen tai värillinen.  
- **Piilota Palstoja, Korkeus ja Ilmoitusosasto** – kentän aktivoidessa ilmoitusvarauslomakkeelta piilotetaan *Palstoja*, *Korkeus* ja *Ilmoitusosasto* -kentät.

![Pääkäyttäjä](/img/ohjeet/ilmoitusvaraus-paakayttaja.png)
*Pääkäyttäjä voi muokata ilmoitusvarauslomakkeen kenttien näkyvyyttä Pääkäyttäjä-välilehdeltä.*

- **Aineisto on valmis ilmoitukseksi -valinta oletuksena päällä** – kentän aktivoidessa ilmoitusvaraukseen aineistoa lisättäessä *Aineisto on valmis ilmoitukseksi* -kenttä on oletuksena päällä.  
- **Näytä myyjään liitetty laskutustieto** – näyttää, millä tiedoilla ilmoitusvarauksen lasku luodaan.  
- **Laskutetaan omanaan -ruksi** – kentän aktivoidessa pelkistetylle ilmoitusvarauslomakkeelle tulee näkyviin *Laskutetaan omanaan* -valinta.  
- **Ilmoitus on valmis -ruksi** – kentän aktivoidessa pelkistetylle ilmoitusvarauslomakkeelle tulee näkyviin *Ilmoitus on valmis* -valinta.  

![Pääkäyttäjä](/img/ohjeet/ilmoitusvaraus-paakayttaja2.png)

- **YT-hinta käytössä** – kentän aktivoidessa voidaan tuotteelle määritellä yhteistyöhinta, jota käytetään sisäisessä laskutuksessa.  

![Pääkäyttäjä](/img/ohjeet/paakayttaja5.png)

- **AdWizard käytössä** – kenttä aktivoidaan, jos ilmoitusvarauksia käsitellään Mediaboxin InDesign Scoop -lisäosalla.  
- **Laskutus kuun viim. kalenteripäivänä -valinta** – kentän aktivoidessa ilmoitusvarauslomakkeelle tulee kyseinen valinta laskutustavaksi.  

![Pääkäyttäjä](/img/ohjeet/ilmoitusvaraus-paakayttaja3.png)

- **Raportoinnissa Reskontraluettelo 2 käytössä** – <!-- ??? -->  
- **Käyttäjätunnukset (OmaPalvelu2-näyttö näkyvissä)** – <!-- ??? -->  
- **Valmistuslisän TuoteID** – kenttään syötetään ilmoitusvarauksen valmistuslisän tuotenumero.  
- **Käyttäjätunnukset, joilla oikeus myyntikiellon käsittelyyn** – kenttään syötetään niiden käyttäjien tunnukset, joilla on oikeus ilmoitusasiakkaan myyntikiellon käsittelyyn.  

![Pääkäyttäjä](/img/ohjeet/paakayttaja6.png)

### Osoitekentät

Osoitekenttiin voidaan syöttää:

- **Asiakkaan oman www-sivuston osoite** – URL-osoite, johon käyttäjä ohjataan esimerkiksi epäonnistuneen sisäänkirjautumisen jälkeen.  
- **Asiakkaan oman www-sivuston TaikaTilaus-sisäänkirjauksen vastaanotto** – URL-osoite, jonne voidaan lähettää TaikaTilaus-ohjelman sisäänkirjautumistiedot.  
- **Asiakkaan oman www-sivuston Palvelut-lomakkeen paluun vastaanotto** – URL-osoite, jonne käyttäjä ohjataan Palvelut-lomakkeelta esimerkiksi tilaamisen jälkeen.  

![Pääkäyttäjä](/img/ohjeet/paakayttaja7.png)

### Välilehden loppupään toiminnot

![Pääkäyttäjä](/img/ohjeet/paakayttaja8.png)

**Ylläpidon raportit**

- Koostaa raportin koko asiakasrekisteristä Exceliin, sekä tilaus-, lasku- ja myyntitiedot sisältävään taulukkoon.  
- Raportin luominen suuresta asiakasrekisteristä voi kestää jonkin aikaa — haku kestää noin 1000 kontaktia / 1 minuutti.  
- Kun raportti on luotu, ilmestyy linkki, josta sen voi ladata.  

![Pääkäyttäjä](/img/ohjeet/paakayttaja9.png)

**Pääkäyttäjätoiminnot**  
- Testaa WordPress-salasanan tarkistamista <!-- Tarkennus tarvitaan: mitä toiminto tekee käytännössä. -->

**Muuta tiliöinnin tiliä**  
- Painikkeesta painamalla avautuvat alla olevan kuvan mukaiset kentät, joista voi muuttaa yksittäisten tiliöintien tiliä.  

![Pääkäyttäjä](/img/ohjeet/paakayttaja10.png)

**Lataa tiedosto TaikaTilaukselta**  
- Painikkeen kautta voit ladata TaikaTilauksen toimittamia tiedostoja. 

![Pääkäyttäjä](/img/ohjeet/paakayttaja11.png)

**Toimita tiedosto TaikaTilaukselle**  
- Painikkeen kautta voit lähettää tiedostoja TaikaTilaukselle (esimerkiksi suuria muutoksia asiakasrekisterissä).  
- Ilmoita tiedoston lähettämisestä osoitteeseen **tuki@taikatilaus.fi**.  

![Pääkäyttäjä](/img/ohjeet/paakayttaja12.png)

## Käyttäjät

![Käyttäjät](/img/ohjeet/kayttajat.png)
*Pääkäyttäjät voivat hallinnoida palvelun käyttäjiä Käyttäjät-välilehdeltä.*

**Käyttäjät**–välilehdellä pääkäyttäjiksi nimetyt henkilöt voivat lisätä uusia sekä muokata ja poistaa olemassa olevia TaikaTilaus-palvelun käyttäjiä.

**Käyttäjätunnus**-sarakkeen yksittäistä tunnusta klikkaamalla avautuvat käyttäjän tarkemmat tiedot. **Lisää**-painikkeella voi lisätä uuden käyttäjän.

![Käyttäjät](/img/ohjeet/kayttajat5.png)

### Käyttäjien tietojen muokkaaminen

Käyttäjän **perustiedot** täydennetään ensin, ja sen jälkeen valitaan hänelle sopiva **rooli** (esim. ilmoitusten käsittelijä).

> Perustiedot on tallennettava ennen kuin käyttäjälle voidaan lisätä käyttöoikeuksia.

Uudelle käyttäjälle syötetään seuraavat **perustiedot**:

- Käyttäjätunnus  
- Nimi  
- Sähköposti  
- Matkapuhelin  
- Salasana

Käyttäjillä on palvelussa erilaisia **rooleja** (esim. Myyjä, Käsittelijä) riippuen heidän tarvitsemista toiminnoista.

- **Myyjä-roolissa** olevat käyttäjätunnukset voidaan liittää asiakaskortilla asiakkaisiin. Tällöin kyseisestä asiakkaasta tulee ilmoitusmyynnin asiakas.

Käyttäjälle voidaan antaa **tietty salasana** tai luoda **satunnainen salasana**, jonka hän voi myöhemmin vaihtaa. Käyttäjälle voidaan myös määrittää **voimassaoloaika** (esim. kesäapulaisia varten).

Jos käyttäjällä on otettu käyttöön **kaksivaiheinen tunnistautuminen (MFA)**, sen voi kytkeä päälle tai pois käyttäjän tiedoista.

**Sallitut sähköpostiosoitteet** –kenttään voi määritellä osoitteet, joihin kyseisellä käyttäjätunnuksella saa lähettää sähköposteja. Jos rajoituksia ei ole, kenttä jätetään tyhjäksi.

![Käyttäjät](/img/ohjeet/kayttajat2.png)

**Käyttöoikeudet** voidaan määrittää käyttäjälle perustietojen tallentamisen jälkeen. Käyttöoikeudet eri toimintoihin aktivoidaan **käyttäjäkohtaisesti**. Myös **Ilmoitusmyynti**-sovellus lisätään käyttöön tätä kautta.

Käyttöoikeudet asetetaan aktiivisiksi **siirtämällä ne Valittavat toiminnot -kentästä Valitut toiminnot -kenttään**. Toimintoja voi siirtää kenttien välillä **nuolipainikkeilla**.

Valitut käyttöoikeudet määrittävät, mitä ominaisuuksia käyttäjä voi käyttää ohjelmassa (esim. jos *Laskujen lähetys* on valittu, käyttäjä voi lähettää laskuja ohjelman kautta).

**Yrityksen pääkäyttäjä** -kenttä kertoo, onko käyttäjä pääkäyttäjä. Jos haluat yrityksellesi uuden pääkäyttäjän, ota yhteyttä osoitteeseen **tuki@taikatilaus.fi**.

![Käyttäjät](/img/ohjeet/kayttajat3.png)

Jos käyttäjällä on käyttöoikeus [raportteihin](/docs/ohjeet/yleiset_ominaisuudet/raportit), voidaan myös määrittää, mitä raportteja hän näkee. Raportti lisätään käyttäjälle **siirtämällä se Valittavat raportit -kentästä Valitut raportit -kenttään**. Pääkäyttäjä voi muokata raporttien näkyvyyksiä myös suoraan **[Raportit](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/raportit#raporttien-n%C3%A4kyvyyden-muokkaus)**-välilehdeltä. 

Käyttäjän voi poistaa painamalla **Poista**-painiketta lomakkeen oikeassa alakulmassa.

![Käyttäjät](/img/ohjeet/kayttajat4.png)

## OmaPalvelu

![OmaPalvelu](/img/ohjeet/omapalvelu.png)

**OmaPalvelu**–välilehdellä määritellään asiakaskohtaiset asetukset lehti- ja ilmoitusasiakkaiden OmaPalvelun käyttöä varten.

Asetuksissa määritellään kirjautumiseen liittyen mm.:

- Sovelluksen nettiosoite ja nimi  
- Kirjautumisnäkymien otsikot ja muut ohjetekstit  
- Oheistoimintojen ohjauslinkit  
- Toimintoihin liittyvien viestien otsikot ja sisältötekstit  

### Toiminnot

- **OmaPalvelu2-toiminnot käytössä** – kentästä aktivoidaan käyttöön OmaPalvelu2-ohjelman toiminnot. Vanha OmaPalvelu on siirtymässä uuteen versioon, joten tämä valinta otetaan käyttöön siirtymävaiheessa.  
- **Asiakasyrityksen tyylisivu** – kenttään ladataan yrityksen oma tyylisivu.  
- **Perhetunnus käytössä** – kentästä aktivoidaan perhetunnusten käyttö.  
- **Toiminnallisuuksien aktivointi** – kentistä aktivoidaan käyttöön eri toiminnallisuuksia. Näistä voit lukea lisää [täältä](/docs/ohjeet/omapalvelu#sisältö).  

![OmaPalvelu](/img/ohjeet/omapalvelu6.png)

- **Ryhmäkysely** – toiminnon aktivoimalla OmaPalveluun lisätään kysely, jonka vastaukset voidaan ryhmitellä. Näin esimerkiksi arvontaan osallistuvat asiakkaat voidaan lajitella omaan ryhmäänsä.  
- **Supertarjous** – kentän aktivoimalla voit kohdistaa OmaPalvelussa näkyvää mainontaa tietyille asiakasryhmille.  
- **HTML** – kenttien avulla voit luoda OmaPalveluun omia HTML-pohjaisia sisältöjä.  

![OmaPalvelu](/img/ohjeet/omapalvelu7.png)

### Korttien tekstit

Voit asettaa OmaPalvelun eri toiminnoille otsikon ja infotekstin. Esimerkiksi **Asiakaspalvelu**-kortille voit lisätä asiakaspalvelusi yhteystiedot ja aukioloajat.

#### Etusivu

**Etusivu-kortin** kohdalla voit määrittää:

- **Otsikon**  
- Onko **nimitieto käytössä** (näytetäänkö kirjautuneen käyttäjän nimi kortilla)  
- Näytetäänkö **käyttäjätunnuksen** vai **kontaktin** tiedot  
- Näytetäänkö tiedoissa **syntymävuosi**  
- Onko **maatieto**:  
  - vain lukutilassa (asiakas ei voi muokata)  
  - pakollinen (tieto on pakollinen ja asiakkaan on annettava se tallennettaessa)  
  - **sallitut arvot** (mitkä maat/maakoodit ovat sallittuja arvoja)  
- Onko **puhelinnumero**:  
  - vain lukutilassa  
  - määritettynä **puhelintiedon otsikko**

![OmaPalvelu](/img/ohjeet/omapalvelu11.png)

#### Tilaukset

**Tilaukset**-kortin kohdalla voit määrittää:

- **Otsikon**  
- **Infotekstin**  
- Onko **tilauksen peruminen** käytössä  
- **Perumisen vahvistustekstin**  
- **Perumisen syyt** valintalistalle – anna jokainen syy omalle rivilleen. Jos kenttä jätetään tyhjäksi, käytetään vapaata tekstikenttää.  
- Näytetäänkö kirjautuneen asiakkaan **päättyneet tilaukset**

![OmaPalvelu](/img/ohjeet/op-tilaukset.png)

#### Jakeluvirhe

**Jakeluvirhe**-kortin kohdalla voit määrittää:

- **Otsikon**  
- **Infotekstin**  
- Meneekö **jakeluvirheen ilmoittamisesta viesti lehdelle**

![OmaPalvelu](/img/ohjeet/op-jakeluvirhe.png)

#### Vakituinen osoitteenmuutos

**Vakituinen osoitteenmuutos**-kortin kohdalla voit määrittää:

- **Infotekstin**  
- Voiko asiakas ilmoittaa tulevan osoitteenmuutoksen **90 päivää ennakkoon**  
- Onko **maatieto**:  
  - vain lukutilassa (asiakas ei voi muokata)  
  - pakollinen (tieto on pakollinen ja asiakkaan on annettava se tallennettaessa)  
  - **sallitut arvot** (mitkä maat/maakoodit ovat sallittuja arvoja)  
- Onko **puhelinnumero**:  
  - määritettynä **puhelintiedon otsikko**

![OmaPalvelu](/img/ohjeet/op-vakituinen.png)

#### Väliaikainen osoitteen muutos

**Väliaikainen osoitteenmuutos**-kortin kohdalla voit määrittää:

- **Otsikon**  
- **Infotekstin**  
- Onko **maatieto**:  
  - vain lukutilassa (asiakas ei voi muokata)  
  - pakollinen (tieto on pakollinen ja asiakkaan on annettava se tallennettaessa)  
  - **sallitut arvot** (mitkä maat/maakoodit ovat sallittuja arvoja)  
- Onko **CO-osoite**:  
  - määritettynä **CO-osoitteen otsikko**

![OmaPalvelu](/img/ohjeet/op-valiaikainen.png)

#### Jakelun keskeytys

**Jakelun keskeytys**-kortin kohdalla voit määrittää:

- **Otsikon**  
- **Infotekstin**  
- **Lisää keskeytys** -sivun infotekstin

![OmaPalvelu](/img/ohjeet/op-jakelun-keskeytys.png)

#### Laskut

**Laskut**-kortin kohdalla voit määrittää:

- **Otsikon**  
- **Infotekstin**

![OmaPalvelu](/img/ohjeet/op-laskut.png)

#### Asiakaspalvelu

**Asiakaspalvelu**-kortin kohdalla voit määrittää:

- **Kortin otsikon**  
- **Asiakaspalvelunäytön otsikon**  
- **Yhteystietojen otsikon**  
- **Aukiolotekstin**  
- **Puhelinnumeron**  
- **Sähköpostiosoitteen**  
- Lähetetäänkö **asiakaspalveluyhteydenotto** sähköpostitse yrityksesi asiakaspalveluun
- **Lähetä viestin** -painikkeen otsikko

![OmaPalvelu](/img/ohjeet/op-asiakaspalvelu.png)

#### Tilaa lehti

**Tilaa lehti** -kortin kohdalla voit määrittää:

- **Kortin otsikon**  
  - *Esim.*: Tilaa lehti  
- **Tilaa lehti -linkin osoitteen**  
  - *Esim.*: /palvelut.aspx?p=til  
- **Tilaa lehti -linkin tekstin**  
  - *Esim.*: Tilaa lehti

![OmaPalvelu](/img/ohjeet/op-tilaa.png)

#### Juttuvinkki

**Juttuvinkki**-kortin kohdalla voit määrittää:

- **Kortin otsikon**  
- **Kortin taustakuvan**  
- **Juttuvinkki-näytön infotekstin otsikon**  
- **Juttuvinkki-näytön infotekstin**  
- **Lähetä juttuvinkki sähköpostitse** – valinta, jolla määritetään, lähetetäänkö juttuvinkki sähköpostitse esim. yrityksesi toimitukselle
- **Juttuvinkin vastaanottajan sähköpostiosoite**  
  - *Esim.*: toimitus@taikanakka.fi

![OmaPalvelu](/img/ohjeet/op-juttuvinkki.png)

#### Ilmoitukset

**Ilmoitukset**-kortin kohdalla voit määrittää:

- **Kortin otsikon**   
- **Ilmoitukset-näytön infotekstin**  

![OmaPalvelu](/img/ohjeet/op-ilmoitukset.png)

### Kirjautumisnäkymien otsikot ja palvelun osoitteet

- **Kirjautumisnäytön Rekisteröidy-linkin osoite** – kenttään asetetaan osoite, jonka kautta palveluun rekisteröidytään.  
- **Kirjautumisnäytön kirjautumisen otsikko** – kenttään määritetään kirjautumisnäkymään tuleva otsikko.  
- **Kirjautumisnäytön rekisteröidy-teksti** – kenttään määritetään rekisteröitymiseen liittyvä teksti.  
- **Kirjautumisnäytön kertakirjautumissivun otsikko** – kenttään määritetään kertakirjautumisvaihtoehdon otsikko.  

![OmaPalvelu](/img/ohjeet/omapalvelu8.png)

- **Kirjautumisnäytön kertakirjautumissivun ohje** – kenttään määritetään kertakirjautumista koskeva ohjeteksti.  
- **Kirjautumisnäytön kertakirjautumismeilin otsikko ja viesti** – kenttiin määritetään automaattiviestin otsikko ja sisältö. Viesti lähetetään, kun asiakas on pyytänyt kertakirjautumislinkkiä. 
- **Kirjautumisen jälkeinen pop-up teksti**

![OmaPalvelu](/img/ohjeet/omapalvelu9.png)

- **Tietosuojasivun osoite** – kenttään määritetään osoite, josta löytyy sovelluksen tietosuojaseloste.  
- **REST-API URL** <!-- Tarkennus tarvitaan: mitä varten osoite määritetään. -->  

![OmaPalvelu](/img/ohjeet/omapalvelu10.png)

### Automaattiviestit

- **OmaPalvelun käyttäjätunnuksen luontisähköposti** – kentistä voit asettaa otsikon ja tekstin automaattiviestille, joka lähetetään, kun asiakkaalle on luotu tunnus OmaPalveluun.  
- **Automaattisen korttiveloituksen epäonnistuminen** – kentistä voit asettaa otsikon ja tekstin viestiin, joka lähetetään, kun automaattinen korttiveloitus epäonnistuu.

![OmaPalvelu](/img/ohjeet/omapalvelu3.png)

- **Perhekutsu** – kentistä voit asettaa otsikon ja tekstin viestille, joka lähetetään, kun OmaPalvelun käyttäjä on lisännyt tililleen perhetunnuksia.  
- **Salasanan resetöintisähköposti** – kentistä voit asettaa otsikon ja tekstin automaattiviestille, joka lähetetään, kun asiakas on pyytänyt salasanan resetointia.  

- **Siirry kirjautumiseen -linkki ohjaa ulos** – valintaruutu, jonka aktivoimalla linkki ohjaa käyttäjän ulos palvelusta salasanan uusimisen jälkeen.  
    - Tämä mahdollistaa sen, että käyttäjä voidaan ohjata esimerkiksi maksumuuriin, verkkosivuille tai näköislehteen.  
  - **Palaa kirjautumiseen** ja **Siirry kirjautumiseen** -linkkien **URL**-osoite määritetään tässä osiossa.

![OmaPalvelu](/img/ohjeet/omapalvelu4.png)

<!-- //???  ## Maksumuuri

![Maksumuuri](/img/ohjeet/maksumuuri.png)

Maksumuuri välilehdeltä voit testata maksumuurin toimivuutta ja asettaa osoitteet, josta -->

## Tilauslomake

![Tilauslomake](/img/ohjeet/tilauslomake.png)

**Tilauslomake**–välilehdellä voit määrittää tilauslomakkeen asetukset. Tilauslomakkeen kautta asiakkaat voivat tilata lehden.

Tilauslomake-asetuksista voit **esikatsella tyhjää tai esitäytettyä tilauslomaketta**. Esikatselun avulla voit testata lomakkeen toimintaa ja nähdä, miten tekemäsi muutokset asetuksissa vaikuttavat siihen.

### Yleiset asetukset

**Yleiset asetukset** -kohdassa voit valita tilauslomakkeen kielen. Tällä hetkellä vaihtoehtoina ovat **suomi**, **englanti** ja **ruotsi**.

> **Huom:** Kielen valinta ei vaikuta tuotteiden tai laskujen teksteihin.  
> Tilauslomakkeen asetuksissa määritetyt tekstit ohittavat oletustekstit kielivalinnasta riippumatta.

![Tilauslomake](/img/ohjeet/tilauslomake-yleiset.png)

### Tilaustuotteen valinta

**Tilaustuotteen valinta** -kohdassa voit määrittää, mitkä tuotteet ja minkälaiset tuotetyypit tulevat näkyviin tilauslomakkeelle. Tässä osiossa voit myös asettaa, mitä tekstejä lomakkeella näytetään, kun tilaaja valitsee tuotteen.

#### Valitse tuote -vaihtoehdot

**Tilaustuotteen valinta otsikko** -kentässä voit määrittää otsikon, joka näkyy lomakkeella tuotteen valintakohdassa.

**Valitse tuote** -vaihtoehdoista voit määrittää, voiko lomakkeella tilata digitaalisia tilauksia, täystilauksia (paperi + digi) vai pelkkiä paperitilauksia. Näille tuotevaihtoehdoille voit asettaa omat **otsikot** ja **infotekstit**, jotka näkyvät tilaajalle lomakkeella.

![Tilauslomake](/img/ohjeet/tilauslomake8.png)

![Tilauslomake](/img/ohjeet/tilauslomake9.png)
*Tuotteen otsikko ja info teksti näkyvät lomakkeella ympäröidyissä kohdissa.*

#### Valitse tilauksen tyyppi -vaihtoehdot

**Valitse tilauksen tyyppi** -kohdassa voit määrittää, voiko lomakkeella tilata **kestotilauksia**, **määräaikaisia tilauksia** tai molempia. Näille tilausvaihtoehdoille voit asettaa omat **otsikot** ja **infotekstit**, jotka näytetään tilaajalle lomakkeella.

![Tilauslomake](/img/ohjeet/tilauslomake-tilaustyyppi.png)

#### Laskutusväli / tuotteet

**Tilauslomakkeen tuotteet** -valikosta voit valita, mitkä tuotteet asiakas voi tilata tilauslomakkeelta.

![Tilauslomake](/img/ohjeet/tilauslomake3.png)

**Tilauslomakkeen piilotetut tuotteet** -valikosta voit valita tuotteet, jotka ovat tilattavissa, mutta piilotettu näkyvistä tilauslomakkeella.  
- Näitä tuotteita voi tilata vain, jos lomakkeelle saavutaan esimerkiksi tarjouslinkin kautta.

**Tilauslomakkeen tarjoustuotteet** -valikosta voit valita, mitkä tuotteet ovat tarjoustuotteita. 
- Huomioi, että tuotteiden tulee olla valittuna myös **Tilauslomakkeen tuotteet** tai **Tilauslomakkeen piilotetut tuotteet** -valikossa.
- Tilauslomakkeella tulee ikoni näiden tuotteiden viereen, että ne voi erottaa muista tuotteista.

**Tilauslomakkeen oletuksena valittu tuote** -valikosta voit valita, mikä tuote näkyy lomakkeella oletuksena, kun käyttäjä avaa lomakkeen.

![Tilauslomake](/img/ohjeet/tilauslomake-tuotteet.png)

**Laske ja näytä kuukausihinta tuotteille** -valikosta voit valita, mille tuotteille kuukausihinta lasketaan ja näytetään lomakkeella.

![Tilauslomake](/img/ohjeet/tilauslomake12.png)
*Kuukausihinta näkyy tilauslomakkeella kuvassa ympäröidyssä kohdassa.*

#### Tilaus alkaa

Tässä kohdassa voit asettaa **“Valitse päivämäärä”** -infotekstin, joka näytetään tilaajalle, kun hän valitsee tilauksen aloituspäivän.

![Tilauslomake](/img/ohjeet/tilauslomake-tilausalkaa.png)

#### Aloitussivu

Aktivoimalla **Tilauslomakkeen aloitussivuna tuotelista** -asetuksen, lomakkeen aloitussivuksi tulee tuotelista.

![Tilauslomake](/img/ohjeet/tilauslomake11.png)
*Tuotelista-näkymä*

Aktivoimalla **Palaa tuotelistaan -painike käytössä** -kentän, lomakkeelle lisätään painike, josta käyttäjä voi palata tuotelistaan tuotteen valinnan jälkeen.

![Tilauslomake](/img/ohjeet/tilauslomake10.png)

![Tilauslomake](/img/ohjeet/tilauslomake2.png)

### Yhteystiedot

**Yhteystiedot**-osiossa voit määrittää, mitkä kentät näkyvät tilaajalle tilauslomakkeella ja mitkä niistä ovat pakollisia täytettäviä kenttiä.  

Jokaiselle kentälle voidaan myös määrittää oma otsikko.

Kenttien valinnat:
- **Käytössä** – kun valinta on aktiivinen, kenttä näkyy lomakkeella.  
- **Pakollinen** – kun valinta on aktiivinen, kenttä on pakollinen täyttää ennen tilauksen lähettämistä.  
- **Otsikko** – kentän nimi, joka näytetään tilaajalle lomakkeella.

Mahdollisia yhteystietokenttiä ovat mm.:
- Katunumero  
- Porras  
- Huoneisto  
- Maa  
- Puhelin  
- Asiakasroolit - asiakasryhmä
- Kampanjatunniste - tunniste, jolla tilaus ryhmitellään tiettyyn kampanjaan kuuluvaksi

![Tilauslomake](/img/ohjeet/tilauslomake-yhteystiedot.png)

![Tilauslomake](/img/ohjeet/tilauslomake13.png)
*Aktivoitavat yhteystiedot näkyvät ympäröidyissä kohdissa.*

### Maksutapa 

**Maksutapa**-kohdassa voit määrittää tilauslomakkeella käytettävät maksutapavaihtoehdot ja niihin liittyvät asetukset.

**Valitse laskutustapa -vaihtoehdot** -kohdasta voit valita, mitkä maksutavat ovat asiakkaan käytettävissä:

- Verkkomaksu  
- Sähköpostilasku  
- Paperilasku  

Voit myös määrittää, mikä maksutavoista on **oletuksena valittuna** sekä asettaa maksutapojen **otsikot** ja **infotekstit**, jotka näkyvät tilaajalle lomakkeella.

Jos **Verkkomaksu** on valittuna, mutta se on käytössä vain kertamaksuna, voidaan kestotilauksissa ja useassa erässä laskutettavissa tilauksissa kysyä myös **seuraavan laskun toimitustapaa**. Tämä voidaan ottaa käyttöön aktivoimalla *Kysy seuraavan laskun toimitustapa* -asetus.

![Tilauslomake](/img/ohjeet/tilauslomake5.png)

![Tilauslomake](/img/ohjeet/tilauslomake15.png)
*Valitsemasi maksutavat, niiden otsikot ja infotekstit näkyvät ympäröidyissä kohdissa.*

**Verkkomaksupalvelu**-osiossa määritellään, minkä maksunvälityspalvelun kautta tilauslomakkeen verkkomaksut käsitellään.  

Valitse käytettävä verkkomaksupalvelu, johon tilaajat ohjataan maksamaan:
- Ei käytössä  
- **Paytrail**  
- **Visma Pay**  
- **Stripe**

Valinnan jälkeen täydennä palvelukohtaiset tiedot:

**Paytrail (Checkout)**
- **Paytrail kauppiastunnus** – palveluntarjoajan myöntämä tunnus.  
  Huom: käytä vain 2023 jälkeen myönnettyjä tunnuksia.  
  Esimerkki testitunnus: `375917`
- **Paytrail kauppiasvarmenne** – palveluntarjoajan myöntämä varmennesarja.  
  Huom: käytä vain 2023 jälkeen myönnettyjä varmennesarjoja.  
  Esimerkki testivarmenne: `SAIPPUAKAUPPIAS`

**Visma Pay**
- **Merchant ID**  
- **Private Key**  
- **API Key**

![Tilauslomake](/img/ohjeet/tilauslomake6.png)

### Tilauksen hyväksyminen

**Tilausehdot (pakollinen) -valinnan teksti** -kenttään asetetaan teksti, joka näkyy asiakkaalle, kun hän hyväksyy tilausehdot ennen tilauksen lähettämistä.  

**Tilausehdot osoite** -kenttään lisätään URL-osoite, josta löytyvät yrityksen tilausehdot.  

**Markkinointivalinnat**-kohdassa määritellään, millä kanavilla asiakkaalle voidaan lähettää markkinointia. Vaihtoehtoina ovat:

- Sähköposti  
- Kirje  
- Puhelu  

Voit lisäksi määrittää markkinointilupakentille omat otsikot.  

**Tietosuojaselosteen otsikko** ja **Tietosuojaselosteen osoite** määritetään osion viimeisissä kentissä.

![Tilauslomake](/img/ohjeet/tilauslomake7.png)

![Tilauslomake](/img/ohjeet/tilauslomake14.png)

*Tilauksen hyväksyminen -asetukset koskevat tätä kohtaa lomakkeesta.*

### Tilausvahvistus ja uudelleenohjaus

**Viestipohjat**-painikkeesta siirryt suoraan **[Viestipohjat](https://support.taikatilaus.fi/docs/ohjeet/asetukset#viestipohjat)**-välilehdelle, jossa voit muokata tilausvahvistusviestin otsikoita ja sisältöä.  

Voit myös asettaa osoitteen, johon asiakas ohjataan tilauksen, käyttäjätunnuksen luomisen tai verkkomaksun jälkeen (esimerkiksi lehden verkkosivut)  

![Tilauslomake](/img/ohjeet/tilauslomake16.png)

### Tilaajan tunnusten luominen

Tunnusten luomiseen on kaksi vaihtoehtoista tapaa. Kun tunnukset on luotu, ne siirtyvät automaattisesti **näköislehtipalveluun**, jos sellainen on käytössä.

1. **Asiakas luo tunnuksen itse TaikaTilauksen tilauslomakkeen kautta.**  
   Kun asiakas tekee tilauksen, hän saa sähköpostiinsa vahvistusviestin, jonka kautta voi luoda oman käyttäjätunnuksensa.

![Tilauslomake](/img/ohjeet/tunnus8.png)

![Tilauslomake](/img/ohjeet/tunnus5.png)

Sähköpostissa olevan linkin kautta asiakas voi määrittää salasanansa.

![Tilauslomake](/img/ohjeet/tunnus6.png)

![Tilauslomake](/img/ohjeet/tunnus7.png)

2. **TaikaTilauksen käyttäjä luo tunnuksen asiakkaalle.**

![Tilauslomake](/img/ohjeet/tunnus.png)

Tunnuksen **käyttäjätunnus on aina asiakkaan sähköpostiosoite**.  
> Voit myös valita, onko luotu tunnus **päätunnus vai alitunnus** (jos perhetunnukset ovat käytössä).

![Tilauslomake](/img/ohjeet/tunnus2.png)

Kun olet luonut tunnuksen, voit lähettää asiakkaalle sähköpostin salasanan luomista varten painamalla **Lähetä uusi tunnus -sähköposti** -painiketta. Näin asiakas voi aktivoida tunnuksensa ja kirjautua palveluun.

![Tilauslomake](/img/ohjeet/tunnus3.png)

![Tilauslomake](/img/ohjeet/tunnus4.png)

*Asiakas voi asettaa salasanansa saamansa sähköpostin kautta.*

## Varhaisjakelu

![Varhaisjakelu](/img/ohjeet/varhaisjakelu.png)

**Varhaisjakelu**–näkymässä ylläpidetään varhaisjakelussa käytettävää osoitteistoa.  
- Osoitteisto päivitetään käyttöönoton yhteydessä ja tarvittaessa myöhemmin sähköisen tiedostosiirron avulla.

Varhaisjakeluun liittyvät osoitteistot ja nippujen tiedot määritellään asetuksissa:

- Postin varhaisjakelurekisteri ja käytettävät nippunumerot  
- Vakioniput  
- Varhaisjakelun reitit  
- Peittojakelu  
- Lehdetön peittojakelu  
- Yhdistettävät niput  

### Postin varhaisjakelurekisteri ja käytettävät nippunumerot

Tähän välilehteen syötetään Postilta saatu varhaisjakelun **katurekisteri**. Kadut ja niiden katunumerot on kohdistettu piireihin. Katurekisteri ladataan leikepöydän kautta **CSV-muodossa**.  

Osoitteet **syötetään** riveittäin seuraavassa muodossa:  
`Paikannimi;Parittomat;Parilliset;Postinumero;Postitoimipaikka;Reittitunnus (nippunumero)`  

**Postin varhaisjakeluosoitteiston käytettävät piirinumerot (nippunumerot)** -kenttään syötetään piirinumerot, joilla varhaisjakelua halutaan käyttää. Piirinumerot **syötetään** omille riveilleen muodossa:  
`Nippunumero;Lehti`

![Varhaisjakelu](/img/ohjeet/varhaisjakelu2.png)

### Vakioniput

**Varhaisjakelu**–näkymässä ylläpidetään myös **Vakioniput**–rekisteriä, jossa listataan muun muassa:

- Lehden toimistoon vietävän nipun koko  
- Painon varalehtien nipun koko  
- Muut vakioniput ja niiden sisältämät lehtimäärät  

Yksittäiset vakioniput **listataan** tekstikenttään:
- Jokainen nippu omalle rivilleen, kentät puolipisteillä eroteltuina  
- Muodossa:  
  `Lehti;Reitti;Jättöpaikka1;Jättöpaikka2;Nippu;Kuljetuksenohjaus1;Kuljetuksenohjaus2;Vastaanottaja;Osoite;Postinumero+Postitoimipaikka;Jakelu(VARHAIS/PÄIVÄ);Kpl`  
- Sarakkeita on 12 kpl, ja niiden järjestys sekä maksimipituudet näkyvät ohjeen mallirivissä  

Muutokset (esim. lisälehtiä nippuun) päivitetään kyseisen vakionipun riville ja tallennetaan.  
- Mikäli muutos on **tilapäinen**, se tulee palauttaa päivittämällä muutostieto takaisin (normimäärään) poikkeavan postituksen jälkeen.  

![Varhaisjakelu](/img/ohjeet/varhaisjakelu3.png)

#### Nippujen päivitys

Voit muuttaa kaikkien vakionippujen tietoja kerralla tai lisätä uusia vakionippuja viemällä tiedot Exceliin **Vie Exceliin** -painikkeesta.  

![Varhaisjakelu](/img/ohjeet/vakionippu2.png)

Muokkaa nippujen tietoja, poista tarpeettomia rivejä tai lisää uusia Excelissä.  

![Varhaisjakelu](/img/ohjeet/vakionippu3.png)

Tuo päivitetyt niput järjestelmään **Tuo Excelistä** -painikkeella.  

![Varhaisjakelu](/img/ohjeet/vakionippu4.png)

Kopioi niput Excelistä ja liitä ne järjestelmässä olevaan kenttään.  

Lopuksi klikkaa **Lue Excel sisään** -painiketta.  

![Varhaisjakelu](/img/ohjeet/vakionippu5.png)

Niput ovat tämän jälkeen päivittyneet.

![Varhaisjakelu](/img/ohjeet/vakionippu6.png)

### Varhaisjakelun reitit

Tälle välilehdelle syötetään **varhaisjakelun reitit**.  

Reitit **syötetään** muodossa:  
`Kuljetus nro (Reitti);Jättöpaikka;Piiri nro (Nippu);Piirinimi;Kuljetusnimi;Jättöpaikan osoite`

![Varhaisjakelu](/img/ohjeet/varhaisjakelu4.png)

### Peittojakelu

Kun tehdään lehden **peittojakelua** (Lehti + lisälehti), syötetään tälle välilehdelle peittojakelun reitit.  

Postituslistan luontivaiheessa ohjelma hakee kyseiseen lehteen ja ilmestymiseen lisättävät lisälehdet ja lisää ne postituslistalle automaattisesti.

Peittojakelun **reitit syötetään** siten, että jokainen rivi vastaa yhtä reittiä, ja kentät erotellaan puolipisteillä.  

Sarakkeiden järjestys:  
`Lehti;Piiri nro (Nippu);Lehden ilmestymispäivä;Kpl`

![Varhaisjakelu](/img/ohjeet/varhaisjakelu5.png)

### Lehdetön peittojakelu

Kun tehdään **vain lisälehden peittojakelu**, syötetään tälle välilehdelle peittojakelun reitit.  

Lehdetön peittojakelu voidaan lisätä postitukseen painamalla **Lisää lehdetön peittojakelu postitukseen** -painiketta.

Peittojakelun **reitit syötetään** siten, että jokainen rivi vastaa yhtä reittiä, ja kentät erotellaan puolipisteillä.  

Sarakkeiden järjestys:  
`Lehti;Reitti;Jättöpaikka1;Jättöpaikka2;Nippu;Kuljetuksenohjaus1;Kuljetuksenohjaus2;Vastaanottaja;Osoite;Postinumero+Postitoimipaikka;Lehden ilmestymispäivä;Kpl`

![Varhaisjakelu](/img/ohjeet/varhaisjakelu6.png)

### Yhdistettävät niput

**Yhdistettävät niput** -välilehdellä voidaan yhdistää varhaisjakelun pieniä nippuja yhteen.  

Ohjelma kerää postituslistaan annettujen nippujen osoitteet samaan nippuun ja lisää kansilehdelle maininnan siitä, että nippu sisältää useamman nipun tietoja.

**Syötä** kunkin yhdistetyn nipun tiedot allekkain muodossa:  
`Lehden nimi[TAB]Nippunumero`  

Muitakin sarakkeita voi olla, mutta niitä ei tulkita. Ensimmäistä nippunumeroa käytetään Ferakissa, ja siihen yhdistetään muut niput. Mikäli ensimmäisessä nippunumerossa **ei ole yhtään lehteä**, käytetään seuraavaa.  

Erottele yhdistettävät niput tyhjällä rivillä. Tuo tiedot Excelistä, niin **Lehden nimen ja Nippunumeron väliin tulee TAB (tabulaattori)**.

![Varhaisjakelu](/img/ohjeet/varhaisjakelu7.png)

