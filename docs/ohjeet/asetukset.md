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

- **Yrityksen nimi** -kentästä voit muokata yrityksen nimeä
- **Julkaisujen lyhenteet** -kenttään kirjataan eri lehtijulkaisujen nimien lyhenteet omille riveilleen
- **Lehtien tilaustavat** -kenttään kirjataan, miltä kanavilta lehtiä voi tilata
- **Etusivun asiakkaiden max. näyttömäärä** -kenttään kirjataan maksimissaan kuinka monta asiakasta näytetään etusivun hakulistassa
- **Kontaktin perintäkielto -kenttä käytössä** -kentän aktivoidessa asiakaskortin Laskutustiedot-osioon tulee näkyviin Perintäkielto-kenttä, jonka aktivoimalla kyseisen asiakkaan laskuista ei lähetetä maksumuistutuksia eikä niitä peritä
- **Laske laskun summat 5:llä desimaalilla** -kentän aktivoidessa laskujen summat lasketaan viiden desimaalin tarkkuudella yksikköhinnasta
- **OmaPalvelu-osio näkyvissä kontaktikortilla** -kentän aktivoidessa OmaPalvelu-alivalikko näytetään asiakaskortilla

![Pääkäyttäjä](/img/ohjeet/paakayttaja2.png)

- **Ei laskutuslisää -kenttä käytössä** -kentän aktivoidessa asiakaskortille tulee näkyviin *Ei laskutuslisää* -kenttä.
- **Uusi tilaus -kenttä käytössä** -kentän aktivoidessa Tilaus-näytölle ilmestyy *Uusi tilaus* -kenttä.
- **Kampanja käytössä** -kentän aktivoidessa tuotteita voidaan ryhmitellä erilaisiin kampanjoihin
- **Tekstiviestien max. lähetysmäärä päivässä** -kenttään syötetään luku (0-10,000), joka kertoo, kuinka monta tekstiviestiä voi lähettää päivittäin ohjelman avulla
- **Lehtien painoaineistossa minimi nippukoko** -kenttään annetaan lehtien nippujen minimikoko
- **Lehtien tilausmyyjät** -annetaan lista lehtimyyjistä, joita voi tämän jälkeen valita valikosta tilauksille tilauksia tehtäessä
- **Myyjätieto laskulle** -kentän aktivoidessa tulee Lasku-näkymään ilmestyy Myyjä-valintalista
- **Kirjautumistunniste käytössä** -kentän aktivoidessa käytetään ePaper-kirjautumispinnassa vaihtuvaa käyttäjäkohtaista kirjautumistunnistetta
- **Paketti käytössä** -kentän aktivoidessa voi tilaustuotteista muodostaa paketteja ja asetuksiin tulee näkyviin Tilauspaketit-välilehti
- **Osissa maksettaviin tilauksiin jaksotieto päivinä** -kentän aktivoidessa osissa maksettavien tilauksien laskuille lisätään laskutusjakso päivinä, esim. 1.1.2025-31.1.2025.

![Pääkäyttäjä](/img/ohjeet/paakayttaja4.png)

### Saldoasetukset

Näitä asetuksia tarvitaan [saldo ja rahan palautus](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo) -toiminnon käyttöönottoon.

- **Ennakkomaksujen (saldo) tili:** mille tilille saldoa lisätään ja käytetään
- **Ennakkomaksujen käyttö eri lehtiin**: määrittely siitä, mille lehdille saldoa voi käyttää 
    - muodossa LehdenLyhenne,LehdenLyhenne esim. TAN,TAV, jos saldoa käytetään molempiin lehtiin ilman erittelyä. Muodossa TAN;TAV, jos saldon käyttö eritellään, eli TaikaNakka-lehden (TAN) peruutuksesta tullutta saldoa voidaan käyttää vain TaikaNakka-lehden laskuihin
- **Lehti#1,2,3: Ennakkomaksujen Lehti ja TuoteID**: lehdet ja erillistuote ID, jota käytetään luomaan tuoterivejä laskuille, kun saldoa käytetään. Muodossa LehdenLyhenne;TuoteID
- **Maksun palautusten tili**: mille tilille palautettavat rahat merkitään odottamaan palautusta ja miltä palautukset kuitataan maksetuiksi
- **Lehti#1,2,3: Maksun palautusten Lehti ja TuoteID**: lehdet ja erillistuote ID, jota käytetään luomaan tuoterivejä palaustuslaskuille. Muodossa LehdenLyhenne;TuoteID

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-palautus3.png)

