---
sidebar_position: 6
---

# Raportit

## Yleistä raporteista

![Raportit](/img/ohjeet/raportit.png)

**Raportit**-välilehdellä koostetaan erilaisia raportteja sovelluksen tiedoista käyttäjän valitsemassa tulostusmuodossa.

Raporttien painikkeen **?**-ikonista löytyy lisätietoja raportin koostamiseen ja käyttötarkoitukseen liittyen.

Valmiita raporttipohjia voidaan tarvittaessa luoda **asiakaskohtaisesti** läpi käytyjen tarpeiden mukaisesti.  
Raportteja voidaan tuottaa esimerkiksi:

- **Kirjanpitoa** varten  
- **Laskutukseen** liittyen  
- **Tilausmääriä** varten  
- **Myyntimääriä** varten

### Raportin hakukriteerien määrittely

![Raportit](/img/ohjeet/raportit2.png)

**Raporttipohjan valinnan** jälkeen määritellään tarkemmat hakukriteerit tietojen listausta varten.  

Näitä voivat olla esimerkiksi:

- **Hakuaikaväli** – syötä itse halutut alku- ja loppupäivät  
- **Tulostustapa** – valitse, tulostetaanko raportti näytölle, PDF-muotoon vai taulukoksi  
- **Kirjaisinkoko** – voit pienentää fonttia, jos tiedot eivät mahdu siististi raportille  
- **Raportin ulkoasu** – valitse, näytetäänkö raportti ruudukolla vai ilman taustataulukoinnin rajaviivoja  
- Muut valinnat **raporttikohtaisesti** (esim. laskun tila *Maksamattomat tilaukset* -raportissa)

**Tee raportti** -painike tuottaa varsinaisen raportin valitun tulostustavan mukaisesti:

- Raportti avautuu **näytölle**  
- Ilmestyy **linkki Excel-taulukkoon**  
- Ilmestyy **linkki PDF-tulosteeseen**

![Raportit](/img/ohjeet/raportit7.png)

**Näytä raportin kuvaus** -painikkeella saa näkyviin lisätietoja raportin luomiseen ja sisältöön liittyen.

## Kirjanpidon raporttien kuvaukset

### Kirjanpitoyhteenveto

**Kirjanpitoyhteenveto**-raportilla haetaan annetulla aikavälillä kirjatut tiliöintitapahtumat tileittäin, jaoteltuna tilin **debet**- ja **kredit**-puolille. Raportilla lasketaan näiden summat, ja jos kirjanpidossa ei ole virheitä, debet- ja kredit-puolien summien tulisi olla yhtä suuret.

![Raportit](/img/ohjeet/kirjanpitoyhteenveto.png)

### Vientiluettelo

**Vientiluettelo**-raportilla näytetään kaikki tiliöintitapahtumat valitulta aikaväliltä, ja ne ryhmitellään tileittäin.  
Raportilla näytetään myös tiliöintitapahtumaan liittyvä **lasku** ja **laskun maksajan asiakasnumero**.

![Raportit](/img/ohjeet/vientiluettelo.png)

### Laskupäiväkirja

**Laskupäiväkirja**-raportille haetaan annetulla aikavälillä päivätyt laskut, ja raportilla näytetään laskujen summat ja maksutiedot verrattuna kuluvaan päivään.

![Raportit](/img/ohjeet/laskupaivakirja.png)

<!--  ### Laskupäiväkirja Digi

Raportille haetaan annetulla aikavälillä päivätyt laskut, jotka sisältävät digituotteita, ja näytetään niiden summa ja maksutiedot kuluvaan päivään verrattuna. (Huom. Laskuissa voi olla muitakin tuotteita kuin Digi).

![Raportit](/img/ohjeet/laskupaivakirja-digi.png)-->

### Laskupäiväkirja ilman maksutietoja

**Laskupäiväkirja ilman maksutietoja** -raportille haetaan annetulla aikavälillä päivätyt laskut.  
Raportilla näytetään laskujen summat, mutta **maksutietoja ei esitetä**.

![Raportit](/img/ohjeet/laskupaivakirja2.png)

### Laskupäiväkirja tuoteriveillä

**Laskupäiväkirja tuoteriveillä** -raportille haetaan annetulla aikavälillä päivätyt laskut, ja raportilla näytetään laskujen summat, maksutiedot sekä **tuoterivit** kuluvaan päivään verrattuna.  

