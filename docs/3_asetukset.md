---
sidebar_position: 3
---

# Oletusasetukset

## Oletusasetuksien hallinnointi

Käytön yhteydessä hyödynnetään tiettyjä yleisiä perustietoja, joiden määrityksiä käytetään oletuksena eri toiminnoissa. 

Vasemmasta valikosta klikataan **Asetukset**–linkkiä, niin saadaan näkymä, jossa sovelluksen perustietoja voi luoda/muokata.

![Asetukset - välilehti](/img/ohjeet/asetukset.png)
*Asetukset-välilehti päävalikossa*

Uuden näkymän yläreunassa on **valikko**, josta perustietoja päivitetään osa-alueittain.

![Asetukset - päävalikko](/img/ohjeet/asetukset1.png)
*Asetuksien päävalikko*

## Tilaustuotteet

### Yleistietoa

**Tilaustuotteet**–välilehdeltä voidaan **muokata ja lisätä yksittäisiä tuotteita**, joita asiakkaille myydään (esim. Autolehti Kestotilaus 12 kk). Tuotteita lisätään painamalla **Lisää tilaustuote** –painiketta. Jo valmiiksi olemassa olevia tuotteita pääset muokkaamaan painamalla **tuotenumeroa**.

![Tilaustuotteet-näkymä](/img/ohjeet/asetukset3.png)
*Tilaustuotteet-välilehdeltä voit mm. hakea ja muokata olemassa olevia tuotteita, tai lisätä uuden tuotteen.*

Taulukon sarakkeiden **otsikoita** klikkaamalla voi tiedot järjestää uudelleen (esim. aakkosjärjestyksessä tai pienimmästä suurimpaan).

### Tuotteiden haku

Olemassa olevia **tuotteita voi hakea** valitsemalla hakukriteerin ja syöttämällä hakuehdon sille tarkoitettuun kenttään.

**Esimerkki**: haet tuotteita, jotka ovat kestotilauksia. 
- Valitse sopiva **hakukriteeri**
- Kirjoita "kestotilaus" **Hakuehto**-kenttään
- Paina **Hae**
ja saa tuotelistauksen näkyviin kaikista kestotilaustuotteista.

![Tilaustuotteet - tuotteiden hakeminen](/img/ohjeet/asetukset2.png)

### Tuotteen lisääminen tai muokkaaminen

Olemassa olevan tuotteen käsittelylomake ja Tuotteen lisääminen -lomake näyttävät samoilta. Niiden tietoja lisäämällä/muokkaamalla, voi tuotteiden tietoja hallita.

Lomakkeelle lisätään/muokataan **tuotteen perustietoja**, kuten
- mihin **Tuoteryhmään** ja **Kampanjaan** tuote kuuluu
- asiakkaille näkyvä **tuotenimi**, joka näkyy esim. lehden tilauslomakkeella tai laskussa. Jos tämä kenttä on tyhjä, käytetään oletuksena tuotenimeä.
- **Hinta** ja **Tili** -tiedot
- **Tilaustyyppi** ja **Kesto**
- **Digitiedot** (t.s. onko tuote digitaalinen vai ei?)
- Tuotteen **käyttöajat**

**Hinta veroton, ALV prosentti ja Hinta verollinen** –kentissä määritellään tuotteelle oletushintatiedot, joita voi tilausta luotaessa tarvittaessa myös muuttaa.

**Hinta veroton** -tieto on aina oltava viidellä (5) desimaalilla, jonka ohjelma pyöristää automaattsiesti laskua luotaessa.

Veroton/verollinen hintoja voi muuttaa ja suorittaa muutetun tiedon avulla uudelleenlaskennan **Laske veroton hinta verollisesta / Laske verollinen hinta uudelleen** -painikkeiden avulla.

Tilaustyyppi tarvitaan, mikäli tuotteen tilaus halutaan jaettavaksi postitse. Postituslistalle kerätään VAIN Kesto- ja Määräaikaiset tilaukset. Jos halutaan, että ko. tuote EI NOUSE postituslistalle, valitaan tyypiksi Ei määritelty.

JatkotuoteID –tieto kertoo esim. tarjoustuotteella sen tuotteen ID-numeron, jolla tilausta jatketaan automaattisesti tarjousajan päätyttyä (esim. normaali Kestotilaus).
Tarjoustuotteen Tilaustyyppi tulee olla Kesto, mikäli tuote halutaan nousevan automaattisesti jatkettavien tilausten Kestojatko -listalle.

