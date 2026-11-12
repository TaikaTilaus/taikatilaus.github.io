---
sidebar_position: 3
description: Tilausyhteenveto — Voimassa olevat tilaukset tuotteittain, Tilausluettelot, Tilausluetteloiden tiedot.
---

# Tilausyhteenveto

**Tilausyhteenveto**-sivulla näet voimassa olevien tilausten määrät tuotteittain sekä uusimmat ja päättyneet tilaukset.

Avaa sivu päävalikosta valitsemalla **Raportit → Tilausyhteenveto**.

Sivulla on ensin **Voimassa olevat tilaukset tuotteittain** -osio. Sen alla ovat kolme tilausluetteloa: Uusimmat tilaukset, Päättyneet määräaikaiset ja Katkaistut kestotilaukset. Leveällä näytöllä luettelot ovat rinnakkain.

![Tilausyhteenveto-sivun yleisnäkymä](/img/versio2/tilausyhteenveto.png)

## Voimassa olevat tilaukset tuotteittain

**Voimassa olevat tilaukset tuotteittain** -osiossa tilaukset on ryhmitelty lehdittäin ja tuotteittain. Raportissa on kohdepäivä: voimassa olevat tilaukset lasketaan valitulle päivälle. Kohdepäivää voi muuttaa, jos haluaa tarkastella tilauksia tietyltä päivältä.

Tilaus lasketaan voimassa olevaksi, kun sen alkupäivä on kohdepäivä tai aiemmin, loppupäivä on kohdepäivä tai myöhemmin (tai puuttuu) ja tilausta ei ole katkaistu ennen kohdepäivää. Tilaus on siis voimassa alku-, loppu- ja katkaisupäivänä. Poistettuja tilauksia ei lasketa.

Lehden nimen vieressä näkyy sen voimassa olevien tilausten kokonaismäärä. Jokaisella tuoterivillä näkyvät:

- tuotteen **nimi** (tuotteen nimen edessä on **kampanjan nimi**, jos sellainen on) sekä **TuoteID**
- tilausmäärää havainnollistava palkki
- tuotteen voimassa olevien **tilausten lukumäärä.**

Tilaukset on lajiteltu:

- **Maksullisiin tuotteisiin**, jotka on lajiteltu:
    - **Jatkuviin kestotilauksiin**
    - **Määräaikaisiin tilauksiin**
    - **Stripe-tilauksiin** (jos Stripe on käytössä)
- **Vapaakappaleisiin**, eli tuotteisiin, joiden hinta on 0 euroa

Tuotteet ovat ryhmän sisällä tilausmäärän mukaisessa järjestyksessä, suurin ensin.

Jos joidenkin tilausten tuotteelta puuttuu hinta tai hinta on negatiivinen, sivun alareunassa lukee, montako tilausta se koskee. Niitä ei lasketa maksullisiin tuotteisiin eikä vapaakappaleisiin. Jos valittuna päivänä ei ole voimassa olevia tilauksia, sivulla lukee "Ei voimassa olevia tilauksia valittuna kohdepäivänä".

![Voimassa olevien tilausten määrät tuotteittain](/img/versio2/tilausyhteenveto2.png)

## Tilausluettelot

### Tilausluetteloiden tiedot

Kolmessa luettelossa on samat säädöt: päivien määrä ja luettelon enimmäispituus. Päivien määrä on kenttä, jonka perässä lukee **vrk · enint.**, ja sen jälkeen on kenttä enimmäismäärälle. Oletuksena molemmat ovat 14 vrk ja 100 tilausta.

- Päivien määrän voi asettaa välille **1–3650** ja enimmäismäärän välille **1–500**.
- Luettelo päivittyy, kun muutat arvoa.
- Jakso lasketaan viimeisistä N vuorokaudesta, tämä päivä mukaan lukien.
- Jos jaksolle osuu enemmän tilauksia kuin enimmäismäärä, luettelon yläpuolella lukee esimerkiksi *"Aikavälillä 240 tilausta, näytetään 100 uusinta".*
- Jos jaksolla ei ole tilauksia, luettelossa on ilmoitus (esimerkiksi "*Ei uusia tilauksia valitulla aikavälillä"*).
- Rivien järjestystä ei voi vaihtaa. Luettelot eivät sisällä **Export**- tai **Sarakkeet**-toimintoja.

Luettelot ovat eri sarakkeilla:

