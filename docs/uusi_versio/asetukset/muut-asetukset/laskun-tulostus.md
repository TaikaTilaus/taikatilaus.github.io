---
sidebar_position: 8
title: Laskun tulostus
description: Asetukset → Muut asetukset → Laskun tulostus — laskuttajan nimi, Y-tunnus, tilinumero, logo, alatunniste, laskun alkuteksti ja tilisiirtolomake yhteisinä ja portaaleittain, tuonti vanhasta TaikaTilauksesta, tilannekatsaus ja esikatselu.
---

# Laskun tulostus

**Laskun tulostus** -sivulla määrität tiedot, jotka tulostuvat laskun PDF-tiedostoon: laskuttajan nimen, Y-tunnuksen, kotipaikan, tilinumeron, logon, alatunnisteen ja laskun alkutekstin. Sivu on **Asetukset → Muut asetukset** -sivun kortti **Laskun tulostus**.

Pääkäyttäjä voi muuttaa tietoja. Muut käyttäjät näkevät sivun vain luettavana.

## Yhteiset ja portaalikohtaiset tiedot

Jos yrityksellä on useita portaaleja eli laskuttajia, sivun yläosassa on välilehdet:

- **Yhteiset**: tiedot, joita käytetään kaikilla laskuilla, ellei portaalilla ole omia.
- **Portaalin välilehti**, esimerkiksi *1 – Esimerkki Oy*: portaalin omat tiedot. Portaali saa välilehden, kun sillä on laskuja tai se on laskuttanut kahden viime vuoden aikana, tai kun sillä on jo omia asetuksia. Vanha portaali, jolla on vain vanhoja laskuja, ei saa välilehteä. Sen laskut tulostuvat yhteisillä tiedoilla.

Jos yrityksellä ei ole portaaleja, sivulla on vain yhteiset tiedot.

Portaalin välilehdellä jokaisen kentän vieressä on valinta **Käytä yhteistä**. Se on oletuksena päällä. Silloin kenttä on harmaana ja näyttää yhteisen arvon. Kun kirjoitat kenttään oman arvon, valinta poistuu ja portaali käyttää omaa arvoaan.

## Kentät

| Kenttä | Kuvaus |
|---|---|
| **Saaja** | Laskuttajan nimi. |
| **Y-tunnus** | Laskuttajan Y-tunnus. |
| **Kotipaikka** | Laskuttajan kotipaikka. |
| **Tilinumero** | Laskuttajan tilinumero (IBAN). Sovellus tarkistaa IBANin muodon ja tarkisteen ja ryhmittelee numeron neljän merkin ryhmiin. Virheellinen suomalainen IBAN estää tallennuksen. Sama tili tulostuu laskun tilinumeroksi ja pankkiviivakoodiin. |
| **Logo** | Laskun logo. Valitse tiedosto **Valitse Pohjat-kansiosta** -valikosta (PNG, JPG ja GIF) tai napsauta **Lataa uusi logo**. Valitun logon pikkukuva näkyy kentän alla. Jos tiedostoa ei löydy Pohjat-kansiosta, näkyy punainen huomautus. |
| **Alatunniste** | Laskun alareunan tekstit tasalevyisellä fontilla, rivi riviltä kuten PDF:llä. Tasaa sarakkeet välilyönneillä. Alla on esimerkkirivi. |
| **Laskun viestin alkuteksti** | Teksti, joka tulostuu laskun viestin alkuun. |
| **Tilisiirtolomake** | Kytkin, jolla laskulle tulostuu tilisiirtolomake. |
| **Tilisiirtolomakkeen tilit** | Taulukko tileistä (IBAN, BIC ja pankin nimi). |

**Logon lataus.** Voit ladata vain PNG- ja JPG-kuvia, enintään 2 Mt. Samannimistä tiedostoa ei korvata. Anna uudelle kuvalle toinen nimi tai valitse jokin kansiossa jo oleva tiedosto. Ladattu kuva tallentuu kansioon heti, mutta Logo-asetus muuttuu vasta, kun napsautat **Tallenna**.

**Tilisiirtolomake.** Kun kytkin on päällä, laskulle tulostuu tilisiirtolomake. Taulukossa on kentät IBAN, BIC ja pankki. Napsauta **Lisää tili** lisätäksesi rivin ja roskakorikuvaketta poistaaksesi. IBAN ryhmitellään, ja jos BIC ja pankin nimi ovat tyhjiä, ne täydentyvät rahalaitostunnuksesta. Lomakkeelle tulostuu kaksi ensimmäistä tiliä, ja jos tilejä on enemmän, saat huomautuksen. Jos tilejä ei ole, lomakkeelle tulee laskun tilinumero. Portaali voi kytkeä yhteisen lomakkeen pois päältä omalla välilehdellään.

