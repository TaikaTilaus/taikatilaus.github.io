---
sidebar_position: 4
---

# Saldo ja rahan palautus

**Saldo ja rahan palautus** -toiminnolla voit tehdä seuraavaa:

- Siirtää asiakkaalle saldoa, joka on kertynyt katkaistuista, jo maksetuista tilauksista tai liikasuorituksista. Saldon voi käyttää tulevien laskujen maksamiseen.
- Luoda hyvityslaskun, joka merkitsee asiakkaalle rahapalautuksen – joko katkaistusta maksetusta tilauksesta tai liikasuorituksesta.
- Tarkastella raportteja, joista näet palautettavat summat sekä asiakkaiden käytettävissä olevan saldon.

**HUOM! JOTTA RAHANPALAUTUS TILIÖITYY OIKEIN, RAHANPALAUTUKSET TULEE KÄSITELLÄ NIITÄ VARTEN TARKOITETULLA [RAPORTILLA.](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo#maksun-palautukset)**

---

## Toiminnot ennen käyttöönottoa

Ennen saldo- ja palautustoiminnon (jäljempänä *ennakkomaksut*) käyttöönottoa asetuksiin tulee tehdä tietyt määritykset. Ottakaa yhteyttä TaikaTilaus-tukeen: **tuki@taikatilaus.fi**, mikäli haluatte ottaa toiminnon käyttöön.

### Tilit

Ennakkomaksujen tiliöintiä varten tarvitaan omat tilit:

- tili, jonka kautta saldon lisäys ja vähennys asiakkaalle hoidetaan  
- tili, jonka kautta rahan palautus asiakkaan tilille hoidetaan  

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-palautus.png)

Suosittelemme keskustelemaan tileistä kirjanpitäjän kanssa.

### Erillistuotteet

Ennakkomaksujen tuoterivejä ja niiden tiliöintejä varten tulee luoda omat erillistuotteet. Jos käytössä on useampi lehti, jokaiselle tulee luoda omat vastaavat erillistuotteet.

Erillistuotteelle asetetaan seuraavat tiedot (esimerkkinä rahan palautus):

- **Tuotenumero** (oma valinnainen)
- **Tuoteryhmä**, esim. *Ennakkomaksu*
- **Tuotenimi**, esim. *Ennakkomaksun palautus [lehti]*
- **Myyntitili** (tili, jonka kautta rahan palautus hoidetaan)
- **ALV-velkatili** (tilausten ALV-velkatili 10 %)
- **Myyntisaamistili** (myyntisaamistili, jota käytetään kyseisen lehden myyntisaamisissa)

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-palautus7.png)

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-palautus2.png)

### Pääkäyttäjäasetukset

Näitä asetuksia tarvitaan saldo- ja rahanpalautus-toiminnon käyttöönottoon.

- **Ennakkomaksujen (saldo) tili:** tili, jolle saldo lisätään ja jolta sitä käytetään.
- **Saldon käytön TuoteID:** sen erillistuotteen TuoteID, jota käytetään tuoterivin luomiseen laskulle, kun saldoa käytetään laskun maksamiseen.
- **Maksun palautusten tili:** tili, jolle palautettavat rahat kirjataan odottamaan palautusta ja jolta palautukset kuitataan maksetuiksi.
- **Maksetun laskun rahan palautus** -kentän aktivoimalla laskulle näkyy painike, jonka kautta lasku voidaan hyvittää ja sen maksettu summa siirtää asiakkaalle palautettavaksi.

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-palautus3.png)

---

## Saldon lisäys ja käyttö

### Saldon lisäys

Saldoa voi lisätä asiakkaalle kahdella tavalla:

1. **Maksetun tilauksen katkaisun yhteydessä**

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-lis4.png)

<!-- 2. **TAI lisäämällä saldoa manuaalisesti asiakaskortille, kun asiakas on maksanut etukäteen**
- Saldoa voi lisätä painamalla **Lisää saldoa** -painiketta asiakkaan laskutustiedoista

![Tilaustiedot - Laskutustiedot](/img/ohjeet/saldo-lis.png)

- Saldoa lisätessä voit kirjata kirjauspäivän, summan, lehden, sisäisen selitteen (ei näy asiakkaalle), ulkoinen selite (laskulle)

![Tilaustiedot - Laskutustiedot](/img/ohjeet/saldo-lis2.png) -->

2. **Tai virheellisten suoritusten käsittelyn yhteydessä** painamalla **Liikasuoritus ennakkomaksuksi** -painiketta

![Tilaustiedot - Laskutustiedot](/img/ohjeet/saldo-lis6.png)

### Saldon käyttö

Kun saldoa on lisätty, sen määrä näkyy asiakkaan koontisivulla.

