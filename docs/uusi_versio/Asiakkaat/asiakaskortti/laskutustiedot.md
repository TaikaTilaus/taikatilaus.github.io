---
sidebar_position: 4
title: Laskutustiedot
---

# Laskutustiedot

**Laskutustiedot**-välilehdellä ylläpidetään asiakkaan laskun toimitustapaa, verkkolasku- ja pankkitietoja sekä laskutukseen liittyviä ehtoja ja poikkeuksia. Välilehti on jaettu osioihin.

Osa kentistä näkyy vain tietyille asiakkaille tai vain tietyssä sovelluksen tilassa. Ylläpitäjä voi lisäksi piilottaa kenttiä kohdassa [**Asetukset → Asiakkaan tietokentät**](/docs/uusi_versio/asetukset/asiakkaan-tietokentat).

## Laskun toimituksen tilarivi

Välilehden ylimpänä on tilarivi, joka näyttää yhdellä silmäyksellä, minne lasku lähtee valitulla toimitustavalla.

Rivin muoto on Laskun toimitus: TOIMITUSTAPA · osoite. Rivin tiedot riippuvat toimitustavasta:

| Toimitustapa | Rivillä näkyvä osoite |
|---|---|
| **SÄHKÖPOSTI** | Sähköpostilaskuosoite, jos se on kelvollinen. Muuten asiakkaan sähköposti. |
| **VERKKOLASKU** | Yrityksen verkkolaskuosoite tai OVT-tunnus sekä välittäjä. Tai kuluttajan IBAN, kun kyseessä on kuluttajan e-lasku. |
| **KIRJE** | Asiakkaan postiosoite. |

Rivin väri kertoo tilanteesta:

- **Sininen:** toimitus on kunnossa.
- **Keltainen:** toimitustapaa ei ole valittu.
- **Punainen:** tiedoissa on ongelma. Rivi kertoo ongelman, esimerkiksi Sähköposti puuttuu, Sähköposti virheellinen, Verkkolaskuosoite puuttuu tai Verkkolaskuosoite virheellinen. Ongelma on myös se, jos olet antanut sekä yrityksen verkkolaskuosoitteen että kuluttajan IBANin ja BICin. Jätä silloin vain toinen.

Jos asiakkaalle on liitetty ilmoituslaskujen maksaja (ks. Ilmoituslaskut), rivejä on kaksi: asiakkaan omat laskut ja ilmoituslaskut maksajan tiedoilla.

## Laskun toimitus

| Kenttä | Ohje |
|---|---|
| **Laskun toimitustapa** | Laskun toimitustapa: KIRJE, SÄHKÖPOSTI, VERKKOLASKU, TULOSTUS tai MUU. |
| **Laskun kieli** | Laskussa käytettävä kieli: Suomi, Englanti, Ruotsi tai Espanja. |
| **Sähköpostilaskuosoite** | Osoite, johon sähköpostilasku lähetetään. Jos kenttä on tyhjä tai osoite on virheellinen, lasku lähtee asiakkaan sähköpostiin ([Yhteystiedot](/docs/uusi_versio/Asiakkaat/asiakaskortti/yhteystiedot)-välilehti).
| **Koontilasku** | Jos kenttä on aktiivinen ja asiakkaalla on monta laskutuspyyntöä, niistä muodostetaan yksi koontilasku. |

## Verkkolasku

Osio näkyy, kun toimitustavaksi on valittu VERKKOLASKU tai kun osion kentissä on jo arvoja. Yrityksen ja yhteisön osio ja kuluttajan osio näytetään erikseen asiakastyypin mukaan. Jos osion kentissä on arvo, se näytetään asiakastyypistä riippumatta.

**Yrityksen verkkolasku** (yritykselle ja yhteisölle):

| Kenttä | Ohje |
|---|---|
| **Verkkolaskuosoite** | Asiakkaan verkkolaskuosoite. |
| **Välittäjätunnus** | Verkkolaskuvälittäjä valitaan valikosta. Valikossa on tyhjä vaihtoehto (ei välittäjää) ja aktiiviset välittäjät nimen ja tunnuksen kanssa. |
| **OVT-tunnus** | Asiakkaan OVT-tunnus. |

Jos kentässä on tunnus, joka ei ole aktiivisten välittäjien listalla, tunnus näytetään tekstinä ja sen vieressä on merkintä:

- **lakannut** (harmaa): välittäjä on listalla, mutta ei enää aktiivinen.
- **tuntematon tunnus** (keltainen): tunnusta ei löydy listalta lainkaan.

