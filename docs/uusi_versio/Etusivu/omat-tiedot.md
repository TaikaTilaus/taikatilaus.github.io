---
sidebar_position: 5
title: Käyttäjän tiedot ja valikko
description: Käyttäjän tiedot ja valikko — Omat tiedot, Stripe, Tiedotteet ja kirjautuminen ulos.
---

# Käyttäjän tiedot ja valikko

Avaa käyttäjävalikko napsauttamalla päävalikon oikeassa reunassa näkyvää käyttäjätunnustasi.

Valikossa ovat seuraavat toiminnot:

- **Tiedot**: avaa omat tietosi ja näkymäasetukset.
- **Tiedotteet**: avaa järjestelmän tiedotteet.
- **TaikaTilaus (vanha)**: avaa TaikaTilauksen vanhan version uuteen välilehteen samoilla tunnuksilla. Kohta näkyy vain, jos organisaatiollenne on määritetty vanhan version osoite.
- **Stripe**: avaa organisaationne Stripe-tiedot uuteen välilehteen. Kohta näkyy vain pääkäyttäjille organisaatioissa, joilla Stripe on käytössä.
- **Kirjaudu ulos**: kirjaa sinut ulos järjestelmästä.

Jos käytät TaikaNakka-demoympäristöä, valikossa on myös kohta, jolla siirryt demoon tai palaat omaan ympäristöösi.

![Omat tiedot -valikko järjestelmän päävalikossa](/img/versio2/paavalikko-icons.png)

## Käyttäjän tiedot

Jos olet organisaationne pääkäyttäjä, kortin otsikkorivillä näkyy merkintä **Pääkäyttäjä** ja alla ilmoitus käyttäjätasostasi.

**Tiedot**-sivulla näet seuraavat käyttäjätiliä koskevat tiedot:

| Kenttä | Sisältö |
|---|---|
| **Asiakas (tenant)** | Organisaatio, johon käyttäjätunnus kuuluu. |
| **Käyttäjätunnus** | Järjestelmään kirjautumisessa käytettävä tunnus. |
| **Viimeisin kirjautuminen** | Edellisen kirjautumisen päivämäärä ja kellonaika. |
| **Nimi** | Käyttäjän nimi. Muokattavissa. |
| **Sähköposti** | Käyttäjän sähköpostiosoite. Muokattavissa, osoitteen muoto tarkistetaan. |
| **Puhelin** | Käyttäjän puhelinnumero. Muokattavissa. |
| **Ulkoasuteema** | Käyttöliittymän teema: Vaalea, Tumma, Sateenkaari, Kesä tai Joulu. Teema vaihtuu heti valinnan jälkeen, ja se tallentuu Tallenna-painikkeella. |
| **Näytä kesäbanneri etusivulla** | Kytkin, jolla vuodenaikabanneri näytetään tai piilotetaan etusivulla (Etusivulla banneria voi myös piilottaa Piilota-painikkeella). |

Tallenna muutokset napsauttamalla **Tallenna**. Tallennuksen jälkeen siirryt etusivulle.

### Kirjautuminen uuteen versioon vanhan version kautta

Jos tämä asetus on organisaatiollenne käytössä, Tiedot-sivulla on valinta **Kirjautuminen TaikaTilauksen uuteen versioon vanhan version kautta**:

- **Ei valintaa**
- **Näytä AppTaikaTilaus-kirjautuminen TaikaTilauksessa**: TaikaTilauksen kirjautumissivulla näkyy vaihtoehto kirjautua uuteen versioon.
- **Näytä ja kirjaudu suoraan uuteen versioon**: kirjautuminen vie suoraan uuteen versioon.

Valinta tulee voimaan seuraavasta kirjautumisesta alkaen.

## Omat kirjautumiset

Tiedot-sivun Omat kirjautumiset -osiossa näet 10 viimeisintä kirjautumistasi uuteen versioon viimeisen 12 kuukauden ajalta:

| Sarake | Sisältö |
|---|---|
| **Aika** | Kirjautumisen päivämäärä ja kellonaika. |
| **Tapa** | Kirjautumistapa. Epäonnistuneet yritykset on merkitty punaisella ja rastilla, onnistuneet vihreällä valintamerkillä. |
| **Selain** | Käytetty selain. |
| **IP-osoite** | Laite- tai verkkoyhteyden osoite, josta kirjauduit. |

Jos luettelossa on kirjautuminen, jota et itse tehnyt, vaihda salasanasi ja kerro asiasta pääkäyttäjälle. Jos luettelo on tyhjä, kirjautumisia ei ole vielä kirjattu lokiin.

## Sovelluksen versio

**Sovelluksen versio** -osiossa näkyy Sovelluksen päiväys eli ajankohta, jolloin käytössä oleva versio on päivitetty. Kerro se tukeen, kun ilmoitat virheestä.

## Hupinurkka

Sivun alareunassa on Hupinurkka, jossa on kaksi pientä viihdepeliä kahvitaukoja varten: **Biorytmi ja Horoskooppi** sekä **Ristinolla**. Ne eivät vaikuta järjestelmän tietoihin. Palaat takaisin napsauttamalla Takaisin-painiketta.

![Käyttäjän omat tiedot ja ulkoasuteeman valinta](/img/versio2/omat-tiedot.png)

## Tiedotteet

Uusi tiedote näkyy etusivun yläosassa. Kun olet lukenut tiedotteen, napsauta **Kuittaa luetuksi**.

Avaa kaikki tiedotteet napsauttamalla oikeassa yläkulmassa olevaa käyttäjävalikkoa ja valitsemalla **Tiedotteet**. Luetuksi kuitatun tiedotteen voi palauttaa lukemattomaksi napsauttamalla **Palauta lukemattomaksi**.

Kuitattu tiedote näkyy Tiedotteet-ikkunassa niin kauan kuin sen näyttöaika on voimassa

![Tiedote etusivulla](/img/versio2/tiedotteet2.png)

![Luettujen ja lukemattomien tiedotteiden luettelo](/img/versio2/tiedotteet.png)
