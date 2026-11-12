---
sidebar_position: 3
slug: /uusi_versio/asetukset/asiakkaan-tietokentat
description: Asiakkaan tietokentät — Puhelinkenttien määrittäminen.
---

# Asiakkaan tietokentät

**Asiakkaan tietokentät** -sivulla määrität, mitkä kentät ovat käytössä asiakaskortilla, mitkä niistä ovat pakollisia ja mitä oletusarvoja uudelle asiakkaalle annetaan. Lisäksi voit valita, mitä asiakaskortin Yhteenvedossa näytetään.

Avaa sivu valitsemalla **Asetukset → Muut asetukset → Asiakkaan tietokentät.**

Sivulla on välilehdet samassa järjestyksessä kuin asiakaskortilla: **Yhteenveto**, **Yhteystiedot**, **Laskutustiedot** ja **Markkinointitiedot**. Yhden välilehden muutokset eivät tallennu erikseen: **Tallenna**-painike tallentaa kaikkien välilehtien muutokset kerralla. Onnistuneen tallennuksen jälkeen painikkeen vieressä lukee **Tallennettu**.

Palaa asetusten etusivulle napsauttamalla **Palaa asetuksiin.**

## Yhteenveto

Yhteenveto-välilehdellä valitset, mitä asiakaskortin Yhteenvedossa näytetään. Jokaisen kohdan vieressä on **valinta**: päällä oleva kohta näytetään, pois päältä oleva piilotetaan. Kaikki kohdat ovat oletuksena näkyvissä, ja uudet kohdat tulevat oletuksena näkyviin. Tällä välilehdellä ei ole pakollisuutta eikä oletusarvoja.

**Missä yhteenveto näkyy**
- Yhteenveto-välilehti (asiakaskortin muokkaus)
- Yhteenveto-palkki asiakaskortin katselussa

**Tilaajuus** (vain tilaukset)
- Tilaajuus-osio
- Tilaaja alkaen, kesto ja tauot
- Tila nyt
- Eri tuotteita
- Tilaukset tilaajana ja maksajana
- Katkaisu
- Maksettu yhteensä (tilaukset)
- Kaavio: tilausjaksot aikajanalla

**Ilmoitusasiakkuus** (vain ilmoitukset)
- Ilmoitusasiakkuus-osio
- Ensimmäinen ilmoitus
- Viimeisin ilmoitus
- Varauksia ja julkaisuja
- Myynti yhteensä
- Kaavio: ilmoitusmyynti vuosittain
- Kaavio: ilmoitusmyynti kanavittain
- Kaavio: ilmoitusmyynti myyntituotteittain

**Maksut**
- Maksut-osio
- Maksettu yhteensä
- Laskutettu yhteensä
- Avoinna
- Keskimääräinen maksuaika
- Kaavio: laskutettu ja maksettu vuosittain
- Kaavio: laskutetun jakauma
- Vuositaulukko

**Maksuongelmat**
- Maksuongelmat-osio

## Yhteystiedot, Laskutustiedot ja Markkinointitiedot

Näillä välilehdillä kentät ovat taulukossa, jossa on neljä saraketta:

| Sarake | Merkitys |
|---|---|
| **Kenttä** | kentän nimi asiakaskortilla |
| **Näkyy** | kun valinta on pois, kenttää ei näytetä asiakaskortilla |
| **Pakollinen** | kun valinta on päällä, kenttä on täytettävä ennen asiakkaan tallennusta |
| **Oletusarvo** | arvo, joka asetetaan oletuksena uudelle asiakkaalle |

- **Piilotettu kenttä:** kentän tieto säilyy asiakkaalla, vaikka sitä ei näytetä. Piilotettua kenttää ei voi merkitä pakolliseksi.
- **Pakollinen:** jos pakollinen kenttä on tyhjä, asiakkaan tallennus ei onnistu. Kyllä/Ei-tyyppisillä kentillä (esimerkiksi Kuollut, Suoramaksu, Koontilasku) pakollisuus-valintaa ei ole.
- **Oletusarvo:** kentän tyypistä riippuen oletusarvo valitaan valikosta (esimerkiksi Asiakastyyppi, Laskun toimitustapa, Laskun kieli, markkinoinnin tila ja lähde), Kyllä/Ei-valikosta tai kirjoitetaan kenttään. Päiväyskentillä oletusarvoksi voi valita Luontipäivä. Valinta "–" tarkoittaa, ettei oletusta ole.

Joillakin kentillä on valmiiksi oletusarvo: Maa (ISO-koodi) **FI**, Asiakastyyppi **Henkilö**, Laskun toimitustapa **KIRJE** ja Maksuehto (päivää) **14**. Voit muuttaa niitä tai tyhjentää ne.

### Kentät välilehdittäin

- **Yhteystiedot:** Sukunimi, Etunimi, Yritys, Osasto, Markkinointinimi, Lähiosoite, Katunumero, Porras, Huoneisto, Postinumero, Postitoimipaikka, Maa (ISO-koodi), Sähköposti, Sähköposti #2, Puhelin, Puhelin 2, Puhelin 3, Asiakkaan nettisivun URL, C/O-osoite, Asiakastyyppi, Kuollut, Y-tunnus, VAT-numero / verotunniste, Syntymävuosi, Lisätiedot ja Myyjä (käyttäjän ID).
- **Laskutustiedot:** IBAN, BIC, OVT-tunnus, Verkkolaskuosoite, Välittäjätunnus, Laskutusviite / sopimusnumero, Laskun toimitustapa, Laskun kieli, Sähköpostilaskuosoite, Ilmoituslaskujen laskutustapa, Myyntikielto, Laskutusosoite (KontaktiID), Ale-% (tilaus), Ale-% (ilmoitus), Maksuehto (päivää), Suoramaksu, Koontilasku, Ei laskutuslisää, Maksumuistutuskielto ja Ilmoituslaskujen ALV-%.
- **Markkinointitiedot:** Kaikki markkinointi kielletty, Kiellon päiväys, Kiellon lähde, Kiellon lisätiedot sekä jokaiselle kanavalle (Sähköposti, Kirje, Puhelin, Tekstiviesti) tila, päiväys, lähde ja lisätiedot.

Jos asetat markkinointikiellolle tai kanavan tilalle oletusarvon, mutta et anna lähteelle oletusta, lähteeksi tulee uudelle asiakkaalle "Oletusasetus".

