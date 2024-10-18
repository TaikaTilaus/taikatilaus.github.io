---
sidebar_position: 2
---

# Asetukset

## Asetuksien hallinnointi

Käytön yhteydessä hyödynnetään tiettyjä yleisiä perustietoja, joiden määrityksiä käytetään oletuksena eri toiminnoissa.

Vasemmasta valikosta klikataan **Asetukset**–linkkiä, niin saadaan näkymä, jossa sovelluksen perustietoja voi luoda/muokata.

![Asetukset - välilehti](/img/ohjeet/asetukset.png)
*Asetukset-välilehti päävalikossa*

Uuden näkymän yläreunassa on **valikko**, josta perustietoja päivitetään osa-alueittain.

![Asetukset - päävalikko](/img/ohjeet/asetukset1.png)
*Asetuksien päävalikko*

## Tilaustuotteet

### Yleistietoa

**Tilaustuotteet**–välilehdeltä voidaan tarkastella olemassa olevien tuotteiden tietoja, ja **muokata ja lisätä yksittäisiä tuotteita**, joita asiakkaille myydään (esim. Autolehti Kestotilaus 12 kk).

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
- **Jatkotuote ID**
- **PortalID**
- **Piilotettu-sarake**, josta näkee onko tuote aktiivinen vai piilotettu.

Tuotteita lisätään painamalla **Lisää tilaustuote** –painiketta. Jo valmiiksi olemassa olevia tuotteita pääset muokkaamaan painamalla **tuotenumeroa**.

![Tilaustuotteet-näkymä](/img/ohjeet/asetukset3.png)
*Tilaustuotteet-välilehdeltä voit mm. hakea ja muokata olemassa olevia tuotteita, tai lisätä uuden tuotteen.*

Taulukon sarakkeiden **otsikoita** klikkaamalla voi tiedot järjestää uudelleen (esim. aakkosjärjestyksessä tai pienimmästä suurimpaan).

### Tuotteiden haku

Oletuksena välilehti näyttää **kaikki aktiiviset tuotteet** (Piilotet tuotteet saa näkyviin listaukseen aktivoimalla **Näytä piilotetut**-kentän, joka sijaitsee Hae-nappulan vieressä.)

Olemassa olevia **tuotteita voi hakea** valitsemalla hakukriteerin ja syöttämällä hakuehdon sille tarkoitettuun kenttään.

**Esimerkki**: haet tuotteita, jotka ovat kestotilauksia.

- Valitse sopiva **hakukriteeri**
- Kirjoita "kestotilaus" **Hakuehto**-kenttään
- Paina **Hae**
ja saa tuotelistauksen näkyviin kaikista kestotilaustuotteista.

![Tilaustuotteet - tuotteiden hakeminen](/img/ohjeet/asetukset2.png)

Klikkaamalla aktiiviseksi **Näytä osamaksuhinnat** -kentän haun yhteydessä, saat tuotelistaukseen näkyviin tuotteiden osamaksuhinnat eri erissä, jos ne on erikseen määritelty.

![Tilaustuotteet - Näytä osamaksuhinnat](/img/ohjeet/tilaustuotteet-osamaksu.png)

Klikkaamalla aktiiviseksi **Laske voimassa olevat tilaukset** -kentän haun yhteydessä, laskee ohjelma uuteen kenttään kaikki yksittäisten tuotteiden voimassa olevat tilaukset.

![Tilaustuotteet - Lasku voimassa olevat tilaukset](/img/ohjeet/tilaustuotteet-voimassa.png)

### Tuotteen lisääminen tai muokkaaminen

Olemassa olevan tuotteen käsittelylomake ja Tuotteen lisääminen -lomake näyttävät samoilta. Niiden tietoja lisäämällä/muokkaamalla, voi tuotteiden tietoja hallita.

Lomakkeelle lisätään/muokataan **tuotteen perustietoja**, kuten

- mihin **Tuoteryhmään** ja **Kampanjaan** tuote kuuluu
- asiakkaille näkyvä **tuotenimi**, joka näkyy esim. lehden tilauslomakkeella tai laskussa. Jos tämä kenttä on tyhjä, käytetään oletuksena tuotenimeä.
- **Hinta** ja **Tili** -tiedot
- **Tilaustyyppi** ja **Kesto**
- **Digitiedot** (esim. lehden digitaalisuus)
- Tuotteen **käyttöajat**

### Lomakkeeseen lisättävät tiedot

