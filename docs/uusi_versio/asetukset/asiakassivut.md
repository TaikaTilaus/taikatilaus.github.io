---
sidebar_position: 10
sidebar_label: Tunnukset ja salasana
title: Asiakkaan tunnussivut
description: Asiakkaan salasanan vaihtosivu, tunnuksen luonti ja Sivujen ilme (teema, värit, logo, favicon) kohdassa Asetukset → Tunnukset ja salasana.
---

# Asiakkaan tunnussivut

Asiakkaan tunnussivut ovat julkisia sivuja, joilla asiakas hoitaa tunnuksensa itse. Sivuja on kolme:

- **Unohtuiko salasana** (`/salasana/<osoite>`): asiakas antaa sähköpostiosoitteen ja saa linkin, jolla hän asettaa uuden salasanan.
- **Uuden salasanan asetus** (`/salasana/<osoite>/vaihda/<tunniste>`): asiakas asettaa uuden salasanan sähköpostilinkistä. Linkki on voimassa 2 vuorokautta ja toimii vain kerran.
- **Luo tunnus** (`/rekisteroidy/<osoite>`): asiakas luo itselleen tunnuksen.

`<osoite>` on yrityksen nimi tai lehden osoite, esimerkiksi `taikanakka`. Sivut ovat käytettävissä, kun asiakkaiden käyttäjätunnukset on otettu käyttöön.

## Salasanan sääntö

Uuden salasanan on täytettävä seuraavat ehdot:

- vähintään 6 merkkiä, enintään 50 merkkiä
- pieni ja iso kirjain, numero ja erikoismerkki (esimerkiksi `! # $ % & ( ) + , - . / : ; = ? @ _`)
- ei välilyöntejä eikä merkkejä `<` ja `>`.

Jos yrityksellä on lehti, jonka salasanasääntö on lievempi, vaatimus on vain vähintään 6 merkkiä.

Salasanan asettamisen jälkeen sivu näyttää *Salasana vaihdettu*. Jos lehdelle on asetettu paluuosoite, sivulla on painike, joka vie asiakkaan takaisin lehden sivustolle, esimerkiksi *Siirry lukemaan*. Ilman paluuosoitetta painiketta ei näytetä. Salasanan asettaminen ei kirjaa asiakasta sisään.

## Tunnuksen luonti

Tunnuksen luontisivulla asiakas luo itselleen käyttäjätunnuksen. Tunnus liitetään asiakkaaseen, joka on jo asiakasrekisterissä. Lomakkeella kysytään:

- **Asiakasnumero**: numero löytyy tilauksen laskulta.
- **Katuosoite tai nimi**: osoite, johon lehti toimitetaan, tai tilaajan nimi. Toinen näistä riittää.
- **Sähköpostiosoite**: osoitteesta tulee asiakkaan käyttäjätunnus.

### Miten sovellus tunnistaa asiakkaan

Sovellus etsii ensin asiakasnumeron perusteella asiakkaan. Sen jälkeen se tarkistaa, että asiakkaan syöttämä katuosoite tai nimi vastaa rekisterissä olevia tietoja. Näin asiakasnumeroa ei voi käyttää toisen asiakkaan tunnuksen luomiseen.

Tarkistus on kohtuullisen joustava, jotta pienet kirjoitusvirheet eivät estä tunnuksen luontia. Seuraavat asiat eivät haittaa:

- Isoilla ja pienillä kirjaimilla ei ole väliä.
- Kirjaimet ä, ö ja å saa kirjoittaa ilman pisteitä tai rengasta, esimerkiksi a ja o.
- Välimerkeillä ei ole väliä.
- Sanojen järjestyksellä ei ole väliä.
- Yksittäisessä sanassa saa olla pieni kirjoitusvirhe: lyhyessä sanassa ei yhtään, keskipitkässä yksi ja pitkässä kaksi. Numeroissa ei saa olla virheitä.

**Katuosoite.** Katuosoitteeksi riittää katu ja talonumero.

- Välilyönneillä ja väliviivoilla ei ole väliä. Esimerkiksi "Esimerkki tie 5" ja "Esimerkkitie 5" tulkitaan samaksi osoitteeksi.
- Talonumeron perään voi kirjoittaa myös rapun, huoneiston, postinumeron ja postitoimipaikan, esimerkiksi "Esimerkkitie 5 B 12, 00100 Helsinki".
- Osoitteen alkuun voi kirjoittaa postinumeron ja postitoimipaikan tai nimen.
- Kadun nimen voi lyhentää, jos nimestä jää jäljelle vähintään kuusi kirjainta, esimerkiksi "Esimerkkit. 5".
- Talonumeron voi jättää pois, jos kadun nimi on vähintään neljä kirjainta pitkä. Pelkkä kadun nimen alku ei kuitenkaan kelpaa, ja väärä talonumero ei kelpaa koskaan.
- Sovellus vertaa kirjoitettua osoitetta asiakkaan lähiosoitteeseen, postilokeroon ja väliaikaiseen osoitteeseen.

**Nimi.** Nimeksi kelpaa joko yrityksen nimi tai asiakkaan koko nimi. Henkilön nimestä riittää, että kirjoitetussa nimessä on sukunimi ja yksi muu rekisterissä oleva nimi, esimerkiksi etunimi.

