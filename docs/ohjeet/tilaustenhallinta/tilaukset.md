---
sidebar_position: 1
---

# Tilaus

## Tilauslomake ja -tiedot
Yksittäiseen asiakkaaseen liittyvät tilaukset näkyvät **Asiakastiedot**-näkymässä omassa kentässään. Yksittäistä tilausta klikkaamalla pääset muokkaamaan sen tietoja. Pääset tiettyyn tilaukseen myös suoraan etusivulta **hakemalla tilausnumeroa**.

![Asiakas - Tilaukset](/img/ohjeet/tilaukset1.png)

**Tilauslomakkeella** voit muokata seuraavia tietoja:

- Tilaustietoja (esim. tilauksen Katkaisun syyn)
- Hinta- ja maksutietoja (tilaushetkellä kiinnitetyn tuotteen hinta)
- Laskutietoja
- Tilaaja ja Maksaja tietoja
- Laskutuspyyntöjä, joiden kautta tilaus laskutetaan

![Tilauksen muokkaus](/img/ohjeet/tilaukset2.png)

### Esimerkki tilauksen muuttamisesta

Asiakkaan **voimassa olevaa tilausta** voidaan tarvittaessa muuttaa
- Esim. asiakas on maksanut epähuomiossa laskun kahteen kertaan

Tilauksen Tilaustiedot–osiossa siirretään tilauksen alkuperäinen Loppuaika ylimääräisen maksuosuuden verran eteenpäin (esim. 1 kk Määräaikaistilauksen lasku maksettu kahteen kertaan, jolloin Loppuaikaa muutetaan 15.05.2024 -> 15.06.2024)

![Tilauksen muokkaus](/img/ohjeet/tilaus-jatko.png)

![Tilauksen muokkaus](/img/ohjeet/tilaus-jatko2.png)

Tilauksen alkuperäinen lasku on myös päivitettävä samalla kertaa
- Valitsemalla tilaukseen liittyvän laskun painamalla laskun numerosta

![Tilauksen muokkaus](/img/ohjeet/tilaus-jatko3.png)

- Lisäämällä laskun **Tuotteet**–osioon jatkettavan ajanjakson tuoterivi **Lisää tuote** –painikkeesta

![Tilauksen muokkaus](/img/ohjeet/tilaus-jatko4.png)

![Tilauksen muokkaus](/img/ohjeet/tilaus-jatko5.png)

*Valitse tilausta vastaava tuote tuotelistalta.*

![Tilauksen muokkaus](/img/ohjeet/tilaus-jatko6.png)

*Muokkaa tuoteriviä painamalla TuoteriviID:stä.*

![Tilauksen muokkaus](/img/ohjeet/tilaus-jatko7.png)

*Hae tuoteriville tilaustiedot painamalla **Hae tilaustiedot** -painikkeesta.*

![Tilauksen muokkaus](/img/ohjeet/tilaus-jatko8.png)

*Muokkaa aika vastaamaan lisättyä tilausjaksoa.*

- Tallentamalla muutokset ja

- Liittämällä asiakkaan maksama (tupla)suoritus **Myynnit ja suoritukset** -osiossa **Liitä suoritus** –painikkeen kautta

### Laskutuspyynnöt

Laskutuspyyntöjä pääsee 
- Muokkaamaan **Kynä**–ikonista
- Lisäämään **Lisää laskutuspyyntö** –painikkeesta

![Laskutuspyynnöt](/img/ohjeet/laskutuspyynto.png)

*Maksutuspyyntöjä voi lisätä ja olemassa olevia voi muokata.*

**Laskutuspyyntöä voi muokata vain ennen varsinaisen laskun luomista.** 

![Laskutuspyynnön muokkaus](/img/ohjeet/laskutuspyynto-muokkaus.png)

*Laskutuspyynnön muokkauslomake.*

Voit muokata:
- **Päivämäärää** milloin pyynnön saa luoda laskuksi
- **Hintaa** (verollinen ja veroton)
- **Määrää** (sama kuin tilauksessa olevien lehtien määrä) 
- **Alennusprosenttia**

![Laskutuspyynnön muokkaus - Lisätiedot](/img/ohjeet/laskupyynto-tekstit.png)

*Voit valita laskulle tulevat tuotetekstit.*

**Lisätiedot tuoteriville** –kentässä luodaan asiakkaan laskulle näkyviin haluttava teksti
- Ne voidaan myös tallentaa **Lisää vakiotekstiksi** –painikkeesta ja käyttää jatkossakin
- Voit käyttää aikaisemmin käytettyjä laskutekstejä painamalla **Tuoterivin vakiotekstit** –painikkeesta ja valitsemalla haluamasi tekstin. Teksti kopioituu tekstikenttään, jossa sitä voi tarvittaessa vielä muokata.

Laskutuspyynnöstä voi luoda asiakkaalle laskun heti painamalla **Tee laskutuspyynnöstä lasku** –painiketta.

Laskutuspyynnön voi myös poistaa Poista-painiketta painamalla.

## Alapalkin toiminnot

![Tilauksen tiedot -alapalkki](/img/ohjeet/tilaukset3.png)
*Tilauslomakkeen alapalkista voi nappeja painamalla suorittaa eri toimintoja.*

### Tilausvahvistus

**Tilausvahvistus**-painikkeesta voi lähettää asiakkaalle tilausvahvistuksen kirjeellä tai sähköpostitse. Voit myös esikatsella tilausvahvistuksen. Tilausvahvistuksen teksti määritellään <a href="/docs/asetukset#viestipohjat">oletusasetuksien Viestipohjat-väilehdeltä</a>.