- **TuoteID**: jokaisella tuotteella on ohjelman automaattisesti generoima TuoteID.
- **Tuotenumero**-kenttään lisätään tuotenumero, joka auttaa mm. tuotteiden ryhmittelyssä
- **Tuoteryhmä**-kenttään lisätään mihin tuoteryhmään tuote kuuluu (esim. jos tilaustuotteena on lehti, laitetaan lehden nimi tähän kohtaan)
- **Kampanja**-kenttään voi lisätä mihin kampanjaan tuote kuuluu, jos mihininkään.
- **Tuotenimi**-kenttään laitetaan tuotteen sisäinen tuotenimi (esim. Kestotilaus III; Määräaikainen, digi)
- **Ulkoinen tuotenimi**-kentässä määritellään, miltä tuotenimi näyttää (esim. tilauslomakkeella tai laskussa) asiakkaalle, joka tilaa lehteä.
- **Lisätiedot**-kenttään voi kirjata tuotteelle tärkeitä lisätietoja, joita haluat muiden käyttäjien tietoon.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen.png)

- **Hinta veroton, ALV prosentti ja Hinta verollinen** –kentissä määritellään tuotteelle oletushintatiedot, joita voi tarvittaessa myös muuttaa tilauksen luomisen jälkeen.
- **Hinta veroton** -tieto on aina oltava viidellä (5) desimaalilla, jonka ohjelma pyöristää automaattsiesti laskua luotaessa.
- Veroton/verollinen hintoja voi muuttaa ja suorittaa muutetun tiedon avulla uudelleenlaskennan **Laske veroton hinta verollisesta / Laske verollinen hinta uudelleen** -painikkeiden avulla.
- **Erämaksut**: Jos lasku maksetaan erissä, yleensä ohjelma laskee erien hinnat automaattisesti, mutta erien hinnat voi myös erikseen määritellä tähän lomakkeeseen ne täyttämällä.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen2.png)

- **Tilaustyyppi** tarvitaan, mikäli tuotteen tilaus halutaan jaettavaksi postitse. Postituslistalle kerätään VAIN Kesto- ja Määräaikaiset tilaukset. Jos halutaan, että ko. tuote EI NOUSE postituslistalle, valitaan tyypiksi Ei määritelty (esim. jos lehti ilmestyy digitaalisena). Määräaikaisen tarjoustuotteen Tilaustyyppi tulee olla Kesto, mikäli tuote halutaan nousevan automaattisesti jatkettavien tilausten Kestojatko-listalle.
- **JatkotuoteID** –tieto kertoo esim. tarjoustuotteella sen tuotteen ID-numeron, jolla tilausta jatketaan automaattisesti tarjousajan päätyttyä (esim. normaali Kestotilaus). 
- **Tilauksen kesto** –kentässä määritellään tuotteen pituus oletuksena kuukausissa.
Keston yksikön voi tarvittaessa muuttaa valikosta, jossa vaihtoehtoina päivä/viikko/vuosi.
Kaikissa Kestotilaustyyppisissä tuotteissa pituuden on oltava joku muu kuin 0, sillä muuten ne eivät nouse automaattiseen Kestojatko-ajoon mukaan.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen3.png)

- **Myyntitili, ALV velkatili** ja **Myyntisaamiset**-tili määritellään **Tilit** -välilehdellä ja ne tulee merkitä kaikille laskutettaville tuotteille. Laskua luotaessa tilöintitilit haetaan tuotekortilta ja niiden avulla muodostetaan laskulle tarvittavat tiliöintirivit, joihin maksetut suoritukset myöhemmin liitetään kirjanpitoa varten.
- **Laskuerien lukumäärä** -kenttään määrätään, kuinka monessa erässä kyseisen tuotteen voi maksaa (ohjelma automaattisesti jakaa laskutuspyynnöt eriin tilauksen tallennuksen yhteydessä)

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen4.png)

- **Kotimaan/ulkomaan tilaus** –valinta määrittelee tuotteen tilauksen näkyvyyden ja käsittelyn mm. Postituslistalla (lähetetäänkö ulkomaille eri reittiä).
- **Digituote**–valinta määrittelee tuotteen olevan käytettävissä vain netin kautta esim. Näköislehti.
- **Oikeuttaa digipalveluun** –valinta määrittelee tuotteen tilaukseen sisältyvän myös oikeus käyttää sivuston erillistä Digipalvelua.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen5.png)