Raportin lopussa esitetään **eri tuotteiden summat yhteensä**.

![Raportit](/img/ohjeet/laskupaivakirja3.png)

![Raportit](/img/ohjeet/laskupaivakirja3-2.png)

### Reskontraluottelo

**Reskontraluettelo**-raportille haetaan laskut, joilla on tiliöintitapahtumia annetulla aikavälillä, ja lasketaan näiden summat.  
Raportin lopussa esitetään:

- **Reskontran alkusaldo**  
- **Aikavälin laskutiliöinnit**  
- **Aikavälin maksut (kuittaukset)**  
- **Aikavälin maksut (suoritukset)**  
- **Reskontran loppusaldo**, laskettuna löytyneiden kirjausten perusteella

![Raportit](/img/ohjeet/reskontra.png)

![Raportit](/img/ohjeet/reskontra2.png)

### Maksutapahtumaluettelo

**Maksutapahtumaluettelo**-raportille haetaan annetulla aikavälillä tulleet **suoritukset**, jotka näytetään **ryhmiteltyinä kirjauspäivän mukaan**. Kunkin kirjauspäivän sisällä suoritukset ryhmitellään **tileittäin**, ja raportin lopussa esitetään eri tilien summat.

> **Huom.** Suoritus on tiliöitävä (eli kohdistettava laskulle), jotta se näkyy **suorituspäiväkirjalla**.

![Raportit](/img/ohjeet/maksutapahtumaluettelo.png)

![Raportit](/img/ohjeet/maksutapahtumaluettelo2.png)

### Avoimet laskut

**Avoimet laskut** -raportille haetaan kohdepäivänä **maksamaton**-tilassa olevat laskut. Raportilla huomioidaan laskujen kaikki maksusuoritukset, jotka on tehty **kohdepäivää ennen tai kohdepäivänä**. Maksetut laskut jätetään pois raportilta, ja **osasuoritukset** huomioidaan maksamatta olevassa summassa. 

Tilinpäätöstä varten (esim. kalenterivuosi) kohdepäiväksi asetetaan **31.12.**, jolloin huomioidaan kaikki suoritukset, jotka ovat tulleet ennen klo **23:59**. 

Raportin lopussa näytetään **asiakkaat (asiakasnumero ja nimi)** sekä se, kuinka paljon yksittäisillä asiakkailla on avoimia maksuja.

![Raportit](/img/ohjeet/avoimet-laskut.png)

![Raportit](/img/ohjeet/avoimet-laskut2.png)

### Laskut joissa ylisuoritus

**Laskut, joissa ylisuoritus** -raportille haetaan annetulta aikaväliltä laskut, joiden **maksamatta oleva summa on alle 0 euroa** (ylisuoritus). Ylisuorituksella tarkoitetaan suoritusta, joka on **suurempi kuin laskun summa**.

![Raportit](/img/ohjeet/ylisuoritus.png)

### Laskujen kaikki tiedot

**Laskujen kaikki tiedot** -raportilla listataan oikeellisten laskujen kaikki tiedot, kuten **asiakastiedot**, **tuotetiedot**, **summatiedot** ja **tiliöinnit**. Raportilla näytetään lisäksi myös tiedot **puuttuvista tili- ja tiliöintimäärityksistä** Tilaus- ja Myyntituotteissa, jos sellaisia on.

![Raportit](/img/ohjeet/raportit4.png)

### Suorituspäiväkirja

**Suorituspäiväkirja**-raportille haetaan aikavälillä kirjatut **suoritukset tiliöinneille**.  

> **Huom.** Suoritus on tiliöitävä (eli kohdistettava laskulle), jotta se näkyy **suorituspäiväkirjalla**.

![Raportit](/img/ohjeet/suorituspaivakirja.png)

### Suorituspäiväkirja myyntitilillä

1. Haetaan laskut, joissa on aikavälillä tiliöityjä suorituksia, ja lajitellaan laskut **kirjauspäivän mukaan**.  
2. Käydään laskut läpi ja haetaan niihin kohdistuvat tiliöinnit (ei myyntisaamiset, **MS**):

   - **Pankkiin** kohdistuvat tiliöinnit (tiliöinnin tyyppi **PA**)  
   - **Myyntiin** kohdistuvat tiliöinnit (tiliöinnin tyyppi **MY**)  
   - **ALV:hen** kohdistuvat tiliöinnit (tiliöinnin tyyppi **ALV**)  
   - **Muut** tiliöinnit (ei **MS**)

