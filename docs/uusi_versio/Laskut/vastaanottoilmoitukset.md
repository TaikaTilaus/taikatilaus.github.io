---
sidebar_position: 6
title: Vastaanottoilmoitukset
description: Vastaanottoilmoitukset uuden version Laskut-valikossa.
---

# Vastaanottoilmoitukset

**Vastaanottoilmoitukset**-sivulla näet kuluttajien e-laskun vastaanottoilmoitukset ja käsittelet ne. Avaa sivu yläreunan päävalikosta valitsemalla **Laskut → Vastaanottoilmoitukset**

## Mitä vastaanottoilmoitukset ovat

Kun kuluttaja ottaa verkkopankissa e-laskun tai suoramaksun käyttöön, muuttaa sitä tai lopettaa sen, laskuttajalle tulee siitä vastaanottoilmoitus. 

Järjestelmä hakee vastaanottoilmoitukset automaattisesti, ja yleensä myös käsittelee ne automaattisesti.

Vastaanottoilmoituksen lähettänyt asiakas tunnistetaan asiakasnumerolla. Löytyneen asiakkaan laskutustiedot päivitetään hänen asiakaskortilleen ilmoituksen mukaan.

## Ilmoitusten hakeminen

1. Valitse haluamasi rajaukset.
2. Napsauta **Hae** tai paina **Enter** hakuehto-kentässä.

Napsauta **Tyhjennä**, kun haluat palauttaa rajaukset oletusarvoihin. Rajaukset säilyvät, kun siirryt sivulta toiselle ja palaat takaisin.

| Rajaus | Kuvaus |
|---|---|
| **Hakukenttä** | Valitse, mistä kentästä haetaan. Valinta Kaikki hakee kaikista kentistä. |
| **Hakuehto** | Hakusana tai sen osa. |
| **Kalenterikuukausi** | Rajaa ilmoitukset yhteen kuukauteen. Valinta asettaa alku- ja loppupäivän. |
| **Alkupäivä / Loppupäivä** | Rajaa ilmoitukset aikavälille. |
| **Näytä vain käsittelemättömät** | Hakee ilmoitukset, joiden Käsitelty info ei sisällä tekstiä OK. Haku tehdään heti, kun valitset ruudun. |

## Hakutulokset

Listassa on oletuksena seuraavat sarakkeet:

| Sarake | Sisältö |
|---|---|
| **Aikaleima Maventassa** | Milloin ilmoitus on tehty. |
| **Koodi** | Ilmoituksen koodi: lisäys (ADD), muutos (CHANGE) tai poisto (DELETE). |
| **Tyyppi** | Palvelun tyyppi. Tyyppi 0 on e-lasku. Tyyppi 1 on suoramaksu. |
| **Maksunaihe** | Ilmoituksen maksunaihe. |
| **Laskunsaajan nimi** | Ilmoituksen tehneen kuluttajan nimi. |
| **Osoite** | Kuluttajan osoite. |
| **IBAN / BIC** | Kuluttajan tilinumero ja pankin tunnus. |
| **A.nro** | Asiakasnumero, jonka kuluttaja on antanut verkkopankissa. |
| **Yhdistetty asiakas (nyt)** | Asiakas, johon ilmoitus on liitetty. Näet asiakasnumeron ja asiakkaan nykyiset tiedot: nimen, IBANin, BICin, verkkolaskuosoitteen, OVT-tunnuksen, välittäjän ja toimitustavan. Tiedot ovat tämän hetken tiedot, eivät ilmoituksen tekohetken. |
| **Käsitelty info** | Käsittelyn tulos. Käsittelemättä-merkintä on keltainen, onnistunut käsittely vihreä ja virhe punainen. |

Voit lajitella listan napsauttamalla yksittäistä sarakeotsikkoa. Oletuksena uusin ilmoitus on ensin. 

Sivulla on oletuksena 100 riviä ja voit selata sivuja listan yläreunasta. 

**Sarakkeet**-painikkeella valitset näytettävät sarakkeet ja **Export**-valikosta voit viedä koko hakutuloksen esimerkiksi Exceliin.

