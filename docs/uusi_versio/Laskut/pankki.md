---
sidebar_position: 5
title: Pankki
description: Pankki uuden version Laskut-valikossa.
---

# Pankki

**Pankki**-sivulla näet, mitkä pankkiaineistot on tuotu järjestelmään, ja voit tuoda pankin viiteaineiston (viitemaksut) käsin. Avaa sivu yläreunan päävalikosta valitsemalla **Laskut → Pankki.**

Lähes kaikki pankkiaineistot tuodaan järjestelmään yöllä automaattisesti. Sivulla voit tarkistaa tuotujen aineistojen tulokset ja tuoda aineiston käsin, jos automaattinen tuonti on epäonnnistunut.

Sivulla on kaksi välilehteä:

- **Lisätyt aineistot:** tuodut pankkiaineistot ja niiden raportit.
- **Lisää aineisto:** pankin viiteaineiston tuonti käsin.

## Lisätyt aineistot

Välilehdellä on lista tuoduista pankkiaineistoista, uusin tuonti ensin. Listassa on oletuksena seuraavat sarakkeet:

| Sarake | Sisältö |
|---|---|
| **ID** | Aineiston tunniste. |
| **Aineiston päiväys** | Pankin ilmoittama aineiston päivä. |
| **Tuonnin aikaleima** | Milloin aineisto tuotiin järjestelmään. |
| **Pankki** | Pankki, jolta aineisto on. |
| **Tiedoston nimi** | Tuodun tiedoston nimi. |
| **Aineiston tyyppi** | Esimerkiksi Viitemaksut. |
| **Kaikki** | Aineiston käsiteltyjen viitemaksujen määrä. |
| **Virheelliset** | Virheellisten maksujen määrät kolmena lukuna (katso alla). |
| **Koko aineisto** | Tiedoston rivien määrä. |

Voit lajitella listaa napsauttamalla yksittäistä sarakeotsikkoa, selata sivuja listan yläreunasta, valita näytettävät sarakkeet **Sarakkeet**-painikkeella ja viedä koko listan **Export**-valikosta.

### Virheelliset-sarake

Sarakkeessa on kolme lukua kauttaviivalla erotettuna, esimerkiksi **2/-/1**. Viiva tarkoittaa nollaa. Luvut ovat järjestyksessä:

1. maksut, joille ei löytynyt laskua viitenumerolla,
2. maksut, joissa summa ei täsmää ja lasku on yhä maksamatta (yli 0 €),
3. maksut, joissa summa ei täsmää ja laskun maksamatta oleva summa on 0 €.

Kun vie hiiren sarakeotsikon päälle, näet saman selityksen.

Virheelliset maksut käsitellään **Suoritukset**-sivulla.

### Aineiston raportit

Napsauta luvun kohdalla olevaa linkkiä, niin se aukeaa ikkunaan:

- **Kaikki:** raportti kaikista käsitellyistä viitemaksuista.
- **Virheelliset:** raportti maksuista, joita ei saatu kohdistettua.
- **Koko aineisto:** pankin tiedoston rivit sellaisenaan.

Napsauta **Tulosta**, jos haluat tulostaa raportin, tai **Sulje**, kun haluat palata listaan.

## Lisää aineisto

Tällä välilehdellä tuot pankin viiteaineiston käsin.

1. Valitse **Pankin viiteaineisto (viitemaksut)** -kentässä tiedosto koneeltasi. Hyväksytyt tiedostotyypit ovat .txt, .dat, .nda ja .ktl. Tiedosto saa olla enintään 20 Mt.
2. Valitse tarvittaessa **Testiajo**. Silloin aineisto käsitellään ja raportoidaan, mutta mitään ei tallenneta.
3. Napsauta **Tuo pankkiaineisto sisään** (tai testiajolla **Tuo pankkiaineisto testinä**).
4. Kun tuot aineiston oikeasti, vahvista tuonti.

Tee ensin testiajo, kun tuot aineiston ensimmäistä kertaa tai et ole varma tiedostosta. Näet raportista, miten maksut kohdistuisivat.

### Mitä tuonti tekee

- **Pankki ja pankkitili tunnistetaan aineiston tilinumerosta.** Sinun ei tarvitse valita pankkia. Jos aineistossa on tilinumero, jota järjestelmä ei tunne, tai tilejä usealta pankilta, tuonti keskeytyy virheeseen eikä mitään tallenneta. Ota silloin yhteyttä tukeen, koska uusi tili täytyy lisätä järjestelmään.
- **Maksut tallennetaan suorituksiksi ja kohdistetaan laskuun.** Jokainen viitemaksu kohdistetaan laskuun samoin kuin Suoritukset-sivulla toiminnolla Tuo suoritus sisään: jos summa täsmää, tehdään tiliöinnit ja lasku kuitataan maksetuksi.
- **Jo tuotuja maksuja ei tuoda uudelleen.** Maksu, jolla on jo suoritus samalla arkistointitunnuksella ja kirjauspäivällä, ohitetaan. Voit siis tuoda saman tiedoston turvallisesti uudelleen.
- **Raportit tallentuvat aineiston mukana.** Ne näkyvät Lisätyt aineistot -välilehdellä.

### Tuonnin tulos

Kun tuonti on valmis, sivulla näkyy tulos. Jos tuonti ei onnistu, sivu kertoo syyn punaisella. Onnistuneen tuonnin yhteenvedossa kerrotaan viitemaksujen määrä ja se, kuinka monta maksua

- kohdistettiin ja lasku kuitattiin maksetuksi,
- löysi laskun, mutta summa ei täsmää tai maksu on osasuoritus,
- ei löytänyt laskua,
- oli jo aiemmin tuotu.

Napsauta **Kaikki suoritukset, Virheelliset suoritukset tai Pankkiaineisto**, niin saat raportin näkyviin. 