Jos pankkiin tullut summa on eri kuin muiden tiliöintien yhteissumma, **erotus näytetään punaisella**.

![Raportit](/img/ohjeet/suorituspaivakirja-tili.png)

### Laskujen tiliöinnit

**Laskujen tiliöinnit** -raportille haetaan annetun aikavälin laskut sekä niihin liittyvät **tiliöinnit**. Raportilla voidaan rajata, **minkä tilin tai tilien laskuja** haetaan. Voit valita, näytetäänkö laskulla pelkästään **valitun tilin tiliöinnit** vai **kaikki tiliöinnit**.

Raportin lopussa summataan **tilien debet- ja kredit-puolet**.

![Raportit](/img/ohjeet/laskujen-tilioinnit.png)

![Raportit](/img/ohjeet/laskujen-tilioinnit2.png)

### Luottotappiot

**Luottotappiot**-raportille haetaan laskut, jotka on kirjattu **luottotappioiksi**. Luottotappio tarkoittaa myyjälle syntyvää tappiota, joka syntyy silloin, kun laskun saaja **ei kykene maksamaan laskuaan**.

![Raportit](/img/ohjeet/luottotappiot.png)

<!-- ### Luottotappioiksi kirjatut toimitetut tuotteet -->

<!-- ### Maksumuistutukset -->

### Tilit ja tuotteet

**Tilit ja tuotteet** -raportille haetaan annetulle aikavälille kirjattuihin **tiliöinteihin liittyvät tilit** ja niihin liittyvät **tuotteet**.

![Raportit](/img/ohjeet/tilit-ja-tuotteet.png)

### Kaikki tiliöinnit

**Kaikki tiliöinnit** -raportilla näytetään kaikki tiliöinnit **aikajärjestyksessä**, uusin ylinnä. Raporttia voidaan käyttää **uusien maksujen tiliöintien tarkastamiseen**.

![Raportit](/img/ohjeet/tilioinnit.png)

### Ennakkomaksut-tili

**Ennakkomaksut-tili** –raportille haetaan annetun aikavälin **Ennakkomaksutilin (saldotilin)** tapahtumat ja saldo kohdepäivänä. Raportilla näytetään kaikki tiliöinnit, jotka liittyvät asiakkaiden ennakkomaksuihin.

Raportilla näkyy:

- saldotiliin liittyvät tiliöinnit (lisäys tilille on miinusmerkkinen –, saldon käyttö plussamerkkinen +)
- kirjauspäivät  
- summat  
- laskun numerot  
- asiakasnumerot  
- asiakkaan tiedot  
- tiliöintien määrät ja summat yhteensä per asiakas  

Raportin lopussa esitetään **yhteenveto** tiliöintien kokonaismääristä ja summista.

![Asiakaskortti - Laskutiedot](/img/ohjeet/ennakkomaksut3.png)

### Maksun palautukset

> **HUOM!** Jotta rahapalautus **tiliöityy oikein**, tulee kaikki palautukset käsitellä tällä raportilla.

**Maksun palautukset** –raportille haetaan asiakkaille tehtävät rahapalautukset. Raportilla näkyvät palautettavat summat voidaan kuitata käsitellyiksi, jolloin ne eivät enää näy raportilla (ellet erikseen valitse käsiteltyjä summia näkyviin). Samalla palautukset tiliöityvät oikein kirjanpidossa.

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti.png)
*Raportti löytyy kirjanpidon raporteista.*

Raportin määrityksistä voidaan valita:

- Näkyvätkö jo käsitellyt palautukset raportilla  
- Aikaväli, jolta haetaan palautettavia summia  
- Tulostusmuoto (Näytölle, Excel, PDF)  
- Kirjaisinkoko  
- Raportin ulkoasu (ruudukolla tai ilman)

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti2.png)

Kun raportti on tulostettu näytölle, voidaan käsitellä yksittäisiä palautuksia.