- Etunimen ja sukunimen järjestyksellä ei ole väliä: "Matti Virtanen" ja "Virtanen Matti" kelpaavat molemmat.
- Etunimestä voi kirjoittaa pelkän alkukirjaimen, esimerkiksi "M Virtanen".
- Jos rekisterissä on useita etunimiä, mikä tahansa niistä kelpaa.
- Jos tilauksessa on kaksi henkilöä, kumman tahansa nimi kelpaa.
- Sanat "ja" ja "&" sekä yhtiömuodot, kuten Oy, Ab ja Ky, voi jättää pois.
- Nimen ja osoitteen voi kirjoittaa samaan kenttään, esimerkiksi "Matti Virtanen, Esimerkkitie 5".
- Kirjoitetussa nimessä saa olla yksi ylimääräinen sana, jota ei löydy rekisteristä.

Seuraavat tiedot eivät kelpaa:

- pelkkä sukunimi tai pelkät etunimet
- väärä etunimi
- toisen asiakkaan osoite tai nimi
- nimi, jossa on kaksi sanaa, joita ei löydy rekisteristä
- osoite, jossa talonumero on eri kuin rekisterissä.

**Lahjatilaus.** Laskun asiakasnumero on aina maksajan numero. Lahjan saaja ei siis voi luoda tunnusta maksajan asiakasnumerolla, koska hänen osoitteensa ja nimensä eivät vastaa maksajan tietoja. Saaja ohjataan tukitekstiin.

### Jos tiedot eivät täsmää

Sivu kertoo, että asiakasnumero ja katuosoite tai nimi eivät täsmää, mutta ei kerro, kumpi tieto on väärin.
Viiden epäonnistuneen yrityksen jälkeen lomake lukkiutuu 24 tunniksi ja näyttää tukitekstin, jonka pääkäyttäjä on määrittänyt. Epäonnistuneet yritykset lasketaan erikseen yhdestä laitteesta ja yhdestä asiakasnumerosta. Onnistunut tunnuksen luonti nollaa laskurit.

### Kun tiedot täsmäävät

Jos syötetyllä sähköpostiosoitteella ei vielä ole käyttäjätunnusta:

1. Sovellus luo käyttäjätunnuksen, ja tunnus liitetään asiakkaaseen.
2. Asiakas saa sähköpostiinsa linkin, jolla hän asettaa salasanan. Sivu kertoo tästä: *Tunnus luotu. Lähetimme osoitteeseen … linkin, jolla asetat salasanan.*
3. Asiakkaan tietoja ei muuteta. Jos sähköpostiosoite on eri kuin asiakkaalle tallennettu osoite, asiakaspalvelulle tulee [Huomio](../Etusivu/huomiot.md), jotta se voi tarkistaa asian.

Jos sähköpostiosoitteella on jo käyttäjätunnus, sivu kertoo siitä ja ohjaa asiakkaan vaihtamaan salasanansa. Olemassa olevaa tunnusta ei liitetä toiseen asiakkaaseen.

## Sivujen ilme

Tunnussivujen ilme määritetään kohdassa **Asetukset → Tunnukset ja salasana → Sivujen ilme**.

| Asetus | Kuvaus |
|---|---|
| **Teema** | *Vaalea* (oletus), *Tumma* tai *Selaimen mukaan*. Selaimen mukaan -teema seuraa asiakkaan selaimen vaaleaa tai tummaa tilaa. |
| **Yläpalkin väri, Taustan väri, Pääväri** | Värit muodossa `#rrggbb`. Tyhjä kohta käyttää teeman väriä. Pääväri on painikkeiden väri, ja painikkeiden teksti on aina valkoinen. |
| **Logo** | JPG, PNG tai WebP, enintään 2 Mt. Logon korkeus on 48 pikseliä, joten kuvassa voi olla usean lehden logot vierekkäin. Ilman omaa logoa käytetään yrityksen logoa. Lehden osoitteella (`/salasana/<lehti>`) näkyy lehden oma logo, jos sellainen on asetettu. |
| **Favicon** | ICO, PNG, JPG tai WebP, enintään 2 Mt. |
| **Paluuosoite** | Lehden etusivun osoite. Se näkyy jokaisen sivun alla linkkinä *← Takaisin* ja yläpalkin logo vie samaan osoitteeseen. Tyhjä = ei linkkiä. |

Logo ja favicon tallentuvat heti, kun lataat ne. Värit ja teema tallentuvat **Tallenna**-painikkeella. **Kontrastivaroitus** näkyy, jos tekstin ja taustan kontrasti jää alle 4,5:1. Varoitus ei estä tallennusta. OmaPalvelu käyttää samaa ilmettä, kunnes sille asetetaan [oma ilme](./omapalvelu/asetukset.md#omapalvelun-ilme).

Yrityksen omat värit ovat tärkeämpiä kuin lehden tilaussivulla määritetty pääväri.

## Testilomake

Testisivustolla on käytettävissä testilomake `/salasana/<osoite>/testi`. Lomakkeella tarkistetaan, että tunnus ja salasana toimivat. Se ei kirjaa sisään eikä muuta tunnusta.
