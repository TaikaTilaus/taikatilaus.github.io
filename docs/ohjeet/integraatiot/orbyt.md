---
sidebar_position: 9
description: Orbyt-laskujen lähetystila ja lähetyshistoria laskulla, Laskujen haun Lähetyksen tila -sarake ja -hakuehto sekä virheiden käsittely.
keywords: [orbyt, lähetystila, lähetyksen tila, lähetyshistoria, jakelu, jakelutila, toimitustila, laskun lähetys, laskun toimitus, maksumuistutus, suoraveloitusilmoitus, edita, posti, jys, omaposti, opuscapita, kivra, verkkolasku, e-lasku, kirje, hintavyöhyke, jakelualue, pysäytetty, document stop, stop document, kaksoiskappale, toimitus epäonnistui, hardbounce, virheet, odottaa käsittelyä]
---

# Orbyt

Kun laskut välitetään [Orbytin](https://orbyt.tech/fi/) kautta, TaikaTilaus saa Orbytilta tilatiedot jokaisesta lähetyksestä: milloin Orbyt on vastaanottanut laskun, milloin se on käsitelty, luovutettu jakeluun ja toimitettu vastaanottajalle, sekä mahdolliset virheet. Tiedot näkyvät laskulla **Lähetys**-kohdassa ja Laskujen haun **Lähetyksen tila** -sarakkeessa.

## Lähetys laskulla

Laskun tiedoissa näkyy **Lähetys**-kohdassa laskun **tuorein lähetystila** yhdellä rivillä:

> **Maksumuistutus 1** · `Kirje` · **Luovutettu jakeluun** · Posti · Hintavyöhyke D · 17.08.2026 12.59 · **Lähetyshistoria (4)** · *1 aiempi virhe*

Rivin tiedot:

| Tieto | Kertoo | Esimerkki |
|---|---|---|
| **Asiakirja** | Mitä lähetettiin | Lasku, Maksumuistutus 1, Maksumuistutus 2, Suoraveloitusilmoitus, Hyvityslasku |
| **Kanava** | Miten lähetettiin | Kirje, Sähköposti, Kuluttajan e-lasku, Yrityksen verkkolasku, Kivra, OmaPosti |
| **Tila** | Mitä lähetykselle tapahtui | Luovutettu jakeluun |
| **Palvelu** | Missä palvelussa tila syntyi | Orbyt, Edita, Posti, JYS, OmaPosti, OpusCapita, Kivra |
| **Lisätieto** | Tarkenne selkokielellä | Hintavyöhyke D, Jakelualue PISA (Pirkanmaa), Toimituspäivä 11.09.2026 |
| **Aika** | Milloin tila syntyi | 17.08.2026 12.59 |

Viemällä hiiren tilan tai lisätiedon päälle näet selitteen ja Orbytin alkuperäisen tekstin.

**Lähetyshistoria**-painikkeesta avautuu laskun kaikkien lähetysten tapahtumat uusimmasta vanhimpaan sarakkeilla Aika, Asiakirja, Kanava, Tila, Palvelu, Tekninen koodi ja Lisätieto. Tekninen koodi on Orbytin palauttama raakakoodi (esim. MAILED, DELIVERED, HARDBOUNCE), josta on apua selvitettäessä asiaa Orbytin kanssa.

Samalla laskunumerolla voi olla useita lähetyksiä: maksumuistutuksessa sama lasku lähetetään uudelleen. Historiassa näkyvät sekä alkuperäisen laskun että maksumuistutusten lähetykset, ja **Asiakirja**-sarakkeesta näet, mistä lähetyksestä on kyse. Lähetyskanava voi vaihtua lähetysten välillä, esimerkiksi sähköpostilasku ja sen jälkeen maksumuistutus kirjeenä.

**Aiempi virhe** -merkki kertoo, että laskun historiassa on virhe, mutta tuorein tila on kunnossa, esimerkiksi epäonnistuneen verkkolaskun jälkeen maksumuistutus on toimitettu kirjeenä. Jos tuorein tila on itse virhe, se näkyy punaisella tilana.

## Tilat

Tilat on lueteltu lähetyksen etenemisen järjestyksessä.

| Tila | Palvelu | Merkitys |
|---|---|---|
| **Odottaa käsittelyä** | Orbyt | Orbyt on kuitannut TaikaTilauksesta lähetetyn Finvoicen, mutta ei ole vielä käsitellyt sitä. Vastaanottaja ei ole vielä saanut asiakirjaa. |
| **Käsitelty** | Edita | Edita on tarkistanut ja hyväksynyt aineiston tulostettavaksi. |
| **Lähetetty** | Orbyt, Kivra | Sähköposti tai Kivra-viesti on lähetetty. |
| **Välitetty operaattorille** | OpusCapita | Verkkolaskuoperaattori on vastaanottanut yrityksen verkkolaskun. Yrityksen verkkolaskusta ei tule erillistä toimituskuittausta, joten tämä on verkkolaskun onnistunut lopputila. |
| **Luovutettu jakeluun** | Posti, JYS | Edita on luovuttanut kirjeen jakeluyhtiölle. |
| **Toimitettu vastaanottajalle** | JYS, OmaPosti | Jakeluyhtiö on jakanut kirjeen vastaanottajan postilaatikkoon tai asiakirja on toimitettu OmaPostiin. |
| **Avattu** | Orbyt | Vastaanottaja on avannut sähköpostissa olevan laskun PDF-linkin (lisätieto *PDF avattu*). |

Virhetilat näkyvät punaisella:

| Tila | Merkitys |
|---|---|
| **Toimitus epäonnistui** | Asiakirja ei mennyt perille tällä kanavalla, esimerkiksi verkkolaskuosoitetta ei löydy, sähköpostiosoite ei ole olemassa tai postilaatikko on täynnä. Syy näkyy lisätiedossa. |
| **Pysäytetty Orbytissä** | Orbyt pysäytti asiakirjan (*Document stop*), eikä se edennyt mihinkään toimituskanavaan. Syynä on puuttuva toimitusreitti tai virheellinen osoite, esimerkiksi yrityksen nimi puuttuu tai postinumero on väärän muotoinen. Kukaan ei saa asiakirjaa. |
| **Hylätty kaksoiskappaleena** | Operaattori ei välittänyt laskua, koska sama laskunumero on jo aiemmin välitetty. |

Kun lasku on virhetilassa, korjaa vastaanottajan tiedot tai toimitustapa ja lähetä asiakirja uudelleen.

## Lisätiedot

### Postin hintavyöhyke

Postin kautta jaettavan kirjeen lisätietona näkyy **hintavyöhyke** (A, B, C tai D), joka määräytyy vastaanottajan postinumeron perusteella. Ulkomaille lähetetyillä kirjeillä vyöhyke on EU (ulkomaat). Ahvenanmaa kuuluu Postin EU-hintavyöhykkeeseen.

### JYS-jakelualue

JYS (Jakeluyhtiö Suomi) jakaa kirjeitä alueellisten jakeluyhtiöiden kautta. Lisätietona näkyy **jakelualue** eli JYS:n jakeluyritystunnus ja alue. Vihjeessä näkyy jakeluyhtiö. Toimitetun kirjeen lisätietona näkyy JYS:n ilmoittama **toimituspäivä**.

| Tunnus | Jakeluyhtiö | Jakelualue |
|---|---|---|
| EB | PPP Finland Oy | Uusimaa |
| HML | PISA Jakelu Oy | Hämeenlinna |
| JKL | PISA Jakelu Oy | Keski-Suomi |
| KALE | Kaleva365 Oy | Pohjois-Pohjanmaa ja Lappi |
| KARHU, KRH | PISA Jakelu Oy | Satakunta |
| KOVIC | Dilicon Oy | Kouvola |
| KP | Hilla Group Oyj | Keski-Pohjanmaa |
| KUOPI | PISA Jakelu Oy | Itä-Suomi |
| KYMIC | Dilicon Oy | Kotka |
| LPR | PISA Jakelu Oy | Etelä-Karjala |
| LSTJ | Lounais-Suomen Tietojakelu Oy | Varsinais-Suomi |
| LUPPP | PPP Finland Oy | Länsi-Uusimaa |
| MKL | PISA Jakelu Oy | Etelä-Savo |
| PÄHIC | Dilicon Oy | Päijät-Häme |
| PISA | PISA Jakelu Oy | Pirkanmaa |
| PKS | PKS Jakelu Oy | Pääkaupunkiseutu |
| POPPP | PPP Finland Oy | Porvoo |
| PPP | PPP Finland Oy | Pohjanmaa |
| SAVO | PISA Jakelu Oy | Savo |
| SEPPP | PPP Finland Oy | Etelä-Pohjanmaa |
| SLP | SLP Jakelu Oy | Kainuu |
| SMR | PPP Finland Oy | Rauma |
| VSTJ | Varsinais-Suomen Tietojakelu Oy | Salo |

*Lähde: [Jakeluyhtiö Suomi, postinsaajille](https://www.jakeluyhtio.fi/fi/postinsaajille).*

### Sähköpostin palautukset

Epäonnistuneen sähköpostin lisätietona näkyy vastaanottajan osoite ja syy, esimerkiksi *verkkotunnusta ei löydy*, *postilaatikkoa ei löydy*, *postilaatikko on täynnä* tai *vastaanottajan suodatin hylkäsi viestin*. Teknisenä koodina näkyy HARDBOUNCE (pysyvä virhe), SOFTBOUNCE (tilapäinen virhe) tai REJECT (vastaanottajan palvelin hylkäsi viestin).

## Laskujen haku: Lähetyksen tila

Kun Orbyt on käytössä, Laskujen haku -välilehdellä on kaksi lähetykseen liittyvää saraketta:

- **Lähetystapa ja -päivä** kertoo laskun suunnitellun lähetystavan ja TaikaTilauksen lähetysstatuksen (esim. *KIRJE, Lähetetty: 23.09.2026*).
- **Lähetyksen tila** kertoo parhaan tiedon siitä, mitä lähetykselle on sen jälkeen tapahtunut: tuorein tila ja sen alla asiakirja, toteutunut kanava, palvelu ja päivä. Virheet näkyvät punaisella, ja aiemmat virheet mainitaan erikseen.

Sarakkeista näkee esimerkiksi, että sähköpostilaskun maksumuistutus on lähtenyt kirjeenä.

**Lähetyksen tila** -hakuehdolla voit hakea ja suodattaa laskuja tuoreimman lähetystilan mukaan:

- **Toimenpiteitä vaativat virheet** – laskut, joiden tuorein tila on virhe (toimitus epäonnistui, pysäytetty Orbytissä tai hylätty kaksoiskappaleena). Näille laskuille pitää tehdä jotain, jotta asiakirja menee perille.
- **Virheet**
    - **Kaikki virheet** – myös laskut, joiden aiempi lähetys epäonnistui mutta myöhempi onnistui
    - **Pysäytetty Orbytissä**, **Toimitus epäonnistui**, **Hylätty kaksoiskappaleena**
- **Muut tilat** – Odottaa käsittelyä, Käsitelty, Lähetetty, Välitetty operaattorille, Luovutettu jakeluun, Toimitettu vastaanottajalle, Avattu sekä **Ei lähetystietoa** (laskut, joista Orbytiltä ei ole tullut tilatietoa)

Hakuehtoa voi yhdistää muihin hakuehtoihin. Yhteenvedon määrät ja summat lasketaan hakuehdon mukaan suodatetuista laskuista.

## Huomioitavaa

- Tilatiedot tulevat Orbytilta viiveellä. Juuri lähetetyn laskun tila voi olla vielä *Odottaa käsittelyä* tai tieto voi puuttua kokonaan.
