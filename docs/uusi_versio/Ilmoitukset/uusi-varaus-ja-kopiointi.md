---
sidebar_position: 3
title: Uusi varaus ja kopiointi
description: Lisää uusi varaus -ikkuna (julkaisut, online-kanavien alku- ja loppupäivä, vaihtoilmoituksen julkaisupäivä, asiakasalennus, jaettu aineisto), tyhjät varaukset ja varauksen kopiointi.
---

# Uusi varaus ja kopiointi

Uuden ilmoitusvarauksen voi tehdä kolmella tavalla:

- **Lisää uusi varaus** -ikkunassa [Ilmoitukset-listalla](./ilmoitukset-lista.md): yksi tai useampi varaus kerralla, asiakkaalle tai ilman asiakasta. Ks. alla.
- [Ilmoitusvarauslomakkeella](./ilmoitusvaraus.md): valitse listalla asiakas ja napsauta **Lisää varaus**, tai napsauta [asiakaskortin](../Asiakkaat/asiakaskortti/index.md) Ilmoitusvaraukset / myynnit -osiossa **+ Lisää varaus**.
- kopioimalla olemassa olevan varauksen. Ks. [Varauksen kopiointi](#varauksen-kopiointi).

## Lisää uusi varaus {#lisaa-uusi-varaus}

Avaa ikkuna napsauttamalla [Ilmoitukset-listan](./ilmoitukset-lista.md) hakurivillä **Lisää uusi varaus**. Ikkunassa voit luoda varauksia ilman asiakasta (tyhjiä varauksia) tai suoraan asiakkaalle.

1. Valitse **Kanava**. Jos olet rajannut listan yhteen kanavaan, se on valittu valmiiksi.
2. Valitse **Tuote**.
3. Valitse ajankohta kanavan mukaan:
   - **lehti ja muut julkaisukanavat:** valitse yksi tai useampi julkaisu **Julkaisut (ilmestymispäivä)** -listalta. Listalla ovat julkaisut, jotka ilmestyvät vasta tämän päivän jälkeen. Julkaisu poistuu listalta ilmestymispäivän alkaessa kello 00.00. Esimerkiksi keskiviikkona ilmestyvä lehti ei ole enää valittavissa keskiviikkona, vaan se poistuu listalta tiistain ja keskiviikon välisenä yönä. **Näytä vanhat** näyttää myös nämä julkaisut.
   - **netti, radio ja ilmoitustaulu:** anna **Alkupäivä** ja **Loppupäivä**. Loppupäivä ei voi olla ennen alkupäivää.
   - **vaihtoilmoitus:** anna **Julkaisupäivä**.
4. Anna **Määrä per julkaisu** (1–100). Netti-, radio-, ilmoitustaulu- ja vaihtoilmoituskanavalla kenttä on **Määrä**, ja se kertoo luotavien varausten lukumäärän.
5. Valitse halutessasi asiakas napsauttamalla **Valitse asiakas**.
6. Anna halutessasi alennus. Ks. [Alennus](#alennus).
7. Napsauta **Luo N varausta**.

Kun luot vain yhden varauksen, voit napsauttaa **Luo varaus ja siirry [varauslomakkeelle](./ilmoitusvaraus.md)**, niin varaus avautuu heti [Ilmoitusvarauslomakkeelle](./ilmoitusvaraus.md).

Koko ja hinnat tulevat tuotteelta. Muut tiedot, kuten aineistot ja lisätiedot, annetaan [varauslomakkeella](./ilmoitusvaraus.md).

### Asiakas

Asiakas on valinnainen.

- **Asiakkaan kanssa** varaukset liitetään asiakkaalle heti, ja tila päätellään kuten uudella varauksella. Julkaisun kanssa tila on EI_AINEISTOA.
- **Ilman asiakasta** syntyy tyhjiä varauksia tilassa ALUSTAVA. Ks. [Tyhjät varaukset](#tyhjat-varaukset).

Poista valittu asiakas napsauttamalla **Poista**.

Jos asiakkaalla on myyntikielto, ikkunassa näkyy punainen viesti, eikä varauksia voi luoda.

### Alennus

- **Asiakasalennus**: näkyy, kun valitulla asiakkaalla on tuotteeseen ja kanavaan sopivia alennussääntöjä. Tarkimmin sopiva sääntö valitaan valmiiksi, ja sen prosentti viedään **Alennus %** -kenttään. Ennen tuotteen valintaa listalla ovat vain kaikkia tuotteita koskevat säännöt. Asiakkaan, tuotteen tai kanavan vaihto laskee listan uudelleen.
- **Alennus % (valinnainen)**: alennusprosentti 0–100. Jos muutat sitä käsin, asiakasalennukseksi tulee *Käsin annettu*.

Kun annat alennuksen useaan julkaisuun, valitse alennuksen kohde:

- **Kaikille varauksille**: jokainen luotu varaus saa alennuksen.
- **Toistoalennus (valitusta julkaisusta lähtien)**: valitse alkava julkaisu. Alennus annetaan valitusta julkaisusta alkaen kaikille sitä myöhemmin ilmestyville valituille julkaisuille.

Netti-, radio-, ilmoitustaulu- ja vaihtoilmoituskanavalla alennuksen kohdetta ei valita.

Euroalennusta (Alennus EUR) ei anneta tässä ikkunassa. Anna se tarvittaessa [varauslomakkeella](./ilmoitusvaraus.md).

### Jaettu aineisto

Kun varauksia syntyy vähintään kaksi (julkaisut × määrä), ikkunassa on **Jaettu aineisto** -valinta, oletuksena päällä. Silloin varauksilla on yksi yhteinen aineisto: kun aineisto lisätään yhdelle varaukselle, se lisätään kaikille ryhmän tuleville varauksille. Valmis ilmoitus on aina varauskohtainen.

### Saatavuus ja ilmoituspaikat

Jos ilmoituspaikoille on asetettu enimmäismäärät, julkaisun kohdalla näkyy paikan tilanne, ja täysi julkaisu näkyy punaisena. Jos tuotteen saatavuus tai ilmoituspaikan raja ylittyisi, ikkunassa on varoitus. Luotaessa kysytään **Luo silti** / Peruuta. Määrä per julkaisu otetaan huomioon.

Netti-, radio-, ilmoitustaulu- ja vaihtoilmoitusvarauksilla saatavuutta ja ilmoituspaikkoja ei tarkisteta.

## Tyhjät varaukset {#tyhjat-varaukset}

Tyhjä varaus on varaus ilman asiakasta ja myyntiä. Tyhjillä varauksilla lisätään inventaariota eli vapaita ilmoituspaikkoja julkaisuun. Ne liitetään asiakkaalle, kun paikka myydään.

- Tyhjä varaus on tilassa ALUSTAVA.
- Listalla tyhjän varauksen myynti-, asiakas- ja myyjäsarakkeet ovat tyhjiä.
- Vapaa haku ja *Näytä vain asiakkaan varaukset* eivät näytä tyhjiä varauksia.
- Lomakkeella otsikkona on *Tyhjä varaus (ei asiakasta)* ja myyntinumeron tilalla *ei myyntiä*. Tallennus ei luo myyntiä.

### Tyhjien varausten liittäminen asiakkaalle

1. Avaa [Ilmoitukset-listalla](./ilmoitukset-lista.md) **Lisähakuehdot** ja napsauta **Valitse asiakas**.
2. Poista ruksi kohdasta **Näytä vain asiakkaan varaukset**, jotta myös tyhjät varaukset näkyvät listalla.
3. Valitse listalla tyhjät varaukset rivin alun valintaruuduilla.
4. Napsauta **Liitä valitut tyhjät varaukset asiakkaalle**.

Jokainen varaus liitetään asiakkaalle omalla myynnillään. Tila, hinnat, myyjä ja laskutustapa säilyvät. Varaukset, joilla on jo myynti tai maksaja, ohitetaan.

## Varauksen kopiointi {#varauksen-kopiointi}

Kopioi varaus, kun sama ilmoitus julkaistaan uudelleen, esimerkiksi toistuvassa ilmoituksessa tai toisessa lehdessä.

Avaa kopiointi-ikkuna:

- [varauslomakkeella](./ilmoitusvaraus.md) napsauttamalla **Kopioi**, tai
- [Ilmoitukset-listalla](./ilmoitukset-lista.md) valitsemalla yksi varaus ja **Valituille → Kopioi ilmoitusvaraus**.

Ikkunan otsikkona on *Kopioi ilmoitusvaraus N*.

### Kopiointi samaan kanavaan

1. Jätä **Kanava**-valinnaksi varauksen kanava (merkintä *sama kuin varauksella*).
2. Valitse julkaisut **Julkaisupäivät**-listalta. Listalla ovat tulevat julkaisut. **Näytä vanhat** näyttää myös menneet.
3. Valitse **Aineisto**: **Ei aineistoa**, **Kopioi myös aineisto** tai **Liitä samaan jaettuun aineistoon**. Ks. [Aineisto](#aineisto-ja-jaettu-aineisto).
4. Napsauta **Kopioi N julkaisulle**.

Jokaiselle valitulle julkaisulle luodaan oma varaus samoilla tiedoilla. Vain julkaisu, sen päivät ja tila muuttuvat, ja tila päätellään kuten uudella varauksella.

Jos et valitse julkaisua, tehdään yksi kopio samalle julkaisulle, ja siirryt suoraan kopioon. Sen tila on ALUSTAVA.

Kopiointi kertoo tuloksen ikkunassa, ja **Avaa varaus N** -painikkeilla avaat luodut varaukset.

### Kopiointi toiseen kanavaan

Valitse **Kanava**-valikosta toinen kanava, esimerkiksi toinen lehti. Tuote, ilmoitusosasto ja hinta ovat kanavakohtaisia, joten valitse ne uudelle kanavalle:

- **Tuote** (pakollinen)
- **Ilmoitusosasto** tai *Ei osastoa*
- **Hinta**: *Sama hinta kuin alkuperäisellä varauksella* tai *Uuden tuotteen hinta*.

Valitse lisäksi julkaisut, jotka ovat toiselle kanavalle pakollisia. Muut tiedot kopioidaan sellaisenaan. Aineiston käsittelijä tulee uudelta tuotteelta, ja yhteislehtivalinnat jätetään pois.

### Netti, radio, ilmoitustaulu ja vaihtoilmoitus

Kun kopion kanava on netti, radio tai ilmoitustaulu, julkaisulistan tilalla ovat **Alkupäivä** ja **Loppupäivä**. Kopio tehdään annetulle jaksolle ilman julkaisua.

Vaihtoilmoituskanavalla julkaisulistan tilalla on **Julkaisupäivä**, ja kopio tehdään valitulle päivälle.

Samassa kanavassa päivät ovat valinnaisia: jos et anna niitä, tehdään yksi kopio samoilla päivillä, ja siirryt suoraan kopioon. Toiseen kanavaan kopioitaessa päivät ovat pakollisia.

### Aineisto ja jaettu aineisto {#aineisto-ja-jaettu-aineisto}

Kopioi-ikkunassa valitset, mitä aineistolle tehdään. Voit valita vain yhden vaihtoehdon. Jokaisen vaihtoehdon alla on lyhyt ohje, ja **?**-painike avaa tarkemman selityksen.

| Valinta | Mitä kopioille tapahtuu |
|---|---|
| **Ei aineistoa** | Kopiot saavat tyhjän aineiston. Kopioilla ei ole valmista ilmoitusta eikä aineistotiedostoja. |
| **Kopioi myös aineisto** | Jokainen kopio saa omat kopiot alkuperäisen varauksen uusimmasta valmiista ilmoituksesta ja kaikista aineistotiedostoista. Kopioita voi muokata erikseen. |
| **Liitä samaan jaettuun aineistoon** | Kopiot käyttävät alkuperäisen varauksen jaettua aineistoa. Kun aineisto lisätään tai korvataan yhdellä varauksella, se muuttuu kaikille ryhmän tuleville varauksille. Kopiot saavat vain jaetut tiedostot, ei varauksen omia tiedostoja. |

Oletus on **Liitä samaan jaettuun aineistoon**, kun alkuperäinen varaus kuuluu jo jaettuun aineistoon (esimerkiksi toistuva ilmoitus). Muuten oletus on **Ei aineistoa**.

Jos alkuperäinen varaus ei ole jaetussa aineistossa ja valitset **Liitä samaan jaettuun aineistoon**, alkuperäisestä ja kopioista tehdään uusi jaettu aineisto. Valinta toimii myös toiseen kanavaan kopioitaessa, kun sama mainos julkaistaan useassa lehdessä.

**[Microsoft 365 -aineistotuotantoa](../asetukset/muut-asetukset/microsoft-365.md) käyttävillä asiakkailla:**

- **Liitä samaan jaettuun aineistoon**: kopiot käyttävät alkuperäisen varauksen materiaalia ja sen InDesign-tiedostoa. Kun taittaja vie materiaalista uuden PDF:n, se tulee kaikille materiaalin tuleville varauksille.
- **Kopioi myös aineisto**: jokainen kopio saa oman materiaalinumeron, ja alkuperäisen materiaalin InDesign-tiedosto kopioidaan SharePointissa kunkin kopion tiedostoksi. Kopiota voi muokata erikseen, eikä muutos muuta alkuperäistä. Jos alkuperäisellä materiaalilla ei ole InDesign-tiedostoa, mitään ei kopioida.
- **Ei aineistoa**: kopio saa uuden materiaalinumeron ilman InDesign-tiedostoa.

### Mitä kopioidaan

- Kopio kuuluu samaan myyntiin kuin alkuperäinen varaus.
- Kaikki tiedot kopioidaan paitsi hyväksyntätiedot, lokit ja siirtotiedot.
- Tiedostot kopioidaan vain, kun valitset **Kopioi myös aineisto**. **Liitä samaan jaettuun aineistoon** -valinnalla kopiot saavat vain jaetut tiedostot.
- Asiakasalennuksen tiedot eivät kopioidu, mutta alennusprosentti ja euroalennus kopioituvat.
- Kopio saa oman laskutuspyyntönsä kuten uusi varaus.

Jos julkaisun ilmoituspaikka on täynnä, ikkunassa on varoitus, ja kopioitaessa kysytään vahvistus.
