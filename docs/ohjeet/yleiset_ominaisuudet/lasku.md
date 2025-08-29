---
sidebar_position: 2
---

# Laskut ja laskutus

Koko laskutusprosessin voi halutessaan **automatisoida** TaikaTilaus-ohjelmalla, mutta laskuja on myös mahdollista käsitellä ja lähettää manuaalisesti.

## Yleistä laskuista

### Yksittäisen asiakkaan laskujen käsittely

Asiakkaan yksittäisiä laskuja pääsee muokkaamaan **Asiakastiedot**-näkymän **Laskut**-osiossa painamalla laskun **numeroa**. 

![Asiakastiedot - Laskut](/img/ohjeet/laskut1.png)

![Asiakastiedot - Laskut](/img/ohjeet/laskut4.png)
*Laskun numeroa klikkaamalla aukeaa näkymä, josta näkyy kaikki laskun tiedot.*

Näet laskun muodon (lasku / hyvityslasku) ja tilan (avoin, erääntynyt, hyvitetty, hyvitys) laskun numeron vieressä.

![Asiakaskortti](/img/ohjeet/lasku-muodot.png)

Valitun yksittäisen laskun tietoja pääsee muokkaamaan joko **Kynä**-painikkeesta

1. **Laskun tietoja**
 
Voit muuttaa:
- laskun päivää
- eräpäivää
- maksuehtoa
- huomautusaikaa
- viivästyskorkoa
- viitettä
- laskun tyyppiä
- tarkennetta
- toimitustapaa
- laskun lähetyspäivämäärää
- lisätietoja
    - ulkoiset lisätiedot tulostuvat laskulle
    - sisäiset lisätiedot näkyvät vain järjestelmässä, eivät asiakkaalle
- asettaa laskun perintäkieltoon

2. **Maksajan tietoja**

![laskun tiedot](/img/ohjeet/laskut2.png)

tai sarakkeiden numeroita klikattaessa

4. Tuotteiden tietoja (TuoteriviID)

![Laskut - Tuotteen käsittely](/img/ohjeet/laskut3.png)

5. Tiliöinnin tietoja (TiliöintiID)

![Laskut - Tuotteen käsittely](/img/ohjeet/laskut5.png)

Tarvittaessa voi **hakea** tai **lisätä uuden** maksajan ja tuotteen, sekä **lisätä** yksittäisiä tiliöintejä ja suorituksia (esim. käteismaksu)

- Mikäli laskulla ei ole suorituksia, ei Lisää tiliöinti laskulle -painiketta näytetä
- Laskutusajossa luotavien laskujen (tuoterivien) tiliöinnit (L) tehdään automaattisesti, mutta niitä voi tarvittaessa muuttaa (ennen laskun lähettämistä)
- Tai **liittää** suorituksia, jotka eivät ole automaattisesti kohdentuneet pankkiaineiston käsittelyn yhteydessä (esim. viitevirheet)

#### **Laskun käsittelyyn** liittyvät toiminnot ovat:

