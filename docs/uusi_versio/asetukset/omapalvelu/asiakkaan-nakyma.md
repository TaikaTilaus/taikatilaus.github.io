---
sidebar_position: 2
title: Asiakkaan näkymä
description: Uusi TaikaTilaus – Mitä asiakas näkee OmaPalvelussa — kirjautuminen, Etusivun kortit, tilaukset ja laskut, itsepalvelusivut, perhetunnus ja usean asiakkaan tunnus.
kayttoliittyma: uusi
---

# Asiakkaan näkymä OmaPalvelussa

:::note Uusi TaikaTilaus

Tämä ohje koskee uutta TaikaTilausta (kehitysversio). Nykyisen TaikaTilauksen vastaava ohje: [OmaPalvelu](../../../ohjeet/omapalvelu.md).

:::

Tällä sivulla kuvataan, mitä asiakas näkee ja voi tehdä OmaPalvelussa. Tämän tiedon avulla voit auttaa asiakasta puhelimessa.

## Kirjautuminen

Asiakas kirjautuu sähköpostiosoitteellaan ja salasanallaan. Kirjautumissivulla on myös:

- **Lähetä kirjautumislinkki**: asiakas saa sähköpostiin linkin, jolla pääsee kirjautumaan ilman salasanaa. Linkki on voimassa 15 minuuttia ja toimii vain kerran. Linkkiä ei voi pyytää liian usein.
- **Muista minut**: valinnalla asiakas pysyy kirjautuneena 30 päivää. Älä valitse sitä yhteisellä laitteella. Ilman valintaa istunto päättyy 2 tunnin käyttämättömyyden jälkeen.
- **Unohtuiko salasana?** ja **Luo tunnus**: vievät asiakkaan [salasanan vaihto- ja tunnuksenluontisivuille](../asiakassivut.md).

Jos asiakas vaihtaa salasanansa, hänen muut kirjautuneet istuntonsa päättyvät. Poistettu tunnus tai tunnuksen liitos asiakkaaseen katkaisee istunnon heti.

## Etusivu

Etusivulla on kortti jokaiselle käytössä olevalle sivulle. Korteissa näkyy sivun tilanne, ja **Muuta ›** tai **Kaikki ›** avaa sivun. Tietokoneella kortteja on kolme rivillä ja puhelimessa ne ovat allekkain.

| Kortti | Sisältö |
|---|---|
| **Asiakkuus** | Asiakkaan nimi ja numero sekä päätunnuksella osoite, sähköposti ja puhelin. **Muuta ›** avaa Yhteystiedot-sivun. |
| **Laskut** | Avoin lasku tai viimeksi maksettu lasku. |
| **Tilaukset** | Voimassa olevat tilaukset ja alla seuraavan numeron ilmestymispäivä. |
| **Väliaikainen osoite** | Osoite ja päivät, tai *Ei väliaikaista osoitetta*. |
| **Jakelun keskeytys** | Keskeytyksen päivät. |
| **Laskutustapa** | Laskutustapa ja sähköposti. |
| **Markkinointiluvat** | Kanavittain, tai *Kaikki kielletty*. |
| **Perhetunnukset** | Perhetunnusten nimet ja määrä enimmäismäärästä. |
| **Käyttäjätunnus** | Käyttäjätunnus ja nimi. **Muuta ›** avaa sivun, jonka ensimmäinen osio on **Vaihda salasana**. |

Etusivun yläosassa on **Lue lehteä** -painike, jos asiakkaalla on voimassa oleva tilaus, joka oikeuttaa digipalveluun, ja pääkäyttäjä on määrittänyt painikkeelle osoitteen. Painike avaa lukupalvelun, joka kysyy vielä oman kirjautumisensa. Jos asiakas tilaa useaa lehteä, jokaisella on oma painike, esimerkiksi *Lue TaikaNakka*. Painikkeen näkee vain tilaaja, ei pelkkä maksaja.

## Tilaukset ja laskut

- **Tilaukset**: asiakkaan tilaajana tai maksajana olevat tilaukset. Tila näkyy tavallisina sanoina: *Voimassa*, *Päättyy pian* (30 päivän sisällä), *Alkaa*, *Keskeytetty* ja *Päättynyt*. Tilaus on voimassa alku-, loppu- ja katkaisupäivänä.
- **Laskut**: maksajana olevat laskut. Päättyneet tilaukset ja laskut näytetään kahdelta viime vuodelta, luonnoksia, hyvityksiä ja poistettuja ei näytetä. Laskun tila on *Maksettu*, *Avoin* tai *Erääntynyt*.
- Tilaukset-kortin alla näkyy seuraavan numeron ilmestymispäivä jokaiselle tilatulle lehdelle (seuraavilta 60 päivältä). Jos ilmestymispäivä on tänään tai huomenna, kortissa lukee *tänään* tai *huomenna*.

## Itsepalvelusivut