## Käsittele vastaanottoilmoitukset

Painike **Käsittele vastaanottoilmoitukset** käsittelee kaikki ilmoitukset, joiden Käsitelty info on tyhjä. Käytä sitä, kun haluat käsitellä odottavat ilmoitukset heti etkä jää odottamaan automaattista käsittelyä.

1. Napsauta **Käsittele vastaanottoilmoitukset**.
2. **Vahvista**. Vahvistusikkuna kertoo, että käsittelemättömät ilmoitukset yhdistetään asiakkaisiin ja asiakkaiden laskutustiedot (IBAN, BIC, laskun toimitustapa, suoramaksu) päivitetään.

Järjestelmä käsittelee ilmoitukset vanhimmasta alkaen:

1. **Asiakkaan etsintä.** Asiakas etsitään ilmoituksen A.nro-kentän asiakasnumerolla. Jos asiakasta ei löydy ja tunnus on vähintään 13 numeroa pitkä, se voi olla laskun viitenumero. Silloin ilmoitus liitetään laskun maksajaan.
2. **Lisäys tai muutos.** Asiakkaalle tallennetaan ilmoituksen IBAN ja BIC, laskun toimitustavaksi tulee VERKKOLASKU ja suoramaksu otetaan käyttöön, jos ilmoituksen tyyppi on suoramaksu.
3. **Poisto.** Asiakkaan IBAN ja BIC tyhjennetään, suoramaksu poistetaan ja toimitustavaksi tulee KIRJE.
4. **Merkintä.** Ilmoitukseen liitetään asiakas, ja Käsitelty info -kenttään tulee Käsitelty OK. Jos asiakasta ei löydy tai koodi on tuntematon, kenttään tulee Asiakasnumeroa ei löydy.

Käsittelyn jälkeen sivun yläreunassa näkyy tulos: kuinka monta ilmoitusta käsiteltiin ja kuinka monelle ei löytynyt asiakasta. Alla on jokaisen ilmoituksen rivi. Jos ilmoituksia on yli 200, näytetään 200 ensimmäistä.

Asiakkaan tiedot muuttuvat käsittelyssä, ja muutokset tallentuvat asiakkaan muutoslokiin käyttäjällä "(vastaanottoilmoitus)". Voit tarkistaa muutokset asiakaskortin Muutosloki-osiosta.

**Virhetilanteet.** Jos ilmoitukseen ei löydy asiakasta käsitelle ilmoitus manuaalisesti alla olevan ohjeen mukaan.

## Manuaalinen käsittely virhetilanteessa

Tarvittaessa **päivitetään asiakkaan** IBAN/BIC tiedot asiakaskortin **Laskutustietoihin** manuaalisesti virheen tapahtuessa. Näet, että vastaanottoilmoitus on jäänyt virheeseen, kun **Käsitelty info** -sarakkeessa lukee joitain muuta kuin Käsitelty OK.

**Esimerkki:** Alla olevassa tapauksessa *Testaaja Teemu* on tehnyt verkkomaksuvaltuutuksen (KOODI = ADD). 

Valtuutusta ei ole pystytty liittämään asiakaskorttiin, koska asiakasnumero on ollut virheellinen.  

Menettele seuraavasti:

1)  **Etsi asiakas** esimerkiksi nimen perusteella.
2) **Avaa asiakkaan asiakaskortti** 
3) **Kopioi IBAN- ja BIC-tiedot** vastaanottoilmoituksesta asiakkaan laskutustietoihin.
4) **Vaihda laskujen toimitustavaksi** **VERKKOLASKU**
5) **Tallenna** muutokset.
6) **Merkitse** sitten ilmoitus käsitellyksi kirjoittamalla vastaanottoilmoituksen **Käsitelty info** -kenttään esimerkiksi *Käsitelty manuaalisesti OK.*

Seuraava lasku lähetetään asiakkaalle **verkkolaskuna**, olettaen että asiakas on syöttänyt tiedot oikein.