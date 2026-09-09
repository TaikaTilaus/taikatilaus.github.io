---
sidebar_position: 7
description: Jakelualueet — Postinumeroalueet ja tuotteiden aluehinnat.
---

# Jakelualueet

**Jakelualueet**-sivulla voit hallita postinumeroalueita ja tuotteiden aluehintoja.

Avaa sivu valitsemalla **Asetukset → Kaikki asetukset → Jakelualueet**.

![Yleisasetukset-sivun yleisnäkymä](/img/versio2/jakelualueet.png)

Jakelualueiden avulla tuotteelle voidaan määrittää tilaajan postinumeroon perustuva hinta. Jos tilaajan postinumero ei kuulu erikseen hinnoiteltuun jakelualueeseen, käytetään tuotteen perushintaa.

> Hinta määräytyy tilaajan pysyvän osoitteen postinumeron perusteella. Maksajan, laskutusosoitteen tai väliaikaisen osoitteen postinumero ei vaikuta hintaan.

## Jakelualueen lisääminen

1. Siirry kohtaan **Asetukset → Jakelualueet**.
2. Anna jakelualueelle **nimi**, esimerkiksi *Etäalue*.
3. Valitse, mitä lehteä alue koskee:
   - **Yleinen (kaikki lehdet)** koskee kaikkia lehtiä.
   - Lehtikohtainen alue koskee vain valittua lehteä.
4. Kirjoita tarvittaessa alueeseen liittyvä **lisätieto**.
5. Paina **Lisää**.

Jos tilaajan postinumero kuuluu sekä yleiseen että lehtikohtaiseen alueeseen, käytetään lehtikohtaista aluetta.

![Yleisasetukset-sivun yleisnäkymä](/img/versio2/jakelualueet2.png)

## Postinumeroalueiden lisääminen

Määritä jakelualueeseen kuuluvat postinumerot antamalla välin ensimmäinen ja viimeinen postinumero.

1. Kirjoita **Postinumero alkaen**- ja **Postinumero asti** -kenttiin viisinumeroiset postinumerot.
2. Paina **Lisää**.
3. Lisää tarvittaessa alueelle useita postinumerovälejä.

Välin alku- ja loppupostinumerot kuuluvat alueeseen. Esimerkiksi väli `00000–59999` sisältää kaikki postinumerot näiden rajojen väliltä.

Voit muokata postinumeroväliä kynäkuvakkeesta ja poistaa sen roskakorikuvakkeesta.

> Vältä päällekkäisiä postinumerovälejä saman lehden alueissa. Järjestelmä näyttää päällekkäisyydestä varoituksen, mutta ei estä tallentamista.

## Jakelualueen muokkaaminen ja poistaminen

Voit muokata jakelualueen tietoja kynäkuvakkeesta tai poistaa alueen roskakorikuvakkeesta.

Jakelualuetta ei voi poistaa, jos sille on määritetty aluehintoja tai sitä on käytetty tilauksissa. Poista tällöin ensin tuotteiden aluehinnat.

## Tuotteiden aluehintojen määrittäminen

Sivun **Tuotteiden aluehinnat** -osiossa voit määrittää tuotteille jakelualuekohtaiset hinnat.

1. Valitse **Lehti**.
2. Etsi taulukosta haluamasi tuote ja jakelualue.
3. Kirjoita soluun tuotteen **veroton kokonaishinta** kyseisellä alueella.
4. Hinta tallentuu automaattisesti, kun poistut solusta.

Järjestelmä näyttää hinnan vieressä myös verollisen hinnan tuotteen ALV-prosentin perusteella.

- Tyhjä solu tarkoittaa, että alueella käytetään tuotteen perushintaa.
- Arvo `0` tarkoittaa todellista nollahintaa.
- Desimaalierottimena voi käyttää pilkkua tai pistettä.
- Valitsemalla **Näytä myös piilotetut tuotteet** saat näkyviin myös tuotteet, jotka eivät ole valittavissa tilauslomakkeella.

Kun uusi tuote lisätään, sille on määritettävä aluehinta erikseen. Muussa tapauksessa tuotetta myydään kaikilla alueilla perushintaan.

Kun hinnasto vaihtuu, muista päivittää sekä tuotteen perushinta että mahdolliset aluehinnat.

## Aluehinnan käyttäminen tilauksella

Kun tilaaja ja tuote valitaan uudelle tilaukselle, järjestelmä tarkistaa tilaajan postinumeron automaattisesti.

- Jos postinumero kuuluu jakelualueeseen ja tuotteelle on määritetty aluehinta, järjestelmä ehdottaa aluehintaa.
- Jos postinumero ei kuulu jakelualueeseen, käytetään perushintaa.
- Jos tuotteelle ei ole määritetty aluehintaa, käytetään perushintaa.
- Jos tilaajan postinumero puuttuu tai on virheellinen, käytetään perushintaa.

Voit tarvittaessa vaihtaa aluehinnan ja perushinnan välillä tilauslomakkeella. Yksikköhintaa voi myös muuttaa käsin.

## Olemassa olevan tilauksen muokkaaminen

Olemassa olevan tilauksen hintaa ei lasketa automaattisesti uudelleen, vaikka tilaaja tai tämän osoite vaihtuisi.

Jos uuden tilaajan postinumero kuuluu eri jakelualueeseen kuin tilaukselle tallennettu alue, järjestelmä kehottaa tarkistamaan hinnan. Hintaa ei muuteta automaattisesti.