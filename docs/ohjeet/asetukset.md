---
sidebar_position: 2
---

# Oletusasetukset

## Oletusasetuksien hallinnointi

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
- **Digitiedot** (t.s. onko tuote digitaalinen vai ei?)
- Tuotteen **käyttöajat**

### Lomakkeeseen lisättävät tiedot

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen.png)

- **TuoteID**: jokaisella tuotteella on ohjelman automaattisesti generoima TuoteID.
- **Tuotenumero**-kenttään lisätään tuotteen uniikki tuotenumero.
- **Tuoteryhmä**-kenttään lisätään mihin tuoteryhmään tuote kuuluu (esim. jos tilaustuotteena on lehti, laitetaan lehden nimi tähän kohtaan)
- **Kampanja**-kenttään voi lisätä mihin kampanjaan tuote kuuluu, jos mihininkään.
- **Tuotenimi**-kenttään laitetaan tuotteen sisäinen tuotenimi (esim. Kestotilaus III; Määräaikainen, digi)
- **Ulkoinen tuotenimi**-kentässä määritellään, miltä tuotenimi näyttää (esim. tilauslomakkeella tai laskussa) asiakkaalle, joka tilaa lehteä.
- **Lisätiedot**-kenttään voi kirjata tuotteelle tärkeitä lisätietoja, joita haluat muiden käyttäjien tietoon.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen2.png)

- **Hinta veroton, ALV prosentti ja Hinta verollinen** –kentissä määritellään tuotteelle oletushintatiedot, joita voi tarvittaessa myös muuttaa tilauksen luomisen jälkeen.
- **Hinta veroton** -tieto on aina oltava viidellä (5) desimaalilla, jonka ohjelma pyöristää automaattsiesti laskua luotaessa.
- Veroton/verollinen hintoja voi muuttaa ja suorittaa muutetun tiedon avulla uudelleenlaskennan **Laske veroton hinta verollisesta / Laske verollinen hinta uudelleen** -painikkeiden avulla.
- **Erämaksut**: Jos lasku maksetaan erissä, yleensä ohjelma laskee erien hinnat automaattisesti, mutta erien hinnat voi myös erikseen määritellä tähän lomakkeeseen ne täyttämällä.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen3.png)

- **Tilaustyyppi** tarvitaan, mikäli tuotteen tilaus halutaan jaettavaksi postitse. Postituslistalle kerätään VAIN Kesto- ja Määräaikaiset tilaukset. Jos halutaan, että ko. tuote EI NOUSE postituslistalle, valitaan tyypiksi Ei määritelty (esim. jos lehti ilmestyy digitaalisena). Määräaikaisen tarjoustuotteen Tilaustyyppi tulee olla Kesto, mikäli tuote halutaan nousevan automaattisesti jatkettavien tilausten Kestojatko-listalle.
- **JatkotuoteID** –tieto kertoo esim. tarjoustuotteella sen tuotteen ID-numeron, jolla tilausta jatketaan automaattisesti tarjousajan päätyttyä (esim. normaali Kestotilaus). 
- **Tilauksen kesto** –kentässä määritellään tuotteen pituus oletuksena kuukausissa.
Keston yksikön voi tarvittaessa muuttaa valikosta, jossa vaihtoehtoina päivä/viikko/vuosi.
Kaikissa Kestotilaustyyppisissä tuotteissa pituuden on oltava joku muu kuin 0, sillä muuten ne eivät nouse automaattiseen Kestojatko-ajoon mukaan.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen4.png)

- **Myyntitili, ALV velkatili** ja **Myyntisaamiset**-tili määritellään **Tilit** -välilehdellä ja ne tulee merkitä kaikille laskutettaville tuotteille. Laskua luotaessa tilöintitilit haetaan tuotekortilta ja niiden avulla muodostetaan laskulle tarvittavat tiliöintirivit, joihin maksetut suoritukset myöhemmin liitetään kirjanpitoa varten.
- **Laskuerien lukumäärä** /// teksti puuttuu, mitä tarkoittaa?

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen5.png)

- **Kotimaan/ulkomaan tilaus** –valinta määrittelee tuotteen tilauksen näkyvyyden ja käsittelyn mm. Postituslistalla (lähetetäänkö ulkomaille eri reittiä).
- **Digituote**–valinta määrittelee tuotteen olevan käytettävissä vain netin kautta esim. Näköislehti.
- **Oikeuttaa digipalveluun** –valinta määrittelee tuotteen tilaukseen sisältyvän myös oikeus käyttää sivuston erillistä Digipalvelua.

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen6.png)