- **Luo hyvityslasku** (**Poista hyvityslasku-liitos**, jos laskusta on jo tehty hyvityslasku)
- **Luo Maksumuistutus #1** ja/tai **Luo Maksumuistutus #2** (jos lasku on erääntynyt)
- **Luo laskusta kopio** - luo laskusta kopion kaikilla tiedoilla
- **Luo laskusta kopio ilman maksajan tietoja**
- **Tulosta lasku** - luo laskusta PDF:n, jonka voi sitten tulostaa 
- **Lähetä lasku sähköpostilla** - voit lähettää laskun heti asiakastiedoissa olevaan sähköpostiosoitteeseen
- **Siirrä lasku toiselle tilaukselle** - siirrä lasku toiselle tilaukselle antamalla sen tilausnumero
- **Suoramaksuilmoitus** - voit lähettää laskusta ilmoituksen suoraveloituksella maksaville asiakkaille tai tulostaa ilmoituksen
- **Luo maksun palautus** - toimintoa käytetään, kun maksettu lasku halutaan hyvittää ja **[saldo-ominaisuus](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo)** on käytössä. Luo palautuslaskun koko laskun summasta ja asiakkaan tietoihin tiliöidään laskun summa palautettavaksi. Jos haluat hyvittää **vain osan laskusta**, esim. kun tilaaja katkaisee tilauksen ja halutaan laskuttaa vain toimitetut lehdet, käytä **[Maksetun tilauksen katkaisu](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo#maksetun-tilauksen-katkaisu)** -toimintoa.

![Laskut - Tuotteen käsittely](/img/ohjeet/laskut6.png)

### Avoimen laskun palauttaminen laskutuspyynnöksi

Mikäli tulee tarve palauttaa **Avoin**–tilassa oleva uusi lasku takaisin Laskutuspyynnöksi (esim. tapauksessa, jossa pyyntö on luotu laskuksi liian aikaisin)

- Tämä jo luotu lasku tulee erikseen **Hyvittää**
- Sen purkamisesta tehdään erillinen **tukipyyntö**, jossa asiakastuki palauttaa laskutuspyynnöt laskun luontia edeltäneeseen tilaan, jotta lasku voidaan luoda uudelleen

### Laskun tulostaminen

Voi olla tarve tulostaa lasku esim. konttoriasioinnin yhteydessä
- Asiakas maksaa tilauksen/ilmoituksen paikan päällä
- Asiakas tarvitsee alkuperäisen laskun kopiona kirjanpitoa varten

1. **Uuden tilauksen laskutuspyynnöstä** voi luoda asiakkaalle laskun/kuitin **Tee laskutuspyynnöstä lasku** –painikkeen kautta

![Tilaus - Laskutuspyynnöt](/img/ohjeet/laskut7.png)

Siirtymällä **Laskut** –näkymään ja hakemalla kyseisen laskun (esim. asiakasnumerolla) listaukselle ja klikkaamalla laskurivillä

-  näkyvää **Tulostin**–ikonia tai

![Laskut](/img/ohjeet/laskut8.png)

- aktivoimalla ensimmäisessä sarakkeessa olevan **valintakentän** ja painamalla **Tulosta PDF** –painiketta

![Laskut](/img/ohjeet/laskut9.png)

**Lataa PDF** –ikoni ilmestyy näkymän yläpalkkiin (Palaa–ikonin viereen) ja sitä klikkaamalla tulostettava tiedosto ilmestyy selaimen ladattuihin tiedoistoihin

![Laskut](/img/ohjeet/laskut11.png)

2. **Aiemman laskun** voi tulostaa asiakkaalle siirtymällä **Laskut**–näkymään ja hakemalla kyseisen laskun (esim. asiakasnumerolla) ja klikkaamalla sen numeroa

Valitusta laskusta saa tulostettua
- kuitin **Tulosta lasku** –painikkeesta
- alkuperäisen Laskun **Tulosta lasku LASKU-muodossa** –painikkeesta (valinta tulee näkyviin maksumuistutuksen luomisen jälkeen)

![Laskut](/img/ohjeet/laskut10.png)

### Suoramaksu verkkopankissa

Asiakkaille, jotka haluavat maksaa laskunsa **Suoramaksuna** verkkopankin kautta, määritellään asiakaskortille

- Laskun toimitustavaksi **VERKKOLASKU**
- Aktivoidaan **Suoramaksu**–kenttä

![Laskut](/img/ohjeet/laskut12.png)

Laskujen **lähetyksen yhteydessä**

- Suoraveloitettaville verkkomaksuille **luodaan kirjeviestit**, joissa kerrotaan automaattisesti tehtävästä suoraveloituksesta
- Kirje **lähetetään samalla ajolla** kuin itse laskukin
- Tieto kirjelähetyksestä merkitään **Laskun lähetetty info** –kenttään lokitietona (esim. Itella / Suoramaksuviesti..)

![Laskut](/img/ohjeet/laskut14.png)

Suoramaksun ilmoitusviestin voi myös tulostaa ja lähettää erikseen **Suoramaksuilmoitus**-painikkeesta avautuvien vaihtoehtojen avulla:
- **Tulosta suoramaksuilmoitus** -painikkeesta
- **Lähetä suoramaksuilmoitus kirjeenä** –painikkeesta

![Laskut](/img/ohjeet/laskut13.png)

### Lisää lasku

Tarvittaessa voi **lisätä uuden laskun** esim. oheistuotteiden myynteihin liittyen

Lisäyksen voi tehdä klikkaamalla **Lisää lasku / Lisää uusi lasku** -painiketta
- Asiakkaan tietojen **Laskut**–osion kautta, jolloin asiakkaan tiedot kopioituvat automaattisesti uudelle laskulle

![Laskut](/img/ohjeet/laskut15.png)

- **Laskut**-välilehdellä

![Laskut](/img/ohjeet/laskut16.png)

Näkymään avautuu **tyhjä laskulomake**, johon

- lisätään/muutetaan tiedot tarpeen mukaan ja lasku tallennetaan
- Huomioi, että laskulle luodaan numero vasta kun laskun lähetys on sallittu
- Uusi lasku siis luodaan ja tallennetaan (ensimmäisellä kerralla) Laskunumerolla 0

![Laskut](/img/ohjeet/laskut17.png)

Laskulle **lisätään perustiedot** ja maksajan tiedot, jotka voi

- hakea olemassa olevista asiakastiedoista **Hae maksajaa** –painikkeesta tai
- lisäämällä uuden asiakkuuden **Lisää uusi maksaja** –painikkeen kautta

![Laskut](/img/ohjeet/laskut18.png)

Laskutettava tuote/tuotteet lisätään **Lisää tuote** –painikkeen avulla.

![Laskut](/img/ohjeet/laskut19.png)

Avautuu näkymä kaikista ohjelmaan tallennetuista tuotteista. Tuotteita voi hakea hakukenttien avulle. Tuote valitaan laskulle painamalla halutun tuotteen **tuotenumeroa**.

![Laskut](/img/ohjeet/laskut20.png)

### Saldon siirtäminen asiakkaalle maksetusta laskusta

**Saldoa** kertyy asiakkaalle esimerkiksi siinä tapauksessa, että asiakas on **maksanut** jonkun tilauksen, mutta haluaa sittenkin **vaihtaa** sen toiseen tilaustuotteeseen. Kun tilaus katkaistaan, tulee asiakkaalle hyvityksenä tilauksen **saamattomista lehdistä** tietty euromäärä. Tämä määrä siirtyy asiakkaan saldoon, jota voidaan käytettää tulevien laskujen maksamiseen.

Saldon siirto asiakkaan tiedoille tehdään tilauksen tiedoista, painamalla **Maksetun tilauksen katkaisu** -painiketta. Katkaisun jälkeen saldo tulee asiakkaan tietoihin näkyviin. Saldoa käytetään automaattisesti seuraavan laskun maksamiseen.

![Tilauksen tiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo2.png)
*Saldon siirto asiakkaalle tehdään tilauksen tiedoista.*

![Asiakaskortti - Laskutiedot](/img/ohjeet/saldo4.png)
*Saldo näkyy asiakaskortilla laskutustietojen alla.*

## Laskujen luonti

### Yleistä laskujen luonnista

![Laskutus](/img/ohjeet/laskutus.png)

**Laskujen luonti** –välilehdellä käsitellään laskutuspyynnöistä luotavat laskut ja voidaan tarkastella niitä ennen niiden muodostamista varsinaisiksi laskuiksi.

Rajaavia hakukriteereitä voi aktivoida tarpeen mukaan mm.

- **Hae vain ajopäivän laskutuspyynnöt** -kenttä - haku tuo vain laskutuspyynnöt, jotka saa luoda ajopäivänä

Voit myös määrittää laskujen luontimääritykset mm.

- **Tee laskut yksittäisinä** -kentän aktivoimalla - kaikki laskut luodaan yksittäisinä huolimatta maksajan Koontilasku-määrityksestä
- Syöttämällä laskulle kirjattava **laskun päivämäärä** ja laskun **eräpäivä**
- Laskuerän luontitunnus - kaikilla samaan aikaan ajetuilla laskuilla on sama luontitunnus, jonka voit asettaa itse tai käyttää valmiiksi luotua tunnusta

![Laskutus](/img/ohjeet/laskutus-luont.png)

Laskutuspyyntöjen listaus aloitetaan lisäämällä tarvittavat hakukriteerit ja klikkaamalla **Hae laskutuspyynnöt** –painiketta

**Laske summat maksajittain** -kentän aktivoimalla listaukseen tulee näkyviin laskutuspyyntöjen summat maksajittain.

Aktivoimalla **Näytä peruutetun peruutussumma** -kentän listauksessa näytetään laskutettava summa peruutetun tilauksen jo toimitetuista lehdistä.

Varsinainen laskutusajo tehdään klikkaamalla **Suorita laskutusajo** –painiketta, joka näytetään haun suorittamisen jälkeen. Laskutusajo voidaan myös automatisoida tapahtuvaksi tiettynä päivänä/ajankohtana.

![Laskutus](/img/ohjeet/laskutus8.png)

### Tilausmyynnin laskutusajon haut

![Laskutus](/img/ohjeet/laskutus2.png)

Voit hakea tilausmyynnin laskutuspyyntöjä:

- Tuoteryhmällä ja Tilaustuotteella
- Maksajan asiakasnumerolla
- Summalla

![Laskutus](/img/ohjeet/laskutus4.png)

### Ilmoitusmyynnin laskutusajon haut

![Laskutus](/img/ohjeet/laskutus3.png)

Voit hakea ilmoitusmyynnin laskutuspyyntöjä:

- Myyjällä
- Kanavalla
- Julkaisulla
- Maksajan asiakasnumerolla
- Varausnumerolla
- Summalla

![Laskutus](/img/ohjeet/laskutus5.png)

### Laskutusajon tarkistus ja suoritus

Laskutuspyyntöjen listaus aloitetaan lisäämällä tarvittavat hakukriteerit ja klikkaamalla **Hae laskutuspyynnöt** –painiketta.

Ennen varsinaista Laskutuspyyntöjen hakua voi halutessaan aktivoida välitarkistusta varten **Korosta jos laskutuspyynnön ja tuotteen hinta eroaa** -kentän, joka korostaa hakulistauksella näkyvän laskutuspyynnön summan punaisella, mikäli se ja tuotteen verollinen oletushinta eroavat toisistaan. Näin on esimerkiksi tapauksissa, joissa tilauksille on asetettu alennusprosentti.

![Laskutus](/img/ohjeet/laskutus6.png)

Hakutuloksien yläpuolella näkyy yhteenvetotiedot löytyneistä ja mahdollisista virheellisistä laskutuspyynnöistä.

![Laskutus](/img/ohjeet/laskutus7.png)

**Virheelliset tiedot** näkyvät listauksella **punaisella**. Tiedot tulee korjata manuaalisesti asiakastietoihin ennen varsinaisen ajon suorittamista. 

- esim. puuttuvat KIRJE / katuosoitteet, SÄHKÖPOSTI / spostiosoitteet jne.

Virheitä voi hakea listauksesta painamalla CTRL + F ja kirjoittamalla hakukenttään virhe.

![Laskutus](/img/ohjeet/laskutus9.png)

**Esikatselu laskutuksesta** -valinnan ollessa aktivoituna haetaan laskujen tiedot listalle, mutta niistä ei vielä tehdä varsinaisia laskuja tietokantaan. Voit ladata laskujen tiedot PDF:lle painamalla vihreää **Lataa PDF** -painiketta.

![Laskutus](/img/ohjeet/laskutus10.png)

**Varsinainen laskutusajo** suoritetaan

- Poistamalla valinta **Esikatselu laskutuksesta** -kentästä
- klikkaamalla **Suorita laskutusajo** –painiketta

![Laskutus](/img/ohjeet/laskutus11.png)

Lopuksi näet yhteenvedon laskutusajosta ja voit ladata tiedot PDF:lle.

![Laskutus](/img/ohjeet/laskutus12.png)

## Laskujen lähetys

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys.png)
*Laskujen lähetys -välilehti.*