Tilauksen kesto –kentässä määritellään tuotteen pituus oletuksena kuukausissa.
Keston yksikön voi tarvittaessa muuttaa valikosta, jossa vaihtoehtoina päivä/viikko/vuosi.
Kaikissa Kestotilaustyyppisissä tuotteissa pituuden on oltava joku muu kuin 0, sillä muuten ne eivät nouse automaattiseen Kestojatko-ajoon mukaan.

Myyntitili, ALV velkatili ja Myyntisaamiset tili määritellään Tilit -välilehdellä ja ne tulee merkitä kaikille laskutettaville tuotteille. Laskua luotaessa tilöintitilit haetaan tuotekortilta ja niiden avulla muodostetaan laskulle tarvittavat tiliöintirivit, joihin maksetut suoritukset myöhemmin liitetään kirjanpitoa varten.

Kotimaan/ulkomaan tilaus –valinta määrittelee tuotteen tilauksen näkyvyyden ja käsittelyn mm. Postituslistalla (lähetetäänkö ulkomaille eri reittiä).
Digituote –valinta määrittelee tuotteen olevan käytettävissä vain netin kautta esim. Näköislehti.
Oikeuttaa digipalveluun –valinta määrittelee tuotteen tilaukseen sisältyvän myös oikeus käyttää sivuston erillistä Digipalvelua.

Tuotteen voi myös piilottaa näkyvistä hakuvalintoja tai uutta tilausta tehtäessä.

Tuotteelle on määriteltävä Valittavissa aikavälillä aikarajaus
- Jos tuote halutaan olevan aina valittavissa, tulee päättymispäivämäärän olla riittävän kaukana tulevaisuudessa (esim. 31.12.2050)

Tuotteelle määritellään myös Tilaus mahdollinen aikavälillä aikarajaus, joka rajaa sen käytettävissä olevan tilausjakson
- Yksittäisen tilauksen alku- ja loppupäivät tulee mahtua annetun aikarajoituksen sisään
- Mikäli tuote halutaan olevan aina valittavissa, tulee päättymispäivämäärän olla riittävän kaukana tulevaisuudessa (esim. 31.12.2050), koska ’toistaiseksi voimassaolevaa’ tuotetyyppiä ei ole käytettävissä

Digipalvelu –kentän avulla tuotteita voi ryhmitellä saman Digipalvelu-ryhmän alle. Digipalveluissa voidaan tutkia onko tilaajalla aktiivis

## Erillistuotteet

Erillistuotteita ovat tuotteet, jotka eivät sovi tilaus- tai myyntituotteisiin. Esimerkkejä erillistuotteista ovat esimerkiksi Laskutuslisä, Paperilaskutuslisä, jne.

## Tilit

Tilit –välilehdellä on Lisää tili –painike, jolla laskutuksessa käytettävät, yksittäiset kirjanpidolliset tilitiedot lisätään
- Tilaus-/Myyntituotteilla käytetään tässä määriteltyjä tilitietoja

Tilinumero sarakkeen numerotietoa klikattaessa avautuu kyseisen tilin lisätiedot muokattavaksi/poistettavaksi.

Palvelussa käytetään Suoriteperusteista kirjapitoa, jossa
kulut ja tulot kirjataan kirjanpitoon sen mukaan milloin kulut syntyvät eli laskupäivän perusteella
- esim. myyntilasku, joka tehdään tammikuun lopussa ja maksetaan maaliskuun alussa
- Tämä myynti näkyy tuloslaskelmassa suoriteperusteisesti tammikuussa (eikä maaliskuussa kuten maksuperusteisesti)

Suoriteperusteisessa kirjanpidossa kulu kirjataan
- laskupäivän mukaan kulutilin debetiin ja ostovelkojen kreditiin
- Myöhemmin, kun lasku maksetaan kirjaus menee pankkitilin kreditiin ja ostovelkojen debettiin
- Maksun yhteydessä ostovelat siis nollautuvat

Myyntien osalta kirjaukset menevät samalla logiikalla, mutta debet ja kredit ovat vaan päinvastaiset
- Myyntilasku kirjataan laskun päivämäärän mukaan kreditiin (esim. 1502 Lehtitilaussaamiset TaikaVakka) ja myyntisaamisten (saamiset asiakkailta) debetiin (esim. 30090 Suomi vuositilaus TaikaVakka alv 10% ja 2470 Myynnin 10% ALV-velka)
- Myöhemmin, kun asiakas suorittaa laskun pankkitilille, kirjaus menee pankkitilin debetiin (esim. 1710 Nordea) ja myyntisaamisten kreditiin (esim. 1502 Lehtitilaussaamiset TaikaVakka)
- Suorituksen yhteydessä myyntisaamiset siis nollautuvat