![Asiakastiedot](/img/ohjeet/saldonmaar.png)

Saldo käytetään **automaattisesti laskujen maksamiseen** laskutusajon yhteydessä. Saldon käytöstä tulee merkintä **laskun tuoteriville**.

![Tilaustiedot - Laskutustiedot](/img/ohjeet/saldo-lis3.png)

Saldon käytön tiedot päivittyvät myös asiakaskortin laskutustietoihin. Alla olevassa esimerkissä sisäisestä selitteestä näkyvät käytetty rahamäärä ja lasku, johon saldo on käytetty.

![Tilaustiedot - Laskutustiedot](/img/ohjeet/saldo-lis5.png)

<!-- ### Saldon poistaminen 

Saldon voi poistaa asiakkaalta klikkaamalla **SaldoID**:tä ja painamalla **Poista**. Kun painat **Poista**, selain näyttää vahvistusviestin. Paina **OK**, jos haluat poistaa saldon. Saldo saattaa vielä näkyä asiakkaalla poistamisen jälkeen, mutta se poistuu näkyvistä, kun päivität sivun.

![Asiakastiedot](/img/ohjeet/saldo-poisto1.png)

*Pääset poistamaan saldon painamalla SaldoID:tä ja*

![Asiakastiedot](/img/ohjeet/saldo-poisto2.png)

*painamalla Poista-nappia*

![Asiakastiedot](/img/ohjeet/saldo-poisto3.png)

*Selain näyttää vahvistusviestin. Jos haluat poistaa saldon valitse OK*-->

### Saldon palautus rahana asiakkaalle

Jos asiakas esimerkiksi kuolee ja omaiset haluavat saldon palautettuna rahana, voidaan saldo muuttaa palautettavaksi.

1. Mene asiakaskortille ja paina saldon **TiliöintiID**-linkkiä.

![Asiakaskortti - Laskutustiedot](/img/ohjeet/saldo-pal3.png)

![Asiakaskortti - Laskutustiedot](/img/ohjeet/saldo-pal6.png)
*Jos asiakkaalla on monta riviä saldoa, viimeisin on aina alin rivi.*

2. Vaihda saldon tili saldotilistä palautustiliksi. Voit halutessasi lisätä selityksen tapahtumasta.

![Asiakaskortti - Laskutustiedot](/img/ohjeet/saldo-pal2.png)

![Asiakaskortti - Laskutustiedot](/img/ohjeet/saldo-pal4.png)

