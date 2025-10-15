---
sidebar_position: 2
---

# Laskut ja laskutus

Laskutusprosessin voi halutessaan **automatisoida** TaikaTilaus-ohjelmalla, mutta laskuja voi myös käsitellä ja lähettää manuaalisesti.

## Yleistä laskuista

### Yksittäisen asiakkaan laskujen käsittely

Asiakkaan yksittäisiä laskuja voi muokata **Asiakastiedot**-näkymän **Laskut**-osiossa painamalla laskun **numeroa**. 

![Asiakastiedot - Laskut](/img/ohjeet/laskut1.png)

![Asiakastiedot - Laskut](/img/ohjeet/laskut4.png)
*Laskun numeroa klikkaamalla avautuu näkymä, josta näkyvät kaikki laskun tiedot.*

Näet laskun muodon (lasku/hyvityslasku) ja tilan (avoin, erääntynyt, hyvitetty, hyvitys) laskun numeron vieressä.

![Asiakaskortti](/img/ohjeet/lasku-muodot.png)

Laskun tietoja voi muokata **Kynä**-painikkeesta.

1. **Laskun tietoja**
 
Voit muuttaa seuraavia tietoja:
- laskun päivämäärä
- eräpäivä
- maksuehto
- huomautusaika
- viivästyskorko
- viite
- laskun tyyppi ja tarkenne
- toimitustapa (kirje, sähköposti, verkkolasku)
- laskun lähetyspäivämäärä
- lisätiedot
    - **Ulkoiset lisätiedot** tulostuvat laskulle.
    - **Sisäiset lisätiedot** näkyvät vain järjestelmässä, eivät asiakkaalle.
- asettaa laskun perintäkieltoon aktivoimalla Perintä-kielto kentän

2. **Maksajan tietoja**

**Maksajan tietoja** -kohdassa voit muokata seuraavia tietoja:

- sukunimi
- etunimi
- yritys
- osasto
- Y-tunnus
- lähiosoite
- postinumero
- postitoimipaikka
- maa
- c/o-osoite
- sähköpostiosoite
- puhelinnumero
- alennusprosentti
- kuluttajan IBAN
- kuluttajan BIC
- yrityksen verkkolaskuosoite
- yrityksen OVT-tunnus
- yrityksen välittäjätunnus
- laskutusviite tai sopimusnumero

Lisäksi voit aktivoida **Suoramaksu**-kentän, jolloin laskusta muodostuu suoramaksulasku.

**Hae maksajaa** -painikkeesta voit siirtää laskun toiselle asiakkaalle.
Maksajalla tulee olla olemassa oleva asiakaskortti.

**Lisää uusi maksaja** -painikkeesta kaikki maksajan tiedot tyhjenevät, ja voit lisätä uuden maksajan, jolla ei ole vielä asiakaskorttia.
Kun olet täydentänyt tiedot ja tallentanut, ohjelma luo asiakaskortin uudelle maksajalle automaattisesti.

![laskun tiedot](/img/ohjeet/laskut2.png)

4. Tuotteiden tietoja (TuoteriviID)

**Lisää tuote** -painikkeesta voit lisätä laskulle uuden tuotteen.

Tuotteiden tietoja voi muokata painamalla **TuoteriviID**-sarakkeessa olevaa numeroa.

Voit muokata tuotteen nimeä, lisätietoja ja hintaa.

Tuotteen hintaa voi muuttaa antamalla halutun tuoterivin summan ja painamalla **Laske veroton hinta summasta** -painiketta, minkä jälkeen valitse **Laske**.

Voit myös muokata **alennusprosenttia** ja **ALV-prosenttia**, jotka vaikuttavat laskentakaavaan.

**Hae tilaustiedot** -painikkeesta voit hakea laskuun liittyvän tilauksen tiedot (tilausnumero, tilausjakso, lehden saaja) **Lisätiedot**-kenttään.

**Lisätiedot**-kentän sisältö tulostuu asiakkaalle menevälle laskulle samalla tavoin kuin muutkin tuotetiedot.

![Laskut - Tuotteen käsittely](/img/ohjeet/laskut3.png)

5. Tiliöinnin tietoja (TiliöintiID)

Tiliöinnin tietoja voi muokata painamalla TiliöintiID-sarakkeessa olevaa numeroa.

Voit muokata seuraavia tietoja:
- Tili
- Summa
- Kirjauspäivä
- TuoteriviID

Muutosten jälkeen muista tallentaa tiedot ennen näkymästä poistumista.

Tiliöinteihin ei yleensä tarvitse tehdä muutoksia, ellei kyseessä ole virheellinen suoritus, jota olet kirjaamassa järjestelmään.

Kun esimerkiksi muokkaat tuotteen hintaa (katso edellinen osio Tuoterivin muokkaamisesta), se päivittyy automaattisesti tiliöinteihin.

**Lisää tiliöinti laskulle** -painikkeesta voit lisätä uuden tiliöinnin laskulle.

**Lisää tiliöinti suorituksella** -painikkeesta voit lisätä tiliöinnin suoritukselle, esimerkiksi silloin, kun maksettu summa poikkeaa laskun summasta ja erotus halutaan käsitellä kirjanpidollisesti, eikä periä asiakkaalta.
- Tämä voi koskea esimerkiksi tilanteita, joissa asiakas on maksanut hieman liian vähän, mutta erotus on merkityksettömän pieni, tai joissa laskulla ollut maksumuistutusmaksu jää perimättä.
- Mikäli laskulla ei ole suorituksia, **Lisää tiliöinti suoritukselle** -painiketta ei näytetä.

**Lisää uusi suoritus** -painikkeesta voit lisätä manuaalisesti suorituksen laskulle, esimerkiksi silloin, kun asiakas on maksanut laskun toimistolla paikan päällä.

**Liitä suoritus** -painikkeella voit liittää suorituksen laskuun, johon se ei ole automaattisesti kohdentunut — esimerkiksi silloin, kun viitenumero on ollut virheellinen.