- Tuotteelle on määriteltävä **Valittavissa aikavälillä** -aikarajaus. Jos tuote halutaan olevan aina valittavissa, tulee päättymispäivämäärän olla riittävän kaukana tulevaisuudessa (esim. 31.12.2050). Valittavuus tarkoittaa, että tuote on valittavissa ohjelman valikoissa.
- Tuotteelle määritellään myös **Tilaus mahdollinen aikavälillä** -aikarajaus, joka rajaa sen käytettävissä olevan tilausjakson. Yksittäisen tilauksen alku- ja loppupäivät tulee mahtua annetun aikarajoituksen sisään. Mikäli tuote halutaan olevan aina valittavissa, tulee päättymispäivämäärän olla riittävän kaukana tulevaisuudessa (esim. 31.12.2050), koska ’toistaiseksi voimassaolevaa’ tuotetyyppiä ei ole käytettävissä
- **Tilauksen päättymisaika tuotteesta** -kentän aktivoimalla tilauksen päättymisaika määräytyy tuotteen keston mukaan. Tilaus mahdollinen aikavälillä -määrää mahdollisen aloitusajan, mutta ei päättymisaikaa.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen6.png)

- **Tuote on piilotettu:** Tuotteen voi piilottaa, milloin sitä ei näe hakuja tehtäessä eikä sitä voi valita uutta tilausta tehtäessä.
- **Digipalvelu**–kentän avulla tuotteita voi ryhmitellä saman Digipalvelu-ryhmän alle. Digipalveluissa voidaan tutkia onko tilaajalla aktiivisena tiettyä Digipalvelua ja täten näyttää muun muassa wwww-sivun sisältö sen mukaan.
- **Stripe tuotetyyppi ja PriceID**: Stripe-palveluun määritellyn tuotteen tyyppi ja API PriceID
- **SKU-koodi**: Tuotteen yksilöivä koodi mm. kirjamyynnissä.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen7.png)

## Tilauspaketit

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilauspaketti-etusivu.png)

**Tilauspaketit**-välilehdellä voit muodostaa eri tilaustuotteista tilauspaketteja. Tilauspaketille voi antaa erillisen hinnan, jolloin tilaustuotteiden yksittäistä hintaa ei huomioida.

Voit hakea tilauspaketteja valitsemalla **hakukenttään hakukriteerin ja syöttämällä hakuehdon**.

**Näytä piilotetut** -kentän aktivoimalla saat näkyviin piilotetut tilauspaketit.

**Näytä vain tarjouspaketit** -kentän aktivoimalla tulee listaukseen näkyviin vain tarjouspaketit.

**Näytä vain hinnalliset** -kentän aktivoimalla tulee listaukseen näkyviin paketit, joille on asetettu hinta.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilauspaketti2.png)

### Tilauspakettien lisääminen

**Olemassa olevaa** tilauspakettia voit muokata painamalla **pakettinumeroa**. Uuden paketin voit lisätä painamalla **Lisää tilauspaketti** -painiketta.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilauspaketti.png)

- Tilauspaketille muodostuu uniikki **TilauspakettiID**, kun se on tallennettu
- Paketille annetaan **pakettinumero**, **pakettiryhmä** (esim. BlackWeek) ja **paketin nimi**
- **Paketin ulkoinen nimi** on se nimi, joka näkyy asiakkaille esimerkiksi tilauslomakkeella
- Paketille voidaa antaa **hinta**, jolloin siihen kuuluvien tilaustuotteiden hinnat jätetään huomiotta hintaa muodostaessa
- Voit myös asettaa paketin hinnan kun se maksetaan **useassa erässä**
- Paketille asetetaan **aikaväli**, milloin se on valittavissa tilauslomakkeen valikosta
- **Pakettityyppi** -kenttä on informatiivinen. Tilaustuotteen tyyppi määrittää millä tilauksen tyypillä (kestotilaus, määräaikainen) tilaus muodostuu.
- Paketille annetaan **tilausjakso**, joka määrittää kuinka kauan siihen kuuluvat tilaukset kestävät (esim. 12 kuukautta)
- Jos paketti kuuluu **kampanjaan** voidaan sille asettaa **KampanjanNumeroa ja nimi**
- **Lisätietoihin** voi kirjoitaa oleellista lisätietoa paketista
- Jos paketti on **tarjouspaketti**, joka jatkuu tarjousjakson jälkeen normaalilla tilauspaketilla, laitetaan lomakkeeseen sen paketin **PakettiID**, millä tilaus jatkuu
- Kun **Piilotettu**-kenttä on aktivoitu, on paketti piilotettu hausta ja valintavalikoista
- **Pakettiin kuuluvat tuotteet** lisätään antamalla niiden **TuoteID:t** pilkulla eroteltuina (esim. 2575, 2548)

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilauspaketin-lisaaminen.png)