## Viestipohjat

Viestipohjat –välilehdellä lisätään laskujen sähköpostilähetyksessä käytettävät viestipohjat
- Oletusviestejä voi lisätä useammalle eri lehdelle (6)
- Valmiit viestipohjat voi lisätä Laskulle, Maksumuistutus #1, Maksumuistutus #2 ja Hyvityslaskulle

Viesti -kentän kokoa voi laajentaa oikeasta alakulmasta kursorilla vetämällä

Ohjelma valitsee automaattisesti oikean sähköpostiviestin riippuen minkä lehden lasku on kyseessä ja mikä on kyseisen laskun muoto

## Maksumuistutukset

Maksumuistutukset –välilehdelle lisätään halutut tekstitykset, mitkä lisätään Maksumuistutuksien #1 ja #2 laskupohjiin automaattisesti

Tekstitykset voivat vaihdella lehtikohtaisesti
- Oletustekstit voi lisätä useammalle (6) eri lehdelle

## Kanavat

Kanavat –välilehdellä määritellään kanavat, joiden alle myyntituotteet ryhmitellään.

Määritellyt kanavat sidotaan ohjelmaan koodattuihin kanavatyyppeihin, koska eri kanavilla on erityyppisiä ominaisuuksia esim.
- lehdillä olevat palstamillimetrit
- radiomainoksilla CPM-arvo
- tai Lehti-kanavalla julkaisut ovat lehtien numeroita, mutta Radio-kanavalla julkaisu voi olla vuosikohtainen

Kanavat erotellaan kentän listauksessa pilkuilla esim. LEHTI,UUTISKIRJE,RADIO

Kanavan voi nimetä myös lehtikohtaisesti esim. TaikaNakka,TaikaVakka

Lisäksi määritellään Lehti-tyyppisen kanavan ilmoitusosastot
- Jokainen kanavan ilmoitusosasto kirjoitetaan omalle rivilleen puolipisteillä eroteltuina
- Uusi ilmoitusosasto lisätään muodossa: Kanavan nimi;ilmoitusosasto;hinta esim. LEHTI;etusivu;1,55

## Myyntituotteet

Myyntituotteet –välilehdellä on Lisää –painike (oikea yläkulma), jolla asiakkaille myytävät yksittäiset myyntituotteet lisätään

Myyntituote on sovelluksessa myytävä asia, esim. lehden etusivun mainos/ilmoitus

Myyntituotteelle lisätään siihen liittyviä perustietoja, kuten
- Kanava ja Julkaisu, jossa se esitetään
- Ryhmä ja Nimi, esim. ilmoitusosio ja sen palstakoko (1x10 ppm)

Lisäksi voidaan liittää oletuskäsittelijä, joka saa tiedon mm. aineistojen tulosta.

Jo luotuja myyntituotteita pääset katsomaan ja muuttamaan klikkaamalla Numero –sarakkeen numeroa.

## Paketit

Paketit –välilehdellä on Lisää –painike, jolla yksittäisistä myyntituotteista voidaan muodostaa erillishinnoiteltuja tuotepaketteja

Jo luotuja paketteja pääset katsomaan ja muuttamaan klikkaamalla Numero –sarakkeen numeroa

Myyntituote lisätään valitsemalla yksittäin/kaikki vasemmasta laatikosta ja siirtämällä yksittäin/kaikki oikeanpuoleiseen laatikkoon välissä olevilla nuolilla

Yksittäisiä myyntituotteita voi tarvittaessa kopioida Monista –painikkeen avulla
Esim. sama myyntituote useammassa eri lehdessä

## Julkaisut

Julkaisut –välilehdellä on Lisää –painike, jolla yksittäisistä julkaisuja voidaan muodostaa eri kanavia varten

Julkaisu on tuote, jossa mainos/ilmoitus esitetään: lehti, radiomainos, uutiskirje, www-sivu tms.

Julkaisulle määritellään mm. siihen liittyvä
- Kanava (esim. tietty lehti, nettisivu, mainostaulu), joka valitaan valikosta
- Nimi ja Numero, jotka ovat vapaasti määriteltävissä
- Teema, joka on vapaasti määriteltävissä
- Ilmestymispäivä (jolloin esim. lehti jaetaan)
- Aineiston viimeinen käsittelypäivä (mihin mennessä siihen halutut ilmoitusaineistot pitää olla toimitettuna)