Voit lukea lisää suorituksista [täältä](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/suoritukset)

![Laskut - Tuotteen käsittely](/img/ohjeet/laskut5.png)

#### **Laskun käsittelyyn** liittyvät toiminnot

Seuraavilla toiminnoilla voit käsitellä ja hallita yksittäisiä laskuja:

- **Luo hyvityslasku** – painike näkyy, kun laskua ei ole vielä hyvitetty. Sen avulla voit luoda hyvityslaskun kyseisestä laskusta.
- **Poista hyvityslasku-liitos **– painike näkyy, jos lasku on jo hyvitetty. Sen avulla voit poistaa olemassa olevan hyvityslaskun liitoksen.
- **Luo maksumuistutus #1 ja/tai maksumuistutus #2** – luo maksumuistutus, jos lasku on erääntynyt.
- **Luo laskusta kopio** – luo uuden laskun, joka sisältää kaikki alkuperäisen tiedot.
- **Luo laskusta kopio ilman maksajan tietoja** – luo laskusta kopio, josta maksajan tiedot on poistettu.
- **Tulosta lasku** – luo laskusta PDF-tiedosto, jonka voi tulostaa.
- **Tulosta lasku LASKU-muodossa** – luo PDF-tiedoston, joka näyttää laskun sen alkuperäisessä muodossa, ennen maksumuistutuksia.
- **Lähetä lasku sähköpostilla** – lähetä lasku asiakastiedoissa olevaan sähköpostiosoitteeseen.
- **Siirrä lasku toiselle tilaukselle** – siirrä lasku toiseen tilaukseen antamalla sen tilausnumero.
- **Suoramaksuilmoitus** – lähetä tai tulosta ilmoitus laskusta suoraveloitusasiakkaille.
- **Luo maksun palautus** – käytetään, kun maksettu lasku halutaan hyvittää ja **[saldo-ominaisuus](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo)** on käytössä. Luo palautuslaskun koko laskun summasta ja kirjaa summa asiakkaan tietoihin palautettavaksi.Jos haluat hyvittää vain osan laskusta (esim. tilaaja katkaisee tilauksen ja laskutetaan vain toimitetut lehdet), käytä **[Maksetun tilauksen katkaisu](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo#maksetun-tilauksen-katkaisu)** -toimintoa.

![Laskut - Tuotteen käsittely](/img/ohjeet/laskut6.png)

### Avoimen laskun palauttaminen laskutuspyynnöksi

Mikäli tulee tarve palauttaa **Avoin**–tilassa oleva lasku takaisin Laskutuspyynnöksi (esimerkiksi tilanteessa, jossa pyyntö on luotu laskuksi liian aikaisin):

- Lasku tulee ensin **hyvittää**.
- Laskun purkamisesta tehdään erillinen **tukipyyntö**, jonka perusteella asiakastuki palauttaa laskutuspyynnöt laskun luontia edeltäneeseen tilaan.
- Tämän jälkeen lasku voidaan luoda uudelleen.

### Laskun tulostaminen

Lasku voidaan tulostaa esimerkiksi seuraavissa tilanteissa:
- asiakas maksaa tilauksen tai ilmoituksen paikan päällä toimistolla
- asiakas tarvitsee alkuperäisen laskun kopiona kirjanpitoa varten

1. **Uuden tilauksen laskutuspyynnöstä**

Uuden tilauksen laskutuspyynnöstä voi luoda asiakkaalle laskun tai kuitin **Tee laskutuspyynnöstä lasku** -painikkeen kautta.

![Tilaus - Laskutuspyynnöt](/img/ohjeet/laskut7.png)

Laskun voi tulostaa joko:

- klikkaamalla laskurivillä näkyvää **Tulostin**-ikonia, tai

![Laskut](/img/ohjeet/laskut8.png)

- aktivoimalla ensimmäisessä sarakkeessa olevan **valintaruudun** ja painamalla **Tulosta PDF** -painiketta.

![Laskut](/img/ohjeet/laskut9.png)

**Lataa PDF** –ikoni ilmestyy näkymän yläpalkkiin (Palaa–ikonin viereen) ja sitä klikkaamalla tulostettava tiedosto ilmestyy selaimen ladattuihin tiedoistoihin

![Laskut](/img/ohjeet/laskut11.png)

2. **Aiemman laskun tulostaminen** 

Aiemmin luodun laskun voi tulostaa asiakkaalle siirtymällä **Laskut**-näkymään, hakemalla kyseisen laskun (esim. asiakasnumerolla) ja klikkaamalla sen numeroa.

Valitusta laskusta saa tulostettua
- kuitin → **Tulosta lasku** -painikkeesta
- alkuperäisen laskun → **Tulosta lasku LASKU-muodossa** -painikkeesta
    - Tämä valinta tulee näkyviin sen jälkeen, kun laskulle on luotu maksumuistutus.

![Laskut](/img/ohjeet/laskut10.png)

### Suoramaksu verkkopankissa

Asiakkaille, jotka haluavat maksaa laskunsa **Suoramaksuna** verkkopankin kautta, määritellään asiakaskortille seuraavat asetukset:

- Laskun toimitustapa: **VERKKOLASKU**
-  **Suoramaksu**-kenttä aktivoidaan asiakaskortilla

![Laskut](/img/ohjeet/laskut12.png)

Laskujen lähetyksen yhteydessä suoraveloitettaville verkkomaksuille **luodaan kirjeviestit**, joissa kerrotaan automaattisesti tehtävästä suoraveloituksesta.

Kirje **lähetetään samalla ajolla** kuin itse lasku, ja tieto kirjelähetyksestä tallentuu **Laskun lähetetty info** -kenttään lokitietona (esim. Itella / Suoramaksuviesti).

![Laskut](/img/ohjeet/laskut14.png)

Suoramaksun ilmoitusviestin voi myös tulostaa tai lähettää erikseen **Suoramaksuilmoitus**-painikkeesta avautuvien vaihtoehtojen avulla:
- **Tulosta suoramaksuilmoitus** – tulostaa ilmoituksen PDF:ksi
- **Lähetä suoramaksuilmoitus kirjeenä** – lähettää ilmoituksen postitse

![Laskut](/img/ohjeet/laskut13.png)

### Lisää lasku

Tarvittaessa voi **lisätä uuden laskun**, esimerkiksi oheistuotteiden myynteihin liittyen.

Lisäyksen voi tehdä klikkaamalla **Lisää lasku / Lisää uusi lasku** -painiketta:  
- Asiakkaan tietojen **Laskut**-osion kautta, jolloin asiakkaan tiedot kopioituvat automaattisesti uudelle laskulle  

![Laskut](/img/ohjeet/laskut15.png)

- **Laskujen haku**-välilehdellä

![Laskut](/img/ohjeet/laskut16.png)

Näkymään avautuu **tyhjä laskulomake**, johon  
- lisätään tai muokataan tiedot tarpeen mukaan ja lasku tallennetaan  
    - **huomioi**, että laskulle luodaan numero vasta, kun laskun **lähetys on sallittu**. Ennen kuin laskulla on numero, se on **luonnos**-tilassa, eikä se ole vielä varsinainen lasku.
    - laskun luonnos luodaan ja tallennetaan **laskunumerolla 0**  

![Laskut](/img/ohjeet/laskut17.png)

Laskulle **lisätään perustiedot ja maksajan tiedot**, jotka voi  
- hakea olemassa olevista asiakastiedoista **Hae maksajaa** -painikkeesta, tai  
- lisätä uuden asiakkuuden **Lisää uusi maksaja** -painikkeen kautta  

![Laskut](/img/ohjeet/laskut18.png)

Laskutettava tuote tai tuotteet lisätään **Lisää tuote** -painikkeen avulla.

![Laskut](/img/ohjeet/laskut19.png)

Avautuu näkymä kaikista ohjelmaan tallennetuista tuotteista. Tuotteita voi hakea hakukenttien avulla.  
Tuote valitaan laskulle painamalla halutun tuotteen **tuotenumeroa**.  

![Laskut](/img/ohjeet/laskut20.png)

### Saldon siirtäminen asiakkaalle maksetusta laskusta

**Saldoa** kertyy asiakkaalle esimerkiksi silloin, kun asiakas on **maksanut** jonkin tilauksen, mutta haluaa sen jälkeen **vaihtaa** sen toiseen tilaustuotteeseen. Kun tilaus katkaistaan, asiakkaalle muodostuu hyvitys **toimittamatta jäävistä lehdistä** (tilauksen jäljellä olevasta ajasta). Tämä määrä siirtyy asiakkaan saldoon, jota voidaan käyttää tulevien laskujen maksamiseen.

Saldon siirto asiakkaan tiedoille tehdään tilauksen tiedoista painamalla **Maksetun tilauksen katkaisu** -painiketta ja sen jälkeen **Katkaise tilaus ja tiliöi summa asiakkaalle saldoksi** -painiketta.  

Summa tiliöidään asiakkaan saldoksi lehtitalon määrittämälle tilille. 
Katkaisun jälkeen saldo näkyy asiakkaan tiedoissa ja sitä käytetään automaattisesti seuraavan laskun maksamiseen.

![Tilauksen tiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo2.png)
*Saldon siirto asiakkaalle tehdään tilauksen tiedoista.*

![Asiakaskortti - Laskutiedot](/img/ohjeet/saldo4.png)
*Saldo näkyy asiakaskortilla laskutustietojen alla.*

## Laskujen luonti

### Yleistä laskujen luonnista

![Laskutus](/img/ohjeet/laskutus.png)

**Laskujen luonti** -välilehdellä käsitellään laskutuspyynnöistä luotavat laskut ja voidaan tarkastella niitä ennen niiden muodostamista varsinaisiksi laskuiksi.

Rajaavia hakukriteereitä voi aktivoida tarpeen mukaan, esimerkiksi:

- **Hae vain ajopäivän laskutuspyynnöt** -kenttä – haku tuo näkyviin vain ne laskutuspyynnöt, jotka saa luoda ajopäivänä.

Voit myös määrittää laskujen luontimääritykset, kuten:

- **Tee laskut yksittäisinä** -kentän aktivoimalla – kaikki laskut luodaan yksittäisinä huolimatta maksajan *Koontilasku*-määrityksestä  
- Syöttämällä laskuille kirjattava **laskun päivämäärä** ja **eräpäivä**  
- **Laskuerän luontitunnus** – kaikilla samaan aikaan ajetuilla laskuilla on sama luontitunnus, jonka voit asettaa itse tai käyttää valmiiksi luotua tunnusta 

![Laskutus](/img/ohjeet/laskutus-luont.png)

Laskutuspyyntöjen listaus aloitetaan lisäämällä tarvittavat hakukriteerit ja klikkaamalla **Hae laskutuspyynnöt** -painiketta.

**Laske summat maksajittain** -kentän aktivoimalla listaukseen tulee näkyviin laskutuspyyntöjen summat maksajittain.

Aktivoimalla **Näytä peruutetun peruutussumma** -kentän listauksessa näytetään laskutettava summa peruutetun tilauksen jo toimitetuista lehdistä.

Varsinainen laskutusajo tehdään valitsemalla laskutuspyynnät, joista halutaan muodostaa lasku, ja klikkaamalla **Suorita laskutusajo** -painiketta, joka näytetään haun suorittamisen jälkeen. Laskutusajo voidaan myös automatisoida tapahtuvaksi tiettynä päivänä tai ajankohtana.

![Laskutus](/img/ohjeet/laskutus8.png)

### Tilausmyynnin laskutusajon haut

![Laskutus](/img/ohjeet/laskutus2.png)

Voit hakea **tilausmyynnin laskutuspyyntöjä** seuraavien kriteerien avulla:

- **Tuoteryhmä** ja **Tilaustuote**  
- **Maksajan asiakasnumero**  
- **Summa**

![Laskutus](/img/ohjeet/laskutus4.png)

### Ilmoitusmyynnin laskutusajon haut

![Laskutus](/img/ohjeet/laskutus3.png)

Voit hakea **ilmoitusmyynnin laskutuspyyntöjä** seuraavien kriteerien avulla:

- **Myyjä**  
- **Kanava**  
- **Julkaisu**  
- **Maksajan asiakasnumero**  
- **Varausnumero**  
- **Summa**

![Laskutus](/img/ohjeet/laskutus5.png)

### Laskutusajon tarkistus ja suoritus

Laskutuspyyntöjen listaus aloitetaan lisäämällä tarvittavat hakukriteerit ja klikkaamalla **Hae laskutuspyynnöt** -painiketta.

Ennen varsinaista hakua voi halutessaan aktivoida välitarkistusta varten **Korosta jos laskutuspyynnön ja tuotteen hinta eroaa** -kentän.  
Tämä korostaa hakulistauksella näkyvän laskutuspyynnön summan **punaisella**, mikäli se ja tuotteen verollinen oletushinta eroavat toisistaan.  
Näin on esimerkiksi tapauksissa, joissa tilauksille on asetettu alennusprosentti.

![Laskutus](/img/ohjeet/laskutus6.png)

Hakutulosten yläpuolella näkyy yhteenvetotiedot löytyneistä ja mahdollisista virheellisistä laskutuspyynnöistä.

![Laskutus](/img/ohjeet/laskutus7.png)

**Virheelliset tiedot** näkyvät listauksella **punaisella**. Tiedot tulee korjata manuaalisesti asiakastietoihin ennen varsinaisen ajon suorittamista.  

Esimerkiksi:
- puuttuvat **KIRJE** / katuosoitteet  
- puuttuvat **SÄHKÖPOSTI** / sähköpostiosoitteet  

Virheitä voi hakea listauksesta painamalla **Ctrl + F** ja kirjoittamalla hakukenttään sanan *virhe*.

![Laskutus](/img/ohjeet/laskutus9.png)

**Esikatselu laskutuksesta** -valinnan ollessa aktivoituna haetaan laskujen tiedot listalle, mutta niistä ei vielä muodosteta varsinaisia laskuja tietokantaan. Voit ladata laskujen tiedot PDF-muodossa painamalla **Lataa PDF** -painiketta.

![Laskutus](/img/ohjeet/laskutus10.png)

**Varsinainen laskutusajo** suoritetaan seuraavasti:

1. Valitse haluamasi laskutuspyynnöt, joista haluat muodostaa laskut.  
   - Voit valita laskut yksitellen klikkaamalla rivien ensimmäisen sarakkeen kentät aktiiviseksi, tai  
   - painamalla **Valitse kaikki** -painiketta, joka valitsee kaikki listalla olevat laskut.
2. Poista valinta **Esikatselu laskutuksesta** -kentästä  
3. Klikkaa **Suorita laskutusajo** -painiketta  

![Laskutus](/img/ohjeet/laskutus11.png)

Lopuksi näet yhteenvedon laskutusajosta ja voit ladata tiedot PDF-tiedostona.

![Laskutus](/img/ohjeet/laskutus12.png)

## Laskujen lähetys

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys.png)
*Laskujen lähetys -välilehti.*