## Erillistuotteet

![Erillistuotteet-näkymä](/img/ohjeet/erillistuotteet.png)
*Erillistuotteet-välilehdellä voit muokata ja lisätä erillistuotteita, ja tarkastella jo olemassa olevia erillistuotteita.*

Erillistuotteita ovat tuotteet, jotka EIVÄT sovi **tilaus- tai myyntituotteisiin**. Esimerkkejä erillistuotteista ovat Laskutuslisä, Paperilaskutuslisä, jne.

**Erillistuotteet**-välilehdellä voit muokata ja lisätä erillistuotteita. Olemassa olevaa erillistuotetta voidaan muokata painamalla sen tuotenumeroa. Uuden erillistuotteen voi lisätä painamalla **Lisää erillistuote** -painiketta.

Erillistuotteelle lisätään:

- **Tuotenumero**-kenttään tuotenumero, joka auttaa mm. tuotteiden ryhmittelyssä
- **Tuoteryhmä**-kenttään mihin tuoteryhmään tuote kuuluu (esim. oheistuote)
- **Tuotteen nimi** -kenttään tuotteen nimi (esim. Lippalakki M)
- Tarvittaessa **lisätietoja**
- **Yksikkö** (esim. kpl)
- Veroton **hinta**
- **ALV-prosentti** erillistuotteen tyypin mukaisesti
- Voit myös antaa **verollisen hinnan** ja laskea siitä verottoman hinnan (muista lisätä ALV)
- **Myyntitili, ALV velkatili** ja **Myyntisaamiset**-tilit
- Voit myös **piilottaa** tuotteen välilehdeltä ja valikoista aktivoimalla **Tuote on piilotettu** -kentän

![Erillistuotteet- Tuotteen muokkaus](/img/ohjeet/erillistuotteet2.png)

## Tilit

**Tilit**–välilehdellä voit tarkastella ja muokata olemassa olevia tilejä, ja lisätä uusia tilejä

- kun klikkaat tietyn tilin **tilinumeroa** pääset muokkaamaan olemassa olevan tilin tietoja. Voit myös poistaa tilin.
- kun klikkaat **Lisää tili** –painiketta, pääset kirjaamaan uuden tilin tiedot

Tilaus-/Myyntituotteilla käytetään tällä välilehdellä määriteltyjä tilitietoja.

![Tilit-välilehti](/img/ohjeet/tilit.png)
*Tilit-välilehdeltä voit muokata ja lisätä tilejä*

### Tilien lisääminen ja muokkaaminen

Kun tiliä lisätään tai muokataan, tarvitaan seuraavat tiedot:

- **Tilin numero**
- **Tilin nimi**
- Onki tili **Pankkitili, Myyntili, vai Kulutili**
- **Tilin tyyppi** tiliöintejä varten, joka määritellään **lyhenteellä** (PA=Pankki, MS=myyntisaamiset, ALV, MY=Myynti, PY=Pyöristys, LT=Luottotappio, MUU=jokin muu tili)

![Tilit-välilehti - Tilien lisääminen](/img/ohjeet/tilin-lisaaminen.png)

**Tilin käsittely** -lomake on muuten samannäköinen, paitsi että siinä on myös vaihtoehto tilin poistamiseen.

### Suoriteperusteinen kirjanpito

Palvelussa käytetään **Suoriteperusteista kirjapitoa**, jossa
kulut ja tulot kirjataan kirjanpitoon sen mukaan milloin kulut syntyvät eli **laskupäivän perusteella**

- esim. myyntilasku, joka tehdään tammikuun lopussa ja maksetaan maaliskuun alussa
- Tämä myynti näkyy tuloslaskelmassa suoriteperusteisesti tammikuussa (eikä maaliskuussa kuten maksuperusteisesti)

Suoriteperusteisessa kirjanpidossa kulu kirjataan

- laskupäivän mukaan **kulutilin debitteihin** ja **ostovelkojen kreditteihin**
- Myöhemmin, **kun lasku maksetaan** kirjaus menee **pankkitilin kreditteihin ja ostovelkojen debitteihin**
- Maksun yhteydessä ostovelat siis nollautuvat

**Myyntien** osalta kirjaukset menevät samalla logiikalla, mutta **debitit ja kreditit ovat päinvastaiset**

