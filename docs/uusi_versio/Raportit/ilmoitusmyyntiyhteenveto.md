---
sidebar_position: 4
description: Ilmoitusmyyntiyhteenveto
---

# Ilmoitusmyyntiyhteenveto

**Ilmoitusmyyntiyhteenveto**-sivulla näet myytyjen ilmoitusvarausten määrät, palstamillimetrit ja verottoman myynnin kanavittain, tuotteittain ja myyjittäin. Sivulla näkyvät myös uusimmat varaukset ja lähiaikoina ilmestyvät varaukset.

Avaa sivu valitsemalla **Raportit → Ilmoitusmyyntiyhteenveto.** Sivu on vain luettavaksi, eikä se muuta varauksia.

## Mitä luvut kuvaavat

- Mukana ovat vain **myydyt** ilmoitusvaraukset. Tyhjät (myymättömät) ja poistetut varaukset eivät ole mukana.
- **Kanava** on julkaisun nimi (esimerkiksi lehti). Jaksovarauksella (netti, radio, ilmoitustaulu), jolla ei ole julkaisua, kanava on tuotteen kanava.
- Varaus kuuluu sille kuukaudelle, jona sen julkaisu ilmestyy. Jos varauksella ei ole julkaisua, käytetään varauksen alkupäivää. Jaksovaraus näkyy vain, jos sen alkupäivä on valitulla aikavälillä.
- Summat ovat varausten **verottomia loppusummia**. Pakettimyynnissä varausten hinnat ovat vain tiedoksi.
- **Palstamillimetrit** (pmm) lasketaan palstojen ja korkeuden tulona.
- Jos ilmoitus on jaettu usealle maksajalle, päävarauksen hinta on 0 € ja raha lasketaan maksajien omille varauksille. Näin summa ei tule lasketuksi kahteen kertaan.

## Rajaukset

Sivun yläosassa valitaan, mille ajalle ja mille osajoukolle luvut lasketaan.

| Rajaus | Kuvaus |
|---|---|
| **Ilmestyy** | Aikaväli (alku – loppu), jolta ilmestyvät ilmoitukset lasketaan. Oletuksena on kuluva kuukausi. |
| **Myyjä** | Rajaa luvut yhteen tai useampaan myyjään. Tyhjä valinta (Kaikki myyjät) tarkoittaa kaikkia myyjiä. |
| **Kanava** | Rajaa luvut yhteen tai useampaan kanavaan. Tyhjä valinta (Kaikki kanavat) tarkoittaa kaikkia kanavia. |
| **Julkaisu** | Rajaa luvut yksittäisiin julkaisuihin. Valinnassa näkyy julkaisun nimi ja ilmestymispäivä, esimerkiksi "TaikaNakka-lehti 41 07.10.2026". |

Valikoissa ovat vain ne myyjät ja kanavat, joilla on myyntiä valitulla aikavälillä. Jos vaihdat aikaväliä niin, ettei aiemmin valitulla myyjällä tai kanavalla ole siellä myyntiä, valinta poistuu.

**Julkaisu**-valinta tulee näkyviin vasta, kun olet valinnut **Kanava**-valinnasta vähintään yhden kanavan, jolla on julkaisuja valitulla aikavälillä. Kanavalla, jolla ei ole julkaisuja (esim. nettisivut), valintaa ei näytetä. Jos vaihdat kanavaa, valinnat, joita uudella kanavalla ei ole, poistuvat.

Pikavalinnat **Kuluva kuukausi**, **Edellinen kuukausi** ja **Kuluva vuosi** asettavat aikavälin. Sivu päivittyy heti, kun muutat jotakin rajausta. Jos syötät loppupäivän alkupäivää aikaisemmaksi, sivu vaihtaa ne keskenään.

**Tyhjennä valinta** poistaa valinnat. 

Kaikki rajaukset vaikuttavat yhteenvetolukuihin, taulukkoon, kaavioihin sekä **Uusimmat varaukset**- ja T**ulevat ilmestymiset** -listoihin. Uusimmat- ja Tulevat-listoihin ei kuitenkaan vaikuta Ilmestyy-aikaväli, vaan niillä on omat vuorokausirajauksensa.

## Yhteenvetoluvut

Rajausten alla on kolme lukua:

- **Varauksia:** myytyjen varausten määrä.
- **Palstamillimetrejä:** varausten palstamillimetrien summa.
- **Veroton myynti:** varausten verottomien loppusummien summa euroina.

Jos valitulla aikavälillä ei ole yhtään myytyä varausta, sivulla lukee *"Ei myytyjä ilmoitusvarauksia valitulla aikavälillä".*

## Myynti kanavittain ja kuukausittain

Taulukossa on yksi rivi jokaiselle kanavalle ja yksi sarake jokaiselle kuukaudelle. Kuukausi on julkaisun ilmestymispäivän mukainen. Jokaisessa solussa ovat varausten määrä ja veroton summa, esimerkiksi **"12 kpl · 3 450,00 €"**. Tyhjä solu näkyy viivana. Viimeisessä sarakkeessa ja viimeisellä rivillä ovat yhteensä-luvut.

