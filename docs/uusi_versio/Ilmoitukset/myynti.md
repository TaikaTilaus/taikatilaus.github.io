---
sidebar_position: 4
title: Myynti
description: Uusi TaikaTilaus – Ilmoitusmyynnin sivu — myynnin tiedot, myyjän vaihto, laskun tuoterivin teksti, myynnin varaukset ja asiakkaan vaihto.
kayttoliittyma: uusi
---

# Myynti

:::note Uusi TaikaTilaus

Tämä ohje koskee uutta TaikaTilausta (kehitysversio). Nykyisen TaikaTilauksen vastaava ohje: [Ilmoitusasiakas ja -myynti](../../ohjeet/ilmoitustenhallinta/ilmoitusasiakas.md).

:::

Myynti on ilmoitusvarausten ryhmä, jonka varaukset kuuluvat samalle asiakkaalle. Uusi varaus luo myynnin, jos sitä ei vielä ole. Avaa myyntisivu napsauttamalla myyntinumeroa [varauslomakkeella](./ilmoitusvaraus.md) tai painamalla lomakkeen **Näytä myynti** -painiketta.

Sivulla näet:

- **myynnin tiedot**, kuten asiakas ja pakettihinta, jos myynnille on annettu sellainen
- **Myyjän**, jota voit muuttaa. Myyjän vaihto vaihtaa myyjän kaikille myynnin varauksille.
- **Lisätiedot** ja **laskun tuoterivin tekstin**
- **myynnin varaukset** listana. Avaa varaus napsauttamalla riviä.

## Varausvahvistuksen lähettäminen koko myynnille

Kun myynnillä on useita ilmoitusvarauksia, voit lähettää asiakkaalle yhden varausvahvistuksen kaikista varauksista. Sinun ei siis tarvitse lähettää viestiä erikseen jokaisesta varauksesta.

**Lähetä varausvahvistus** -painike on myyntisivun painikkeiden joukossa. Se näkyy vain, jos TaikaTilauksen ylläpitoo on asettanut varausvahvistuksen käyttöön, ja se on käytössä vain, kun myynnillä on vähintään yksi varaus. Viesti tehdään tallennetuista varauksista, joten tallenna muutokset ennen lähetystä.

1. Avaa myynti ja napsauta **Lähetä varausvahvistus**.
2. Tarkista ikkunassa lähettäjä, vastaanottaja, piilokopio, otsikko ja viestin teksti. Vastaanottaja on varausten yhteinen vahvistuksen saaja. Jos sellaista ei ole, vastaanottaja on myynnin asiakas.
3. Muokkaa tarvittaessa **Varauksen tiedot** -kenttää. Sen teksti toistuu viestissä kerran jokaiselle varaukselle.
4. Napsauta **Esikatsele** ja tarkista viesti.
5. Napsauta **Lähetä varausvahvistus**.

### Viestin tagit

Viestissä voi käyttää seuraavia tageja. Sovellus korvaa ne oikeilla tiedoilla:

| Tagi | Mihin se muuttuu |
|---|---|
| `[MYYNTINUMERO]` | Myynnin numero. |
| `[ETUNIMI]` | Vastaanottajan etunimi. |
| `[ASIAKKAAN_TIEDOT]` | Asiakkaan tiedot. |
| `[VARAUKSET]` | Varauksen tiedot -kenttä kerran jokaiselle varaukselle. |
| `[VARAUSTEN_MAARA]` | Varausten määrä. |
| `[HINTA_YHTEENSA]` | Varausten hinta yhteensä. |
| `[VEROLLINEN_HINTA_YHTEENSA]` | Varausten verollinen hinta yhteensä. |
| `[LEHTI]` | Lehti. |

**Varauksen tiedot** -kentässä voit käyttää samoja tageja kuin yhden varauksen varausvahvistuksessa, lukuun ottamatta tageja `[ETUNIMI]` ja `[LEHTI]`. Jos varaus on jaksovaraus (netti, radio tai ilmoitustaulu), julkaisu-, osasto- ja toistorivit jäävät viestistä pois, kuten yhden varauksen viestissäkin.

:::note

- Viestin pohja on valmiina sovelluksessa. 
- Ikkunassa tekemäsi tekstimuutokset koskevat vain tätä viestiä. Ne eivät tallennu pohjaksi.
- Lähettäjä ja piilokopio tulevat samoista käyttäjäkohtaisista valinnoista kuin yhden varauksen vahvistuksessa.
- Lähetys kirjataan jokaisen varauksen muutoslokiin: näkyy vastaanottaja ja myyntinumero.

:::

## Asiakkaan vaihtaminen myynnille

**Vaihda asiakas** siirtää koko myynnin kaikkine varauksineen toiselle asiakkaalle.

- Eri maksajat säilyvät. Aineiston toimittaja, varausvahvistuksen saaja ja hyväksyjä tyhjennetään, koska ne ovat vanhan asiakkaan henkilöitä.
- Asiakasta ei voi vaihtaa, jos myynnin ilmoitus on jaettu usealle maksajalle tai se on jo laskutettu, tai jos uudella asiakkaalla on myyntikielto.

:::note
Myyntipakettien luonti (**Lisää paketti**), laskutuspyyntöjen käsittely myyntisivulla ja myynnin poisto ovat vielä rakenteilla.
:::