- Tuotteelle on määriteltävä **Valittavissa aikavälillä** -aikarajaus. Jos tuote halutaan olevan aina valittavissa, tulee päättymispäivämäärän olla riittävän kaukana tulevaisuudessa (esim. 31.12.2050)
- Tuotteelle määritellään myös **Tilaus mahdollinen aikavälillä** -aikarajaus, joka rajaa sen käytettävissä olevan tilausjakson. Yksittäisen tilauksen alku- ja loppupäivät tulee mahtua annetun aikarajoituksen sisään. Mikäli tuote halutaan olevan aina valittavissa, tulee päättymispäivämäärän olla riittävän kaukana tulevaisuudessa (esim. 31.12.2050), koska ’toistaiseksi voimassaolevaa’ tuotetyyppiä ei ole käytettävissä
- **Tilauksen päättymisaika tuotteesta**: //teksti puuttuu, mitä tarkoittaa

![Tilaustuotteet - Tuotteen lisääminen](/img/ohjeet/tilaustuotteet-lisaaminen7.png)

- **Tuote on piilotettu:** Tuotteen voi piilottaa, milloin sitä ei näe hakuja tehtäessä eikä sitä voi valita uutta tilausta tehtäessä.
- **Digipalvelu**–kentän avulla tuotteita voi ryhmitellä saman Digipalvelu-ryhmän alle. Digipalveluissa voidaan tutkia onko tilaajalla aktiivisena tiettyä Digipalvelua ja täten näyttää muun muassa wwww-sivun sisältö sen mukaan.
- **Stripe tuotetyyppi ja PriceID**: Stripe-palveluun määritellyn tuotteen tyyppi ja API PriceID
- **SKU-koodi**: Tuotteen yksilöivä koodi m.m. kirjamyynnissä.

## Erillistuotteet

Erillistuotteita ovat tuotteet, jotka EIVÄT sovi **tilaus- tai myyntituotteisiin**. Esimerkkejä erillistuotteista ovat esimerkiksi Laskutuslisä, Paperilaskutuslisä, jne. Erillistuotteet-välilehdellä voit muokata ja lisätä erillistuotteita.

![Erillistuotteet-näkymä](/img/ohjeet/erillistuotteet.png)
*Erillistuotteet-välilehdellä voit muokata ja lisätä erillistuotteita, ja tarkastella jo olemassa olevia erillistuotteita.*

![Erillistuotteet- Tuotteen muokkaus](/img/ohjeet/erillistuotteet2.png)
*Erillistuotteen käsittely -näkymältä voit muokata erillistuotteen tietoja.*

## Tilit

**Tilit**–välilehdellä voit tarkastella ja muokata olemassa olevia tilejä, ja lisätä uusia tilejä
- kun klikkaat tietyn tilin **tilinumeroa** pääset muokkaamaan olemassa olevan tilin tietoja. Voit myös poistaa tilin.
- kun klikkaat **Lisää tili** –painiketta, pääset kirjaamaan uuden tilin tiedot

Tilaus-/Myyntituotteilla käytetään tällä välilehdellä määriteltyjä tilitietoja.

![Tilit-välilehti](/img/ohjeet/tilit.png)
*Tilit-välilehdeltä voit muokata ja lisätä tilejä*

### Tilien lisääminen ja muokkaaminen

![Tilit-välilehti - Tilien lisääminen](/img/ohjeet/tilin-lisaaminen.png)

*Tilin lisääminen -lomake*

Kun tiliä lisätään tai muokataan, tarvitaan seuraavat tiedot:
- **Tilin numero**
- **Tilin nimi**
- Onki tili **Pankkitili, Myyntili, vai Kulutili**
- **Tilin tyyppi** tiliöintejä varten, joka määritellään **lyhenteellä** (PA=Pankki, MS=myyntisaamiset, ALV, MY=Myynti, PY=Pyöristys, LT=Luottotappio, MUU=jokin muu tili)

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

Välilehdeltä voi lisätä tekstejä tilaustuotteiden, erillistuotteiden ja ilmoitusmyynnin laskuille sekä lisätä lähetystiedot sähköpostin kautta lähetettävien laskujen sähköpostipohjaan.

