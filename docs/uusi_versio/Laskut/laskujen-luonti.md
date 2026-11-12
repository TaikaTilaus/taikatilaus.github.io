---
sidebar_position: 2
title: Laskujen luonti
description: Laskujen luonti uuden version Laskut-valikossa.
---

# Laskujen luonti

**Laskujen luonti** -sivulla haet laskutettavat laskutuspyynnöt, esikatselet niistä muodostuvat laskut ja luot laskut. Avaa sivu yläreunan päävalikosta valitsemalla **Laskut → Laskujen luonti**.

Laskut syntyvät laskutuspyynnöistä. Laskutuspyyntö syntyy, kun tilaus tai ilmoitus tallennetaan tai kun tilausta jatketaan. Pyynnössä on laskun summa ja ajankohta, jolloin lasku saa syntyä.

:::warning HUOMIO: 

Esikatselu ei tallenna mitään. Luo laskut -painike on käytössä vain, jos laskujen luonti on otettu käyttöön uudessa versiossa. Jos painiketta ei näy, luo laskut vanhassa versiossa. Kun luonti on otettu käyttöön uudessa versiossa, laskuja ei saa luoda vanhassa versiossa eikä automaattisessa laskutusajossa, koska laskunumerot voisivat mennä päällekkäin.

:::

## Laskutuspyyntöjen hakeminen

1. Valitse rajaukset sivun yläosassa.
2. Napsauta **Hae laskutuspyynnöt**.
3. Hakutulokset näytetään alla olevassa luettelossa.

Napsauta **Tyhjennä**, kun haluat palauttaa kaikki rajaukset oletusarvoihin.

| Rajaus | Kuvaus |
|---|---|
| **Ajopäivä** | Päivä, jonka mukaan laskutettavat pyynnöt valitaan. Oletuksena tämä päivä. Haussa mukana ovat pyynnöt, joiden Saa luoda -päivä on ajopäivä tai sitä aiemmin. |
| **Lehti** | Rajaa pyynnöt yhteen lehteen eli tuoteryhmään. Valinta Kaikki ei rajaa. |
| **Tuote** | Rajaa pyynnöt yhteen tuotteeseen. Valitse ensin lehti. |
| **Maksajan asiakasnumero** | Rajaa pyynnöt maksajan asiakasnumeron mukaan. Voit antaa yksittäisen numeron tai välin, esimerkiksi 1000-1100. |
| **Sisäiset lisätiedot sisältää** | Hakee pyynnöt, joiden sisäisissä lisätiedoissa esiintyy kirjoittamasi teksti. |
| **Summa (verollinen)** | Hakee pyynnöt, joiden verollinen summa on annettu summa. |

Voit lisäksi valita seuraavat valinnat:

| Valinta | Merkitys |
|---|---|
| **Vain ajopäivän laskutuspyynnöt** | Hakee vain pyynnöt, joiden Saa luoda -päivä on täsmälleen ajopäivä. |
| **Kaikki laskut yksittäisinä (ei koontilaskuja)** | Luo jokaisesta pyynnöstä oman laskun, vaikka maksajalla olisi koontilasku. |
| **Näytä sisäiset lisätiedot** | Näyttää sisäiset lisätiedot luettelossa. |
| **Näytä vain virheelliset** | Näyttää vain pyynnöt, joita ei voi laskuttaa. |

Voit käyttää useita rajauksia samanaikaisesti. Silloin tuloksissa ovat pyynnöt, jotka täyttävät kaikki ehdot. Rajaukset säilyvät, kun siirryt sivulta toiselle ja palaat takaisin.

## Hakutulokset

Luettelon yläreunassa näkyy yhteenveto: laskutuspyyntöjen määrä, laskutettavien ja virheellisten määrä, summa ilman arvonlisäveroa ja verollinen summa sekä arvio muodostuvien laskujen määrästä. Koontilaskut lasketaan maksajittain.

Jos haussa on huomioita, esimerkiksi katkaistuista tilauksista tai aluehinnasta, ne näkyvät keltaisessa **Huomiot**-ruudussa luettelon yläpuolella.

