---
sidebar_position: 1
description: Uudistuksia TaikaTilaus-tuotteeseen 1.9.2026 alkaen
image: /img/social.png
keywords: [versiotiedote, kaksivaiheinen tunnistautuminen, MFA, sähköposti, Authenticator, käyttäjätilit, avoimuusilmoitus, poliittinen mainos, TTPA, QR-koodi]
---

# Syyskuu 2026

Uudistuksia TaikaTilaus-tuotteeseen 1.9.2026 alkaen.

> Kysy tarkemmin yksittäisten toiminnallisuuksien käyttöönotosta [tuestamme](https://taikatilaus.freshdesk.com/).

## Kaksivaiheinen tunnistautuminen myös sähköpostilla

Kaksivaiheisen tunnistautumisen (MFA) koodin voi nyt saada Authenticator-sovelluksen lisäksi **sähköpostiin**. Kirjautuessa salasanan jälkeen syötetään sähköpostiin lähetetty kuusinumeroinen kertakäyttöinen koodi, joka on voimassa 10 minuuttia.

- Käyttäjä ottaa sähköpostivarmennuksen käyttöön **Käyttäjän tiedot** -sivun **Sähköposti**-välilehdeltä: lähetä koodi, vahvista se ja kytke varmennus päälle.
- Pääkäyttäjä voi valita käyttäjän tunnistautumistavan **Asetukset → Käyttäjätilit** -näkymästä: *Ei käytössä*, *Authenticator* tai *Sähköposti*.
- Valinnalla **Muista minut 30 päivää** koodia ei kysytä samassa selaimessa uudelleen 30 päivään.

Tekstiviestivaihtoehto on poistettu, koska sitä ei ole tuettu.

Katso [pikaohje](/docs/pikaohjeet/kaksivaiheinen-tunnistautuminen) ja [Käyttäjätilit-ohje](/docs/ohjeet/asetukset/kayttajatilit).

## Poliittisen mainoksen avoimuusilmoitus

EU:n poliittisen mainonnan asetus (TTPA, (EU) 2024/900) edellyttää, että jokaisen poliittisen mainoksen yhteydessä julkaistaan **avoimuusilmoitus**, joka on yleisön nähtävillä seitsemän vuotta. TaikaTilaus tuottaa ilmoituksen nyt suoraan ilmoitusvarauksesta.

- Merkitse ilmoitusvaraus **Poliittinen mainos** -valinnalla ja lähetä mainostajalle **pyyntö** varauksen Avoimuusilmoitus-alueelta. Mainostaja saa sähköpostiin linkin varauksen tiedoilla esitäytettyyn lomakkeeseen, täydentää rahoittajan ja maksajien tiedot ja vahvistaa ne. Vahvistuksen jälkeen ilmoitus lukittuu ja julkaistaan.
- Ilmoitus julkaistaan omassa arvaamattomassa osoitteessaan, ja mainokseen painettavan **merkinnän ja QR-koodin** saa suoraan varaukselta tai mainostajan vahvistussivulta. Julkaisu täyttää varauksen **Avoimuusilmoitus URL** -kentän automaattisesti.
- Useat maksajat eritellään osuuksineen. Korjaukset julkaistaan aina uutena versiona, ja aiemmat versiot jäävät nähtäville. Ilmoituksia ei voi poistaa.
- Lehden kaikkien avoimuusilmoitusten julkinen luettelo (`Avoimuusilmoitukset.aspx`) voidaan linkittää lehden verkkosivuille.
- Julkisen sivun ulkoasuun voi asettaa lehden värin, logon ja CSS-tyylin.
- Uusi hakuehto **Vain poliittiset ilmoitukset** Ilmoitukset-haussa ja **Vain poliittiset** IlmoitusStudiossa rajaa haun poliittisiin mainoksiin.

Käyttöönotto: **Asetukset → Ylläpito → Poliittinen mainonta (TTPA)** – anna ilmoitusmekanismin sähköposti ja tulevien vaalien lista. Katso [Poliittinen mainos ja avoimuusilmoitus -ohje](/docs/ohjeet/ilmoitustenhallinta/avoimuusilmoitus).
