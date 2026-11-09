---
sidebar_position: 8
title: Jakelupoikkeukset
---

# Jakelupoikkeukset

**Jakelupoikkeukset**-välilehdellä hallitaan asiakkaan jakeluasetuksia, väliaikaista osoitetta, jakelun keskeytystä ja tulevaa osoitteenmuutosta.

**Jakelupoikkeukset**-välilehdellä hallitaan asiakkaan jakeluasetuksia, väliaikaista osoitetta, jakelun keskeytystä ja tulevaa osoitteenmuutosta. Välilehti ei näy sivustolla, jossa on vain ilmoitusten hallinta käytössä. Jos asiakkaalla on voimassa oleva väliaikainen osoite, välilehden nimen vieressä näkyy sininen merkki.

![Asiakaskortin jakelupoikkeukset-välilehti](/img/versio2/jakelupoikkeukset.png)

## Jakeluasetukset

| Asetus | Merkitys |
| --- | --- |
| **Varhaisjakelu estetty** | Pakottaa asiakkaan tilaaman lehden päiväjakeluun. |
| **Estolista** | Estää lehtien toimittamisen asiakkaalle. Asiakas voi olla estolistalla esimerkiksi maksamattomien laskujen vuoksi. |
| **Pakotettu nippunumero** | Määrittää varhaisjakelun nipun, johon asiakkaan lehti pakotetaan. Käytä kenttää, kun lehti halutaan toimittaa asiakkaalle varhaisjakelussa tietyn nipun kautta. |

Tallenna muutokset napsauttamalla **Tallenna**.

![Asiakkaan varhaisjakelu-, estolista- ja nippuasetukset](/img/versio2/jakelupoikkeukset2.png)

## Väliaikainen osoite

Väliaikaista osoitetta voidaan käyttää esimerkiksi kesäosoitteena. Se ohittaa asiakkaan perusosoitteen määritetyllä voimassaoloajalla.

1. Anna osoitteen voimassaoloaika kenttiin **Voimassa alkaen** ja **Voimassa asti**.
2. Täytä väliaikaisen osoitteen vastaanottaja- ja osoitetiedot.
3. Valitse **Toistaiseksi voimassa**, jos väliaikaisella osoitteella ei ole tiedossa olevaa loppupäivää. Valinta asettaa Voimassa asti -päiväksi 31.12.2078, jolloin osoite on voimassa toistaiseksi. Jos alkupäivää ei ole annettu, Voimassa alkaen -päiväksi tulee kuluva päivä. Valinnan poistaminen asettaa Voimassa asti -päiväksi kuluvan päivän, jolloin osoite päättyy tänään.
4. Valitse **Koskee kaikkea postitusta**, jos väliaikaisen osoitteen tulee koskea kaikkea asiakkaan postitusta, mukaan lukien laskuja.
5. Napsauta **Tallenna**.

![Asiakkaan väliaikaisen osoitteen tiedot](/img/versio2/jakelupoikkeukset3.png)

## Jakelun keskeytys

Jakelun keskeytyksen ajaksi tilaus nukutetaan. Keskeytys koskee kaikkia asiakkaan tilauksia ja estää postituksen.

1. Anna keskeytyksen alkupäivä kenttään **Keskeytys alkaa**.
2. Anna päättymispäivä kenttään **Keskeytys päättyy**.
3. Valitse tarvittaessa **Toistuu vuosittain**.
4. Kirjoita tarvittaessa **Keskeytysviesti** seuraavalle laskulle.
5. Napsauta **Tallenna**.

Kun tallennat keskeytyksen alku- tai loppupäivän, asiakkaan tilausten tila päivittyy heti. Tilaus muuttuu Nukutettu-tilaan.

**Toistuu vuosittain.** Valinta näkyy vain, jos sovelluksessa on toistuva keskeytys käytössä. Se sopii keskeytykselle, joka toistuu joka vuosi samoina päivinä, esimerkiksi koulujen kesätauolle. Kun keskeytys on päättynyt, yöajo siirtää alku- ja loppupäivän seuraavaan vuoteen. Siirto näkyy asiakkaan [Muutosloki](/docs/uusi_versio/Asiakkaat/asiakaskortti/muutosloki)-välilehdellä. Valinta vaatii alku- ja loppupäivän, ja keskeytyksen on oltava alle vuoden mittainen. Loppupäivä ei voi olla avoin (31.12.2078 tai myöhemmin).

