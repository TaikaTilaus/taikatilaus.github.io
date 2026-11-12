---
sidebar_position: 3
description: Julkaisut
---

# Julkaisut

**Julkaisut**-sivulla ylläpidetään julkaisukanavia, julkaisuja ja niiden ilmestymispäiviä.

Avaa sivu valitsemalla ylävalikosta **Asetukset → Julkaisut**.

Sivulla on kaksi välilehteä:

- **Julkaisut**
- **Lyhenteet ja asetukset**.

![Julkaisut-sivun Julkaisut- ja Lyhenteet ja asetukset -välilehdet](/img/versio2/julkaisut.png)

## Julkaisut

### Julkaisujen hakeminen

Voit hakea julkaisuja esimerkiksi:

- nimellä
- numerolla
- teemalla
- kanavalla
- tiedoston nimellä
- ulkoisella ID:llä.

Voit rajata hakutuloksia valitsemalla **Kanavan** tai määrittämällä **Alkaen**-päivämäärän.

Tyhjennä hakukenttä ja valitut rajaukset napsauttamalla **Tyhjennä**.

Hakukenttä hakee sitä mukaa, kun kirjoitat: nimestä, lyhenteestä, numerosta, teemasta, kanavasta, tiedoston nimestä ja ulkoisesta ID:stä. Hakusanan täytyy löytyä jostakin kentästä. Osumat korostetaan listassa.

**Alkaen**-päivämäärä rajaa sekä listan että viennin julkaisuihin, joiden ilmestymispäivä on valittu päivä tai sen jälkeen. Tyhjä **Alkaen**-kenttä tarkoittaa kaikkia julkaisuja.

![Julkaisujen hakukenttä sekä kanava- ja päivämäärärajaukset](/img/versio2/julkaisut2.png)

### Julkaisuluettelo

Luettelossa näytetään sarakkeet:
- Kanava,
-Nimi,
- Lyhenne, 
- Numero, 
- Teema, 
- Sivumäärä, 
- Ilmestymispäivä, 
- Aineistopäivä ja kello, 
- Julkaisu tiedostona, 
- Ulkoinen ID ja
- JulkaisuID. 

Lista on oletuksena järjestetty ilmestymispäivän mukaan uusin ensin. Voit lajitella listan napsauttamalla yksittäistä sarakeotsikkoa. Listassa näytetään enintään 500 julkaisua. Tarkenna hakua, jos tuloksia on enemmän. Vienti sisältää aina kaikki suodatetut julkaisut.

Avaa julkaisun tiedot napsauttamalla riviä tai rivin vasemmassa reunassa olevaa kynäkuvaketta.

#### Muokkaa listassa

Valitse **Muokkaa listassa**, niin voit muokata useita julkaisuja suoraan listassa. 

Listassa voi muokata seuraavia tietoja: Numero, Teema, Sivumäärä, Ilmestymispäivä sekä Aineistopäivä ja kello. 

Muuttuneet rivit merkitään, ja yläreunan **Tallenna muutokset (n)** -painike tallentaa ne kaikki kerralla. Rivin oma vihreä merkki tallentaa yhden rivin. Jos rivillä on virhe, sen alla näkyy virheteksti.

#### Julkaisun kopioiminen

Napsauta rivin kopiokuvaketta (Kopioi uudeksi julkaisuksi). Kopio avautuu lomakkeelle, mutta se tallentuu vasta, kun napsautat **Tallenna**. Muuta kopioon tarvittaessa numero ja päivät. Kopioon ei tule Ulkoista ID:tä eikä yhteislehti-valintoja.

![Julkaisuluettelo ja julkaisun muokkauskuvake](/img/versio2/julkaisut3.png)

### Julkaisujen vieminen

Napsauta **Export** avataksesi vientivalikon. Voit tulostaa tai kopioida julkaisuluettelon sekä viedä sen PDF-, Excel-, CSV-, JSON- tai HTML-muodossa.

![Julkaisuluettelon tulostus- ja vientivalikko](/img/versio2/julkaisut4.png)

### Puutteelliset määritykset

Sivun yläreunassa näytetään varoitus, jos jollekin kanavalle ei ole määritetty yhtään julkaisua.

**LEHTI**-kanavaan täytyy liittää vähintään yksi julkaisu. Kanavan ilmoitusvaraus liitetään aina julkaisuun, ja aineistot tallennetaan palvelimelle julkaisun lyhenteen mukaiseen hakemistoon.

![Varoitus kanavasta, jolle ei ole määritetty julkaisuja](/img/versio2/julkaisut5.png)

### Uuden julkaisun lisääminen

1. Napsauta **Lisää julkaisu**.
2. Valitse julkaisun **Kanava**.
3. Anna julkaisun **Numero** ja **Nimi**.
4. Määritä tarvittaessa **Sivumäärä**, **Teema** ja **Ulkoinen ID**.
5. Valitse **Ilmestymispäivä**.
6. Määritä **Aineistopäivä ja aika**.
7. Napsauta **Tallenna**.

Voit poistua tallentamatta napsauttamalla **Peruuta**.