Jos olet valinnut yhden myyjän, kortin otsikossa näkyy myyjän nimi. Näin voit tehdä omasta myynnistäsi listan: valitse oma nimesi **Myyjä**-valikosta. Jos valitset useita myyjiä, taulukossa on lisäksi **Myyjä**-sarake, ja jokaisella myyjällä on omat rivinsä.

### Taulukon vieminen

Kortin **Export**-valikosta voit viedä taulukon tiedostoksi (Tulosta, Kopioi, PDF, Excel, CSV, JSON, HTML ja muut valikon muodot).

Vienti on lista, jossa on yksi rivi myyjää, kanavaa ja kuukautta kohden. Sarakkeet ovat Myyjä, Kanava, Vuosi, Kuukausi, Varauksia ja Veroton myynti. 

Kun aikavälillä on useita kuukausia, jokaisen kuukauden rivien jälkeen on kuukauden Yhteensä-rivi. Lopussa ovat kaikkien kuukausien yhteensä-luvut. Vienti noudattaa valittuja rajauksia.

## Varaukset tuotteittain ja ilmoitusosastoittain

Palkkikaavio näyttää varausten määrän tuotteittain. Jos tuotteella on ilmoitusosasto, se näkyy tuotteen nimen perässä (esimerkiksi **"Etusivu · Ilmoitusosasto"**). 

Suurin palkki on ylimpänä. Kun viet hiiren palkin päälle, näet varausten määrän, palstamillimetrit ja verottoman summan. 

Kortin **Export**-valikosta voit viedä tiedot. Vientitiedoissa ovat sarakkeet Tuote, Ilmoitusosasto, Varauksia, Pmm ja Veroton myynti.

## Tuotteet kanavittain

Jokaisesta kanavasta on oma kortti. Kortin otsikossa näkyvät kanavan nimi, varausten määrä ja veroton summa. Kortissa on palkkikaavio tuotteista ja ilmoitusosastoista. Suurin palkki on ylimpänä.

Korttien yläpuolella oleva **Export**-valikko vie kaikki kortit: sarakkeet ovat Kanava, Tuote, Ilmoitusosasto, Varauksia, Pmm ja Veroton myynti.

## Uusimmat varaukset

**Uusimmat varaukset** -kortti näyttää viimeksi lisätyt varaukset.

- **Lisätty … vrk:** näyttää varaukset, jotka on lisätty viimeisten N vuorokauden aikana (1–3650). Oletus on 14.
- **Enint.:** määrittää, kuinka monta varausta näytetään enintään (1–500). Oletus on 100.

Jos varauksia on enemmän, kortissa lukee esimerkiksi **"Aikavälillä 240 varausta, näytetään 100 uusinta"**. Uusin varaus on ylimpänä.

Listassa ovat sarakkeet Varaus, Lisätty, Asiakas, Myyjä, Kanava, Tuote ja Tila. Tila näkyy värillisenä merkkinä. Napsauta riviä, niin varaus avautuu.

## Tulevat ilmestymiset

**Tulevat ilmestymiset** -kortti näyttää varaukset, joiden julkaisu ilmestyy lähiaikoina.

- **Seuraavat … vrk:** näyttää varaukset, jotka ilmestyvät seuraavien N vuorokauden aikana, tämä päivä mukaan lukien (1–3650). Oletus on 14.
- **Enint.:** määrittää, kuinka monta varausta näytetään enintään (1–500). Oletus on 100.

Listan sarakkeet ovat samat kuin **Uusimmat varaukset** -listassa, mutta **Lisätty**-sarakkeen tilalla on Ilmestyy. Jos varauksia on enemmän, kortissa lukee esimerkiksi **"Aikavälillä 240 varausta, näytetään 100 ensimmäistä".**

### Asiakkaiden vieminen keräilylistalle

Molemmissa listoissa on **Vie keräilylistaan** -painike. Se lisää keräilylistalle listassa näkyvien varausten asiakkaat. 

Painikkeen vieressä näkyy tulos, esimerkiksi **"8 asiakasta keräilylistalle (2 oli jo siellä)"**. Jos listassa ei ole lisättäviä asiakkaita, tulos on **"Ei lisättäviä asiakkaita"**. 

Painike ei ole käytössä, kun lista on tyhjä. Keräilylistalla asiakkaiden lähteeksi merkitään Ilmoitusmyyntiyhteenveto.

**Export**-valikosta voit viedä listassa näkyvät varaukset tiedostoksi. Vienti sisältää sarakkeet Varaus, Lisätty tai Ilmestyy, Asiakas, Myyjä, Kanava, Tuote, Tila ja Veroton myynti.

## Myynti myyjittäin

Kortti näyttää jokaisen myyjän varausten määrän ja verottoman summan valitulla **Ilmestyy**-aikavälillä. Taulukon sarakkeet ovat Myyjä, Varauksia ja Veroton €. 

Kortti noudattaa Kanava- ja Julkaisu-valintaa. Se näyttää kuitenkin aina kaikki myyjät, vaikka olisit valinnut Myyjä-valikosta vain yhden. 

Kortin **Export**-valikosta voit viedä taulukon.