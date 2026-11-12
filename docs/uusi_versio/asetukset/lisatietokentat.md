---
sidebar_position: 5
description: Lisätietokentät — Uuden lisätietokentän lisääminen, Määritetyt kentät.
---

# Lisätietokentät

**Lisätietokentät**-sivulla voit luoda ja hallita asiakkaiden tietojen tallentamiseen käytettäviä vapaasti määriteltäviä kenttiä.

Tällä sivulla tehdyt muutokset vaikuttavat [asiakaskortin](/docs/uusi_versio/Asiakkaat/asiakaskortti) [**Lisäkentät**-välilehteen](/docs/uusi_versio/Asiakkaat/asiakaskortti/lisakentat).

Avaa sivu valitsemalla **Asetukset → Lisätietokentät**.

![Lisätietokentät-sivun yleisnäkymä](/img/versio2/lisatietokentat.png)

## Uuden lisätietokentän lisääminen {#uuden-lisatietokentan-lisaaminen}

1. Kirjoita kentän nimi **Nimi**-kenttään.
2. Tarkista automaattisesti muodostuva **Tekninen avain**.
3. Valitse kentässä käytettävä **Tietotyyppi**:
   - **Teksti**
   - **Kokonaisluku**
   - **Desimaaliluku**
   - **Päivämäärä**
   - **Kyllä/Ei** (valintaruutu)
   - **Valinta (lista)**: asiakaskortilla kenttä on pudotusvalikko. Kun valitset tämän tyypin, näkyviin tulee **Vaihtoehdot (yksi per rivi)** -kenttä. Kirjoita jokainen vaihtoehto omalle rivilleen.
4. Valitse tarvittaessa Pakollinen. Pakollisen kentän nimen perässä on [asiakaskortilla](/docs/uusi_versio/Asiakkaat/asiakaskortti) punainen tähti (*).
5. Napsauta **Lisää kenttä**.

Tekninen avain muodostetaan nimestä automaattisesti: kirjaimet muutetaan pieniksi, ääkköset (ä, ö, å) korvataan a:lla ja o:lla, välilyönnit alaviivoiksi ja muut merkit poistetaan. Voit muokata avainta ennen kuin napsautat **Lisää kenttä**. Jos avain on jo käytössä, lukee "Avain '…' on jo käytössä", eikä kenttää lisätä.

![Uuden lisätietokentän nimi-, avain- ja tietotyyppivalinnat](/img/versio2/lisatietokentat2.png)

## Määritetyt kentät

Sivun vasemmalla puolella näkyvät järjestelmään lisätyt kentät sekä niiden:

- nimi
- tekninen avain
- tietotyyppi
- pakollisuus.

Uusi kenttä lisätään listan loppuun. Lista on järjestetty lisäysjärjestykseen ja sen sisällä nimen mukaan. Kenttien järjestystä ei voi muuttaa tällä sivulla.

Lisätty kenttä tulee näkyviin [asiakaskortin](/docs/uusi_versio/Asiakkaat/asiakaskortti) [**Lisäkentät**](/docs/uusi_versio/Asiakkaat/asiakaskortti/lisakentat)-välilehdelle.

Voit poistaa kentän napsauttamalla sen rivillä olevaa **roskakorikuvaketta**.

:::warning HUOM!
Kentän poistaminen ei kysy vahvistusta. Poistettu kenttä piilotetaan eikä se enää näy asiakaskortilla eikä asiakashaussa. Kenttään tallennetut asiakkaiden arvot säilyvät kannassa, mutta niitä ei näytetä.
:::

![Määritettyjen lisätietokenttien luettelo](/img/versio2/lisatietokentat3.png)

### Missä lisätietokenttiä käytetään

- **Asiakaskortti:** kentät näkyvät asiakaskortin *Lisäkentät*-välilehdellä. Tyhjäksi jätetty arvo ei tallennu, ja kentän arvon tyhjentäminen poistaa aiemman arvon.
- **Asiakashaku:** kentät ovat valittavissa Asiakkaat-sivun lisähakuehdoiksi. Hakuehto noudattaa kentän tyyppiä: teksti, luku, päivämäärä tai Kyllä/Ei. Valinta (lista) -kenttä toimii tekstinä.