### Laskujen haku ja suodatus välilehdellä

**Laskujen lähetys** -välilehdellä tarkastellaan laskuja ennen niiden lähettämistä eri kanavien kautta (esim. **KIRJE**, **SPOSTI**, **VERKKOLASKU**). Laskujen tuoterivit saa näkyviin aktivoimalla **Näytä tuoterivit** -kentän.

Laskut voidaan hakea suodatettuna halutun:

- **toimituspäivän**  
- **toimitustavan** perusteella

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys2.png)

Painamalla **Lisähakuehdot** -painiketta saat näkyviin lisää hakuehtoja, joilla voit suodattaa laskuja.  

Lisähakuehtoja ovat:

- **Laskun muoto** (esim. lasku, maksumuistutus, hyvityslasku)  
- **Aikaväli**, jolloin lasku on luotu  
- **Laskun tyyppi** (esim. TILAUS, ILMOITUS)  
- **Luontitunnus** – kaikilla samaan aikaan ajetuilla laskuilla on sama luontitunnus. Voit hakea tällä ehdolla esimerkiksi juuri luomasi laskut.  
- **Laskun summa**  
- **Teksti tuoterivissä** – esimerkiksi tilauksen saajan nimi tai tilaustuotteen nimi  

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys3.png)

**Laskunumeroa** klikkaamalla pääsee muokkaamaan kyseistä laskua.  

