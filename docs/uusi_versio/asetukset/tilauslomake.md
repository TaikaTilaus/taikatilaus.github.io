---
sidebar_position: 9
description: Tilauslomake.
---

# Tilauslomake

**Tilauslomake**-sivulla määrität julkisen tilauslomakkeen asetukset: mitkä tuotteet tilauslomakkeella näkyvät, tilausvaiheiden tekstit, maksutavat, ehdot, vahvistusviesti ja lomakkeen ulkoasu.

Avaa sivu valitsemalla **Asetukset → Tilauslomake**.

:::info HUOM!

Sivu on vain yrityksen pääkäyttäjille. Jos käytössäsi on vain luku -tila (esimerkiksi demoympäristössä), voit selata asetuksia, mutta et muuttaa niitä.
:::

Sivun yläreunassa näkyy tilauslomakkeen osoite. Napsauta sitä, kun haluat avata lomakkeen uuteen välilehteen ja tarkistaa tallennetun muutoksen heti.

Samat asetukset ovat myös vanhan TaikaTilauksen **Asetukset**-sivulla ja muutos näkyy molemmissa. Landing-sivuilla muutos voi näkyä viiveellä, enintään viiden minuutin kuluttua.

## Sivun käyttö

Sivu on pitkä, ja kaikki osiot ovat aluksi kiinni. Avaa tai sulje yksittäinen osio napsauttamalla osion otsikkorivin nuolta. **Avaa kaikki osiot** ja **Sulje kaikki osiot** -painikkeet avaavat tai sulkevat kaikki kerralla.

Muutokset tallennetaan vasta, kun napsautat sivun alareunan **Tallenna**-painiketta. Painike on käytössä vain, kun jokin asetus on muuttunut. **Peruuta** palauttaa kaikki muuttuneet asetukset tallennettuihin. Jos jonkin osoitteen muoto on virheellinen, Tallenna ei ole käytössä. Onnistuneen tallennuksen jälkeen painikkeen vieressä lukee Tallennettu.

Sivun yläosassa on **Valitut tuotteet** -yhteenveto, joka kokoaa kolmen tuotelistan valinnat. Yhteenveto päivittyy valitessasi tuotteita ennen tallennusta. Sen rivit voivat sisältää merkinnät: *piilotettu*, *erillistuote*, *ei valittavissa nyt* tai *ei löydy*.

## Tilauslomakkeen tuotteet

Tässä osiossa valitset tuotteet, jotka tilaaja voi tilata lomakkeella.

- Tuotteen **Valittavissa**-aikaväli (Tuotteet-sivulla) määrää, milloin tuote näkyy lomakkeella.
- Tuotteen voi avata lomakkeelle valmiiksi valittuna suoralla linkillä. Uuden lomakkeen linkki on muotoa `/tilaus/<tunnus>/<tuotteen ID>`. Vanhan lomakkeen linkki on `palvelut.aspx?p=til&p2=<tuotteen ID>`. Tuotteen pitää olla valittavissa ja tässä listassa.

Valitse tuotteet merkitsemällä ne ruksilla. Tuotteet on ryhmitelty tuoteryhmittäin. **Rajaa listaa** -kenttä suodattaa listaa, ja **Näytä vain valitut** näyttää pelkästään valitut. **Valittu: n** kertoo valittujen määrän.

Listassa näkyvät vain tuotteet, jotka täyttävät kaikki ehdot:

- tuotetta ei ole piilotettu
- tuote ei ole erillistuote
- tänään on tuotteen Valittavissa alkaen – päättyen -välillä (tyhjä päättymispäivä tarkoittaa, että tuote ei ole valittavissa)

Jos aiemmin valittu tuote ei enää täytä ehtoja, se näkyy listassa merkinnällä, mutta lomake ei näytä sitä. Jos tuote puuttuu listasta, tarkista sen asetukset Tuotteet-sivulla. Jos asetuksessa on tuotteita, joita ei löydy, ne näkyvät varoituksessa ja voit poistaa ne x-kuvakkeella.

## Piilotetut tuotteet (linkkitarjoukset)

Piilotetut tuotteet eivät näy lomakkeen tuotelistassa, vaan vain suoralla linkillä. Valinta toimii samoin kuin Tilauslomakkeen tuotteet -osiossa. Tuotteen pitää olla valittavissa.

## Tarjoustuotteet

Tässä osiossa valitset yllä valituista tuotteista ne, joilla on voimassa tarjous. Tarjoustuotteella on lomakkeella tarjousmerkki. Jos valittu tarjoustuote ei ole Tilauslomakkeen tuotteissa eikä Piilotetuissa tuotteissa, sivu varoittaa siitä.

## Oletuksena valittu tuote