![Laskutekstit-välilehti](/img/ohjeet/laskutekstit2.png)
*Laskulle lisättävä teksti -lomake*

TIlauslaskuille voi lisätä:
- tekstin laskulle
- laskutekstin //what is the difference?
- maksumuistutuksien tekstit

![Laskutekstit-välilehti](/img/ohjeet/laskutekstit3.png)
*Sähköpostikanavan lähetystiedot -lomake*

Sähköpostin lähetystietoihin voi lisätä:
- sähköpostiosoitteen, josta lasku lähetetään
- otsikon
- laskuviestin
- maksumuistutuksien otsikot ja viestit
- hyvityslaskun otsikon ja viestin

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

![Pakettien lisääminen](/img/ohjeet/paketin-lisaaminen.png)
*Tuotteita siirretään/poistetaan paketilta nuolien avulla.*

Kun pakkettia lisätään, sille kirjataan:
- **Numero**: uniikki numero, josta paketin erottaa ja jolla sitä voidaan hakea 
- **Nimi**: myyntipaketin nimi, esim. Black Week I
- **Hinta**: paketin veroton hinta (annettaessa hinnan, jätetään yksittäisten myyntituotteiden hinnat huomiotta)
- **Lisätiedot**: paketille oleellisia lisätietoja (esim. milloin pakettia myydään)
- **Myyntituotteet**: tuotteet, jotka paketti sisältäää

Myyntituotteita **lisätään** pakettiin valitsemalla yksittäin/kaikki vasemmasta laatikosta (Kaikki myyntituotteet) ja siirtämällä valinnat oikeanpuoleiseen laatikkoon (Pakettiin valitut tuotteet) **käyttämällä välissä olevia nuolia**.

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

/// ei mitään hajua mitä tämä tarkoittaa, selitys

**Vastaanottoilmoitukset**–välilehden listauksen avulla vertaillaan vastaanotetut valtuutukset asiakasrekisteristä löytyviin asiakaskortteihin

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

### Tilauksien katkaisujen syiden luottelu

![Katkaisun syyt](/img/ohjeet/katkaisun-syyt.png)
*Voit asettaa katkaisujen syyt ja karsintaperusteet Muut asetukset-välilehdeltä*

**Katkaisun syyt**-valikkoon kirjataan mahdollisia tilauksen katkaisusyitä, joita voi valita tilauksen katkaisun yhteydessä. (Esim. "Lehti on liian kallis")

![Katkaisun syyt](/img/ohjeet/katkaisun-syyt2.png)
*Voit valita tällä välilehdelle asettemasi syyt katkaisulle tilaukselle katkaisun yhteydessä.*

**Haku-näytöllä katkaisun syyt mitkä sisältyvät ehtoon: [KAIKKI, PAITSI ASETUKSISSA MÄÄRITELLYT]**, asetetaan ne katkaisun syyt, jotka voidaan karsia hausta. 

Esim. <a href="https://taikatilaus.github.io/docs/ohjeet/yleiset_ominaisuudet/haut">**Haut**</a>-näytön kautta voidaan hakea katkaistujen tilauksien asiakkaita soittolistaan. Halutaan karsia ne katkaisut, jotka johtuvat esim. tilaajan kuolemasta tai oikeustoimikelvottomuudesta, niin että nämä asiakkaat eivät joudu soittolistaan.

## Pääkäyttäjä

![Pääkäyttäjä](/img/ohjeet/paakayttaja.png)

**Pääkäyttäjä**–välilehden tietoja voi muokata vain palvelun Pääkäyttäjiksi nimetyt. 

Välilehdeltä voi lisätä mm.
- yrityksen ja sen tuotteiden perustietoja
- uusia Lehtien tilaustapoja
- muuttaa Laskunumerosarjan alku- ja loppunumerointeja
- aktivoinnin Kampanja tuotteiden käyttöä varten
- rajoituksen tekstiviestien lkm/päivä
- määrityksen painotalon asettamalle jakelunippujen minimikoolle
- aktivoinnin Ilmoitusmyynti -toimintoihin ja niiden kenttien näkyvyyksiin
- aktivoinnin OmaPalvelun -toimintoihin
- aktivoinnin Paperilaskutuslisän käytölle

- Tiedostoja lähetettäväksi ylläpitäjälle esim. asiakastietoja massapäivitystä varten
- Tiedostoja noudettavaksi ylläpitäjältä esim. tarkastamista varten.