- Listauksella **punaisella** näkyvät puutteelliset tiedot korjataan **Asiakaskortille** (pysyvät muutokset).  
- Esimerkiksi puuttuva **Postinumero** korjataan ja asiakastiedot haetaan uudelleen laskun **Hae maksajaa** -painikkeen kautta.  

Valitsemalla laskun tai laskuja aktivoimalla taulukon ensimmäisessä sarakkeessa olevan kentän ja painamalla **Tulosta PDF** -painiketta muodostuu laskusta PDF-tiedosto tarkistelua varten.

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys8.png)

### Laskujen lähetys

Laskut lähetetään **toimitustapa kerrallaan**.

Valitse **Toimitustapa**-hakuehdoksi esimerkiksi **VERKKOLASKU** ja hae laskut. Listaukseen tulevat vain laskut, joiden toimitustapana on verkkolasku. **Valitse** kaikki laskut tai vain osa laskuista. Jos haluat lähettää vain tietyt laskut, voit valita ne aktivoimalla **ensimmäisessä sarakkeessa olevan valintaruudun**.  

Kun laskut on valittu, paina **Lähetä laskut verkkolaskuina** -painiketta.

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys4.png)

Voit vielä **tarkistaa laskut PDF-muodossa ennen lähetystä** aktivoimalla **Älä lähetä, tee laskuista vain PDF tarkastelua varten** -kentän ja painamalla **Lähetä**. Poistamalla valinnan ja painamalla **Lähetä** voit suorittaa varsinaisen laskujen lähetyksen.

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys5.png)