- **Maksetun laskun rahan palautus** -kentän aktivoidessa laskulle tulee painike, jota painamalla voi hyvittää kyseisen laskun ja laskun maksetun summan voi siirtää asiakkaalle palautettavaksi

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-palautus8.png)

### Ilmoitusmyynti

- **Vapauta ilmoitusvaraus laskutukseen** -kenttään annetaan ilmoitusvarauksen varausnumero ja painetaan *Vapauta ilmoitusvaraus laskutukseen* -painiketta. Käytetään esim. kun lasku on lähtenyt väärälle henkilölle
- **OmaIlmo-sovelluksen nimi** -kenttään annetaan OmaIlmo-sovelluksen nimi
- **Myyntituotteen lisääminen laskulla** -kentän aktivoidessa laskun tuoteriviksi voi lisätä myyntituotteen
- **Julkiset lisätiedot käytössä** -kentän aktivoidessa ilmoitusvarauksen lisätiedot ovat julkisia ja siten asiakkaalle näkyvissä
- **Laskutuspäivä käytössä** -kentän aktivoidessa ilmoitusvaraukseen voidaan lisätä laskutuspäivä, joilloin lasku lähetetään asiakkaalle
- **Värillisyys käytössä** -kentän aktivoidessa ilmoitusvarauslomakkeella voidaan valita ilmoituksen väriksi mustavalkoinen tai värillinen
- **Piilota Palstoja, Korkeus, ja Ilmoitusosasto** -kentän aktivoidessa ilmoitusvarauslomakkeelta piilotetaan Pastoja, Korkeus, ja Ilmoitusosasto -kentät.

![Pääkäyttäjä](/img/ohjeet/ilmoitusvaraus-paakayttaja.png)
*Pääkäyttäjä voi muokata ilmoitusvarauslomakkeen kenttien näkyvyyttä Pääkäyttäjä-välilehdeltä.*

- **Aineisto on valmis ilmoitukseksi - valinta oletuksena päällä** -kentän aktivoidessa ilmoitusvaraukseen aineistoa lisätessä on *Aineisto on valmis ilmoitukseksi* -kenttä oletuksena päällä
- **Näytä myyjään liitetty laskutustieto eli millä tiedoilla ilmoitusvarauksen lasku luodaan**
- **Laskutetaan omanaan-ruksi** -kentän aktivoidessa tulee pelkistetylle ilmoitusvarauslomakkeelle näkyviin *Laskutetaan omanaan* -valinta
- **Ilmoitus on valmis-ruksi** -kentän aktivoidessa tulee pelkistetylle ilmoitusvarauslomekkeella näkyviin *Ilmoitus on valmis* -valinta

![Pääkäyttäjä](/img/ohjeet/ilmoitusvaraus-paakayttaja2.png)

- **YT-hinta käytössä** -kentän aktivoidessa voidaan tuotteelle määritellä yhteistyöhinta, mitä käytetään sisäisessä laskutuksessa

![Pääkäyttäjä](/img/ohjeet/paakayttaja5.png)

- **AdWizard-käytössä** -kenttä aktivoidaan, jos ilmoitusvarauksia käsitellään Mediaboxin InDesign Scoop-lisäosalla
- **Laskutus kuun viim. kalenteripäivänä-valinta** -kentän aktivoidessa ilmoitusvarauslomakkeelle tulee kyseinen valinta käyttöön laskutustavaksi

![Pääkäyttäjä](/img/ohjeet/ilmoitusvaraus-paakayttaja3.png)

- **Raportoinnissa Reskontraluottelo 2 käytössä** - <!-- ///???? -->?
- **Käyttäjätunnukset (OmaPalvelu2-näyttö näkyvissä)** - <!-- ///???? -->
- **Valmistuslisän tuoteID** -kenttään syötetään ilmoitusvarauksen valmistuslisän tuotenumero
- **Käyttäjätunnukset joilla oikeus myyntikiellon käsittelyyn** -kenttään syötetään niiden käyttäjien käyttäjätunnukset, joilla on oikeus ilmoitusasiakkaan myyntikiellon käsittelyyn

![Pääkäyttäjä](/img/ohjeet/paakayttaja6.png)

### Osoitekentät

Osoitekenttiin voidaan syöttää:

- **Asiakkaan oman www-sivuston osoite**: URL-osoite, minne käyttäjä ohjataan esim. epäonnistuneen sisäänkirjautumisen jälkeen
- **Asiakkaan oman www-sivuston TaikaTilaus -sisäänkirjauksen vastaanotto**: URL-osoite, minne voidaan lähettää TaikaTilaus-ohjelman sisäänkirjautumisien tiedot
- **Asiakkaan oman www-sivuston Palvelut-lomakkeen paluun vastaanotto**: URL-osoite, minne palataan Palvelut-lomakkeelta mm. tilaamisen jälkeen

![Pääkäyttäjä](/img/ohjeet/paakayttaja7.png)

### Välilehden loppupään toiminnot

![Pääkäyttäjä](/img/ohjeet/paakayttaja8.png)

**Ylläpidon raportit**

- koostaa raportin Koko Asiakasrekisteristä Exceliin + tilaus, lasku ja myyntitiedot –taulukkoon. Raportin luominen suuresta asiakasrekisteristä saattaa viedä aikaa. Haku kestää noin 1000 kontaktia/1 minuutti.
- kun raportti on luotu, ilmestyy raportin lataamiseen linkki

![Pääkäyttäjä](/img/ohjeet/paakayttaja9.png)

**Pääkäyttäjätoiminnot**
- Testaa Wordpress-salasanan tarkistamista <!-- ///??? -->

**Muuta tiliöinnin tiliä**
- painikkeesta painamalla muodostuu alla olevan kuvan mukaiset kentät, joista voi muuttaa yksittäisten tiliöintien tiliä

![Pääkäyttäjä](/img/ohjeet/paakayttaja10.png)

**Lataa tiedosto TaikaTilaukselta**
- painikkeen kautta voit ladata TaikaTilauksen sinulle toimittamia tiedostoja

![Pääkäyttäjä](/img/ohjeet/paakayttaja11.png)

**Toimita tiedosto TaikaTilaukselle**
- painikkeen kautta voit lähettää tiedostoja TaikaTilauksella (esim. isot muutokset asiakasrekisterissä)
- ilmoita tuki@taikatilaus.fi tiedoston lähettämisestä

![Pääkäyttäjä](/img/ohjeet/paakayttaja12.png)

## Käyttäjät

![Käyttäjät](/img/ohjeet/kayttajat.png)
*Pääkäyttäjät voivat hallinoida palveluiden käyttäjiä Käyttäjät-välilehdeltä.*

**Käyttäjät**–välilehdellä Pääkäyttäjäksi nimetyt voivat lisätä uusia sekä muuttaa ja poistaa olemassa olevia TaikaTilaus–palvelun käyttäjiä.

**Käyttäjätunnus**-sarakkeen yksittäistä tunnusta klikattaessa avautuu sen tarkemmat tiedot. **Lisää**-painikkeella voit lisätä uuden käyttäjän.

![Käyttäjät](/img/ohjeet/kayttajat5.png)

### Käyttäjien tietojen muokkaaminen

Käyttäjän **perustiedot** täydennetään ensin ja valitaan hänen tarvitsemansa **Rooli** (esim. ilmoitusten Käsittelijä)

- Perustiedot pitää ensin **tallentaa** ennen kuin voi lisätä aktivoitavat toiminnot

Uusille käyttäjille syötetään **perustiedot**:

- Käyttäjätunnus
- Nimi
- Sähköposti
- Matkapuhelin

Käyttäjillä on palvelussa erilaisia **Rooleja** (esim. Myyjä/Käsittelijä) riippuen heidän tarvitsemista toiminnallisuuksista

- **Myyjä**-roolissa olevat käyttäjätunnukset (myyjät) voidaan sitoa asiakaskortilla asiakkaisiin. Tällöin kyseisestä asiakkaasta tulee ilmoitusmyynnin asiakas

Käyttäjälle voi antaa **tietyn tai satunnaisen salasanan**, jonka hän voi itse muuttaa ja tunnukselle voi antaa **voimassaoloajan** (esim. kesäapulaisia varten).

Jos käyttäjällä on otettu käyttöön **kaksivaiheinen tunnistautuminen** (MFA), sen voi kytkeä päälle ja pois käyttäjän tiedoista.

**Sallitut sähköpostiosoitteet** ovat osoitteita mihinkä kyseisellä käyttäjätunnuksella saa lähettää sähköposteja. Jos rajauksia ei ole, jätä tyhjäksi.

