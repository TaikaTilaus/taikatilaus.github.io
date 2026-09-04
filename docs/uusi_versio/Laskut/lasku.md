---
sidebar_position: 2
title: Laskut
description: Laskujen haku — Lasku, laskun tiedot, laskun muokkaaminen.
---

## Lasku

Lasku avautuu omalle välilehdelleen. Sivulla näkyvät laskun perustiedot, tuoterivit ja tiliöinnit.

:::warning Huomio

Älä muokkaa lähetettyjä tai maksettuja laskuja. Jos lähetettyä laskua täytyy muuttaa, hyvitä alkuperäinen lasku ja luo uusi lasku.

Laskujen luominen ja hyvittäminen eivät ole vielä käytettävissä uudessa versiossa, joten tee ne vanhassa versiossa.

:::

![Laskun yleisnäkymä](/img/versio2/lasku.png)

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

Tallenna perustietoihin tekemäsi muutokset napsauttamalla **Tallenna**. Voit sulkea laskunäkymän napsauttamalla **Sulje välilehti**.

![Laskun perustiedot](/img/versio2/lasku2.png)

## Tuoterivit

**Tuoterivit**-osiossa näkyvät laskulle lisätyt tuotteet sekä niiden määrä-, hinta- ja verotiedot. Tilaustuotteen yhteydessä näkyvät myös tilausnumero, tilausjakso, lehden saaja ja toimitusosoite.

Avaa tuoterivi muokattavaksi napsauttamalla rivin vasemmassa reunassa olevaa **kynäkuvaketta**.

Voit lisätä laskulle uuden tuoterivin napsauttamalla **Lisää**. Poista tuoterivi napsauttamalla rivin oikeassa reunassa olevaa **roskakorikuvaketta**.

![Laskun perustiedot](/img/versio2/lasku3.png)

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

Tuoterivin yhteenvedossa näkyvät veroton hinta, arvonlisäveron määrä ja verollinen loppusumma.

Valitsemalla **Seliterivi (pelkkä tekstirivi)** voit määrittää tuoterivin pelkäksi tekstiriviksi.

Tallenna muutokset napsauttamalla **Tallenna**. Voit poistua muokkausnäkymästä tallentamatta muutoksia napsauttamalla **Peruuta**.

![Laskun perustiedot](/img/versio2/lasku5.png)

## Tiliöinnit

**Tiliöinnit**-osiossa näkyvät laskun myyntiin ja suorituksiin liittyvät tiliöinnit. **Täsmää**-merkintä kertoo, että tiliöinnit täsmäävät.

Voit avata tiliöinnin muokattavaksi napsauttamalla rivin vasemmassa reunassa olevaa **kynäkuvaketta**.

Tarvittaessa voit lisätä uusia tiliöintejä seuraavilla painikkeilla:

- **Lisää tiliöinti laskulle**: lisää uusi luontivaiheen tiliöinti (L)
- **Lisää tiliöinti suoritukselle**: lisää laskulle liittyvälle suoritukselle uusi tiliöinti (Suoritus/Kuittaus/Kulu)

![Laskun perustiedot](/img/versio2/lasku4.png)

### Tiliöinnin lisääminen laskulle

Lisää laskulle uusi luontivaiheen tiliöinti (L) napsauttamalla **Lisää tiliöinti laskulle**. Syötä avautuvaan näkymään seuraavat tiedot:

- **Tili:** valitse tili, jolle summa kirjataan.
- **Summa:** syötä tiliöinnin summa.
- **Kirjauspäivä:** valitse tiliöinnin kirjauspäivä.
- **TuoteriviID:** syötä sen tuoterivin tunniste, johon tiliöinti liittyy. Jos tiliöintiä ei kohdisteta tietylle tuoteriville, jätä arvoksi 0.

Tallenna tiliöinti napsauttamalla **Tallenna**. Voit sulkea näkymän lisäämättä tiliöintiä napsauttamalla **Peruuta**.

![Laskun perustiedot](/img/versio2/lasku6.png)

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

![Laskun perustiedot](/img/versio2/lasku7.png)