- Myyntilasku kirjataan laskun päivämäärän mukaan kredittiin (esim. 1502 Lehtitilaussaamiset TaikaVakka) ja myyntisaamisten (saamiset asiakkailta) debittiin (esim. 30090 Suomi vuositilaus TaikaVakka alv 10% ja 2470 Myynnin 10% ALV-velka)
- Myöhemmin, kun asiakas suorittaa laskun pankkitilille, kirjaus menee pankkitilin debittiin (esim. 1710 Nordea) ja myyntisaamisten kredittiin (esim. 1502 Lehtitilaussaamiset TaikaVakka)
- Suorituksen yhteydessä myyntisaamiset siis nollautuvat

![Suoritukset esimerkki](/img/ohjeet/tiliointi.png)
*Esimerkki suorituksista*

## Laskutekstit

**Laskutekstit**-välilehdeltä voi luoda laskuille lisättäviä tekstipohjia, jotka ovat laskun lähetyksen yhteydessä vielä muokattavissa. Valmiit viestipohjat voi lisätä Laskulle, Maksumuistutus #1, Maksumuistutus #2 ja Hyvityslaskulle.

![Laskutekstit-välilehti](/img/ohjeet/laskutekstit.png)

*Laskutekstit-välilehdeltä voi luoda laskuille tekstipohjia.*

Välilehdeltä voi lisätä toisistaan poikkeavia tekstejä tilaustuotteiden, erillistuotteiden ja ilmoitusmyynnin laskuille sekä lisätä lähetystiedot sähköpostin kautta lähetettävien laskujen sähköpostipohjaan.

TIlauslaskuille voi lisätä:

- tekstin laskulle
- tilauslaskun laskutekstin
- maksumuistutuksien tekstit

![Laskutekstit-välilehti](/img/ohjeet/laskutekstit2.png)

Sähköpostin lähetystietoihin voi lisätä:

- sähköpostiosoitteen, josta lasku lähetetään
- otsikon
- laskuviestin
- maksumuistutuksien otsikot ja viestit
- hyvityslaskun otsikon ja viestin

![Laskutekstit-välilehti](/img/ohjeet/laskutekstit3.png)

Viesti-kenttien kokoa voi laajentaa oikeasta alakulmasta kursorilla vetämällä.

Ohjelma valitsee automaattisesti oikean sähköpostiviestin riippuen minkä lehden lasku on kyseessä ja mikä on kyseisen laskun muoto.

## Viestipohjat

**Viestipohjat** välilehdeltä voi muokata **tilaus/ilmoitusvarausvahvistuksien viestipohjia**. Voit muokata:

- Lähettäjän sähköpostia
- Sähköpostin piilokopion vastaanottajaa
- Sähköpostin otsikkoa
- Sähköpostin viestiä

![Viestipohjat-välilehti](/img/ohjeet/viestipohjat.png)
*Viestipohjat välilehdellä voit muokata tilaus/myyntivahvistuksien tekstejä*

Klikkaamalla **Näytä mallipohja** -painikkeita, saat näkyviin esimerkkiviestin, jonka pohjalta voit laatia oman viestisi.

![Esimerkkiviesti](/img/ohjeet/esimerkkiviesti.png)

*Esimerkkiviesti toimii mallina viestipohjalle*

## Kanavat

**Kanavat**–välilehdellä määritellään kanavat, joiden alle myyntituotteet ryhmitellään. Kanavia voi olla LEHTI, NETTI, UUTISKIRJE, ILMOITUSTAULU, RADIO, ja Vaihtoilmoitus-kanavat.

**Kanavat** erotellaan kentän listauksessa pilkuilla esim. LEHTI,UUTISKIRJE,RADIO. Kanavan voi nimetä **myös lehtikohtaisesti** esim. Autolehti,Mopolehti,Bike,Suunnistus.

Määritellyt kanavat lajitellaan ohjelmaan koodattuihin **kanavatyyppeihin**, koska eri kanavilla on **erityyppisiä ominaisuuksia** esim.
- lehdillä olevat palstamillimetrit
- radiomainoksilla CPM-arvo
- tai Lehti-kanavalla julkaisut ovat lehtien numeroita, mutta Radio-kanavalla julkaisu voi olla vuosikohtainen

![Kanavat-välilehti](/img/ohjeet/kanavat1.png)
*Kanavat lajitellaan eri kanavatyyppeihin*

**Lisäksi määritellään LEHTI-tyyppisen kanavan ilmoitusosastot**

- Jokainen kanavan ilmoitusosasto kirjoitetaan **omalle rivilleen puolipisteillä (;) eroteltuina**
- Uusi ilmoitusosasto lisätään muodossa: **tunniste;kanavan nimi;ilmoitusosasto;hinta**. Esim. 1;LEHTI;etusivu;1,55

