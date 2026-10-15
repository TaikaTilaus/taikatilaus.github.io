---
sidebar_position: 1
title: Etusivu
description: Etusivu — Päävalikko, etusivun data.
---

# Etusivu

Etusivulle on koottu yhteenveto asiakkaista, tilauksista ja laskuista sekä tiedoiteet, julkaisukalenteri, postitusyhteenveto ja viimeisimmät muutokset. Etusivulla näkyviä kortteja voi hallita [asetuksista](/docs/uusi_versio/asetukset/etusivun-osiot). 

:::note 

Mediasivusto: Jos käytössäsi on pelkästään ilmoitusten myynti, etusivuna on Ilmoitukset. Lukemattomat tiedotteet näkyvät sen yläpuolella. Tässä ohjeessa kuvatut tunnusluvut, tilausten kehityskortit, julkaisukalenteri ja muut yhteenvedot eivät silloin näy. 

:::

![TaikaTilaus 3.0:n etusivun yleisnäkymä](/img/versio2/etusivu.png)

## Päävalikko

Sivun yläreunan päävalikosta pääset järjestelmän eri osioihin:

- **Asiakkaat**
- **Tilaukset**
- **Laskut**
- **Postitus**
- **Raportit**
- **Asetukset**
- **Ylläpito**

Valikon nimen vieressä oleva nuoli avaa alavalikon.

:::info Huomio

Osa valikoissa näkyvistä toiminnoista on vielä keskeneräisiä.

:::

![Etusivun päävalikko ja sen osiot](/img/versio2/paavalikko.png)

### Oikean reunan ikonit

Päävalikon oikeassa reunassa ovat seuraavat pikatoiminnot:

| Toiminto | Kuvaus |
| --- | --- |
| [**Keräilylista**](/docs/uusi_versio/Etusivu/kerailylista) | Avaa keräilylistan. Kuvakkeen yhteydessä näkyvä numero kertoo keräilylistalla olevien asiakkaiden määrän. |
| [**Historia**](/docs/uusi_versio/Etusivu/historia) | Avaa järjestelmän historian. |
| [**Huomiot**](/docs/uusi_versio/Etusivu/huomiot) | Avaa huomiot. Kuvakkeen yhteydessä näkyvä numero kertoo käsittelemättömien huomioiden määrän. |
| [**Omat tiedot**](/docs/uusi_versio/Etusivu/omat-tiedot) | Avaa käyttäjävalikon, jossa voit tarkastella omia tietojasi tai kirjautua ulos järjestelmästä. |

Avaa toiminto napsauttamalla sitä vastaavaa kuvaketta. Käyttäjävalikko avautuu napsauttamalla oikeassa reunassa näkyvää käyttäjätunnusta.

![Päävalikon keräilylista-, historia-, huomio- ja käyttäjäkuvakkeet](/img/versio2/paavalikko-icons.png)

## Tiedotteet

Uusi tiedote näkyy etusivun yläosassa. Tiedotteen väri ja kuvake kertovat sen tyypin. Kun olet lukenut tiedotteen, napsauta **Kuittaa luetuksi**. Kuitattu tiedote ei enää näy etusivulla.

