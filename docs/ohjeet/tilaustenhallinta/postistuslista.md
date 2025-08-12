---
sidebar_position: 3
---

# Postitus

## Yleistä

**Postitus**-valikossa koostetaan tietyn lehden postituslista sen painamista varten.

Painotalolle voidaan luoda oma käyttäjätunnus, millä se voi itse käydä lataamassa postituslistan suoraan sovelluksesta haluttuna päivänä.

## Postitusten haku

**Postitusten haku** –välilehdellä luodaan eri jakelukanaviin lähetettävät osoitteistotiedostot.

- Jos halutaan tarkastella tiettyä postitusta, valitaan **Lehti** ja **Ilmestymispäivä**, sekä mahdolliset muut ehdot ennen **Hae**–painikkeen klikkausta (LähetysID on sama koko postituksella)

![Postituslista - Postitusten haku](/img/ohjeet/postitustenhaku1.png)

Valitsemalla **Niputustapa**-valikosta **Varhaisjakelu**, saat listaukselle näkyviin vain varhaisjakelun nippuihin kuuluvat tilaukset. 

![Postituslista - Postitusten haku](/img/ohjeet/niputustapa.png)

Valitsemalla Kyllä **Varhaisjakelun esto** -valikosta, saat listaukselle näkyviin vain ne tilaukset, mitkä on asiakaskortilta pakotettu päiväjakoon varhaisjakelun sijaan.

Varhaisjakelun eston aiheuttamia nippujen muutoksia pääset tarkkailemaan painamalla **Näytä niput ilman varhaisjakeluestoa** –painikkeesta, jolloin listauksessa näkyy päiväjakoon pakotettujen tilauksien alkuperäinen nippunumero punaisella.

Listauksessa erotat päiväjakoon pakotetut tilaukset **Varhaisjakelun esto** -sarakkeessa olevasta **K**-kirjaimesta.

![Postituslista - Postitusten haku](/img/ohjeet/varhaisjakeluesto.png)

### Esimerkkihaku

Voi esiintyä esimerkiksi tilanne, missä asiakas on soittanut ja ilmoittanut, että lehteä ei ole tullut. Tällöin voit postituslistan haun kautta tarkistaa mm.

1. Onko asiakas ylipäätään ollut postituslistalla
2. Ovatko osoitetiedot oikein

Tämä tehdään suorittamalla haku asiakkaan **asiakasnumerolla**. Valitsemalla lehden ilmestymispäivän voit hakea tiettyä julkaisua. Jättämällä **Ilmestymispäivä**-kentän tyhjäksi, saat asiakkaan koko **postitushistorian**. Näin voit tarkastella mahdollisia osoitteenmuutoksia tai eroavuuksia postitusten välillä.

![Postituslista - Postitusten haku](/img/ohjeet/esimerkkihaku-pl.png)

### Osoitteistojen tiedostopainikkeet

**Näytä postitusyhteenveto** –painikkeesta näytetään samat Postituslista–yhteenvetotiedot kuin [Postituslistan luonti –sivulla](/docs/ohjeet/tilaustenhallinta/postistuslista#postituslistan-luonti-1)

![Postituslista - Postitusten haku](/img/ohjeet/postitusyhteenveto.png)

**Näytä muutokset edellisestä postituksesta** –painikkeesta näytetään uuden ja edellisen postituslistan tiedot muutoksien vertailua varten.

![Postituslista - Postitusten haku](/img/ohjeet/edellinenpostitus.png)

**Näytä lehden postituspäivät** –painikkeesta näytetään listaus lehdelle luoduista postituslistoista päiväyksineen ja LähetysID:neen.

![Postituslista - Postitusten haku](/img/ohjeet/postituspaivat.png)

**Peruslataus**–painikkeesta luodaan varhaisjakeluun tarvittava osoitteisto tekstiedostona ladattavaksi **Lataa TNnnnn.all.txt** –painikkeesta

![Postituslista - Postitusten haku](/img/ohjeet/peruslataus.png)

**Varhaisjakelun nippumuutokset** –painikkeesta luodaan yhteenveto nipuista, joissa on muutoksia aiempaan niputukseen verrattuna ja sen tietojen vienti tekstitiedostoon **Lataa nnnn.all.txt** –painikkeesta

![Postitusten haku - Varhaisjakelun nippumuutokset](/img/ohjeet/nippumuutokset.png)

**Excel**–painikkeesta luodaan Painoon tarvittava osoitteisto (.txt) ladattavaksi Lataa _1110.TSL.. –painikkeesta

![Postitusten haku - Excel](/img/ohjeet/excel.png)

**Postinumerolista**–painikkeesta luodaan tarvittava listaus Postinumeroista ja KPL määristä Excel-taulukkoon Lataa postinumerolista –painikkeesta

![Postitusten haku - Postinumerolista](/img/ohjeet/postinumerolista.png)

**Vertaa asiakasnumeroilla** -painikkeesta voit tarkastaa löytyykö syöttämäsi asiakasnumero/t postituslistalta. Tätä toimintoa voi käyttää esimerkiksi silloin kun asiakkaalla on usein ilmestynyt jakeluhäiriöitä.

![Postitusten haku - Vertaa asiakasnumeroilla](/img/ohjeet/vertaa-asiakasnumeroilla.png)

**Lehtiluukkuun päivitettävät** -painikkeesta voit päivittää uudet digitilaajat lehtiluukkuun

![Postitusten haku - Lehtiluukkuun päivitettävät](/img/ohjeet/lehtiluukku1.png)

**Lähetä yhteenveto** -painikkeesta voit lähettää yhteenvedon postituslistan tiedoista aiemmin määritettyyn sähköpostiin.

![Postitusten haku - Lähetä yhteenveto](/img/ohjeet/yhteenveto.png)

## Postituslistan luonti

Ennen uuden Postituslistan luontia varmistetaan, että tilausten <a href="/docs/ohjeet/tilaustenhallinta/kestojatko">Kestojatkoajo</a> on tehty, mikäli uudistettavat kestotilaukset halutaan mukaan kyseiselle postituslistalle. Kestojatko-ajot voi myös automatisoida.

### Postituslistan luonnin ennakkotoimenpiteet

1) Tee **[Kestojatko](https://support.taikatilaus.fi/docs/ohjeet/tilaustenhallinta/kestojatko)**

2) **Asetukset/Irtonumerot**-välilehdellä
- **Poista** ensin vanhat tiedot listaukselta ja sen jälkeen
- **Kopioi** yksittäisten Irtonumeroiden osoitetiedot ja Tallenna (katso ettei alempana olevaan listaan tule virheilmoituksia)