### Lähetettyjen laskujen tarkistelu

Luotuja postitusaineistoja voi tarkastella **Luodut aineistot** -välilehdellä.

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys6.png)

Tiedoston nimeä klikkaamalla avautuu selaimessa uusi välilehti, jossa luotuja laskuja voi tarkastella **PDF-muodossa**.

![Laskujen lähetys](/img/ohjeet/laskujen-lahetys7.png)

## Laskujen haku-välilehti

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl.png)

**Laskujen haku** -välilehdellä käsitellään sovelluksen luomia laskuja tai lisätään uusia laskuja.

Laskun **numeroa** klikkaamalla pääsee kyseisen laskun tietoihin.

Laskurivin **Tulostin**-kuvakkeesta voidaan tulostaa yksittäinen lasku.

Mikäli laskulla on **virheitä**, ne näytetään listauksella **punaisella värillä**. Esimerkiksi, jos laskun eräpäivä on pienempi kuin laskun päivä, eräpäivä näkyy punaisella.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl2.png)

Palvelussa voidaan luoda laskuja myös **luonnoksina** (nollalaskuja), jotka saa omalle listaukselle **Nollalaskuja nn kpl** -painikkeella.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl4.png)

Näkymässä voidaan listaukselta valitut laskut:

- **Tulostaa PDF:ksi**  
- **Tulostaa Exceliksi**  
- **Merkitä lähetetyiksi**  
- **Lähettää sähköpostilla**  
- **Uudelleen lähettää**  
- **Siirtää perintään**  
- **Luoda maksumuistutus**

Listausnäkymässä voidaan valita laskuja yksitellen tai kaikki laskut kerralla ja esimerkiksi tulostaa ne yhteen **Excel-** tai **PDF**-tiedostoon jatkokäsittelyä varten.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl3.png)

### Laskujen haku ja suodatus välilehdeltä

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl5.png)

Pelkkä **Hae**-painikkeen klikkaus ilman hakuehtoja listaa kaikki laskut.

Perushaku toimii **laskun numerolla**, jolloin muita hakuehtoja ei huomioida. Antamalla asiakasnumeron sille osoitettuun kenttään ja aktivoimalla **Ohita muut ehdot** -kentän voit hakea vain **asiakasnumerolla**, ohittaen muiden kenttien ehdot.

Muita hakuehtoja voi käyttää yksittäin tai yhdistelmänä, ja niiden **näkyvyys** voidaan määritellä **asiakaskohtaisesti**.

- Esimerkiksi **Yritys**- ja **Laskusarja**-kenttiä käytetään, jos samalla asiakkaalla on tarve eritellä useamman lehden laskutus toisistaan.  
- **Laskun tyyppi** ja/tai **Laskun tarkenne** -hakukenttiä hyödyntämällä voidaan suodattaa listaukselle näkyviin vain niihin liittyvät laskut.

**Hakuehtoja** on mm.

- Haku kentistä tietyllä hakuehdolla - esim. kentästä yritys yrityksen nimellä
- **Hakupäivä** – esim. laskun luomispäivä tai eräpäivä  
- **Aikaväli**, jolta laskuja haetaan  
- **Laskun tila** – esim. avoin, lähetetty, erääntynyt, maksettu  
- **Toimitustapa** – esim. kirje, verkkolasku  
- **Laskun muoto** – esim. kaikki, hyvityslasku, maksumuistutus, luonnos, loppulasku  
- **Laskun tyyppi** – esim. ilmoitus, tilaus  
- **Laskun tarkenne** – mahdollistaa tarkentavien lisätietojen vapaan tekstisyötön (esim. toimitettu tuote, verkkokauppa)  
- **Laskusarja** – minkä numeroisia laskuja haetaan, esim. 10000–10100  
- **Muut ehdot** – esim. *saa lähettää*, *ei saa lähettää*, *perintäkielto*

Painamalla **Hae uusimmat** -painiketta listaukseen tulee 100 laskua, jotka on luotu tai joita on muokattu äskettäin.

Painamalla **Hae maksumuistutettavat #1/#2** -painikkeita ohjelma hakee laskut, jotka ovat erääntyneet. 

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl6.png)

### Hyvityslaskun luonti ja poistaminen

**Laskujen haku** -välilehdellä käsitellään myös laskuja, joista voidaan luoda **hyvityslasku** painamalla **Luo hyvityslasku** -painiketta.  
Hyvityslasku on muuten identtinen alkuperäisen laskun kanssa, mutta sen tiliöinnit ovat vastakkaiset.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl7.png)

- Alkuperäinen lasku merkitään **Hyvitetyksi** (tila *Hyvitetty*), ja laskun tietoihin lisätään mm. hyvityslaskun uusi laskunumero.  
  Avoimet tuoterivien tiliöinnit kuitataan automaattisesti kirjanpitoon (*Maksamatta summa 0,00 €*).

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl9.png)

- Uudella hyvityslaskulla näkyy laskun tiedoissa **Hyvitetyn laskun tiedot** (tila *Hyvitys*).  
  Avoimet tuoterivien tiliöinnit kuitataan automaattisesti kirjanpitoon alkuperäisen laskun vastasummilla (*Maksamatta summa 0,00 €*).

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl8.png)

- **Osahyvitykset** tehdään aina alkuperäisille laskuille **tiliöintien avulla**, ei siis **Luo hyvityslasku** -painikkeen kautta.

#### Hyvityslaskujen hakeminen

Hyvityslaskuja ja hyvitettyjä laskuja voi hakea **Laskut**-välilehdeltä valitsemalla laskun tilaksi **Hyvitetty** tai **Hyvitys**.  
Taulukon *Muoto*-sarakkeessa näkyy tieto siitä, millä laskulla lasku on hyvitetty tai minkä laskun se hyvittää.