Itsepalvelusivuilla asiakas tekee muutokset itse. Kaikki sivut ovat vain päätunnukselle, ellei toisin mainita. Jokainen tallennus kirjataan asiakkaan [muutoslokiin](../../Asiakkaat/asiakaskortti/muutosloki.md) lähteellä *OmaPalvelu*, asiakkaan tietoihin kirjoitetaan vain muuttuneet kentät, henkilökunnalle tulee [Huomio](../../Etusivu/huomiot.md) ja asiakas saa vahvistusviestin sähköpostiin. Jos mitään ei muuteta, mitään ei kirjoiteta.

| Sivu | Mitä asiakas voi tehdä | Rajat |
|---|---|---|
| **Yhteystiedot** | Lähiosoite (katunumero, porras ja huoneisto vain, jos asiakkaalla on niissä jo arvo), c/o, postinumero, postitoimipaikka, sähköposti (pakollinen) ja puhelin. | Nimi, asiakastyyppi, maa ja yritystiedot (Y-tunnus, verkkolasku) muuttaa asiakaspalvelu. Muutto ulkomaille hoidetaan asiakaspalvelussa, koska jakelun hinta muuttuu. Jos sähköposti muuttuu, vahvistus lähetetään uuteen ja vanhaan osoitteeseen. |
| **Väliaikainen osoite** | Alku- ja loppupäivä, osoite ja valinta, koskeeko osoite myös laskuja ja muita kirjeitä. Asiakas voi poistaa osoitteen. | Vain Suomessa, enintään vuoden ajaksi. Alku aikaisintaan asetuksessa määritetyn päivämäärän päästä. |
| **Jakelun keskeytys** | Keskeytyksen alku- ja loppupäivä. Tulevan keskeytyksen voi muuttaa tai poistaa, käynnissä olevasta voi muuttaa vain loppupäivän. | Alku ja kesto asetuksissa määritettyjen rajojen sisällä. Vuosittain toistuvan keskeytyksen tekee vain asiakaspalvelu. Keskeytys ei pidennä tilausta. Henkilökunta päättää pidennyksestä. |
| **Laskutustapa** | Laskun toimitustapa: sähköposti tai kirje. | Sähköpostilasku vaatii sähköpostiosoitteen. Verkkolaskutuksen vaihto hoidetaan verkkopankissa tai asiakaspalvelussa. Paperilaskun lisämaksusta kertova teksti tulee asetuksesta. |
| **Markkinointiluvat** | **Kaikki markkinointi kielletty** sekä neljä kanavaa (sähköposti, kirje, puhelin, tekstiviesti): Sallittu tai Kielletty. | Samat säännöt kuin asiakaskortilla: yleiskielto kieltää kaikki kanavat. Yleiskiellon poisto ei muuta kanavia. Valitsematon kanava jää tuntemattomaksi. |
| **Perhetunnukset** | Lisää perheenjäsenelle tunnus antamalla nimi ja sähköposti. Perheenjäsen saa viestin, jossa hän asettaa salasanan. Asiakas voi myös poistaa perhetunnuksen. | Tunnuksia enintään asetuksen mukaisesti (0 = ei käytössä). Olemassa olevaa tunnusta ei voi liittää, vaan se hoidetaan asiakaspalvelussa. Poisto poistaa liitoksen, ja tunnus poistuu vain, jos sillä ei ole muita liitoksia. |
| **Omat tiedot ja tunnus** | Vaihda salasana (nykyinen salasana kysytään), tunnuksen nimi ja 10 viimeisintä kirjautumista. | Salasanalla on samat säännöt kuin salasanan vaihtosivulla. |

## Perhetunnus

Perhetunnuksella asiakas näkee vain Etusivun, Tilaukset-sivun ja Omat tiedot -sivun. Laskuja ei näytetä, ja Laskut-osoite ohjaa Etusivulle. Perhetunnus ei näe maksajan sähköpostia tai puhelinnumeroa. Muut sivut ovat vain päätunnukselle.

## Tunnus, jolla on useampi asiakas

Jos tunnukseen on liitetty useita asiakkaita, Asiakkuus-kortissa on painike jokaiselle muulle asiakkaalle (asiakasnumeron mukaan). Painike vaihtaa näytettävän asiakkaan. Asiakkaan oma vaihto muistetaan, joten se vaikuttaa myös seuraavaan kirjautumiseen ja näköislehteen.

## Puhelinversio ja tietokoneversio

OmaPalvelu valitsee näkymän näytön leveyden mukaan (raja on 900 pikseliä). Jokaisen sivun alalaidassa on painikkeet **Näytä tietokoneversio**, **Näytä puhelinversio** ja **Näytön mukaan**. Valinta muistetaan selaimessa.

## Lisää kotinäytölle

Asiakas voi lisätä OmaPalvelun puhelimen kotinäytölle. Kuvakkeena on asiakkaan oma favicon, ja nimenä on *OmaPalvelu – lehden nimi*. Parhaiten toimii neliön muotoinen PNG-kuva, jonka koko on vähintään 192 pikseliä.