![Käyttäjät](/img/ohjeet/kayttajat2.png)

**Käyttäjäoikeudet** voidaan asettaa uudelle käyttäjälle perustietojen täyttämisen ja tallentamisen jälkeen. Käyttöoikeudet eri toimintoihin aktivoidaan **käyttäjäkohtaisesti**. Myös **Ilmoitusmyynti**-sovellus lisätään käyttöön käyttöoikeuksista. 

Käyttöoikeiksia asetetaan aktiiviseksi **siirtämällä ne Valittavat toiminnot -kentästä Valitut toiminnot -kenttään**. Toimintoja voi siirtää kentästä toiseen kenttien välissä olevien **nuolien** avulla.  Valitut käyttöoikeudet vaikutttavat siihen mitä ominaisuuksia käyttäjä voi käyttää ohjelmaa käyttäessään (esim. Laskujen lähetys olessa valituissa toiminnoissa, kyseinen käyttäjä voi lähettää laskuja asiakkaille ohjelman kautta)

**Yrityksen pääkäyttäjä** -kentässä kerrotaan onko muokattava käyttäjä pääkäyttäjä vai ei. Jos haluat yrityksellesi uuden pääkäyttäjän ota yhteyttä TaikaTilaukseen osoitteesta: tuki@taikatilaus.fi.

![Käyttäjät](/img/ohjeet/kayttajat3.png)

Jos käyttäjällä on käyttöoikeus [raportteihin](/docs/ohjeet/yleiset_ominaisuudet/raportit), voit myös määrittää, mitä raportteja käyttäjä voi nähdä siirtämällä valittuja raportteja kenttien välissä olevilla nuolilla. Raportti tulee käyttäjän näkyväksi **siirtämällä se Valittavat raportit -kentästä Valitut raportit -kenttään**.

Voit myös poistaa käyttäjän painamalla **Poista**-painiketta lomakkeen oikeassa alakulmassa.

![Käyttäjät](/img/ohjeet/kayttajat4.png)

## OmaPalvelu

![OmaPalvelu](/img/ohjeet/omapalvelu.png)

**OmaPalvelu**–välilehdellä määritellään asiakaskohtaiset asetukset lehti- ja ilmoitusasiakkaiden OmaPalvelun käyttöä varten

Asetuksiin määritellään kirjautumiseen liittyen mm.

- Sovelluksen nettiosoite ja nimi
- Kirjautumisnäkymien otsikot ja muut ohjetekstit
- Oheistoimintojen ohjauslinkit
- Toimintoihin liittyvien viestien otsikot ja sisältötekstit

### Toiminnot

- **OmaPalvelu2 -toiminnot käytössä** -kentästä aktivoidaan käyttöön OmaPalvelu2-ohjelman toiminnot. Vanhasta OmaPalvelusta ollaan siirtymävaiheessa uuteen palveluun.
- **Asiakasyrityksen tyylisivu** -kenttään ladataan yrityksen tyylisivu
- **Perhetunnus käytössä** -kentästä aktivoidaan perhetunnukset käyttöön
- **Toiminnallisuuksien aktivointi:** kentistä aktivoidaan käyttöön eri toiminnallisuuksia, joista voit lukea enemmän <a href="/docs/ohjeet/omapalvelu#sisältö">täältä</a>

![OmaPalvelu](/img/ohjeet/omapalvelu6.png)

- **Ryhmäkysely** -toiminnon aktivoidessasi tulee OmaPalveluun kysely, johon vastaavat asiakkaat voidaan lajitellaan omaan ryhmäänsä. Näin voit suorittaa esim. arvontoja
- **Supertarjous** -kentän aktivoimalla voit kohdistaa OmaPalvelussa mainontaa tietylle asiakasryhmälle
- **HTML** -kentillä voit tehdä OmaPalveluun omia sisältöjä

![OmaPalvelu](/img/ohjeet/omapalvelu7.png)

### Korttien tekstit

Voit asettaa OmaPalvelun eri toiminnoille otsikon ja infotekstin. Asiakaspalvelu kortille voit asettaa esim. yhteystiedot ja aukioloajat.

![OmaPalvelu](/img/ohjeet/omapalvelu11.png)
![OmaPalvelu](/img/ohjeet/omapalvelu12.png)
![OmaPalvelu](/img/ohjeet/omapalvelu13.png)
![OmaPalvelu](/img/ohjeet/omapalvelu14.png)
![OmaPalvelu](/img/ohjeet/omapalvelu15.png)
![OmaPalvelu](/img/ohjeet/omapalvelu16.png)