3. Palautettava summa näkyy asiakkaan tiedoissa, kunnes kuittaat sen **[Maksun palautukset](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo#maksun-palautukset)** -raportilta.

![Asiakaskortti - Laskutustiedot](/img/ohjeet/saldo-pal.png)

---

## Maksetun tilauksen katkaisu

Kun maksettu tilaus katkaistaan, maksettu summa voidaan siirtää asiakkaalle saldoksi **tai** tiliöidä asiakkaalle palautettavaksi.  

**HUOM!** TaikaTilauksen kautta **ei liiku rahaa** – varsinainen rahojen palautus asiakkaan tilille tehdään taloushallinnon kautta.  

**HUOM! Jotta rahanpalautus tiliöityy oikein, rahanpalautukset tulee käsitellä niitä varten tarkoitetulla [raportilla.](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo#maksun-palautukset)**

Maksetun tilauksen katkaisu tehdään painamalla **Maksetun tilauksen katkaisu** -painiketta. Lomakkeelle lisätään katkaisupäivä ja -syy. **Ohjelma laskee automaattisesti palautettavan saldon/rahansumman.**  Tarvittaessa voit muokata *Viesti asiakkaalle* ja *Sisäinen info* -kenttien tekstejä.

### Palautus saldoksi

**Saldoa** kertyy asiakkaalle esimerkiksi silloin, kun hän on jo **maksanut tilauksen**, mutta haluaa **vaihtaa** sen toiseen tuotteeseen. Kun tilaus katkaistaan, asiakkaalle hyvitetään tilauksen **saamatta jääneet lehdet**, ja tästä muodostuva summa siirretään asiakkaan saldoon. Saldolla voidaan maksaa tulevia laskuja.

Jos haluat siirtää summan **saldoksi**, paina:
- **Katkaise tilaus ja tiliöi summa asiakkaalle saldoksi tilille [saldotili]**

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-lis4.png)

### Palautus rahana

Jos haluat tiliöidä summan **rahana palautettavaksi**, paina:
- **Katkaise tilaus ja tee palautuslasku tiliöimällä summa tilille [palautustili] asiakkaalle palautettavaksi**

**HUOM!** Tämä **ei tee rahapalautusta**, ainoastaan tiliöinnin! Itse rahojen palautus tehdään taloushallinnon kautta.  

**HUOM! JOTTA RAHANPALAUTUS TILIÖITYY OIKEIN, RAHANPALAUTUKSET TULEE KÄSITELLÄ NIITÄ VARTEN TARKOITETULLA [RAPORTILLA.](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo#maksun-palautukset)**

![Tilauksen tiedot - Maksetun tilauksen katkaisutoimet](/img/ohjeet/maksettutilaus-katkaisu.png)
*Maksetun tilauksen katkaisutoimet.*

Voit palauttaa asiakkaalle suuremman summan saldoon/rahana aktivoimalla **Salli suurempi summa** -kentän ja kirjaamalla palautettavan summan **Palautettava summa** -kenttään.

### Suuremman summan palauttaminen

Voit palauttaa asiakkaalle myös alkuperäistä suuremman summan aktivoimalla **Salli suurempi summa** -kentän ja kirjaamalla halutun määrän **Palautettava summa** -kenttään.

![Tilauksen tiedot - Maksetun tilauksen katkaisutoimet](/img/ohjeet/suurempi-summa.png)

### Katkaisun jälkeinen näkymä

Asiakkaan koontisivulla näkyy asiakkaan tämänhetkinen **saldo** tai **palautettava summa**. Saldo poistuu, kun se käytetään, ja palautettava summa poistuu, kun se kuitataan palautetuksi.

![Asiakaskortti - Laskutiedot](/img/ohjeet/koontisivu-saldo.png)

Saldon lisäämisen jälkeen asiakkaan **saldo/palautettava summa näkyy asiakaskortilla laskutustiedoissa**. Saldo käytetään automaattisesti seuraavan laskun maksamiseen.

![Asiakaskortti - Laskutiedot](/img/ohjeet/saldo4.png)
*Saldo näkyy asiakaskortilla laskutustietojen alla.*

#### Saldo

Saldon palautus näkyy alkuperäisen laskun tiliöinneillä seuraavasti:

![Asiakaskortti - Laskutiedot](/img/ohjeet/saldo-palautus6.png)

#### Rahanpalautus

Jos valitsit rahapalautuksen, järjestelmä muodostaa uuden hyvityslaskun, joka tiliöi rahanpalautuksen asetuksissa määritellylle tilille.

**HUOM! JOTTA RAHANPALAUTUS TILIÖITYY OIKEIN, RAHANPALAUTUKSET TULEE KÄSITELLÄ NIITÄ VARTEN TARKOITETULLA [RAPORTILLA.](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo#maksun-palautukset)**

![Asiakaskortti - Laskutiedot](/img/ohjeet/saldo-palautus4.png)
*Tilauksen laskuihin muodostuu palautuslasku.*

![Asiakaskortti - Laskutiedot](/img/ohjeet/saldo-palautus5.png)
*Palautuslasku*

## Virheellisten suorituksien käsittely

### Asiakas maksaa tuplana/liikaa ja summa halutaan palauttaa asiakkaalle

Kun asiakkaan suoritus sisältää virheen, se jää käsiteltäväksi **Suoritukset**-välilehdelle. Jos asiakas on maksanut summan tuplana tai liikaa ja liikasuoritus halutaan palauttaa rahana, paina **Liikasuorituksen palautus** -painiketta.

Palautusta kirjatessa voidaan:

- hakea asiakas asiakasnumeron kautta (oletuksena se asiakas, joka on suorituksen tehnyt)
- valita suorituksen pankkitili
- valita liikasuoritustili (jos vaihtoehtoja on useampi)
- kirjata takaisin maksettava rahamäärä

**HUOM!** Yleensä riittää, että kirjaat vain takaisin maksettavan rahamäärän. Muihin asetuksiin ei yleensä tarvitse koskea.

Palautus suoritetaan painamalla **Palauta liikasuoritus** -painiketta.

![Asiakaskortti - Laskutiedot](/img/ohjeet/liikasuoritus.png)

### Asiakas maksaa liikaa ja liikamaksu halutaan lisätä asiakkaan saldoon

Jos asiakas maksaa liikaa ja ylimääräinen summa halutaan palauttaa saldona, valitse **Liikasuoritus ennakkomaksuksi** -painike. 

Palautusta kirjatessa voidaan:

- hakea asiakas asiakasnumeron kautta (oletuksena suorituksen tehnyt asiakas)
- valita lehti, jonka laskuihin saldoa voi käyttää (jos saldoa voi käyttää kaikkiin laskuihin, valitse **KAIKKI**)
- valita suorituksen pankkitili
- valita liikasuoritustili (jos vaihtoehtoja on useampi)
- kirjata takaisin maksettava rahamäärä

**HUOM!** Yleensä riittää, että kirjaat vain takaisin maksettavan rahamäärän. Muihin asetuksiin ei yleensä tarvitse koskea.

Palautus saldona tallennetaan painamalla **Tallenna ennakkomaksu** -painiketta.

![Asiakaskortti - Laskutiedot](/img/ohjeet/liikasuoritus2.png)

#### Saldon poistaminen

Saldon tiliöinnit voi poistaa painamalla **Suorituksen tiliöinnin poistaminen** -painiketta. Muista poistaa **molemmat** saldoon liittyvät tiliöinnit.

Poistaminen tehdään näin:

1. Kopioi saldon **TiliöintiID**  
2. Paina **Poista tiliöinti**  
3. Toista sama toiselle saldotiliöinnille  

Tämä poistaa saldon sekä asiakkaalta että raporteilta.

![Asiakaskortti - Laskutiedot](/img/ohjeet/suorituksen-tilioinnin-poisto.png)

## Raportit

### Ennakkomaksut-tili

**Raportit**-välilehdeltä löydät raportin **Ennakkomaksut-tili**, jolta näet ennakkomaksutilin (saldotilin) tapahtumat ja tilin saldon valittuna kohdepäivänä.

![Asiakaskortti - Laskutiedot](/img/ohjeet/ennakkomaksut.png)

Raportilla näkyy:

- saldotiliin liittyvät tiliöinnit  
  *(saldon lisäys on miinusmerkkinen –, saldon käyttö plussamerkkinen +)*
- kirjauspäivät
- summat
- laskun numerot
- asiakasnumerot
- asiakkaan tiedot
- tiliöintien määrät ja summat per asiakas
- yhteenveto raportin lopussa

![Asiakaskortti - Laskutiedot](/img/ohjeet/ennakkomaksut3.png)

---

### Maksun palautukset

**HUOM! JOTTA RAHANPALAUTUS TILIÖITYY OIKEIN, PITÄÄ RAHANPALAUTUKSET KÄSITELLÄ TÄLLÄ RAPORTILLA.**

**Raportit**-välilehdeltä löydät raportin **Maksun palautukset**, joka listaa kaikki asiakkaille tehtävät palautukset. Raportilta voidaan kuitata palautuksia käsitellyiksi, jolloin ne:
- poistuvat raportilta (ellet erikseen valitse käsiteltyjä näkyviin)  
- tiliöityvät kirjanpitoon

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti.png)
*Raportti löytyy kirjanpidon raporteista.*

Raportin määrityksistä voit valita:

- näkyvätkö jo käsitellyt palautukset
- aikavälin, jolta palautettavia summia haetaan  
  **HUOM!** Anna riittävän laaja aikaväli:  
  suorituksiin liittyvät palautukset kirjautuvat **suorituksen kirjauspäivälle**, ei palautuspäivälle  
  *(esim. jos suoritus kirjattu 3.6. ja palautus tehdään 1.7., palautuksen kirjauspäivä on silti 3.6.)*
- tulostusmuodon (Näytölle, Excel, PDF)
- kirjaisinkoon
- raportin ulkoasun (ruudukolla tai ilman)

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti2.png)

Kun raportti on avattu näytölle, voit käsitellä yksittäisiä palautuksia.

Raportin ensimmäisessä sarakkeessa näkyy jokaisen palautuksen uniikki **TiliöintiID**. Kopioimalla sen raportin alla olevaan *TiliöintiID*-kenttään voit:

1. Muokata tiliöintiä
- lisätä lisätietoja, esim. selitys palautuksen syystä  
  *(esim. “Suorituksen liikamaksun palautus”)*
- tilinumeroa, mihin palautus tehdään ja tarvittaessa henkilö, jolle palautus tehdään, mikäli se on eri henkilö, kun tilauksen maksaja

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti7.png)
*Voit muokata palautuksen tietoja painamalla **Muuta tietoja** -painiketta.*

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti4.png)
*Voit muokata palautuksen liittyvää lisätieto-kenttää ja palautuksen saajan tilinumeroa ja nimeä.*

2. Kuitata palautuksen käsitellyksi

    Kun palautus on tehty asiakkaalle, summa voidaan kuitata käsitellyksi. Tämän jälkeen se poistuu raportilta, ellet määrityksistä aseta käsiteltyjä näkyviin.

    **“Kuittaa käsitellyksi”** -toiminto:

        - palauttaa summan (-) pankkiin (pankkitilin tiliöinti)  
        - tiliöi summan pois palautusten tililtä (+)

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti3.png)

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti5.png)

*Valitse yrityksesi pankkitili, jolta palautus on tehty.*

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti6.png)

*Painamalla **Kuittaa palautus käsitellyksi** luot palautuksen tiliöinnit ja merkitset palautuksen käsitellyksi, jolloin se poistuu raportilta.*