![Asetukset-välilehti - Irtonumerot](/img/ohjeet/irtonumerot-postituslista.png)

Virhe voi johtua riviltä puuttuvasta ; -merkistä, sillä tyhjäkin tieto (esim. Yritysnimi tai rappu/hsto) vaatii sille varatun paikan rivillä.

![Asetukset-välilehti - Irtonumerot](/img/ohjeet/irtonumerot-postituslista-virhe.png)

3) Jos sinulla on ilmoitusmyynninhallinta käytössä klikkaa **Hae irtonumerot postituspäivältä** –painiketta, joka hakee kyseisenä päivänä julkaistavista ilmoitusvarauksista aktivoidut **Tarkistuskappaleet** ja lisää niiden maksajat automaattisesti **Irtonumerot**–listalle. **Tallenna**.

![Asetukset-välilehti - Irtonumerot](/img/ohjeet/irtonumerot2.png)

![Asetukset-välilehti - Irtonumerot](/img/ohjeet/irtonumerot3.png)

4) **Asetukset/Varhaisjakelu** –välilehdellä lisätään/muokataan postituksen mukaan halutut klikkaamalla **Vakioniput**-painiketta
- **Poista** ensin mahdolliset turhat tiedot listaukselta ja sen jälkeen
- **Päivitä/Kopioi** (malliriviksi) yksittäisten Vakionippujen osoite- ja lkm -tiedot ja Tallenna (katso ettei kentän alla olevaan listaan tule virheilmoituksia)

![Asetukset-välilehti - Varhaisjakelu](/img/ohjeet/varhaisjakelu-postitus.png)

Virhe voi johtua riviltä puuttuvasta ; -merkistä, sillä tyhjäkin tieto (esim. Yritysnimi tai osoite) vaatii sille varatun paikan rivillä.

![Asetukset-välilehti - Varhaisjakelu](/img/ohjeet/virhe-vakioniput.png)
*Esimerkki virheellisesti syötetystä tiedosta.*

### Postituslistan luonti

- Valitse **Lehti** ja **voimassaolopäivä** ja klikkaa Näytä tilaukset –painiketta saadaksesi tilauksien yhteenvedon näkyviin

![Postituslista - Postituslistan luonti](/img/ohjeet/postituslista1.png)

- **Näytä voimassa olevat tilaukset kaikilla tiedoilla** –painike luo taulukon, jonka voi avata selaimen latausikkunasta jatkokäsittelyä varten

![Postituslista - Postituslistan luonti](/img/ohjeet/postituslista2.png)

![Postituslista - Postituslistan luonti](/img/ohjeet/postituslista3.png)

- Tilauksissa olevat poikkeukset näet painamalla **Näytä poikkeukset** -painiketta.

![Postituslista - Postituslistan luonti](/img/ohjeet/postituslista5.png)

- Varsinainen postituslista luodaan klikattaessa **Tee postitusajo lehden toimittamista varten** -painiketta