Valitse valikosta tuote, joka on lomakkeella valmiiksi valittuna. **Ei tuotetta** tarkoittaa, ettei valintaa ole. Jos valittu tuote ei ole Tilauslomakkeen tuotteissa, sivu varoittaa siitä.

## Tilauksen valinta (vaihe 1)

Osiossa määritetään vaiheen 1 tuotevalinnan tekstit.

**Täystilaus ja Digitilaus:** kummankin kortin **Otsikko** ja **Info**. Tyhjä kenttä näyttää oletustekstin (harmaa teksti kentässä). Jos et halua infotekstiä, kirjoita kenttään pelkkä `-`. Otsikot näkyvät myös valitun tilauksen yhteenvedossa vaiheissa 2 ja 3.

**Tilaustyyppien painikkeet:** jokaiselle tilaustyypille oma Otsikko ja Info.

Lisäksi:

- **Näytä alkaen-hinta:** Täystilauksen ja Digitilauksen kortissa näkyy "alkaen … € / kk", eli lomakkeen sen lajin tuotteiden halvin kuukausihinta.
- **Näytä linkki "Näytä kaikki tuotteet listana":** vaiheen 1 yläreunan linkki, josta tilaaja näkee kaikki tuotteet yhtenä listana.
- **Tarjousmerkin teksti:** tarjoustuotteen kortissa, listarivillä ja Valittu tilaus -laatikossa näkyvä merkki (peukkukuvake ja tämä teksti). Enintään 40 merkkiä. Tyhjä = oletusteksti.
- **Arvonlisäveroteksti:** hintojen alla näkyvä teksti. Tyhjä = oletusteksti (valitun tuotteen alla toinen oletusteksti), pelkkä `-` = ei tekstiä.

## Yhteystiedot (vaihe 2)

Osio määrittää tilauksen alkamispäivän:

- **Näytä "Tilaus alkaa" (tilaaja valitsee alkamispäivän):** jos ei näytetä, tilaus alkaa tilauspäivänä (tai tuotteen "Tilaus mahdollinen alkaen" -päivänä, jos se on myöhemmin).
- **Alkamispäivä enintään (päivää tilauspäivästä):** 0–90 päivää. 0 tarkoittaa vain tilauspäivää. Tyhjä = kuukausi, kuten vanhalla lomakkeella. Suurempi luku tallennetaan 90 päivänä.

Stripe-tuotteet (korttitilaus) alkavat aina tilauspäivänä, eikä niille näytetä alkamispäivää.

## Maksutavat

Valitse maksutavat, joista tilaaja valitsee lomakkeen vaiheessa 3. Valittavat maksutavat ovat:

- Paperilasku
- Sähköpostilasku
- Visma Pay verkkomaksu
- Paytrail verkkomaksu
- Stripe verkkomaksu

Jos mitään maksutapaa ei ole käytössä, lomakkeella ei voi tilata. Jos vain Stripe on käytössä, muita kuin Stripe-tuotteita (tilaustyyppi 3) ei voi tilata.

### Stripe

Stripe on tarkoitettu vain tuotteille, joiden tilaustyyppi on 3 (Ulkoinen kesto) ja joiden tuoteavain on Stripe-hinta (toistuva `TOI;…` tai kertamaksu `KER;…`). Niille se on ainoa maksutapa. Stripeä ei tarjota lahjatilauksille.

- **Stripe testitilassa:** testitilassa maksut tehdään Stripen testitilillä testikorteilla, eikä oikeaa rahaa veloiteta. Joissakin ympäristöissä (demo, kehittäjän kone, testisivusto) Stripe on aina testitilassa.
- Sivu näyttää, onko StripeGatewayn osoite ja rajapinta-avain asetettu palvelimelle. Avaimia ei näytetä.
- **Testaa yhteys** tarkistaa yhteyden.
- Jos Stripe-tuotteelta puuttuu Stripe-hinta, sivu varoittaa, ja Stripeä ei tarjota sille.
- Voit antaa Stripelle oman **Otsikon** ja **Infotekstin**. Tyhjä infoteksti = oletusteksti, pelkkä `-` = ei infotekstiä. Kupongin ensimmäisen jakson hinta näytetään aina infotekstin edessä.

### Paytrail

- **Paytrail testitilillä:** maksetaan Paytrailin testitilillä, eikä oikeaa rahaa veloiteta.
- Sivu näyttää, mitkä Paytrail-tilit ovat käytössä (oletustili ja tuoteryhmäkohtaiset tilit). Varmenteita ei näytetä.
- **Testaa yhteys** testaa kunkin tilin yhteyden.
- Voit antaa oman **Otsikon** ja **Infotekstin**.

### Visma Pay

