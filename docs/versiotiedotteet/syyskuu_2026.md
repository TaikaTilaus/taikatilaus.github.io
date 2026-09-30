---
sidebar_position: 1
description: Uudistuksia TaikaTilaus-tuotteeseen 1.9.2026 alkaen
image: /img/social.png
keywords: [versiotiedote, Orbyt, lähetystila, lähetyksen tila, lähetyshistoria, laskun lähetys, toimenpiteitä vaativat virheet, kaksivaiheinen tunnistautuminen, MFA, sähköposti, Authenticator, käyttäjätilit, avoimuusilmoitus, poliittinen mainos, TTPA, QR-koodi, Parquet, tietovienti, data-alusta]
---

# Syyskuu 2026

Uudistuksia TaikaTilaus-tuotteeseen 1.9.2026 alkaen.

> Kysy tarkemmin yksittäisten toiminnallisuuksien käyttöönotosta [tuestamme](https://taikatilaus.freshdesk.com/).

## Orbyt-laskujen lähetystila ja lähetyshistoria

Orbytin kautta välitettyjen laskujen lähetystieto on uudistettu. Laskun **Lähetys**-kohdassa näkyy nyt laskun tuorein lähetystila selkokielellä: mikä asiakirja lähetettiin (lasku, maksumuistutus, suoraveloitusilmoitus), millä kanavalla, mitä sille tapahtui ja missä palvelussa, esimerkiksi *Maksumuistutus 1 · Kirje · Luovutettu jakeluun · Posti · Hintavyöhyke D*.

- **Lähetyshistoria**-painikkeesta näet laskun ja sen maksumuistutusten kaikki lähetykset. Näin näkyy esimerkiksi, että epäonnistuneen verkkolaskun jälkeen maksumuistutus on toimitettu kirjeenä.
- Virheet näkyvät punaisella: **Toimitus epäonnistui**, **Pysäytetty Orbytissä** ja **Kaksoiskappale**. Aiemmat, jo korjaantuneet virheet mainitaan erikseen.
- Kirjeiden lisätietona näkyy Postin **hintavyöhyke** tai JYS:n **jakelualue** ja toimituspäivä, sähköposteille palautuksen syy selkokielellä.
- **Laskujen haku** -välilehdellä on uusi **Lähetyksen tila** -sarake ja -hakuehto. Hakuehdolla **Toimenpiteitä vaativat virheet** löydät laskut, jotka eivät ole menneet perille ja joille pitää tehdä jotain.

Katso [Orbyt-ohje](/docs/ohjeet/integraatiot/orbyt).

## Parquet-tietovienti data-alustalle

Uusi **Parquet-tietovienti** siirtää tilaus- ja asiakastiedot automaattisesti julkaisijan omalle data-alustalle analytiikkaa, markkinointia ja raportointia varten. Vienti ajetaan tyypillisesti kerran vuorokaudessa yöaikaan, tiedot siirtyvät salattuina, ja salasanat sekä poistetut tiedot rajataan pois. Ominaisuus on kaikkien asiakkaiden käyttöönotettavissa. Parquet-tietoviennin toteutuksesta veloitetaan avaus- ja kuukausimaksu. 

Katso [Parquet-tietovienti-kuvaus](/docs/ohjeet/integraatiot/parquet-tietovienti).

![Parquet-tietovienti - Tietovirta](/img/integraatiot/parquet-tietovirta.png)

## StripeGateway Stripe-tietojen seurantaan

Uusi **StripeGateway** näyttää Stripen korttimaksut ja digitilaukset yhdestä paikasta suoraan Stripestä, joten tiedot ovat aina ajan tasalla. Etusivulla näkyvät aktiiviset tilaukset, uudet tilaajat, veloitukset ja epäonnistuneet maksut, ja erillisillä sivuilla tilaajat, tuotteet, kupongit, erääntyneet laskut ja vanhenevat kortit. **Täsmäytys** vertaa Stripen tilauksia TaikaTilaukseen neljän tunnin välein ja löytää tilaukset, jotka on maksettu mutta jääneet puuttumaan TaikaTilauksesta. StripeGatewayyn pääsee TaikaTilauksen valikon Stripe-linkistä ilman erillistä salasanaa.

Katso [Stripe-ohje](/docs/ohjeet/integraatiot/stripe#stripegateway).

![Stripe](/img/integraatiot/stripe-1.png)

## Kaksivaiheinen tunnistautuminen myös sähköpostilla

Kaksivaiheisen tunnistautumisen (MFA) koodin voi nyt saada Authenticator-sovelluksen lisäksi **sähköpostiin**. Kirjautuessa salasanan jälkeen syötetään sähköpostiin lähetetty kuusinumeroinen kertakäyttöinen koodi, joka on voimassa 10 minuuttia.

- Käyttäjä ottaa sähköpostivarmennuksen käyttöön **Käyttäjän tiedot** -sivun **Sähköposti**-välilehdeltä: lähetä koodi, vahvista se ja kytke varmennus päälle.
- Pääkäyttäjä voi valita käyttäjän tunnistautumistavan **Asetukset → Käyttäjätilit** -näkymästä: *Ei käytössä*, *Authenticator* tai *Sähköposti*.
- Valinnalla **Muista minut 30 päivää** koodia ei kysytä samassa selaimessa uudelleen 30 päivään.

Katso [pikaohje](/docs/pikaohjeet/kaksivaiheinen-tunnistautuminen) ja [Käyttäjätilit-ohje](/docs/ohjeet/asetukset/kayttajatilit).

![Käyttäjän tiedot - Kaksivaiheinen tunnistautuminen - Sähköposti](/img/pikaohjeet/sahkoposti.png)

## Poliittisen mainoksen avoimuusilmoitus

EU:n poliittisen mainonnan asetus (TTPA, (EU) 2024/900) edellyttää, että jokaisen poliittisen mainoksen yhteydessä julkaistaan **avoimuusilmoitus**, joka on yleisön nähtävillä seitsemän vuotta. TaikaTilaus tuottaa ilmoituksen nyt suoraan ilmoitusvarauksesta.

- Merkitse ilmoitusvaraus **Poliittinen mainos** -valinnalla ja lähetä mainostajalle **pyyntö** varauksen Avoimuusilmoitus-alueelta. Mainostaja saa sähköpostiin linkin varauksen tiedoilla esitäytettyyn lomakkeeseen, täydentää rahoittajan ja maksajien tiedot ja vahvistaa ne. Vahvistuksen jälkeen ilmoitus lukittuu ja julkaistaan.
- Ilmoitus julkaistaan omassa arvaamattomassa osoitteessaan, ja mainokseen painettavan **merkinnän ja QR-koodin** saa suoraan varaukselta tai mainostajan vahvistussivulta. Julkaisu täyttää varauksen **Avoimuusilmoitus URL** -kentän automaattisesti.
- Useat maksajat eritellään osuuksineen. Korjaukset julkaistaan aina uutena versiona, ja aiemmat versiot jäävät nähtäville. Ilmoituksia ei voi poistaa.
- Lehden kaikkien avoimuusilmoitusten julkinen luettelo (`Avoimuusilmoitukset.aspx`) voidaan linkittää lehden verkkosivuille.
- Julkisen sivun ulkoasuun voi asettaa lehden värin, logon ja CSS-tyylin.
- Uusi hakuehto **Vain poliittiset ilmoitukset** Ilmoitukset-haussa ja **Vain poliittiset** IlmoitusStudiossa rajaa haun poliittisiin mainoksiin.

Käyttöönotto: **Asetukset → Ylläpito → Poliittinen mainonta (TTPA)** – anna ilmoitusmekanismin sähköposti ja tulevien vaalien lista. Katso [Poliittinen mainos ja avoimuusilmoitus -ohje](/docs/ohjeet/ilmoitustenhallinta/avoimuusilmoitus).

![Ylläpito - Poliittinen mainontan (TTPA)](/img/ohjeet/poliittinen-mainonta2.png)

![Ylläpito - Poliittinen mainontan (TTPA)](/img/ohjeet/poliittinen-mainonta.png)
*TTPA-asetukset Asetukset/Ylläpito-välilehdellä*