### Laskujen haku ja suodatus välilehdellä

**Laskujen lähetys** –välilehdellä tarkastellaan laskuja ennen niiden lähetystä matkaan eri kanavien kautta (esim. KIRJE, SPOSTI, VERKKOLASKU). Laskujen tuoterivit saat näkymään aktivoimalla **Näytä tuoterivit** -kentän.

Laskut voidaan hakea suodatettuna halutulla

- toimituspäivällä
- toimitustavalla

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys2.png)

Painamalla **Lisähakuehdot**-painiketta saat näkyviin lisää hakuehtoja, jolla voit suodattaa laskuja. Lisähakuehtoja ovat:

- Laskun muoto (esim. lasku, maksumuistutus, hyvityslasku)
- Aikaväli, jolloin lasku on luotu
- Laskun tyyppi (esim. TILAUS, ILMOITUS)
- Luontitunnus - kaikilla samaan aikaan ajetuilla laskuilla on sama luontitunnus, voit siis hakea tällä ehdolla esim. juuri ajamasi laskut
- Laskun summa
- Teksti tuoterivissä - esim. tilauksen saajan nimi, tai tilaustuotteen nimi

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys3.png)

**Laskunumeroa** klikkaamalla pääsee muokkaamaan kyseistä laskua

- Listauksella **punaisella** näkyvät puutteelliset tiedot korjataan Asiakaskortille (pysyvät muutokset)
- esim. puuttuva **Postinumero**–tieto korjataan ja asiakastiedot haetaan uudelleen laskun **Hae maksajaa** –painikkeen kautta