![Ilmoitusosastot](/img/ohjeet/kanavat2.png)
*LEHTI-tyypin kanaville määritellään ilmoitusosastot*

## Myyntituotteet

**Myyntituotteet**–välilehdellä voit tarkastella ja muokata olemassa olevia myyntituotteita sekä lisätä uusia. Myyntituote on **sovelluksessa myytävä asia**, esim. lehden etusivun mainos/ilmoitus. Piilotetut myyntituotteet saa näkyviin klikkaamalla **Näytä piilotetut** -kentästä.

Jo luotuja myyntituotteita pääset katsomaan ja muuttamaan klikkaamalla **Numero**–sarakkeesta tietyn myyntituotteen numeroa. **Lisää**–painiketta painamalla (oikea yläkulma) voit lisätä uuden myyntituotteen.

![Myyntituotteet](/img/ohjeet/myyntituotteet.png)

Myyntituotteelle lisätään siihen liittyviä perustietoja, kuten

- Kanava ja Julkaisu, jossa se esitetään
- Ryhmä ja Nimi, esim. ilmoitusosio ja sen palstakoko (1x10 ppm)

Lisäksi voidaan liittää oletuskäsittelijä, joka saa tiedon mm. aineistojen tulosta.

![Myyntituotteiden muokkaus](/img/ohjeet/myyntituotteen-muokkaus.png)

## Paketit

**Paketit**–välilehdellä voit luoda yksittäisistä myyntituotteista **erillishinnoiteltuja tuotepaketteja** ja tarkastella/muokata jo olemassa olevia paketteja. **Lisää**–painiketta painamalla pääset lisäämään uuden paketin, ja olemassa olevan paketin **numeroa** painamalla pääset sitä muokkaamaan.

![Paketit-välilehti](/img/ohjeet/paketit.png)
*Paketit välilehdellä voit muokata olemassa olevia paketteja ja luoda uusia.*

### Paketin lisääminen

Kun pakettia lisätään, sille kirjataan:

- **Numero**: numero, jolla paketti ryhmitellään ja jolla sitä voidaan hakea
- **Nimi**: myyntipaketin nimi, esim. Black Week I
- **Hinta**: paketin veroton hinta (annettaessa hinnan, jätetään yksittäisten myyntituotteiden hinnat huomiotta)
- **Lisätiedot**: paketille oleellisia lisätietoja (esim. milloin pakettia myydään)
- **Myyntituotteet**: tuotteet, jotka paketti sisältäää

Myyntituotteita **lisätään** pakettiin valitsemalla yksittäin/kaikki vasemmasta laatikosta (Kaikki myyntituotteet) ja siirtämällä valinnat oikeanpuoleiseen laatikkoon (Pakettiin valitut tuotteet) **käyttämällä välissä olevia nuolia**.

![Pakettien lisääminen](/img/ohjeet/paketin-lisaaminen.png)
*Tuotteita siirretään/poistetaan paketilta nuolien avulla.*

Yksittäisiä myyntituotteita voi tarvittaessa kopioida **Monista**–painikkeen avulla.
Esim. jos sama myyntituote on useammassa eri lehdessä

## Julkaisut

**Julkaisut**–välilehdellä voi muokata ja lisätä julkaisuja. **Julkaisu on tuote**, jossa mainos tai ilmoitus esitetään, kuten lehti, radiomainos, uutiskirje, www-sivu jne. **Lisää**–painikeella voidaan lisätä yksittäisistä julkaisuja eri kanavia varten. Julkaisuja pääsee muuttamaan/poistamaan klikkaamalla Nimi–sarakkeesta löytyvää yksittäistä nimeä.

![Julkaisut](/img/ohjeet/julkaisut.png)
*Julkaisut välilehti*

### Julkaisun lisääminen

**Julkaisulle määritellään** mm. siihen liittyvä

- Kanava (esim. tietty lehti, nettisivu, mainostaulu), joka valitaan valikosta
- Nimi ja Numero, jotka ovat vapaasti määriteltävissä
- Teema, joka on vapaasti määriteltävissä
- Sivumäärä
- Ilmestymispäivä (jolloin esim. lehti jaetaan)
- Aineiston viimeinen käsittelypäivä (mihin mennessä siihen halutut ilmoitusaineistot pitää olla toimitettuna)

**Valmiin julkaisun** (PDF tiedosto) voi ladata palveluun, jolloin se tulee välittömästi näkyviin **OmaPalveluun** kaikille ko. julkaisun tilanneille asiakkaille ja/tai kaikille niille, jotka ovat siihen ostaneet mainos-/ilmoitustilaa

