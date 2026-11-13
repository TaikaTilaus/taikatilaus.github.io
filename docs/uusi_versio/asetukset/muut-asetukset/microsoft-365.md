---
sidebar_position: 5
description: Microsoft 365 – yhteys SharePointiin, valmiiden ilmoitusten automaattinen tuonti, taittajien koneet, Avaa InDesignissa -linkki ja InDesign-pohja.
---

# Microsoft 365

Avaa sivu valitsemalla **Asetukset → Muut asetukset → Microsoft 365**. Sivu on vain pääkäyttäjille.

Sivulla määritetään ilmoitusten valmistus asiakkaan SharePointissa: TaikaTilauksen yhteys SharePointiin, valmiiden ilmoitusten automaattinen tuonti, taittajien koneiden polku ja **Avaa InDesignissa** -linkki sekä InDesign-pohja.

Ilmoitusten valmistus Microsoft 365:ssä otetaan asiakkaalle käyttöön erikseen. Jos se ei ole käytössä, sivun alussa on siitä ilmoitus. Ota yhteys TaikaTilauksen tukeen.

## Miten ilmoitusten valmistus toimii

- Jokaisella ilmoitusvarauksella on **materiaali**, jolla on oma **materiaalinumero**. Sama materiaali voi olla usealla varauksella, esimerkiksi toistuvassa ilmoituksessa.
- Materiaalin InDesign-tiedosto on SharePointissa materiaalinumeron mukaisessa kansiossa, esimerkiksi materiaalin 603953 tiedosto on `pr_admaterial/39/53/603953_.indd`.
- Taittaja tekee ilmoituksen InDesignissa ja vie valmiin PDF:n samaan kansioon.
- TaikaTilaus tuo PDF:n automaattisesti materiaalin varauksille valmiiksi ilmoitukseksi.

