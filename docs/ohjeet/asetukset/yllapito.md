---
sidebar_position: 8
description: Ylläpito — Laskun muodostamistiedot, yleiset asetukset, laskutus, Ennakkomaksu ja Maksun palautus.
---

# Ylläpito

![Ylläpito](/img/ohjeet/paakayttaja.png)

**Ylläpito**-välilehden tietoja voivat muokata vain palvelun **pääkäyttäjiksi nimetyt käyttäjät**. 

Välilehdeltä voi muokata mm.:

- yrityksen ja sen tuotteiden perustietoja  
- laskunumerosarjan alku- ja loppunumerointeja  
- rajoituksia tekstiviestien määrälle per päivä  
- jakelunippujen minimikokoa  
- **OmaPalvelu**-toimintojen aktivointia  
- **Paperilaskutuslisän** käyttöönottoa  

Tilauksiin liittyvät asetukset ovat [Tilausten hallinta](/docs/ohjeet/asetukset/tilausten-hallinta) -välilehdellä ja ilmoitusmyynnin asetukset [Ilmoitusten hallinta](/docs/ohjeet/asetukset/ilmoitusten-hallinta) -välilehdellä.

Voit myös lähettää tiedostoja ylläpitäjälle, esimerkiksi asiakastietojen massapäivitystä varten, tai **noutaa tiedostoja ylläpitäjältä** tarkastamista varten.

### Laskun muodostamistiedot

![Ylläpito](/img/ohjeet/paakayttaja13.png)

Painamalla **Laskun muodostamistiedot** -kohdan vieressä olevaa **NÄYTÄ**-painiketta avautuu uusi välilehti, jossa näet laskutustiedot eri tuotteille.  

Välilehdeltä näet mm.:

- minä päivinä laskuja muodostetaan automaattisesti  
- minä päivinä luodut laskut lähetetään automaattisesti (laskut lähtevät matkaan noin klo 19 määrättynä päivänä/päivinä)
- eri tuotteiden huomautusajan maksumuistutuksille  

Laskun muodostamistietoja voidaan muokata **vain TaikaTilauksen puolelta**.  
Jos haluat muuttaa näitä asetuksia, ota yhteyttä: **tuki@taikatilaus.fi**

![Ylläpito](/img/ohjeet/paakayttaja3.png)
*Laskujen muodostamistiedot -näkymä.*

### Yleiset asetukset

- **Yrityksen nimi** -kentästä voit muokata yrityksen nimeä.  
- **Julkaisujen lyhenteet** -kenttään kirjataan eri lehtijulkaisujen nimien lyhenteet omille riveilleen.
- **Etusivun asiakkaiden max. näyttömäärä** -kenttään kirjataan, kuinka monta asiakasta näytetään enintään etusivun hakulistassa.  
- **OmaPalvelu-osio näkyvissä kontaktikortilla** -kentän aktivoidessa *OmaPalvelu*-alivalikko näytetään asiakaskortilla.  
- **Tekstiviestien max. lähetysmäärä päivässä** -kenttään syötetään luku (0–10 000), joka kertoo, kuinka monta tekstiviestiä voi lähettää päivittäin ohjelman avulla.
- **Lehtien painoaineistossa minimi nippukoko** -kenttään annetaan lehtien nippujen minimikoko.
- **Käyttäjätunnukset (OmaPalvelu2-näyttö näkyvissä)** – <!-- ??? -->  

![Ylläpito](/img/ohjeet/paakayttaja2.png)

### Laskutus

- **Kontaktin perintäkielto -kenttä käytössä** -kentän aktivoimalla asiakaskortin *Laskutustiedot*-osioon tulee näkyviin *Perintäkielto*-kenttä, jonka aktivoimalla kyseisen asiakkaan laskuista ei lähetetä maksumuistutuksia eikä niitä peritä.  
- **Laske laskun summat 5:llä desimaalilla** -kentän aktivoidessa laskujen summat lasketaan viiden desimaalin tarkkuudella yksikköhinnasta.  
- **Ei laskutuslisää -kenttä käytössä** -kentän aktivoidessa asiakaskortille tulee näkyviin *Ei laskutuslisää* -kenttä.
- **Myyjätieto laskulle** -kentän aktivoidessa *Lasku*-näkymään ilmestyy *Myyjä*-valintalista.
- **Raportoinnissa Reskontraluettelo 2 käytössä** – <!-- ??? -->  

