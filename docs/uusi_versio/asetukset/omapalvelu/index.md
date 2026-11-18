---
sidebar_position: 1
slug: /uusi_versio/asetukset/omapalvelu
title: OmaPalvelu
description: OmaPalvelu on asiakkaan oma sivusto, jossa tilaaja näkee tilauksensa ja laskunsa ja hoitaa osoitteen, jakelun keskeytyksen ja yhteystietojen muutokset itse.
---

# OmaPalvelu

**OmaPalvelu** on asiakkaan oma sivusto. Kun tilaaja kirjautuu sinne omalla käyttäjätunnuksellaan, hän näkee tilauksensa ja laskunsa ja voi tehdä osan muutoksista itse, esimerkiksi ilmoittaa väliaikaisen osoitteen tai keskeyttää jakelun. Näin asiakaspalvelun ei tarvitse tehdä jokaista muutosta käsin.

OmaPalvelu toimii puhelimella ja tietokoneen selaimella. Se käyttää samoja käyttäjätunnuksia kuin muut asiakkaan palvelut, kuten digilehti.

:::note
Tässä kuvataan uusi OmaPalvelu. Se otetaan käyttöön asiakkaittain, ja vanha OmaPalvelu toimii rinnalla, kunnes uusi on käytössä.
:::

## Mitä asiakas voi tehdä

| Sivu | Mitä asiakas näkee tai tekee |
|---|---|
| **Etusivu** | Yhteenveto asiakkuudesta, laskuista ja tilauksista. Etusivulla jokainen sivu on oma korttinsa. |
| **Tilaukset** | Voimassa olevat ja päättyneet tilaukset sekä seuraavan numeron ilmestymispäivä. |
| **Laskut** | Avoimet ja maksetut laskut. |
| **Yhteystiedot** | Osoitteen, sähköpostin ja puhelinnumeron muutos. |
| **Väliaikainen osoite** | Lehden toimitus tilapäisesti toiseen osoitteeseen. |
| **Jakelun keskeytys** | Lehden jakelun keskeyttäminen määräajaksi. |
| **Laskutustapa** | Laskun toimitustavan vaihto sähköpostilaskun ja paperilaskun välillä. |
| **Markkinointiluvat** | Markkinointilupien ja -kieltojen muuttaminen. |
| **Perhetunnukset** | Lisätunnukset perheenjäsenille. |
| **Käyttäjätunnus** | Salasanan vaihto, nimi ja viimeisimmät kirjautumiset. |

Asiakkaan näkymää kuvataan tarkemmin sivulla [Asiakkaan näkymä](./asiakkaan-nakyma.md).

## Käyttöönotto

OmaPalvelun käyttöönotto tehdään kahdessa vaiheessa:

1. **TaikaTilauksen ylläpito** laittaa käyttöön asiakkaan käyttäjätunnukset, OmaPalvelun ja uuden OmaPalvelun. OmaPalvelun poisto poistaa myös uuden OmaPalvelun käytöstä.
2. **Pääkäyttäjä** määrittää sivut, rajat ja ilmeen kohdassa **Asetukset → OmaPalvelu**. Ks. [OmaPalvelun asetukset](./asetukset.md).

Kun OmaPalvelu on käytössä, **Asetukset**-valikossa on oma kohta **OmaPalvelu**. Se näkyy vain pääkäyttäjälle.

## OmaPalvelun osoite

OmaPalvelu avautuu osoitteessa `/oma/<osoite>`, esimerkiksi `…/oma/taikanakka`. Osoitteen nimi on sama kuin asiakkaan tunnussivujen osoite. Se tulee asetuksesta, jonka ylläpito määrittää, tai tilaussivun lehden osoitteesta.

Asetussivulla näkyy uuden OmaPalvelun osoite ja tila. **Käytä uuden OmaPalvelun osoitetta** -painike vaihtaa OmaPalvelun osoiteasetuksen osoittamaan uuteen sivustoon. Silloin myös asiakaskortin kertakirjautumis- ja salasanaviestien linkit toimivat uudessa OmaPalvelussa, ja vanhat linkit ohjautuvat uusille sivuille.