![Laskujen haku -välilehti](/img/ohjeet/hyvitetty.png)

*Hyvitetyt laskut haussa*

![Laskujen haku -välilehti](/img/ohjeet/hyvitys.png)

*Hyvityslaskut haussa*

#### Hyvityslaskun poisto

Jos hyvityslasku on luotu **vahingossa** tai se halutaan muusta syystä perua (vaikka hyvityslaskuja ei normaalisti tule poistaa), toimi seuraavasti:

1) Avaa alkuperäinen lasku, joka on hyvitetty, ja klikkaa **Poista hyvityslasku-liitos** -painiketta.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl10.png)

2) Avaa hyvityslasku, jolla alkuperäinen lasku hyvitettiin, ja poista yksitellen 
- **Tiliöintirivit** rivien lopussa näkyvällä **X**-ikonilla

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl11.png)

- **Tuoterivit** rivien lopussa näkyvällä **X**-ikonilla

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl13.png)

3) Avaa laskun tiedot **kynä**-ikonista ja paina **Poista lasku** -painiketta.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl12.png)

Näin alkuperäinen lasku jää voimaan, ja hyvityslasku poistuu listaukselta. Tämän jälkeen alkuperäistä laskua voi käsitellä normaalisti.

### Maksumuistutukset

**Laskut** -välilehdellä käsitellään myös erääntyneitä laskuja, joista halutaan lähettää esimerkiksi maksumuistutuksia. **Laskutusajon automatisointi voidaan sopia asiakaskohtaisesti** (esim. kerran viikossa tapahtuvaksi), jolloin sekä alkuperäiset laskut että maksumuistutuslaskut luodaan ja lähetetään tausta-ajoina suoraan palvelusta sovittujen määrittelyjen mukaisesti.

#### Muistutuslaskujen tekstitykset

Muistutuslaskujen lomakkeille lisättävät lehtikohtaiset tekstitykset lisätään **[Asetukset / Laskutekstit](/docs/ohjeet/asetukset#laskutekstit)** -näkymässä.

#### Ennen muistutuslaskujen luontia

Ennen muistutuslaskujen luontia tulee varmistaa, että mahdolliset **virhetilanteet on korjattu**.  
Virheellisiä suorituksia löytyy:

- **[Suoritukset](/docs/ohjeet/ohjeet/yleiset_ominaisuudet/suoritukset)** -välilehdeltä
- **[Tarkistusraporteilta Raportit -välilehdeltä](/docs/ohjeet/yleiset_ominaisuudet/raportit#tarkastusraportit)**  

#### Muistutuslaskujen haku

Valitsemalla esimerkiksi **Laskun tila** -valikosta hakukriteeriksi **Erääntynyt** ja klikkaamalla **Hae** -painiketta listataan kaikki laskut, joita ei ole laskun eräpäivään mennessä maksettu.

Erilliset hakupainikkeet toimivat seuraavasti:

- **Hae maksumuistutettavat #1** – listaa **erääntyneet laskut**, joiden eräpäivästä on kulunut **14 päivää** (tai muu asiakaskohtaisesti sovittu aika). Näistä laskuista voidaan muodostaa **Maksumuistutus #1**.  
- **Hae maksumuistutettavat #2** – listaa **laskut, joista on jo lähetetty Maksumuistutus #1**, ja joiden **Maksumuistutus #1:n eräpäivästä on kulunut 7 päivää** (tai muu sovittu aika). Näistä laskuista voidaan muodostaa **Maksumuistutus #2**.

Asiakaskohtaisesti määritellään, kuinka monen päivän kuluttua maksumuistutukset lähetetään.  
Yleisimmin **Maksumuistutus #1** lähetetään 14 päivää laskun eräpäivän jälkeen ja **Maksumuistutus #2** seitsemän päivää ensimmäisen muistutuksen eräpäivän jälkeen.

- **Valitse kaikki** -painikkeella valitaan kaikki listauksella olevat laskut jatkokäsittelyä varten.  
- Yksittäisen laskun **numeroa** klikkaamalla päästään kyseisen laskun tietoihin.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl14.png)

#### Maksumuistutuksien luominen

Listaukselta valituille laskuille muodostetaan maksumuistutuslaskut seuraavilla painikkeilla:

- **Luo maksumuistutus #1**  
- **Luo maksumuistutus #2**  
- **Siirrä perintään** – tämän jälkeen valitut laskut eivät ole enää käsiteltävissä palvelussa.

Muistutuslaskut luodaan heti painikkeen klikkauksen jälkeen, ja onnistuneesta luonnista näytetään koonti-ilmoitus.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl15.png)

Luotujen muistutuslaskujen **Muoto**-sarakkeen tila päivittyy esimerkiksi *Maksum.#1* (päivitys näkyy, kun klikkaat **Hae** -painiketta uudelleen).

Tarvittaessa jo lähetetystä maksumuistutuksesta voi tulostaa alkuperäisen laskun **Tulosta lasku LASKU-muodossa** -painikkeen kautta.

### Perintä

Laskut voi siirtää perintään valitsemalla halutut laskut ja painamalla **Siirrä perintään** -painiketta. 

![Laskujen haku -välilehti - Siirrä perintään](/img/ohjeet/perinta.png)

Perintään viennit tehdään yleensä noin kerran kuukaudessa. Muistutuslaskut siirretään perintään, jos maksua ei ole suoritettu kahden viikon sisällä muistutuslaskun eräpäivästä.

**Perintään siirron vaiheet:**

1. Ennen perintään siirtoa käydään **Laskut**-listauksen erääntyneet laskut silmämääräisesti läpi.  
   Aiemmin sovitut poikkeukset jätetään huomioimatta, eli ne **jätetään pois perintäajosta**.
2. Perintäajon yhteydessä maksu **hyvitetään tilaukselle tai laskulle**, ja tilaukselle lisätään **katkaisupäivä** (esim. heti tai +30 päivää).
3. Perintäajo tuottaa **Excel-taulukon käsitellyistä laskuista**.  
   Tämä taulukko tarkistetaan ja tarvittaessa päivitetään, jos yksittäisen maksun tai tilauksen käsittelyä jatketaan.
