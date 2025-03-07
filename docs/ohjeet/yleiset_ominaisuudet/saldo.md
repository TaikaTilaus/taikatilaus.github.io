---
sidebar_position: 4
---

# Saldo ja rahan palautus

Saldo ja rahan palautus -toiminnolla voit tehdä seuraavaa:

- Siirtää asiakkaalle saldoa, joka on kertynyt katkaistuista, jo maksetuista tilauksista tai liikasuorituksista. Saldoa voi käyttää tulevien laskujen maksamiseen.
- Luoda hyvityslaskun, joka merkitsee asiakkaalle rahapalautuksen – joko katkaistusta, jo maksetusta tilauksesta tai liikasuorituksesta.
- Lisätä asiakkaalle saldoa manuaalisesti, esimerkiksi jos asiakas on maksanut tilauksensa etukäteen.
- Raporteilta näet palautettavat summat sekä asiakkaiden käytettävissä olevan saldon.

## Toiminnot ennen käyttöönottoa

Ennen saldo ja palautus -toiminnon käyttöönottoa (tästä lähtien ennakkomaksut), pitää asetuksissa tehdä tiettyjä määrityksiä. Ottakaa yhteyttä TaikaTilaus-tukeen tuki@taikatilaus.fi, jos haluatte ottaa toiminnon käyttöön.

### Tilit

Ennakkomaksujen tiliöintejä varten tarvitaan omat tilit

- jonka kautta saldon lisäys ja vähennys asiakkaalle hoidetaan
- jonka kautta rahan palautus asiakkaan tilille hoidetaan

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-palautus.png)

Tileistä kannataa keskustella kirjanpitäjän kanssa. 

### Erillistuotteet

Ennakkomaksujen tuoterivejä ja niiden tiliöintejä varten pitää luoda erillistuotteet. Mikäli on useampi lehti, tulee niille jokaiselle luoda omat vastaavat erillistuotteet.

Erillistuotteelle laitetaan seuraavat tiedot (tässä esimerkissä rahan palautus):

- Tuotenumero (oma valinnainen)
- Tuoteryhmä esim. Ennakkomaksu
- Tuotenimi esim. Ennakkomaksun palautus [lehti]
- Myyntili (tämä on se tili, jonka kautta rahan palautus hoidetaan)
- ALV-velkatili (tilausten alv velkatili 10%)
- Myyntisaamiset tili (myyntisaamiset tili, jota käytetään kyseessä olevan lehden myyntisaamisissa)

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-palautus7.png)

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-palautus2.png)

### Pääkäyttäjä asetukset

Asetukset/Pääkäyttäjä -välilehdellä pitää laittaa paikalleen 

- saldotilin
    - määrittely siitä, mille lehdille saldoa voi käyttää (muodossa LehdenLyhenne;LehdenLyhenne esim. TAN;TAND)
- palautuksen tilin
- lehtikohtaiset erillistuotteet (muodossa: LehdenNimi;ErillistuotteenTuoteID) esim. TaikaNakka;2584

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-palautus3.png)

## Saldon lisäys ja käyttö

### Saldon lisäys

Saldoa voi lisätä asiakkaalle 

1. **Maksetun tilauksen katkaisun yhteydessä**

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-lis4.png)

2. **TAI lisäämällä saldoa manuaalisesti asiakaskortille, kun asiakas on maksanut etukäteen**
- Saldoa voi lisätä painamalla **Lisää saldoa** -painiketta asiakkaan laskutustiedoista

![Tilaustiedot - Laskutustiedot](/img/ohjeet/saldo-lis.png)

- Saldoa lisätessä voit kirjata kirjauspäivän, summan, lehden, sisäisen selitteen (ei näy asiakkaalle), ulkoinen selite (laskulle)

![Tilaustiedot - Laskutustiedot](/img/ohjeet/saldo-lis2.png)

3. **TAI Virheellisten suorituksien käsittelyn yhteydessä painamalla Liikasuoritus ennakkomaksuksi -painiketta**

![Tilaustiedot - Laskutustiedot](/img/ohjeet/saldo-lis6.png)

### Saldon käyttö

Kun saldoa on lisätty, tulee sen määrä näkyviin myös asiakkaan koontisivulla

![Asiakastiedot](/img/ohjeet/saldonmaar.png)

Kun saldoa on lisätty, sitä käytetään **automaattisesti laskujen maksamiseen** laskustusajon yhteydessä. Merkintä saldon käytöstä maksamiseen tulee **laskun tuoteriville**.

