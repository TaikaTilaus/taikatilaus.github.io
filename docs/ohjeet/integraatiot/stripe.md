---
sidebar_position: 6
description: Stripe — Tilin luominen, StripeGateway, Hinta.
---

# Stripe

[Stripe](https://www.stripe.com/)-maksutavan integraatio. 

Tämä ohje kuvaa, kuinka luot Stripe-tilin ja kutsut TaikaTilauksen tilisi hallinoijaksi.

## Tilin luominen

Stripe-tilin luominen on ilmaista ja helppoa.

1. Mene osoitteeseen [stripe.com](https://www.stripe.com/). Anna yrityksesi sähköposti kenttään ja paina **Get started**.

![Stripe-tilin luominen - Get started -painike stripe.com-etusivulla](/img/ohjeet/stripe.png)

2. Syötä avautuvaan lomakkeeseen sähköposti, koko nimesi ja salasana. Paina **Create account**.

![Stripe-tilin luominen - Sähköposti, nimi ja salasana](/img/ohjeet/stripe2.png)

3. Anna yrityksesi nimi ja toimimaa avautuvaan lomakkeeseen.

![Stripe-tilin luominen - Yrityksen nimi ja toimintamaa](/img/ohjeet/stripe3.png)

4. Kuvaile yrityksesi toimintaa ja anna yrityksesi nettisivun URL. Stripe ehdottaa sen avulla yrityksellesi sopivia ominaisuuksia. 

![Stripe-tilin luominen - Yrityksen toiminnan kuvaus ja verkkosivun URL](/img/ohjeet/stripe4.png)

5. Valitse ominaisuuksien listasta ainakin **Accept online payments** ja **Create subscriptions** ja paina **Continue**.

![Stripe-tilin luominen - Ominaisuuksien valinta](/img/ohjeet/stripe5.png)

6. Paina **Go to sandbox**.

![Stripe-tilin luominen - Go to sandbox -painike](/img/ohjeet/stripe6.png)

7. Olet nyt Stripe-tilisi sandboxin etusivulla.

![Stripe-tilin luominen - Sandboxin etusivu](/img/ohjeet/stripe7.png)

8. Saat antamaasi sähköpostiin sähköpostin vahvistamislinkin. Klikkaa **Verify email** vahvistaaksesi sähköpostisi.

![Stripe-tilin luominen - Sähköpostin vahvistaminen (Verify email)](/img/ohjeet/stripe8.png)

## TaikaTilauksen kutsuminen Stripe-hallinnoijaksi

1. Sähköpostin vahvistamisen jälkeen, Stripe-tilillä paina **Asetukset**-ikonia.

![TaikaTilauksen kutsuminen - Asetukset-ikoni](/img/ohjeet/stripe10.png)

2. Asetuksissa paina **Team and security**.

![TaikaTilauksen kutsuminen - Team and security](/img/ohjeet/stripe11.png)

3. Paina **Add member**

![TaikaTilauksen kutsuminen - Add member](/img/ohjeet/stripe12.png)

4. Kirjoita lisättävän henkilön sähköposti kenttään, valitse admin rooliksi **Administrator** ja paina Send **invite**.

![TaikaTilauksen kutsuminen - Kutsun lähettäminen Administrator-roolilla](/img/ohjeet/stripe13.png)

5. Saat sähköpostiisi koodin, jolla vahvistat jäsenen lisäyksen. Kopioi se ja anna se aukeavaan kenttään. 

6. TaikaTilauksen tiimin edustaja on nyt kutsuttu.

<!-- ## Tuotteiden lisääminen

## Yrityksen vahvistaminen
 -->

## StripeGateway

StripeGateway on TaikaTilauksen rinnalla toimiva palvelu, joka näyttää Stripen (korttimaksut ja digitilaukset) tiedot yhdestä paikasta ja vertaa niitä TaikaTilaukseen. Sen kautta näet reaaliajassa uudet tilaajat, veloitukset, epäonnistuneet maksut, vanhenevat kortit ja tilaukset, jotka puuttuvat TaikaTilauksesta. Lisäksi voit kytkeä TaikaTilauksen tuotteet Stripen hintoihin ja kuponkeihin ilman teknistä apua. Tiedot haetaan suoraan Stripestä, joten ne ovat aina ajan tasalla.

### Kirjautuminen ja käyttö

StripeGatewayyn siirrytään TaikaTilauksen valikosta **Stripe**-linkillä. Erillistä salasanaa ei tarvita: linkki tunnistaa käyttäjän ja avaa oikean Stripe-tilin tiedot.

![StripeGateway - Kirjautuminen TaikaTilauksen valikon Stripe-linkistä](/img/integraatiot/stripe-kirjautuminen.png)

Kun olet siirtynyt StripeGatewayhin, sivun oikeassa yläkulmassa näkyy, minkä tilin tiedoissa olet, ja **Kirjaudu ulos** sulkee istunnon.

- Yläpalkin keltaiset painikkeet ovat sivut. Aktiivinen sivu näkyy mustana.
- Jokaisen sivun taulukon voi lajitella klikkaamalla sarakkeen otsikkoa.
- Useimmilla sivuilla on oikeassa reunassa **Vie Exceliin** -painike, joka tallentaa näkyvän listan Excel-tiedostoksi.
- Otsikoiden kysymysmerkki (?) näyttää lyhyen selityksen, kun hiiren vie sen päälle.
- Kun sivu hakee tietoja Stripestä, ruudulla näkyy **Ladataan…**.

### Etusivu

Etusivu on tilannekuva. Luvut päivittyvät automaattisesti noin 15 minuutin välein.

- **Aktiiviset tilaukset tuotteittain:** montako voimassa olevaa digitilausta kullakin lehdellä on Stripessä ja miten määrä on muuttunut viimeisen seitsemän vuorokauden aikana (vihreä = kasvanut, punainen = vähentynyt). Kuvaaja näyttää kehityksen päivä kerrallaan. Kun hiiren vie kuvaajan päälle, se näyttää kunkin päivän luvut.
- **Stripen tapahtumat** kahdessa sarakkeessa: edellinen vuorokausi ja viimeiset seitsemän vuorokautta:
  - **Onnistuneet maksut yhteensä:** kaikki maksetut laskut ja kertamaksut kappaleina ja euroina.
  - **Jatkuvien tilausten veloitukset:** kuukausitilausten veloitukset, eriteltynä uusintaveloituksiin (jatkuneet tilaukset) ja ensimmäisiin veloituksiin (juuri alkaneet).
  - **Kertamaksut:** yksittäiset ostot, esimerkiksi määräaikaiset tilaukset.
  - **Epäonnistuneet maksut:** veloitukset, jotka eivät onnistuneet. Punainen väri tarkoittaa, että tarkistettavaa on.
  - **Uudet kuukausitilaukset:** jaksolla alkaneet uudet jatkuvat kuukausitilaukset.
  - **Päättyneet tilaukset:** tilaukset, jotka ovat päättyneet, esimerkiksi peruutuksen tai epäonnistuneen veloituksen vuoksi.
  - **Uudet asiakkaat:** Stripeen jaksolla syntyneet uudet asiakkaat.
  - **Hyvitykset:** asiakkaalle takaisin maksetut veloitukset kappaleina ja euroina.
  - **Riitautukset:** tilaajan korttiyhtiölle tekemät maksun kiistämiset (chargeback), joihin on syytä reagoida Stripessä määräaikaan mennessä. 
- Rivin nimeä klikkaamalla pääset **Stripen tapahtumat** -sivulle katsomaan kyseiset tapahtumat yksitellen.
- **Huomiota vaativat** listaa viimeisimmät epäonnistuneet maksut, päättyneet tilaukset ja riitautukset. Sähköpostia klikkaamalla avautuu tilaajan tiedot.
- **Uudet tilaajat, viimeinen vrk** näyttää edellisen vuorokauden uudet tilaukset ja kertamaksut tuotteineen ja summineen.

![StripeGateway - Etusivu](/img/integraatiot/stripe-1.png)

### Tilaajat

Tilaajat-sivu näyttää Stripen asiakkaat. Oletuksena listassa ovat viimeisten 7 vuorokauden aikana tulleet uudet tilaajat, uusin ensin.

- **Hae koko sähköpostilla:** kirjoita tilaajan koko sähköpostiosoite ja paina **Hae**. Haku kattaa kaikki asiakkaat.
- **Uudet 7 vrk:** palaa oletusnäkymään.
- **Kaikki:** koko asiakaskunta. Valinta *Aktiiviset tilaajat* näyttää vain ne, joilla on voimassa oleva tilaus, ja *Kaikki asiakkaat* myös ne, joilla tilaus on päättynyt tai jäänyt kesken. Näkymässä on lisäksi sarake *Voimassa olevat tilaukset*, jossa näkyy tilaajan lehti ja jakso.
- **Tilaukset**-painike rivin lopussa avaa tilaajan tiedot: tilaukset, laskut ja kortti.

Jos tilaus on peruttu, **Voimassa olevat tilaukset** -sarakkeessa näkyy tilauksen perässä punaisella päättymispäivä, esimerkiksi ”päättyy 2026-11-22”. Tilaus on voimassa siihen asti, mutta sitä ei enää veloiteta.

Koko asiakaskunnan lista voi ensimmäisellä avauksella kestää noin puoli minuuttia. Sen jälkeen se avautuu heti.

![StripeGateway - Tilaajat](/img/integraatiot/stripe-tilaukset.png)

#### Tilaajan tiedot

Tilaajan sivulla näkyvät hänen tilauksensa, Stripen laskut ja maksut. Sivun toiminnot muuttavat tietoja Stripessä, ja jokainen niistä kysyy vahvistuksen ennen muutoksen tekemistä.

- **Vaihda sähköposti…** nimen alla vaihtaa tilaajan sähköpostin Stripessä. Uuteen osoitteeseen tulevat Stripen kuitit ja laskut. OmaPalvelun käyttäjätunnus ei muutu.
- **Pidennä lukuaikaa** antaa voimassa olevalle tilaukselle ilmaista lukuaikaa 1–31 vuorokautta. Seuraava veloitus siirtyy vastaavasti eteenpäin, eikä pidennyksestä veloiteta. Toiminto sopii esimerkiksi hyvitykseksi jakeluhäiriöstä.
- **Peru tilaus kauden lopussa…** lopettaa jatkuvan tilauksen maksetun kauden loppuun. Tilaus on siihen asti voimassa, eikä sitä enää veloiteta. TaikaTilauksen tilaukselle asetetaan peruutuspäiväksi kauden viimeinen päivä.
- **Stripe laskut** -taulukossa jokaisen laskun alla näkyvät sen maksuyritykset: onnistuiko veloitus ja epäonnistuneesta kortin hylkäyksen syy. **Näytä Stripen tapahtumat** näyttää laskun tapahtumat viimeisten 30 vuorokauden ajalta.
- **Muut maksut** listaa onnistuneet maksut, joita ei ole liitetty Stripen laskuun, esimerkiksi kassalla maksetut kertaostot.
- **Muutosloki** näyttää StripeGatewayssa tehdyt sähköpostin vaihdot, lukuajan pidennykset ja peruutukset: kuka teki ja milloin. Samat rivit näkyvät AppTaikaTilauksen asiakaskortin muutoslokissa. Hyvitykset näkyvät Stripessä maksun tiedoissa, eivät muutoslokissa.

#### Maksun hyvittäminen

Onnistuneen maksun rivillä oleva **Hyvitä…** palauttaa rahat tilaajan kortille kokonaan tai osittain:

1. Paina maksun rivillä **Hyvitä…**. Ikkunassa näkyvät maksun summa ja päivä.
2. **Summa**-kenttään on täytetty koko hyvitettävissä oleva summa. Osittaista hyvitystä varten kirjoita pienempi summa, esimerkiksi 6,90.
3. Valitse syy (**Asiakkaan pyynnöstä**, **Kaksoisveloitus** tai **Väärinkäyttö**) ja paina **Hyvitä**.

Rahat näkyvät tilaajan kortilla yleensä 5–10 päivän kuluessa. Jo hyvitetty osa näkyy maksun kohdalla merkintänä ”hyvitetty X EUR”. Samaa maksua voi hyvittää uudelleen, kunnes koko summa on palautettu.

:::note
Hyvitys tehdään vain Stripessä. TaikaTilauksessa laskua ei hyvitetä eikä tilausta peruta automaattisesti. Tee hyvityksen jälkeen TaikaTilauksessa hyvityslasku. Jos tilaus halutaan lopettaa, peru se erikseen. Jatkuvan tilauksen voi perua tilaajan sivulla painikkeella **Peru tilaus kauden lopussa…**.
:::

### Tuotteet

Tuotteet ovat Stripessä myytävät lehtituotteet hintoineen aakkosjärjestyksessä. Suodattimilla voit rajata nimen alun, tyypin (tilaus tai kertamaksu) ja tilan (aktiiviset, arkistoidut, kaikki) mukaan. Valintaruuduilla saat näkyviin, montako aktiivista kuukausitilausta ja kertaostoa kullakin tuotteella on. Tuotteen nimeä klikkaamalla näet tuotteen tiedot ja sen tilaajat.

Sarake **TaikaTilaus** näyttää, mihin TaikaTilauksen tuotteisiin kukin hinta on kytketty. Painike **TaikaTilaus-kytkennät** avaa kaikkien kytkentöjen listan. Kytkennät on kuvattu kohdassa [TaikaTilaus-kytkennät](#taikatilaus-kytkennät).

![StripeGateway - Tuotteet](/img/integraatiot/stripe-tuotteet.png)

### Kupongit

Kupongit ovat Stripen alennuskoodit. Listassa näkyvät kupongin nimi, kampanjakoodit (koodi, jonka asiakas syöttää tilatessaan), alennus prosentteina tai euroina, kesto, käyttökerrat ja voimassaoloaika. Oletuksena näytetään voimassa olevat kupongit. Tila-hakuehdolla saa myös vanhentuneet näkyviin. Haku etsii nimen tai koodin alulla. Sarake **TaikaTilaus** näyttää, mihin TaikaTilauksen tuotteisiin kuponki on kytketty.

Uusi kuponki luodaan painikkeella **Uusi kuponki…**. Anna kupongille nimi (näkyy asiakkaalle), alennus prosentteina tai euroina ja kesto:

- **Kerran:** alennus koskee vain ensimmäistä maksua.
- **Pysyvä:** alennus koskee tilauksen kaikkia maksuja.
- **Kuukausia:** alennus koskee annettua määrää kuukausia.

Kampanjakoodi, käyttökertojen enimmäismäärä ja viimeinen lunastuspäivä ovat valinnaisia. Ilman kampanjakoodia kuponkia voi käyttää vain kytkemällä sen TaikaTilauksen tuotteeseen. **Luo kuponki** tallentaa kupongin heti Stripeen. Alennusta ja kestoa ei voi muuttaa jälkikäteen, joten väärän kupongin tilalle tehdään uusi.

Käyttämättömän kupongin (**Käytetty 0**) voi poistaa rivin painikkeella **Poista…**. Vahvistusikkuna näyttää kupongin nimen ja kampanjakoodit, jotka lakkaavat toimimasta samalla. Poistoa ei voi perua. Kytketyn kupongin poistopainike on harmaa: poista ensin kytkennät painikkeella **Poista kytkentä**. Käytettyä kuponkia ei voi poistaa, jotta sen historia säilyy Stripessä.

![StripeGateway - Kupongit](/img/integraatiot/stripe-kupongit.png)

### TaikaTilaus-kytkennät

Jotta TaikaTilauksen tilauslomake voi myydä tuotetta Stripellä, TaikaTilauksen tuote kytketään Stripen hintaan. Kytkennät tehdään StripeGatewayssa: valitset tuotteen ja hinnan listasta, ja StripeGateway tallentaa tiedon TaikaTilaukseen.

Kytkentätoiminnot näkyvät, kun StripeGateway on yhdistetty lehtitalosi TaikaTilaukseen. Yhteyden avaa TaikaTilaus-tuki. Muutokset tallentuvat TaikaTilaukseen heti, ja tilauslomake käyttää niitä seuraavasta tilauksesta alkaen.

TaikaTilauksen Asetuksissa tuotteen kentät **Stripe tuotetyyppi ja hinta** ja **Stripe kuponki ja hinta** ovat vain luettavia, koska ne asetetaan StripeGatewayssa.

#### Peruskäsitteet

- **Stripen hinta:** Stripessä tuotteella voi olla useita hintoja, esimerkiksi kuukausihinta ja vuosihinta. Kytkentä tehdään aina hintaan, ei tuotteeseen.
- **TaikaTilauksen tuote:** TaikaTilauksen tuote tunnistenumeroineen (TuoteID), esimerkiksi ”2568 Digilehti 1 kk”. Tilauslomake myy näitä tuotteita.
- **Lookup key:** hinnan pysyvä nimi muodossa `tuote_<TuoteID>`. Esimerkiksi TaikaTilauksen tuotteen 2568 hinnan lookup key on `tuote_2568`. Kun lehden hinta nousee ja Stripeen tehdään uusi hinta, lookup key siirretään Stripessä uudelle hinnalle. Lookup keytä käyttävän tilauslomakkeen kytkentää ei tällöin tarvitse muuttaa TaikaTilauksessa. Sama lookup key voi olla vain yhdellä hinnalla kerrallaan. Samaa avainta voi käyttää sekä Stripen tuotanto- että testipuolella.
- **Tuoteavain (TuoteAvain):** TaikaTilauksen tuotteen kenttä, joka kertoo tilauslomakkeelle, millä Stripen hinnalla tuote myydään. Se alkaa joko `TOI;` (jatkuva tilaus) tai `KER;` (kertamaksu), ja perässä on hinnan tunniste tai lookup key, esimerkiksi `TOI;tuote_2568`. StripeGateway kirjoittaa tuoteavaimen puolestasi.

Stripessä hintaa ei voi muuttaa: hinnanmuutosta varten luodaan uusi hinta, jolla on uusi `price_`-alkuinen tunniste. Lookup key on pysyvä nimi, jonka avulla tilauslomake löytää uuden hinnan avaimen siirtämisen jälkeen.

:::note
Jos lehtitalosi tilauslomake ei vielä hae hintoja StripeGatewayn kautta, tuoteavaimeen tallennetaan hinnan tunniste (`price_…`), koska vanha tilauslomake ei tunne lookup keytä. Tällöin kytkentä tehdään uudelleen, kun hinta vaihtuu. TaikaTilaus-tuki kertoo, kumpi tapa lehtitalossasi on käytössä.
:::

#### Mitkä tuotteet voi kytkeä

Kytkentäikkunoiden tuotelistassa näkyvät TaikaTilauksen tuotteet, jotka täyttävät kaikki ehdot:

- tilaustyyppi on ulkoinen kesto (Stripe)
- tuotetta ei ole piilotettu
- tuote ei ole erillistuote
- tuotteella on sekä **Valittavissa alkaen**- että **Valittavissa päättyen** -päivä
- tänään on tuotteen valittavuusvälillä.

Jos tuote puuttuu listasta, tarkista sen asetukset TaikaTilauksessa kohdassa Asetukset → Tilaustuotteet.

#### Hinnan kytkeminen

Avaa tuotteen sivu (Tuotteet → tuotteen nimi). Hintataulukon sarakkeessa **TaikaTilaus** näkyy jokaisen hinnan kohdalla joko vihreä **kytketty** ja kytketty TaikaTilauksen tuote tai harmaa **ei kytketty**.

Jos hinnalla ei vielä ole lookup keytä:

1. Paina hintataulukon **Lookup key** -sarakkeessa **Luo lookup key…**. Painike näkyy aktiivisilla hinnoilla, joilla ei vielä ole avainta.
2. Valitse TaikaTilauksen tuote. Tuotteet on ryhmitelty tuoteryhmittäin. Ikkuna näyttää luotavan avaimen, esimerkiksi `tuote_2568`.
3. Pidä valinta **Kytke tuote samalla tähän hintaan** päällä.
4. Paina **Luo lookup key**.

Lookup key tallentuu Stripeen heti. Jos sama avain on jo toisella hinnalla, Stripe hylkää muutoksen ja sivulla näkyy virheilmoitus.

Voit kytkeä hinnan myös erikseen:

1. Paina hinnan rivillä **Kytke TaikaTilaukseen…** (tai **Kytke toinen tuote…**).
2. Valitse TaikaTilauksen tuote. Jos hinnalla on lookup key muotoa `tuote_<TuoteID>`, vastaava tuote on valittuna valmiiksi.
3. Paina **Kytke**.

Tuotteen aiempi tuoteavain korvautuu uudella. Samaan hintaan voi kytkeä useita TaikaTilauksen tuotteita. Arkistoituja hintoja ei voi kytkeä.

#### Kupongin kytkeminen

Kun kuponki kytketään TaikaTilauksen tuotteeseen, tilauslomake näyttää tuotteen alennetulla hinnalla ja antaa kupongin Stripelle tilauksen yhteydessä. Asiakkaan ei tarvitse syöttää kampanjakoodia.

1. Paina Kupongit-sivulla kupongin rivillä **Kytke TaikaTilaukseen…** (tai **Kytke toinen tuote…**). Painike näkyy vain voimassa olevilla kupongeilla.
2. Valitse TaikaTilauksen tuote.
3. Tarkista kenttä **Hinta kupongilla tilauslomakkeella (EUR)**. StripeGateway ehdottaa hintaa tuotteen kytketystä Stripe-hinnasta, josta kupongin alennus on vähennetty. Hinta näytetään asiakkaalle tilauslomakkeella, joten sen pitää vastata sitä, mitä Stripe veloittaa.
4. Paina **Kytke**.

TaikaTilaukseen tallennetaan tuotteen kenttään **TuoteKuponki** kupongin tunniste ja hinta muodossa `kuponki;hinta`. Tuotteen aiempi kuponki korvautuu.

#### TaikaTilaus-kytkennät-sivu

Tuotteet-sivun painike **TaikaTilaus-kytkennät** avaa listan TaikaTilauksen tuotteista, joilla on Stripe-tuoteavain. Valinnalla **Näytä kaikki TaikaTilauksen tuotteet** listaan tulevat myös kytkemättömät tuotteet.

Sarake **Tila** kertoo, onko kytkentä kunnossa. **OK** tarkoittaa, että hinta löytyy Stripestä ja sen laji täsmää: jatkuva tilaus on kytketty toistuvaan hintaan ja kertamaksu kertahintaan. Punainen **virhe** kertoo syyn. Virheellistä tuotetta ei voi ostaa tilauslomakkeella, joten korjaa se kytkemällä tuote oikeaan hintaan.

Listan oikeassa yläkulmassa näkyy tuotteiden ja virheellisten kytkentöjen määrä. Sarake **Tuoteavain** näyttää TaikaTilaukseen tallennetun arvon, ja **Stripen hinta** näyttää kytketyn hinnan tuotteen ja summan Stripessä.

Voit tehdä kytkennän myös tällä sivulla:

1. Paina tuotteen kohdalla **Kytke…**.
2. Valitse tuotteelle Stripen hinta listasta. Jos jollakin hinnalla on tuotteen lookup key (`tuote_<TuoteID>`), se on valittuna valmiiksi.
3. Paina **Kytke**.

Muutokset tallentuvat heti. Tarkista ennen tallennusta, että tuote ja hinta ovat oikeat. Sivulla voi tarkistaa kaikki kytkennät kerralla, esimerkiksi hinnanmuutoksen jälkeen.

#### Kytkennän poistaminen

Tuotteen sivulla ja Kupongit-sivulla jokaisen kytkennän kohdalla on painike **Poista kytkentä**. Vahvistusikkuna kertoo, minkä tuotteen kytkentä poistetaan. Tarkista tuote ja vahvista poisto painikkeella **Poista kytkentä**.

- Hinnan kytkennän poisto tyhjentää tuotteen tuoteavaimen. Tuotetta ei voi myydä Stripellä ennen kuin se kytketään uudelleen.
- Kupongin kytkennän poisto tyhjentää tuotteen kuponkikentän. Tilauslomake ei enää käytä kuponkia tällä tuotteella.

Poisto ei muuta mitään Stripessä: hinta, lookup key ja kuponki säilyvät ennallaan.

#### Esimerkki: kampanjatuote, ensimmäinen kuukausi 0 €

Esimerkissä nykyisen kuukausitilauksen (7,50 €/kk) rinnalle tehdään määräaikainen kampanja, jossa ensimmäinen kuukausi on maksuton. Nykyinen tuote ja sen linkit jäävät ennalleen.

1. **Kopioi tuote TaikaTilauksessa.** Avaa Asetukset → Tilaustuotteet, avaa nykyinen tuote ja paina **Kopioi tuote**. Kopioon ei tule Stripe-kytkentää eikä kuponkia. Muuta kopion tuotenumero ja nimi. Pidä hinta normaalina (7,50 €), koska se näytetään tilauslomakkeella seuraavien jaksojen hintana.
2. **Aseta valittavuus.** Aseta kohtaan **Valittavissa aikavälillä** kampanjan päättymispäivä. Kampanja sulkeutuu päättymispäivän jälkeen itsestään. Tuote näkyy kytkentälistassa vain, kun se on valittavissa tänään, joten alkupäivän on oltava viimeistään kytkentäpäivä.
3. **Luo Stripeen uusi hinta.** Lisää Stripessä tuotteelle uusi toistuva hinta 7,50 €/kk. Kampanjatuote tarvitsee oman hinnan, vaikka summa on sama kuin nykyisellä tuotteella, koska lookup key voi olla vain yhdellä hinnalla.
4. **Kytke hinta.** Avaa StripeGatewayssa tuotteen sivu ja paina uuden hinnan rivillä **Luo lookup key…**. Valitse kampanjatuote ja pidä **Kytke tuote samalla tähän hintaan** päällä.
5. **Luo ja kytke kuponki.** Paina Kupongit-sivulla **Uusi kuponki…**: alennus 100 %, kesto **Kerran**. Paina sitten kupongin rivillä **Kytke TaikaTilaukseen…**, valitse kampanjatuote ja tarkista, että hinta kupongilla on 0,00.
6. **Ota tuote käyttöön tilauslomakkeella.** Lisää kampanjatuote TaikaTilauksen Asetuksissa kohtaan **Tilauslomakkeen piilotetut tuotteet (linkkitarjoukset)**, jolloin tuote näkyy vain kampanjalinkin kautta. Lisää tuote vasta, kun kampanja alkaa.
7. **Testaa linkki.** Kampanjasivun linkki on muotoa `https://<lehtitalosi TaikaTilaus-osoite>/palvelut.aspx?p=til&p2=<TuoteID>`. Tilauslomakkeella pitäisi lukea "Ensimmäinen jakso 0,00 €, seuraavat jaksot 7,50 €".

Kampanjan aikana tehdyt tilaukset jatkuvat ensimmäisen kuukauden jälkeen hintaan 7,50 €/kk.

### Erääntyneet

**Erääntyneet**-sivu listaa avoimet laskut eli veloitukset, joita Stripe ei ole saanut perittyä. Käytännössä nämä ovat tilaajia, joiden kortilta kuukausimaksu ei ole onnistunut. Stripe yrittää veloitusta automaattisesti uudelleen muutaman kerran, jos se ei onnistu, tilaus päättyy.

Rivin **Lasku**-painike avaa Stripen laskusivun, jonka linkin voi lähettää tilaajalle maksettavaksi. Yläreunassa näkyy avointen laskujen määrä ja summa.

![StripeGateway - Erääntyneet](/img/integraatiot/stripe-eraantyneet.png)

### Vanhentuneet kortit

**Vanhentuneet kortit** -sivu listaa aktiiviset tilaajat, joiden kortti on jo vanhentunut tai vanhenee lähikuukausina. Vanhentuneella kortilla seuraava veloitus epäonnistuu, joten näille tilaajille kannattaa lähettää pyyntö päivittää kortti ennen seuraavaa veloitusta. Tilaaja päivittää kortin itse TaikaTilauksen OmaPalvelussa. Sivun lataus voi kestää hetken, koska kaikkien aktiivisten tilausten kortit tarkistetaan.

![StripeGateway - Vanhentuneet kortit](/img/integraatiot/stripe-vanhetuneet.png)

### Maksutavat

**Maksutavat**-sivu näyttää, mitä maksutapoja Stripen kassasivu tarjoaa tilaajalle, esimerkiksi kortit, Apple Pay, Google Pay, Link ja MobilePay. Yläreunan merkki kertoo, onko tili tuotanto- vai testitili.

- **Tila** kertoo Stripen asetuksen: **Käytössä** tai **Ei käytössä**.
- **Kassalla** kertoo, tarjotaanko maksutapaa todella: sen pitää olla käytössä ja Stripen hyväksymä tilille. Jos hyväksyntä puuttuu, maksutavan kohdalla lukee **odottaa Stripen hyväksyntää**.

Kassasivu näyttää vain kyseiseen maksuun sopivat tavat. Esimerkiksi Apple Pay näkyy Safarissa Apple-laitteella, jonka Walletissa on kortti, ja Google Pay Chromessa tai Androidilla, kun Google-tilillä on kortti. Korealaiset lompakot (Kakao Pay, Naver Pay, PAYCO ja Samsung Pay) toimivat vain wonilla, joten niitä ei näytetä euromaksuissa.

Sivu vain näyttää maksutavat. Ne otetaan käyttöön tai poistetaan Stripen hallintapaneelissa kohdassa **Settings → Payments → Payment methods**, erikseen testi- ja tuotantotilillä.

### Stripen tapahtumat

Tapahtumat ovat Stripen kirjaamia yksittäisiä tapahtumia: maksu onnistui, maksu epäonnistui, tilaus luotiin, tilaus päättyi ja niin edelleen. Stripe säilyttää tapahtumia noin 30 vuorokautta.

- **Tyyppi:** valitse listasta yksi tai useampi tapahtumatyyppi (Ctrl + klikkaus). Tyhjä valinta näyttää kaikki.
- **Alkaen** ja **Asti:** aikaväli. Oletuksena viimeiset 7 vuorokautta. Tyhjennä kentät, jos haluat koko historian.
- **Ohje** avaa taulukon, jossa jokainen tapahtumatyyppi on selitetty suomeksi.

Sama asia näkyy Stripessä usein useana tapahtumana. Esimerkiksi onnistunut kuukausiveloitus tuottaa sekä *Lasku maksettu* että *Maksu onnistui* -tapahtuman. Etusivun luvut lasketaan *Lasku maksettu* -tapahtumista.

![StripeGateway - Stripen tapahtumat](/img/integraatiot/stripe-tapahtumat.png)

### Webhookit

Stripe lähettää tapahtumat, esimerkiksi onnistuneen maksun tai tilauksen päättymisen, heti myös StripeGatewaylle. Näitä ilmoituksia kutsutaan webhookeiksi. StripeGateway välittää TaikaTilaukselle sen tarvitsemat tapahtumat esimerkiksi kesken jääneen tilauksen viimeistelyyn ja maksetun laskun kuittaamiseen.

**Webhookit**-sivu näyttää viimeisimmät 200 vastaanotettua tapahtumaa, uusin ensin. Sivun yläreunassa näkyy, onko välitys TaikaTilaukseen päällä. Välityksen ottaa käyttöön ja osoitteet asettaa TaikaTilaus-tuki.

- **Allekirjoitus: OK** tarkoittaa, että tapahtuma tuli varmasti Stripeltä.
- **Välitys** näyttää tilan: **odottaa**, **välitetty** (ja mitä TaikaTilaus teki) tai **epäonnistui**. Epäonnistunutta välitystä yritetään automaattisesti uudelleen kasvavin välein, minuutista 12 tuntiin, runsaan vuorokauden ajan. Jos välitys ei silloinkaan onnistu, rivi merkitään epäonnistuneeksi. Sen voi välittää uudelleen painikkeella **Välitä uudelleen…**.
- **Ei välitetty** tarkoittaa, että välitys ei ollut päällä tai TaikaTilaus ei tarvitse tämän tyyppistä tapahtumaa.
- Jos Stripe lähettää saman tapahtuman useamman kerran, se näytetään yhtenä rivinä ja välitetään vain kerran. Rivillä näkyy toistojen määrä, esimerkiksi **toistettu 2 krt**.

Sivua tarvitaan lähinnä selvitettäessä, miksi tilaus tai maksu ei ole päivittynyt TaikaTilaukseen.

### Täsmäytys

Täsmäytys vertaa Stripen aktiivisia tilauksia TaikaTilaukseen. **Poikkeama** on tilaus, joka on Stripessä maksettu ja voimassa mutta puuttuu TaikaTilauksesta. Yleisin syy on, että asiakas maksoi Stripessä mutta ei palannut vahvistussivulle, jolloin tilaus jäi TaikaTilauksessa kesken.

- Täsmäytys ajetaan automaattisesti neljän tunnin välein. Sen voi käynnistää heti painikkeella **Aja täsmäytys nyt**; tulos näkyy parin minuutin kuluttua.
- Sivulla näkyvät tilin tila (milloin viimeksi tarkistettu, aktiivisten tilausten määrä Stripessä ja TaikaTilauksessa, poikkeamien määrä), avoimet poikkeamat ja tarkistushistoria.
- Uusista poikkeamista lähtee ilmoitus TaikaTilauksen ylläpidolle.

![StripeGateway - Täsmäytys](/img/integraatiot/stripe-poikkeamat.png)

#### Poikkeaman korjaaminen

Avaa poikkeama painikkeella **Tiedot**. Sivulla näkyvät tilaajan Stripe-tiedot, Stripen tilaus ja laskut sekä TaikaTilauksen tilaukset samalle asiakkaalle. Alimpana on ohje *Näin korjaat*:

1. Paina **Viimeistele TaikaTilauksessa**. Vahvistusikkuna kertoo, mitä tehdään, ja **Viimeistele** suorittaa sen: TaikaTilaus luo puuttuvan tilauksen tai kytkee kesken jääneen tilauksen Stripeen, luo laskun ja kuittaa sen maksetuksi. Tämä riittää lähes aina. Painiketta voi painaa uudelleen huoletta: valmista tilausta ei muuteta.
2. Vain jos viimeistely ilmoittaa virheen (esimerkiksi asiakasta tai tuotetta ei löydy TaikaTilauksesta): luo tilaus käsin TaikaTilauksessa kohdan *Tiedot käsin tekemistä varten* tiedoilla ja anna sitten tilausnumero painikkeesta **Anna tilausnumero käsin…**.

Kun poikkeama on korjattu, se poistuu listalta seuraavassa täsmäytysajossa.

#### Poikkeaman poistaminen listalta

Jos poikkeama on esimerkiksi testiosto, jota ei ole tarkoitus viedä TaikaTilaukseen, paina Tiedot-sivun oikeasta yläkulmasta **Poista poikkeamalistalta…**. Poikkeama katoaa listalta pysyvästi. Poistetut näkyvät Täsmäytys-sivun kohdassa *Listalta poistetut poikkeamat*, josta ne voi palauttaa.

:::note
Listalta poisto ei peru tilausta Stripessä. Jos tilaus on tarpeeton, peru se Stripessä.
:::


![StripeGateway - Poikkeaman tiedot](/img/integraatiot/stripe-poikkeamat2.png)

## Hinta

TaikaTilauksen osalta Liittymästä veloitetaan käyttöönottomaksu sekä [hinnaston](https://www.taikatilaus.fi/hinnasto) mukainen kiinteä kuukausimaksu. 

Lisätietoja:   
Jari Mäkelä  
p. 050 557 6130  
jari.makela@taikatilaus.fi
