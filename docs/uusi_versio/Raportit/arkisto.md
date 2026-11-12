---
sidebar_position: 2
description: Arkisto — Arkistoidun raportin hakeminen, Arkistoitujen raporttien luettelo, Arkistoidun raportin avaaminen.
---

# Arkisto

![Raporttiarkiston yleisnäkymä](/img/versio2/arkisto.png)

**Arkisto**-sivulla voit tarkastella aiemmin arkistoituja raportteja ja viedä niiden tiedot haluamassasi muodossa.

Arkistoon tallennettu raportti sisältää tiedot sellaisina kuin ne olivat tallennushetkellä. Myöhemmät muutokset tilauksiin, varauksiin tai asiakkaisiin eivät muuta arkistoitua raporttia. Arkisto on eri asia kuin tallennettu haku: tallennettu haku **(Raportit → Kaikki raportit)** tallentaa vain hakuehdot ja antaa ajettaessa aina tuoreet tiedot.

Sivun yläreunan sininen ruutu kertoo, kuinka monta päivää raportit säilyvät, ja muistuttaa, että **Jatka**-painikkeella voi antaa raportille oman säilytyspäivän.

Avaa sivu päävalikosta valitsemalla **Raportit → Arkisto**.

## Arkistoidun raportin hakeminen

Kirjoita hakukenttään raportin nimi, tekijä tai ryhmä. Raporttiluettelo päivittyy automaattisesti kirjoittamisen aikana. Luettelossa ovat oletuksena uusimmat raportit ensin.

![Arkistoitujen raporttien hakukenttä](/img/versio2/arkisto-haku.png)

## Arkistoitujen raporttien luettelo

| Sarake | Sisältö |
|---|---|
| **Nimi** | Arkistoidun raportin nimi. Jos raportti on yksityinen, nimen perässä on merkintä **Yksityinen** (näkyy vain sinulle). |
| **Tekijä** | Raportin arkistoinut käyttäjä. |
| **Ryhmä** | Ryhmä, johon raportti kuuluu. |
| **Tallennettu** | Raportin tallennuspäivä ja -aika. |
| **Säilytetään asti** | Viimeinen päivä, jonka raportti säilyy arkistossa. Katso alla. |
| **Toiminnot** | Raportin avaaminen (Avaa), säilytysajan jatkaminen (Jatka) ja poistaminen (roskakorikuvake). |

Voit järjestää luetteloa napsauttamalla sarakeotsikkoa Nimi, Tekijä, Ryhmä tai Tallennettu. Otsikon vieressä oleva nuoli näyttää lajittelusuunnan.

## Säilytysaika ja sen jatkaminen

Arkistoitu raportti ei säily ikuisesti. Oletuksena raportti säilyy tietyn määrän päiviä tallennuksesta (tavallisesti 90 päivää, mutta asetus on asiakaskohtainen), minkä jälkeen se poistuu automaattisesti. **Säilytetään asti** -sarakkeessa näkyy viimeinen päivä, esimerkiksi 5.1.2027. Jos raportille on annettu oma päivä, perässä lukee "(jatkettu)". Jos raportti säilyy pysyvästi, sarakkeessa lukee "pysyvästi".

Säilytysaikaa voi jatkaa. **Jatka**-painike näkyy rivillä, jos olet raportin tallentaja. Pääkäyttäjä voi jatkaa myös julkisten raporttien säilytysaikaa. Yksityisen raportin aikaa voi muuttaa vain tallentaja.

1. Napsauta rivin **Jatka**-painiketta. Rivin alle avautuu Säilytä arkistossa -rivi.
2. Valitse **pysyvästi**, jos haluat säilyttää raportin, kunnes poistat sen itse. Muuten valitse päivämäärä kohdassa **tai asti**. Päivä ei voi olla menneisyydessä. Sivu ehdottaa nykyistä viimeistä päivää plus normaalia säilytysaikaa.
3. Napsauta **Tallenna**. Tallenna ei ole käytössä, jos päivää ei ole valittu eikä pysyvästi-valintaa.

**Palauta normaali** palauttaa raportin normaaliin säilytysaikaan, ja **Peruuta** sulkee rivin muuttamatta mitään. Jos muutos ei onnistu, koska raporttia ei löydy tai sinulla ei ole oikeutta muuttaa sitä, sivu ilmoittaa asiasta.

### Julkiset ja yksityiset raportit

Arkistoitaessa raportille valitaan **Näkyvyys**. Julkiset raportit näkyvät kaikille käyttäjille. Yksityiset näkyvät vain tallentajalle.

Voit järjestää luetteloa napsauttamalla yksittäistä sarakeotsikkoa. Otsikon vieressä oleva nuoli näyttää lajittelusuunnan.

![Arkistoitujen raporttien luettelo](/img/versio2/arkisto-luettelo.png)

## Arkistoidun raportin avaaminen

Avaa raportti napsauttamalla sen rivillä olevaa **Avaa**-painiketta. Raportti avautuu luettelon alle omaan korttiin, jonka otsikossa on raportin nimi ja tallennusajankohta. Avattu rivi korostuu luettelossa. Voit tarkastella raporttia ja viedä sen tiedot samoihin muotoihin kuin tuoreesta raportista: Tulosta, Kopioi, Sähköposti, PDF, Excel, CSV, JSON, HTML ja Parquet. Sulje raportti kortin oikean yläkulman rastista.

Avatun arkistoraportin tiedot eivät päivity. Jos haluat tuoreet tiedot, aja raportti uudelleen **s** -sivulta.

![Arkistoidun raportin avaaminen](/img/versio2/arkisto-avaa.png)

## Arkistoidun raportin poistaminen

Poista arkistoitu raportti napsauttamalla sen rivillä olevaa punaista **roskakorikuvaketta**.

Raportin poistaminen arkistosta ei poista raportin lähteenä olevia asiakas-, tilaus- tai laskutietoja järjestelmästä.

Poisto tapahtuu heti, ja ohjelma ei kysy vahvistusta. Poistettua raporttia ei voi palauttaa.

![Arkistoidun raportin poistaminen](/img/versio2/arkisto-poista.png)
