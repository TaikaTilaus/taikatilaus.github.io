---
sidebar_position: 4
description: Tilit.
---

# Tilit

**Tilit**-sivulla ylläpidetään kirjanpidon tilikarttaa. Tilejä käytetään tuotteiden kirjanpidon tileillä (myyntitili, ALV-velkatili ja myyntisaamiset tili) ja tiliöinneissä, joita muodostuu laskuista ja maksuista.

Avaa sivu valitsemalla **Asetukset → Tilit.**

:::info HUOM!
Tilien käsittely on käytettävissä vain yrityksen pääkäyttäjälle, ellei tuotteiden ja julkaisujen käsittelyä ole sallittu kaikille käyttäjille.
:::

## Tilien hakeminen ja selaaminen

Tilit näytetään listassa tilinumeron mukaisessa järjestyksessä.

Hakukenttään voit kirjoittaa tilinumeron, tilin nimen tai tilin tyypin osan. Lista suodattuu kirjoittaessa.

Listassa on sarakkeet:

| Sarake | Merkitys |
|---|---|
| **Tilinumero** | tilin numero |
| **Tilin nimi** | tilin nimi |
| **Tyyppi** | tilin tyypin lyhenne (esimerkiksi MY tai MS) |
| **Pankkitili** | Kyllä, jos tili on pankkitili |
| **Myyntitili** | Kyllä, jos tili on myyntitili |
| **Kulutili** | Kyllä, jos tili on kulutili |
| **Tiliöintejä** | kuinka monta tiliöintiä tilillä on |
| **Tuotteita** | kuinka monella tuotteella ja myyntituotteella tili on käytössä |

**Sarakkeet**-valinnalla voit valita, mitkä sarakkeet näytetään. Napsauta yksittäistä sarakeotsikkoa, kun haluat lajitella listan sen mukaan. Napsauttamalla uudelleen järjestys kääntyy.

Napsauta **Export**, kun haluat tulostaa, kopioida tai viedä listan tiedostoon (PDF, Excel, CSV, JSON ja muut valikon muodot). Vienti sisältää kaikki haun mukaiset tilit.

## Tilin avaaminen

Napsauta riviä tai rivin kynäkuvaketta. Tilin lomake avautuu listan viereen. Lomakkeen yläreunassa näkyy tilin numero, ja alareunassa näkyy, milloin ja kuka on viimeksi muuttanut tilin tietoja.

## Uuden tilin lisääminen

1. Napsauta **Lisää tili**.
2. Anna **Tilin numero**.
3. Anna **Tilin nimi**.
4. Valitse tai kirjoita **Tilin tyyppi**.
5. Valitse onko tili **Pankkitili**, **Myyntitili** vai **Kulutili**.
6. Napsauta **Tallenna**.

Voit poistua tallentamatta napsauttamalla **Peruuta**.

### Tilin tiedot

- **Tilin numero:** numero väliltä 0–1 000 000. Tilinumeron täytyy olla yksilöllinen, eli samalla numerolla ei voi olla kahta tiliä.
- **Tilin nimi:** 1–100 merkkiä.
- **Tilin tyyppi:** lyhenne, joka viedään tiliöinteihin, 1–100 merkkiä. Valitse tyyppi. Tyypit ovat:
  - PA = pankki
  - MS = myyntisaamiset
  - ALV
  - MY = myynti
  - PY = pyöristys
  - LT = luottotappio
  - MUU = joku muu

  Tilin tyypin kysymysmerkki näyttää ohjeen. Tyypin neljä ensimmäistä merkkiä ovat tärkeät.
- **Pankkitili**, **Myyntitili** ja **Kulutili:** valitse tilin laji.

Jos tiedoissa on virhe, lomakkeella näkyy punainen virheteksti, eikä tiliä tallenneta. Esimerkiksi *"Tilinumerolla 3000 on jo tili"* tarkoittaa, että numero on jo käytössä.

Jos muutat tietoja lomakkeella, paina **Tallenna**.

:::warning HUOM!

Käytössä olevan tilin numeroa ei voi muuttaa. Tili on käytössä, jos tiliöinnit tai tuotteet viittaavat sen numeroon. Jos numero pitää vaihtaa, lisää uusi tili ja vaihda se tuotteille Tuotteet-sivulla.

Tilin nimen, tyypin ja lajit voi muuttaa aina.
:::

### Muokkaa listassa

Valitse **Muokkaa listassa**, niin voit muokata useita tilejä suoraan listassa. Listassa voi muokata tilin nimeä, tyyppiä sekä pankki-, myynti- ja kulutilin valintoja. Tilinumeroa ei voi muokata listassa.

Muuttuneet rivit merkitään. Yläreunan **Tallenna muutokset (n)** -painike tallentaa kaikki muutokset kerralla, ja rivin oma vihreä merkki tallentaa yhden rivin. Jos jollakin rivillä on virhe, sen alla näkyy virheteksti. Muut rivit tallentuvat silti ja tulosviestissä kerrotaan tallennettujen tilien määrä ja virheellisten rivien määrä.

### Tilin kopioiminen

Napsauta rivin kopiokuvaketta (Kopioi uudeksi tiliksi). Kopio avautuu lomakkeelle ilman tilinumeroa. Anna uusi tilinumero ja napsauta **Tallenna**. Kopio tallentuu vasta silloin.

## Tilin poistaminen

Avaa tili ja napsauta **Poista**. Sovellus kysyy vahvistuksen. Napsauta **Poista**, kun haluat jatkaa.

:::warning HUOM!

Tilin poistaminen poistaa tilin pysyvästi, eikä sitä voi palauttaa. Tilin voi poistaa vain, jos tilillä ei ole tiliöintejä eikä mikään tuote tai myyntituote käytä sitä. Muussa tapauksessa lukee "Tiliä … ei voi poistaa, koska tiliöinnit tai tuotteet käyttävät sitä."
:::

Jos tilillä on tiliöintejä, tarkista **Tiliöintejä**- ja **Tuotteita**-sarakkeista, mitkä tilit ovat käytössä. Käyttämättömät tilit ovat tyhjiä näissä sarakkeissa.

## Muutosloki

Tilien lisäykset, muutokset ja poistot tallentuvat lokiin. Lokiin kirjataan, kuka muutoksen teki ja mitä tietoja muutettiin.
