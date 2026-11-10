---
sidebar_label: Yleiskatsaus
slug: /uusi_versio/Asiakkaat/asiakaskortti
title: Asiakaskortti
description: Asiakaskortin avaaminen ja ohjeet.
---

# Asiakaskortti

![Asiakaskortin yleisnäkymä](/img/versio2/asiakaskortti2.png)

Asiakaskortilla voit tarkastella ja muokata asiakkaan tietoja sekä siirtyä asiakkaan tilauksiin ja laskuihin.

Avaa asiakaskortti napsauttamalla asiakasrivin **kynäkuvaketta** tai **uusi välilehti** -kuvaketta. Rivin napsauttaminen avaa ensin asiakkaan esikatselun, josta pääset muokkaamaan tietoja. 

![Asiakaskortin avaaminen asiakasluettelosta](/img/versio2/asiakaskortti.png)

## Asiakkaan tiedot

Asiakaskortin yläreunassa näkyvät asiakastyypin kuvake, asiakasnumero, asiakkaan nimi ja mahdollinen yritys sekä osasto. Jos asiakas on merkitty kuolleeksi, nimen vieressä näkyy Kuollut-merkki. Oikeassa reunassa näkyy asiakkaan KontaktiID.

Nimen vieressä olevasta **keräilylistakuvakkeesta** voit lisätä asiakkaan [keräilylistalle](/docs/uusi_versio/Etusivu/kerailylista).

Asiakkaan tiedot on jaettu välilehdille:

Asiakkaan tiedot on jaettu välilehdille:

- [**Yhteenveto**](/docs/uusi_versio/Asiakkaat/asiakaskortti/yhteenveto)
- [**Yhteystiedot**](/docs/uusi_versio/Asiakkaat/asiakaskortti/yhteystiedot)
- [**Laskutustiedot**](/docs/uusi_versio/Asiakkaat/asiakaskortti/laskutustiedot)
- [**Alennukset**](/docs/uusi_versio/Asiakkaat/asiakaskortti/alennukset)
- [**Markkinointitiedot**](/docs/uusi_versio/Asiakkaat/asiakaskortti/markkinointitiedot)
- [**Ryhmittely**](/docs/uusi_versio/Asiakkaat/asiakaskortti/ryhmittely)
- [**Jakelupoikkeukset**](/docs/uusi_versio/Asiakkaat/asiakaskortti/jakelupoikkeukset)
- [**Lisäkentät**](/docs/uusi_versio/Asiakkaat/asiakaskortti/lisakentat)
- [**Käyttäjätunnukset**](/docs/uusi_versio/Asiakkaat/asiakaskortti/kayttajatunnukset)
- [**Muutosloki**](/docs/uusi_versio/Asiakkaat/asiakaskortti/muutosloki)

Kaikki välilehdet eivät ole kaikilla käytössä:

- Yhteenveto näkyy tallennetulla asiakkaalla. Siinä näet esimerkiksi asiakkuuden keston ja maksut. Mitä siinä näytetään, riippuu sovelluksen tilasta (tilaushallinta, ilmoitushallinta, molemmat).
- Alennukset näkyy, kun alennussäännöt on otettu käyttöön.
- Jakelupoikkeukset ei näy ilmoitushallintasivustoilla.
- Käyttäjätunnukset näkyy, kun asiakkaiden käyttäjätunnukset on otettu käyttöön.

Ryhmittely, Lisäkentät, Käyttäjätunnukset ja Muutosloki -välilehtien nimen vieressä oleva numero kertoo kohteiden määrän. [Jakelupoikkeukset](/docs/uusi_versio/Asiakkaat/asiakaskortti/jakelupoikkeukset)-välilehden vieressä oleva sininen merkki kertoo, että asiakkaalla on väliaikainen osoite.

![Asiakaskortin tiedot ja välilehdet](/img/versio2/asiakaskortti3.png)

## Tallentaminen ja asiakaskortin sulkeminen {#asiakaskortin-sulkeminen}

Asiakaskortin alareunassa on seuraavat painikkeet:

| Painike | Toiminto |
|---|---|
| **Tallenna** | Tallentaa muutokset ja jättää kortin avoimeksi. Kortin yläpuolelle tulee ilmoitus *Kontakti tallennettu.* |
| **Tallenna ja sulje** | Tallentaa muutokset ja sulkee asiakaskortin. |
| **Peruuta** | Hylkää tallentamattomat muutokset ja palaa esikatselunäkymään. |
| **Sulje välilehti** | Näkyy vain, kun kortti on avattu uuteen välilehteen. Sulkee selainvälilehden. |

Jos olet muuttanut tietoja eikä niitä ole tallennettu, painikkeiden vieressä näkyy keltainen muistutus *Tietoja on muutettu – paina Tallenna.*

**Pakolliset kentät.** Jos pakollinen kenttä on tyhjä, tallennus ei onnistu. Kortin yläpuolella näkyy ilmoitus **Pakollisia tietoja puuttuu ja puuttuvien kenttien nimet**. Täytä kentät ja tallenna uudelleen.

### Tallentamattomat muutokset

Jos yrität poistua kortilta tallentamatta muutoksia, järjestelmä varoittaa.

**Kun poistut kortilta muualle.** Jos napsautat kortilta jotain linkkiä, esimerkiksi tilausta, laskua tai valikon kohtaa, näkyy ikkuna **Tallentamattomia muutoksia**. Ikkuna kysyy, mitä haluat tehdä:

- **Tallenna:** tallentaa muutokset ja jatkaa valitsemaasi kohteeseen. Jos tallennus epäonnistuu, ikkuna jää auki ja näyttää virheen.
- **Hylkää muutokset:** jatkaa valittuun kohteeseen tallentamatta. Muutokset menetetään.
- **Peruuta:** jää asiakaskortille ja säilyttää muutokset, jotta voit jatkaa muokkausta.

**Kun suljet välilehden.** Jos napsautat **Sulje välilehti**, ja kortilla on tallentamattomia muutoksia, näkyy ikkuna *Tallentamattomia muutoksia ja kysymys Suljetaanko välilehti silti?*

- **Peruuta:** peruu sulkemisen ja palauttaa sinut asiakaskortille. Voit jatkaa muokkaamista tai tallentaa muutokset **Tallenna**-painikkeella.
- **Sulje tallentamatta:** sulkee välilehden ja hylkää tallentamattomat muutokset.

Jos suljet välilehden selaimen omalla sulkemispainikkeella, järjestelmä ei varoita tallentamattomista muutoksista.

![Varoitus asiakaskortin tallentamattomista muutoksista](/img/versio2/sulje-asiakas2.png)