Valitsemalla laskun/laskuja aktivoimalla taulukon ensimmäisessä sarakkeessa olevan kentän ja painamalla **Tulosta PDF** -painiketta, muodostuu laskusta PDF tarkistelua varten.

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys8.png)

### Laskujen lähetys

Laskut lähetetään **toimitustapa kerrallaan**. 

Valitaan Toimitustapa-hakuehdoksi esimerkiksi **VERKKOLASKU** ja haetaan laskut. Listaukseen tulee vain laskut, joissa toimitustapana on verkkolasku. **Valitaan** kaikki laskut, tai vain osa laskuista. Jos haluat lähettää vain tietyt laskut, niitä voi valita aktivoimalla **ekassa sarakkeessa olevan valintakentän**. 

Kun laskut on valittu, painetaan **Lähetä laskut verkkolaskuina** -painiketta. 

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys4.png)

Voit vielä **tarkistaa** laskut PDF-muodossa ennen lähetystä aktivoimalla **Älä lähetä, tee laskuista vain PDF tarkastelua varten** -kentän ja painamalla **Lähetä**. Deaktivoimalla kentän ja painamalla **Lähetä** voit suorittaa varsinaisen laskujen lähetyksen.

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys5.png)

### Lähetettyjen laskujen tarkistelu

Luotuja postitusaineistoja voit tarkastella **Luodut aineistot** -välilehdellä.

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys6.png)

Tiedoston nimeä klikkaamalla avautuu selaimessa uusi välilehti, missä luotuja laskuja voi tarkastella PDF muodossa.

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys7.png)

## Laskujen haku-välilehti

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl.png)

**Laskujen haku**–välilehdellä käsitellään sovelluksen luomia laskuja tai voidaan lisätä uusia laskuja.

Mikäli laskulla on **virheitä**, ne näytetään listauksella **punaisella värillä** (esim. jos laskun eräpäivä on pienempi kuin laskun päivä, näytetään eräpäivä punaisella).

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl2.png)

Palvelussa voi luoda laskuja myös **luonnoksina** (nollalaskuja), jotka saadaan omalle listaukselle Nollalaskuja nn kpl–painikkeella.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl4.png)

Näkymässä voidaan listaukselta valitut laskut:

- Tulostaa PDF:ksi
- Tulostaa Exceliksi
- Merkitä lähetetyiksi
- Lähettää sähköpostilla
- Uudelleen lähettää
- Siirtää perintään
- Luoda maksumuistutus

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl3.png)

Laskun **numeroa** klikkaamalla päästään kyseisen laskun tietoihin käsiksi.

Laskurivin **Tulostin** -kuvakkeesta voidaan tulostaa yksittäinen lasku.

Listausnäkymässä voidaan valita laskuja yksitellen tai kaikki laskut kerrallaan, ja esim. tulostaa ne yhteen **Excel tai PDF** -tiedostoon jatkokäsittelyä varten.

### Laskujen haku ja suodatus välilehdeltä

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl5.png)

Pelkkä **Hae**-painikkeen klikkaus, ilman hakuehtoja, listaa kaikki laskut.

Perushaku toimii **laskun numerolla**, jolloin muita hakuehtoja ei huomioida. Aktivoimalla **Ohita muut ehdot** -kentän, voit hakea vain **asiakasnumerolla**, ohittaen muiden kenttien ehdot.

Muita hakuehtoja voi käyttää yksittäin tai yhdistettynä ja niiden **näkyvyys** voidaan määritellä **asiakaskohtaisesti**.