| Sarake | Sisältö |
|---|---|
| **ID** | Laskutuspyynnön tunniste. |
| **Lisätty** | Milloin pyyntö on luotu. |
| **Saa luoda** | Päivä, jolloin laskun saa aikaisintaan luoda. |
| **Tilausnro** | Tilauksen numero. Napsauta numeroa, niin tilaus avautuu uuteen välilehteen. |
| **Toimitustapa** | Laskun toimitustapa. Suoramaksuasiakkaalla näkyy lisäksi suoramaksu. |
| **Maksaja ja toimitustiedot** | Maksajan asiakasnumero ja nimi sekä tiedot, joihin lasku toimitetaan. |
| **ALV 0 % ja Verollinen** | Pyynnön summa ilman arvonlisäveroa ja verollisena. |
| **Tuote ja Tuoterivin lisätiedot** | Pyynnön tuote ja tuoterivin teksti, esimerkiksi Laskuosa 1/4. |
| **Koonti** | Kyllä, jos pyyntö kuuluu koontilaskuun. |
| **Portaali** | Portaalin numero. Käytössä vain niillä, joilla on useita yrityksiä. |

Valitse näytettävät sarakkeet Sarakkeet-painikkeella. Voit lajitella luettelon napsauttamalla sarakeotsikkoa, selata sivuja ja viedä tiedot Excel-tiedostoon Excel-painikkeella tai Export-valikosta.

### Virheelliset laskutuspyynnöt

Pyynnöt, joita ei voi laskuttaa, näkyvät punaisella ilman valintaruutua. Virheen syy näkyy punaisella **Maksaja ja toimitustiedot** -sarakkeessa. 

Tyypillinen syy on puutteellinen toimitustieto: puuttuva tai virheellinen sähköpostiosoite, verkkolaskuosoite tai postiosoite. Laskun voi estää myös laskutusmääritysten minimisumma rajaus (esim. alle 5 euron laskuja ei lähetetä).

Korjaa tieto maksajan **asiakaskortilla** (Laskutustiedot-välilehti) ja hae pyynnöt uudelleen.

## Laskujen luontimääritykset

Kun haku on tehty, luettelon yläpuolella on **Laskujen luontimääritykset** -osio. Niitä muuttamalla saat kaikille valituille laskuille esim. saman eräpäivän.

| Kenttä | Ohje |
|---|---|
| **Laskun päivä** | Päivämäärä, joka tulee laskuille. Oletuksena tämä päivä. |
| **Eräpäivä** | Laskun eräpäivä. Oletuksena 14 päivää laskun päivästä. Eräpäivä on vähintään asiakkaan maksuehdon mukainen. |
| **Luontitunnus** | Tunnus, jolla tämän ajon laskut löytyvät myöhemmin, esimerkiksi laskujen lähetyksessä. Oletuksena tunnus muodostuu päivämäärästä ja kellonajasta. |

Laskun päivän ja eräpäivän on oltava 12 kuukauden sisällä tästä päivästä, eikä eräpäivä saa olla ennen laskun päivää. Muuten järjestelmä ilmoittaa: *Tarkista laskun päivä ja eräpäivä.*

## Laskujen valitseminen

- Valitse yksittäisiä pyyntöjä rivin alussa olevalla **valintaruudulla**.
- Napsauta **Valitse kaikki laskutettava**t, niin kaikki laskutettavat pyynnöt valitaan, ei vain nykyisellä sivulla näkyviä. Virheelliset pyynnöt jäävät pois.
- Napsauta **Poista valinnat**, kun haluat tyhjentää valinnat.

Valittujen pyyntöjen määrä näkyy painikkeissa, esimerkiksi **Esikatsele laskut (12 valittua).**

## Laskujen esikatselu

Napsauta **Esikatsele laskut**. Järjestelmä muodostaa valituista pyynnöistä laskut ilman, että mitään tallennetaan.

Esikatselun yhteenveto kertoo laskujen määrän, koontilaskujen määrän ja yhteissumman. Se kertoo myös, kuinka monta laskua on 0 € tai alle (niitä ei lähetetä).

Taulukossa on jokaisesta laskusta:

| Sarake | Sisältö |
|---|---|
| **Lasku (arvio)** | Laskunumero. Esikatselun numerot ovat arvio: ne alkavat nykyisestä suurimmasta numerosta + 1. Koontilaskun perässä lukee (koonti). |
| **Maksaja** | Maksajan asiakasnumero ja nimi. |
| **Toimitustapa** | Laskun toimitustapa. |
| **Päivä / eräpäivä** | Laskun päivä ja eräpäivä sekä maksuehto. |
| **Viitenumero** | Laskun viitenumero. Maksajalle, jolla ei ole asiakasnumeroa, viitenumero muodostuu vasta luonnissa. |
| **ALV 0 % ja Yhteensä** | Laskun summa ilman arvonlisäveroa ja verollisena. |

Avaa laskun tarkemmat tiedot napsauttamalla riviä: laskun viesti, tuoterivit, alennukset, arvonlisäverot ja tiliöinnit. Tuoteriveillä voi näkyä laskutuslisä ja ennakkosaldon käyttö.

Keltaisella korostetut rivit ovat laskuja, jotka ovat 0 € tai alle. Niitä ei lähetetä.

**Laskun viesti.** Jos tilaajan asiakaskortilla on Jakelupoikkeukset-välilehden Keskeytysviesti seuraavalle laskulle, esikatselussa näkyy viesti laskulla. Esikatselu ei tyhjennä viestiä.

## Laskujen luominen

Kun laskujen luonti on otettu käyttöön, luettelon yläpuolella on punainen **Luo laskut** -painike.

1. Hae laskutuspyynnöt, valitse laskutettavat pyynnöt. Voit muuttaa **Laskun päivä**, **Eräpäivä** ja **Luontitunnus** oletuksista, jos sille on tarvetta.
2. Esikatsele laskut ja tarkista ne.
3. Napsauta **Luo laskut (N valittua)**.
4. Vahvista luonti. Vahvistusikkuna näyttää laskun päivän, eräpäivän ja luontitunnuksen ja varoittaa, että laskuja ei voi perua tältä sivulta.
5. Lähetä laskut **Laskujen lähetys** -sivulta.

Järjestelmä luo valituista pyynnöistä laskut, tiliöinnit ja tilausten laskulinkit. Maksajalle, jolla ei ole asiakasnumeroa, annetaan asiakasnumero. Kun ajo on valmis, sivun yläreunassa näkyy yhteenveto: luotujen laskujen määrä, koontilaskujen määrä, yhteissumma ja luontitunnus. Luotujen laskujen numerot ovat linkkejä, jotka avaavat laskun uuteen välilehteen. Luotuja laskuja ei voi perua tältä sivulta.

Luotuja laskuja voi tarkastella **Laskujen haku** -sivulta. 

Vain yksi laskujen luonti voi olla käynnissä kerrallaan. Jos toinen käyttäjä luo laskuja, järjestelmä ilmoittaa, että luonti on jo käynnissä. Jos laskunumero on jo käytössä, luonti pysähtyy. Jos pyyntö on ehditty laskuttaa muualla, sen lasku perutaan ja luonti jatkuu muilla.

### Laskujen luonnin säännöt

- **Maksaja:** lasku tehdään tilauksen maksajalle, ja jos erillistä maksajaa ei ole, tilaajalle. Toimitustapa ja koontilasku tulevat maksajalta.
- **Koontilasku:** jos maksajalla on koontilasku, hänen pyynnöistään muodostuu yksi lasku. Muuten jokaisesta pyynnöstä tulee oma lasku.
- **Laskunumero:** suurin käytössä oleva numero + 1 tai asiakkaalle määritetty numerosarja.
- **Viitenumero:** muodostuu asiakasnumerosta ja laskunumerosta.
- **Eräpäivä:** lähtökohta on antamasi eräpäivä. Maksajan maksuehto voi pidentää sitä, mutta eräpäivä ei ole koskaan ennen tätä päivää.
- **Laskutuslisä:** lisätään laskulle laskutusmääritysten mukaan. Ei lisätä, jos maksajalle on estetty laskutuslisä tai lasku on jo maksettu.
- **Ennakkosaldo:** jos maksajalla on ennakkomaksutilillä saldoa ja ominaisuus on käytössä, saldo käytetään laskun tuoteriveihin. Laskulle tulee rivi Saldon käyttö.
- **Pienet laskut:** 0 €:n lasku ja/tai asiakkaan kanssa sovitun minimisumman alittavat laskut merkitään maksetuksi eikä sitä lähetetä.