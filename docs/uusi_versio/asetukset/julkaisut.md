---
sidebar_position: 2.5
description: Julkaisut
---

# Julkaisut

**Julkaisut**-sivulla ylläpidetään julkaisukanavia, julkaisuja ja niiden ilmestymispäiviä.

Voit avata sivun kahdella tavalla:

- valitse ylävalikosta **Asetukset → Julkaisut**
- valitse **Asetukset → Kaikki asetukset** ja napsauta **Julkaisut**-korttia.

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

![Julkaisujen hakukenttä sekä kanava- ja päivämäärärajaukset](/img/versio2/julkaisut2.png)

### Julkaisuluettelo

Julkaisuluettelossa näytetään esimerkiksi:

- kanava
- julkaisun nimi ja lyhenne
- julkaisun numero
- teema
- sivumäärä
- ilmestymispäivä
- aineistopäivä ja -aika
- julkaisuun liitetty tiedosto
- ulkoinen ID
- JulkaisuID.

Avaa julkaisun tiedot muokattavaksi napsauttamalla rivin vasemmassa reunassa olevaa **kynäkuvaketta**.

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

![Uuden julkaisun lomake](/img/versio2/julkaisut6.png)

### Perustiedot

Julkaisulle voidaan määrittää:

- **Kanava**
- **Numero**
- **Nimi**
- **Sivumäärä**
- **Teema**
- **Ulkoinen ID**.

**JulkaisuID** muodostuu automaattisesti, kun julkaisu tallennetaan.

Ulkoinen ID on toisessa järjestelmässä julkaisulle käytettävä tunniste. Kenttä on valinnainen.

![Julkaisun kanava, numero, nimi ja muut perustiedot](/img/versio2/julkaisut7.png)

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

![Julkaisujen lyhenteiden määrittäminen ja tallentaminen](/img/versio2/lyhenteet2.png)

### Tilattavat lehdet

**Tilattavat lehdet** -osiossa määritetään, mitkä tuoteryhmät näytetään lehtivalintoina uutta tilausta luotaessa.

Tuoteryhmän lisääminen:

1. Valitse **Tuoteryhmä**.
2. Napsauta **Lisää**.

Poista tuoteryhmä valinnasta napsauttamalla sen vieressä olevaa **x-kuvaketta**.

Jos yhtään tuoteryhmää ei ole valittu, kaikki tuoteryhmät ovat valittavissa uutta tilausta luotaessa.

Tilaustuotteiden lähtöarvot on kopioitu vanhan TaikaTilauksen asetuksista. Tällä sivulla tehdyt muutokset koskevat vain uutta sovellusta eivätkä muuta vanhan TaikaTilauksen asetuksia.

![Uuden tilauksen lehtivalinnoissa näytettävät tuoteryhmät](/img/versio2/lyhenteet3.png)

## Julkaisujen ilmestymisviikonpäivät

Tässä kohdassa määritetään julkaisujen tavalliset ilmestymisviikonpäivät julkaisukalenteria varten.

Asetuksissa määritellyt julkaisut ja niiden lyhenteet näkyvät kentän yläpuolella.

Kirjoita jokainen julkaisu omalle rivilleen seuraavassa muodossa:

```text
LYHENNE:VIIKONPÄIVÄ
```

Esimerkiksi:

```text
MAI:KESKIVIIKKO
NET:PERJANTAI
RAD:MAANANTAI
```

Julkaisun lyhenteen tulee vastata asetuksissa määriteltyä lyhennettä.

Kun olet määrittänyt ilmestymisviikonpäivät, valitse **Tallenna viikonpäivät**.

Valitse tämän jälkeen **Lisää julkaisukalenteriin**, jotta määritetyt ilmestymispäivät lisätään julkaisukalenteriin.

Voit määrittää **Alku- ja loppupäivän**, jonka sisälle valitun lehden julkaisut lisätään.

![Julkaisujen ilmestymisviikonpäivät ja julkaisukalenteriin lisäämisen aikaväli](/img/versio2/lyhenteet5.png)

### Julkaisujen päivitys

Valitse **Julkaisujen päivitys**, kun haluat päivittää julkaisukalenterissa olevien julkaisujen ilmestymis- ja aineistopäivät.

![Julkaisukalenterin ilmestymis- ja aineistopäivien päivitys](/img/versio2/lyhenteet4.png)




