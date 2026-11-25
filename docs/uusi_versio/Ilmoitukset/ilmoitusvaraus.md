---
sidebar_position: 2
title: Ilmoitusvarauslomake
description: Uusi TaikaTilaus – Ilmoitusvarauslomake — julkaisu ja tuote, koko, hinta ja alennukset (Asiakasalennus, Alennusprosentti, Alennus EUR, Syötä verollinen loppuhinta), laskutus, maksaja, aineistot, Valmistettava materiaali ja InDesign, tilat.
kayttoliittyma: uusi
---

# Ilmoitusvarauslomake

:::note Uusi TaikaTilaus

Tämä ohje koskee uutta TaikaTilausta (kehitysversio). Nykyisen TaikaTilauksen vastaava ohje: [Ilmoitusvaraukset](../../ohjeet/ilmoitustenhallinta/ilmoitukset/ilmoistusvaraukset.md).

:::

Ilmoitusvarauslomakkeella lisäät uuden ilmoitusvarauksen ja muokkaat tallennettua varausta.

Lomake avautuu, kun:

- napsautat varausta [Ilmoitukset-listalla](./ilmoitukset-lista.md) tai [asiakaskortin](../Asiakkaat/asiakaskortti/index.md) [Ilmoitusvaraukset / myynnit](../Asiakkaat/asiakaskortti/ilmoitusvaraukset.md) -osiossa
- valitset listalla asiakkaan ja napsautat **Lisää varaus**, tai napsautat [asiakaskortilla](../Asiakkaat/asiakaskortti/index.md) **+ Lisää varaus**
- luot [Lisää uusi varaus](./uusi-varaus-ja-kopiointi.md#lisaa-uusi-varaus) -ikkunassa yhden varauksen ja napsautat **Luo varaus ja siirry varauslomakkeelle**.

Tallennetun varauksen otsikkona on asiakkaan numero ja nimi. Varauksella ilman asiakasta otsikko on *Tyhjä varaus (ei asiakasta)*.

Otsikon vieressä ovat painikkeet:

- [**Ilmoitukset**](./ilmoitukset-lista.md) (tai [**Asiakaskortti**](../Asiakkaat/asiakaskortti/index.md), jos tulit asiakaskortilta) palaa sivulle, jolta tulit.
- **Asiakkaan tiedot** avaa [asiakaskortin](../Asiakkaat/asiakaskortti/index.md) uuteen ikkunaan.
- **Vaihda asiakas** siirtää varauksen toiselle asiakkaalle. Ks. [Asiakkaan vaihtaminen](#asiakkaan-vaihtaminen).
- **Asetukset** (vain pääkäyttäjä) avaa [Asetukset → Ilmoitukset](../asetukset/ilmoitukset.md) -sivun, jossa valitaan lomakkeella näkyvät kentät.

:::note
Pääkäyttäjä voi piilottaa lomakkeelta kenttiä, joita asiakas ei käytä. Siksi kaikki tällä sivulla kuvatut kentät eivät välttämättä näy lomakkeellasi. Osa kentistä näkyy vain, kun ominaisuus on käytössä.
:::

Lomakkeen osiot voi sulkea ja avata otsikkopalkin oikean reunan nuolesta.

## Myyntikielto

Jos [asiakaskortin](../Asiakkaat/asiakaskortti/index.md) Laskutustiedot-välilehdellä on asiakkaalle merkitty myyntikielto, uutta varausta ei voi tehdä. Sivulle tulee punainen viesti, jossa näkyy myyntikiellon syy. Olemassa olevaa varausta voi muokata.

## Ilmoitusvaraus-osio

Tallennetun varauksen ylimmässä osiossa ovat varauksen perustiedot:

- **Tila** värillisenä merkkinä. Kynäkuvake avaa [tilan muutoksen](#tilan-muuttaminen).
- **Myyntinumero**. Napsauta numeroa, niin myynti avautuu. [Myynti-sivun ohje](./myynti.md). Tyhjällä varauksella tässä lukee *ei myyntiä*.
- **Lisätty** ja **Muutettu**: aika ja käyttäjä.
- **Ulkoinen ID**, jos myynnillä on ulkoinen tunniste (esimerkiksi Pipedriven kaupan numero).

Jos myynnille on annettu pakettihinta, osiossa kerrotaan, että yksittäisen varauksen hintoja ei huomioida laskutuksessa. Varaukselle voi silti antaa hintoja raportointia varten.

## Julkaisu ja tuote

### Myyjä

Uuden varauksen myyjä on [asiakaskortin](../Asiakkaat/asiakaskortti/yhteystiedot.md#lisätiedot) myyjä. Jos asetus *Käyttäjä oletusmyyjänä* on päällä, myyjä on kirjautunut käyttäjä, kun hänen roolinsa on myyjä. Voit vaihtaa myyjän varauskohtaisesti. Myyjän vaihto vaihtaa myös myynnin myyjän.

### Materiaali

Uuden varauksen lomakkeen alussa on **Materiaali**-valinta, jos asiakkaalla on aiempia materiaaleja tai [Microsoft 365 -aineistotuotanto](../asetukset/muut-asetukset/microsoft-365.md) on käytössä. Valitse:

- **Uusi materiaali** (oletus), kun ilmoitus tehdään uutena, tai
- asiakkaan aiempi materiaali, kun sama ilmoituspohja tulee uudelleen. Materiaali näkyy muodossa "materiaalinumero · koko · julkaisu · tekstin alku (N varausta)".

Kun valitset aiemman materiaalin, kanava, tuote, koko, ilmoitusosasto ja ilmoitusteksti tulevat materiaalin viimeisimmästä varauksesta. Tarkista tiedot. Tallennettaessa uudet varaukset liitetään materiaaliin, ja ne saavat sen jaetut tiedostot. Jos muutat kokoa, koon vieressä on varoitus, mutta voit tallentaa.

Jos asiakkaalla on paljon materiaaleja, valinnan vieressä on hakukenttä, jossa voit hakea materiaalinumerolla tai tekstillä.

Microsoft 365 -aineistotuotantoa käyttävillä asiakkailla voit myös kirjoittaa **Materiaalinumero**-kenttään numeron ja napsauttaa **Hae**. Numero haetaan TaikaTilauksesta ja sen InDesign-tiedosto SharePointista. Uusi materiaali saa numeron tallennettaessa.

### Kanava, tuote ja julkaisu

1. Valitse **Kanava**, esimerkiksi lehti.
2. Valitse **Tuote**. Valikossa ovat valitun kanavan myyntituotteet. Kanavan vaihto tyhjentää tuotteen, julkaisun ja ilmoitusosaston.
3. Valitse **Ilmoitusosasto**, jos tuotteella on osastoja. Valikossa ovat tuotteen sallimat osastot. Rajaus tehdään [Tuotteet-sivun](../asetukset/tuotteet.md) Myyntituotteet-kohdassa. Osaston oma hinta korvaa pmm-hinnan. [Ilmoitusosastot](../asetukset/tuotteet.md#ilmoitusosastot).
4. Valitse **Julkaisu**. Uudella varauksella valikossa ovat tämän päivän jälkeen ilmestyvät julkaisut, ja ensimmäinen niistä on valittu valmiiksi. Julkaisu poistuu listalta ilmestymispäivän alkaessa kello 00.00. **Näytä vanhat julkaisut** näyttää myös nämä julkaisut.

Tuote on pakollinen. Jos tallennat varauksen ilman julkaisua, se jää tilaan ALUSTAVA, ja siitä varoitetaan.

#### Julkaisun vaihtaminen

Voit vaihtaa tallennetun varauksen julkaisun valitsemalla lomakkeella toisen julkaisun ja tallentamalla.

- **Hinta säilyy** julkaisun vaihdossa.
- **Aineistot siirtyvät:** varauksen tiedostokansio siirretään vanhan julkaisun kansiosta uuden julkaisun kansioon. Jos uudessa kansiossa on jo samanniminen tiedosto, sitä ei korvata. Tiedosto jää vanhaan kansioon, ja saat siitä varoituksen.
- **Planner:** vanha julkaisu merkitään muuttuneeksi, jotta sen Planner-tiedot lähetetään uudelleen ilman siirrettyä varausta. Siirretty varaus tulee uuden julkaisun mukaan.

Tarkista siirron jälkeen, että aineistot ovat varauksella.

#### Useaan julkaisuun kerralla

Uudella varauksella voit napsauttaa **Valitse useita julkaisuja** ja valita julkaisut rastilistalta. Jokaiseen valittuun julkaisuun luodaan oma ilmoitusvaraus samoilla tiedoilla ja täydellä hinnalla.

Kun valittuja julkaisuja on vähintään kaksi, listan alla on **Jaettu aineisto** -valinta (oletuksena päällä). Silloin varauksilla on yksi yhteinen aineisto: kun aineisto lisätään yhdelle varaukselle, se lisätään kaikille ryhmän tuleville varauksille. Valmis ilmoitus on aina varauskohtainen. Valintaa ei näytetä, jos olet valinnut aiemman materiaalin.

**Valitse yksi julkaisu** palauttaa tavallisen valinnan.

#### Yhteislehti

Jos julkaisulla on yhteislehtiä, julkaisun alla on *Julkaistaan myös:* ja valintaruutu jokaisesta saman päivän parilehdestä. Lisälehdet on merkitty tekstillä *(lisälehti)*. Oletuksena mitään ei ole valittu. Yhteislehdessä on yksi varaus, yksi hinta ja yksi lasku.

#### Ilmoituspaikan tilanne ja saatavuus

Jos ilmoituspaikoille on asetettu enimmäismäärät, julkaisun kohdalla näkyy paikan tilanne, esimerkiksi *Takasivu: varattu 1 800 / 2 160 pmm*. Täysi julkaisu näkyy punaisena.

Jos tuotteella on saatavuus julkaisua kohden ja julkaisu on täynnä, lomakkeella on varoitus. Tallennettaessa kysytään **Varaa silti** / Peruuta. Raja ei estä varaamista, vaan sinä päätät.

### Netti, radio ja ilmoitustaulu {#jaksovaraus}

Netti-, radio- ja ilmoitustaulukanavan varaus on jaksovaraus. Julkaisun, koon, ilmoitusosaston ja värillisyyden tilalla ovat:

- **Alkupäivä** ja **Loppupäivä** kellonaikoineen. Molemmat ovat pakollisia, eikä loppupäivä voi olla ennen alkupäivää. Uusi jaksovaraus alkaa tänään ja päättyy 30 päivän päästä, kunnes muutat päiviä.
- netissä **Näyttömäärä**
- radiossa **Spottien määrä** ja **Spotin kesto (s)**.

Jaksovarauksella ei ole pmm-hintaa, vaan hinta annetaan Normaalihintana.

### Vaihtoilmoitus

Vaihtoilmoitus myydään ja laskutetaan TaikaTilauksesta, mutta se julkaistaan toisen kustantajan lehdessä. Julkaisun valinnan tilalla on **Julkaisupäivä**, jonka valitset kalenterista. Julkaisupäivä on pakollinen.

Koko, ilmoitusosasto, värillisyys ja hinta annetaan kuten lehti-ilmoituksella. Aineistot ja materiaali toimivat kuten muillakin varauksilla.

### Koko

- **Palstoja lkm** ja **Korkeus mm**. Oletukset tulevat tuotteelta.
- Rivi-ilmoituksella **Rivi-ilmoituksen rivimäärä**.

Koon muutos laskee hinnan uudelleen.

Jos varaukselta puuttuu ilmoitusosasto tai koko, tallennettaessa kysytään *Ilmoituksesta puuttuu tietoja*. Ilmoitus ei nouse Planneriin eikä sijoitu lehteen ennen kuin tiedot on annettu. Voit silti tallentaa napsauttamalla **Tallenna silti**.

### Sijoittelu

Jos sijoittelu on käytössä, ilmoitusosaston tilalla on **Sijoittelu**: **Sivunumero** sekä sijainti sivun vasemmasta yläkulmasta milleinä (**X mm**, **Y mm**, **Leveys (W) mm**, **Korkeus (H) mm**). Sijoittelemattoman varauksen **Sijoita lehteen** -painike avaa julkaisun Sisussa uuteen ikkunaan.

### Värillisyys

Valitse tarvittaessa **Värillinen** tai **Mustavalkoinen**.

## Hinta- ja laskutustiedot

### Hinnoittelu

| Kenttä | Kuvaus |
|---|---|
| **pmm hinta** | Palstamillimetrin hinta. Normaalihinta = pmm-hinta × palstat × korkeus. |
| **Normaalihinta** | Veroton hinta ennen alennusta. Jos muutat sitä käsin, pmm-hinta lasketaan takaisin. |
| **Asiakasalennus** | Asiakkaan sopimusalennukset. Ks. [Asiakasalennus](#asiakasalennus). |
| **Alennusprosentti** | Varauksen alennus prosentteina. |
| **Alennus EUR** | Varauksen alennus euroina. Näkyy vain, jos se on otettu käyttöön. Ks. [Alennus EUR](#alennus-eur). |

Rivi-ilmoituksen hinta lasketaan rivimäärästä. Sopimushintaisen tuotteen (SH) hinta on tuotteen hinta sellaisenaan.

#### Asiakasalennus

**Asiakasalennus**-valinta näkyy, kun asiakkaalle on tehty ilmoitusten alennussääntöjä, jotka sopivat varauksen tuotteeseen ja kanavaan. Alennussäännöt ylläpidetään [asiakaskortin](../Asiakkaat/asiakaskortti/index.md) [Alennukset](../Asiakkaat/asiakaskortti/alennukset.md)-välilehdellä.

- Uudella varauksella ja tuotetta vaihdettaessa tarkimmin sopiva sääntö valitaan valmiiksi, ja sen prosentti viedään **Alennusprosentti**-kenttään.
- Voit valita toisen säännön tai **Ei asiakasalennusta**.
- Jos muutat Alennusprosenttia käsin, valinnaksi tulee *Käsin annettu N %*.

Jos asiakkaalla on yksikköhintasopimus, pmm-hinnaksi tulee sopimushinta, ja kentän alla lukee *Sopimushinta, normaali X*. Jos muutat pmm-hintaa, varaus tallennetaan käsin hinnoiteltuna.

#### Alennuksen kohde

Kun teet varauksen useaan julkaisuun ja annat alennusprosentin, valitse **Alennuksen kohde**:

- **Kaikille varauksille** (oletus): jokainen varaus saa alennuksen.
- **Toistoalennus (valitusta julkaisusta lähtien)**: valitse alkava julkaisu. Sitä aiemmin ilmestyvät varaukset tallennetaan ilman alennusta, ja valitusta julkaisusta alkaen kaikki varaukset saavat alennuksen.

#### Alennus EUR

:::info
**Alennus EUR** -kenttä näkyy vain, jos ylläpito on ottanut euroalennuksen käyttöön. Jos et näe kenttää, ominaisuus ei ole käytössä.
:::

**Alennus EUR** on varauksen alennus euroina (veroton) Normaalihinnasta, esimerkiksi 200 €. Sitä käytetään, kun asiakkaalle on luvattu "Y € alennusta" tai "ilmoitus hintaan X".

- Varauksella on **joko** alennusprosentti **tai** euroalennus. Euroalennuksen syöttäminen nollaa Alennusprosentin, ja Asiakasalennus-valinnaksi tulee *Ei asiakasalennusta*. Alennusprosentin tai asiakasalennuksen valinta nollaa euroalennuksen.
- Tuotteen vaihto nollaa euroalennuksen.
- Euroalennus ei koske valmistuslisää.
- Euroalennus voi olla enintään Normaalihinnan suuruinen. Negatiivista euroalennusta ei voi antaa.
- Euroalennusta ei voi antaa myyntipaketin varaukselle eikä yhteisilmoituksen maksajavaraukselle.

**Laskulla** ilmoitus näkyy Normaalihinnalla, ja heti sen alla on alennusrivi, esimerkiksi:

| Nimike | A-hinta | Netto |
|---|---|---|
| **Ilmoitus 2x50 pmm** | 1 234,00 | 1 234,00 |
| **Alennus** | −200,00 | −200,00 |
| **Yhteensä** | | **1 034,00** |

Näin asiakas näkee alkuperäisen hinnan ja alennuksen.

Jos varauksen koko tai tuote muuttuu myöhemmin, euroalennus säilyy ja lopullinen hinta muuttuu. Jos asiakkaalle on sovittu loppuhinta, syötä se tarvittaessa uudelleen.

Jos euroalennus otetaan myöhemmin pois käytöstä, jo tallennettu euroalennus näkyy lomakkeella lukittuna ja pysyy hinnoissa.

#### Valmistuslisä

Jos valmistuslisä on käytössä, hinta-osiossa ovat **Valmistuslisä** (teksti, esimerkiksi "Aineiston käsittelyn lisätyö 2h") ja **Valmistuslisän hinta** (veroton). Valmistuslisä lisätään hintaan alennuksen jälkeen, eikä alennus koske sitä.

### Lopullinen hinta

- **Lopullinen veroton hinta** = Normaalihinta − alennus (Alennusprosentti tai Alennus EUR) + valmistuslisän hinta.
- **Lopullinen veroll. hinta** = veroton hinta + arvonlisävero tuotteen ALV-prosentilla.

Molemmat lasketaan automaattisesti ja pyöristetään kahteen desimaaliin.

#### Syötä verollinen loppuhinta

Kun asiakkaalle on sovittu loppuhinta, lomake laskee alennuksen tai hinnan puolestasi.

**Kun euroalennus on käytössä:**

1. Napsauta **Syötä verollinen loppuhinta**. Kenttään tulee valmiiksi nykyinen verollinen loppuhinta.
2. Kirjoita asiakkaalle sovittu verollinen loppuhinta.
3. Napsauta **Laske alennus**.

Normaalihinta säilyy, ja erotus tallentuu **Alennus EUR** -kenttään. Alennusprosentti nollataan, ja valmistuslisä säilyy. Laskulla näkyy silloin alkuperäinen hinta ja alennus. Jos loppuhinta on suurempi kuin alkuperäinen hinta, lomake antaa virheen eikä muuta mitään. Verollisesta hinnasta laskettu tulos voi pyöristyksen takia erota sentin.

**Kun euroalennus ei ole käytössä,** käytössä ovat painikkeet **Syötä verollinen loppuhinta** ja **Syötä veroton loppuhinta**. Kirjoita loppuhinta ja napsauta **Laske normaalihinta**. Lomake laskee Normaalihinnan taaksepäin ja korvaa nykyisen Normaalihinnan. Alennusprosentti ja valmistuslisä säilyvät.

**Peruuta** sulkee syöttökentän.

### Laskutus

| Kenttä | Kuvaus |
|---|---|
| **Laskutustapa** | Milloin ja miten varaus laskutetaan. Uuden varauksen laskutustapa on asiakkaan oletus. Vaihtoehdot ks. alla. |
| **Laskutuspäivä** | Lasku luodaan tänä päivänä. Ohittaa laskutustavan mukaisen päivän. |
| **Tallenna valittu laskutustapa maksajan oletukseksi uusille ilmoitusvarauksille** | Tallentaa laskutustavan maksajan [asiakaskortille](../Asiakkaat/asiakaskortti/index.md). |
| **Varaus laskutetaan omanaan (ei koontilaskulla)** | Varaus laskutetaan omalla laskullaan. |
| **Laskun maksaja** | Kuka laskun maksaa. Ks. alla. |

Laskutustavat:

- **Ilmoitus laskutetaan julkaisun jälkeen**: jokainen ilmoitus laskutetaan omalla laskullaan ilmestymisen jälkeen.
- **Ilmoitus laskutetaan kuukauden viim. päivä** (jos käytössä): ilmestymiskuukauden viimeisenä päivänä.
- **Yhdessä varauksessa olevat ilmoitukset laskutetaan yhdellä laskulla kuukausittain …**: saman varauksen ilmoitukset yhdellä laskulla, kun kuukauden viimeinen ilmoitus on ilmestynyt.
- **Kaikki asiakkaan ilmoitusvaraukset laskutetaan koontilaskuna kuukauden viimeisen ilmoituksen ilmestymisen jälkeen**.
- **Kaikki asiakkaan ilmoitusvaraukset koontilaskuna viimeisen ilmoituksen ilmestymisen jälkeen**.
- **Ei laskutusta** (vain mediasivustoilla).

Jos myynnille on annettu pakettihinta, laskutustapaa ja laskutuspäivää ei voi muuttaa.

#### Laskun maksaja

Laskun maksaa yleensä varauksen tilaaja (*Tilaaja maksaa*). Jos [asiakaskortilla](../Asiakkaat/asiakaskortti/index.md) on valittu laskutusosoite toisesta asiakkaasta, se näkyy tässä (*Laskutusosoite asiakkaalta: …*).

Valitse toinen maksaja napsauttamalla **Hae laskun maksajaa**. Valittu maksaja näkyy tekstinä *Eri maksaja: …*. Poista valinta napsauttamalla **Poista**.

Varaus näkyy sekä tilaajan että maksajan [asiakaskortilla](../Asiakkaat/asiakaskortti/index.md).

#### Maksajajako

Jos maksajajako on käytössä, lomakkeella on oma osio, jossa yhteisilmoituksen lasku jaetaan usealle maksajalle euroina tai prosentteina. Jokaiselle maksajalle tehdään oma maksajavaraus. Maksajavarausta ei muokata, kopioida eikä poisteta erikseen: sen lomakkeella on painike **Avaa pääilmoitus**.

### Laskun lisätiedot

- **Ilmoitusmääräin**: asiakkaan antama laskuviite, joka siirtyy laskun tuoteriville.
- **Lisätiedot laskuttajalle**: vain laskuttajan käyttöön. Eivät siirry laskulle eivätkä näy asiakkaalle.
- **Lisätiedot laskun tuoteriville**: näkyvät laskun tuoterivin yhteydessä.

**Vakiotekstit** avaa tallennetut vakiotekstit. **Valitse** korvaa kentän tekstin vakiotekstillä, ja **Poista** poistaa vakiotekstin. **Lisää vakiotekstiksi** tallentaa kentän tekstin uudeksi vakiotekstiksi. Vakiotekstit ovat kaikille käyttäjille yhteiset.

## Lisätiedot

| Kenttä | Kuvaus |
|---|---|
| **Julkiset lisätiedot** | Näkyvät myös asiakkaalle varausvahvistuksessa sekä listalla ja raporteissa. |
| **Sisäiset lisätiedot** | Vain henkilökunnalle. Eivät näy asiakkaalle. |
| **Toiston tiedot** | Esimerkiksi mistä varauksesta aiemmin julkaistu aineisto löytyy. |
| **Kiireellinen** | Merkitsee varauksen kiireelliseksi. |

Lisätiedot eivät vaikuta laskutukseen eivätkä varauksen tilaan.

## Aineistotiedot

### Ilmoitusteksti

Ilmoitukseen tuleva teksti ja siihen liittyvät käsittelyohjeet. Jos ilmoitukseen ei liity tiedostoja ja teksti on annettu, varauksen tila on AINEISTO_TOIMITETTU.

### Tiedostot

Tallennetun varauksen **Tiedostot**-kohdassa ovat varauksen aineistot ja valmis ilmoitus. Hyväksytystä valmiista ilmoituksesta näkyy esikatselukuva. Napsauta kuvaa, niin se avautuu isona.

- **Lisää aineisto**: lisää asiakkaan toimittaman aineiston, esimerkiksi kuvan tai tekstitiedoston. Voit antaa tiedostolle kuvauksen ja käsittelyohjeen.
- **Lisää valmis ilmoitus**: lisää valmiin ilmoituksen PDF-tiedostona. Tiedosto tallennetaan varauksen numerolla, ja varaus merkitään hyväksytyksi.
- **Kopioi aineisto aiemmasta ilmoituksesta**: valitse asiakkaan aiempi varaus listalta tai anna varauksen numero. Varauksen uusin valmis ilmoitus ja kaikki aineistotiedostot kopioidaan tälle varaukselle. Varauksella pitää olla julkaisu.
- Lataa tiedosto napsauttamalla sen nimeä ja poista se roskakorikuvakkeella.

Kun [Microsoft 365 -aineistotuotanto](../asetukset/muut-asetukset/microsoft-365.md) on käytössä, **Lisää aineisto** -painiketta ei näytetä, koska ilmoituksen työtiedostot ovat SharePointissa (ks. [Valmistettava materiaali](#valmistettava-materiaali)). Asiakkaan itse toimittamat aineistot (tilauslomake, OmaPalvelu, aineistolinkki) tulevat varaukselle kuten ennenkin.

**Tiedostot tallentuvat heti, lomaketta ei tarvitse tallentaa.** Lomakkeen tallentamattomat muutokset säilyvät.

Tiedoston vieressä voi olla merkkejä:

- **Jaettu · N varausta**: tiedosto kuuluu jaettuun aineistoon. Vie hiiri merkin päälle, niin näet varausnumerot.
- **OneDrive · automaattinen**: valmis ilmoitus on tuotu automaattisesti OneDrivesta. **Lisätty käsin**: tiedosto on lisätty TaikaTilauksessa.
- **Päivittyy SharePointista d.M. asti** tai **Päivittyy SharePointista vielä tänään**: valmis ilmoitus päivittyy automaattisesti, kun taittaja tallentaa uuden PDF:n SharePointiin. **Ei enää päivity SharePointista**: julkaisun ilmestymispäivä on mennyt, joten painoon mennyt versio jää varaukselle. Merkki näkyy vain, kun Microsoft 365 -aineistotuotanto ja automaattinen tuonti ovat käytössä.

Jaetun aineiston varauksella:

- **Lisää aineisto** -ikkunassa on valinta *Lisää kaikille jaetun aineiston varauksille*, oletuksena päällä. Tiedosto lisätään kaikille ryhmän tänään tai myöhemmin ilmestyville varauksille.
- **Korvaa** vaihtaa jaetun tiedoston uuteen kaikilla ryhmän varauksilla.
- **Jaa ryhmälle** siirtää varauksen oman aineistotiedoston jaettuun aineistoon.
- Jaetun tiedoston poisto kysyy, poistetaanko se vain tältä varaukselta vai kaikilta jaetun aineiston varauksilta.

Jaetun aineiston varauksella on lisäksi **Jaettu aineisto** -kohta, jossa näkyvät ryhmän muut varaukset linkkeinä ja materiaalinumero. Menneet varaukset ovat kohdassa *Aiemmat*. **Irrota tämä varaus jaetusta aineistosta** irrottaa varauksen: jo lisätyt tiedostot jäävät, mutta myöhemmin lisätty aineisto ei enää tule sille.

### Planner

Jos asiakkaalla on Planner käytössä ja varauksen julkaisu kuuluu Planner-lehteen, hyväksytty valmis ilmoitus siirretään Planneriin erikseen hyväksytyn varauksen tiedostosta.

Lomakkeella tilan vieressä on **Planner**-merkki:

- **harmaa**: valmis ilmoitus siirtyy Planneriin, kun varaus on hyväksytty.
- **vihreä**: ilmoitus on siirretty Planneriin. Merkissä näkyy siirtoaika.
- **punainen**: varauksen ilmoitusosasto on tyhjä, joten Planner hylkäisi siirron. Anna ilmoitusosasto.

Valmiin ilmoituksen PDF-tiedoston kohdalla on sama merkki.

**Hyväksyntä edellyttää osastoa ja kokoa.** Planner-lehden varaus ei voi olla tilassa HYVÄKSYTTY, jos ilmoitusosasto puuttuu tai koko puuttuu (palstat ja korkeus tai rivi-ilmoituksen rivimäärä on 0):

- Tallennettaessa tila jää tai palaa tilaan ILMOITUS_VALMIS. Kun annat osaston ja koon, tila muuttuu takaisin HYVÄKSYTYKSI.
- **Muuta tilaa** ei salli HYVÄKSYTTY-tilaa tällaiselle varaukselle.
- Tallennus kysyy *Ilmoituksesta puuttuu tietoja*, mutta voit tallentaa napsauttamalla **Tallenna silti**.

Kun lisäät varaukselle PDF-aineiston ja varaukselle on merkitty *Aineisto on valmis ilmoitukseksi*, PDF tallennetaan valmiina ilmoituksena ja varaus hyväksytään. Muut kuin PDF-tiedostot jäävät aineistoksi.

### Valmistettava materiaali

**Valmistettava materiaali** -kohta näkyy, kun [Microsoft 365 -aineistotuotanto](../asetukset/muut-asetukset/microsoft-365.md) on käytössä. Taittaja tekee ilmoituksen InDesignissa materiaalinumeron mukaiseen tiedostoon ja tallentaa valmiin PDF:n samaan SharePoint-kansioon. PDF tuodaan automaattisesti materiaalin tänään ja myöhemmin ilmestyville varauksille valmiiksi ilmoitukseksi.

Kohdassa näkyvät:

- **Materiaalinumero**
- **InDesign**-tiedoston polku. **Kopioi polku resurssienhallintaan** kopioi polun leikepöydälle. Liitä se Resurssienhallinnan osoiteriville (Ctrl+L) tai Suorita-ikkunaan (Win+R), niin tiedosto aukeaa InDesignissa.
- tiedoston tila: **SharePointissa** (muokkausaika) tai **Ei vielä SharePointissa**
- **Avaa kansio SharePointissa**, jos käytössä
- **Valmis ilmoitus**: PDF-tiedoston nimi, jolla taittaja tallentaa valmiin ilmoituksen samaan kansioon: `<materiaalinumero>_.pdf` (InDesignin oletusnimi) tai `<materiaalinumero>_pdf.pdf`.

Jos InDesign-linkki on käytössä ja asennettu taittajan koneelle, kohdassa ovat painikkeet:

- **Avaa InDesignissa** avaa InDesign-tiedoston suoraan InDesignissa. Tallennus palaa SharePointiin.
- **Näytä kansiossa** avaa materiaalin kansion Resurssienhallinnassa.

Linkin asennus taittajan koneelle on kuvattu sivulla [Microsoft 365](../asetukset/muut-asetukset/microsoft-365.md#avaa-indesignissa--linkki).

#### Kun InDesign-tiedostoa ei vielä ole

Valitse jokin seuraavista:

- **Luo InDesign-tiedosto pohjasta** kopioi asiakkaan InDesign-pohjan materiaalin tiedostoksi. Painike näkyy, jos pohja on määritetty.
- Lisää oma InDesign-tiedosto (.indd, enintään 500 Mt). Se tallentuu SharePointiin materiaalinumeron mukaisella nimellä.
- **Kopioi materiaali aiemmasta**: kirjoita aiemman materiaalin numero (kenttä ehdottaa asiakkaan materiaaleja) ja napsauta painiketta. Aiemman materiaalin InDesign-tiedosto kopioidaan tämän materiaalin tiedostoksi. Varausta ei liitetä aiempaan materiaaliin, joten muutokset eivät muuta aiempaa ilmoitusta. Vain asiakkaan oman materiaalin voi kopioida, ja sen InDesign-tiedoston pitää olla SharePointissa.

Taittaja voi myös tehdä ilmoituksen InDesignissa ja tallentaa sen kohdassa näkyvään polkuun. Olemassa olevaa InDesign-tiedostoa ei koskaan korvata TaikaTilauksesta.

#### Valmis ilmoitus SharePointista

PDF päivittyy valmiiksi ilmoitukseksi julkaisupäivän loppuun asti. Sen jälkeen uutta PDF:ää ei enää tuoda varaukselle automaattisesti. Kun automaattinen tuonti on käytössä, Valmistettava materiaali -kohdassa näkyy lause, mihin päivään asti PDF päivittyy. Voit silti lisätä valmiin ilmoituksen käsin painikkeella **Lisää valmis ilmoitus**.

PDF tuodaan valmiiksi ilmoitukseksi **kaikille** materiaalin varauksille, jotka ilmestyvät tänään tai myöhemmin, ja uusi PDF korvaa niiden aiemman valmiin ilmoituksen. Jos yhden julkaisun ilmoitus poikkeaa muista, anna sille oma materiaali (**Kopioi materiaali aiemmasta**).

Jos PDF on SharePointissa, mutta sitä ei ole vielä tuotu varaukselle, **Hae valmis ilmoitus SharePointista** lisää sen varauksen valmiiksi ilmoitukseksi. Näin käy esimerkiksi, kun varaus on tehty vasta PDF:n tallentamisen jälkeen. Painike ei näy, jos varauksella on jo valmis ilmoitus tai sen julkaisu on jo ilmestynyt.

#### Varaus ilman materiaalinumeroa

Uusi varaus ja kopio saavat materiaalinumeron automaattisesti tallennettaessa. Muualla luodut varaukset, kuten tyhjät varaukset ja tilauslomakkeelta tulleet, jäävät ilman numeroa. Valitse silloin:

- **Uusi materiaali**: varaus saa uuden numeron. Jos InDesign-pohja on määritetty, InDesign-tiedosto luodaan samalla pohjasta.
- **Liitä materiaaliin**: kirjoita olemassa olevan materiaalin numero. Varaus käyttää samaa InDesign-tiedostoa kuin materiaalin muut varaukset.
- **Kopioi materiaali aiemmasta**: varaus saa uuden numeron ja kopion aiemman materiaalin InDesign-tiedostosta.

Microsoft 365 -yhteys, automaattinen tuonti ja InDesign-pohja määritetään sivulla [Asetukset → Muut asetukset → Microsoft 365](../asetukset/muut-asetukset/microsoft-365.md).

### Muut aineiston kentät

| Kenttä | Kuvaus |
|---|---|
| **Ilmoitukseen ei liity tiedostoja** | Aineisto on vain tekstiä. Kun valinta on päällä ja ilmoitusteksti on annettu, uuden varauksen tila on AINEISTO_TOIMITETTU. |
| **Aineisto on valmis ilmoitukseksi** | Asiakas toimittaa ilmoituksen valmiina, eikä sitä tarvitse hyväksyttää. Tyypillistä mainostoimistojen kanssa. |
| **Aineiston toimittaja** | Henkilö tai taho, joka toimittaa aineiston. Tyhjä valinta tarkoittaa, että ilmoitus tehdään itse. |
| **Aineiston käsittelijän sähköposti** | Aineiston käsittelijä, esimerkiksi taittaja. Tulee tuotteelta, jos tuotteelle on määritetty käsittelijä. Järjestelmä ei lähetä osoitteeseen viestejä. |
| **Varausvahvistuksen saaja** | Kenelle varausvahvistus lähetetään. |
| **Ilmoituksen hyväksyjä** | Kenelle hyväksymispyyntö lähetetään. Ei näy, kun aineisto on valmis ilmoitukseksi. |
| **Tarkistuskappale** | Asiakkaalle lähetetään postitse kappale lehdestä. Valinta vain merkitsee varauksen. |

Aineiston toimittajan, varausvahvistuksen saajan ja hyväksyjän vaihtoehdot ovat asiakas itse ja asiakkaan yhteyshenkilöt. **Lisää uusi** luo uuden yhteyshenkilön (nimi, sähköposti, puhelin, asema ja rooli) ja liittää sen asiakkaaseen. Uusi henkilö valitaan kenttään heti, mutta varaus pitää vielä tallentaa.

### Poliittinen mainos

Valitse **Poliittinen mainos**, jos ilmoitus on TTPA-asetuksen mukainen poliittinen mainos. Anna **Yksilöivä tunnus**, **Kampanja liittyy** (mihin vaaliin tai lainsäädäntöprosessiin ilmoitus liittyy) ja **Avoimuusilmoitus URL**. Tallennetulla varauksella on avoimuusilmoituksen paneeli, jossa avoimuusilmoitus pyydetään, täytetään, hyväksytään ja julkaistaan. Julkaisu lukitsee URL-kentän.

## Toimintopainikkeet

Painikkeet ovat lomakkeen ylä- ja alareunassa. Pääkäyttäjä voi valita asetuksista, että ne ovat vain ylhäällä tai vain alhaalla.

| Painike | Toiminto |
|---|---|
| **Tallenna** | Tallentaa varauksen. |
| **Tallenna ja palaa listaan** | Tallentaa ja palaa listalle. Jos tulit [asiakaskortilta](../Asiakkaat/asiakaskortti/index.md), painike on **Tallenna ja palaa asiakkaaseen**. |
| **Peruuta** | Palaa tallentamatta. |
| **Näytä myynti** | Avaa varauksen myynnin. [Myynti-sivun ohje](./myynti.md). |
| **Tulosta** | Rakenteilla. |
| **Lähetä varausvahvistus** | Lähettää asiakkaalle varausvahvistuksen sähköpostilla. Näkyy vain, jos varausvahvistus on otettu käyttöön. |
| **Muuta tilaa** | Vaihtaa varauksen tilan. |
| **Kopioi** | Kopioi varauksen. Ks. [Varauksen kopiointi](./uusi-varaus-ja-kopiointi.md#varauksen-kopiointi). |
| **Poista** | Poistaa varauksen. Poisto kysyy vahvistuksen. Myynti ja laskutuspyynnöt jäävät, mutta poistettua varausta ei laskuteta. Ks. [Varauksen poistaminen](#varauksen-poistaminen). |

Uudella varauksella ovat vain Tallenna-, Tallenna ja palaa- ja Peruuta-painikkeet.

### Varauksen poistaminen {#varauksen-poistaminen}

Poisto kysyy aina vahvistuksen. Se poistaa varauksen, mutta myynti ja laskutuspyynnöt jäävät, ja poistettua varausta ei laskuteta.

Jos [Microsoft 365 -aineistotuotanto](../asetukset/muut-asetukset/microsoft-365.md) on käytössä ja varauksen materiaalia ei ole liitetty muihin varauksiin, vahvistusikkuna näyttää materiaalin tiedostot SharePointissa (`<materiaalinumero>_.indd`, `<materiaalinumero>_pdf.pdf` ja `<materiaalinumero>_.pdf`). Valitse:

- **Poista varaus ja materiaali** (oletus): poistaa varauksen ja materiaalin tiedostot SharePointista. Tiedostot siirtyvät SharePointin roskakoriin, ja ne voi palauttaa sieltä.
- **Poista vain varaus**: jättää materiaalin tiedostot SharePointiin.

Jos materiaalia käyttää jokin muu varaus, tiedostoja ei poisteta, ja vahvistus kertoo siitä. Sama koskee tilannetta, jossa SharePointia ei voi lukea. Materiaalinumero jää käyttöön, eikä sitä anneta uudelleen.

### Varausvahvistuksen lähettäminen

**Lähetä varausvahvistus** -painike näkyy vain, jos ylläpito on ottanut varausvahvistuksen käyttöön. Painike toimii vain tallennetulla varauksella. Jos lomakkeella on tallentamattomia muutoksia, ohjelma kysyy niistä, koska viesti tehdään tallennetusta varauksesta.

Jos varaus kuuluu myyntiin, jossa on useita varauksia, voit lähettää yhden vahvistuksen koko myynnistä [myyntisivulta](./myynti.md#varausvahvistuksen-lähettäminen-koko-myynnille).

Painike avaa ikkunan, jossa voit muokata kaikkea ennen lähetystä:

- **Lähettäjä** ja **Piilokopio**: oletuksena oma sähköpostiosoitteesi. Ohjelma muistaa viimeksi käyttämäsi arvot.
- **Vastaanottaja**: varauksen *Varausvahvistuksen saaja*, jos hänet on valittu, muuten myynnin asiakas. Jos osoitetta ei ole, kentässä lukee `[EI SÄHKÖPOSTIA]`.
- **Otsikko** ja **Viesti**: tulevat asiakkaan viestipohjasta. Jos pohjaa ei ole, käytetään oletuspohjaa, ja ikkuna kertoo siitä.

Napsauta **Esikatsele**, niin näet viestin tiedot täytettyinä ja ohjelma tarkistaa kentät: lähettäjän ja vastaanottajan osoitteen pitää olla kelvollinen, otsikossa pitää olla vähintään 10 merkkiä ja viestissä vähintään 100 merkkiä. Piilokopio voi olla tyhjä. **Lähetä varausvahvistus** lähettää viestin. Lähetys kirjataan varauksen muutoslokiin.

#### Viestipohjan tagit

Tagit toimivat sekä otsikossa että viestissä, ja ohjelma korvaa ne varauksen tiedoilla:

| Tagi | Sisältö |
|---|---|
| **`[VARAUSNUMERO]`** | Varauksen numero. |
| **`[ETUNIMI]`** | Vastaanottajan etunimi. |
| **`[ASIAKKAAN_TIEDOT]`** | Asiakkaan numero ja nimi, osoite, sähköposti ja puhelin. |
| **`[MAKSAJAN_TIEDOT]`** | Maksajan tiedot, laskutusviite ja laskun toimitustapa. Tyhjä, jos asiakas maksaa itse. |
| **`[TUOTE]`** | Myyntituote. |
| **`[JULKAISU]`** | Julkaisun nimi, numero ja ilmestymispäivä. |
| **`[KOKO]`** | Lehdessä palstat ja korkeus, netissä näyttömäärä ja aika, radiossa spotit, kesto ja aika, ilmoitustaululla aika. |
| **`[ILMOITUSOSASTO]` tai `[ILMOSASTO]`** | Ilmoitusosaston nimi. |
| **`[AINEISTOPAIVA]`** | Aineistopäivä. |
| **`[TOISTONTIEDOT]`** | Varauksen toiston tiedot. |
| **`[HINTA]` ja `[VEROLLINEN_HINTA]`** | Veroton ja verollinen hinta. |
| **`[LASKUTUSTAPA]`** | Laskutustapa lomakkeen tekstillä. |
| **`[LISÄTIEDOT_LASKUN_TUOTERIVILLE]`** | Laskun tuoterivin lisätiedot. |
| **`[LEHTI]`** | Lehden nimi. |

Netti-, radio- ja ilmoitustaulukanavilla viestistä poistetaan julkaisun, ilmoitusosaston ja toiston rivit.

### Mitä tallennus tekee

- Uusi varaus luo myynnin, jos sitä ei ole.
- Varaus saa laskutuspyynnön, jonka laskutusajo laskuttaa laskutustavan mukaan. Pakettihintainen myynti ja laskutustapa *Ei laskutusta* eivät saa laskutuspyyntöä. Jos varaus on jo laskutettu, laskutuspyyntöä ei muuteta.
- Lehti-ilmoituksen alku- ja loppupäiväksi tulee julkaisun ilmestymispäivä ja aineistopäiväksi julkaisun aineistopäivä.

Lomakkeen alareunassa on varauksen **muutosloki**.

## Varauksen tila {#varauksen-tila}

| Tila | Merkitys |
|---|---|
| **ALUSTAVA** | Varauksella ei ole julkaisua, tai tyhjä varaus odottaa asiakasta. |
| **EI_AINEISTOA** | Varaus on tehty, mutta aineistoa ei ole vielä tullut. |
| **AINEISTO_TOIMITETTU** | Varauksella on aineisto tai pelkkä ilmoitusteksti. |
| **KÄSITTELYSSÄ** | Aineisto on otettu käsittelyyn. |
| **ILMOITUS_VALMIS** | Ilmoitus on tehty. |
| **HYVÄKSYTTÄVÄNÄ** | Ilmoitus on lähetetty hyväksyttäväksi. |
| **AINEISTOVIRHE** | Aineistossa on virhe. |
| **HYVÄKSYTTY** | Ilmoitus on hyväksytty, esimerkiksi valmis ilmoitus on lisätty. |

Listalla tilat näytetään [Asetukset → Listat](../asetukset/listat.md) -sivun kirjainkokovalinnan mukaan.

Uuden varauksen tila päätellään tallennettaessa. Tallennetun varauksen muokkaus ei yleensä muuta tilaa. Planner-lehden varauksen hyväksyntä edellyttää ilmoitusosastoa ja kokoa. [Plannerin hyväksyntäehdot](#planner). Tiedoston lisäys tai poisto päättelee tilan uudelleen. Esimerkiksi valmiin ilmoituksen lisäys tekee varauksesta HYVÄKSYTTY.

### Tilan muuttaminen

Muuta tilaa käsin napsauttamalla **Muuta tilaa** tai tilan vieressä olevaa kynäkuvaketta. Valitse **Uusi tila** ja tallenna. Voit muuttaa usean varauksen tilan kerralla [Ilmoitukset-listan](./ilmoitukset-lista.md) [Valituille](./ilmoitukset-lista.md#valituille-toiminnot)-valikosta.

## Asiakkaan vaihtaminen

**Vaihda asiakas** siirtää tallennetun varauksen toiselle asiakkaalle:

1. Napsauta **Vaihda asiakas** ja hae uusi asiakas.
2. Vahvista vaihto.

Eri maksaja säilyy. Jos eri maksajaa ei ole, uusi asiakas maksaa. Hinnat ja alennus säilyvät, mutta aineiston toimittaja, varausvahvistuksen saaja ja hyväksyjä tyhjennetään, koska ne ovat vanhan asiakkaan henkilöitä.

Asiakasta ei voi vaihtaa tyhjälle varaukselle, myyntipaketin tai yhteisen myynnin varaukselle, maksajavaraukselle, jo laskutetulle varaukselle eikä asiakkaalle, jolla on myyntikielto.
