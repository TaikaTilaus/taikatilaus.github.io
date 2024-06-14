---
sidebar_position: 7
---

# Haut

## Yleistä hauista

![Haut-välilehti](/img/ohjeet/haut.png)

**Haut**–välilehden kautta voidaan haettavia tietoja rajata
- Asiakashakuihin
- Tilaushakuihin

### Asiakashaku-ehdot

Asiakastietoja voidaan hakea valitsemalla hakukriteeri **Hakukenttä**-valikosta ja syöttämällä hakumerkkijonon (esim. Virtanen). Aktivoimalla **Hae vain asiakkaista huomioimatta tilauksia** –valinta jättää tilauksiin liittyvät hakukriteerit huomioimatta. **Hae vain ilmoitusasiakkaita** -kentän aktivoimalla voit hakea vain ilmoitusmyyntiasiakkaita.

![Haut-välilehti](/img/ohjeet/haut2.png)

## Tilausten hakuehdot

Tilauksia voi hakea:

- **Tilauksen statuksella** (esim. katkaistu, päättynyt, voimasssa) tietyllä aikavälillä (muista asettaa päivämäärät!)
- **Tilauksen sijoittumisella** (esim. ensimmäinen tilaus tuotteessa)
- **Tuoteryhmällä** (esim. Autolehti)
- **Tuoteella** (esim. Kestotilaus III)
- **Tilaustyyppillä** (Kesto tai Määräaikainen)
- **Maalla** (ns. kotimaa, ulkomaa)
- **Laskun toimitustavalla** (esim. kirje)
- **Tilauksen nimellä**
- **Myyjän nimellä**
- **Tilauksen katkaisun syyllä**

![Haut-välilehti](/img/ohjeet/haut3.png)

### Haun lisäkriteerit

![Haut-välilehti](/img/ohjeet/haut4.png)

Voit aktivoida hakuihin lisäkriteerejä, jotka karsivat haun tulokset vain lisäkriteerit täyttäviin asiakkaisiin/tilauksiin.
- **Ei markkinointiestoa** haetaan vain asiakkaita, joilla ei ole mitään markkinointiestoja aktivoituna
- **Ei puhelinmarkkinointiestoa** haetaan vain asiakkaita, joilla ei ole puhelinmarkkinointiestoa aktivoituna
- **Ei sähköpostimarkkinointiestoa** haetaan vain asiakkaita, joilla ei ole sähköpostimarkkinointiestoa aktivoituna
- **Ei estolistalaisia** haetaan vain asiakkaat, jotka eivät ole estolistalla
- **Ei kirjemarkkinointiestoa** haetaan vain asiakkatia, joilla ei ole kirjemarkkinointiestoa aktivoituna
- **Tuotteen hinta yli 0 euroa** tilaukseen liitetyn tuotteen hinta on yli 0 euroa
- **Tuotteen hinta 0 euroa** tilaukseen liitetyn tuotteen hinta on 0 euroa (esim. lehtien vapaakappaleet)
- **Sähköpostiosoite** asiakkaan tiedoista löytyy sähköpostiosoite
- **Tuotetyyppi vaihtunut** tilauksen tyyppi on vaihtunut (esim. digilehtitilaus on vaihtunut paperilehtitilaukseksi)
- **Edell. tilauksesta väh. 14vrk** saman lehden edellisen tilauksen päättymisestä on vähintään 14 vuorokautta
- **Tilaus lehtikohtaisesti** paperi ja digitilaukset samasta lehdestä tulkitaan samaksi tuotteeksi
- **Karsi tuotetta vaihtaneet** karsitaan tilaukset, joiden tyyppi on vaihtunut edellisestä tilauksesta
- **Näytä luodut laskut sekä laskutuspyynnöt** hakutuloksiin tulee näkyviin tilauksiin liittyvät laskut ja laskutuspyynnöt
- **Näytä haun muodostus (admin)** näytetään miten haku on muodostunut (haku ja siihen littyvät lisäehdot)

### Hakutuloksien jatkokäsittely

Hakutulokset voidaan listaukselta siirtää **[Leikepöydälle](/docs/ohjeet/yleiset_ominaisuudet/leikepoyta)** jatkokäsittelyä varten
- **Lisää tilaajat leikepöydälle** –painikkeesta
- **Lisää maksajat leikepöydälle** –painikkeesta

Hakutuloslistaukset voi viedä suoraan myös **Excel-taulukkoon** jatkokäsittelyä varten aktivoimalla **Tee Excel laajoilla/rajatuilla tiedoilla** –valinta ennen **Hae**-painikkeen klikkausta.

![Haut-välilehti](/img/ohjeet/haut5.png)

## Valmiit haut

![Haut-välilehti](/img/ohjeet/valmiithaut1.png)

**Haut**–välilehdellä voidaan tehdä myös erilaisia valmiita hakuja **Näytä valmiita haut** –painikkeen kautta.

**Valmiita hakulistauksia** voidaan hyödyntää esim. markkinoinnissa eri kohderyhmille (soitto- ja sähköpostilistat).

Muutamalla yläosan hakukriteereitä voidaan vaikuttaa myös **Valmiiden hakujen** hakuihin valittujen kriteerien mukaisesti
- Esim. **Katkaisun syy** –valikosta **voi valita yhden tai useamman** (ctrl –painikkeen käyttö valintaklikkauksen yhteydessä) ehdon, joka **poissulkee valitut** hakutuloslistaukselta
- Kyseisen valikon vaihtoehdot määritellään **[Asetukset / Muut asetukset](/docs/ohjeet/asetukset#muut-asetukset)** -näkymässä

![Haut-välilehti](/img/ohjeet/estot.png)

Aktivoimalla **Aseta markkinointiestovalinnat** -kentän hakuun ei tule mukaan asiakkaita, joille on aktivoitu markkinointikieltoja.

Muutamissa valmiissa hauissa ilmenee hitautta suuren tietomäärän takia.

![Haut-välilehti](/img/ohjeet/valmiithaut.png)

### Esimerkki valmiista hausta

**Sähköpostimarkkinointilista: Tilausten kulku päättynyt aikavälillä (määräaikainen tai katkaistu kestotilaus)** on käytettävissä entisten tilaajien sähköpostimarkkinointilistana

Hakukriteereinä mm.
- Tilaajat, joiden viimeisin tilaus on päättynyt aikavälillä x–y (tästä päivästä 4 vuotta taaksepäin)
- Ei estoa sähköpostimarkkinoinnille
- Sähköpostiosoite löytyy

Mahdollisuus estää tiettyjen peruutussyiden nouseminen listalle
- ESTE: Yrityksen/yhteisön toiminta päättyy
- ESTE: Sairas
- ESTE: Kuollut

Jokaiselle lehdelle/Tuoteryhmälle voi tulostaa oman listan

Haku voi koskea automaattisesti ajanjaksoa 4 vuotta sitten – tämä päivä (esim. 20.2.2017–19.2.2021), mutta päiviä pitää pystyä muuttamaan tarvittaessa

**Hakuehdot** tarkastetaan ja muutetaan tarpeen mukaan ja lopuksi klikataan uudelleen **Hae**-painiketta

![Haut-välilehti](/img/ohjeet/valmiithaut3.png)
*Valmiin haun Sähköpostimarkkinointilista: Tilausten kulku päättynyt aikavälillä (määräaikainen tai katkaistu kestotilaus) -hakuehdot.*