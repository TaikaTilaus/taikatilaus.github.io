---
sidebar_position: 5
description: Asiakasyhteenvedot — Ei vielä käytettävissä.
---

# Asiakasyhteenveto

**Asiakasyhteenveto** kokoaa kaikkien asiakkaiden luvut yhdelle sivulle: asiakkaiden määrän, tilaajat, ilmoitusasiakkaat ja maksut. Se vastaa asiakaskortin **Yhteenvetoa**, mutta koskee kaikkia asiakkaita. Yksittäisen asiakkaan yhteenvedon näet asiakaskortin **Yhteenveto**-välilehdeltä.

Avaa sivu valitsemalla **Raportit → Asiakasyhteenveto**. Luvut haetaan, kun avaat sivun, muutat rajauksia tai napsautat **Päivitä**.

:::info HUOM!

Sovelluksen tila rajaa, mitä sivulla näytetään. Tilaajat-osio näkyy, kun tilausten hallinta on käytössä. Ilmoitusasiakkaat-osio näkyy, kun ilmoitusten hallinta on käytössä. Asiakkaat- ja Maksut-osiot näkyvät aina.
:::

## Rajaukset

Sivun yläosassa valitaan, mille ajalle ja mille asiaskaryhmille asiakkaille luvut lasketaan.

### Kohdepäivä

Kohdepäivä on oletuksena tämä päivä. Voit valita aikaisemman päivän, jolloin luvut kertovat tilanteen sinä päivänä. Napsauta **Tänään**, kun haluat palata nykypäivään. Tulevaa päivää ei voi valita.

Kohdepäivä vaikuttaa seuraaviin lukuihin:

- **Asiakkaat:** mukaan lasketaan asiakkaat, jotka on lisätty kohdepäivään mennessä. Sittemmin poistettuja ei lasketa.
- **Tilaajat:** tilaus on voimassa alkupäivänä, loppupäivänä ja katkaisupäivänä. Katkaistuksi tilaus lasketaan, kun katkaisupäivä on kohdepäivä tai aiemmin.
- **Ilmoitusasiakkaat:** asiakas on aktiivinen, kun hänen viimeisin ilmoituksensa on enintään 12 kuukautta ennen kohdepäivää tai myöhemmin.
- **Maksut:** lasku on erääntynyt, kun sen eräpäivä on ennen kohdepäivää.

### Vuodet

**Vuodet**-valinnoilla (alusta – loppuun) rajataan vuosikohtaiset luvut valitulle vuosivälille:

- uudet asiakkaat lisäyspäivän mukaan
- ilmoitusmyynti ilmestymispäivän mukaan
- laskutus laskun päivän mukaan

### Asiakastyyppi ja ryhmä

Nämä rajaukset koskevat kaikkia sivun lukuja.

- **Asiakastyyppi:** Henkilö, Yritys, Yhteisö, Kuolinpesä tai (ei tyyppiä).
- **Ryhmän tyyppi** ja **Arvo:** rajaa asiakkaat ryhmittelyn mukaan. Valitse ensin ryhmän tyyppi, jolloin Arvo-valikkoon tulevat sen arvot. Voit jättää Arvon tyhjäksi, jolloin mukaan tulevat kaikki kyseisen ryhmätyypin asiakkaat.

Napsauta **Tyhjennä**, kun haluat palauttaa kaikki rajaukset oletuksiin.

## Asiakkaat

Osio näyttää:

- **Asiakkaita:** asiakkaiden määrä ilman poistettuja asiakkaita. Luku on linkki, joka avaa Asiakkaat-listan.
- **Uudet asiakkaat vuosittain:** pylväskaavio asiakkaista, jotka on lisätty kyseisenä vuonna (enintään 10 viimeistä vuotta). Pylvästä napsauttamalla avautuu Asiakkaat-lista, jossa on rajattu kyseisen vuoden Lisäyspäivä.
- **Asiakkaat asiakastyypeittäin:** ympyräkaavio. Viipaleen napsauttaminen avaa Asiakkaat-listan kyseisellä tyypillä.

## Tilaajat

Tilaajalla tarkoitetaan asiakasta, jolla on tilaus. Poistettuja tilauksia ei lasketa.

- **Voimassa olevia tilaajia:** tilaaja, jolla on voimassa oleva, nukutettu tai alkava tilaus. Luku avaa Asiakkaat-listan, jossa on valittuna lisähakuehto Aktiivinen tilaaja.
- **Entisiä tilaajia:** tilaajat, joilla ei ole voimassa olevaa tilausta. Luku avaa Asiakkaat-listan, jossa on valittuna Passiivinen tilaaja.
- **Joskus katkaissut:** tilaajat, joilla ainakin yksi tilaus on katkaistu.