Kun uusi julkaisu on tallennettu, lomake jää auki, jotta voit lisätä julkaisun tiedoston heti. Lomakkeen alareunan **Peruuta**-painike vaihtuu silloin **Sulje**-painikkeeksi.

![Uuden julkaisun lomake](/img/versio2/julkaisut6.png)

### Perustiedot

Julkaisulle voidaan määrittää:

- **Kanava**
- **Numero**
- **Nimi**
- **Sivumäärä**
- **Teema**
- **Yhteislehti**
- **Ulkoinen ID**.

**JulkaisuID** muodostuu automaattisesti, kun julkaisu tallennetaan.

Ulkoinen ID on toisessa järjestelmässä julkaisulle käytettävä tunniste. Kenttä on valinnainen.

![Julkaisun kanava, numero, nimi ja muut perustiedot](/img/versio2/julkaisut7.png)

#### Yhteislehti

Jos yhteislehdet on määritelty **Lyhenteet ja asetukset** -sivulla, julkaisun lomakkeella näkyy Yhteislehti-kohta. Se kertoo, mitkä saman päivän numerot ovat julkaisun pareja.

- **Aina myös:** saman päivän numerot, jotka ovat julkaisun vakiopareja.
- **Lisälehdet tähän numeroon:** valitse ruksilla, mitkä lisäkanavien saman päivän numerot ovat julkaisun lisälehtiä (esimerkiksi teemanumerot). Joillakin yhteislehdillä on enimmäismäärä lisälehdille.

Kohta vaatii ilmestymispäivän, koska yhteislehdet ovat saman päivän numeroita. Ilmoitusvaraukseen voi valita julkaisun yhteislehdet, ja ilmoitus julkaistaan myös niissä. Lisälehti on yksisuuntainen: jos myös toisen lehden varaukset voi tuplata tähän lehteen, merkitse toisen lehden numeroon tämä lehti.

### Ajankohdat

**Ilmestymispäivä** kertoo päivän, jolloin julkaisu ilmestyy.

**Aineistopäivä ja aika** kertoo ajankohdan, johon mennessä julkaisuun liittyvä postitus- tai ilmoitusaineisto tulee toimittaa.

![Julkaisun ilmestymispäivä sekä aineistopäivä ja -aika](/img/versio2/julkaisut8.png)

### Julkaisun lisääminen tiedostona

Julkaisun tiedoston voi lisätä vasta sen jälkeen, kun julkaisu on tallennettu.

1. Tallenna julkaisu.
2. Avaa julkaisu uudelleen muokattavaksi.
3. Lisää tiedosto **Julkaisu tiedostona** -osiossa.

![Julkaisun tiedoston lisääminen](/img/versio2/julkaisut9.png)

### Julkaisun poistaminen

Napsauta julkaisun lomakkeella **Poista** ja vahvista. Julkaisu poistetaan pysyvästi, ja sitä ei voi palauttaa.

## Lyhenteet ja asetukset

**Lyhenteet ja asetukset** -välilehdellä voit hallita julkaisujen lyhenteitä, uuden tilauksen lehtivalintoja ja julkaisujen ilmestymispäiviä.

![Julkaisujen Lyhenteet ja asetukset -välilehti](/img/versio2/lyhenteet.png)

### Julkaisujen lyhenteet

Jokaiselle julkaisulle kannattaa määrittää lyhenne, jos julkaisun nimi on yli viisi merkkiä pitkä. Lyhenteitä käytetään esimerkiksi julkaisujen aineistohakemistojen nimissä.

Määritä jokainen julkaisu omalle rivilleen seuraavassa muodossa:

`Julkaisun nimi:LYHENNE`

Esimerkiksi:

```text
TaikaNakka:TAN
TaikaNakka Digi:TAND
Radio Nostalgia:RAD
```

Tallenna muutokset napsauttamalla **Tallenna lyhenteet**.

Lyhenteet ovat yhteiset vanhan TaikaTilauksen kanssa: muutokset näkyvät molemmissa.

![Julkaisujen lyhenteiden määrittäminen ja tallentaminen](/img/versio2/lyhenteet2.png)

### Yhteislehdet

:::info HUOM!
Yhteislehdet näkyvät ja muokattavissa vain pääkäyttäjälle, koska määritys vaikuttaa integraatioihin.
:::

Yhteislehdessä yksi ilmoitusvaraus julkaistaan useassa saman päivän lehdessä, ja se laskutetaan kerran. Varaukselle valitaan, missä julkaisun yhteislehdissä ilmoitus julkaistaan myös. Oletuksena ei missään.

Kirjoita jokainen rivi muodossa:

`Tunniste;Nimi;Kanavat;Lisäkanavat;Lisälehtiä enintään`

Kaksi viimeistä ovat valinnaisia.

- **Kanavat** ovat aina toistensa pareja: saman päivän numerot ovat valittavissa ilman merkintää.
- **Lisäkanavien** saman päivän numeroita voi merkitä julkaisun lomakkeella lisälehdiksi, esimerkiksi teemanumerot.
- **Lisälehtiä enintään** rajaa, montako lisälehteä yhdelle varaukselle voi valita.
- Kanava voi olla vain yhden rivin kanavissa.
- Kirjoita kanavat täsmälleen samoin kuin TaikaTilauksen Kanavat-asetuksessa.

