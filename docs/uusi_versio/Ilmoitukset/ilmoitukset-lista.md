---
sidebar_position: 1
title: Ilmoitukset-lista ja haku
description: Ilmoitukset — ilmoitusvarausten haku, hakuehdot, Kanava ja Julkaisu, lisähakuehdot, sarakkeet, valituille-toiminnot ja raportit.
---

# Ilmoitukset-lista ja haku

**Ilmoitukset**-sivu on ilmoitusmyynnin työpöytä. Sivulla haet ilmoitusvarauksia, avaat varauksen muokattavaksi, lisäät uusia varauksia, käsittelet aineistoja ja teet raportteja. Avaa sivu yläreunan päävalikosta valitsemalla **Ilmoitukset**.

Vanhassa TaikaTilauksessa vastaava sivu on **IlmoitusStudio**. Uudessa versiossa sivun nimi on kaikilla asiakkailla Ilmoitukset. Vanhat IlmoitusStudion kirjanmerkit avaavat saman sivun.

:::tip
Asiakaskortin [Ilmoitusvaraukset / myynnit](../Asiakkaat/asiakaskortti/ilmoitusvaraukset.md) -osiossa näet yhden asiakkaan varaukset. Ilmoitukset-listalla haet varauksia kaikilta asiakkailta.
:::

## Varausten hakeminen

Hakurivillä ovat useimmin käytetyt hakuehdot:

| Hakuehto | Kuvaus |
|---|---|
| **Aikaväli** | Alku- ja loppupäivä. Oletuksena aikaväli alkaa vuosi ja kuukausi taaksepäin ja päättyy vuoden päähän. Loppupäivä on mukana kokonaan. |
| **Varausnro** | Hakee yhden varauksen numerolla. Varausnumero haetaan kaikista varauksista muista hakuehdoista riippumatta. |
| **Vapaa haku** | Asiakasnumero, asiakkaan nimi tai yritys tai ilmoituksen koko. |
| **Kanava** | Yksi tai useampi kanava, esimerkiksi lehti, netti tai radio. |
| **Julkaisu** | Yksi tai useampi julkaisu eli lehden numero, esimerkiksi "Kurikka-lehti 46 12.11.2026". |

**Hae**-painike tai **Enter** hakee. Kanava- ja Julkaisu-valikko hakevat heti, kun suljet valikon muutoksen jälkeen.

**Tyhjennä** tyhjentää kaikki hakuehdot, myös valitun asiakkaan, ja hakee uudelleen.

### Miten aikaväli rajaa varauksia

Aikaväli rajaa varauksia kanavan mukaan:

- **Lehtikanavan** varaus on mukana, jos sen julkaisu ilmestyy aikavälillä. Jos varauksella ei ole julkaisua, käytetään varauksen alkupäivää.
- **Netti-, radio- ja ilmoitustaulukanavan** varaus on jaksovaraus, jolla on alku- ja loppupäivä. Se on mukana, jos jakso osuu edes osittain aikavälille. Näin myös ennen aikaväliä alkanut ja yhä käynnissä oleva netti-ilmoitus löytyy.
- **Vaihtoilmoituksen** varaus on mukana, jos sen julkaisupäivä on aikavälillä.

Jos aikaväli on yli 2 vuotta ja 1 kuukausi, listan yläpuolelle tulee huomautus: *Haku on laaja … ja voi olla hidas – rajaa päivämäärillä.* Haku tehdään silti.

### Vapaa haku

Vapaan haun kentässä voit kirjoittaa:

- **asiakasnumeron**: listalle tulevat varaukset, joissa asiakas on varaajana tai maksajana
- **nimen tai yrityksen** tai sen osan: asiakkaan yritys, osasto, sukunimi, etunimi tai "Sukunimi Etunimi"
- **koon** muodossa leveys x korkeus, esimerkiksi `2x100` tai `2 x 100`: listalle tulevat varaukset, joiden koko on täsmälleen sama.

Vapaa haku toimii yhdessä muiden hakuehtojen kanssa. Kun haet asiakkaalla, tarkista siis myös aikaväli.

### Kanava ja Julkaisu

**Julkaisu**-valikossa ovat aikavälin julkaisut, ja kunkin kanavan seuraava julkaisu on ylimpänä.

Netti-, radio-, ilmoitustaulu- ja vaihtoilmoituskanavien julkaisuja ei listata, koska niiden varaukset tehdään päivämäärillä. Hae niiden varauksia valitsemalla **Kanava**.