| Luettelo | Sarakkeet |
|---|---|
| **Uusimmat tilaukset** | Tilausnro, Tilauspvm, Alkupvm, Loppupvm, Asiakas, Tuoteryhmä, Tuote |
| **Päättyneet määräaikaiset** | Tilausnro, Alkupvm, Loppupvm, Asiakas, Tuoteryhmä, Tuote |
| **Katkaistut kestotilaukset** | Tilausnro, Alkupvm, Loppupvm, Katkaisupäivä, Katkaisun syy, Asiakas, Tuoteryhmä, Tuote |

Asiakas-sarakkeessa näkyy asiakkaan numero ja nimi.

### Uusimmat tilaukset

Uusimmat tilaukset -osiossa näet uudet tilaukset tilauspäivän mukaan. Uusin tilaus on ylimpänä.

Voit määrittää:

- **Tilauspäivä … vrk:** näyttää tilaukset, joiden tilauspäivästä on kulunut enintään annettu määrä vuorokausia. Esimerkiksi 14 näyttää viimeisten 14 vuorokauden aikana tehdyt tilaukset.
- **Enint.:** määrittää, kuinka monta tilausta luettelossa näytetään enintään.

Luettelossa ovat vain aidosti uudet tilaukset. Mukaan eivät tule tilaukset, jotka kestojatko tai Stripe-jatko on luonut. Myöhemmin katkaistut tilaukset ovat mukana, poistetut eivät.

![Uusimpien tilausten luettelo ja aikarajaus](/img/versio2/uusimmat-tilaukset.png)

### Päättyneet määräaikaiset

**Päättyneet määräaikaiset** -osiossa näet määräaikaiset tilaukset niiden loppupäivien perusteella.

Voit määrittää:

- **Loppupäiviä:** näyttää tilaukset, joiden loppupäivästä on kulunut enintään annettu määrä vuorokausia. Esimerkiksi **14** näyttää viimeisten 14 vuorokauden aikana päättyneet määräaikaiset tilaukset.
- **Enint.:** määrittää, kuinka monta tilausta luettelossa näytetään enintään.

Osion yläpuolella kerrotaan ehtoja vastaavien tilausten kokonaismäärä ja kuinka monta uusinta tilausta luettelossa näytetään.

Luettelossa ovat määräaikaiset tilaukset, joiden loppupäivä osuu valitulle jaksolle. Mukana ovat kaikki tilat, myös katkaistut, mutta ei poistetut. Viimeksi päättynyt tilaus on ylimpänä.

![Päättyneiden määräaikaisten tilausten luettelo](/img/versio2/paattyneet-maara.png)

### Katkaistut kestotilaukset

**Katkaistut kestotilaukset** -osiossa näet kesto- ja Stripe-tilaukset, joiden katkaisupäivä on osunut valitulle jaksolle. Tilaus on katkaistu, kun sille on annettu katkaisupäivä. Uusin katkaisu on ylimpänä.

Voit määrittää:

- **Katkaisupäivä … vrk:** näyttää tilaukset, joiden katkaisupäivästä on kulunut enintään annettu määrä vuorokausia. Esimerkiksi 14 näyttää viimeisten 14 vuorokauden aikana katkaistut tilaukset. Tulevat katkaisupäivät eivät ole mukana.
- **Enint.:** määrittää, kuinka monta tilausta luettelossa näytetään enintään.

Luettelossa ovat kaikki tilat, myös maksamatta katkaistut, mutta ei poistetut. Katkaisun syy näkyy omassa sarakkeessaan.

![Päättyneiden kestotilausten luettelo](/img/versio2/paattyneet-kesto.png)

## Asiakkaiden vieminen keräilylistalle

Jokaisen tilausluettelon asiakkaat voi lisätä keräilylistalle.

1. Määritä luettelon jakso ja enimmäismäärä.
2. Tarkista luettelossa näkyvät tilaukset.
3. Napsauta luettelon **Vie keräilylistaan** -painiketta.

Painike lisää keräilylistalle luettelossa näkyvien tilausten tilaajat, ei koko jakson tilauksia. Jos jaksolla on enemmän tilauksia kuin luettelossa näytetään, nosta enimmäismäärää ennen vientiä. Sama asiakas lisätään vain kerran.

Painikkeen vieressä näkyy tulos, esimerkiksi *"12 tilaajaa keräilylistalle (3 oli jo siellä)."* Jos luettelossa ei ole asiakkaita, tulos on *"Ei lisättäviä asiakkaita."* Painike ei ole käytössä, kun luettelo on tyhjä. Keräilylistalla asiakkaiden lähteeksi merkitään Tilausyhteenveto.
