---
sidebar_position: 3
---

<!--  # Perintä

## Yleiset periaatteet

- Palvelun roolit:
    - TaikaTilaus (Asiakaspalvelu): Vastaa ohjelmistosta, tietokannasta ja automaatiosta.
    - Asiakas/Perintätoimisto: Vastaa rekisterin sisällöstä ja perintäprosessin päätöksistä, mukaan lukien perintäkulujen ja ohimaksujen käsittely.
- GDPR-vaatimukset: TaikaTilaus toimii tietojen käsittelijänä, ja asiakkaalla tai lehdellä on vastuu tallennetuista tiedoista.

## Prosessin vaiheet ja ohjeet

### Vaihe 1: Maksamattomien laskujen käsittely ja katkaisukäsittely
- Ennen perintään siirtämistä:
    - Tarkista, että laskut (MaMu #1 tai MaMu #2) ovat maksamattomia.
    - Poista laskut, jotka on jo siirretty perintään.
- Katkaisukäsittely:
    - Katkaise tilaus ja hyvitä alkuperäinen lasku.
    - Luo uusi loppulasku käyttäen jaettuja lehtiä.
    - Aktivoi katkaisukäsittely automaattisesti asiakaskohtaisten määrittelyjen mukaisesti.
    - Lehti päättää itse katkaisukäsittelyn käytöstä.

### Vaihe 2: Katkaisukäsittelyn jälkeiset toimenpiteet
- Kirjanpidon ohitus-/osasuoritukset:
    - Lehti tai tilitoimisto hoitaa ohitus- tai osasuoritusten kirjaamisen.
    - Varmista, että mahdolliset ohitus- tai osasuoritukset kirjataan oikein ennen perintään siirtoa.

### Vaihe 3: Perintä
- Perintäprosessin aktivointi:
    - TaikaTilaus/asiakaspalvelu siirtää laskut perintään:
        - Hyvitetään laskut.
        - Asetetaan katkaisupäivä kuukauden päähän.
        - Muutetaan laskujen tila "SIIRRETTY PERINTÄÄN".
    - Asiakas päättää perinnän käytöstä ja tekee sopimuksen halutun perintätoimiston kanssa.
    - Asiakas seuraa ja käsittelee erääntyneet laskut.
- Perintätoimiston ohjeet:
    - Käsittele oikein maksetut viitesuoritukset.
    - Ilmoita ohisuoritukset ja varmista, ettei hyvitettyihin laskuihin liitetä myöhempiä suorituksia.
    - Ilmoita asiakas ohjeiden mukaisesti perintätoimistolle viitteettömät maksutiedot ja osasuoritukset.

### Vaihe 4: Suoritusten hallinta ja tilauksien päivitys
- Suoritusten käsittely:
    - Toimi asiakaskohtaisen AsPa-sopimuksen mukaisesti.
    - Asiakas päättää, miten tilauksia käsitellään perinnän päätyttyä (jatketaan vanhaa tilausta tai luodaan uusi).
    - Päivitä tarvittaessa tilauksen tiedot ja ohjeista asiakasta muutoksista.

### Vaihe 5: Tilausten käsittely ja ohimaksujen hallinta
- Ohimaksujen käsittely:
    - Ilmoita ohimaksut perintätoimistolle sovitulla tavalla.
    - Merkitse ohimaksut uudelle laskulle (kopio alkuperäisestä laskusta).
    - Asiakkaan tulee huolehtia, että perintäkulut kirjataan oikein, vaikka ohimaksu tapahtuisi.
- Osasuoritukset:
    - Luo kopio alkuperäisestä laskusta ja kirjaa osasuoritus erikseen.
    - Merkitse tilille, jolle maksu on saapunut, maksupäivämäärä ja maksettu summa.
    - Seuraa osasuorituksia kirjaamalla ne erilliseen seurantataulukkoon (esim. maksajan nimi, tilausnumero, laskunumero, laskun summa, maksettu osamäärä ja jäljellä oleva summa).

### Vaihe 6: Raportointi
- Raporttien laatiminen:
    - Tuota automaattiset ja räätälöidyt raportit kirjanpitoa varten.
    - Raportoi perintään siirretyt laskut ja perintätoimiston tekemät toimenpiteet asiakalle säännöllisesti (esim. kuukausittain).

## Erityistilanteet ja muut ohjeet

### Perintäaineistojen koonti

- Ilman katkaisukäsittelyä käytettäessä (MaMu #1 tai #2):
    - Hae erääntyneet maksumuistutuslaskut oikean maksumuodon mukaisesti.
    - Varmista listojen oikeellisuus ennen kaikkien laskujen valintaa.
    - Klikkaa "Siirrä perintään" -painiketta.
- Katkaisukäsittelyä käyttäessä:
    - Hae erääntyneet loppulaskut, joiden tila on "Erääntynyt" ja tyyppi "TOIMITETUT".
    - Varmis ta laskujen oikeellisuus ennen perintään siirtoa.
    - Klikkaa "Siirrä perintään" -painiketta.

### Ohimaksujen ja osasuoritusten merkinnät

- Ohimaksu:
    - Jos tilaaja maksaa alkuperäisen laskun suoraan, ilmoita ohimaksusta perintätoimistolle.
    - Kopioi alkuperäinen lasku ja liitä saapunut ohimaksu uudelle laskulle.
    - Ilmoita ohimaksun tiedot perintätoimistolle ja kirjaa ne kirjanpitoon.
- Osasuoritukset:
    - Luo kopio alkuperäisestä laskusta ja lisää uusi osasuoritus.
    - Kirjaa tilin tiedot, maksupäivä, osamäärä sekä mahdollinen jäljellä oleva summa.
    - Varmista, että osasuoritukset näkyvät oikein laskun suorituksissa ja summatiedoissa.

### Luottotappioiden hallinta

- Luottotappioiksi kirjattavat laskut:
    - Mikäli lasku jää perimättä (esim. alle 10,00 €), kirjaa lasku luottotappioksi.
    - Käytä ohjeistettuja tilejä (Kassa-, myynti- ja kulutilit) luottotappiokirjauksissa.

### Poikkeustapaukset

- Aiheettomiksi päätettävät laskut:
    - Kirjaa asiakkaan ohjeiden mukaisesti, esimerkiksi muuttamalla laskun tilaa luottotappioksi.
    - Jos tilaus on perintään siirron yhteydessä katkaistu, älä muuta sitä, vaan luo tarvittaessa uusi tilaus.
- Asiakaskohtaiset ohjeet:
    - Noudata asiakkaan ohjeita laskutuksen ja perinnän suhteen (esim. erikoismääritykset MaMu #1/#2, ohimaksujen käsittely tai perintäaineiston lähetysaikataulu).
    - Huolehdi, että kaikki muutostoiveet kirjataan ja laskutetaan erikseen lisätyönä. -->