### Kirjautumisnäkymien otsikot ja palvelun osoitteet

- **Kirjautumisnäytön Rekisteröidy-linkin osoite** -kenttään asetetaan, minkä osoitteen kautta palveluun rekisröidytään
- **OmaPalvelu-sovelluksen nimi** -kenttään määritetään OmaPalvelu-sovelluksen yrityskohtainen nimi
- **Kirjautumisnäytön kirjautumisen otsikko** -kenttään määritetään kirjaustumisnäyttöön tuleva kirjautumisen otsikko
- **Kirjautumisnäytön rekisteröidy teksti** -kenttään määritetään rekisteröitymiseen tuleva teksti
- **Kirjautumisnäytön kertakirjautumissivun otsikko** -kenttään määritetään kertakirjautumisvaihtoehdolle tuleva otsikko

![OmaPalvelu](/img/ohjeet/omapalvelu8.png)

- **Kirjautumisnäytön kertakirjautumissivun ohje** -kenttään määritetään kertakirjautumista koskeva ohje
- **Kirjautumisnäytön kertakirjautumismeilin otsikko ja viesti** -kenttiin määritetään sisältö sähköpostilla lähetettävään automaattiviestiin, joka lähetetään kun asiakas on pyytänyt kertakirjautumislinkkiä

![OmaPalvelu](/img/ohjeet/omapalvelu9.png)

- **Tietosuojasivun osoite** -kenttään määritetään osoite, josta löytyy sovelluksen tietosuojatiedote
- **REST-API URL** <!-- //???  -->

![OmaPalvelu](/img/ohjeet/omapalvelu10.png)

### Automaattiviestit

- **OmaPalvelun käyttäjätunnuksen luontisähköposti** -kentistä voit asettaa otsikon ja tekstin automaattiviestille, joka lähetään, kun asiakkaalle on luotu tunnus OmaPalveluun
- **Salasanan resetöintisähköposti** -kentistä voit asettaa otsikon ja tekstin automaattiviestille, joka lähetään, kun asiakas on pyytänyt salasanan resetointia

![OmaPalvelu](/img/ohjeet/omapalvelu3.png)

- **Automaattisen korttiveloituksen epäonnistuminen** -kenttiin voit asettaa otsikon ja tekstin viestiin, joka lähetetään, kun automaattinen korttiveloitus epäonnistuu
- **Perhekutsu** -kentistä voit asettaa otsikon ja tekstin viestille, joka lähetetään, kun OmaPalvelun käyttäjä on lisännyt tililleen perhetunnuksia

![OmaPalvelu](/img/ohjeet/omapalvelu4.png)

- **Viestin kiellistys**: jos on tarvetta voit lisätä eri kieliversiota automaattiviesteihin. Viestien kieli määräytyy OmaPalvelun käyttäjän  omasta kiellistys asetuksesta.

![OmaPalvelu](/img/ohjeet/omapalvelu5.png)

<!-- //???  ## Maksumuuri

![Maksumuuri](/img/ohjeet/maksumuuri.png)

Maksumuuri välilehdeltä voit testata maksumuurin toimivuutta ja asettaa osoitteet, josta -->

## Tilauslomake

![Tilauslomake](/img/ohjeet/tilauslomake.png)

Tilauslomake-välilehdellä voit määrittää tilauslomakkeen asetukset. Tilauslomakkeen kautta asiakkaat voivat tilata lehden. 
 
Tilauslomake-asetuksista voit **esikatsella tyhjää tai esitäytettyä ilmoituslomaketta**. Esikatselusta voit testata ilmoituslomaketta ja nähdä, miten muutokset vaikuttavat lomakkeeseen.

### Tilaustuotteen valinta

**Tilaustuotteen valinta** -kohdasta voit asettaa, mitkä ja minkälaiset tuotteet tulevat tilauslomakkeelle näkyviin sekä asettaa mitä tekstejä tilauslomakkeella näkyy tilaustuotetta valitessa.

**Tilaustuotteen valinta otsikko** -kohtaan voit asettaa tilauslomakkeelle otsikon tuotteen valinta kohtaan.

**Valitse tuote-vaihtoehdoista** voit valita voika lomakkeelta tilata digitilauksia, täystilauksisa (tilaus sisältää paperilehden ja digin) vai paperitilauksia. Voit asettaa näille tuotevaihtoehdoille myös **otsikot** ja **infotekstit**, jotka tulevat näkyviin lomakkeelle.

