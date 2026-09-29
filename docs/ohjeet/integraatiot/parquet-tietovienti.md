---
sidebar_position: 8
description: Parquet-tietovienti — tilaus- ja asiakastietojen automaattinen siirto asiakkaan data-alustalle.
keywords: [parquet, tietovienti, data-alusta, analytiikka, manifest, pilvitallennus, raportointi, tietovarasto]
---

# Parquet-tietovienti

Parquet-tietovienti siirtää julkaisijan tilaus- ja asiakastiedot automaattisesti ja turvallisesti julkaisijan omalle data-alustalle. Tilaus-, laskutus- ja asiakasdataa voidaan näin hyödyntää keskitetysti analytiikassa, markkinoinnissa ja raportoinnissa ilman käsityötä. Ominaisuus on käytettävissä kaikille TaikaTilaus-asiakkaille.

## Mikä Parquet on?

Parquet on avoin, yleisesti käytetty tiedostomuoto suurten tietomäärien tallentamiseen ja analysointiin. Se pakkaa datan tiiviisti ja on nopea lukea analytiikkatyökaluilla, minkä vuoksi se on vakiomuoto nykyaikaisilla data-alustoilla. Muoto on laite- ja ohjelmistoriippumaton, joten aineisto on helposti hyödynnettävissä eri järjestelmissä.

## Käyttötarkoitus

Data-alusta tarvitsee ajantasaisen kuvan tilaajista ja tilauksista. Siirto tapahtuu automaattisesti, ja vienti mahdollistaa mm.:

- tilaajakunnan ja tilausten analysoinnin ja segmentoinnin
- markkinoinnin kohdennuksen (esim. jatko- ja uusintatilaukset)
- laskutuksen ja myynnin raportoinnin yhdessä paikassa
- tietojen yhdistämisen julkaisijan muihin järjestelmiin

## Toimintaperiaate

Vienti siirtää tiedot TaikaTilauksesta julkaisijan data-alustalle. Vienti suoritetaan automaattisena ajona, joka etenee neljässä vaiheessa:

1. **Poiminta** - vienti lukee sovitut TaikaTilaus-taulut (tilaukset, laskut, asiakkaat, tuotteet, postitus ym.).
2. **Suodatus** - arkaluontoiset ja poistetut tiedot jätetään pois. Jokaisesta taulusta luodaan tehokas Parquet-tiedosto.
3. **Toimitus** - tiedostot siirretään salatusti pilvitallennukseen. Viimeisenä kirjoitettava **manifest-tiedosto** kertoo, että toimitus on täydellinen.
4. **Käyttö data-alustalla** - julkaisijan data-alusta noutaa tiedostot pilvitallennuksesta, kun manifest-tiedosto on ilmestynyt, ja tiedot ovat käytettävissä analytiikassa ja markkinoinnissa.

![Parquet-tietovienti - Tietovirta](/img/integraatiot/parquet-tietovirta.png)

### Manifest-tiedosto

Manifest kirjoitetaan pilvitallennukseen aina viimeisenä. Toimitus on noudettavissa vasta, kun sen manifest-tiedosto on ilmestynyt. Manifest sisältää jokaisen tiedoston rivimäärän ja tarkistussumman, joilla vastaanottaja voi varmistaa aineiston eheyden.

## Aikataulu ja luotettavuus

Vienti ajetaan automaattisesti ajastettuna, tyypillisesti kerran vuorokaudessa yöaikaan.

Jos jokin vaihe epäonnistuu, ajo keskeytyy ja virheestä ilmoitetaan. Näin puutteellista aineistoa ei toimiteta.

## Tietoturva ja yksityisyys

- **Tunnistautumistiedot eivät kulje mukana** - salasanat ja kirjautumistunnisteet on rajattu pois viennistä.
- **Poistetut tiedot rajataan pois** - kokonaan poistetut kontaktit ja poistetut laskut eivät päädy vientiin.
- **Salattu siirto ja tallennus** - tiedostot siirretään ja säilytetään salattuina, ja pääsy on rajattu julkaisijan omilla tunnuksilla.
- **Eheystarkistus** - jokainen tiedosto varmistetaan siirron jälkeen, ja manifest sisältää rivimäärät ja tarkistussummat.

## Käyttöönotto

Kysy Parquet-tietoviennin käyttöönotosta tuki@taikatilaus.fi tai jari.makela@taikatilaus.fi.

TaikaTilauksen osalta toteutuksesta veloitetaan käyttöönottomaksu sekä [hinnaston](https://www.taikatilaus.fi/hinnasto) mukainen kiinteä kuukausimaksu. 

Lisätietoja:   
Jari Mäkelä
p. 050 557 6130
jari.makela@taikatilaus.fi