## Tallennus ja tilinumeron muutos

**Tallenna** tallentaa kaikki muuttuneet välilehdet kerralla. Muuttunut välilehti on merkitty pisteellä (•).

Tilinumeron muutos vahvistetaan erikseen, koska väärä tilinumero ohjaa maksut väärälle tilille. Ikkuna kertoo vanhan ja uuden tilinumeron ja että kaikki sen jälkeen tulostettavat laskut käyttävät uutta tiliä.

Jokainen muutos kirjataan muutoslokiin, ja rivit näkyvät **Ylläpito → Tapahtumaloki** -sivulla lähteellä *Asetukset*.

## Tuo TaikaTilauksesta

**Tuo TaikaTilauksesta** -painike tuo laskuttajan tiedot vanhan TaikaTilauksen asetuksista, joten niitä ei tarvitse kirjoittaa käsin. Painike on Yhteiset-välilehdellä (kaikki portaalit kerralla) ja jokaisella portaalin välilehdellä (vain kyseinen portaali).

Painike ei tallenna mitään suoraan, vaan avaa vertailuikkunan. Ikkunassa on taulukko, jossa näkyvät portaali, kenttä, nykyinen arvo uudessa sovelluksessa ja arvo vanhassa TaikaTilauksessa. Sovellus valitsee rivin valmiiksi, kun uuden sovelluksen kenttä on tyhjä. Jos uudessa sovelluksessa on jo eri arvo, rivi on korostettu eikä sitä ole valittu.

1. Tarkista vertailuikkunan rivit ja valitse tuotavat.
2. Napsauta **Siirrä valitut lomakkeelle**.
3. Tarkista lomake ja napsauta **Tallenna**.

Ikkuna voi näyttää varoituksia:

- **Viivakoodin tili eri**: vanhassa TaikaTilauksessa pankkiviivakoodi muodostui eri tilistä kuin laskulla näkyvä tilinumero. Uusi sovellus käyttää yhtä tiliä, joten valitse, kumpaa käytät.
- **Riippuu laskusta**: kenttä vaihteli vanhassa laskun toimitustavan, tyypin tai kielen mukaan. Tuodaan sähköpostilaskun versio.
- **Logotiedosto puuttuu**: tiedostoa ei löydy Pohjat-kansiosta. Kopioi se kansioon.

## Tilanne

Yhteiset-välilehdellä on osio **Tilanne**. Taulukossa on rivi jokaiselle portaalivälilehdelle ja rivi *Muut laskut (yhteiset tiedot)*. Rivillä näkyvät laskujen määrä (kaikki ja kahden viime vuoden), laskuttaja, tilinumero ja logo.

- **Punainen**: tilinumero puuttuu, logo puuttuu tai logotiedostoa ei löydy. Lasku tulostuu ilman näitä tietoja.
- **Huomautus**: laskuttajan nimi tai Y-tunnus puuttuu.
- **Kunnossa**: tiedot ovat valmiit.

Jos tiedoissa on virhe, varoitus näkyy myös [Laskujen luonti](../../Laskut/laskujen-luonti.md)- ja [Laskujen lähetys](../../Laskut/laskujen-lahetys.md) -sivujen yläosassa, kun asiakas luo tai lähettää laskunsa tässä sovelluksessa. Varoitus näyttää vain luettelossa olevien laskujen portaalit ja linkin **Laskun tulostus** -sivulle. Se ei estä mitään, mutta sen avulla huomaat puutteen ennen kuin laskut lähtevät.

## Esikatselu

**Esikatsele demolasku** avaa demolaskun PDF:n valitun välilehden portaalin tiedoilla. Esikatselu käyttää tallennettuja tietoja. Jos lomakkeella on tallentamattomia muutoksia, sivu kertoo siitä: tallenna ensin.

**Avaa lasku** -kenttään voit kirjoittaa laskun numeron. Silloin avautuu oikea lasku, ja se tulostuu laskun oman portaalin tiedoilla, kuten [Laskujen haussa](../../Laskut/laskujen-haku.md). Esikatselu on käytettävissä myös muille kuin pääkäyttäjille.