Raportin ensimmäisessä sarakkeessa näkyy jokaisen palautuksen yksilöllinen **TiliöintiID**. Kopioimalla sen raportin alla olevaan **TiliöintiID**-kenttään **ja painamalla Siirry palautuksen käsittelyyn** -painiketta voit:

- **Kuitata summan käsitellyksi**, kun palautus on tehty asiakkaalle, jolloin se poistuu raportilta, **ellet raportin määrityksistä aseta käsiteltyjä summia näkyviksi**  
  → **Kuittaa käsitellyksi** -toiminto palauttaa summan (-) pankkitilille ja tiliöi sen pois palautusten tililtä (+)

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti3.png)

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti5.png)

*Valitse yrityksesi pankkitili, jolta palautus asiakkaan tilille tehtiin.*

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti6.png)

*Painamalla **Kuittaa palautus käsitellyksi** -painiketta luot palautuksen tiliöinnit ja merkitset sen käsitellyksi. Palautus poistuu raportilta.*

Palautuksen tietoja voidaan myös muokata **kopioimalla TiliöintiID raportin alla olevaan kenttään** ja painamalla **Muuta tietoja** -painiketta. Voit muokata:

- Tiliöinnin lisätietoja  
- Tilinumeroa (asiakkaan), jolle palautus tehdään  

![Asiakaskortti - Laskutiedot](/img/ohjeet/pal-raportti4.png)

### Tiliöintien lukitseminen

Tiliöintitapahtumat voidaan lukita haluttuun historiapäivään saakka, esimerkiksi edellisen vuoden viimeiseen päivään. Lukituksen jälkeen kirjauksia ei voi tehdä valitulle päivälle tai sitä aikaisemmille päiville.

![Tiliöintien lukitseminen](/img/ohjeet/lukittu.png)

![Tiliöintien lukitseminen](/img/ohjeet/lukittu2.png)

## Tarkastusraportit

### Laskut joiden tiliöinneissä virheitä

**Laskut, joiden tiliöinneissä on virheitä** -raportti listaa laskut, joissa on virheellisiä tiliöintejä. Jos raportti löytää virheellisiä tiliöintejä, mene kyseiselle laskulle ja korjaa tiliöinnit siten, että tiliöintien summa on nolla. Näet esimerkkejä suoritusten korjaamisesta [täältä](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/suoritukset)

![Raportit](/img/ohjeet/raportit5.png)

### Kirjanpitoyhteenvedon tiliöintien tarkastaminen

**Kirjanpitoyhteenvedon tiliöintien tarkastaminen** -raportti hakee aikavälin laskuihin liitetyt tiliöinnit tiliöinnin kirjauspäivän perusteella. Kunkin laskun tiliöinnit summataan, ja jos summa poikkeaa nollasta, erotus näytetään punaisella. Tiliöintien summan **täytyy olla nolla**, muuten tiliöinti on **virheellinen**.  

Hae raportti kuukausi kerrallaan, jolloin virheellisesti eri kuukausille kirjatut tiliöinnit selviävät. Jos raportti löytää virheellisiä tiliöintejä, mene kyseiselle laskulle ja korjaa tiliöinnit siten, että tiliöintien summa on nolla.

![Raportit](/img/ohjeet/tarkistusraportti.png)

### Suoritukset joiden tiliöinneissä virheitä

**Suoritukset joiden tiliöinneissä virheitä** -raportti hakee saapuneista pankkisuorituksista ne, joiden tiliöinneissä on virheitä. Jos raportti löytää virheellisiä tiliöintejä, mene kyseiselle laskulle ja korjaa tiliöinnit siten, että tiliöintien summa on nolla. Näet esimerkkejä suoritusten korjaamisesta [täältä](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/suoritukset)

![Raportit](/img/ohjeet/suoritusten-tarkistus.png)

### Laskut joiden summa ja suoritusten tai kuittausten summa eroaa

**Laskut joiden summa ja suoritusten tai kuittausten summa eroaa** -raportti näyttää laskut, joiden laskun summan ja tiliöintien summan välillä on ero. Eroavuudet esitetään tilikohtaisesti, ja suoritusten erotus näytetään punaisella. Jos raportti löytää virheellisiä tiliöintejä, mene kyseiselle laskulle ja korjaa tiliöinnit siten, että tiliöintien summa on nolla.