![Tilauslomake](/img/ohjeet/tilauslomake8.png)

![Tilauslomake](/img/ohjeet/tilauslomake9.png)
*Tuotteen otsikko ja info teksti näkyvät lomakkeella ympäröidyissä kohdissa.*

**Tilauslomakkeen tuotteet** -valikosta voit valita, mitä tuotteita asiakas voi tilata tilauslomakkeelta.

![Tilauslomake](/img/ohjeet/tilauslomake3.png)

**Tilauslomakkeen piilotetut tuotteet** -valikosta voit valita tuotteet, jotka ovat tilauslomakkeelta tilattavissa, mutta ovat tilauslomakkeelta piilotettu. Tuotteita voi tilata vaan, jos on tullut lomakkeelle esim. tarjouslinkin kautta.

**Tilauslomakkeen tarjoustuotteet** -valikosta voit valita, mitä tarjoustuotteita lomakkeella näkyy.

**Tilauslomakkeen oletuksena valittu tuote** -valikosta voit valita, mikä tuote näkyy lomakkeella oletuksena, kun lomakkeelle ensin tullaan.

**Laske ja näytä kuukausihinta tuotteille** -valikosta voit valita, mille tuotteille lasketaan ja näytetään kuukausihinta lomakkeella.

![Tilauslomake](/img/ohjeet/tilauslomake12.png)
*Kuukausihinta näkyy tilauslomakkeella ympäröidyissä kohdassa.*

Aktivoimalla **Siirry lehtien tilauslomakkeella ensin tuotelistaan** lomakkeen aloitussivuksi tulee tuotelista.

![Tilauslomake](/img/ohjeet/tilauslomake11.png)
*Tuotelista-näkymä*

**Palaa tuotelistaan -painike** kentän aktivoimalla, lomakkeelle tulee painike, josta voi palata tuotelistaan tuotteen valinnasta.

![Tilauslomake](/img/ohjeet/tilauslomake10.png)

![Tilauslomake](/img/ohjeet/tilauslomake2.png)

### Yhteystiedot

Yhteystiedot-kentässä voit määrittää kysytäänkö asiakkaalta:

- **Maata**
- **Puhelinnumeroa**

Voit myös asettaa ne pakollisiksi tiedoiksi.

![Tilauslomake](/img/ohjeet/tilauslomake4.png)

![Tilauslomake](/img/ohjeet/tilauslomake13.png)
*Aktivoitavat yhteystiedot näkyvät ympäröidyissä kohdissa.*

### Maksutapa 

Maksutapa-kohdasta voit säätää maksutapohin liittyviän asetuksia.

**Valitse laskutustapa -vaihtoehdot** kohdasta voit valita maksutapavaihtoehdoiksi:

- Verkkomaksun
- Sähköpostilaskun
- Paperilaskun

Voit myös valita, mikä näistä maksutavoista on lomakkeella **oletuksena** sekä asettaa lomakkeella näkyvät otsikot ja infoteksit maksutapoihin liittyen.

![Tilauslomake](/img/ohjeet/tilauslomake5.png)

![Tilauslomake](/img/ohjeet/tilauslomake15.png)
*Valitsemasi maksutavat, niiden otsikot ja infokenttä näkyvät ympäröidyissä kohdissa.*

**Valitse verkkomaksupalvelu** kohdasta voit valita mihin verkkomaksupalveluun asiakkaat ohjataan.

![Tilauslomake](/img/ohjeet/tilauslomake6.png)

### Tilauksen hyväksyminen

**Tilausehdot (pakollinen) -valinnan teksti** kohdasta pitää asettaa tilausehtojen hyväksymisen teksti.

**Tilausehdot osoite** kohtaan laitetaan osoite, josta löytyy tilausehtojen tiedot.

**Markkinointivalinnat**-kohdasta voit asettaa, millä kanavilla asiakkaalle markkinoidaan. Vaihtoehtoina ovat:

- Sähköposti
- Kirje
- Puhelu

Voit myös asettaa markkinointilupakentille otsikot.

Tietosuojaselosteen otsikko ja osoite asetetaan viimeisiin kenttiin.

![Tilauslomake](/img/ohjeet/tilauslomake7.png)

![Tilauslomake](/img/ohjeet/tilauslomake14.png)
*Maksutapa-asetukset koskevat tätä kohtaa lomakkeesta.*