- Esim. Yritys ja Laskusarja -kenttiä käytetään, mikäli samalla asiakkaalla on tarve eritellä useamman lehden laskutus toisistaan.
Tai esim. Laskun tyyppi ja/tai Laskun tarkenne -hakukenttiä hyödyntäen voidaan myös suodattaa listaukselle näkyviin vain niihin liittyvät/halutut laskut.

**Hakuehtoja** on mm.

- Haku kentistä tietyllä hakuehdolla
- Hakupäivä - esim. laskun luomispäivä, laskun eräpäivä
- Aikaväli, jolta laskuja haetaan
- Laskun tila - esim. avoin, lähetetty, erääntynyt, maksettu
- Toimitustapa - esim. kirje, verkkolasku
- Laskun tyyppi - esim. ilmoitus, tilaus
- Laskun tarkenne -kentän tarkoituksena on mahdollistaa tarkentavien lisätietojen vapaan tekstisyötön esim. toimitettu tuote, www-verkkokauppa
- Laskusarja - minkä numeroisia laskuja haetaan esim. 10000-10100 
- Muita ehtoja (saa lähettää, ei saa lähettää, perintäkielto)

Painamalla **Hae uusimmat** -painiketta tulee listaukseen 100 laskua jotka on luotu tai joita on muokattu äskettäin.

Painamalla **Hae maksumuistutettavat #1/#2** -painikkeita, ohjelma hakee laskut, jotka ovat erääntyneet. Haun jälkeen voit valita laskut ja halutessa lähettää ne uudestaan.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl6.png)

### Hyvityslaskun luonti ja poistaminen

**Laskujen haku**–välilehdellä käsitellään myös hyvitettävät laskut, joista luodaan **Luo Hyvityslasku** –painikkeella erilliset laskut, jotka ovat muuten keskenään identtiset, mutta tiliöinneiltään vastakohtia (kuvan +/- 50,00 €)

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl7.png)

- Alkuperäinen lasku merkitään Hyvitetyksi (tila Hyvitetty) ja laskun tietoihin lisätään mm. Hyvityslaskun uusi laskunumero ja avoimet tuoterivien tiliöinnit kuitataan automaattisesti kirjanpitoon (Maksamatta summa 0,00 €)

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl9.png)

- Uudella Hyvityslaskulla näkyy laskun tiedoissa Hyvitetyn laskun tiedot (tila Hyvitys) ja avoimet tuoterivien tiliöinnit kuitataan automaattisesti kirjanpitoon alkuperäisen laskun vastasummilla (Maksamatta summa 0,00 €)

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl8.png)

- Osahyvitykset tehdään aina alkuperäisille laskuille tiliöintien avulla, eikä siis **Luo hyvityslasku** –painikkeen kautta

#### Hyvityslaskun poisto

Mikäli hyvityslasku on luotu **vahingossa** tai se halutaan muusta syystä perua kokonaan, vaikka normaalisti ei hyvityslaskua tulisikaan poistaa
- Esim. aiheeton hyvityslasku luotu vahingossa

**Poisto** tulee tehdä niin, että
1) Ensin avataan alkuperäinen lasku, joka on hyvitetty, ja klikataan **Poista hyvityslasku-liitos** –painiketta

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl10.png)

2) Sitten avataan hyvityslasku, jolta poistetaan yksitellen
- **Tiliöintirivit**, rivien lopussa näkyvällä X–ikonilla

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl11.png)

- **Tuoterivit**, rivien lopussa näkyvällä X–ikonilla

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl13.png)

3) Ja lopuksi avataan laskun tiedot **kynä**-ikonista, ja painetaan **Poista lasku** -painiketta.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl12.png)

Näin jäljelle jää alkuperäinen lasku ja hyvityslasku katoaa listaukselta ja sen uudelleen käsittelyä voi jatkaa.

#### Hyvityslaskujen hakeminen

Hyvityslaskuja ja hyvitettyjä laskuja voi hakea **Laskut**-välilehdeltä valitsemalla laskun tilaksi Hyvitetty/Hyvitys. Taulokon muoto sarakkeessa lukee tieto siitä millä laskulla lasku on hyvitetty tai minkä laskun se hyvittää.

![Laskujen haku -välilehti](/img/ohjeet/hyvitetty.png)

*Hyvitetyt laskut haussa*

![Laskujen haku -välilehti](/img/ohjeet/hyvitys.png)

*Hyvityslaskut haussa*

### Maksumuistutukset

**Laskut**–välilehdellä käsitellään myös erääntyneitä laskuja, joista halutaan lähettää esim. maksumuistutuksia. **Laskutusajon automatisointi sovitaan asiakaskohtaisesti** (esim. kerran viikossa tapahtuvaksi), jolloin sekä alkuperäiset laskut että maksumuistutuslaskut, luodaan ja lähetetään tausta-ajoina suoraan palvelusta sovittujen määrittelyjen mukaisesti.

#### Muistutuslaskujen tekstitykset

