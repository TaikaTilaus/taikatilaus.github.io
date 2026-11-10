---
sidebar_position: 7
title: Lasku
description: Laskujen haku — Lasku, laskun tiedot, laskun muokkaaminen.
---

## Lasku

Laskun voi avata kahdella tavalla. Kun napsautat laskuriviä [**Laskujen haku**](/docs/uusi_versio/Laskut/laskujen-haku) -sivulla, lasku avautuu esikatseluna luettelon oikealle puolelle. Kun napsautat rivin tai esikatselun **Avaa uuteen välilehteen** -painiketta, lasku avautuu omalle välilehdelleen. Sivulla näkyvät laskun perustiedot, tuoterivit, tiliöinnit ja muutosloki.

:::warning Huomio

Älä muokkaa lähetettyjä tai maksettuja laskuja. Jos lähetettyä laskua täytyy muuttaa, hyvitä alkuperäinen lasku ja luo uusi lasku.

Järjestelmä estää tuoterivien ja luontivaiheen tiliöintien (L) poistamisen lähetetyltä, erääntyneeltä, maksetulta ja hyvitetyltä laskulta. Poistopainike on silloin harmaa, ja vihje kertoo syyn.

:::

![Laskun perustiedot, tuoterivit ja tiliöinnit](/img/versio2/lasku.png)

## Laskun perustiedot

Sivun yläosassa näkyvät laskun numero ja tila, esimerkiksi **Maksettu**. Oikeassa yläkulmassa näkyy laskun yksilöllinen **LaskuID**.

Laskun perustiedoissa näkyvät:

- maksaja
- laskunumero
- laskun päivä
- eräpäivä
- laskun summa
- maksamatta oleva summa
- maksupäivä
- viitenumero
- toimitustapa
- laskun tyyppi
- tarkenne
- laskun tila tekstinä

Sivun yläosassa näkyvät laskun numero ja tila värillisenä merkkinä. Maksajan nimen vieressä on maksajan asiakasnumero ja laatikkokuvake, josta maksajan [asiakaskortti](/docs/uusi_versio/Asiakkaat/asiakaskortti) avautuu uuteen välilehteen. Jos lasku on tehty tilauksesta, maksajan alla näkyy tilauksen numero linkkinä (Tilaus tai Tilaukset).

![Laskun maksaja-, päivä-, summa- ja toimitustiedot](/img/versio2/lasku2.png)

## Tuoterivit

**Tuoterivit**-osion otsikon vieressä näkyvät rivien määrä ja yhteissumma muodossa veroton + alv = verollinen. Taulukossa on sarakkeet Tuoteryhmä, Tuotenro, Tuotenimi, Määrä, Yks.hinta, Ale %, ALV %, Veroton, ALV ja Summa. Tilaus-sarakkeessa näkyy tilauksen numero linkkinä, joka avaa tilauksen uuteen välilehteen. Seliterivin kohdalla näkyy Selite-merkki.

Taulukon alla näkyy ALV-erittely verokannoittain ja rivi Yhteensä.

Avaa tuoterivi muokattavaksi napsauttamalla rivin vasemmassa reunassa olevaa **kynäkuvaketta**.

Voit lisätä laskulle uuden tuoterivin napsauttamalla **Lisää**. Poista tuoterivi napsauttamalla rivin oikeassa reunassa olevaa **roskakorikuvaketta**.

![Laskun tuoterivit ja niiden muokkaustoiminnot](/img/versio2/lasku3.png)

### Tuoterivin muokkaaminen

Avaa tuoterivi muokattavaksi napsauttamalla rivin vasemmassa reunassa olevaa **kynäkuvaketta**. Muokkausnäkymä avautuu tuoteriviluettelon yläpuolelle.

Tuoterivillä voit muokata seuraavia tietoja:

- **Tuotenimi**
- **Määrä**
- **Yksikkö**
- **Yks.hinta (veroton)**
- **Ale %**
- **ALV %**
- **Lisätiedot**
- **Seliterivi** (pelkkä tekstirivi)

Tuoterivin yhteenvedossa näkyvät veroton hinta, arvonlisäveron määrä ja verollinen loppusumma.

Muokkausnäkymän otsikko on Tuoterivin lisääminen tai Tuoterivin käsittely, TuoteriviID. Veroton hinta, arvonlisäveron määrä ja verollinen summa päivittyvät kenttien muuttuessa.

Verollisen summan vieressä on kynäkuvake. Sillä voit syöttää verollisen summan, jolloin järjestelmä laskee yksikköhinnan (veroton) uudelleen annetusta summasta ALV ja alennus huomioiden. Hyväksy summa vihreällä ruksilla.

Valitsemalla **Seliterivi (pelkkä tekstirivi)** voit määrittää tuoterivin pelkäksi tekstiriviksi.

