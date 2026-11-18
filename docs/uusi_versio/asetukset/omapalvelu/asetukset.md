---
sidebar_position: 3
title: OmaPalvelun asetukset
description: Asetukset → OmaPalvelu — osoite, sivut ja kortit, asiakkaan omien muutosten rajat, ilme ja värit, esikatselu sekä viestien tekstit.
---

# OmaPalvelun asetukset

Asetukset ovat kohdassa **Asetukset → OmaPalvelu**. Kohta näkyy pääkäyttäjälle, kun OmaPalvelu on [otettu käyttöön](./index.md#käyttöönotto). Tallenna jokaisen osion muutokset osion omalla **Tallenna**-painikkeella.

## Osoite ja tila

Näet uuden OmaPalvelun osoitteen ja sen, onko se käytössä. **Käytä uuden OmaPalvelun osoitetta** -painike vaihtaa asiakaskortin kirjautumis- ja salasanaviestien linkit osoittamaan uuteen OmaPalveluun.

## OmaPalvelun sivut

Valitse, mitkä sivut ja kortit ovat käytössä.

- **Etusivu** on aina käytössä.
- **Asiakkuus, Laskut, Tilaukset ja Käyttäjätunnus** ovat käytössä oletuksena. Voit ottaa ne pois.
- **Itsepalvelusivut** (yhteystiedot, väliaikainen osoite, jakelun keskeytys, laskutustapa, markkinointiluvat ja perhetunnukset) ovat oletuksena pois. Ota käyttöön vain ne, joita asiakkaiden halutaan käyttävän.

Käytöstä poistettu kortti puuttuu Etusivulta, ja sen sivun osoite ohjaa Etusivulle.

## Asiakkaan omat muutokset

Rajat, joita OmaPalvelun itsepalvelusivut noudattavat:

| Asetus | Merkitys | Oletus |
|---|---|---|
| **Muutos alkaa aikaisintaan (päivää)** | Kuinka monen päivän päästä väliaikainen osoite voi aikaisintaan alkaa. | 2 |
| **Keskeytys vähintään (päivää)** | Jakelun keskeytyksen lyhin kesto. | 7 |
| **Keskeytys enintään (päivää)** | Jakelun keskeytyksen pisin kesto. | 182 |
| **Keskeytys alkaa viimeistään (päivää)** | Kuinka monen päivän päähän keskeytyksen alun voi asettaa. | 180 |
| **Perhetunnuksia enintään** | Perhetunnusten enimmäismäärä. 0 = ei käytössä. | 4 |
| **Paperilaskun teksti** | Teksti, joka näytetään, kun asiakas valitsee paperilaskun. | |

Tyhjä kenttä käyttää oletusta.

## Lue lehteä -painikkeet

Määritä riveittäin `LEHTI=osoite`, esimerkiksi `TaikaNakka=https://…`. Lehden nimi vastaa tuotteen tuoteryhmää, ja `TaikaNakka` kattaa myös ryhmän `TaikaNakka Digi`. Merkki `*` vastaa mitä tahansa lehteä. Painike näkyy tilaajalle, jolla on voimassa oleva digipalveluun oikeuttava tilaus.

## OmaPalvelun ilme

OmaPalvelulla on oma ilme. Tyhjä kohta käyttää [tunnussivujen ilmeen](../asiakassivut.md#sivujen-ilme) arvoa, joten vanha ilme jatkuu, kunnes OmaPalvelulle asetetaan oma.

- **Teema:** kuten tunnussivuilla, vaalea, tumma tai selaimen mukaan.
- **Värit:** yläpalkki, tausta ja pääväri. Pääväri on painikkeiden ja linkkien väri.
- **Logo, favicon ja taustakuva:** JPG, PNG tai WebP, favicon myös ICO, enintään 2 Mt. Taustakuva täyttää ikkunan korttien ympärillä.
- **Tarkemmat värit:** voit asettaa jokaisen värin erikseen vaalealle ja tummalle tilalle. Värit ovat yläpalkki ja sen teksti, pääväri ja painikkeiden teksti, sivun ja korttien tausta, teksti, himmeä teksti, reunat sekä onnistumisen, tiedon, varoituksen ja virheen tausta- ja tekstivärit. Tilakohtainen väri ohittaa pohjavärit. Tyhjä = oletus.
- **Esikatselu:** näet sivun puhelimen ja tietokoneen leveydellä ennen tallennusta, myös tallentamattomilla väreillä ja tarkemmilla väreillä.
- **Kontrastivaroitus:** jos tekstin ja taustan kontrasti on alle 4,5:1, näkyy varoitus. Varoitus ei estä tallennusta, mutta heikko kontrasti vaikeuttaa lukemista.

## Viestit

Viestien tekstit ovat kohdassa [**Asetukset → Tunnukset ja salasana**](../asiakassivut.md). Viestejä on kirjautumislinkin viesti, yhteystietojen muutoksen vahvistus (tagi `[[MUUTOKSET]]`) ja yhteinen vahvistusviesti muille muutoksille. Asiakaskortilta lähetettävien kolmen viestin tekstit (kertakirjautumislinkki, salasanan vaihtolinkki ja uuden tunnuksen viesti) määritetään OmaPalvelun asetuksissa.