Muistutuslaskujen lomakkeille lisättävät lehtikohtaiset tekstitykset lisätään **[Asetukset/Laskutekstit](/docs/ohjeet/asetukset#laskutekstit)** –näkymässä.

#### Ennen muistutuslaskujen luontia

Ennen muistutuslaskujen luontia tulee varmistaa, että mahdolliset **virhetilanteet on korjattu**. Virheellisiä suorituksia löytää:

- [Pankki/Lisätyt aineistot](/docs/ohjeet/yleiset_ominaisuudet/pankki#pankkiaineistojen-k%C3%A4sittely) -näkymästä
- [Suoritukset](/docs/ohjeet/yleiset_ominaisuudet/suoritukset)-välilehdeltä

#### Muistutuslaskujen haku

Valitsemalla esim. **Laskun tila** –valikosta hakukriteeriksi **Erääntynyt** ja klikkaamalla **Hae** -painiketta listataan kaikki laskut, joita ei ole laskun eräpäivään mennessä maksettu.

Erilliset **Hae maksumuistutettavat #1** ja **Hae maksumuistutettavat #2** –painikkeet listaavat jo lähetetyt maksumuistutukset asiakaskohtaisesti sovittujen eräpäivien laskentakaavojen mukaisesti (esim. laskun Eräpäivä + 14 vrk / Muistutusmaksu #1 Eräpäivä + 7 vrk).

- **Valitse kaikki** –painikkeella valitaan kaikki listauksella olevat laskut jatkokäsittelyä varten
- Yksittäisen laskun **numeroa** klikkaamalla päästään kyseisen laskun tietoihin käsiksi

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl14.png)

#### Maksumuistutuksien luominen

Listaukselta valituille muodostetaan maksumuistutuslaskut

- **Luo maksumuistutus #1** –painikkeella
- **Luo maksumuistutus #2** –painikkeella
- **Siirrä perintään** –painikkeella, jonka jälkeen valitut laskut eivät ole enää käsiteltävissä palvelussa

Muistutuslaskut luodaan heti painikkeen klikkauksen jälkeen ja sen onnistumisesta näytetään koonti-ilmoitus.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl15.png)

Luotujen muistutuslaskujen **Muoto**–sarakkeen tila päivittyy esim. Maksum.#1 (päivitys näkyy kun klikkaa Hae-painiketta uudelleen).

Myös yksittäisestä laskusta voi luoda maksumuistutuksen, jolloin valittavana oleva Luo maksumuistutus #1 tai Luo maksumuistutus #2 –painike näytetään kyseisen laskun Muoto–sarakkeen mukaisen tilan mukaisesti (esim. jos Maksumuistutus #1 on jo lähetetty, niin painike vaihtuu Luo maksumuistutus #2:ksi).

Tarvittaessa voi jo lähetetystä maksumuistutuksesta tulostaa alkuperäisen Lasku–lomakkeen **Tulosta lasku LASKU-muodossa** –painikkeen kautta

### Perintä

Laskut voi siirtää perintään valitsemalla halutut laskut ja painamalla **Siirrä perintään** -painiketta. 

![Laskujen haku -välilehti - Siirrä perintään](/img/ohjeet/perinta.png)

Perintään viennit tehdään yleensä noin kerran kuukaudessa. Muistutuslaskut siirretään perintään, jos maksua ei ole suoritettu kahden viikon sisällä muistutuslaskun eräpäivästä.

**Perintään siirron vaiheet:**

1. Ennen perintään siirtoa käydään Laskut-listauksen erääntyneet laskut silmämääräisesti läpi. Aiemmin sovitut poikkeukset jätetään huomioimatta, eli ne jätetään pois perintäajosta.
2. Perintäajon yhteydessä maksu hyvitetään tilaukselle tai laskulle, ja tilaukselle lisätään katkaisupäivä (esim. heti tai +30 päivää).
3. Perintäajo tuottaa Excel-taulukon käsitellyistä laskuista. Tämä taulukko tarkistetaan ja tarvittaessa päivitetään yksittäisen maksun tai tilauksen jatkaminen.
3. Taulukko lähetetään perintätoimistolle tarvittaessa.

![Laskujen haku -välilehti - Siirrä perintään](/img/ohjeet/perinta2.png)
*Ohjelmisto ilmoittaa laskujen onnistuneesta siirrosta perintään*

![Laskujen haku -välilehti - Siirrä perintään](/img/ohjeet/perinta3.png)
*Ohjelmisto luo Excelin siirretyistä laskuista tarkistusta ja päivitystä varten*

**Perintätoimiston raportointi**: Perintätoimisto raportoi yritykselle, jonka asiakaspalvelu päivittää laskujen tiedot perintätoimiston ilmoittaman tilanteen mukaisesti. Perintäajossa käsiteltyjä laskuja ei voi enää tarkastella palvelussa.

### Maksamattomien tilausten loppulaskut

Tilauksiin liittyviin Maksumuistutus-laskuihin voidaan lisätä automaattinen **päätöskäsittely**, mikäli Maksumuistutus #2 –laskua ei ole maksettu. 

Ohjeet maksamattoman tilauksen manuaaliseen katkaisuun löytyy [Tilaus-välilehdeltä](/docs/ohjeet/tilaustenhallinta/tilaukset#tilauksen-katkaisu-maksamattomana). Tilauksen katkaisun yhteydessä muodostetaan **Loppulasku** jo toimitetuista lehdistä.

Mikäli asiakas ei maksa myöskään **Loppulaskua**, niin se käsitellään eräpäivän jälkeen **automaattisesti**.

- Määriteltävissä erikseen näiden loppulaskujen käsittelyn **alaraja** (esim. 5€ pienempiä ei enää käsitellä)
- Avoimet tiliöintierät **tiliöidään** Maksuhuomautus- ja Luottotappio-tileille

**Poikkeukset** automaattiseen käsittelyyn:

- Asiakkaiden haluamia **Koontilaskuja** ei käsitellä automaattisesti, vaan se on tehtävä aina manuaalisesti
- Jos asiakas maksaakin laskun alkuperäisen pääoman, jätetään suoritus virhelistalle ja kohdistus käsitellään manuaalisesti samoin kuin tilauksen käsittely (Katkaisun poisto/uusi tilaus ym.)

Nämä katkaistujen tilauksien loppulaskut löytyvät Laskut-listauksen hakukriteereillä kirjoittamalla **TOIMITETUT TUOTTEET** Laskun tyyppi -kenttään.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl16.png)