![Julkaisujen lisääminen](/img/ohjeet/julkaisun-lisaaminen.png)
*Julkaisun tiedot*

## Irtonumerot

**Irtonumerot**–välilehdellä lisätään lehtien irtonumeroiden saajat
- vain postituslistaan ja
- tilaus- ja asiakasnumeroksi asetetaan 999999

Irtonumeroiden **lisäyksessä syötetään** jokainen lehden irtonumero **omalle rivilleen puolipisteillä** eroteltuina muodossa:
- Lehden nimi;
- Lehden ilmestymispäivä;
- Nimi (Suku- ja etunimi);
- Yritys;
- Katuosoite;
- Katunumero;
- Porras;
- Huoneisto;
- Postinumero;
- Postitoimipaikka

![Irtonumerot](/img/ohjeet/irtonumerot.png)
*Irtonumerot-välilehdelle lisätään irtonumerojen saajat*

## Vastaanottoilmoitukset

**Vastaanottoilmoitukset**–välilehden listauksen avulla vertaillaan vastaanotetut valtuutukset asiakasrekisteristä löytyviin asiakaskortteihin.

RI-sanomassa saadut Vastaanottoilmoitusten **Koodit** ovat
0 = Lisäys
1 = Muutos
2 = Poisto

Ja Vastaanottoilmoitusten Suoramaksujen **Tyypit** ovat
00 = eLasku
01 = Suoramaksu

Tarvittaessa **päivitetään asiakkaan** IBAN/BIC tiedot asiakaskortin **Laskutustietoihin.**

**Käsittele vastaanottoilmoitukset** –painikkeella muutokset päivittyvät vertailulistaukselle

Oletuksena näitä vastaanottoilmoituksia haetaan palveluun 6 h välein.

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset.png)

## Muut asetukset

**Muut asetukset** –välilehdellä voi lisätä asiakasryhmiä ja -rooleja, sekä tilauksien katkaisujen syitä.

![Muut asetukset](/img/ohjeet/muut-asetukset.png)
*Muut asetukset-välilehti*

### Asiakasryhmät ja roolit

Voit luetella kenttiin erilaisia **Asiakasryhmiä ja Asiakasrooleja**, jotka
- näkyvät Asiakaskortin valintalistalla
- ovat käytettävissä erilaisissa hauissa (esim. halutaan lähettää sähköpostia asikkaille, joiden rooli on johtaja asiakkuusfirmassa)

Tämä on hyödyllistä esimerkiksi kohdennetun markkinoinnin kannalta.

![Ryhmittely](/img/ohjeet/ryhmittely.png)
*Asiakasryhmän ja Asiakasroolin voi asettaa asiakkaalle asiakaskortin Ryhmittely-alavalikossa.*

### Tilauksien katkaisujen syiden luettelu

![Katkaisun syyt](/img/ohjeet/katkaisun-syyt.png)
*Voit asettaa katkaisujen syyt ja karsintaperusteet Muut asetukset-välilehdeltä*

**Katkaisun syyt**-valikkoon kirjataan mahdollisia tilauksen katkaisusyitä, joita voi valita tilauksen katkaisun yhteydessä. (Esim. "Lehti on liian kallis")

![Katkaisun syyt](/img/ohjeet/katkaisun-syyt2.png)
*Voit valita tällä välilehdelle asettemasi syyt katkaisulle tilaukselle katkaisun yhteydessä.*

**Haku-näytöllä katkaisun syyt mitkä sisältyvät ehtoon: [KAIKKI, PAITSI ASETUKSISSA MÄÄRITELLYT]**, asetetaan ne katkaisun syyt, jotka voidaan karsia hausta. 

Esim. **[Haut](/docs/ohjeet/yleiset_ominaisuudet/haut)**-näytön kautta voidaan hakea katkaistujen tilauksien asiakkaita soittolistaan. Halutaan karsia ne katkaisut, jotka johtuvat esim. tilaajan kuolemasta tai oikeustoimikelvottomuudesta, niin että nämä asiakkaat eivät joudu soittolistaan.

## Pääkäyttäjä

![Pääkäyttäjä](/img/ohjeet/paakayttaja.png)

**Pääkäyttäjä**–välilehden tietoja voi muokata vain palvelun **pääkäyttäjiksi nimetyt käyttäjät**. 

