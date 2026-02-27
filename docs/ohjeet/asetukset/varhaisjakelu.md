---
sidebar_position: 18
---

# Varhaisjakelu

![Varhaisjakelu](/img/ohjeet/varhaisjakelu.png)

**Varhaisjakelu**–näkymässä ylläpidetään varhaisjakelussa käytettävää osoitteistoa.  
- Osoitteisto päivitetään käyttöönoton yhteydessä ja tarvittaessa myöhemmin sähköisen tiedostosiirron avulla.

Varhaisjakeluun liittyvät osoitteistot ja nippujen tiedot määritellään asetuksissa:

- Postin varhaisjakelurekisteri ja käytettävät nippunumerot  
- Vakioniput  
- Varhaisjakelun reitit  
- Peittojakelu  
- Lehdetön peittojakelu  
- Yhdistettävät niput  

### Postin varhaisjakelurekisteri ja käytettävät nippunumerot

Tähän välilehteen syötetään Postilta saatu varhaisjakelun **katurekisteri**. Kadut ja niiden katunumerot on kohdistettu piireihin. Katurekisteri ladataan leikepöydän kautta **CSV-muodossa**.  

Osoitteet **syötetään** riveittäin seuraavassa muodossa:  
`Paikannimi;Parittomat;Parilliset;Postinumero;Postitoimipaikka;Reittitunnus (nippunumero)`  

**Postin varhaisjakeluosoitteiston käytettävät piirinumerot (nippunumerot)** -kenttään syötetään piirinumerot, joilla varhaisjakelua halutaan käyttää. Piirinumerot **syötetään** omille riveilleen muodossa:  
`Nippunumero;Lehti`

![Varhaisjakelu](/img/ohjeet/varhaisjakelu2.png)

### Vakioniput

**Varhaisjakelu**–näkymässä ylläpidetään myös **Vakioniput**–rekisteriä, jossa listataan muun muassa:

- Lehden toimistoon vietävän nipun koko  
- Painon varalehtien nipun koko  
- Muut vakioniput ja niiden sisältämät lehtimäärät  

Yksittäiset vakioniput **listataan** tekstikenttään:
- Jokainen nippu omalle rivilleen, kentät puolipisteillä eroteltuina  
- Muodossa:  
  `Lehti;Reitti;Jättöpaikka1;Jättöpaikka2;Nippu;Kuljetuksenohjaus1;Kuljetuksenohjaus2;Vastaanottaja;Osoite;Postinumero+Postitoimipaikka;Jakelu(VARHAIS/PÄIVÄ);Kpl`  
- Sarakkeita on 12 kpl, ja niiden järjestys sekä maksimipituudet näkyvät ohjeen mallirivissä  

Muutokset (esim. lisälehtiä nippuun) päivitetään kyseisen vakionipun riville ja tallennetaan.  
- Mikäli muutos on **tilapäinen**, se tulee palauttaa päivittämällä muutostieto takaisin (normimäärään) poikkeavan postituksen jälkeen.  

![Varhaisjakelu](/img/ohjeet/varhaisjakelu3.png)

#### Nippujen päivitys

Voit muuttaa kaikkien vakionippujen tietoja kerralla tai lisätä uusia vakionippuja viemällä tiedot Exceliin **Vie Exceliin** -painikkeesta.  

![Varhaisjakelu](/img/ohjeet/vakionippu2.png)

Muokkaa nippujen tietoja, poista tarpeettomia rivejä tai lisää uusia Excelissä.  

![Varhaisjakelu](/img/ohjeet/vakionippu3.png)

Tuo päivitetyt niput järjestelmään **Tuo Excelistä** -painikkeella.  

![Varhaisjakelu](/img/ohjeet/vakionippu4.png)

Kopioi niput Excelistä ja liitä ne järjestelmässä olevaan kenttään.  

Lopuksi klikkaa **Lue Excel sisään** -painiketta.  

![Varhaisjakelu](/img/ohjeet/vakionippu5.png)

Niput ovat tämän jälkeen päivittyneet.

![Varhaisjakelu](/img/ohjeet/vakionippu6.png)

### Varhaisjakelun reitit

Tälle välilehdelle syötetään **varhaisjakelun reitit**.  

Reitit **syötetään** muodossa:  
`Kuljetus nro (Reitti);Jättöpaikka;Piiri nro (Nippu);Piirinimi;Kuljetusnimi;Jättöpaikan osoite`

![Varhaisjakelu](/img/ohjeet/varhaisjakelu4.png)

### Peittojakelu

Kun tehdään lehden **peittojakelua** (Lehti + lisälehti), syötetään tälle välilehdelle peittojakelun reitit.  

Postituslistan luontivaiheessa ohjelma hakee kyseiseen lehteen ja ilmestymiseen lisättävät lisälehdet ja lisää ne postituslistalle automaattisesti.

Peittojakelun **reitit syötetään** siten, että jokainen rivi vastaa yhtä reittiä, ja kentät erotellaan puolipisteillä.  

Sarakkeiden järjestys:  
`Lehti;Piiri nro (Nippu);Lehden ilmestymispäivä;Kpl`

![Varhaisjakelu](/img/ohjeet/varhaisjakelu5.png)

### Lehdetön peittojakelu

Kun tehdään **vain lisälehden peittojakelu**, syötetään tälle välilehdelle peittojakelun reitit.  

Lehdetön peittojakelu voidaan lisätä postitukseen painamalla **Lisää lehdetön peittojakelu postitukseen** -painiketta.

Peittojakelun **reitit syötetään** siten, että jokainen rivi vastaa yhtä reittiä, ja kentät erotellaan puolipisteillä.  

Sarakkeiden järjestys:  
`Lehti;Reitti;Jättöpaikka1;Jättöpaikka2;Nippu;Kuljetuksenohjaus1;Kuljetuksenohjaus2;Vastaanottaja;Osoite;Postinumero+Postitoimipaikka;Lehden ilmestymispäivä;Kpl`

![Varhaisjakelu](/img/ohjeet/varhaisjakelu6.png)

### Yhdistettävät niput

**Yhdistettävät niput** -välilehdellä voidaan yhdistää varhaisjakelun pieniä nippuja yhteen.  

Ohjelma kerää postituslistaan annettujen nippujen osoitteet samaan nippuun ja lisää kansilehdelle maininnan siitä, että nippu sisältää useamman nipun tietoja.

**Syötä** kunkin yhdistetyn nipun tiedot allekkain muodossa:  
`Lehden nimi[TAB]Nippunumero`  

Muitakin sarakkeita voi olla, mutta niitä ei tulkita. Ensimmäistä nippunumeroa käytetään Ferakissa, ja siihen yhdistetään muut niput. Mikäli ensimmäisessä nippunumerossa **ei ole yhtään lehteä**, käytetään seuraavaa.  

Erottele yhdistettävät niput tyhjällä rivillä. Tuo tiedot Excelistä, niin **Lehden nimen ja Nippunumeron väliin tulee TAB (tabulaattori)**.

![Varhaisjakelu](/img/ohjeet/varhaisjakelu7.png)