![Postituslista - Postituslistan luonti](/img/ohjeet/postituslista4.png)

- Luonnin jälkeen Postituslista-yhteenvetotiedot listautuvat näkymän alaosaan
- Postituslistojen ajot voidaan myös automatisoida ja niihin voidaan liittää automaattiset koontiviestit haluttuihin sähköpostiosoitteisiin

## Postitusten tiedot

### Postituslistan jatkokäsittely ja siirrot painoon/jakeluun

1) **Postituslista / Postitusten tiedot** –välilehdellä luodaan tarvittavat aineistot
- Heti
- Ajastettuna

**Automaattiset ajot** suoritetaan palvelimella joka viides minuutti ellei oletusaikoja ole muutettu.

![Postituslista - Postitusten tiedot](/img/ohjeet/postitustentiedot.png)

**Listauksella** näytetään jo tallennettujen lehtien tiedot ja niiden lokitiedot, jotka on jo ajettuina
- Tallennettuja lehtitietoja pääsee muokkaamalla klikkaamalla **Lehti-sarakkeesta lehden nimeä**
- Ennakkoon syötettyjen lehtien **Paino/Paksuus**–tiedot voi lisätä ennen kyseistä Postitusta
- Ajastetuista ajoista näytetään kyseisen ajon **Suoritusaika** ja ajon jälkeinen **Tila** (esim. VALMIS pp.kk.vvvv hh:mm:ss)

Listaukselle haettavia lehtitietoja voidaan suodattaa
- **Lehti**–valikon lehden ja/tai
- **Ilmestymispäivän** mukaan

![Postituslista - Postitusten tiedot](/img/ohjeet/suodatus.png)

2) Paina **Lisää postitus** -painikkeesta. Hae **PostiPron** palvelusta **Lehtikohtaiset tiedot** ja täydennä ne perustietokenttiin:
- **Lehti**–valikosta valittava lehti
- **Ilmestymispäivä**, jolloin kyseinen lehti ilmestyy (pakollinen tieto)
- **Numero** (pakollinen tieto, lehden Julkaisunumero)
- **Paino** (LaPa ajossa tarvittava tieto)
- **Paino ulkomaat** (LaPa ajossa tarvittava tieto) – ei kaikilla käytössä, joten piilotettuna muilla
- **Paksuus** (LaPa ajossa tarvittava tieto)
- **Lähetyslistan numero** (pakollinen tieto LaPa ajoa varten), jonka on vastattava Ilmestyspäivä -tietoa

![Postituslista - Postitusten tiedot](/img/ohjeet/postituksenlisaaminen.png)

3) Postitusyhteenvedon lähetys **Lähetä lopuksi** –aktivointi, mikäli tehdyistä ajoista halutaan yhteenveto viesti tai klikkaa **Lähetä heti** –painiketta, mikäli aiempi viesti ei ole tullut vastaanottajalle

4) Postitusyhteenvedon vastaanottajat – **täydennä sähköpostiosoitteet**, joihin yhteenvetoviesti lähetetään (erottelu puolipisteellä ; ) tai **Hae oletusvastaanottajat** -painikkeella

5) **Päivitä loki** –painikkeesta voi seurata ajojen etenemistä ja mahdollisia virheitä

6) **Näytä ajoajat** –painikkeesta voi katsoa ja tarvittaessa muuttaa Ilmestymispäivä –tiedon mukaisesti asetetut oletusajankohdat
- Postitusajolle (luo Postituslistan ko. lehdelle)
- LaPa –ajolle (luo Postin tarvitseman LaPa-aineiston)
- FTP –aineistosiirrolle (siirtää luodut aineistot painolle)

7) **Ajojen ajankohdat** voi myös asettaa itse, mikäli esim. autom. ajossa on ilmennyt virhetilanne
- Virhetilanteesta riippuen voi kyseisen ja/tai edeltävän ajon joutua **Nollaamaan** ennen kuin sen voi ajaa uudelleen

8) **Päivitä loki** –painikkeesta voi ajona aikaisia tietoja päivittää näkyviin kesken ajojenkin

### Postitusajojen mahdollisia virhe-esimerkkejä

**Postituslista**-ajon virhemahdollisuus
- Ei yleistä, mutta voi johtua esim. tietokantavirheestä
- Vaatii aina yhteydenoton tuki@taikatilaus.fi

**FTP**-ajon virhemahdollisuus
- Ei yleistä, mutta yhteyden luonnissa voi ilmetä ongelmia
- Voi yrittää myöhemmin/seuraavana päivänä uudelleen
- Tarvittaessa yhteydenotto tuki@taikatilaus.fi

**LaPa**-ajon virhemahdollisuuksia
- Postin palvelimella voi olla ruuhkaa, mutta ohjelma suorittaa uusinta-ajon (20x) automaattisesti
- Virhe: […An error occurred while making the HTTP request to https]