4. **Taulukko lähetetään perintätoimistolle** tarvittaessa.

![Laskujen haku -välilehti - Siirrä perintään](/img/ohjeet/perinta2.png)
*Ohjelmisto ilmoittaa laskujen onnistuneesta siirrosta perintään.*

![Laskujen haku -välilehti - Siirrä perintään](/img/ohjeet/perinta3.png)
*Ohjelmisto luo Excel-tiedoston siirretyistä laskuista tarkistusta ja päivitystä varten.*

**Perintätoimisto** raportoi yritykselle, jonka asiakaspalvelu päivittää laskujen tiedot perintätoimiston ilmoittaman tilanteen mukaisesti.  
Perintäajossa käsiteltyjä laskuja **ei voi enää tarkastella palvelussa**.

### Maksamattomien tilausten loppulaskut

Tilauksiin liittyviin **Maksumuistutus-laskuihin** voidaan lisätä automaattinen **päätöskäsittely**, mikäli **Maksumuistutus #2** -laskua ei ole maksettu.

Ohjeet maksamattoman tilauksen manuaaliseen katkaisuun löytyvät [Tilaus-välilehdeltä](/docs/ohjeet/tilaustenhallinta/tilaukset#maksamattoman-tilauksen-katkaisu). Tilauksen katkaisun yhteydessä muodostetaan **Loppulasku** jo toimitetuista lehdistä.

Mikäli asiakas ei maksa myöskään **Loppulaskua**, se käsitellään eräpäivän jälkeen **automaattisesti**.

- Määriteltävissä erikseen näiden loppulaskujen käsittelyn **alaraja** (esim. alle 5 € laskuja ei enää käsitellä)  
- Avoimet tiliöintierät **tiliöidään** automaattisesti **Maksuhuomautus-** ja **Luottotappio**-tileille

**Poikkeukset** automaattiseen käsittelyyn:

- Asiakkaiden haluamia **Koontilaskuja** ei käsitellä automaattisesti, vaan ne on käsiteltävä aina manuaalisesti.  
- Jos asiakas maksaakin laskun alkuperäisen pääoman, suoritus jätetään **virhelistalle**, ja kohdistus käsitellään manuaalisesti samoin kuin tilauksen käsittely (esim. *katkaisun poisto* tai *uusi tilaus*).

Katkaistujen tilausten loppulaskut löytyvät **Laskut**-listaukselta hakemalla hakukriteerillä:  
- kirjoita **TOIMITETUT TUOTTEET** *Laskun tyyppi* -kenttään.

![Laskujen haku -välilehti](/img/ohjeet/laskut-vl16.png)

<!-- /// löytyykö alla olevaa raporttia enää?
 Samoin ne on katsottavissa Raportit / Automaattiajolla katkaistut tilaukset –painikkeen avulla

- Raportti tulostettavissa Excel-taulukkoon jatkokäsittelyä varten listauksen alla olevalla Lataa KatkaistavatTilaukset_ … -painikkeella -->

## Esimerkkitapauksia laskuista

### Manuaalinen laskupyynnön lisääminen

Joissain tapauksissa voi olla tarve luoda ”ylimääräinen” lasku, esimerkiksi peruutuksen yhteydessä, jolloin lasku voi koskea jo ilmestynyttä, mutta maksamatonta lehteä (lähetetty asiakkaalle ennen peruutusta).

Manuaalinen laskupyynnön lisääminen asiakkaalle tehdään seuraavasti:

1. **Hae asiakas** Etusivun haun kautta.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit2-1.png)
 
2. **Avaa halutun tilauksen tiedot** klikkaamalla tilausriviä.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit2-2.png)

3. **Avaa** *Laskutuspyynnöt*-osion **Lisää laskutuspyyntö** -toiminto.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit2-3.png)

4. **Täydennä laskutuspyynnön tiedot** (esim. jo lähetetyn julkaisun yksikköhinta ja muut tarvittavat tiedot) ja **tallenna**.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit2-4.png)

5. **Täydennä tarvittaessa myös tilauksen maksajan tiedot.**

### Suorituksen lisääminen laskulle

**Laskujen haku**-näkymässä pääsee muokkaamaan valitun yksittäisen laskun tietoja klikkaamalla laskun numeroa.

Esimerkiksi suorituksen lisääminen laskulle tehdään seuraavasti:

1. **Hae haluttu lasku** esimerkiksi asiakkaan sukunimellä tai laskunumerolla.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-1.png)

2. **Avaa laskun tiedot** klikkaamalla laskun numeroa.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-2.png)

3. **Avaa** *Myynnit ja suoritukset* -osion **Lisää uusi suoritus** -toiminto.  
   - **Lisää uusi suoritus** -painike on tarkoitettu maksuille, jotka saadaan muuta kautta kuin esimerkiksi elektronisista pankkien viitemaksuaineistoista (esim. käteismaksut).  
   - **Liitä suoritus** -painike on tarkoitettu maksuille, jotka saadaan esimerkiksi Maventa/Kuluttajalaskut- tai pankkien viitemaksuaineistojen kautta (saapunut maksu).

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-3.png)

4. **Täydennä tilit ja suorituksen muut tiedot** ja **tallenna**.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-4.png)

### Uuden laskun luominen kopioimalla

**Laskujen haku**-näkymän hakulistauksen avulla voi hakea aiemman laskun, josta halutaan lähettää uusi lasku aiempien pohjatietojen perusteella.  
Tätä toimintoa käytetään esimerkiksi silloin, kun halutaan luoda **korvaava lasku** hyvityslaskun yhteydessä.

- Lasku voi koskea asiakas- tai laskutustietojen muuttumista

Esimerkiksi laskun kopioiminen asiakkaalle tehdään seuraavasti:

1. **Hae kyseisen laskun tiedot** *Laskujen haku*-listauksen kautta.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-1.png)

2. **Avaa laskun tiedot** klikkaamalla laskun numeroa.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-2.png)

3. **Paina** joko **Luo laskusta kopio** tai **Luo laskusta kopio ilman maksajan tietoja** -painiketta.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit4-3.png)

4. **Vahvista** avautuvassa popup-ilmoituksessa valinta painamalla **OK**.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit4-4.png)

5. **Muokkaa laskua** painamalla **Kynä**-ikonia.  
   - Jos on tarvetta, voit muuttaa maksajan hakemalla olemassa olevan asiakkaan tai lisäämällä uuden maksajan **Hae maksajaa** tai **Lisää uusi maksaja** -painikkeiden kautta.  
   - Tietojen tarkastuksen jälkeen **aktivoi Lähetys sallittu** -toiminto, jotta lasku voidaan lähettää.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit4-5.png)

5. **Tallenna** lasku.
7. **Jatka** [Laskujen lähetys](/docs/ohjeet/yleiset_ominaisuudet/lasku#laskujen-l%C3%A4hetys-1) -välilehdessä laskun lähettämiseksi asiakkaalle.

### Laskun osahyvittäminen

**Laskut**-näkymän hakulistauksen avulla voi hakea aiemman laskun, josta halutaan lähettää uusi **osahyvityslasku** aiempien pohjatietojen perusteella.

Tätä toimintoa käytetään esimerkiksi silloin, kun halutaan tehdä **korvaava lasku** osahyvityksen yhteydessä.

- Lasku voi koskea **maksutietojen muuttumista** osahyvityksen takia.  
- Hyvittävän laskun **tuoterivin summaa** voi muuttaa osahyvityksen summalla.  
  Tämä muutos vaikuttaa hyvitetyn laskun **maksamatta olevaan summaan** (eli osahyvityksen jälkeen maksettavaksi jäävään osuuteen).

Esimerkiksi laskun osahyvittäminen asiakkaalle tehdään seuraavasti:

1. **Hae kyseisen laskun tiedot** *Laskujen haku*-listauksen kautta.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-1.png)

2. **Avaa laskun tiedot** klikkaamalla laskun numeroa.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit3-2.png)

3. **Lisää laskun Myynnit ja suoritukset** -osion tiliöinteihin osahyvitykseen liittyvät rivit **Lisää uusi suoritus** -painikkeen kautta:

   - Lisää **Kassatili (S)** tai erillinen **Kuittaustili**, ja aseta **Rahamäärä 0,00 €**  
   - Lisää alkuperäisessä tuotetiliöinnissä käytetty **Kuittaustili (K)** ja **hyvitettävä rahamäärä –nn,nn €**  
   - Lisää **Kulutili (T)** (esim. *Luottotappiotili* tai vastaava) ja **hyvitettävä rahamäärä +nn,nn €**

![Laskujen haku -välilehti](/img/ohjeet/esimerkit5-3.png)

4. **Lähetä lasku asiakkaalle** uudella jäännössummalla (*Maksamatta osuus*).  
   Muuttunut summa näkyy laskupohjan **Pankkisiirto**-osassa.

![Laskujen haku -välilehti](/img/ohjeet/esimerkit5-4.png)

## Vastaanottoilmoitukset

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset.png)

**Vastaanottoilmoitukset**-välilehden listauksen avulla vertaillaan vastaanotetut **verkkomaksuvaltuutukset** asiakasrekisteristä löytyviin asiakaskortteihin.  

Oletuksena vastaanottoilmoituksia haetaan palveluun **6 tunnin välein**.

RI-sanomassa saadut vastaanottoilmoitusten **koodit** ovat:
- 0 = Lisäys (verkkomaksuvaltuutuksen lisäys)
- 1 = Muutos (verkkomaksutietojen muutos)
- 2 = Poisto (verkkomaksuvaltuutuksen poisto)

Vastaanottoilmoitusten suoramaksujen **tyypit** ovat:
- 00 = eLasku
- 01 = Suoramaksu

Painamalla **Käsittele vastaanottoilmoitukset** -painiketta vastaanotetut muutokset päivittyvät vertailulistaukselle manuaalisesti. Automaattisesti ne päivitetään 6 tunnin välein.

### Manuaalinen käsittely virhetilanteessa

Tarvittaessa **päivitetään asiakkaan** IBAN/BIC tiedot asiakaskortin **Laskutustietoihin** manuaalisesti virheen tapahtuessa. Näet, että vastaanottoilmoitus on jäänyt virheeseen, kun **Käsitelty info** -sarakkeessa lukee joitain muuta kuin Käsitelty OK.

**Esimerkki:** Alla olevassa kuvassa (tiedot kuvitteellisia) *Testaaja Teemu* on tehnyt verkkomaksuvaltuutuksen (KOODI = ADD).  
Valtuutusta ei ole pystytty liittämään asiakaskorttiin, koska asiakasnumero on ollut virheellinen.  
Tiedon näet **Käsitelty info** -sarakkeessa.

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset1.png)

Menettele seuraavasti:

1)  **Etsi asiakas** esimerkiksi nimen perusteella.

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset2.png)

2) **Avaa asiakkaan tiedot** asiakaskortilta **Kynä**-ikonista.

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset3.png)

3) **Kopioi IBAN- ja BIC-tiedot** vastaanottoilmoituksesta asiakkaan tietoihin.

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset4.png)

4) **Vaihda laskujen toimitustavaksi** **VERKKOLASKU**.

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset5.png)

5) **Tallenna** muutokset.

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset6.png)

6) **Kuittaa vastaanottoilmoitus käsitellyksi** painamalla ilmoituksen numeroa ja merkitsemällä se käsitellyksi.

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset7.png)

![Vastaanottoilmoitukset](/img/ohjeet/vastaanottoilmoitukset8.png)

Seuraava lasku lähetetään asiakkaalle **verkkolaskuna**, olettaen että asiakas on syöttänyt tiedot oikein.