![Tilausvahvistus](/img/ohjeet/tilausvahvistus.png)

### Tilauksen katkaisu maksamattomana

Asiakkaan **voimassa oleva tilaus**, jota ei ole maksettu, voidaan tarvittaessa katkaista ja muodostaa uusi lasku jo toimitetuista lehdistä.

Tilauslomakkeen alaosasta löytyvää **Maksamattoman tilauksen katkaisu**–painiketta painamalla pääset tilauksen katkaisukäsittelyyn.

![Tilauslomake](/img/ohjeet/maksamaton.png)

Lomakkeelle täytetään
- Katkaisutiedot - **Katkaisupäivä ja Katkaisun syy**
- **Avoimet Laskut** –listauksesta aktivoidaan tilaukseen liittyvät maksamattomat laskut käsittelyyn
- Aktivoimalla **Luo lasku toimitetuista tuotteista** -kentän, ohjelma luo laskun jo toimitetuista lehdistä
- Tarvittaessa voit muokata **Tuote** ja **Lisätiedot** ja **Laskun viesti** –kenttien oletustekstejä.

**Suorita katkaisun käsittelytoimet** –painikkeesta suoritetaan varsinaiset toimenpiteet
- Tilaus katkaistaan
- Alkuperäinen avoin lasku Hyvitetään
- Uusi lasku muodostetaan

![Katkaisukäsittely](/img/ohjeet/katkaisutoimet.png)

Lehden katkaisun yhteydessä **tulee samalla muuttaa tilauksen Loppupäivä samaksi kuin Katkaisupäivä**.
Tällöin vältytään tilanteelta, jossa Kestojatkon ajossa toinen voimassaoleva tilaus ei uusiutuisikaan.

### Maksetun tilauksen katkaisu

Kun maksettu tilaus katkaistaan, voidaan maksettu summa siirtää asiakkaalle saldoksi tai voidaan tehdä tiliöinti asiakkaalle palautuvasta rahasta tilauksen laskulle (**HUOM!** TaikaTilauksen kautta **ei liiku rahaa**! Palautus asiakkaan tilille pitää tehdä taloushallinnon kautta!). **HUOM! ETTÄ RAHANPALAUTUS TILIÖITYY OIKEIN, PITÄÄ RAHANPALAUTUKSET KÄSITELLÄ NIIHIN LIITTYVÄLLÄ [RAPORTILLA.](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo#maksun-palautukset)**

**Saldoa** kertyy asiakkaalle esimerkiksi siinä tapauksessa, että asiakas on **maksanut** jonkun tilauksen, mutta haluaa sittenkin **vaihtaa** sen toiseen tilaustuotteeseen. Kun tilaus katkaistaan, tulee asiakkaalle hyvityksenä tilauksen **saamattomista lehdistä** tietty euromäärä. Tämä määrä siirtyy asiakkaan saldoon, jota voidaan käytettää tulevien laskujen maksamiseen.

Maksetun tilauksen katkaisu tehdään painamalla **Maksetun tilauksen katkaisu** -painiketta. Lomakkeelle lisätään katkaisupäivä ja -syy. **Ohjelma laskee automaattisesti hyvitettävän saldon/rahasumman määrän**. Tarvittaessa voit muokata Viesti asiakkaalle ja Sisäinen info -kenttien tekstejä.

Jos haluat palauttaa takaisin maksettavan summan **saldoksi**, paina **Katkaise tilaus ja tiliöi summa asiakkaalle saldoksi tilille [saldotili]** -painiketta.

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-lis4.png)

Jos haluat palauttaa takaisin maksettavan summan asiakkaalle, paina **Katkaise tilaus ja tee palautuslasku tiliöimällä summa tilille [palautustili] asiakkaalle palautettavaksi** -painiketta. **HUOM!** Tämä **ei** tee itse palautusta! Palautus **pitää tehdä taloushallinnon kautta**! Tiliöinti tehdään kirjanpidon raportteja varten!

**HUOM! ETTÄ RAHANPALAUTUS TILIÖITYY OIKEIN, PITÄÄ RAHANPALAUTUKSET KÄSITELLÄ NIIHIN LIITTYVÄLLÄ [RAPORTILLA.](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo#maksun-palautukset)**

![Tilauksen tiedot - Maksetun tilauksen katkaisutoimet](/img/ohjeet/maksettutilaus-katkaisu.png)
*Maksetun tilauksen katkaisutoimet.*

Voit palauttaa asiakkaalle suuremman summan saldoon/rahana aktivoimalla **Salli suurempi summa** -kentän ja kirjaamalla palautettavan summan **Palautettava summa** -kenttään.

#### Katkaisun jälkeinen näkymä

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

### Tilauksen jatkaminen

Yksittäistä tilausta voi jatkaa vastaavilla tiedoilla **Jatka tilausta** -painikkeesta. Tilauksen jatkaminen luo uuden tilauksen tämän tilauksen perään ja tekee laskutuspyynnöt. Jatkettava tilaus voi olla kesto- tai määräaikainen. Laskutuspyynnöstä voi tehdä tilauslaskun heti ja lähettää se maksajalle.

![Asiakaskortti - Laskutiedot](/img/ohjeet/jatka.png)

### Tilauksen poistaminen

Yksittäisen tilauksen voi myös poistaa **Poista tilaus** -painikkeella.

![Asiakaskortti - Laskutiedot](/img/ohjeet/poista.png)