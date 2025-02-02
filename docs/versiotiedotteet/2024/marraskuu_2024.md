---
sidebar_position: 2
description: Uudistuksia TaikaTilaus-tuotteeseen 1.11.-30.11.2024 välisenä aikana
image: /img/social.png
keywords: [versiotiedote, navigointi, tapahtumaloki, integraatiot]
---

# Marraskuu 2024

Uudistuksia TaikaTilaus-tuotteeseen 1.11.-30.11.2024 välisenä aikana.

Kysy tarkemmin yksittäisten toiminnallisuuksien käyttöönotosta [tuestamme](https://taikatilaus.freshdesk.com/).

## Maksetun tilauksen palautuksen automaattinen tiliöinti 

Ohjelmaan on lisätty **Maksetun tilauksen katkaisu** -toiminto, jonka avulla voi katkaista maksetun tilauksen ja tehdä automaattisesti laskulle merkinnän palautuksesta (**HUOM! TaikaTilauksen kautta ei liiku rahaa!** Rahan palautus pitää tehdä taloushallintonne kautta. Palautuksen tiliöinti tehdään kirjanpidon raportteja varten!). Toiminnon oikeanlaista aktivointia varten tarvitaan sen tilin numero, jonka kautta oikaisut hoidetaan.

Maksetun tilauksen katkaisu -ominaisuudesta voi siirtää palautuksen myös [saldoksi](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/lasku#saldon-siirt%C3%A4minen-asiakkaalle-maksetusta-laskusta), jos teillä on saldo-ominaisuus käytössä.

![Tilaus](/img/versiotiedotteet/maksetunkat.png)

![Maksetun tilauksen katkaisu](/img/versiotiedotteet/maksetunkat2.png)

![Lasku](/img/versiotiedotteet/maksetunkat3.png)
*Palautuksen tiliöinti laskulla.*

Katkaisukäsittely on uudelleen nimetty **Maksamattoman tilauksen katkaisuksi**, selventämään toiminnon tarkoitusta.

![Tilaus](/img/versiotiedotteet/maksamatonkat.png)

## Navigoinnin ja taulukkojen lajittelun parannukset

- Navigointilinkkejä on lisätty **Ilmoitusmyynti-, Lasku- ja Tilausnäkymiin**, jotta liikkuminen sovelluksen sisällä olisi sujuvampaa.
- Taulukoiden lajittelutoimintoja on parannettu: nyt tietoja voi järjestellä aakkosjärjestyksen lisäksi päivämäärien ja summien mukaan

![Lasku](/img/versiotiedotteet/lasku-hyper.png)
*Laskuissa on nyt linkit laskun maksajan tietoihin sekä laskuun liittyvän tilauksen/ilmoitusvarauksen tietoihin.*

![Ilmoitusmyynti](/img/versiotiedotteet/myynti-hyper.png)
*Ilmoitusmyynnin tiedoista pääsee nyt siihen liittyvään laskuun (jos se on luotu).*

![Tilaus](/img/versiotiedotteet/tilaus-hyper.png)
*Tilauksen tiedoista pääsee nyt suoraan tilaajan ja maksajan (jos erillinen) tietoihin.*

![Laskut](/img/versiotiedotteet/lasku-kronologinen.png)
*Voit nyt järjestää laskujen esim. maksupäivän päivämäärän mukaan.*

## Tapahtumaloki

- Tapahumalokille on lisätty **SuorittajaID** -arvo, jonka avulla voi seurata käyttäjän toimintaa istunnon aikana.
- Lokista on oletuksena piilotettu teknisiä tietoja.

![Tapahtumaloki](/img/ohjeet/loki2.png)
*Selaimen, TCP/IP -osoitteen, ja SessionID:n näkyvyys voidaan määrittää aktivoimalla Näytä Selain, TCP/IP, SessionID -kenttä.*

## Integraatiot

1.  [Prenly-näköislehden](https://www.prenly.com/) maksumuuri-integraatio
    - Aktiivisen tilaajan tiedot sekä käyttöoikeudet haetaan suoraan TaikaTilauksesta käyttäjän kirjautuessa näköislehteen.
    - [Lisätietoja Prenly-liittymästä](/docs/ohjeet/integraatiot/prenly)
2.  [Liana Commerce](https://www.lianatech.com/solutions/websites-and-commerce/commerce.html) -verkkokaupan tilausten integraatio
    -  Verkkokaupassa tehdyt tilaukset voidaan tuoda automaattisesti TaikaTilaukseen tilauksen yhteydessä