### Lomakkeen alkupään toiminnot

![Pääkäyttäjä](/img/ohjeet/paakayttaja2.png)

Painamalla Laskun muodostamistiedot vierässä olevaa **NÄYTÄ**-painiketta avautuu uusi välilehti, missä näet laskutustiedot eri tuotteille.
- välilehdeltä näet mm. minä päivinä laskuja muodostetaan automaattisesti ja mikä on eri tuotteiden huomautusaika maksumuistutuksille

![Pääkäyttäjä](/img/ohjeet/paakayttaja3.png)
*Laskujen muodostamistiedot -näkymä.*

- **Yrityksen nimi** -kentästä voit muokata yrityksen nimeä 
- **Julkaisujen lyhenteet** -kenttään kirjataan eri lehtijulkaisujen nimien lyhenteet omille riveilleen
- **Lehtien tilaustavat** -kenttään kirjataan, miltä kanavilta lehtiä voi tilata
- **Etusivun asiakkaiden max. näyttömäärä** -kenttään kirjataan maksimissaan kuinka monta asiakasta näytetään etusivun hakulistassa
- **Laske laskun summat 5:llä desimaalilla** -kentän aktivoidessa laskujen summat lasketaan viiden desimaalin tarkkuudella yksikköhinnasta
- **OmaPalvelu-osio näkyvissä kontaktikortilla** -kentän aktivoidessa OmaPalvelu-alivalikko näytetään asiakaskortilla

![Pääkäyttäjä](/img/ohjeet/paakayttaja4.png)

- Ei laskutuslisää kenttä käytössä
- Uusi tilaus kenttä käytössä
- Kampanja käytössä
- Tekstiviestien max. lähetysmäärä päivässä
- Lehtien painoaineistossa minimi nippukoko
- Lehtien tilausmyyjät
- Myyjätieto laskulle
- Kirjautumistunniste käytössä
- Paketti käytössä

### Ilmoitusmyynti

![Pääkäyttäjä](/img/ohjeet/paakayttaja5.png)

![Pääkäyttäjä](/img/ohjeet/paakayttaja6.png)


### Osoitekentät

![Pääkäyttäjä](/img/ohjeet/paakayttaja9.png)

![Pääkäyttäjä](/img/ohjeet/paakayttaja7.png)

### Lomakkeen loppupään toiminnot

![Pääkäyttäjä](/img/ohjeet/paakayttaja8.png)

Sekä koostaa raportin Koko Asiakasrekisteri Exceliin + tilaus, lasku ja myyntitiedot –taulukkoon
- tuo KAIKKI, (Poistettu 0=normaali / Poistettu 1=poistettu) , jonka avulla voidaan päättää mm. palvelusta pois siivottavat vanhat tiedot (kuten tupla-asiakaskortit)

Ja muuttaa tiliöintien tilitietoja, sekä lähettää/vastaanottaa palveluun liittyviä siirtotiedostoja.

## Käyttäjät

![Käyttäjät](/img/ohjeet/kayttajat.png)
*Pääkäyttäjät voivat hallinoida palveluiden käyttäjiä Käyttäjät-välilehdeltä.*

**Käyttäjät**–välilehdellä Pääkäyttäjäksi nimetyt voivat lisätä uusia, muuttaa ja poistaa olemassa olevia TaikaTilaus –palvelun käyttäjiä.

**Käyttäjätunnus**-sarakkeen yksittäistä tunnusta klikattaessa avautuu sen tarkemmat tiedot. **Lisää**-painikkeella voit lisätä uuden käyttäjän.

![Käyttäjät](/img/ohjeet/kayttajat5.png)

### Käyttäjien tietojen muokkaaminen

Käyttäjän **perustiedot** täydennetään ensin ja valitaan hänen tarvitsemansa **Rooli** (esim. ilmoitusten Käsittelijä)
- Perustiedot pitää ensin **tallentaa** ennen kuin voi lisätä aktivoitavat toiminnot

![Käyttäjät](/img/ohjeet/kayttajat2.png)

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

![Käyttäjät](/img/ohjeet/kayttajat3.png)

**Käyttäjäoikeudet** voidaan asettaa uudelle käyttäjälle perustietojen täyttämisen ja tallentamisen jälkeen. Käyttöoikeudet eri toimintoihin aktivoidaan **käyttäjäkohtaisesti**. Myös **Ilmoitusmyynti**-sovellus lisätään käyttöön käyttöoikeuksista. 