- Lähetyslistan numero, Lehden numero ja/tai Ilmestymispäivä virheellinen (eivät vastaa PostiPron tietoja) – tiedot korjattava/tallennettava uudelleen
- Virhe: [The mailing date of the advance electronic shipment list 123456 does not match the provided mailing date.]
- Vaatii Postitusajon nollauksen ja uudelleen ajon ennen LaPa-ajon uudelleen ajoa

- Paino ja/tai paksuus poikkeaa Postin laskemista
- Viesti postilta: Postien vastaanotto postien.vastaanotto@posti.com
Subject: Lähetyslistaa 123456 korjattu, TaikaNakka nro 23
Hyvä asiakkaamme
Olemme korjanneet sähköisen lähetyslistanne, koska lista ja lähetyserä poikkesivat toisistaan seuraavasti:
TaikaNakka -lehden paino korjattu punnituskappaleen mukaiseksi, 70g/kpl (listalla painoksi oli ilmoitettu 57g/kpl).
- Uusi Lapa-ajo tehtävä tarvittaessa (tietoa käytetään mm. Postin laskutusperusteena)

## Postitusten teko ja ainestojen siirto Postiin, painoihin ja varhaisjakeluyhtiöihin

Tämä kappale sisältää ohjeet postitusajon tekoon ja aineistojen siirtoon. **HUOM!** Ohjeessa oletetaan, että asiakas on toimittanut Postin, painojen ja varhaisjakeluyhtiöiden SFTP-palvelujen tunnukset TaikaTilaukselle.

1. Ennen postitusajon tekoa, suorita [kestojatko](https://support.taikatilaus.fi/docs/ohjeet/tilaustenhallinta/kestojatko). Joillakin asiakkailla tämä tapahtuu automaattisesti ajon suorituksen yhteydessä. Näet viimeisin kestojatkon suoritusajan **Postitusten haku**-välilehdeltä. Suoritusaika kertoo täytyykö sinun tehdä kestoajo vai ei.

![Postituslista - Postitusohjeet](/img/ohjeet/postitus-teko9.png)

2. Kun kestojatko on tehty, mene **Postitusten tiedot** -välilehteen. Lisää postitus ja täytä sen **[tiedot](https://support.taikatilaus.fi/docs/ohjeet/tilaustenhallinta/postistuslista#postituslistan-jatkok%C3%A4sittely-ja-siirrot-painoonjakeluun)**

![Postituslista - Postitusohjeet](/img/ohjeet/postitus-teko.png)

![Postituslista - Postitusohjeet](/img/ohjeet/postitus-teko2.png)

3. Aseta postitusajon **suoritusajat** painamalla **Näytä ajoajat** -painikkeesta. Esim. jos suoritat postitusajon klo 10.15 aseta suoritusaika klo 10.00.

![Postituslista - Postitusohjeet](/img/ohjeet/postitus-teko3.png)

4. Suorita postitusajo painamalla **Suorita postitus palvelimella** -painikkeesta. Palvelin suorittaa ajon joka tasaminuutti, joten joudut mahdollisesti odottamaan hetken ennen kuin suoritus alkaa. Kun suoritus käynnistyy **Postitusajon/LAPA-ajon tila** -sarakkeissa lukee Suorituksessa. Saat tilan näkyviin klikkaamalla **Postitusten tiedot** -välilehteä.

![Postituslista - Postitusohjeet](/img/ohjeet/postitus-teko4.png)

![Postituslista - Postitusohjeet](/img/ohjeet/postitus-teko10.png)

5. Kun postitusajo on valmis, tila-sarakkeissa lukee **Valmis**, ja aika joilloin ajo suoritettiin.

![Postituslista - Postitusohjeet](/img/ohjeet/postitus-teko5.png)

6. Siirry **Postitusten haku** -välilehdelle. Aineistot, jotka siirretään painolle/jakelijoille on **korostettu**. Klikkaa aineistopainikkeita yksi kerrallaan, ja paina **Siirrä FTP:llä** -painiketta. Kun siirto on valmis, tieto siitä tulee näkyviin.

![Postituslista - Postitusohjeet](/img/ohjeet/postitus-teko6.png)

![Postituslista - Postitusohjeet](/img/ohjeet/postitus-teko7.png)

7. Kun olet siirtänyt kaikki aineistot onnistuneesti, tarkista lokilta, että muistit siirtää kaikki aineistot. Lokiin pääset **Postitusten tiedot** -välilehdeltä, painamalla **Lehti**-sarakkeesta suorittamaasi postitusta.

![Postituslista - Postitusohjeet](/img/ohjeet/postitus-teko11.png)

![Postituslista - Postitusohjeet](/img/ohjeet/postitus-teko8.png)