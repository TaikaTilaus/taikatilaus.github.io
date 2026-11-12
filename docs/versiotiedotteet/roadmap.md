---
unlisted: true
sidebar_position: 999
sidebar_label: Roadmap
description: TaikaTilauksen tuotekehityksen roadmap. Tehdyt, työn alla olevat ja myöhemmin toteutettavat uudistukset tilausten hallintaan ja ilmoitusten hallintaan.
image: /img/social.png
keywords: [roadmap, tiekartta, tuotekehitys, tilausten hallinta, ilmoitusten hallinta, IlmoitusStudio, uusi käyttöliittymä, tilauslomake, verkkomaksut, asiakaskortti, laskutus, alennussäännöt, avoimuusilmoitus, Microsoft 365, InDesign]
---

# Roadmap

TaikaTilauksen tuotekehityksen suunta lyhyesti: mitä on tehty viimeksi, mitä on työn alla ja mitä on suunnitteilla myöhemmin. Roadmap on jaettu kahteen osaan: **tilausten hallinta** ja **ilmoitusten hallinta**.

:::info Päivitetty 11/2026

Aikataulut ovat suuntaa antavia ja voivat muuttua. Toteutusjärjestykseen vaikuttavat asiakkaiden tarpeet ja lainsäädännön muutokset. Kehitystoiveita voi lähettää [tukeemme](https://taikatilaus.freshdesk.com/).

:::

## Tilausten hallinta

![Roadmap: Tilausten hallinta](/img/roadmap/roadmap-tilausten-hallinta.png)

### Tehty 2026

- **Jakelupalautteen laajennus**: palautteeseen lehti, syy ja puuttuva lehti asiakaskortilla ja OmaPalvelussa, palautteet välittyvät jakeluyhtiölle automaattisesti (11/2026).
- **Orbyt-laskujen lähetystila ja lähetyshistoria** (9/2026). Katso [Orbyt-ohje](/docs/ohjeet/integraatiot/orbyt).
- **Parquet-tietovienti** tilaus- ja asiakastietojen siirtoon omalle data-alustalle (9/2026). Katso [kuvaus](/docs/ohjeet/integraatiot/parquet-tietovienti).
- **StripeGateway** Stripe-maksujen seurantaan ja täsmäytykseen (9/2026). Katso [Stripe-ohje](/docs/ohjeet/integraatiot/stripe#stripegateway).
- **Kaksivaiheinen tunnistautuminen sähköpostilla** (9/2026). Katso [pikaohje](/docs/pikaohjeet/kaksivaiheinen-tunnistautuminen).
- **Raporttien ajastus** ja ajastettava tilaus- ja laskutusennuste (8/2026).
- **Laskujen lähetysyhteenveto ja laskujen yhteenveto** Laskut-näkymässä (5–8/2026).
- **Mega-tilausten tuonti** ja julkisten tilaustuotteiden hakurajapinta (3–8/2026).

### Työn alla ja lähiaikoina

- **Uusi käyttöliittymä**: asiakkaat, tilaukset, laskut, postitus ja raportit. Katso [uuden version ohjeet](/docs/uusi_versio/yleista).
- **Uusi tilauslomake**: lehden oma tilaussivu ja lomake, maksu kortilla, mobiililompakolla (Apple Pay, Google Pay) tai verkkopankissa, ja maksutavat valitaan tuotekohtaisesti.
- **Uudistettu asiakaskortti**: asiakkaan 360-yhteenveto ja asiakashistoria.
- **Vuosittain toistuva jakelun keskeytys** ja tilauksen pidennys keskeytysajalla.
- **Myöhässä saapuvat verkkomaksujen kuittaukset** kirjautuvat laskulle automaattisesti.
- **Orbyt-laskutuksen käyttöönotot**.
- **Lemonsoft-integraatio**: tilaus- ja ilmoituslaskujen siirto Lemonsoftiin, josta laskut lähetetään ja niiden reskontra hoidetaan. Katso [kuvaus](/docs/ohjeet/integraatiot/lemonsoft).

### Myöhemmin

- **Maksumuuri**: digitunnuksen laitekohtainen käyttöraja.
- **Raportointi**: uusi jaksotusraportti, tilaajaennusteet, LT-levikki.
- **Uudistettu itsepalveluportaali OmaPalvelu**.
- **AI-tukichat** uuteen versioon.
- **MCP-palvelimen laajennus** tietojen tallennukseen.

## Ilmoitusten hallinta

![Roadmap: Ilmoitusten hallinta](/img/roadmap/roadmap-ilmoitusten-hallinta.png)

### Tehty 2026

- **Maksajavaraukset**: laskulla monta maksajaa (10/2026).
- **Poliittisen mainoksen avoimuusilmoitus (TTPA)** (9/2026). Katso [ohje](/docs/ohjeet/ilmoitustenhallinta/avoimuusilmoitus).
- **Keskitetyt alennussäännöt ja alennuskoodit** (8/2026).
- **Julkaisujen varauspaikat** muodostuvat saatavuudesta automaattisesti (8/2026).
- **OmaIlmoituksen osastot** ja osastokohtainen hinnoittelu (8/2026).

### Työn alla ja lähiaikoina

- **Ilmoitusten hallinta (IlmoitusStudio) uuteen käyttöliittymään**.
- **Ilmoitusvalmistus**: saman materiaalin käyttäminen helposti usealla varauksella.
- **Ilmoitusvalmistus**: Sisu-monijulkaisuintegraation laajentaminen.
- **InDesign-integraatio**: ilmoitusvalmistuksen aineistonhallinta pilvinatiivina Microsoft 365 OneDrive -synkronointina.
- **Pakettimyynnin maksajan valinta** suoraan myyjältä.
- **Alennussäännöt** laajemmin eri myyntikanaviin.
- **Ilmoituksen hinta-alennus**: prosenttialennuksen lisäksi euroalennus laskulle, esim. −100 €.

### Myöhemmin

- **Julkaisukalenterien tuonti** CSV-tiedostosta.
- **AI-tukichat** uuteen versioon.
- **MCP-palvelimen laajennus** tietojen tallennukseen.

Toteutuneet uudistukset kuvataan tarkemmin [versiotiedotteissa](/docs/category/versiotiedotteet).
