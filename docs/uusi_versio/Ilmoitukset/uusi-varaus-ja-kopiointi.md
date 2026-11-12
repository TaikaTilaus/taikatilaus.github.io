---
sidebar_position: 3
title: Uusi varaus ja kopiointi
description: Lisää uusi varaus -ikkuna (julkaisut, online-kanavien alku- ja loppupäivä, vaihtoilmoituksen julkaisupäivä, asiakasalennus, jaettu aineisto), tyhjät varaukset ja varauksen kopiointi.
---

# Uusi varaus ja kopiointi

Uuden ilmoitusvarauksen voi tehdä kolmella tavalla:

- **Lisää uusi varaus** -ikkunassa Ilmoitukset-listalla: yksi tai useampi varaus kerralla, asiakkaalle tai ilman asiakasta. Ks. alla.
- [Ilmoitusvarauslomakkeella](./ilmoitusvaraus.md): valitse listalla asiakas ja napsauta **Lisää varaus**, tai napsauta asiakaskortin Ilmoitusvaraukset / myynnit -osiossa **+ Lisää varaus**.
- kopioimalla olemassa olevan varauksen. Ks. [Varauksen kopiointi](#varauksen-kopiointi).

## Lisää uusi varaus {#lisaa-uusi-varaus}

Avaa ikkuna napsauttamalla [Ilmoitukset-listan](./ilmoitukset-lista.md) hakurivillä **Lisää uusi varaus**. Ikkunassa voit luoda varauksia ilman asiakasta (tyhjiä varauksia) tai suoraan asiakkaalle.

1. Valitse **Kanava**. Jos olet rajannut listan yhteen kanavaan, se on valittu valmiiksi.
2. Valitse **Tuote**.
3. Valitse ajankohta kanavan mukaan:
   - **lehti ja muut julkaisukanavat:** valitse yksi tai useampi julkaisu **Julkaisut (ilmestymispäivä)** -listalta. Listalla ovat tästä päivästä eteenpäin ilmestyvät julkaisut. **Näytä vanhat** näyttää myös menneet.
   - **netti, radio ja ilmoitustaulu:** anna **Alkupäivä** ja **Loppupäivä**. Loppupäivä ei voi olla ennen alkupäivää.
   - **vaihtoilmoitus:** anna **Julkaisupäivä**.
4. Anna **Määrä per julkaisu** (1–100). Netti-, radio-, ilmoitustaulu- ja vaihtoilmoituskanavalla kenttä on **Määrä**, ja se kertoo luotavien varausten lukumäärän.
5. Valitse halutessasi asiakas napsauttamalla **Valitse asiakas**.
6. Anna halutessasi alennus. Ks. [Alennus](#alennus).
7. Napsauta **Luo N varausta**.

Kun luot vain yhden varauksen, voit napsauttaa **Luo varaus ja siirry varauslomakkeelle**, niin varaus avautuu heti [Ilmoitusvarauslomakkeelle](./ilmoitusvaraus.md).

Koko ja hinnat tulevat tuotteelta. Muut tiedot, kuten aineistot ja lisätiedot, annetaan varauslomakkeella.

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

Euroalennusta (Alennus EUR) ei anneta tässä ikkunassa. Anna se tarvittaessa varauslomakkeella.

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

1. Avaa Ilmoitukset-listalla **Lisähakuehdot** ja napsauta **Valitse asiakas**.
2. Valitse listalla tyhjät varaukset rivin alun valintaruuduilla.
3. Napsauta **Liitä valitut tyhjät varaukset asiakkaalle**.

Jokainen varaus liitetään asiakkaalle omalla myynnillään. Tila, hinnat, myyjä ja laskutustapa säilyvät. Varaukset, joilla on jo myynti tai maksaja, ohitetaan.

## Varauksen kopiointi {#varauksen-kopiointi}

Kopioi varaus, kun sama ilmoitus julkaistaan uudelleen, esimerkiksi toistuvassa ilmoituksessa tai toisessa lehdessä.

Avaa kopiointi-ikkuna:

- varauslomakkeella napsauttamalla **Kopioi**, tai
- Ilmoitukset-listalla valitsemalla yksi varaus ja **Valituille → Kopioi ilmoitusvaraus**.

Ikkunan otsikkona on *Kopioi ilmoitusvaraus N*.

### Kopiointi samaan kanavaan

1. Jätä **Kanava**-valinnaksi varauksen kanava (merkintä *sama kuin varauksella*).
2. Valitse julkaisut **Julkaisupäivät**-listalta. Listalla ovat tulevat julkaisut. **Näytä vanhat** näyttää myös menneet.
3. Valitse tarvittaessa **Kopioi myös aineisto** ja **Liitä samaan jaettuun aineistoon**. Ks. alla.
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

### Aineisto ja jaettu aineisto

- **Kopioi myös aineisto (valmis ilmoitus ja aineistotiedostot):** kopio saa alkuperäisen varauksen uusimman valmiin ilmoituksen ja kaikki aineistotiedostot omilla nimillään. Aineisto kopioidaan vain, kun valitset julkaisut tai annat päivät.
- **Liitä samaan jaettuun aineistoon:** kopiot liitetään alkuperäisen varauksen jaettuun aineistoon ja saavat sen jaetut tiedostot. Myöhemmin lisätty aineisto menee kaikille tuleville varauksille. Jos alkuperäinen varaus ei ole jaetussa aineistossa, siitä ja kopioista tehdään uusi jaettu aineisto. Valinta on oletuksena päällä, kun alkuperäinen varaus on jo jaetussa aineistossa. Se toimii myös toiseen kanavaan kopioitaessa ("sama mainos moneen lehteen").

Kun molemmat on valittu, jaetut tiedostot tulevat jaetusta aineistosta ja muut tiedostot kopioidaan.

### Mitä kopioidaan

- Kopio kuuluu samaan myyntiin kuin alkuperäinen varaus.
- Kaikki tiedot kopioidaan paitsi hyväksyntätiedot, lokit ja siirtotiedot.
- Tiedostot kopioidaan vain **Kopioi myös aineisto** -valinnalla.
- Asiakasalennuksen tiedot eivät kopioidu, mutta alennusprosentti ja euroalennus kopioituvat.
- Kopio saa oman laskutuspyyntönsä kuten uusi varaus.

Jos julkaisun ilmoituspaikka on täynnä, ikkunassa on varoitus, ja kopioitaessa kysytään vahvistus.