Välilehdeltä voi muokata mm.
- yrityksen ja sen tuotteiden perustietoja
- uusia Lehtien tilaustapoja
- muuttaa Laskunumerosarjan alku- ja loppunumerointeja
- aktivoida Kampanja tuotteiden käytön
- asettaa rajoituksen tekstiviestien lkm/päivä
- määrittää jakelunippujen minimikoon
- aktivoida Ilmoitusmyynti-toiminnot ja siihen liittyvät kentät
- aktivoida OmaPalvelu-toiminnot
- aktivoida Paperilaskutuslisän käyttöön

Voit myös lähettää tiedostoja ylläpitäjälle esim. asiakastietoja massapäivitystä varten tai nuotaa tiedostoja ylläpitäjältä esim. tarkastamista varten.

### Laskun muodostamistiedot

![Pääkäyttäjä](/img/ohjeet/paakayttaja13.png)

Painamalla Laskun muodostamistiedot vierässä olevaa **NÄYTÄ**-painiketta avautuu uusi välilehti, missä näet laskutustiedot eri tuotteille.
- välilehdeltä näet mm. minä päivinä laskuja muodostetaan automaattisesti ja mikä on eri tuotteiden huomautusaika maksumuistutuksille

![Pääkäyttäjä](/img/ohjeet/paakayttaja3.png)
*Laskujen muodostamistiedot -näkymä.*

### Lomakkeen alkupään toiminnot

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

![Pääkäyttäjä](/img/ohjeet/paakayttaja4.png)

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

### Lomakkeen loppupään toiminnot

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

## Tilauslomake

![Tilauslomake](/img/ohjeet/tilauslomake.png)

Tilauslomake-välilehdellä voit määrittää tilauslomakkeen asetukset. Tilauslomakkeen kautta asiakkaat voivat tilata lehden. 

Voit asettaa osoitteen, johon asiakas ohjataan tilauksen tekemisen jälkeen, esim. hs.fi.

### Tilaustuotteen valinta

**Tilaustuotteen valinta** -kohdasta voit asettaa, mitkä ja minkälaiset tuotteet tulevat tilauslomakkeelle näkyviin sekä asettaa mitä tekstejä tilauslomakkeella näkyy tilaustuotetta valitessa.

**Tilaustuotteen valinta otsikko** -kohtaan voit asettaa tilauslomakkeelle otsikon tuotteen valinta kohtaan.

**Valitse tuote-vaihtoehdoista** voit valita voika lomakkeelta tilata digitilauksia, täystilauksisa (tilaus sisältää paperilehden ja digin) vai paperitilauksia. Voit asettaa näille tuotevaihtoehdoille myös **otsikot** ja **infotekstit**, jotka tulevat näkyviin lomakkeelle.

![Tilauslomake](/img/ohjeet/tilauslomake8.png)

![Tilauslomake](/img/ohjeet/tilauslomake9.png)
*Tuotteen otsikko ja info teksti näkyvät lomakkeella ympyröidyissä kohdissa.*

**Tilauslomakkeen tuotteet** -valikosta voit valita, mitä tuotteita asiakas voi tilata tilauslomakkeelta.

![Tilauslomake](/img/ohjeet/tilauslomake3.png)

**Tilauslomakkeen piilotetut tuotteet** -valikosta voit valita tuotteet, jotka ovat tilauslomakkeelta tilattavissa, mutta ovat tilauslomakkeelta piilotettu. Tuotteita voi tilata vaan, jos on tullut lomakkeelle esim. tarjouslinkin kautta.

**Tilauslomakkeen tarjoustuotteet** -valikosta voit valita, mitä tarjoustuotteita lomakkeella näkyy.

**Tilauslomakkeen oletuksena valittu tuote** -valikosta voit valita, mikä tuote näkyy lomakkeella oletuksena, kun lomakkeelle ensin tullaan.

**Laske ja näytä kuukausihinta tuotteille** -valikosta voit valita, mille tuotteille lasketaan ja näytetään kuukausihinta lomakkeella.

![Tilauslomake](/img/ohjeet/tilauslomake12.png)
*Kuukausihinta näkyy tilauslomakkeella ympyröidyissä kohdassa.*

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
*Aktivoitavat yhteystiedot näkyvät ympyröidyissä kohdissa.*

### Maksutapa 

Maksutapa-kohdasta voit säätää maksutapohin liittyviän asetuksia.

**Valitse laskutustapa -vaihtoehdot** kohdasta voit valita maksutapavaihtoehdoiksi:

- Verkkomaksun
- Sähköpostilaskun
- Paperilaskun

Voit myös valita, mikä näistä maksutavoista on lomakkeella **oletuksena** sekä asettaa lomakkeella näkyvät otsikot ja infoteksit maksutapoihin liittyen.

![Tilauslomake](/img/ohjeet/tilauslomake5.png)

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