- **Visma Pay testitilassa:** maksetaan Visma Payn testikauppiaalla.
- Sivu näyttää, onko avaimet asetettu. Avaimet ovat vain palvelimen web.configissa, eikä niitä näytetä.
- **Testaa yhteys** luo Visma Payhin 0,01 €:n maksun, joka on jo vanhentunut. Maksu näkyy kauppiaspaneelissa nimellä YHTEYSTESTI-….
- Voit antaa oman **Otsikon** ja **Infotekstin**.

### Ei verkkomaksua näille tuotteille

Kirjoita tuoteryhmät tai tuotteiden ID:t, yksi per rivi. Näille tuotteille ei tarjota Paytrailia eikä Visma Payta (esimerkiksi yhdistelmätilaus).

### Paperilasku

- **Otsikko** ja **Infoteksti** (oletuksena Otsikko "Paperilasku").
- **Paperilaskutuslisä käytössä tilauslomakkeella:** valinta on käytettävissä vain, kun kirjelaskun laskutuslisätuote on määritelty laskutusmäärityksiin. Sivu näyttää lisätuotteen, jos se on määritelty.

### Sähköpostilasku

- **Otsikko** ja **Infoteksti**.
- **Lasku lähetetään heti tilausvahvistuksen mukana:** kun valinta on päällä, lomakkeella tehty sähköpostilasku liitetään tilausvahvistukseen ja merkitään heti lähetetyksi. Kun valinta ei ole päällä, lasku muodostetaan lähettämättömänä ja se jää Laskujen lähetys -sivulle odottamaan lähetystä.

### Tuotekohtaiset maksutavat

Tuote saa oletuksena kaikki yllä valitut maksutavat. Poista valinta, jos tuotetta ei saa maksaa jollakin tavalla. Listassa näkyy tuotteen nimi ja hinta. Jos tuotteelle on tehty oma valinta, rivillä on merkintä **oma valinta**, ja **Kaikki maksutavat** palauttaa oletuksen. Jos tuotteelta poistetaan kaikki maksutavat, sivu varoittaa, ettei tuotetta voi tilata.

Tilaustyypin 3 tuotteet maksetaan aina Stripellä, joten niille ei voi valita maksutapoja. Jos Stripe ei ole käytössä, sivu varoittaa, ettei tuotetta voi tilata.

## Tilausehdot, tietosuoja ja copyright

Osoitteet ja copyright näkyvät lomakkeen alatunnisteessa kaikissa vaiheissa, ja vaiheessa 3 tilaaja hyväksyy tilausehdot.

- **Tilausehtojen osoite** ja **Tietosuojaselosteen osoite:** anna koko osoite, joka alkaa https:// tai http://, tai jätä tyhjäksi. Osoitteen sijaan voit ladata PDF-tiedoston (enintään sivulla ilmoitettu koko). Tiedosto tallentuu heti. Annettu osoite on aina ladatun tiedoston edellä. Jos osoitetta tai tiedostoa ei ole annettu, lomakkeella ei ole linkkiä.
- **Copyright:** valitse **Näytä © TaikaTilaus** (linkki osoitteeseen www.taikatilaus.fi), tai poista valinta ja kirjoita **Oma copyright-teksti**. Vuosi vaihtuu itsestään. Jos tekstissä on jo ©-merkki, se näytetään sellaisenaan. Tyhjä = © vuosi ja yrityksen nimi. Copyright näkyy alatunnisteessa Tietosuojakäytäntö-linkin perässä.

## Hyväksyminen

Vaiheessa 3 tilaaja hyväksyy tilausehdot (pakollinen) ja voi antaa markkinointiluvat. Valitse, mitkä markkinointiluvat lomakkeella tarjotaan:

- Minulle saa lähettää markkinointisähköpostia
- Minulle saa lähettää markkinointitekstiviestejä
- Minulle saa lähettää markkinointikirjeitä
- Minulle saa soittaa markkinointipuheluita

## Kiitossivu

Tilauksen jälkeen kiitosviestin alla näytetään linkki lehden etusivulle.

- **Lehden etusivun osoite:** koko osoite, joka alkaa https:// tai http://. Ilman osoitetta linkkiä ei näytetä.
- **Linkin teksti:** tyhjä = oletusteksti.

## Infotekstit

Lomakkeen oikealla puolella voidaan näyttää infoalue, jokaiselle vaiheelle oma. Kapealla näytöllä alue on lomakkeen alla. Anna jokaiselle vaiheelle **Otsikko** ja **Teksti**. Jos vaiheen otsikko ja teksti ovat tyhjiä, aluetta ei näytetä. Teksti näytetään sellaisenaan, ja rivinvaihdot säilyvät. **Lisää esimerkkiteksti** täyttää otsikon ja tekstin esimerkillä, jota voit muokata.