![Tilaustiedot - Laskutustiedot](/img/ohjeet/saldo-lis3.png)

Tiedot saldon käytöstä päivittyvät myös laskutustietoihin. Alla olevassa esimerkistä näet sisäisestä selitteestä rahamäärän ja laskun johon saldoa on käytetty 

![Tilaustiedot - Laskutustiedot](/img/ohjeet/saldo-lis5.png)

### Saldon poistaminen

Saldon voi poistaa asiakkaalta klikkaamalla **SaldoID**:tä ja painamalla **Poista**. Kun painat **Poista**, selain näyttää vahvistusviestin. Paina **OK**, jos haluat poistaa saldon. Saldo saattaa vielä näkyä asiakkaalla poistamisen jälkeen, mutta se poistuu näkyvistä, kun päivität sivun.

![Asiakastiedot](/img/ohjeet/saldo-poisto1.png)

*Pääset poistamaan saldon painamalla SaldoID:tä ja*

![Asiakastiedot](/img/ohjeet/saldo-poisto2.png)

*painamalla Poista-nappia*

![Asiakastiedot](/img/ohjeet/saldo-poisto3.png)

*Selain näyttää vahvistusviestin. Jos haluat poistaa saldon valitse OK*

## Maksetun tilauksen katkaisu

Kun maksettu tilaus katkaistaan, voidaan maksettu summa siirtää asiakkaalle saldoksi tai voidaan tehdä tiliöinti asiakkaalle palautuvasta rahasta tilauksen laskulle (**HUOM!** TaikaTilauksen kautta **ei liiku rahaa**! Palautus asiakkaan tilille pitää tehdä taloushallinnon kautta!). 

**Saldoa** kertyy asiakkaalle esimerkiksi siinä tapauksessa, että asiakas on **maksanut** jonkun tilauksen, mutta haluaa sittenkin **vaihtaa** sen toiseen tilaustuotteeseen. Kun tilaus katkaistaan, tulee asiakkaalle hyvityksenä tilauksen **saamattomista lehdistä** tietty euromäärä. Tämä määrä siirtyy asiakkaan saldoon, jota voidaan käytettää tulevien laskujen maksamiseen.

Maksetun tilauksen katkaisu tehdään painamalla **Maksetun tilauksen katkaisu** -painiketta. Lomakkeelle lisätään katkaisupäivä ja -syy. **Ohjelma laskee automaattisesti hyvitettävän saldon/rahasumman määrän**. Tarvittaessa voit muokata Viesti asiakkaalle ja Sisäinen info -kenttien tekstejä.

Jos haluat palauttaa takaisin maksettavan summan **saldoksi**, paina **Katkaise tilaus ja tiliöi summa asiakkaalle saldoksi tilille [saldotili]** -painiketta.

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-lis4.png)

Jos haluat palauttaa takaisin maksettavan summan asiakkaalle, paina **Katkaise tilaus ja tee palautuslasku tiliöimällä summa tilille [palautustili] asiakkaalle palautettavaksi** -painiketta. **HUOM!** Tämä **ei** tee itse palautusta! Palautus **pitää tehdä taloushallinnon kautta**! Tiliöinti tehdään kirjanpidon raportteja varten!

![Tilauksen tiedot - Maksetun tilauksen katkaisutoimet](/img/ohjeet/maksettutilaus-katkaisu.png)
*Maksetun tilauksen katkaisutoimet.*

Voit palauttaa asiakkaalle suuremman summan saldoon/rahana aktivoimalla **Salli suurempi summa** -kentän ja kirjaamalla palautettavan summan **Palautettava summa** -kenttään.

### Katkaisun jälkeinen näkymä

**Katkaisun jälkeen saldo tulee asiakkaan tietoihin näkyviin**. Saldoa käytetään automaattisesti seuraavan laskun maksamiseen.

![Asiakaskortti - Laskutiedot](/img/ohjeet/saldo4.png)
*Saldo näkyy asiakaskortilla laskutustietojen alla.*

Saldon palautus näkyy alkuperäisen laskun tiliöinneillä seuraavasti:

![Asiakaskortti - Laskutiedot](/img/ohjeet/saldo-palautus6.png)

Jos valitsit rahapalautuksen, muodostetaan uusi hyvityslasku, joka tiliöi rahanpalautuksen asetuksissa määritetylle tilille.