Esimerkki:

`NV;Nakka-Vakka;TaikaNakka,TaikaVakka`

`DIGI;Digi-yhteislehti;TaikaNakka Digi;TaikaNakka,TaikaVakka;1`

Ensimmäisellä rivillä TaikaNakka ja TaikaVakka ovat toistensa pareja: saman päivän numerot ovat valittavissa yhteislehdiksi ilman erillistä merkintää. Toisella rivillä TaikaNakka Digin saman päivän numeroon voi merkitä lisälehdiksi TaikaNakan tai TaikaVakan numeron, ja enintään yhden.

Tyhjä asetus tarkoittaa, ettei toiminto ole käytössä. Napsauta **Tallenna yhteislehdet**. Jos määrityksessä on virhe, asetusta ei tallenneta ja virheet luetellaan.

### Tilattavat lehdet

**Tilattavat lehdet** -osiossa määritetään, mitkä tuoteryhmät näytetään lehtivalintoina uutta tilausta luotaessa. Lista on sovelluksen lehtilista: sitä käyttävät myös Kestojatko, Postitusten luonti ja Postitusasetukset.

Tuoteryhmän lisääminen:

1. Valitse **Tuoteryhmä**.
2. Napsauta **Lisää**.

Poista tuoteryhmä valinnasta napsauttamalla sen vieressä olevaa **x-kuvaketta**.

Jos yhtään tuoteryhmää ei ole valittu, kaikki tuoteryhmät ovat valittavissa uutta tilausta luotaessa.

Jos valitulla tuoteryhmällä ei ole yhtään tuotetta, ryhmän perässä lukee (ei tuotteita).

Tilaustuotteiden lähtöarvot on kopioitu vanhan TaikaTilauksen asetuksista. Tällä sivulla tehdyt muutokset koskevat vain uutta sovellusta eivätkä muuta vanhan TaikaTilauksen asetuksia.

![Uuden tilauksen lehtivalinnoissa näytettävät tuoteryhmät](/img/versio2/lyhenteet3.png)

## Julkaisujen ilmestymisviikonpäivät

Tässä kohdassa määritetään julkaisujen tavalliset ilmestymisviikonpäivät ja aineistopäivät, joiden mukaan julkaisut lisätään julkaisukalenteriin.

Asetuksissa määritellyt julkaisujen lyhenteet näkyvät kentän yläpuolella.

Kirjoita jokainen julkaisu omalle rivilleen muodossa:

`LYHENNE:ILMESTYMISPÄIVÄ:AINEISTOPÄIVÄ:KELLO`

Esimerkiksi:

`TAN:KESKIVIIKKO:MAANANTAI:12.00`

Esimerkin lehti ilmestyy keskiviikkona, ja aineisto täytyy toimittaa edeltävänä maanantaina kello 12.00. Aineistopäivä ja kello ovat valinnaisia: ilman niitä aineistopäivä on ilmestymispäivä.

Julkaisun lyhenteen tulee vastata asetuksissa määriteltyä lyhennettä. Tiedot tallennetaan valitsemalla **Tallenna viikonpäivät**.

### Julkaisujen lisääminen julkaisukalenteriin

1. Valitse **Lisää julkaisukalenteriin**. Näkyviin tulee lomake.
2. Valitse **Alkupäivä** ja **Loppupäivä**.
3. Valitse **Lehden lyhenne** tai **Kaikki**.
4. Napsauta **Lisää**.

Sovellus lisää valitulle ajanjaksolle jokaiselle lehden ilmestymisviikonpäivälle julkaisun. Kanavaksi tulee lyhenne ja numeroksi vuosi ja viikon numero (esimerkiksi 202605). Aineistopäivä ja kello tulevat rivin mukaan, ja ilman niitä aineistopäivä on sama kuin ilmestymispäivä. 

Jos julkaisu on jo kalenterissa, sovellus ei lisää sitä uudelleen. Se päivittää olemassa olevan julkaisun aineistopäivän, jos aineistopäivä on vielä oletusarvo. Käsin muutettua aineistopäivää ei päivitetä. Tulosviestissä kerrotaan, montako julkaisua lisättiin, päivitettiin ja ohitettiin.

### Julkaisujen poistaminen aikaväliltä

Valitse Lehden lyhenne (tai Kaikki), Alkupäivä ja Loppupäivä ja napsauta **Poista julkaisut annetulta aikaväliltä**. Sovellus kysyy ensin vahvistuksen ja kertoo, montako julkaisua poistetaan. Napsauta **Kyllä, poista**, kun haluat jatkaa, tai **Peruuta**.

Julkaisuja, joihin on ilmoitusvarauksia, alennussääntöjä tai tehty postitus, ei poisteta. Ne luetellaan kohdassa **Ei poisteta**, ja syy näkyy rivillä.

![Julkaisujen ilmestymisviikonpäivät ja julkaisukalenteriin lisäämisen aikaväli](/img/versio2/lyhenteet5.png)




