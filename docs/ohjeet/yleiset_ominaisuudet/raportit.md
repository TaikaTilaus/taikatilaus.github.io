---
sidebar_position: 6
---

# Raportit

## Yleistä raporteista

![Raportit](/img/ohjeet/raportit.png)

**Raportit**–välilehdellä koostetaan erilaisia raportteja sovelluksen tiedoista käyttäjän valitsemassa tulostusmuodossa.

Raporttien painikkeen **?** -ikonista löytyy lisätietoja sen koostamiseen liittyen.

Valmiita raporttipohjia luodaan tarvittaessa **asiakaskohtaisesti** läpi käytyjen ja kunkin käyttäjän tarpeiden mukaisesti esim.
- Kirjanpitoon
- Laskutukseen
- Tilausmääriin
- Myyntimääriin liittyen

### Raportin hakukriteerien määrittely

![Raportit](/img/ohjeet/raportit2.png)

**Raporttipohjan valinnan** jälkeen määritellään tarkemmat hakukriteerit tietojen listausta varten esim.
- **syöttämällä** itse haluttu hakuaikavälin alku- ja loppupäivät
- Raportin haluttu **tulostustapa** (näytölle, PDF:lle, taulukkoon)
- **Kirjaisinkoko**, jolla voi esim. pienentää fonttia, mikäli haetut tiedot eivät mahdu siististi haetulle raportille
- **Raportin ulkoasu** (ruudukolla tai ilman), jolla voi häivyttää näkyvistä raportin taustataulukoinnin rajaviivat
- muita valintoja **raporttikohtaisesti** (esim. laskun tila Maksamattomat tilaukset -raportissa)

**Tee raportti** –painike tuottaa varsinaisen raportin tulostustavan mukaisesti
- Raportti ilmestyy näytölle
- Ilmestyy linkki raportin lataamiseen Excel-taulukkoon
- Ilmestyy linkki raportin lataamiseen PDF-tulosteeksi

![Raportit](/img/ohjeet/raportit7.png)

**Näytä raportin kuvaus** -painikkeesta saat näkyviin lisätietoa raportin luomiseen liittyen.

<!--  ## Kirjanpidon raporttien kuvaukset

### Kirjanpitoyhteenveto

**Kirjanpitoyhteenveto**-raportilla haetaan annetulla aikavälillä kirjatut tiliöintitapahtumat tileittäin tilin debet- ja kredit puolille sekä lasketaan näiden summat. Jos kirjanpidossa ei ole virheitä, pitäisi debet ja kredet yhteensä olla saman suuruisia.

![Raportit](/img/ohjeet/kirjanpitoyhteenveto.png)

### Vientiluettelo

**Vientiluettelo**-raportilla näytetään kaikki tiliöintitapahtumat valitulta aikaväliltä ja ryhmitellään ne tileittäin. Raportilla näytetään myös tiliöintitapahtumaan liittyvä lasku ja laskun maksajan asiakasnumero.

![Raportit](/img/ohjeet/vientiluettelo.png)

### Laskupäiväkirja

### Laskupäiväkirja Digi

### Laskupäiväkirja ilman maksutietoja

### Laskupäiväkirja tuoteriveillä

### Reskontraluottelo

### Maksutaphtumaluottelo

### Avoimet laskut

### Laskut joissa ylisuoritus

### Laskujen kaikki tiedot

**Laskujen kaikki tiedot** -raportilla listataan oikeellisten laskujen lisäksi myös tiedot puuttuvista Tilaus- & Myyntituotteiden tili-/tiliöintimäärityksistä.

![Raportit](/img/ohjeet/raportit4.png)

### Suorituspäiväkirja

### Suorituspäiväkirja myyntitilillä

### Laskujen tiliöinnit

### Luottotappiot

### Luottotappioiksi kirjatut toimitetut tuotteet

### Maksumuistutukset

### Tilit ja tuotteet

### Maksun palautukset

### Kaikki tiliöinnit

### Asiakassaldot

-->

## Tarkastusraportit

### Laskut joiden tiliöinneissä virheitä

**Laskut joiden tiliöinneissä virheitä** –raportti listaa laskut, joissa on virheellisiä tiliöintejä. Jos raportti löytää virheellisiä tiliöintejä, pitää mennä kyseiselle laskunumerolle ja korjata tiliöinnit niin että tiliöintien summa on nolla. Näet esimerkkejä suorituksien korjaamiseen [täältä](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/suoritukset)

![Raportit](/img/ohjeet/raportit5.png)

### Kirjanpitoyhteenvedon tiliöintien tarkastaminen

Raportti hakee aikavälin laskuihin liitetyt tiliöinnit tiliöinnin kirjauspäivällä. Kunkin laskun tiliöinnit summataan ja jos summa on eri kuin nolla näytetään punaisella erotuksen määrä. Tiliöintien summan **täytyy olla nolla**, muuten tiliöinti on **virheellinen**. Hae kuukausi kerrallaan jolloin virheellisesti eri kuukausille kirjatut tiliöinnit selviävät. Jos raportti löytää virheellisiä tiliöintejä, pitää mennä kyseiselle laskunumerolle ja korjata tiliöinnit niin että tiliöintien summa on nolla. 