Käyttöoikeiksia asetetaan aktiiviseksi **siirtämällä ne Valittavat toiminnot -kentästä Valitut toiminnot -kenttään**. Toimintoja voi siirtää kentästä toiseen kenttien välissä olevien **nuolien** avulla.  Valitut käyttöoikeudet vaikutttavat siihen mitä ominaisuuksia käyttäjä voi käyttää ohjelmaa käyttäessään (esim. Laskujen lähetys olessa valituissa toiminnoissa, kyseinen käyttäjä voi lähettää laskuja asiakkaille ohjelman kautta)

**Yrityksen pääkäyttäjä** -kentässä kerrotaan onko muokattava käyttäjä pääkäyttäjä vai ei. Jos haluat yrityksellesi uuden pääkäyttäjän ota yhteyttä TaikaTilaukseen osoitteesta: tuki@taikatilaus.fi.

![Käyttäjät](/img/ohjeet/kayttajat4.png)

Jos käyttäjällä on käyttöoikeus <a href="https://taikatilaus.github.io/docs/ohjeet/yleiset_ominaisuudet/raportit">raportteihin</a>, voit myös määrittää, mitä raportteja käyttäjä voi nähdä siirtämällä valittuja raportteja kenttien välissä olevilla nuolilla. Raportti tulee käyttäjän näkyväksi **siirtämällä se Valittavat raportit -kentästä Valitut raportit -kenttään**. 

Voit myös poistaa käyttäjän painamalla **Poista**-painiketta lomakkeen oikeassa alakulmassa.

## OmaPalvelu

OmaPalvelu –välilehdellä määritellään asiakaskohtaiset asetukset lehti- ja ilmoitusasiakkaiden OmaPalvelun käyttöä varten

Oletusasetuksiin määritellään kirjautumiseen liittyen mm.
- Sovelluksen nettiosoite ja nimi
. Kirjautumisnäkymien otsikot ja muut ohjetekstit
- Oheistoimintojen ohjauslinkit
- Toimintoihin liittyvien viestien otsikot ja sisältötekstit

## Varhaisjakelu

Varhaisjakelu –näkymässä ylläpidetään varhaisjakelussa käytettävää osoitteistoa
- Osoitteisto päivitetään käyttöönoton yhteydessä ja tarvittaessa muulloinkin sähköisen tiedostosiirron avulla

Varhaisjakeluun liittyvät osoitteistot ja nippujen tiedot määritellään asetuksissa, kuten esim.
- Postin varhaisjakelurekisteri ja käytettävät piirinumerot
- Postin kimputusrekisteri
- SanomaManun varhaisjakelurekisteri ja käytettävät piirinumerot
- Vakioniput
- Varhaisjakelun reitit

- Päivitä nippunumerot koko asiakasrekisteriin
- Näytä nippujen koot
- Näytä nipulliset osoitteet
- Näytä nippujen koot tilauksellisista
- Näytä nippujen osoitteet tilauksellisista
- Näytä tilaukselliset osoitteet

Palveluun tullaan saadaan myös näkyviin Postin välittämät ilmoitukset esim. Jakeluhäiriöistä ja niiden kestosta, sekä
Ilmoitettua Postille asiakkaan ilmoittamat jakeluvirheet, kuten puuttuvan lehden, jonka Posti toimittaa asiakkaalle erilliskuljetuksena

### Varhaisjakelunippujen päivittäminen

Varhaisjakelu –näkymässä ylläpidetään myös esim. Vakioniput –rekisteriä, jossa listataan
- mm. lehden toimistoon vietävän nipun koko
- Painon varalehtien nipun koko
- Muut vakioniput ja niiden sisältämät lehtimäärät

Yksittäiset vakioniput listataan alle aukeavaan tekstikenttään
- jokainen omalle rivilleen kentät puolipisteillä eroteltuina
- sarakkeita on 12kpl ja niiden järjestys sekä maksimi pituus näkyy ohjeen mallirivistä

Muutokset (esim. lisälehtiä nippuun) päivitetään ko. vakionipun riville ja tallennetaan
- Mikäli muutos on tilapäinen, tulee se palauttaa päivittämällä muutostieto takaisin (normimäärään) poikkeavan postituksen jälkeen