Napsauta Vaihda, niin valikko avautuu ja voit valita toisen välittäjän. Vanha, muuttamaton tunnus ei estä asiakkaan muiden tietojen tallentamista, mutta uuden tai muutetun tunnuksen on oltava aktiivinen.

**Kuluttajan e-lasku** (henkilölle):

| Kenttä | Ohje |
|---|---|
| **IBAN** | Asiakkaan tilinumero IBAN-muodossa. |
| **BIC** | Pankin BIC-tunnus. Kun IBAN on annettu, kentän alla näkyy pankin BIC-ehdotus. Napsauta *Käytä ehdotusta*, jos haluat ottaa sen käyttöön. Jos nykyinen BIC poikkeaa ehdotuksesta, siitä näytetään huomautus. |
| **Suoramaksu** | Suoramaksu on laskun maksutapa, jossa pankki veloittaa laskun summan asiakkaan tililtä automaattisesti eräpäivänä ilman verkkopankin käyttöä. Suoramaksun käyttöä varten asiakkaan verkkolaskutustiedot (IBAN ja BIC) pitää olla täytettynä.|

Kuluttajan IBAN, BIC ja suoramaksu luetaan automaattisesti pankin e-laskun vastaanottoilmoituksista ([Laskut → Vastaanottoilmoitukset](/docs/uusi_versio/Laskut/vastaanottoilmoitukset)). Jos vastaanottoilmoitus on virheellinen (esim. väärä asiakasnumero) pitää tiedot täytttää [asiakaskortille](/docs/uusi_versio/Asiakkaat/asiakaskortti) manuaalisesti.

## Laskun ehdot

| Kenttä | Ohje |
|---|---|
| **Maksuehto (päivää)** | Asiakkaan maksuehto päivinä. Oletuksena käytetään 14 päivää. |
| **Laskutusviite / sopimusnumero** | Asiakkaan laskutuksessa käytettävä viite tai sopimusnumero. |
| **Ale-% (tilaus)** | Asiakkaan tilausalennus prosentteina. Ilmoitusten hallinta sivustolla kentän nimi on Ilmoitusalennus-%. |
| **Ale-% (ilmoitus)** | Asiakkaan ilmoitusalennus prosentteina. Ei näy sivustolla, jossa on käytössä vain ilmoitusten hallinta. |

Kun alennussäännöt on otettu käyttöön, alennukset ovat [Alennukset](/docs/uusi_versio/Asiakkaat/asiakaskortti/alennukset)-välilehdellä, eikä Ale-%-kenttiä näytetä tässä osiossa. Ale-% (ilmoitus) näytetään silloin vain, jos kentässä on jo arvo.

## Ilmoituslaskut

Osio näkyy vain, kun järjestelmässä on käytössä ilmoitusten hallinta.

| Kenttä | Ohje |
|---|---|
| **Laskutusosoite toisesta asiakkaasta** | Voit liittää ilmoituslaskujen maksajaksi toisen asiakkaan napsauttamalla Liitä maksaja. Tällöin liitetystä asiakkaasta haetaan nimi-, osoite- ja verkkolaskutiedot sekä laskun toimitustapa. Poista poistaa liitoksen. Tämä koskee vain ilmoitusmyynnin laskuja. Tilauksissa eri maksaja liitetään tilaukseen. |
| **Ilmoituslaskujen laskutustapa** | Ilmoituslaskujen oletuslaskutustapa. Valitun tavan kuvaus näkyy valikon alla. |
| **Ilmoituslaskujen ALV-%** | Täytä vain, jos asiakkaan verokanta poikkeaa yleisestä 25,5 %:n verokannasta, esimerkiksi 0 % EU-yritysasiakkaalle (käännetty verovelvollisuus). Tilausten arvonlisävero tulee tuotteelta. |
| **Myyntikielto** | Syy, miksi asiakkaalle ei myydä, esimerkiksi huonot luottotiedot tai maksuhäiriöt. Jos kentässä on teksti, asiakkaalle ei voi luoda uusia ilmoitusvarauksia ja kentän teksti näytetään syynä. Jo tehtyihin varauksiin kielto ei vaikuta. Poista kielto tyhjentämällä kenttä ja tallentamalla. |

## Poikkeukset

| Kenttä | Ohje |
|---|---|
| **Ei laskutuslisää** | Asiakkaan laskuille ei lisätä laskutuslisiä, esimerkiksi kirjelaskutuslisää. |
| **Maksumuistutuskielto** | Asiakkaalle ei lähetetä maksumuistutuksia laskuista. |