![Raportit](/img/ohjeet/tarkistusraportti.png)

### Suoritukset joiden tiliöinneissä virheitä

Raportti hakee saapuneista pankkisuorituksista suorituksia, joiden tiliöinneissä on virheitä. Jos raportti löytää virheellisiä tiliöintejä, pitää mennä kyseiselle laskunumerolle ja korjata tiliöinnit niin että tiliöintien summa on nolla. Näet esimerkkejä suorituksien korjaamiseen [täältä](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/suoritukset)

![Raportit](/img/ohjeet/suoritusten-tarkistus.png)

### Laskut joiden summa ja suoritusten tai kuittausten summa eroaa

Raportti näyttää laskut joiden summan ja tiliöintien summan välillä on eroa. Raportti näyttää eroavuudet tilien tarkkuudella. Suoritusten erotus näytetään punaisella. Jos raportti löytää virheellisiä tiliöintejä, pitää mennä kyseiselle laskunumerolle ja korjata tiliöinnit niin että tiliöintien summa on nolla. 

![Raportit](/img/ohjeet/poikkeavuudet.png)

### Tilausten laskutuspyynnöt ja laskut joissa poikkeavuutta

Raportilta voi tarkistaa onko tilausten laskutuspyynnöissä/laskuissa poikkeavuutta tilauksen hinnan kanssa. Joissain tapauksissa poikkeavuudet voivat olla tarkoituksellisia. Esim. asiakkaan kanssa on sovittu erikseen hinnasta. Jos poikkeavuudet eivät ole tarkoituksellisia, pitää mennä kyseiselle tilauksella ja ratkaista tilauksen hinnan ja laskutuspyyntöjen eroavuus, esim. muokkaamalla laskutuspyyntöjä.

![Raportit](/img/ohjeet/lapy-poikkeavuus.png)

<!-- 
## Tilausten raportit

### Tilausmyynti Vuosittain

### Maksamattomat tilaukset

### Maksetut tilaukset

### Tilaukset ja niiden laskut

### Tilaajan tilaukset laskutietoineen

### Voimassaolevat tilaukset

 **Voimassaolevat tilaukset** –raportille koostetaan aktiiviset Tilaustuotteet kappalemäärineen.
 
![Raportit](/img/ohjeet/raportit3.png)

### Päättyvät tilaukset joita uudempi tilaus löytyy

### Päättyvät tilaukset joita uudempi tilaus löytyy katkaistuna

### Tilaajien uusimmat tilaukset

### Tilaustulojen jaksotus (laskuilla)

### Tilaustulojen jaksotus (laskuilla), digi

### Tilaustulojen jaksotus yhteenveto

### Tilaustulojen jaksotus (suorituksilla)

### Tilaustulojen jaksotus (suorituksilla), digi

### Tilausten jaksotus laskuilla kuukasittain

### Tilausten jaksotus II

### Aikavälillä päättyneet tilaukset

### Passiivit tilaajat

### Tilausten tiedot

### Kontaktit joilla ei ole tilauksia

### Tilausten jaksotus aikajanalla (tiliöintien kautta)

### Tilausten jaksotus aikajanalla (tuoterivien kautta)

### Toimitetut tuotteet

## Ilmoitusmyynnin raportit

### Laskutetut ilmoitusmyynnit

### Laskuttamattomat ilmoitusmyynnit

### Myynnit myyjittäin

**Myynnit myyjittäin** –raportille koostetaan kaikki hakuaikavälillä myydyt ilmoitusvaraukset myyjittäin jaoteltuina.

![Raportit](/img/ohjeet/raportit6.png)

### Myynnit myyjittäin, yhteenveto

### Laskutetut erillistuotteet

-->
## Graafiset raportit

### Tilaukset graafinen

**Tilaukset graafinen** -raportilta näet tilausmäärien kehittymisen valitsemallasi aikavälillä. Voit valita tietyt tilaustuotteet tai kaikki tilaustuotteet lehtikohtaisesti, ja verrata niiden tilausmäärien kehitystä keskenään.

![Raportit](/img/ohjeet/tilaukset-graafinen.png)

![Raportit](/img/ohjeet/tilaukset-graafinen2.png)

### Tiliöinnit graafinen

**Tiliöinnit graafinen** -raportilla näet eri tilien debet ja kredet määrien kehittymisen valitsemallassi aikavälillä.

![Raportit](/img/ohjeet/tilioinnit-graafinen.png)

![Raportit](/img/ohjeet/tilioinnit-graafinen2.png)

## Raporttien näkyvyyden muokkaus

Jos ole pääkäyttäjä, voit muokata raporttien näkyvyyttä eri käyttäjille Raportit-välilehdellä, painamalla **Raporttien näkyvyydet** -painiketta.

![Raportit](/img/ohjeet/raporttien-nakyvyys.png)

Kun olet painanut nappia, valitse haluamasi käyttäjä **Käyttäjätunnus**-valikosta. Säädä raporttien näkyvyyttä painamalla raporttien kohdalta. Vihreä painike tarkoittaa, että kyseinen raportti näkyy valitulle käyttäjälle ja punainen painike tarkoittaa, että se ei näy.

![Raportit](/img/ohjeet/raporttien-nakyvyys2.png)