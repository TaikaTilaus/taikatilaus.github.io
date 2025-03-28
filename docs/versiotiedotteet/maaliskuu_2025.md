---
sidebar_position: 1
description: Uudistuksia TaikaTilaus-tuotteeseen 1.3.-31.3.2025 välisenä aikana
image: /img/social.png
keywords: [versiotiedote, import, export, tuplienkäsittely, haut, saldo]
---

# Maaliskuu 2025

Uudistuksia TaikaTilaus-tuotteeseen 1.3.-31.3.2025 välisenä aikana.

Kysy tarkemmin yksittäisten toiminnallisuuksien käyttöönotosta [tuestamme](https://taikatilaus.freshdesk.com/).

##  Suora kirjautuminen testisivustolle omalta sivustolta

TaikaTilauksen käyttäjät voivat nyt kirjautua TaikaNakka-testisivustolle suoraan Omat tiedot -valikosta.

Testiympäristössä (hiekkalaatikossa) voi turvallisesti kokeilla sellaisia TaikaTilauksen toimintoja, joilla voi olla vaikutuksia esimerkiksi laskutukseen tai kirjanpitoon.

Testiympäristö palautetaan alkuperäiseen tilaansa päivittäin.


## E-laskun maksunaihe

Laskulomakkeelle on lisätty uusi kenttä ”E-laskun maksunaihe”. Kenttä on vain luettavissa eikä sitä voi muokata. Tämän kentän tarkoituksena on helpottaa kuluttajien verkkolaskujen vianselvitystä.

Maksunaihe tarkoittaa kuluttajaverkkolaskun laskutusaiheen koodia (Finvoice: EpiPaymentInstructionId). Kyseinen koodi määritellään laskuttajailmoituksessa (SI-sanoman kentässä PaymentInstructionIdentifier). Lähetetyllä laskulla olevan koodin tulee vastata laskuttajailmoituksen koodia, jotta e-lasku välittyy oikein verkkopankkiin.