Avaa kaikki tiedotteet napsauttamalla oikeassa yläkulmassa olevaa käyttäjävalikkoa ja valitsemalla [**Tiedotteet**](/docs/uusi_versio/Etusivu/omat-tiedot#tiedotteet). Kuitatun tiedotteen vieressä näkyy teksti **Kuitattu pp.kk.vvvv**. Tiedote on luettavissa siellä niin kauan kuin sen näyttöaika on voimassa. Luetuksi kuitatun tiedotteen voi palauttaa lukemattomaksi napsauttamalla **Palauta lukemattomaksi**.

![Tiedote etusivulla](/img/versio2/tiedotteet2.png)

## Tunnusluvut

Etusivun yläosan yhteenvetokorteissa näet seuraavat tiedot. Jokaisessa kortissa on infokuvake (i), jonka kohdalle hiiren viemällä näet luvun tarkan selityksen.

| Tunnusluku | Kuvaus |
| --- | --- |
| **Aktiiviset tilaajat** | Aktiiviset asiakkaat eli asiakkaat, joilla on tilaajana vähintään yksi tilaus tilassa VOIMASSA tai TULOSSA VOIMAAN. Sama asiakas lasketaan vain kerran, vaikka tilauksia olisi useita. Poistetut tilaukset eivät ole mukana. |
| **Aktiiviset tilaukset** | Tilaukset, joiden tila on VOIMASSA. Poistetut tilaukset eivät ole mukana. Sama asiakas voi olla mukana useammalla tilauksella. |
| **Avoimet laskut** | Laskut, jotka eivät ole hyvityksiä ja joissa on maksamatonta summaa jäljellä. Mukana ovat tilat Avoin, Lähetetty ja Erääntynyt. Maksetut, poistetut ja luonnoslaskut eivät ole mukana. Erääntyneiden laskujen määrä näkyy erikseen punaisella. Laskun katsotaan erääntyneen, kun eräpäivä on mennyt tai eräpäivä puuttuu. |
| **Lähetetyt laskut (viim. 7 vrk)** | Laskut, joiden lähetyspäivä on viimeisen seitsemän vuorokauden aikana (tämä päivä mukaan lukien). Poistetut laskut eivät ole mukana. |

Kortit ovat myös pikalinkkejä. Napsauta korttia, niin avautuu [**Asiakkaat**](/docs/uusi_versio/Asiakkaat)-, [**Tilaukset**](/docs/uusi_versio/tilaukset)- tai [**Laskujen haku**](/docs/uusi_versio/Laskut/laskujen-haku)-lista valmiiksi rajattuna samoilla ehdoilla. Erääntyneiden laskujen luku on oma linkkinsä, jota klikkaamalla pääset listaa, jossa on vain erääntyneet laskut.

![Etusivun asiakkaiden, tilausten ja laskujen tunnusluvut](/img/versio2/kortit.png)

## Tilausten kehitys

Tilausten kehitystä seurataan neljässä kortissa:

- **Uudet tilaukset:** jakson aikana tulleet uudet tilaukset.
- **Päättyneet määräaikaiset:** jakson aikana päättyneet määräaikaiset tilaukset.
- **Katkaistut kestotilaukset:** kesto- ja Stripe-tilaukset, joille on annettu katkaisupäivä jaksolla. Mukana ovat myös maksamatta katkaistut tilaukset. Tilaukset, joilla ei ole katkaisupäivää (esimerkiksi normaalisti päättyneet määräaikaiset tilaukset tai kestotilauksen tilausjaksot), eivät ole mukana.
- **Maksamatta katkaistut**: edellisellä viikolla (maanantaista sunnuntaihin) maksamattomuuden vuoksi katkaistut tilaukset. Päivänä käytetään katkaisupäivää.

Kolmen ensimmäisen kortin jakso on oletuksena viimeiset 30 vuorokautta. Jakson pituuden voi muuttaa **Asetuksissa** kohdassa [**Etusivun osiot**](/docs/uusi_versio/asetukset/etusivun-osiot). Jakso näkyy kortin otsikossa, esimerkiksi **Uudet tilaukset · 30 vrk**.

Napsauta korttia ja paina Näytä tilaukset: Tilaukset-sivu avautuu valmiiksi samalla tavalla rajattuna kuin kortin luku.

### Muutosmerkintä

Kortin alareunassa näkyy edellisten 12 kuukauden kuukausikeskiarvo ("**Edellisen 12 kk:n keskiarvo: X / kk**"). Keskiarvo skaalataan samanmittaiseen jaksoon kuin kortin jakso. 

- Nuoli kertoo muutoksen suunnan: **nuoli ylöspäin tarkoittaa määrän kasvua ja nuoli alaspäin määrän vähenemistä**.
- Väri kertoo, onko muutos toiminnan kannalta myönteinen vai kielteinen: **vihreä on myönteinen ja punainen kielteinen**.

Väri riippuu kortista. Uudet tilaukset -kortissa kasvu on myönteistä (vihreä nuoli ylös) ja väheneminen kielteistä (punainen nuoli alas). Päättyneet määräaikaiset-, Päättyneet kestotilaukset- ja Maksamatta katkaistut -korteissa kasvu on kielteistä (punainen nuoli ylös) ja väheneminen myönteistä (vihreä nuoli alas). Jos vertailutietoa ei ole, merkintänä on harmaa *"ei vertailutietoa"*.

![Etusivun tilausten kehitystä kuvaavat yhteenvetokortit](/img/versio2/kortit2.png)

## Julkaisukalenteri

Julkaisukalenterissa näet lehtien ilmestymispäivät, aineistopäivät ja pyhäpäivät.

- **Ilmestymispäivät** on merkitty lehtikohtaisilla väreillä.
- **Aineistopäivät** on merkitty ilmestymispäivistä erottuvalla sävyllä.
- **Pyhäpäivät** on merkitty punaisella.

Voit siirtyä edelliseen tai seuraavaan kuukauteen kalenterin yläreunan nuolipainikkeilla.

Aloita uuden kalenterimerkinnän lisääminen napsauttamalla **Lisää merkintä** -painiketta.

![Julkaisukalenteri ilmestymis-, aineisto- ja pyhäpäivineen](/img/versio2/kalenteri.png)

### Merkinnän lisääminen julkaisukalenteriin

Voit lisätä julkaisukalenteriin oman merkinnän yhdelle päivälle tai useamman päivän ajalle.

1. Napsauta julkaisukalenterin yläreunassa **Lisää merkintä** -painiketta.
2. Täytä merkinnän tiedot:
   - **Alkupäivä:** valitse merkinnän alkamispäivä.
   - **Loppupäivä (valinn.):** valitse päättymispäivä, jos haluat merkinnän näkyvän useamman päivän ajan. Jos jätät loppupäivän tyhjäksi, merkintä näkyy vain alkupäivänä.
   - **Väri:** valitse merkinnän väri napsauttamalla väriruutua.
   - **Vilkkuva:** valitse tämä, jos haluat merkinnän vilkkuvan kalenterissa.
   - **Teksti:** kirjoita kalenterissa näytettävä merkinnän teksti.
3. Napsauta **Tallenna**.

Voit perua lisäämisen tallentamatta napsauttamalla **Peruuta**.

Jos **Lisää merkintä** -painike ei näy, avaa julkaisukalenterin asetukset rataskuvakkeesta ja valitse **Näytä merkinnän lisääminen**.

![Uuden merkinnän lisääminen julkaisukalenteriin](/img/versio2/kalenteri3.png)

### Julkaisukalenterin asetukset

Avaa kalenterin asetukset napsauttamalla julkaisukalenterin oikeassa yläkulmassa olevaa **rataskuvaketta**.

Asetuksissa voit muokata seuraavia valintoja:

- **Näytä aineistopäivät:** näyttää lehtien aineistopäivät kalenterissa. Poista valinta, jos haluat piilottaa aineistopäivät.
- **Näytä merkinnän lisääminen:** näyttää kalenterin yläreunassa **Lisää merkintä** -painikkeen. Poista valinta, jos haluat piilottaa painikkeen.
- **Näytettävät lehtien lyhenteet:** valitse, minkä lehtien tiedot näkyvät kalenterissa. Napsauta lehden lyhennettä näyttääksesi tai piilottaaksesi sen tiedot. Valittu lyhenne näkyy sinisellä pohjalla ja valintamerkillä. Kun kaikki lehdet on valittu, kaikkien lehtien tiedot näytetään.

![Julkaisukalenterin aineistopäivä- ja lehtivalinnat](/img/versio2/kalenteri2.png)

## Postitusyhteenveto

Postitusyhteenvedossa näet postitusmäärät ilmestymispäivittäin ja lehdittäin. Ilmestymispäivät näkyvät vasemmassa sarakkeessa. Jokaisella lehdellä on kaksi saraketta:

- **Tilauksia**: tilauksiin kuuluvien lehtien määrä.
- **Lehtiä**: tilauksiin kuuluvat lehdet sekä vakioniput, irtonumerot, varalehdet ja peittojakelun lehdet.

Kun lehtiä on monta, viimeisessä sarakkeessa näkyvät lehtien yhteismäärät (**Yht.**). Jos postitus on tehty uudelleen, näkyy vain viimeisin. Jos postituksia ei ole, taulukossa lukee "Ei postitusyhteenvetoa." Otsikon **kysymysmerkki** selittää sarakkeiden sisällön.

![Postitusmäärät ilmestymispäivittäin ja lehdittäin](/img/versio2/postitusyhteenveto2.png)

### Postitusyhteenvedon asetukset

Avaa asetukset napsauttamalla **Postitusyhteenveto**-osion oikeassa yläkulmassa olevaa **rataskuvaketta**.

**Haku historiasta (päivää taaksepäin)** -kentässä voit valita, montako päivää taaksepäin postituksia haetaan. Esimerkiksi arvo **70** näyttää tiedot viimeisten 70 vuorokauden ajalta. Oletusarvo asetetaan kohdassa [**Asetukset → Etusivun osiot**](/docs/uusi_versio/asetukset/etusivun-osiot).

![Postitusyhteenvedon historiapäivien asetus](/img/versio2/postitusyhteenveto.png)

## Uusimmat lokitiedot

Osiossa näet viimeisimpiä asiakastietoihin tehtyjä muutoksia. Jokaisella rivillä näkyvät:

- muutoksen ajankohta (pp.kk tt:mm)
- asiakas
- muutettu tieto, kuten sähköposti tai lähiosoite
- tiedon vanha ja uusi arvo, erotettu nuolella: vanha arvo → uusi arvo. Tyhjä arvo näkyy viivana "—".

Jos lokitietoja ei ole, osiossa lukee **"Ei lokitietoja."**

![Etusivun uusimmat asiakastietojen muutokset](/img/versio2/lokitiedot.png)

### Uusimpien lokitietojen asetukset

Avaa asetukset napsauttamalla **Uusimmat lokitiedot** -osion oikeassa yläkulmassa olevaa **rataskuvaketta**.

**Näytä enintään (lokitietoa)** -kentässä voit määrittää, kuinka monta lokitietoa etusivulla näytetään enintään. Esimerkiksi arvolla **10** näytetään enintään kymmenen viimeisintä lokitietoa. Arvo on 1–100, oletus 10.

![Uusimpien lokitietojen enimmäismäärän asetus](/img/versio2/lokitiedot2.png)

## Uusimmat huomiot

Osiossa näet käsittelyä odottavat huomiot. Jokaisella rivillä näkyvät huomion ajankohta ja aihe. Otsikon vieressä oleva punainen luku kertoo käsittelemättömien huomioiden kokonaismäärän. Napsauta riviä, niin avautuu [**Huomiot**](/docs/uusi_versio/Etusivu/huomiot)-sivu. 

Jos käsittelemättömiä huomioita ei ole, osiossa lukee **"Ei käsittelemättömiä huomioita."**

![Etusivun käsittelemättömät huomiot](/img/versio2/huomiot2.png)

### Uusimpien huomioiden asetukset

Avaa asetukset napsauttamalla **Uusimmat huomiot** -osion oikeassa yläkulmassa olevaa **rataskuvaketta**.

**Näytä enintään (käsittelemätöntä huomiota)** -kentässä voit määrittää, kuinka monta käsittelemätöntä huomiota etusivulla näytetään enintään. Esimerkiksi arvolla **5** näytetään enintään viisi huomiota. Arvo on 1–100, oletus 5.

![Etusivulla näytettävien huomioiden enimmäismäärän asetus](/img/versio2/huomiot.png)
