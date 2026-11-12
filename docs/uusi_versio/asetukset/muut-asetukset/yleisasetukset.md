---
sidebar_position: 1
slug: /uusi_versio/asetukset/yleisasetukset
description: Yleisasetukset — Tilaustavat, Tilaustavan lisääminen, Tilaustavan poistaminen.
---

# Yleisasetukset

**Yleisasetukset**-sivulla hallitaan sovelluksen yleisiä asetuksia: tuotteiden hintojen näyttöä, **Tuotteet**-sivun kenttiä, tilaustapoja ja tilauksen katkaisun syitä.

Avaa sivu valitsemalla **Asetukset → Muut asetukset → Yleisasetukset.**

Kunkin muutoksen jälkeen kohdan viereen tulee teksti **Tallennettu**. Asetukset tallentuvat heti, eikä erillistä tallennuspainiketta ole.

Palaa asetusten etusivulle napsauttamalla **Palaa asetuksiin.**

## Tuotteiden hinnat tilauslomakkeella

Valinta määrää, näytetäänkö tuotteiden hinnat uuden tilauksen **Tuote**-valintalistassa verollisina vai verottomina.

- **Näytä tuotteiden hinnat verollisina (sis. alv)** päällä: "Jatkuva täystilaus 12 kk (124,00 € sis. ALV 10 %, kesto)"
- Pois päältä: "Jatkuva täystilaus 12 kk (112,73 € + ALV 10 %, kesto)"

Alv-prosentti on tuotteen oma (**Tuotteet-sivun ALV %**). Asetus vaikuttaa vain listan näyttöön. Tuotteen hinta tallennetaan edelleen ilman arvonlisäveroa, ja tilauksen verollinen summa lasketaan kuten ennenkin. Oletuksena valinta on päällä.

## Tuotteet-sivun kentät

Tässä osiossa valitset, mitkä valinnaiset kentät näkyvät Tuotteet-sivulla (lista, haku ja tuotteen lomake). Piilotettu kenttä ei katoa: tuotteen tieto säilyy ennallaan, mutta sitä ei näytetä.

### Näytä Tuotenumero

Valinta määrää, näkyykö Tuotenumero **Tuotteet**-sivulla.

### Tilaustuotteen kentät

Tilaustuotteen lomakkeen valinnaiset kentät. Voit näyttää tai piilottaa kunkin kentän omalla valinnallaan:

- Näytä Tilauslaji
- Näytä SKU-koodi
- Näytä PortalID
- Näytä Jatkotuote
- Näytä Karenssi päivää
- Näytä Digituote
- Näytä Oikeuttaa digipalveluun
- Näytä Digipalvelu-kenttä

## Tilaustavat

Tilaustavat-osiossa määritetään tilauslomakkeen **Tilaustapa**-valintalistalla näkyvät vaihtoehdot.

1. Kirjoita uusi tilaustapa **Uusi tilaustapa** -kenttään (esimerkiksi Puhelin).
2. Napsauta **Lisää** tai paina **Enter**.

Poista tilaustapa napsauttamalla sen vieressä olevaa **x**-kuvaketta.

## Katkaisun syyt

**Katkaisun syyt** -osiossa määritetään vaihtoehdot, jotka näkyvät tilausta muokattaessa **Katkaisun syy** -valintalistalla.

Katkaisun syyt voidaan ryhmitellä kirjoittamalla ensin syyn luokka ja sen jälkeen tarkempi syy, esimerkiksi:

RAHA: Lehti on liian kallis

### Katkaisun syyn lisääminen ja poistaminen

1. Kirjoita uusi katkaisun syy **Uusi katkaisun syy** -kenttään.
2. Napsauta **Lisää** tai paina **Enter**.

Poista katkaisun syy napsauttamalla sen vieressä olevaa **x**-kuvaketta.

### Syyt, jotka antavat tilan MAKSAMATTA PÄÄTTYNYT

Tilaus, jolla on katkaisupäivä ja jokin tässä valituista katkaisun syistä, saa tilan **MAKSAMATTA PÄÄTTYNYT**.

- Lisää syy valitsemalla se **Lisää…**-valikosta. Valikossa ovat **Katkaisun syyt** -listan syyt, joita ei ole vielä valittu.
- Poista valinta napsauttamalla syyn vieressä olevaa **x**-kuvaketta. Vähintään yksi syy jää aina valituksi, joten viimeistä valintaa ei voi poistaa.
- Oletus on syy, jonka teksti sisältää sanan **MAKSAMATTA**.

Muutos vaikuttaa tilojen päättelyyn seuraavasta ajosta alkaen sekä Etusivun **Maksamatta päättyneet** -korttiin ja **Tilaukset**-hakuun.