**Keskeytysviesti seuraavalle laskulle.** Teksti lisätään tilaajan tilauksen seuraavan laskun viestiin, esimerkiksi *Lehtijakelu keskeytetty 5.6.–1.8. ja tilausta pidennetty vastaavasti*. Kun lasku on luotu, kenttä tyhjenee ja tyhjennys kirjataan [Muutosloki](/docs/uusi_versio/Asiakkaat/asiakaskortti/muutosloki)-välilehdelle.

### Pidennä tilausta keskeytysajalla

Painike **Pidennä tilausta keskeytysajalla** pidentää asiakkaan tilauksia niillä keskeytyksen päivillä, jotka osuvat tilauksen voimassaoloon. Se kirjoittaa pidennyksestä myös tekstin kenttään **Keskeytysviesti** seuraavalle laskulle. Painike näkyy vain tallennetulla asiakkaalla.

1. Anna keskeytyksen alku- ja loppupäivä ja napsauta Tallenna. Pidennys tehdään aina tallennetuilla päivillä. Jos kortilla on tallentamattomia muutoksia, järjestelmä pyytää tallentamaan ne ensin.
2. Napsauta **Pidennä tilausta keskeytysajalla**.
3. Ponnahdusikkuna näyttää keskeytyksen päivät ja taulukon, jossa on jokaisen tilauksen numero, tuote, jakso, pidennys päivinä ja uusi loppupäivä. Tilaukset, joita ei pidennetä, näkyvät harmaina syyn kanssa (Ei pidennetä: syy).
4. Muokkaa tarvittaessa laskuviestin tekstiä. Teksti lisätään **Keskeytysviesti**-kentän nykyisen tekstin perään. Jos tyhjennät tekstin, laskulle ei lisätä viestiä.
5. Napsauta **Pidennä tilaus** (tai Pidennä N tilausta).

Pidennys on keskeytyksen päivät, jotka osuvat tilauksen alku- ja loppupäivän väliin. Uusi loppupäivä on vanha loppupäivä + jakelun keskeytyksen kesto.

Seuraavia tilauksia ei pidennetä: tilaus, jolla ei ole loppupäivää, katkaistu tai päättynyt tilaus, tilaus joka uusiutuu TaikaTilauksen ulkopuolella (esimerkiksi Stripe), tilaus jolle seuraava jakso on jo luotu sekä tilaus, joka on jo pidennetty samalla keskeytyksellä.

Pidennys kirjautuu tilauksen ja asiakkaan [Muutosloki](/docs/uusi_versio/Asiakkaat/asiakaskortti/muutosloki)-välilehdelle. Tilauksen lisätietojen alkuun tulee rivi pidennyksestä. Ponnahdusikkuna sulkeutuu, ja kortin ylälaitaan tulee ilmoitus. Jos keskeytys ei osu yhdenkään tilauksen voimassaoloon, ponnahdusikkuna kertoo sen.

![Asiakkaan jakelun keskeytyksen tiedot](/img/versio2/jakelupoikkeukset4.png)

## Tuleva osoitteenmuutos

Voit kirjata osoitteenmuutoksen etukäteen. Uusi osoite tulee voimaan annettuna päivänä. Jos et anna nimeä, tilaajan nykyinen nimi kopioidaan kenttiin tallennettaessa.

1. Anna muutoksen voimaantulopäivä kenttään **Voimaan (pvm)**.
2. Täytä uuden osoitteen vastaanottaja- ja osoitetiedot.
3. Napsauta **Tallenna**.

Osiossa on myös **Osoitepäivitys tehty (info)** -kenttä osoitepäivityksen tietoa varten. Järjestelmä täyttää kentän, kun osoite on päivitetty. 

![Asiakkaan tulevan osoitteenmuutoksen tiedot](/img/versio2/jakelupoikkeukset5.png)