![Raportit](/img/ohjeet/poikkeavuudet.png)

### Tilausten laskutuspyynnöt ja laskut joissa poikkeavuutta

**Tilausten laskutuspyynnöt ja laskut, joissa poikkeavuutta** -raportilta voi tarkistaa, onko tilausten laskutuspyynnöissä tai laskuissa poikkeavuutta tilauksen hinnan kanssa.  Joissain tapauksissa poikkeavuudet voivat olla tarkoituksellisia — esimerkiksi jos asiakkaan kanssa on sovittu erikseen hinnasta.  

Jos poikkeavuudet eivät ole tarkoituksellisia, tulee mennä kyseiselle tilaukselle ja ratkaista tilauksen hinnan ja laskutuspyyntöjen eroavuus, esimerkiksi muokkaamalla laskutuspyyntöjä.

![Raportit](/img/ohjeet/lapy-poikkeavuus.png)

<!-- Saldojen tarkastus -->

## Tilausten raportit

### Tilausmyynti vuosittain

**Tilausmyynti vuosittain** -raportilla näytetään tilausmyynti jokaiselta kuukaudelta vuoden aikana. Myyntimäärät näytetään sekä ALV:illisina että ALV:ittomina.

![Raportit](/img/ohjeet/tilausmyynti-vuosittain.png)

### Maksamattomat tilaukset

**Maksamattomat tilaukset** -raportille haetaan maksamattomat tilaukset.  

Hakuehtoina voi käyttää mm.:

- lasku on erääntynyt  
- maksumuistutus #1/#2 on erääntynyt  
- tilausta ei ole katkaistu  
- laskua maksamattomista ei ole luotu  
- lasku maksamattomista on luotu  

Raportin luominen vaatii vähintään yhden hakuehdon aktivointia. Voit asettaa päivän, josta eteenpäin maksamattomia laskuja haetaan. Näin voit rajata vanhat maksamattomat tilaukset pois.

1. **Raportti hakee** tilausten laskujen maksajat, joilla löytyy vähintään yksi hakuehdot täyttävä lasku.  
   - Hakuehtoihin osuvat tilaukset lihavoidaan.  
2. Käydään jokainen maksaja läpi ja haetaan tämän kaikki tilauslaskut.  
   - Laskun maksamatta oleva summa korostetaan punaisella, mikäli laskun eräpäivästä on kulunut yli 14 vrk.

![Raportit](/img/ohjeet/maksamattomat.png)

### Maksetut tilaukset

**Maksetut tilaukset** -raportille haetaan tilaukset, joiden lasku on maksettu annetulla aikavälillä. Raportti laskee maksettujen laskujen summan yhteensä sekä erittelee ne myyjittäin.

![Raportit](/img/ohjeet/maksetut-tilaukset.png)

### Tilaukset ja niiden laskut

**Tilaukset ja niiden laskut** -raportille haetaan tilaukset, jotka ovat ainakin osittain voimassa annetulla aikavälillä (myös katkaistut tilaukset haetaan). Raportille haetaan tilauksen hinta sekä siihen liittyvät laskut.

![Raportit](/img/ohjeet/tilaukset-laskut.png)

### Tilaajan tilaukset laskutietoineen

**Tilaajan tilaukset laskutietoineen** -raportille haetaan asetetun aikavälin tilaajien kaikki tilaustiedot, laskutuspyynnöt ja laskut.  
Tilauksista haetaan vain ne, jotka päättyvät annetun alkupäivän jälkeen.

![Raportit](/img/ohjeet/tilaus-laskutiedot.png)

### Voimassaolevat tilaukset

**Voimassaolevat tilaukset** –raportilla koostetaan aktiiviset tilaustuotteet kappalemäärineen. Raportille haetaan aikavälin tilausten tilaajien kaikki tilaustiedot, laskutuspyynnöt ja laskut. Tilauksista haetaan vain ne, jotka päättyvät annetun alkupäivän jälkeen.
 
![Raportit](/img/ohjeet/raportit3.png)

### Päättyvät tilaukset joita uudempi tilaus löytyy

**Päättyvät tilaukset, joita uudempi tilaus löytyy** –raportille haetaan asetetulla aikavälillä päättyvät tilaukset, joiden tilaajilta löytyy uusi alkava tilaus päättyvän tilauksen jälkeen.