Julkaisuja pääsee muuttamaan/poistamaan klikkaamalla Nimi –sarakkeesta löytyvää yksittäistä nimeä.

Valmiin julkaisun (PDF tiedosto) voi ladata palveluun, jolloin se tulee välittömästi näkyviin OmaPalveluun kaikille ko. julkaisun tilanneille asiakkaille ja/tai kaikille niille, jotka ovat siihen ostaneet mainos-/ilmoitustilaa

## Irtonumerot

Irtonumerot –välilehdellä lisätään lehtien irtonumeroiden saajat
- vain postituslistaan ja
- tilaus- ja asiakasnumeroksi asetetaan 999999

Irtonumeroiden lisäyksessä syötetään jokainen lehden irtonumero omalle rivilleen
- Puolipisteillä eroteltuina muodossa:

Lehden nimi;
Lehden ilmestymispäivä;
Nimi (Suku- ja etunimi);
Yritys;
Katuosoite;
Katunumero;
Porras;
Huoneisto;
Postinumero;
Postitoimipaikka

## Vastaanottoilmoitukset

Vastaanottoilmoitukset –välilehden listauksen avulla vertaillaan vastaanotetut valtuutukset asiakasrekisteristä löytyviin asiakaskortteihin

RI-sanomassa saadut Vastaanottoilmoitusten Koodit ovat
0 = Lisäys
1 = Muutos
2 = Poisto

Ja Vastaanottoilmoitusten Suoramaksujen Tyyppit ovat
00 = eLasku
01 = Suoramaksu

Tarvittaessa päivitetään asiakkaan IBAN/BIC tiedot asiakaskortin Laskutustietoihin

Käsittele vastaanottoilmoitukset –painikkeella muutokset päivittyvät vertailulistaukselle

Oletuksena näitä vastaanottoilmoituksia haetaan palveluun 6 h välein.

## Muut asetukset

Muut asetukset –välilehdellä voi lisätä mm.

Valikkoihin erilaisia Asiakasryhmiä ja Asiakasrooleja, jotka
- näkyvät Asiakaskortin valintalistalla
- ovat käytettävissä erilaisissa hakulistauksien koostamisessa

Valikosta Katkaisun syy valittava vaihtoehto merkitään Tilaukselle, kun tilaus peruutetaan

Haut -näytöllä huomioitavat katkaisun syyt mitkä sisältyvät valikon hakuehtoon: KAIKKI, PAITSI ASETUKSISSA MÄÄRITELLYT

## Pääkäyttäjä

Pääkäyttäjä –välilehdellä voi palvelun Pääkäyttäjäksi nimetyt lisätä mm.
- yrityksen ja sen tuotteiden perustietoja
- uusia Lehtien tilaustapoja
- muuttaa Laskunumerosarjan alku- ja loppunumerointeja
- aktivoinnin Kampanja tuotteiden käyttöä varten
- rajoituksen tekstiviestien lkm/päivä
- määrityksen painotalon asettamalle jakelunippujen minimikoolle
- aktivoinnin Ilmoitusmyynti -toimintoihin ja niiden kenttien näkyvyyksiin
- aktivoinnin OmaPalvelun -toimintoihin
- aktivoinnin Paperilaskutuslisän käytölle

- Tiedostoja lähetettäväksi ylläpitäjälle esim. asiakastietoja massapäivitystä varten
- Tiedostoja noudettavaksi ylläpitäjältä esim. tarkastamista varten.

Sekä koostaa raportin Koko Asiakasrekisteri Exceliin + tilaus, lasku ja myyntitiedot –taulukkoon
- tuo KAIKKI, (Poistettu 0=normaali / Poistettu 1=poistettu) , jonka avulla voidaan päättää mm. palvelusta pois siivottavat vanhat tiedot (kuten tupla-asiakaskortit)

Ja muuttaa tiliöintien tilitietoja,
sekä lähettää/vastaanottaa palveluun liittyviä siirtotiedostoja

## Käyttäjät

Käyttäjät –välilehdellä Pääkäyttäjäksi nimetyt voivat lisätä uusia, muuttaa ja poistaa olemassa olevia TaikaTilaus –palvelun käyttäjiä

Käyttäjätunnus sarakkeen yksittäistä tunnusta klikattaessa avautuu sen tarkemmat tiedot