### Tilausvahvistus ja uudelleenohjaus

**Viestipohjat**-painikkeesta sinut ohjataan Viestipohjat-välilehteen, josta voit muokata tilausvahvistuksen tekstejä.

Voit asettaa osoitteen, johon asiakas ohjataan tilauksen tekemisen jälkeen, esim. hs.fi.

![Tilauslomake](/img/ohjeet/tilauslomake16.png)

### Tilaajan tunnusten luominen

Tunnusten luomiseen on kaksi keinoa. Kun tunnukset on luotu, ne siirtyvät näkyislehtipalveluun, jos sellainen on käytössä.

1. Kun asiakas tekee tilauksen **TaikaTilauksen tilauslomakkeen kautta**, saa hän sähköpostiinsa vahvistusviestin, jonka kautta hän voi luoda tunnuksensa.

![Tilauslomake](/img/ohjeet/tunnus8.png)

![Tilauslomake](/img/ohjeet/tunnus5.png)

Linkin kautta asiakas voi määrittää salasanansa.

![Tilauslomake](/img/ohjeet/tunnus6.png)

![Tilauslomake](/img/ohjeet/tunnus7.png)

2. TaikaTilauksen käyttäjä voi luoda asiakkaalla tunnuksen.

![Tilauslomake](/img/ohjeet/tunnus.png)

- Tunnuksen **käyttäjätunnus on aina sähköposti**, voit myös valita onko luomasi tunnus päätunnus vai alitunnus (jos perhetunnukset ovat käytössä).

![Tilauslomake](/img/ohjeet/tunnus2.png)

- Kun olet luonut tunnuksen, voit lähettää asiakkaalle sähköpostin salasanan luomiseen **Lähetä uusi tunnnus -sähköposti** -painikkeesta. Asiakas voi näin aktivoida tunnuksensa.

![Tilauslomake](/img/ohjeet/tunnus3.png)

![Tilauslomake](/img/ohjeet/tunnus4.png)

*Asiakas voi asettaa salasanansa saamastaan sähköpostista.*

## Varhaisjakelu

![Varhaisjakelu](/img/ohjeet/varhaisjakelu.png)

**Varhaisjakelu**–näkymässä ylläpidetään varhaisjakelussa käytettävää osoitteistoa
- Osoitteisto päivitetään käyttöönoton yhteydessä ja tarvittaessa muulloinkin sähköisen tiedostosiirron avulla

Varhaisjakeluun liittyvät osoitteistot ja nippujen tiedot määritellään asetuksissa:
- Postin varhaisjakelurekisteri ja käytettävät nippunumerot
- Vakioniput
- Varhaisjakelun reitit
- Peittojakelu
- Lehdetön peittojakelu
- Yhdistettävät niput

### Postin varhaisjakelurekisteri ja käytettävät nippunumerot

![Varhaisjakelu](/img/ohjeet/varhaisjakelu2.png)

Tähän välilehteen syötetään Postilta saatu varhaisjakelun **katurekisteri**. Kadut ja niiden katunumerot on kohdistettu piireihin. Katurekisteri ladataan leikepöydän kautta CSV-muodossa. 

Osoitteet **syötetään** riveittäin muodossa: Paikannimi;Parittomat;Parilliset;Postinumero;Postitoimipaikka;Reittitunnus (nippunumero). 

**Postin varhaisjakeluosoitteiston käytettävät piirinumerot (nippunumerot)** -kenttään syötetään piirinumerot, joilla varhaisjakelua halutaan käytettävän. Piirinumerot **syötetään** omille riveilleen muodossa: Nippunumero;Lehti.

### Vakioniput

![Varhaisjakelu](/img/ohjeet/varhaisjakelu3.png)

Varhaisjakelu –näkymässä ylläpidetään myös **Vakioniput**–rekisteriä, jossa listataan
- mm. lehden toimistoon vietävän nipun koko
- Painon varalehtien nipun koko
- Muut vakioniput ja niiden sisältämät lehtimäärät

Yksittäiset vakioniput **listataan** tekstikenttään 
- jokainen omalle rivilleen kentät puolipisteillä eroteltuina
- muodosssa Lehti;Reitti;Jättöpaikka1;Jättöpaikka2;Nippu;Kuljetuksenohjaus1;Kuljetuksenohjaus2;Vastaanottaja;Osoite;Postinumero+Postitoimipaikka;Jakelu(VARHAIS/PÄIVÄ);Kpl
- sarakkeita on 12kpl ja niiden järjestys sekä maksimi pituus näkyy ohjeen mallirivistä