![Raportit](/img/ohjeet/paat-tilaukset.png)

### Päättyvät tilaukset joita uudempi tilaus löytyy katkaistuna

**Päättyvät tilaukset, joita uudempi tilaus löytyy katkaistuna** –raportille haetaan asetetulla aikavälillä päättyvät tilaukset, joiden tilaajilta löytyy uusi tilaus, jolle on asetettu katkaisupäivämäärä.

![Raportit](/img/ohjeet/paat-tilaukset2.png)

### Tilaajien uusimmat tilaukset

**Tilaajien uusimmat tilaukset** –raportille haetaan tilaajat, joilla on aikavälillä voimassa olevia tilauksia. Tämän jälkeen haetaan erikseen jokaisen tilaajan tilaukset taulukkoon uusimmasta alkaen. Tilauksille haetaan myös niihin liittyvät laskutuspyynnöt ja laskut. Katkaistut tilaukset voidaan karsia pois valinnalla.

![Raportit](/img/ohjeet/uudet-tilaukset.png)

### Tilaustulojen jaksotus (laskuilla)

**Tilaustulojen jaksotus (laskuilla)** –raportti perustuu laskutettuihin tilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten laskut ja niiden maksusuoritukset. Laskun summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan, kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

![Raportit](/img/ohjeet/tilausten-jaksotus.png)

### Tilaustulojen jaksotus (laskuilla), digi

**Tilaustulojen jaksotus (laskuilla), digi** –raportti perustuu laskutettuihin digitilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten laskut ja niiden maksusuoritukset. Laskun summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan, kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

### Tilaustulojen jaksotus yhteenveto 

**Tilaustulojen jaksotus, yhteenveto** –raportilla esitetään yhteenveto tilaustulojen jaksotuksesta, jossa lasketaan kuinka paljon tilausmaksuista on jo suoritettu ja kuinka paljon suorittamatta annetulla ajanjaksolla.

![Raportit](/img/ohjeet/tilausten-jaksotus3.png)

### Tilaustulojen jaksotus (suorituksilla)

**Tilaustulojen jaksotus (suorituksilla)** –raportti perustuu maksettuihin tilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten suoritukset ja niiden laskut. Suorituksen summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan, kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

![Raportit](/img/ohjeet/tilausten-jaksotus4.png)

### Tilaustulojen jaksotus (suorituksilla), digi

**Tilaustulojen jaksotus (suorituksilla), digi** –raportti perustuu maksettuihin digitilauksiin. Haetaan kohdepäivänä voimassa olevat tilaukset (katkaistut tilaukset eivät mukana). Haetaan tilausten suoritukset ja niiden laskut. Suorituksen summa jaetaan tilausjaksolle. Kohdepäivänä lasketaan, kuinka paljon tilausjaksosta on jo suoritettu ja kuinka paljon suorittamatta.

### Tilausten jaksotus laskuilla kuukasittain

**Tilausten jaksotus laskuilla kuukausittain** –raportti näyttää kuukausikohtaisesti laskutettujen tilausten jaksotustiedot.

![Raportit](/img/ohjeet/tilausten-jaksotus6.png)

<!--  ### Tilausten jaksotus II

Raportti perustuu aikavälillä luotuihin tai laskutettuihin tilauksiin.-->

### Aikavälillä päättyneet tilaukset

**Aikavälillä päättyneet tilaukset** –raportille haetaan lehden tilaajat, joiden tilaus on päättynyt tai peruutettu aikavälillä.  
Karsitaan pois poistetut (sis. kuolleet), markkinointikieltoiset sekä ne, joiden tilauksen peruutussyy on KUOLLUT, MAKSAMATTA PÄÄTTYNYT, SAIRAS tai TALOUDELLISET SYYT. Tilauksen peruutussyy näytetään omassa sarakkeessaan.

### Passiivit tilaajat

**Passiiviset tilaajat** –raportille haetaan lehden tilaajat, joiden viimeisin tilaus on päättynyt annettua päivää ennen. Tilauksen peruutussyy näytetään omassa sarakkeessaan (huomioi mm. maksamatta päättyneet). Voit poistaa tuplia sähköpostilla, puhelinnumerolla, osoitteella ja nimellä (hidastaa hakua huomattavasti).  Ohjelma etsii tällöin esimerkiksi samalla osoitteella olevia aktiivisia tilauksia, ja jos löytyy, osaa jättää tilajaan pois raportilta. Kyseiset tilaukset näytetään Excelin lopussa.  

