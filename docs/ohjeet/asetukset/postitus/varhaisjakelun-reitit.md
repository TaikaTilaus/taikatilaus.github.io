---
sidebar_position: 4
description: "Varhaisjakelun reitit ja niput: milloin reitit syötetään itse ja milloin rekisteri tuodaan Postin muutostiedostosta."
keywords: [varhaisjakelu, varhaisjakelun reitit, reitti, reittitunnus, nippu, nippukoodi, piiri, jattopaikka, jättöpaikka, kuljetus, varhaisjakelurekisteri, kayak, postin muutostiedosto, jakelija, jakelualue]
---

# Varhaisjakelun reitit

## Kumpi malli sivustolla on käytössä?

Varhaisjakelurekisterin muoto vaihtelee lehdittäin, ja se ratkaisee, voiko
reittejä muokata itse.

- **Jos näet Varhaisjakelun reitit -välilehden**, sivustolla on käytössä
  **syötettävä reittiluettelo**. Reitit ylläpidetään TaikaTilauksessa käsin —
  katso [Reittien syöttäminen](#reittien-syöttäminen).
- **Jos välilehteä ei näy**, sivustolla on käytössä **tuotava rekisteri**.
  Näet rekisterin sisällön, mutta et muokkaa sitä — katso
  [Tuotava rekisteri](#tuotava-rekisteri).

## Reittien syöttäminen

![Varhaisjakelu](/img/ohjeet/varhaisjakelun-reitit.png)

Tälle välilehdelle syötetään **varhaisjakelun reitit**.

Reitit **syötetään** muodossa:  
`Kuljetus nro (Reitti);Jättöpaikka;Piiri nro (Nippu);Piirinimi;Kuljetusnimi;Jättöpaikan osoite`

Jos syötät reitin tiedot väärin, ohjelma näyttää virheilmoituksen. 

![Varhaisjakelu](/img/ohjeet/varhaisjakelu-virhe.png)

## Tuotava rekisteri

Osalla lehdistä varhaisjakelurekisteri **tuodaan Postin Kayak-muotoisesta
muutostiedostosta** asiakkaan varhaisjakelualueen mukaan. Tuonnista huolehtii
TaikaTilaus.

Näillä sivustoilla **Varhaisjakelun reitit -välilehteä ei näytetä**, koska
rekisteriä ei ylläpidetä TaikaTilauksessa. Sen tilalla näkyy rekisterin sisältö
taulukkona, jota voi selata mutta ei muokata. Taulukossa on osoitealueittain
muun muassa postinumeroväli, kadunnimi, talonumeroväli ja parillisuus sekä
jakelutapa ja **nipputiedot** (Bundle Number, Stack Number, Box Number).

Yksittäisen tilauksen nipun näet tilaukselta **Varhaisjakelun nippu** -kentästä
— katso [Tilaus](/docs/ohjeet/tilaustenhallinta/tilaukset#varhaisjakelun-nippu).
Kenttä on vain luettava: arvo määräytyy tilaajan osoitteen perusteella.

### Kun nippukoodi on väärin

**Jos asiakaskortilla oleva nippukoodi on väärin, ota yhteys TaikaTilaukseen.**
Nippukoodia ei korjata asiakaskortilta eikä tilaukselta, vaan korjaus tehdään
rekisteriin.

Tarkista kuitenkin ensin, että **tilaajan osoite on oikein** — jakelu
määräytyy tallennetun vakio-osoitteen mukaan, joten väärä tai vanhentunut
osoite näkyy usein väärältä näyttävänä nippuna tai arvona PÄIVÄJAKELU.