![Asiakaskortti - Laskutiedot](/img/ohjeet/saldo-palautus4.png)
*Tilauksen laskuihin muodostuu palatuksesta lasku*

![Asiakaskortti - Laskutiedot](/img/ohjeet/saldo-palautus5.png)
*Palautuslasku*

## Virheellisten suorituksien käsittely

### Asiakas maksaa tuplana/liikaa ja summa halutaan palauttaa asiakkaalle

Kun asiakkaan tekemässä suorituksessa on virhe, jää se käsiteltäväksi **Suoritukset**-välilehdelle. Asiakkaan maksaessa summan tuplana/liikaa ja jos halutaan palauttaa liikasuoritus asiakkaalle rahana, voidaan painaa **Liikasuorituksen palautus** -painiketta. Palautusta kirjatessa voidaan:

- Asiakasnumeron kautta hakea asiakas, jolle palautus tehdään (oletuksena se, joka on suorituksen tehnyt)
- Valita suorituksen pankkitili
- Liikasuoritustili (jos näitä on enemmän kuin yksi)
- Kirjata takaisin maksettava rahamäärä

**HUOM!** Yleensä tarvitsee kirjata vain takaisin maksettava rahamäärä, eikä muihin asetuksiin tarvitse koskea.

Palautus suoritetaan painamalla **Palauta liikasuoritus** -painiketta.

![Asiakaskortti - Laskutiedot](/img/ohjeet/liikasuoritus.png)

### Asiakas maksaa liikaa ja liikamaksu halutaan lisätä asiakkaan saldoon

Kun asiakkaan tekemässä suorituksessa on virhe, jää se käsiteltäväksi **Suoritukset**-välilehdelle. Asiakkaan maksaessa summan tuplana/liikaa ja jos halutaan palauttaa liikasuoritus asiakkaalle saldona, voidaan painaa **Liikasuoritus ennakkomaksuksi** -painiketta. Palautusta kirjatessa voidaan:

- Asiakasnumeron kautta hakea asiakas, jolle palautus tehdään (oletuksena se, joka on suorituksen tehnyt)
- Valita lehti, minkä laskuihin suoritusta voi käyttää (jos saldoa voi käyttää kaikkiin laskuihin valitse KAIKKI)
- Valita suorituksen pankkitili
- Liikasuoritustili (jos näitä on enemmän kuin yksi)
- Kirjata takaisin maksettava rahamäärä

**HUOM!** Yleensä tarvitsee kirjata vain takaisin maksettava rahamäärä, eikä muihin asetuksiin tarvitse koskea.

Palautus suoritetaan painamalla **Tallenna ennakkomaksu** -painiketta.

![Asiakaskortti - Laskutiedot](/img/ohjeet/liikasuoritus2.png)

## Raportti palautettavista maksuista

**Raportit**-välilehdeltä löydät raportin **Maksun palautukset**, millä listataan asiakkaille tehtävät palautukset. Raportilta voi kuitata palautetuiksi summia, jonka jälkeen ne eivät enää näy raportilla (ellet erikseen valitse niitä näkyviksi).

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti.png)
*Raportti löytyy kirjanpidon raporteista.*

Raportin määrityksistä voit valita:
- Näkyvätkö jo käsitellyt palautukset raportilla
- Näkyvätkö myös saldoon palautetut summat raportilla
- Aikavälin, jolta haetaan palautettavia summia
- Tulostusmuodon (Näytölle, Excel, PDF)
- Kirjaisinkoon
- Raportin ulkoasun (ruudukolla tai ilman)

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti2.png)

Kun raportti on tulostettu näytölle, voit käsitelle yksittäisiä palautuksia (esimerkin raportissa näkyy myös ennakkomaksut).

Raportin ensimmäisessä sarakkeessa näkyy jokaisen palautuksen uniikki **TiliöintiID**, kopiomalla sen raportin alla olevaan kenttään (TiliöintiID) voit:
- Kuitata summan käsitellyksi (palautus on tehty asiakkaalle), jolloin se poistuu raportilta, ellet raportin määrityksistä aseta käsiteltyjä summia näkyviksi

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti3.png)

- muokata tiliöinnin 
    - lisätietoja
    - tilinumeroa, mihin palautus tehdään
    - tilin numeroa, jolta palautus tehdään (esimerkissä saldo ja palautustilit)

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti4.png)