Varauksella materiaali näkyy kohdassa [Valmistettava materiaali](../../Ilmoitukset/ilmoitusvaraus.md#valmistettava-materiaali).

## Käyttöönotto

Sivun alussa on käyttöönoton tilanne. Vihreä merkki kertoo, että vaihe on tehty.

| Vaihe | Mitä tehdään |
|---|---|
| **1. Yhteys Microsoft 365:een** | Asiakkaan Microsoft 365 -pääkäyttäjä hyväksyy TaikaTilauksen sovelluksen ja antaa sille oikeuden ilmoitusaineistojen sivustoon. Sen jälkeen yhteys testataan. |
| **2. Valmiit ilmoitukset OneDrivesta** | Valmiiden ilmoitusten automaattinen tuonti kytketään päälle. |
| **3. Taittajien koneet** | Määritetään polku, jossa kirjasto näkyy taittajien koneilla, ja **Avaa InDesignissa** -linkki. |

## 1. Yhteys Microsoft 365:een

TaikaTilaus käyttää SharePointia omalla sovelluksellaan **TaikaTilaus ilmoitusaineistot**. Sovellus saa oikeuden vain niihin sivustoihin, joihin asiakas sen erikseen antaa.

### 1a. Hyväksyntä

1. Napsauta **Luo hyväksyntälinkki**.
2. Kopioi linkki ja lähetä se asiakkaan Microsoft 365 -pääkäyttäjälle (Global Administrator tai Privileged Role Administrator). Linkki on voimassa 14 päivää.
3. Pääkäyttäjä hyväksyy sovelluksen linkistä. Microsoft-tenantti tallentuu sivulle automaattisesti, ja kohdassa lukee *Hyväksytty*.

### 1b. Sivusto-oikeus

Asiakkaan pääkäyttäjä antaa sovellukselle kirjoitusoikeuden ilmoitusaineistojen sivustoon Microsoftin Graph Explorerissa. Tarvittavat kyselyt ovat sivulla valmiina. Kopioi ne pääkäyttäjälle.

### 1c. Sivusto, kirjasto ja yhteystesti

1. Kirjoita **Sivuston osoite**, esimerkiksi `https://<yritys>.sharepoint.com/sites/Ilmoitusaineistot`.
2. Kirjoita **Kansio kirjastossa**, jos materiaalit ovat kirjaston alikansiossa (esimerkiksi `pr_admaterial`). Tyhjä tarkoittaa kirjaston juurta.
3. Jos sivustolla on useampi kirjasto, valitse **Kirjasto**.
4. Napsauta **Testaa yhteys**.

Kun testi onnistuu, sivusto ja kirjasto lukitaan. Niitä ei voi vaihtaa, ennen kuin yhteys poistetaan (**Poista yhteys**).

## 2. Valmiit ilmoitukset OneDrivesta

Kytke päälle **Tuo valmiit ilmoitukset automaattisesti**. Kytkin on käytettävissä, kun vaihe 1 on tehty.

Kun taittaja tallentaa PDF:n materiaalin kansioon nimellä `<materiaalinumero>_.pdf` (InDesignin oletusnimi) tai `<materiaalinumero>_pdf.pdf`:

- TaikaTilaus lisää sen muutaman minuutin kuluessa valmiiksi ilmoitukseksi jokaiselle materiaalin varaukselle, joka ilmestyy tänään tai myöhemmin.
- Varaus merkitään hyväksytyksi, ja Planner saa ilmoituksen seuraavassa siirrossa.
- Uusi PDF korvaa tulevien varausten aiemman valmiin ilmoituksen. Jo ilmestyneitä varauksia ei muuteta.
- Valmiin ilmoituksen voi aina korvata käsin varauksella.

Kytkimen alla näkyvät tuonnin tiedot: **Seurattu alkaen**, **Viimeksi tarkistettu**, **Tänään tuotu**, **Virheitä tänään** ja tarvittaessa **Viimeisin virhe**. **Tarkista nyt** tarkistaa uudet PDF:t heti. Kohdassa *Viimeisimmät tuonnit* näet tiedostot, varaukset, tilan ja tallentajan.

## 3. Taittajien koneet

### Kirjaston polku koneilla

Kirjoita **Polku**, jossa kirjasto näkyy taittajien koneilla, esimerkiksi `T:\`, ja napsauta **Tallenna**. Polun pitää olla kaikilla koneilla sama, jotta InDesign-tiedostojen kuvalinkit toimivat kaikilla. Polku näkyy varauksella InDesign-tiedoston polussa.

### Avaa InDesignissa -linkki

Linkki lisää varauksen *Valmistettava materiaali* -kohtaan painikkeet **Avaa InDesignissa** ja **Näytä kansiossa**. Silloin myös Ilmoitukset-listan materiaalisiru avaa tiedoston InDesignissa. Painikkeet avaavat koneelle synkronoidun kopion SharePoint-tiedostosta, ja tallennus palaa OneDriven kautta SharePointiin.

Linkki vaatii, että jokaiselle taittajan koneelle asennetaan kerran pieni käsittelijä. Käsittelijä ottaa linkistä vain materiaalinumeron, eikä se voi avata muita tiedostoja. Asennus tehdään taittajan omalla tunnuksella, eikä järjestelmänvalvojan oikeuksia tarvita.

1. **Synkronoi kirjasto koneelle:** avaa kirjasto selaimessa ja valitse **Synkronoi**. Älä valitse kirjastolle *Säilytä aina tällä laitteella*, koska tiedostot ladataan koneelle vasta avattaessa.
2. **Lataa asennustiedosto** tällä sivulla ja anna se taittajalle. Tiedoston nimessä on asiakkaan tunnus, esimerkiksi `asenna-taikatilaus-linkki-<TUNNUS>.cmd`.
3. Taittaja kaksoisnapsauttaa tiedostoa. Jos Windows kysyy, suoritetaanko tiedosto, valitse **Suorita** (SmartScreen: **Lisätietoja** → **Suorita silti**). Asennus liittää aseman (esimerkiksi `T:`) synkronoituun kirjastoon niin, että asema palautuu jokaisella kirjautumisella, ja tarkistaa lopuksi, että materiaalikansio löytyy.
4. Taittaja kokeilee varaukselta **Avaa InDesignissa**. Selain kysyy ensimmäisellä kerralla luvan. Valitse **Salli aina**.

Kun koneet on asennettu, kytke päälle **Näytä Avaa InDesignissa -painikkeet**. Ilman käsittelijää painike ei tee koneella mitään, joten kytke se päälle vasta asennusten jälkeen.

:::caution
- Asennusta ei saa ajaa järjestelmänvalvojana: silloin asema ei näy taittajan tavalliselle tunnukselle.
- Asennus näkyy Windowsin käynnistysohjelmissa nimellä **Subst Utility**. Se palauttaa aseman jokaisella kirjautumisella, joten sitä ei saa poistaa käytöstä. Jos se on poistettu, asennuksen uudelleenajo palauttaa sen.
:::

Poisto: komentokehotteessa asennustiedoston kansiossa `asenna-taikatilaus-linkki-<TUNNUS>.cmd -Poista`. Asennus kirjoittaa lokin `%LOCALAPPDATA%\TaikaTilaus\asennus.log` ja linkin käyttö tiedoston `avaa.log` samaan kansioon. Liitä ne tukipyyntöön, jos linkki ei toimi.

**Näytä varauksella Avaa kansio SharePointissa -linkki** (oletuksena päällä) näyttää varauksella linkin, joka avaa materiaalin kansion SharePointissa selaimessa. Sen voi kytkeä pois, kun kaikki taittajat avaavat tiedostot **Avaa InDesignissa** -painikkeella.

## InDesign-pohja

Lataa asiakkaan InDesign-pohja (.indd, enintään 20 Mt). Kun varaukselle tehdään **Uusi materiaali**, pohja kopioidaan SharePointiin materiaalin nimellä, ja taittaja aloittaa siitä. Materiaalille, jolla ei vielä ole InDesign-tiedostoa, tiedoston voi luoda varauksella painikkeella **Luo InDesign-tiedosto pohjasta**.

Uusi pohja korvaa nykyisen. **Poista pohja** poistaa sen. Olemassa olevia InDesign-tiedostoja ei koskaan korvata pohjalla.