<!-- /// löytyykö alla olevaa raporttia enää?
 Samoin ne on katsottavissa Raportit / Automaattiajolla katkaistut tilaukset –painikkeen avulla

- Raportti tulostettavissa Excel-taulukkoon jatkokäsittelyä varten listauksen alla olevalla Lataa KatkaistavatTilaukset_ … -painikkeella -->

## Esimerkkitapauksia laskuista

### Lisää uusi lasku

Tarvittaessa voi **lisätä uuden laskun** esim. oheistuotteiden myynteihin liittyen.

Lisäyksen voi tehdä klikkaamalla **Lisää lasku / Lisää uusi lasku** -painiketta.

- **Asiakkaan tietojen Laskut** –osion kautta, jolloin asiakkaan tiedot kopioituvat automaattisesti uudelle laskulle
- **Laskut** –näkymässä

Näkymään avautuu tyhjä laskulomake, johon

- muutetaan tiedot tarpeen mukaan ja lasku tallennetaan
- Huomioi, että laskulle luodaan numero vasta, kun **laskun lähetys on sallittu**

![Laskujen haku -välilehti](/img/ohjeet/esimerkit2.png)

- Uusi lasku siis luodaan ja tallennetaan (1. kerralla) Laskunumerolla 0

Laskulle lisätään **perustiedot ja maksajan tiedot**, jotka voi

- hakea olemassa olevista asiakastiedoista **Hae maksajaa** –painikkeesta tai
- lisäämällä uuden asiakkuuden **Lisää uusi maksaja** –painikkeen kautta

Laskutettava tuote/tuotteet lisätään **Lisää tuote** –painikkeen avulla

![Laskujen haku -välilehti](/img/ohjeet/esimerkit1.png)

### Manuaalinen laskupyynnön lisääminen

Voi olla tarve luoda ”ylimääräinen” lasku esim. peruutuksen yhteydessä jolloin lasku voi koskea jo ilmestynyttä, mutta maksamatonta lehteä (lähetetty asiakkaalle ennen peruutusta).

Manuaalinen laskun lisääminen asiakkaalle tehdään

1. Haetaan kyseisen asiakkaan tiedot Etusivun haun kautta

![Laskujen haku -välilehti](/img/ohjeet/esimerkit2-1.png)
 
2. Avataan halutun tilauksen tiedot sitä klikkaamalla

![Laskujen haku -välilehti](/img/ohjeet/esimerkit2-2.png)

3. Avataan Laskutuspyynnöt-osion Lisää laskutuspyyntö –toiminto

![Laskujen haku -välilehti](/img/ohjeet/esimerkit2-3.png)

4. Täydennetään Laskutuspyynnön tiedot (jo lähetetyn julkaisun yksikköhinta ja muut tiedot) ja Tallennetaan

![Laskujen haku -välilehti](/img/ohjeet/esimerkit2-4.png)

5. Täydennetään tarvittaessa myös Tilauksen maksajan tiedot

### Suorituksen lisääminen laskulle

**Laskut**-näkymässä pääsee muokkaamaan valitun yksittäisen laskun tietoja kyseisen laskun numeroa klikkaamalla

Esimerkiksi suorituksen lisääminen laskulle tehdään:

1. Haetaan haluttu lasku esim. asiakkaan sukunimellä ja laskunumerolla

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-1.png)

2. Avataan halutun laskun tiedot laskun numeroa klikkaamalla

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-2.png)

3. Avataan Myynnit ja suoritukset -osion Lisää uusi suoritus –toiminto. **Lisää uusi suoritus** –painike on tarkoitettu maksuihin, jotka saadaan jotakin muuta kautta kuin esim. elektroniset pankkien viitemaksuaineistot (eli mm. käteismaksut). **Liitä suoritus** –painike on tarkoitettu maksuihin, jotka saadaan esim. Maventa/Kuluttajalaskut tai pankkien viitemaksuaineistojen kautta (saapunut maksu)

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-3.png)

4. Täydennetään tilit ja muut tiedot ja Tallennetaan

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-4.png)

### Uuden laskun luominen kopioimalla

Laskut–näkymän hakulistauksen avulla pääsee hakemaan aiemman laskun, josta halutaan lähettää uusi lasku (aiemman pohjatiedoilla)
Voi olla tarve luoda ”korvaava” lasku esim. hyvityslaskun yhteydessä.

- Lasku voi koskea asiakas- tai laskutustietojen muuttumista

Esimerkiksi laskun kopioiminen asiakkaalle tehdään:

1. Haetaan kyseisen laskun tiedot Laskut–listauksen kautta

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-1.png)

2. Avataan kyseisen laskun tiedot sen numeroa klikkaamalla

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-2.png)