Yhteislehtiä käyttävillä asiakkailla listalle tulevat valitun lehden varausten lisäksi varaukset, jotka julkaistaan valitussa lehdessä myös yhteislehden kautta. Niiden Julkaisu-sarakkeessa on merkintä *Yhteislehti – varattu: …*.

### Valitut hakuehdot

Käytössä olevat hakuehdot näkyvät hakurivin alla siruina, esimerkiksi *Kanava: Kurikka-lehti*. Poista yksittäinen hakuehto napsauttamalla sirun rastia, niin lista haetaan heti uudelleen. Jos samasta hakuehdosta on valittu yli kolme arvoa, ne näytetään yhtenä siruna, esimerkiksi *Julkaisu: 8 valittu*.

**Tyhjennä hakuehdot** palauttaa oletushakuehdot ja hakee uudelleen.

Hakuehdot säilyvät, kun siirryt toiselle sivulle ja palaat listalle. Vapaa haku, lajittelu ja sarakevalinnat tallentuvat sinulle seuraavaa kertaa varten.

## Lisähakuehdot

Avaa lisähakuehdot napsauttamalla hakurivin **Lisähakuehdot**-painiketta. Painike on korostettu, kun lisähakuehdot ovat auki tai jokin niistä on käytössä. Sulje laatikko napsauttamalla **Suppea haku**, niin listalle jää enemmän tilaa. Valinnat näkyvät silloin siruina hakurivin alla.