Muutokset (esim. lisälehtiä nippuun) päivitetään kyseisen vakionipun riville ja tallennetaan
- Mikäli muutos on tilapäinen, tulee se palauttaa päivittämällä muutostieto takaisin (normimäärään) poikkeavan postituksen jälkeen

#### Nippujen päivitys

Voit muuttaa kaikkien vakionippujen tietoja kerrallaan / lisätä vakionippuja viemällä tiedot Exceliin **Vie Exceliin** -painikkeesta.

![Varhaisjakelu](/img/ohjeet/vakionippu2.png)

Muuta nippujen tietoja, poista nippuja ja/tai lisää nippuja Excelissä. 

![Varhaisjakelu](/img/ohjeet/vakionippu3.png)

Tuo päivitetyt niput järjestelmään **Tuo Excelistä** -painikkeella.

![Varhaisjakelu](/img/ohjeet/vakionippu4.png)

Kopioi niput Excelistä ja liitä ne järjestelmässä olevaan kenttään. Lopuksi klikkaa **Lue Excel sisään** -painiketta.

![Varhaisjakelu](/img/ohjeet/vakionippu5.png)

Niput ovat tämän jälkeen päivittyneet

![Varhaisjakelu](/img/ohjeet/vakionippu6.png)

### Varhaisjakelun reitit

![Varhaisjakelu](/img/ohjeet/varhaisjakelu4.png)

Tälle välilehdelle syötetään varhaisjakelun reitit. 

Reitit syötetään muodossa: Kuljetus nro (Reitti);Jättöpaikka;Piiri nro (Nippu);Piirinimi;Kuljetusnimi;Jättöpaikan osoite

### Peittojakelu

![Varhaisjakelu](/img/ohjeet/varhaisjakelu5.png)

Kun tehdään lehden **peittojakelua** (Lehti + lisälehti), syötetään tälle välilehdelle peittojakelun reitit. Postituslistan luontivaiheessa ohjelma hakee kyseiseen lehteen ja ilmestymiseen lisättävät lisälehdet ja lisää ne postituslistalle.

Peittojakelun reiti syötetään jokainen omalle rivilleen eri kentät puolipisteillä eroteltuina.

Sarakkeiden järjestys: Lehti;Piiri nro (Nippu);Lehden ilmestymispäivä;Kpl

### Lehdetön peittojakelu

![Varhaisjakelu](/img/ohjeet/varhaisjakelu6.png)

Kun tehdään **vain lisälehden peittojakelu**, syötetään tälle välilehdelle peittojakelun reitti. Peittojakelun voi lisätä postitukseen painamalla **Lisää lehdetön peittojakelu postitukseen** -painiketta.

Peittojakelun reiti syötetään jokainen omalle rivilleen eri kentät puolipisteillä eroteltuina.

Sarakkeiden järjestys: Lehti;Reitti;Jättöpaikka1;JÄTTÖPAIKKA2;Nippu;Kuljetuksenohjaus1;Kuljetuksenohjaus2;VASTAANOTTAJA;Osoite;POSTINUMERO+POSTITOIMIPAIKKA;Lehden ilmestymispäivä;Kpl

### Yhdistettävät niput

![Varhaisjakelu](/img/ohjeet/varhaisjakelu7.png)

**Yhdistettävät niput** -välilehdellä voidaan yhdistää varhaisjakelun pieniä nippuja yhteen. 

Ohjelma kerää postituslistaan annettujen nippujen osoitteet samaan annettuun nippuun ja lisää kyseisen nipun kansilehdelle maininnan siitä että nippu sisältää useamman nipun tietoja.

**Syötä** kunkin yhdistetyn nipun tiedot allekkain muodossa Lehden nimi TAB Nippunumero. Muitakin sarakkeita voi olla mutta niitä ei tulkita. Ensimmäistä nippunumeroa käytetään Ferakissa ja siihen yhdistetään muut niput. Mikäli ensimmäisessä nippunumerossa **ei ole yhtään lehteä käytetään seuraavaa**.

Erottele yhdistettävät niput tyhjällä rivillä. Tuo tiedot Excelistä jolloin **Lehden nimen ja Nippunumero** -sarakkeiden väliin tulee TAB eli tabulaattori.

