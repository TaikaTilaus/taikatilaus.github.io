---
sidebar_position: 1
description: Uudistuksia TaikaTilaus-tuotteeseen 1.12.-31.12.2024 välisenä aikana
image: /img/social.png
keywords: [versiotiedote, viestiloki, varhaisjakelu]
---

# Joulukuu 2024

Uudistuksia TaikaTilaus-tuotteeseen 1.12.-31.12.2024 välisenä aikana.

Kysy tarkemmin yksittäisten toiminnallisuuksien käyttöönotosta [tuestamme](https://taikatilaus.freshdesk.com/).

## Viestiloki
Ohjelmaan on lisätty uusi **Viestit**-toiminto, jonka avulla käyttäjät voivat tarkastella järjestelmän lähettämiä ja ajastettuja viestejä eri kanavissa. Tämä uusi toiminto sijaitsee valikon uudessa **Hallinta**-osiossa. **Hallinta**-osioon tullaan jatkossa keskittämään sovelluksen hallintatoiminnot, mikä selkeyttää järjestelmän käyttöä.

**Hallinta**-osio kytketään päälle asetuksista.

![Hallinta-välilehti](/img/versiotiedotteet/hallinta.png)

## Varhaisjakelun katurekisterin muokkaus laajentunut
TaikaTilaukseen on lisätty uusi käyttöliittymä, joka mahdollistaa Lounais-Suomen tietojakelun (LSTJ) varhaisjakelun katurekisterin muokkaamisen. Aiemmin käyttäjät pystyivät päivittämään vain Postin kohdistusrekisteriä, mikä vaati tiedostojen olevan oikeassa CSV-muodossa.

### Uuden toiminnon hyödyt
1. **Käyttäjäystävällisyys**: Jakeluyhtiöiden toimittamat katurekisterit ja reitit voidaan nyt siirtää TaikaTilaukseen entistä vaivattomammin.
2. **Joustavuus**: Kohdistusrekisterin päivitykset voidaan tehdä joko kokonaisvaltaisesti korvaamalla koko rekisteri, tai rivi kerrallaan, mikä on erityisen hyödyllistä pienissä muutoksissa, kuten yksittäisten katujen talonumeromuutoksissa.
3. **Itsepalvelu**: Asiakkaat voivat nyt tehdä kohdistusrekisterin päivityksiä itsenäisesti ilman TaikaTilauksen tukea, mikä nopeuttaa prosessia ja vähentää virheitä.

### Tulevat laajennukset
- **Jakeluyhtiöiden laajempi tuki**: Muokkaustoiminnallisuus laajennetaan koskemaan kaikkia yleisimpiä jakeluyhtiöitä.
- **Kayak-muotoisen aineiston tuki**: Tuontitoimintoon lisätään jatkossa tuki Kayak-muodossa toimitettaville rekisteritiedoille.

![Hallinta-välilehti](/img/versiotiedotteet/varhaisjakelu.png)

## Ilmoitusvarauksiin muutostiedot

Ilmoitusvarauksiin on lisätty käyttäjien toivomana ominaisuutena lisäys- ja muutostiedot. Uudet tiedot sisältävät:
- **Lisäysaikaleima**: Näyttää päivämäärän, jolloin ilmoitusvaraus on lisätty.
- **Lisääjä**: Näyttää käyttäjän, joka on tehnyt lisäyksen.
- **Muutosaikaleima**: Näyttää päivämäärän ja kellonajan, jolloin ilmoitusvaraukseen on tehty viimeisin muutos.
- **Muuttaja**: Näyttää käyttäjän, joka on tehnyt viimeisimmän muutoksen.

## Jaksotusraportit tausta-ajoina

Raskaat jaksotusraportit voidaan nyt suorittaa tausta-ajoina, jolloin ne ovat noudettavissa ajon valmistumisen jälkeen. Tämä mahdollistaa raporttien ajamisen ilman, että käyttäjän tarvitsee aktiivisesti odottaa niiden valmistumista käyttöliittymässä.

![Raporttiajo](/img/versiotiedotteet/raporttiajo.png)

![Raporttiajo](/img/versiotiedotteet/raporttiajo2.png)

## Integraatiot

[**PISA-Jakelu Oy**](https://www.pisajakelu.fi/) on lisätty uutena tuettuna varhaisjakelukumppanina. Varhaisjakeluaineiston muodostus ja siirto PISA:n järjestelmään on toteutettu osaksi TaikaTilauksen postitusprosessia. Tämä mahdollistaa asiakkaiden yhteistyön PISA-Jakelun kanssa varhaisjakelussa.