> Koska tämä on iso raportti, se suoritetaan tausta-ajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä, kun se on valmis.

### Tilausten tiedot

**Tilausten tiedot** –raportille haetaan kaikki tilaajat tilaustietoineen. Voit valita, näytetäänkö sama tilaaja vain kerran.  

> Koska tämä on iso raportti, se suoritetaan tausta-ajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä, kun se on valmis.

![Raportit](/img/ohjeet/tilausten-tiedot.png)

### Kontaktit joilla ei ole tilauksia

**Kontaktit, joilla ei ole tilauksia** –raportille haetaan kaikki kontaktit, joilla ei ole voimassa olevaa tilausta annetulla aikavälillä.  

> Koska tämä on iso raportti, se suoritetaan tausta-ajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä, kun se on valmis.

![Raportit](/img/ohjeet/kontaktit-ei-tilauksia.png)

### Tilausten jaksotus aikajanalla (tiliöintien kautta)

**Tilausten jaksotus aikajanalla (tiliöintien kautta)** –raportti hakee annettuna aikavälinä ainakin osittain voimassa olevat tilaukset. Tilauksiin liittyvistä summista haetaan valinnan mukaan joko laskutetut tai maksetut summat. Annettu aikaväli jaetaan kuukausille, ja joka kuun vaihteessa haetaan kuitattu (suoritettu) ja maksettava rahamäärä (velka). Jaksotus tehdään valinnan mukaan joko lehden numeroiden ilmestymisten mukaan (kaikissa kuukausissa ei välttämättä ole jaksotusta, mikäli lehti ei ilmesty) tai tilausajan perusteella (joka kuukaudessa jaksotusta tilausajan puitteissa). Summien koostamisessa käytetään laskun tiliöintejä. Laskutetuilla tilauksilla summat ovat verottomia (luontivaiheen Myyntitili MY), mutta maksetuilla verollisia (maksuvaiheen kuittaus K).  

> Koska tämä on iso raportti, se suoritetaan tausta-ajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä, kun se on valmis.

### Tilausten jaksotus aikajanalla (tuoterivien kautta)

**Tilausten jaksotus aikajanalla (tuoterivien kautta)** –raportti hakee annettuna aikavälinä ainakin osittain voimassa olevat tilaukset. Tilauksiin liittyvistä summista haetaan valinnan mukaan joko laskutetut tai maksetut summat. Annettu aikaväli jaetaan kuukausille, ja joka kuun vaihteessa haetaan kuitattu (suoritettu) ja maksettava rahamäärä (velka). Jaksotus tehdään valinnan mukaan joko lehden numeroiden ilmestymisten mukaan (kaikissa kuukausissa ei välttämättä ole jaksotusta, mikäli lehti ei ilmesty) tai tilausajan perusteella (joka kuukaudessa jaksotusta tilausajan puitteissa). Summien koostamisessa käytetään laskun tiliöintejä. Laskutetuilla tilauksilla summat ovat verottomia (luontivaiheen Myyntitili MY), mutta maksetuilla verollisia (maksuvaiheen kuittaus K).  

> Koska tämä on iso raportti, se suoritetaan tausta-ajona. Voit ladata raportin **Raportit/Tausta-ajot** -välilehdeltä, kun se on valmis.

### Toimitetut tuotteet

**Toimitetut tuotteet** –raportti hakee annettuna aikavälinä luodut laskut, jotka liittyvät maksamattomien tilausten katkaisuihin.  
Asiakkaan tilaus on katkaistu, ja toimitetuista lehdistä on luotu loppulasku tarkenteella “toimitetut tuotteet”.

![Raportit](/img/ohjeet/toimitetut.png)

<!-- Jakelureklamaatiot -->

## Ilmoitusmyynnin raportit

### Laskutetut ilmoitusmyynnit

**Laskutetut ilmoitusmyynnit** –raportille haetaan laskutetut ilmoitusmyynnit. Raportilla näytetään laskun tiedot, asiakkaan tiedot ja ilmoitusvarauksen tiedot.