| Lisähakuehto | Kuvaus |
|---|---|
| **Myyjä** | Yksi tai useampi myyjä. |
| **Varauksen tila** | Yksi tai useampi [tila](./ilmoitusvaraus.md#varauksen-tila). |
| **Ryhmä** | Myyntituotteen ryhmä. |
| **Tuote** | Myyntituote. Valikossa ovat aikavälin varausten tuotteet. Poistetut tuotteet näkyvät valikossa vain, jos se on otettu käyttöön asetuksista. |
| **Ilmoitusosasto** | Ilmoitusosasto, esimerkiksi etusivu tai kuolinilmoitukset. |
| **Myynti** | Myynnin numero. Haetaan kaikista varauksista muista hakuehdoista riippumatta. |
| **Ilman aikaa** | Näyttää vain varaukset, joilla ei ole alkupäivää. Aikaväli ei silloin rajaa hakua. |
| **Vain poliittiset** | Näyttää vain poliittisiksi mainoksiksi merkityt varaukset. |
| **Näytä maksajavaraukset** | Tuo listalle yhteisilmoitusten maksajavaraukset. Ne ovat oletuksena piilossa, mutta asiakkaalla ja numerolla haettaessa ne näkyvät aina. Valinta näkyy vain, jos maksajajako on käytössä. |

Valikot hakevat heti, kun suljet ne, ja valintaruudut heti, kun napsautat niitä. Ryhmä-, Tuote- ja Ilmoitusosasto-valikoissa ovat aikavälin varausten vaihtoehdot. Vaihtoehdot päivittyvät joka haulla, ja valinta, jota ei enää tarjota, poistuu.

**Ilman aikaa**-, **Näytä maksajavaraukset**- ja poistettujen tuotteiden valinnan käyttöönotto määritetään [Asetukset → Ilmoitukset](../asetukset/ilmoitukset.md#ilmoitukset-lista) -sivulla.

### Asiakkaan valitseminen

Lisähakuehtojen alaosassa voit valita asiakkaan:

1. Napsauta **Valitse asiakas** ja hae asiakas.
2. Valitse **Näytä vain asiakkaan varaukset**, niin listalla ovat vain ne varaukset, joissa asiakas on varaajana tai maksajana.

Asiakkaan valinta ei yksin rajaa listaa. Valinta säilyy, vaikka tyhjennät hakuehdot **Tyhjennä hakuehdot** -painikkeella. Poista valinta napsauttamalla **Poista asiakkaan valitseminen**.

Kun asiakas on valittu, voit:

- lisätä asiakkaalle uuden varauksen napsauttamalla **Lisää varaus**. [Ilmoitusvarauslomake](./ilmoitusvaraus.md) avautuu.
- liittää listalla valitut tyhjät varaukset asiakkaalle napsauttamalla **Liitä valitut tyhjät varaukset asiakkaalle**. Ks. [Tyhjät varaukset](./uusi-varaus-ja-kopiointi.md#tyhjat-varaukset).

Kun lisähakuehdot ovat kiinni, valittu asiakas näkyy hakurivin alla omana sirunaan, ja sen vieressä on **Lisää varaus** -painike.

:::note
**Lisää paketti** -painike on vielä rakenteilla.
:::

## Ilmoitusvarausten luettelo

Avaa varaus napsauttamalla riviä. [Ilmoitusvarauslomake](./ilmoitusvaraus.md) avautuu.

Luettelon yläreunassa näet näytettävien varausten ja kaikkien osumien määrän, esimerkiksi **100 / 1 860**.

- Valitse **Näytä kerrallaan** -valikosta, montako varausta yhdellä sivulla näytetään (100, 500 tai 1 000).
- Siirry sivulta toiselle nuolipainikkeilla.
- Järjestä luettelo napsauttamalla sarakeotsikkoa. Oletuksena uusin varausnumero on ylimpänä.

Varausnro- ja Tila-sarake pysyvät paikallaan, kun vierität luetteloa sivusuunnassa. Vaakavierityspalkki on myös luettelon yläreunassa.

### Yhteenveto

Luettelon yläpuolella on yhteenveto kaikista hakuun osuvista varauksista, ei vain näkyvästä sivusta:

- varausten määrä
- **Hintatiedot**-valinnalla veroton ja verollinen summa sekä pakettien summa
- PMM-hinta ja PMM-määrä (palstamillimetrit) yhteensä.

### Sarakkeet

Oletuksena näkyvät sarakkeet ovat Varausnro, Tila, Myynti, Aikaleima, Julkaisu, Päivät, Ryhmä, Myyntituote, Asiakas, Myyjä, Julk. lisätiedot ja Laskutuksen lisätiedot.

| Sarake | Sisältö |
|---|---|
| **Varausnro** | Ilmoitusvarauksen numero. |
| **Tila** | Varauksen tila värillisenä merkkinä. |
| **Myynti** | Myynnin numero. Tyhjällä varauksella sarake on tyhjä. |
| **Aikaleima** | Viimeisimmän muutoksen aika. |
| **Julkaisu** | Julkaisun nimi ja numero. Kanava näkyy alla, jos julkaisun nimi ei sitä jo kerro. |
| **Päivät** | Ilmestymispäivä ja sen alla aineistopäivä. Jaksovarauksella alku- ja loppupäivä. |
| **Ryhmä** | Myyntituotteen ryhmä. |
| **Myyntituote** | Tuote, ilmoitusosasto ja koko, esimerkiksi "Etusivu, Osasto · 2 x 100". |
| **Asiakas** | Asiakasnumero ja asiakkaan nimi. |
| **Myyjä** | Varauksen myyjä. |
| **Julk. lisätiedot** | Varauksen julkiset lisätiedot. |
| **Laskutuksen lisätiedot** | Lisätiedot laskuttajalle. |

Pitkät tekstit näytetään yhdellä rivillä katkaistuina. Koko teksti näkyy, kun viet hiiren tekstin päälle.

**Hintatiedot**- ja **Tiedostot**-valinnat luettelon oikeassa yläkulmassa näyttävät tai piilottavat kerralla sarakeryhmän:

- **Hintatiedot:** Summa, Summa veroll., Paketin summa, Laskutuspäivä ja Laskun toimitustapa.
- **Tiedostot:** Aineistot ja ilmoitustekstit sekä Tuotettu ilmoitus.

### Näytettävien sarakkeiden valitseminen

1. Napsauta luettelon oikeassa yläkulmassa **Sarakkeet**.
2. Valikon yläosassa ovat näkyvät sarakkeet luettelon järjestyksessä. Poista valinta sarakkeelta, jonka haluat piilottaa. Siirrä saraketta nuolipainikkeilla.
3. Valikon alaosassa ovat muut sarakkeet ryhmittäin (*Lisää: Varaus*, *Lisää: Julkaisu*, *Lisää: Myyntituote*, *Lisää: Asiakas ja laskutus*, *Lisää: Aineistot*). Valitse sarake, niin se tulee näkyviin.

Valittavissa ovat esimerkiksi:

- **Varaus:** Ulkoinen ID, Lisäysaika, Siirretty Planneriin
- **Julkaisu:** Numero, Aineistopäivä, Teema, Sivumäärä
- **Myyntituote:** Sijainti (ilmoitusosasto), Koko, Kanava, Tuotenro, Tuotekoodi, Tuotteen hinta
- **Asiakas ja laskutus:** Summa, Summa veroll., Paketin summa, Laskutuspäivä, Laskun toimitustapa, Ilmoitusmääräin
- **Aineistot:** Aineistot ja ilmoitustekstit, Tuotettu ilmoitus, Esikatselu, Aineiston toimittaja, Materiaali.

Varausnro ja Tila ovat aina ensimmäisinä. Sarakevalinta ja järjestys tallentuvat sinulle. **Palauta oletukset** palauttaa oletussarakkeet ja oletusjärjestyksen.

Valikossa ovat vain ne sarakkeet, jotka pääkäyttäjä on ottanut käyttöön [Asetukset → Ilmoitukset](../asetukset/ilmoitukset.md) -sivulla.

#### Listan lisäasetukset

Sarakkeet-valikon **Lisäasetukset** avaa ikkunan, jossa valitset omaan näkymääsi:

- **Lisätiedot-sarakkeet:** näytetäänkö lisätiedot ja ilmoitusmääräin aina kokonaan vai katkaistuina
- tekstien kirjainkoon
- **Lisähakuehdot käytössä:** mitkä lisähakuehdot näkyvät sinulle.

Valinnat koskevat vain sinun näkymääsi ja tallentuvat heti. Oletuksen kaikille käyttäjille määrittää [Asetukset → Listat](../asetukset/listat.md).

### Aineistot listalla

Kun **Tiedostot**-sarakkeet näkyvät, voit käsitellä aineistoja suoraan listalla:

- Lataa tiedosto napsauttamalla sen nimeä.
- Lisää aineisto napsauttamalla **+ aineisto** tai valmis ilmoitus napsauttamalla **+ valmis ilmoitus**.
- Poista tiedosto roskakorikuvakkeella. Poisto kysyy vahvistuksen.
- Muuta tulevan varauksen aineistopäivää napsauttamalla Päivät-sarakkeen **kynäkuvaketta**.

**Esikatselu**-sarakkeessa näkyy pieni kuva valmiista ilmoituksesta. Kuva suurenee, kun viet hiiren sen päälle. Napsauta kuvaa, niin se avautuu isona, ja voit ladata PDF:n.

**Materiaali**-sarakkeessa näkyy varauksen materiaalinumero. Jos materiaali on jaettu usealle varaukselle, numeron vieressä on jakokuvake ja varausten määrä. Microsoft 365 -aineistotuotantoa käyttävillä asiakkailla siru kertoo myös, onko InDesign-tiedosto SharePointissa, ja sirun napsautus avaa tiedoston kansion tai InDesign-tiedoston. Ks. [Valmistettava materiaali](./ilmoitusvaraus.md#valmistettava-materiaali).

## Valituille-toiminnot

Valitse varaukset rivin alussa olevilla valintaruuduilla. Otsikkorivin valintaruutu valitsee kaikki näkyvät varaukset. Avaa toiminnot napsauttamalla **Valituille**. Painikkeessa näkyy valittujen varausten määrä.

| Toiminto | Kuvaus |
|---|---|
| **Muuta tilaa** | Vaihtaa valittujen varausten tilan. Valitse uusi tila ikkunassa. |
| **Kopioi valmis ilmoitus** | Kopioi yhden valitun varauksen valmiin ilmoituksen muille valituille varauksille. Vaatii vähintään kaksi valittua varausta. |
| **Kopioi ilmoitusvaraus** | Kopioi yhden valitun varauksen. Ks. [Varauksen kopiointi](./uusi-varaus-ja-kopiointi.md#varauksen-kopiointi). |
| **Yhdistä jaetuksi aineistoksi** | Liittää valitut saman asiakkaan varaukset yhteen jaettuun aineistoon. Vaatii vähintään kaksi valittua varausta. |
| **Irrota jaetusta aineistosta** | Irrottaa valitut varaukset jaetusta aineistosta. |

Jos toiminto on harmaana, napsauta sitä, niin näet, mitä sinun pitää valita ensin.

### Kopioi valmis ilmoitus

1. Valitse listalta varaus, jolla on valmis ilmoitus, ja varaukset, joille ilmoitus kopioidaan.
2. Valitse **Valituille → Kopioi valmis ilmoitus**.
3. Valitse ikkunassa **Kopioitava varaus**. Sen uusin valmis ilmoitus kopioidaan.
4. Napsauta **Kopioi**.

Jokainen kohdevaraus saa oman tiedoston, ja se merkitään hyväksytyksi kuten valmiin ilmoituksen lisäyksessä.

### Jaettu aineisto

Jaetussa aineistossa usealla varauksella on yksi yhteinen aineisto. Kun aineisto lisätään yhdelle varaukselle, se lisätään kaikille ryhmän tänään tai myöhemmin ilmestyville varauksille. Valmis ilmoitus on aina varauskohtainen.

- **Yhdistä jaetuksi aineistoksi:** jos yksi valituista varauksista on jo jaetussa aineistossa, muut liitetään siihen. Kahta jaettua aineistoa, joissa on muitakin varauksia, ei yhdistetä. Irrota varaukset silloin ensin. Vain saman asiakkaan varauksia voi yhdistää.
- **Irrota jaetusta aineistosta:** jo lisätyt tiedostot jäävät varaukselle, mutta myöhemmin lisätty aineisto ei enää tule sille.

## Raportit

Avaa raportit napsauttamalla luettelon yläreunassa **Raportit**. Raportit tehdään samalla haulla kuin luettelo.

| Raportti | Sisältö |
|---|---|
| **Kaikki tiedot** | Kaikki hakuun osuvat varaukset kaikkine tietoineen. |
| **Lehden varausluettelo** | Julkaisuun liitetyt varaukset osastoittain, osaston yhteenveto ja palstamillimetrit. |
| **Varausluettelo** | Julkaisuun liitetyt varaukset tuotteittain. |
| **Palstamillimetritilasto** | Maksullisten varausten määrä, summa ja palstamillimetrit julkaisuittain ja tuotteittain. |
| **Laskutuksen tarkistuslista** | Varaukset tuotteittain laskutustietoineen. Korostettuina ovat maksulliset varaukset ilman laskutuspyyntöä ja muut tarkistettavat. |

**Laskutettavien lista** tulee käyttöön myöhemmin, ja se näkyy toistaiseksi harmaana.

Raportin muodostaminen:

1. Valitse raportti.
2. Valitse sarakkeet. Vasemmalla, *Raportissa*-listassa, ovat raportin sarakkeet järjestyksessä. Siirrä saraketta nuolilla ja poista se rastilla. Lisää sarake napsauttamalla sitä oikealla, *Lisättävissä*-listassa. Pikavalinnat **Kaikki**, **Oletukset** ja **Tyhjennä** ovat listan yläpuolella. Sarakevalinta tallentuu sinulle raporttikohtaisesti.
3. Valitse **Kaikki hakuun osuvat varaukset** tai **Vain valitut**, jos haluat raportille vain listalla valitut varaukset.
4. Napsauta **Muodosta raportti**.

Raportin voi katsoa näytöllä, tulostaa, lähettää sähköpostilla tai viedä PDF-, Excel-, CSV-, JSON- tai HTML-tiedostoksi. Leveät raportit tulevat PDF:nä vaakasivulle. Yli 20 000 varauksen raporttia ei tehdä: rajaa silloin hakua.

**Tallenna arkistoon** tallentaa raportin tietoineen [Raportit → Arkisto](../Raportit/arkisto.md) -sivulle. Myöhemmät muutokset varauksiin eivät muuta tallennettua raporttia.

Sulje raportit napsauttamalla **Sulje raportit**.

:::tip
Lisää ilmoitusraportteja on Raportit-sivun Ilmoitukset-ryhmässä, esimerkiksi *Suurimmat myynnit asiakkaan mukaan* ja *Kaikki ilmoitusvaraukset aikaväliltä*. Myynnin yhteenveto kanavittain ja myyjittäin on sivulla [Ilmoitusmyyntiyhteenveto](../Raportit/ilmoitusmyyntiyhteenveto.md).
:::

## Sijoittelu

Jos sijoittelu on otettu käyttöön, Ilmoitukset-sivulla on kaksi välilehteä: **Varaukset** ja **Sijoittelu**. Sijoittelu-välilehdellä valitset julkaisun, ja sen sivurakenne avautuu sivulle Sisu-monijulkaisusta. Jos sijoittelu ei näy tai kirjautuminen ei onnistu sivun sisällä, napsauta **Avaa uuteen ikkunaan**.

Sijoittelematon varaus näkyy listan Tila-sarakkeessa merkkinä, joka avaa julkaisun Sisussa uuteen ikkunaan.