## Ulkoasu

Osiossa määritetään lomakkeen pääväri, logo sekä yläpalkin, lomakkeen taustan ja alapalkin väri tai kuva.

- **Pääväri:** vaiheiden numerot, painikkeet, valitut vaihtoehdot, hinnat ja tarjousmerkki.
- **Alapalkin linkkien tausta:** pyöristetty tausta alapalkin linkkien (Palvelun ehdot, Tietosuojakäytäntö, copyright) ympärillä.
- **Logo:** näkyy yläpalkin keskellä (korkeus enintään 160 px, leveys 720 px). Ilman logoa yläpalkissa on asiakkaan tunnus tekstinä.
- **Yläpalkin, lomakkeen taustan ja alapalkin** väri tai kuva.

Kuvat ovat JPG-, PNG- tai WebP-muotoisia ja enintään sivulla ilmoitetun kokoisia. Jokainen kävijä lataa kuvat, joten kuvan on hyvä olla alle 1 Mt. Kuva tallentuu heti, ja värit sekä näyttötavat tallentuvat Tallenna-painikkeella.

Kunkin kuvan kohdalla:
- **Väri:** valitse väri tai anna se muodossa #rrggbb. Tyhjä = valmis väri. Väri näkyy kuvan alla, jos kuva ei peitä koko aluetta.
- **Kuva venytettynä:** yksi kuva täyttää koko alueen (esimerkiksi valokuva).
- **Kuva toistettuna:** kuva monistetaan alkuperäisessä koossaan vierekkäin (esimerkiksi kuvio).

Lehden kehyksessä (`/tilaa/<lehti>/tilaus/…`) näkyy kehyksen oma ulkoasu.

## Tilausvahvistus

Sähköposti, joka lähetetään maksajalle tilauksen jälkeen (tavallisena tekstinä).

- **Otsikko** ja **Viesti:** tyhjä = valmis oletusviesti. **Muokkaa oletusviestiä** täyttää kenttään oletusviestin, jota voit muokata.
- **Digituotteiden versio:** digituotteille voi antaa oman otsikon ja viestin. Tyhjä digiversio = tavallinen viesti.
- **Tagit:** viestissä olevat tagit korvataan tilauksen tiedoilla. **Tagit**-kohdasta näet kaikki tagit. Tärkeimmät ovat:

| Tagi | Merkitys |
|---|---|
| **[[ETUNIMI_SUKUNIMI]]** | tilaajan (maksajan) nimi |
| **[[TUOTE]]** | tuotteen nimi (ulkoinen nimi, jos annettu) |
| **[[TUOTENIMI]]** | tuotteen nimi tuotetaulusta |
| **[[LEHTI]]** | lehti (tuoteryhmä) |
| **[[TILAUSTYYPPI]]** | Kestotilaus / Määräaikainen tilaus / Päivän lukuoikeus |
| **[[KESTO]]** | jakson pituus, esimerkiksi 12 kuukautta |
| **[[TILAUSPÄIVÄ]], [[ALKUPÄIVÄ]], [[LOPPUPÄIVÄ]]** | tilauksen päivä, alkupäivä ja jakson loppupäivä |
| **[[HINTA+ALV]]** | hinta sisältäen arvonlisäveron |
| **[[TILAUSNUMERO]], [[ASIAKASNUMERO]]** | tilausnumero ja maksajan asiakasnumero |
| **[[TILAAJA]], [[MAKSAJA]]** | tilaajan ja maksajan nimi ja osoite |
| **[[TILAAJAN_OSOITE]], [[TILAAJAN_EMAIL]], [[TILAAJAN_PUHELIN]]** | osoite, sähköposti ja puhelin |
| **[[MAKSUTAPA]]** | valittu maksutapa |
| **[[LAHJATILAUS]]** | lahjatilauksessa maksajan tiedot ja pyyntö välittää tieto saajalle, muuten tyhjä |
| **[[LASKU]]** | laskun ohje maksutavan mukaan (liitteenä / toimitetaan erikseen / postitse) |
| **[[KAYTTAJATUNNUS]]** | OmaPalvelu-tunnuksen ohje |
| **[[SALASANALINKKI]], [[SALASANALINKKI_VOIMASSA]]** | uuden tunnuksen salasanan asetuslinkki ja sen voimassaolo |

## Asiakkaan tunnistus

Lomake yhdistää tilauksen olemassa olevaan asiakkaaseen sähköpostin perusteella. Jos nimi on eri, luodaan uusi asiakas ja henkilökunnalle tulee huomio.

**Älä yhdistä tilausta ilmoitusasiakkaaseen:** ohittaa asiakkaat, joilla on ilmoitusmyyntiä, eli tällaiselle asiakkaalle luodaan uusi asiakas.