![Raportit](/img/ohjeet/laskutetut-myynnit.png)

### Laskuttamattomat ilmoitusmyynnit

**Laskuttamattomat ilmoitusmyynnit** –raportille haetaan laskuttamattomat ilmoitusmyynnit. Raportilla näytetään laskutuspyynnön tiedot, asiakkaan tiedot ja ilmoitusvarauksen tiedot.

![Raportit](/img/ohjeet/laskuttamattomat-myynnit.png)

### Myynnit myyjittäin laskujen kautta

**Myynnit myyjittäin laskujen kautta** –raportilla koostetaan kaikki hakuaikavälillä myydyt ilmoitusvaraukset myyjittäin jaoteltuina, laskujen kautta haettuna.

![Raportit](/img/ohjeet/myynnit-myyjittain.png)

### Myynnit myyjittäin

**Myynnit myyjittäin** –raportille koostetaan kaikki hakuaikavälillä myydyt ilmoitusvaraukset myyjittäin jaoteltuina.

![Raportit](/img/ohjeet/raportit6.png)

### Myynnit myyjittäin, yhteenveto

**Myynnit myyjittäin, yhteenveto** –raportilla näytetään yhteenveto ilmoitusvarausmyynneistä myyjittäin annetun aikavälin sisällä.

![Raportit](/img/ohjeet/myynnit-yhteenveto.png)

### Laskutetut erillistuotteet

**Laskutetut erillistuotteet** –raportille haetaan asetetulla aikavälillä laskutetut erillistuotteet (esimerkiksi kirjat).

![Raportit](/img/ohjeet/erillistuotteet-raportti.png)

### Ilmoitusvarauksien raportit

Saat lisää ilmoitusmyyntiin liittyviä raportteja [**Ilmoitusvaraukset**](/docs/ohjeet/ilmoitustenhallinta/ilmoistusvaraukset)-välilehdeltä.

**Hakutuloksista** voi luoda erilaisia raportteja painamalla **Raportit**-painiketta ja sen jälkeen:

- **Luo Excel** –painiketta (hakutuloksien vienti Exceliin)  
- **Lehden varausluettelo** –painiketta (yksittäisen julkaisun ilmoitusvaraukset)  
- **Varausluettelo** –painiketta (kaikki varaukset valitulta aikaväliltä)  
- **Palstamillimetritilasto** –painiketta  
- **Laskutuksen tarkastuslista** –painiketta (määritellyn aikavälin ilmoitusvaraukset laskutustietoineen)  
- **Laskutettavien lista** –painiketta (tiettynä päivänä laskutettavat ilmoitusvaraukset)

![Ilmoitusvaraukset](/img/ohjeet/ilmoitusvaraukset5.png)

## Graafiset raportit

### Tilaukset graafinen

**Tilaukset graafinen** –raportilla näet tilausmäärien kehittymisen valitsemallasi aikavälillä. Voit valita tietyt tilaustuotteet tai kaikki tilaustuotteet lehtikohtaisesti ja verrata niiden tilausmäärien kehitystä keskenään.

![Raportit](/img/ohjeet/tilaukset-graafinen.png)

![Raportit](/img/ohjeet/tilaukset-graafinen2.png)

### Tiliöinnit graafinen

**Tiliöinnit graafinen** –raportilla näet eri tilien debet- ja kredit-määrien kehittymisen valitsemallasi aikavälillä.

![Raportit](/img/ohjeet/tilioinnit-graafinen.png)

![Raportit](/img/ohjeet/tilioinnit-graafinen2.png)

## Raporttien näkyvyyden muokkaus

Jos olet pääkäyttäjä, voit muokata raporttien näkyvyyttä eri käyttäjille **Raportit**–välilehdellä painamalla **Raporttien näkyvyydet** –painiketta.

![Raportit](/img/ohjeet/raporttien-nakyvyys.png)

Kun olet painanut painiketta, valitse haluamasi käyttäjä **Käyttäjätunnus**–valikosta. Säädä raporttien näkyvyyttä painamalla raporttia: vihreä painike tarkoittaa, että raportti näkyy valitulle käyttäjälle, ja punainen painike, että se ei näy.

![Raportit](/img/ohjeet/raporttien-nakyvyys2.png)