### Tilausasetukset

Tilauksiin liittyvät asetukset, kuten *Uusi tilaus* -kenttä, kampanjat, paketit, lehtien tilaustavat ja tilausmyyjät, jaksotiedot sekä kestojatkon rajat, ovat omalla [Tilausten hallinta](/docs/ohjeet/asetukset/tilausten-hallinta) -välilehdellään.

### Ennakkomaksu ja Maksun palautus

Näitä asetuksia tarvitaan [saldo ja rahan palautus](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo) -toiminnon käyttöönottoon.

- **Ennakkomaksujen (saldo) tili:** mille tilille saldoa lisätään ja käytetään
- **Saldon käytön TuoteID**: sen erillistuotteen TuoteID, jota käytetään tuoterivin luomiseen laskulle, kun saldoa käytetään laskun maksamiseen.
- **Maksun palautusten tili**: mille tilille palautettavat rahat merkitään odottamaan palautusta ja miltä palautukset kuitataan maksetuiksi
- **Maksetun laskun rahan palautus** -kentän aktivoidessa laskulle tulee painike, jota painamalla voi hyvittää kyseisen laskun ja laskun maksetun summan voi siirtää asiakkaalle palautettavaksi

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-palautus3.png)

### Ilmoitusmyynti

Ilmoitusmyynnin asetukset, kuten ilmoitusvarauslomakkeen kentät, *Vapauta ilmoitusvaraus laskutukseen* -toiminto ja poliittisen mainonnan (TTPA) tiedot, ovat omalla [Ilmoitusten hallinta](/docs/ohjeet/asetukset/ilmoitusten-hallinta) -välilehdellään.

### Osoitekentät

Osoitekenttiin voidaan syöttää:

- **Asiakkaan oman www-sivuston osoite** – URL-osoite, johon käyttäjä ohjataan esimerkiksi epäonnistuneen sisäänkirjautumisen jälkeen.  
- **Asiakkaan oman www-sivuston TaikaTilaus-sisäänkirjauksen vastaanotto** – URL-osoite, jonne voidaan lähettää TaikaTilaus-ohjelman sisäänkirjautumistiedot.  
- **Asiakkaan oman www-sivuston Palvelut-lomakkeen paluun vastaanotto** – URL-osoite, jonne käyttäjä ohjataan Palvelut-lomakkeelta esimerkiksi tilaamisen jälkeen.  

![Ylläpito](/img/ohjeet/paakayttaja7.png)

### Välilehden loppupään toiminnot

![Ylläpito](/img/ohjeet/paakayttaja8.png)

**Ylläpidon raportit**

- Koostaa raportin koko asiakasrekisteristä Exceliin, sekä tilaus-, lasku- ja myyntitiedot sisältävään taulukkoon.  
- Raportin luominen suuresta asiakasrekisteristä voi kestää jonkin aikaa — haku kestää noin 1000 kontaktia / 1 minuutti.  
- Kun raportti on luotu, ilmestyy linkki, josta sen voi ladata.  

![Ylläpito](/img/ohjeet/paakayttaja9.png)

**Pääkäyttäjätoiminnot**  
- Testaa WordPress-salasanan tarkistamista <!-- Tarkennus tarvitaan: mitä toiminto tekee käytännössä. -->

**Muuta tiliöinnin tiliä**  
- Painikkeesta painamalla avautuvat alla olevan kuvan mukaiset kentät, joista voi muuttaa yksittäisten tiliöintien tiliä.  

![Ylläpito](/img/ohjeet/paakayttaja10.png)

**Lataa tiedosto TaikaTilaukselta**  
- Painikkeen kautta voit ladata TaikaTilauksen toimittamia tiedostoja. 

![Ylläpito](/img/ohjeet/paakayttaja11.png)

**Toimita tiedosto TaikaTilaukselle**  
- Painikkeen kautta voit lähettää tiedostoja TaikaTilaukselle (esimerkiksi suuria muutoksia asiakasrekisterissä).  
- Ilmoita tiedoston lähettämisestä osoitteeseen **tuki@taikatilaus.fi**.  

![Ylläpito](/img/ohjeet/paakayttaja12.png)

