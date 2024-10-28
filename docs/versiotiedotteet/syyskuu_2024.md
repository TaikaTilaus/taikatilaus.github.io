---
sidebar_position: 2
description: Uudistuksia TaikaTilaus-tuotteeseen 1.9.-30.9.2024 välisenä aikana
image: /img/social.png
keywords: [versiotiedote, postitukset, laskut]
---

# Syyskuu 2024

Uudistuksia TaikaTilaus-tuotteeseen 1.9.-30.9.2024 välisenä aikana.

Kysy tarkemmin yksittäisten toiminnallisuuksien käyttöönotosta [tuestamme](https://taikatilaus.freshdesk.com/).

## Postitukset käyttöliittymään

Postituksen voi nyt tehdä käyttöliittymässä ilman ulkoista SFTP-client sovellusta.

Postitusten tiedot -välilehdelle on lisätty Siirrä FTP:llä -painike, jolla postitusajon ainestot siirretään Postiin, painoihin ja varhaisjakeluyhtiöihin.

![Postituslista - Postitusohjeet](/img/ohjeet/postitus-teko6.png)

Kun siirto on valmis, tieto siitä tulee näkyviin.

![Postituslista - Postitusohjeet](/img/ohjeet/postitus-teko7.png)

Lisätietoja [postitusohjeissa](/docs/ohjeet/tilaustenhallinta/postistuslista#postitusten-teko-ja-ainestojen-siirto-postiin-painoihin-ja-varhaisjakeluyhti%C3%B6ihin).

## Kontaktin laskut

Asiakaskortille Laskut-kohtaan on lisätty kentät Muoto ja Tila, jotka ovat olleet aikaisemmin Laskut-näytöllä.

![Asiakaskortti](/img/versiotiedotteet/lasku-muodot.png)

## Laskujen kielistys

Voit nyt valita, millä kielellä asiakkaat saavat laskunsa. Tällä hetkellä vaihtoehtoina ovat suomi, englanti ja espanja. Ruotsi on työn alla. Jos haluat ottaa toiminnon käyttöön, lähetä viesti tuki@taikatilaus.fi

![Asiakaskortti - Laskun kieli](/img/versiotiedotteet/lasku-kiellistys.jpg)

## Tietoturva- ja versiopäivitykset

SFTP-kirjasto [SSH.NET](https://github.com/sshnet/SSH.NET) on päivitetty uuteen versioon [2024.1.0](https://github.com/sshnet/SSH.NET/releases/tag/2024.1.0). Versio on paremmin yhteensopiva uusien protokollaversioiden sekä OpensSSH-kirjaston uusimpien versioiden kanssa.