3. Painetaan joko Luo laskusta kopio tai Luo laskusta kopio ilman maksajan tietoja –painikkeesta

![Laskujen haku -välilehti](/img/ohjeet/esimerkit4-3.png)

4. Vahvistetaan popup-ilmoitus OK

![Laskujen haku -välilehti](/img/ohjeet/esimerkit4-4.png)

5. Muokkaa laskua painamalla Kynä-ikonista. Jos on tarvetta, voit muuttaa maksajan hakemalla olemassa olevan asiakkaan tai lisäämällä uuden maksajan **Hae maksajaa** tai **Lisää uusi maksaja** -painikkeista. Tietojen tarkastuksen jälkeen aktivoidaan **Lähetys sallittu** -toiminto, jotta lasku voidaan lähettää.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit4-5.png)

5. Tallennetaan
6. Jatketaan [Laskun lähetys](/docs/ohjeet/yleiset_ominaisuudet/lasku#laskujen-l%C3%A4hetys-1) -välilehdessä laskun lähettämiseksi asiakkaalle

### Laskun osahyvittäminen

Laskut–näkymän hakulistauksen avulla pääsee hakemaan aiemman laskun, josta halutaan lähettää uusi osahyvityslasku (aiemman pohjatiedoilla)

Voi olla tarve luoda ”korvaava” lasku esim. hyvityslaskun yhteydessä

- Lasku voi koskea maksutietojen muuttumista osahyvityksen takia
- Hyvittävän laskun tuoterivin summaa voi muuttaa osahyvityksen summalla ja muutos vaikuttaa hyvitetyn laskun maksamatta summaan (eli osahyvityksen jälkeen maksettavaksi jäävä summa).

Esimerkiksi laskun osahyvittäminen asiakkaalle tehdään:

1. Haetaan kyseisen laskun tiedot Laskut–listauksen kautta

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-1.png)

2. Avataan kyseisen laskun tiedot sen numeroa klikkaamalla

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-2.png)

3. Lisätään laskun Myynnit ja suoritukset -tiliöinteihin hyvityssummaan liittyvät tiliöinnit Lisää uusi suoritus –painikkeen kautta

- Lisätään Kassatili S (tai erillinen Kuittaustili) ja Rahamäärä 0,00 €
- Lisätään (alkup. tuotetiliöinnissä käytetty) Kuittaustili K ja hyvitettävä Rahamäärä -nn,nn €
- Lisätään Kulutili T (esim. Luottotappiotili tai vastaava) ja hyvitettävä Rahamäärä +nn,nn €

![Laskujen haku -välilehti](/img/ohjeet/esimerkit5-3.png)

4. Asiakkaalle lähetetään lasku (uudella jäännössummalla eli Maksamatta osuus), jossa muuttunut Summa-tieto näkyy laskupohjan Pankkisiirto-osassa

![Laskujen haku -välilehti](/img/ohjeet/esimerkit5-4.png)

## Vastaanottoilmoitukset

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset.png)

**Vastaanottoilmoitukset**–välilehden listauksen avulla vertaillaan vastaanotetut verkkomaksu valtuutukset asiakasrekisteristä löytyviin asiakaskortteihin. Oletuksena vastaanottoilmoituksia haetaan palveluun 6 h välein.

RI-sanomassa saadut Vastaanottoilmoitusten **Koodit** ovat
- 0 = Lisäys (verkkomaksuvaltuutuksen lisäys)
- 1 = Muutos (verkkomaksutietojen muutos)
- 2 = Poisto (verkkomaksuvaltuutuksen poisto)

Ja Vastaanottoilmoitusten Suoramaksujen **Tyypit** ovat
- 00 = eLasku
- 01 = Suoramaksu

**Käsittele vastaanottoilmoitukset** –painikkeella vastaanototetut muutokset päivittyvät vertailulistaukselle.

### Manuaalinen käsittely virhetilanteessa

Tarvittaessa **päivitetään asiakkaan** IBAN/BIC tiedot asiakaskortin **Laskutustietoihin** manuaalisesti virheen tapahtuessa. Näet, että vastaanottoilmoitus on jäänyt virheeseen, kun **Käsitelty info** -sarakkeessa lukee joitain muuta kuin Käsitelty OK.

**Esim.** alla olevassa kuvassa (tiedot kuvitteellisia) Testaaja Teemu on tehnyt verkkomaksuvaltuutuksen (KOODI=ADD). Valtuutusta ei olla pystytty liittämään asiakaskorttiin, koska asiakasnumero on ollut virheellinen. Näet tiedon **Käsitelty info** -sarakkeessa.

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset1.png)

Menetellään seuraavasti:

1) Etsitään asiakas esim. nimen perusteella

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset2.png)

2) Avataan asiakkaan asiakaskortin tiedot Kynä-ikonilla

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset3.png)

3) Kopioidaan IBAN ja BIC vastaanottoilmoituksesta asiakkaan tietoihin

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset4.png)

4) Vaihdetaan laskun toimitustavaksi VERKKOLASKU

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset5.png)

5) Tallenna

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset6.png)

6) Vastaanottoilmoitus kuitataan käsitellyksi painamalla numeroa ja kuittaamalla tehdyksi

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset7.png)

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset8.png)

Seuraava lasku lähetetään asiakkaalle verkkolaskuna (olettaen, että asiakas on laittanut oikeat tiedot)