### Voimassa olevien tilaajien kehitys

Viivakaavio näyttää voimassa olevien tilaajien määrän jokaisen kuukauden viimeisenä päivänä ja kohdepäivänä. Kun viet hiiren pisteen päälle, näet päivämäärän ja tilaajamäärän.

Luvut lasketaan tilausten päivämääristä, ei tallennetusta tilasta. Historia on sama kuin tilauksista nyt näkyy, vaikka tilaa olisi myöhemmin muutettu.

### Voimassa olevat tilaajat tilaajuuden keston mukaan

Pylväskaavio jakaa voimassa olevat tilaajat sen mukaan, kuinka kauan he ovat olleet tilaajia. Kesto lasketaan tilaajan ensimmäisen tilauksen alkupäivästä tähän päivään. Katkot eivät vähennä kestoa.

## Ilmoitusasiakkaat

Ilmoitusasiakas on asiakas, jolle on myyty vähintään yksi ilmoitusvaraus. Jos varauksella on eri maksaja, myynti lasketaan varauksen asiakkaalle. Poistettuja varauksia ei lasketa.

- **Ilmoitusasiakkaita:** asiakkaat, joilla on ainakin yksi ilmoitusvaraus.
- **Aktiivisia:** asiakkaat, joilla on ilmoitus viimeisen 12 kuukauden aikana tai tulossa.
- **Varauksia:** myytyjen ilmoitusvarausten määrä.
- **Myynti yhteensä:** myynnin summa ilman alv:tä.
- **Ilmoitusmyynti vuosittain:** pylväskaavio ilmestymispäivän mukaan. Pylvästä napsauttamalla avautuu Ilmoitukset-lista kyseisen vuoden varauksista.
- **Ilmoitusmyynti kanavittain:** ympyräkaavio myyntituotteen kanavan mukaan. Viipale avaa Ilmoitukset-listan kyseisellä kanavalla (valitulla vuosivälillä tai koko myynnin ajalta).
- **Suurimmat ilmoitusasiakkaat myynnin mukaan:** kymmenen suurinta asiakasta. Taulukossa ovat Asiakas, Varauksia (kpl), Myynti (rahamääränä) ja Viimeisin ilmoitus (pvm). Asiakkaan nimi avaa asiakaskortin ja varausten määrä avaa Ilmoitukset-listan kyseisen asiakkaan varauksista.

## Maksut

Maksut koostuvat numeroiduista laskuista maksajittain. Luonnoksia, poistettuja laskuja, hyvityslaskuja ja hyvitettyjä laskuja ei lasketa.

- **Laskutettu yhteensä** ja laskujen määrä.
- **Maksettu yhteensä:** laskutettu summa vähennettynä avoimella summalla.
- **Avoinna:** avoin summa, josta erääntynyt on mainittu erikseen.
- **Maksajia, joilla on erääntynyt lasku:** maksajat, joilla on erääntynyt lasku. Luku näkyy punaisena, kun niitä on.
- **Laskutettu ja maksettu vuosittain:** pylväskaavio laskun päivän mukaan. Harmaa pylväs on laskutettu ja vihreä maksettu. Pylväät avaavat Laskujen haun kyseisen vuoden laskuista: harmaa kaikista laskuista (tilat Avoin, Lähetetty, Erääntynyt ja Maksettu) ja vihreä maksetuista.
- **Laskutetun jakauma:** ympyräkaavio, jossa ovat Maksettu, Avoinna (ei erääntynyt) ja Erääntynyt. Viipale avaa Laskujen haun kyseisellä tilalla.
- **Suurimmat erääntyneet saatavat maksajittain:** kymmenen suurinta erääntynyttä saatavaa. Taulukossa ovat Asiakas, Erääntyneitä laskuja (kpl), Erääntynyt (summa) ja Vanhin eräpäivä. Nimi avaa asiakaskortin, ja laskujen määrä avaa Laskujen haun, jossa on rajattu kyseinen maksaja ja tila Erääntynyt.

## Kaavioista avautuvat listat

Moni kaavion pylväs, viipale ja luku on linkki. Se avaa saman sivun sisällä sen hakusivun, jossa näkyvät rivit, joista luku muodostuu: Asiakkaat, Ilmoitukset tai Laskujen haku. 

Jos luvun yllä oleva teksti on harmaa eikä sitä voi napsauttaa, luvusta ei ole listaa. Esimerkiksi Joskus katkaissut -luku on tällainen.