Tallenna muutokset napsauttamalla **Tallenna**. Voit poistua muokkausnäkymästä tallentamatta muutoksia napsauttamalla **Peruuta**.

Poistopainike on harmaa, kun rivejä ei voi poistaa. Vie hiiri painikkeen päälle, niin näet syyn.

![Tuoterivin määrä-, hinta-, vero- ja lisätietojen muokkaaminen](/img/versio2/lasku5.png)

## Tiliöinnit

**Tiliöinnit**-osiossa näkyvät laskun myyntiin ja suorituksiin liittyvät tiliöinnit. Otsikon vieressä oleva numero kertoo tiliöintien määrän.

Taulukossa on sarakkeet TiliointiID, Tuoterivi, Kirjauspvä, Tili, Summa, Tapa (L, S, K tai T), Suoritus ja Selite. Tapa-sarakkeen merkit tarkoittavat: L = laskun luontivaiheessa tehty tiliöinti, S = suoritus, K = kuittaus ja T = kulu. Vie hiiri merkin päälle, niin näet selitteen.

Otsikon vieressä oleva merkintä kertoo, täsmäävätkö tiliöinnit:

- **Täsmää:** myyntien ja suoritusten tiliöinnit täsmäävät.
- **Myyntien erotus** ja **Suoritusten erotus:** luontivaiheen (L) tai maksuvaiheen (S, K ja T) tiliöintien summan pitäisi olla 0 €. Punainen merkintä näyttää erotuksen.

Tiliöinnin voi poistaa rivin lopussa olevalla roskakorilla. Lähetetyn, maksetun tai hyvitetyn laskun luontivaiheen (L) tiliöintiä ei voi poistaa. Poistopainike on silloin harmaa, ja vihje kertoo syyn.

![Laskun myyntiin ja suorituksiin liittyvät tiliöinnit](/img/versio2/lasku4.png)

### Tiliöinnin lisääminen laskulle

Lisää laskulle uusi luontivaiheen tiliöinti (L) napsauttamalla **Lisää tiliöinti laskulle**. Syötä avautuvaan näkymään seuraavat tiedot:

- **Tili:** valitse tili, jolle summa kirjataan.
- **Summa:** syötä tiliöinnin summa.
- **Kirjauspäivä:** valitse tiliöinnin kirjauspäivä.
- **TuoteriviID:** syötä sen tuoterivin tunniste, johon tiliöinti liittyy. Jos tiliöintiä ei kohdisteta tietylle tuoteriville, jätä arvoksi 0.

Tallenna tiliöinti napsauttamalla **Tallenna**. Voit sulkea näkymän lisäämättä tiliöintiä napsauttamalla **Peruuta**.

![Uuden laskun tiliöinnin tiedot](/img/versio2/lasku6.png)

### Tiliöinnin lisääminen laskuun liitetylle suoritukselle

Lisää tiliöinti laskuun liitetylle suoritukselle napsauttamalla **Lisää tiliöinti suoritukselle**. Täytä avautuvaan näkymään seuraavat tiedot:

- **Suoritus:** valitse suoritus, johon tiliöinti lisätään.
- **Tiliöintitapa:** valitse tiliöinnin tyyppi:
  - **S = Suoritus:** esimerkiksi pankkitilille tullut maksu.
  - **K = Kuittaus:** vähentää laskun maksamatta olevaa summaa.
  - **T = Kulu:** esimerkiksi maksamatta jäänyt summa tai pankki- tai maksupalvelukulu, kuten Paytrailin osuus.
- **Tili:** valitse tili, jolle summa kirjataan.
- **Summa:** syötä tiliöinnin summa.
- **Kirjauspäivä:** valitse tiliöinnin kirjauspäivä.
- **TuoteriviID:** syötä sen tuoterivin tunniste, johon tiliöinti liittyy. Jos tiliöintiä ei kohdisteta tietylle tuoteriville, jätä arvoksi 0.

Tallenna tiliöinti napsauttamalla **Tallenna**. Voit sulkea näkymän lisäämättä tiliöintiä napsauttamalla **Peruuta**.

![Laskuun liitetyn suorituksen uuden tiliöinnin tiedot](/img/versio2/lasku7.png)

### Muutosloki

Sivun alareunassa oleva Muutosloki-osio näyttää laskuun tehdyt muutokset: ajankohdan, muutetun kentän, vanhan ja uuden arvon, käyttäjän ja sen, mistä muutos tehtiin. Uusin muutos on ylimpänä. Otsikon vieressä oleva numero kertoo rivien määrän. Muutoslokiin kirjautuvat muun muassa laskun luonti, lähetys, kohdistus ja käsin tehdyt muutokset, tuoterivien lisäys, muutos ja poisto sekä maksumuistutukset ja perintä.