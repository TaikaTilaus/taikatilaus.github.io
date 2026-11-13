---
unlisted: true
sidebar_position: 999
sidebar_label: Roadmap
description: TaikaTilauksen tuotekehityksen roadmap. Tehdyt, työn alla olevat ja myöhemmin toteutettavat uudistukset tilausten hallintaan ja ilmoitusten hallintaan.
image: /img/social.png
keywords: [roadmap, tiekartta, tuotekehitys, tilausten hallinta, ilmoitusten hallinta, IlmoitusStudio, uusi käyttöliittymä, tilauslomake, verkkomaksut, asiakaskortti, laskutus, alennussäännöt, mediamyynnin alennukset, avoimuusilmoitus, Microsoft 365, InDesign]
---

# Roadmap

TaikaTilauksen tuotekehityksen suunta lyhyesti: mitä on tehty viimeksi, mitä on työn alla ja mitä on suunnitteilla myöhemmin. Roadmap on jaettu kolmeen osaan: **tilausten hallinta**, **ilmoitusten hallinta** ja molemmille **yhteiset** uudistukset. Jokaisen kohdan otsikko kertoo hyödyn, ja seliterivillä on sen sisältö ja linkki tarkempaan kuvaukseen.

:::info Päivitetty 11/2026

Aikataulut ovat suuntaa antavia ja voivat muuttua. Toteutusjärjestykseen vaikuttavat asiakkaiden tarpeet ja lainsäädännön muutokset. Kehitystoiveita voi lähettää [tukeemme](https://taikatilaus.freshdesk.com/).

:::

## Tilausten hallinta

![Roadmap: Tilausten hallinta](/img/roadmap/roadmap-tilausten-hallinta.png)

### Tehty 2026

- **Jakelun ongelmat korjautuvat nopeammin** (11/2026)<br/>
  Jakelupalautteeseen lehti, syy ja puuttuva lehti asiakaskortilla ja OmaPalvelussa, ja palautteet välittyvät jakeluyhtiölle automaattisesti.
- **Laskujen ja maksujen tila näkyy yhdellä silmäyksellä** (5–9/2026)<br/>
  Orbyt-laskujen lähetystila ja lähetyshistoria, StripeGateway Stripe-maksujen seurantaan ja täsmäytykseen sekä laskujen lähetysyhteenveto ja laskujen yhteenveto. [Versiotiedote 9/2026](/docs/versiotiedotteet/syyskuu_2026), [versiotiedote 5/2026](/docs/versiotiedotteet/toukokuu_2026), [Orbyt-ohje](/docs/ohjeet/integraatiot/orbyt), [Stripe-ohje](/docs/ohjeet/integraatiot/stripe#stripegateway)
- **Tiedot omalle data-alustalle ja raportit oikeaan aikaan** (8–9/2026)<br/>
  Parquet-tietovienti tilaus- ja asiakastietojen siirtoon, raporttien ajastus sekä ajastettava tilaus- ja laskutusennuste. [Parquet-tietovienti](/docs/ohjeet/integraatiot/parquet-tietovienti), [versiotiedote 8/2026](/docs/versiotiedotteet/elokuu_2026)
- **Turvallisempi kirjautuminen** (9/2026)<br/>
  Kaksivaiheinen tunnistautuminen myös sähköpostilla. [Pikaohje](/docs/pikaohjeet/kaksivaiheinen-tunnistautuminen)
- **Uusia myyntikanavia** (3–8/2026)<br/>
  Mega-tilausten tuonti ja julkisten tilaustuotteiden hakurajapinta. [Versiotiedote 2/2026](/docs/versiotiedotteet/helmikuu_2026)

### Työn alla ja lähiaikoina

- **Sujuvampi arki uudessa käyttöliittymässä**<br/>
  Asiakkaat, tilaukset, laskut, postitus ja raportit uudistettuina sekä asiakaskortti, jossa on asiakkaan 360-yhteenveto ja asiakashistoria. [Uuden version ohjeet](/docs/uusi_versio/yleista)
- **Enemmän tilauksia verkosta**<br/>
  Lehden oma tilaussivu ja lomake. Maksu kortilla, mobiililompakolla (Apple Pay, Google Pay) tai verkkopankissa, ja maksutavat valitaan tuotekohtaisesti.
- **Vähemmän käsityötä laskutuksessa**<br/>
  Myöhässä saapuvat verkkomaksujen kuittaukset kirjautuvat laskulle automaattisesti, Orbyt-laskutuksen käyttöönotot sekä Lemonsoft-integraatio tilaus- ja ilmoituslaskujen siirtoon ja reskontraan. [Lemonsoft-kuvaus](/docs/ohjeet/integraatiot/lemonsoft)
- **Joustavampi jakelu tilaajalle**<br/>
  Vuosittain toistuva jakelun keskeytys ja tilauksen pidennys keskeytysajalla.

### Myöhemmin

- **Digitunnusten väärinkäyttö kuriin**<br/>
  Maksumuuri: digitunnuksen laitekohtainen käyttöraja.
- **Parempi näkymä tulevaan**<br/>
  Uusi jaksotusraportti, tilaajaennusteet ja LT-levikki.
- **Tilaaja hoitaa asiansa itse**<br/>
  Uudistettu itsepalveluportaali OmaPalvelu.

## Ilmoitusten hallinta

![Roadmap: Ilmoitusten hallinta](/img/roadmap/roadmap-ilmoitusten-hallinta.png)

### Tehty 2026

- **Yhteisilmoitukset ja paketit usealle maksajalle** (10/2026)<br/>
  Maksajavaraukset: samalla ilmoituksella voi olla monta maksajaa, ja kukin saa oman laskunsa.
- **Poliittinen mainonta EU-vaatimusten mukaiseksi** (9/2026)<br/>
  Poliittisen mainoksen avoimuusilmoitus (TTPA). [Ohje](/docs/ohjeet/ilmoitustenhallinta/avoimuusilmoitus), [versiotiedote 9/2026](/docs/versiotiedotteet/syyskuu_2026)
- **Hinnoittelu ja alennukset yhdestä paikasta** (8/2026)<br/>
  Keskitetyt alennussäännöt ja alennuskoodit sekä OmaIlmoituksen osastot ja osastokohtainen hinnoittelu. [Versiotiedote 8/2026](/docs/versiotiedotteet/elokuu_2026)
- **Myytävissä oleva tila näkyy automaattisesti** (8/2026)<br/>
  Julkaisujen varauspaikat muodostuvat saatavuudesta.

### Työn alla ja lähiaikoina

- **Ilmoitusmyynti uuteen käyttöliittymään**<br/>
  Ilmoitusten hallinnan (IlmoitusStudio) toiminnot uudessa versiossa. [Uuden version ohjeet: Ilmoitukset](/docs/uusi_versio/Ilmoitukset)
- **Vähemmän käsityötä ilmoitusvalmistuksessa**<br/>
  Saman materiaalin käyttäminen usealla varauksella, Sisu-monijulkaisuintegraation laajennus ja InDesign-aineistojen pilvinatiivi hallinta Microsoft 365 OneDrive -synkronointina.
- **Mediamyynnin alennukset**<br/>
  Monipuoliset kampanja- ja asiakasalennukset kaikkiin myyntikanaviin, prosentteina tai euroina.
- **Pakettimyynti sujuvammaksi**<br/>
  Myyjä valitsee pakettimyynnin maksajan suoraan.

### Myöhemmin

- **Julkaisukalenterit valmiiksi**<br/>
  Julkaisukalenterien tuonti CSV-tiedostosta.

## Yhteiset

### Myöhemmin

- **Tekoäly avuksi päivittäiseen työhön**<br/>
  AI-tukichat uuteen versioon ja MCP-palvelimen laajennus tietojen tallennukseen.

Toteutuneet uudistukset kuvataan tarkemmin [versiotiedotteissa](/docs/category/versiotiedotteet).