Käyttäjillä on palvelussa erilaisia Rooleja (esim. Myyjä/Käsittelijä) riippuen heidän tarvitsemista toiminnallisuuksista
- Myyjä roolissa olevat käyttäjätunnukset (myyjät) voidaan sitoa asiakaskortilla asiakkaisiin. Tällöin ko. asiakkaasta tulee Ilmoitusmyynnin asiakas
- Rekisterin ylläpitäjä ei kuulu mihinkään rooliin, vaan sallitut toiminnot asetetaan käyttöoikeuksilla

Erikoiskäyttöoikeus 'Vain postituslista' on tarkoitettu esim. lehden painon käyttöön
- Ei näytä muita toimintoja lainkaan
Postituslistojen hakuun jakelua varten

Käyttäjälle voi antaa tietyn tai satunnaisen salasanan, jonka hän voi itse muuttaa ja tunnukselle voi antaa voimassaoloajan (esim. kesäapulaisia varten)

Käyttäjän tiedot –näkymässä ylläpidetään olemassa olevia tunnuksia

Käyttöoikeudet eri toimintoihin aktivoidaan käyttäjäkohtaisesti
- Myös Ilmoitusmyynti sovellus lisätään käyttöön täällä.

Käyttäjän perustiedot täydennetään ensin ja valitaan hänen tarvitsemansa Rooli (esim. ilmoitusten Käsittelijä)
- Perustiedot pitää ensin tallentaa ennen kuin voi lisätä aktivoitavat toiminnot

Tarvittavat toiminnot lisätään Käyttöoikeudet –valikon avulla, josta voi liittää tarvittavat toiminnot valitsemalla sen/kaikki vasemman puoleisesta laatikosta ja siirtämällä sen/kaikki oikean puoleiseen laatikkoon välissä olevilla Nuolipainikkeilla (ja poistaa tekemällä päinvastoin)

## OmaPalvelu

OmaPalvelu –välilehdellä määritellään asiakaskohtaiset asetukset lehti- ja ilmoitusasiakkaiden OmaPalvelun käyttöä varten

Oletusasetuksiin määritellään kirjautumiseen liittyen mm.
- Sovelluksen nettiosoite ja nimi
. Kirjautumisnäkymien otsikot ja muut ohjetekstit
- Oheistoimintojen ohjauslinkit
- Toimintoihin liittyvien viestien otsikot ja sisältötekstit

## Varhaisjakelu

Varhaisjakelu –näkymässä ylläpidetään varhaisjakelussa käytettävää osoitteistoa
- Osoitteisto päivitetään käyttöönoton yhteydessä ja tarvittaessa muulloinkin sähköisen tiedostosiirron avulla

Varhaisjakeluun liittyvät osoitteistot ja nippujen tiedot määritellään asetuksissa, kuten esim.
- Postin varhaisjakelurekisteri ja käytettävät piirinumerot
- Postin kimputusrekisteri
- SanomaManun varhaisjakelurekisteri ja käytettävät piirinumerot
- Vakioniput
- Varhaisjakelun reitit

- Päivitä nippunumerot koko asiakasrekisteriin
- Näytä nippujen koot
- Näytä nipulliset osoitteet
- Näytä nippujen koot tilauksellisista
- Näytä nippujen osoitteet tilauksellisista
- Näytä tilaukselliset osoitteet

Palveluun tullaan saadaan myös näkyviin Postin välittämät ilmoitukset esim. Jakeluhäiriöistä ja niiden kestosta, sekä
Ilmoitettua Postille asiakkaan ilmoittamat jakeluvirheet, kuten puuttuvan lehden, jonka Posti toimittaa asiakkaalle erilliskuljetuksena

## Varhaisjakelunippujen päivittäminen

Varhaisjakelu –näkymässä ylläpidetään myös esim. Vakioniput –rekisteriä, jossa listataan
- mm. lehden toimistoon vietävän nipun koko
- Painon varalehtien nipun koko
- Muut vakioniput ja niiden sisältämät lehtimäärät

Yksittäiset vakioniput listataan alle aukeavaan tekstikenttään
- jokainen omalle rivilleen kentät puolipisteillä eroteltuina
- sarakkeita on 12kpl ja niiden järjestys sekä maksimi pituus näkyy ohjeen mallirivistä

Muutokset (esim. lisälehtiä nippuun) päivitetään ko. vakionipun riville ja tallennetaan
- Mikäli muutos on tilapäinen, tulee se palauttaa päivittämällä muutostieto takaisin (normimäärään) poikkeavan postituksen jälkeen