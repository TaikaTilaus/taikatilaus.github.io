---
sidebar_position: 8
description: Uudistuksia TaikaTilaus-tuotteeseen 1.3.-31.3.2025 välisenä aikana
image: /img/social.png
keywords: [versiotiedote, testisivusto, hiekkalaatikko, maksunaihe, e-Lasku]
---

# Maaliskuu 2025

Uudistuksia TaikaTilaus-tuotteeseen 1.3.-31.3.2025 välisenä aikana.

## Sisällysluettelo

  - [Sisällysluettelo](#sisällysluettelo)
  - [Suora kirjautuminen testisivustolle](#suora-kirjautuminen-testisivustolle)
    - [Mitä uutta?](#mitä-uutta)
    - [Miten toimii?](#miten-toimii)
    - [Huomioitavaa](#huomioitavaa)
  - [E-laskun maksunaihe](#e-laskun-maksunaihe)
    - [Mitä uutta?](#mitä-uutta-1)
    - [Miten toimii?](#miten-toimii-1)
    - [Huomioitavaa](#huomioitavaa-1)

---

## Suora kirjautuminen testisivustolle

### Mitä uutta?
TaikaTilauksen käyttäjät voivat nyt kirjautua TaikaNakka-testisivustolle suoraan **Omat tiedot**-valikosta.

![Omat tiedot](/img/ohjeet/kayttajantiedot.png)

### Miten toimii?
Testiympäristössä (hiekkalaatikossa) voi turvallisesti kokeilla sellaisia TaikaTilauksen toimintoja, joilla voi olla vaikutuksia esimerkiksi laskutukseen tai kirjanpitoon.

### Huomioitavaa
- Testiympäristö palautetaan alkuperäiseen tilaansa päivittäin
- Kaikki muutokset ovat testattavissa ilman riskiä tuotantoympäristöön

**[Lue lisää testisivustosta](https://support.taikatilaus.fi/docs/etusivu#testaa-uusia-toimintoja-demoj%C3%A4rjestelm%C3%A4ss%C3%A4)**

---

## E-laskun maksunaihe

### Mitä uutta?
Laskulomakkeelle on lisätty uusi kenttä "E-laskun maksunaihe". Kenttä on vain luettavissa eikä sitä voi muokata.

![E-laskun maksunaihe](/img/versiotiedotteet/maksunaihe.png)

### Miten toimii?
Maksunaihe tarkoittaa kuluttajaverkkolaskun laskutusaiheen koodia (Finvoice: EpiPaymentInstructionId). Kyseinen koodi määritellään laskuttajailmoituksessa (SI-sanoman kentässä PaymentInstructionIdentifier).

### Huomioitavaa
- Lähetetyllä laskulla olevan koodin tulee vastata laskuttajailmoituksen koodia
- Tämä varmistaa e-laskun oikean välityksen verkkopankkiin
- Kenttä helpottaa kuluttajien verkkolaskujen vianselvitystä

---

> 💡 Kysy tarkemmin yksittäisten toiminnallisuuksien käyttöönotosta [tuestamme](https://taikatilaus.freshdesk.com/).
