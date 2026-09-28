---
sidebar_position: 6.4
description: Tilausten hallinta — tilausnäytön kentät, jaksot ja kestojatko, katkaisun syyt, ennakkomaksu ja maksun palautus, digilehden kirjautumistunniste sekä TaikaTilauksen hallinnoimat tilausominaisuudet.
---

# Tilausten hallinta

**Tilausten hallinta** -välilehdelle on koottu lehtitilauksiin liittyvät asetukset. Välilehti näkyy yrityksen **pääkäyttäjille**.

**Käyttöönotto**-osion asetukset ovat TaikaTilauksen hallinnoimia, ja ne näkyvät välilehdellä vain TaikaTilauksen käyttäjille. Jos haluat muuttaa niitä, ota yhteyttä: **tuki@taikatilaus.fi**

<!-- Kuvakaappaukset otetaan uudesta näkymästä. -->

## Käyttöönotto (TaikaTilaus)

- **Ulkoinen kestotilaus käytössä** – tuotteen asetuksiin tulee *Ulkoinen kestotilaus* -valinta. Käytetään kuukausiveloitettavissa korttimaksuissa (esim. Stripe), joissa tilausta jatketaan maksupalvelun pyynnöstä.
- **Maksetun tilauksen katkaisu käytössä** – tilauslomakkeelle tulee *Maksetun tilauksen katkaisu* -painike. Sen avulla tilauksen voi katkaista ja jo maksetun rahan siirtää asiakkaan saldoksi tai palautettavaksi. Tilit ja tuote määritetään alla [Ennakkomaksu ja Maksun palautus](#ennakkomaksu-ja-maksun-palautus) -osiossa.
- **Saldo käytössä** – asiakkaalle tulee käyttöön *Saldo*-toiminto, jonne voidaan siirtää rahaa esim. tilauksen tuotteen vaihdosta tai suorituksen liikamaksusta. Saldo huomioidaan uutta laskua tehtäessä.
- **Maksun palautus käytössä** – asiakkaalle tulee käyttöön *Maksun palautus* -toiminto, jolla asiakkaalle palautettava summa kirjataan odottamaan palautusta.
- **Lehti on maksuton (piilota maksullisuus)** – valitaan, kun lehti on tilaajille maksuton eikä tilauksista laskuteta. Ohjelmasta piilotetaan maksamiseen liittyvät kohdat: Laskut-valikko, tilausten hinnat, kontaktikortin laskutustiedot, asiakasportaalin laskut sekä laskutuksen käyttöoikeudet.

## Tilausnäyttö

- **Uusi tilaus -kenttä käytössä** – kentän aktivoidessa *Tilaus*-näytölle ilmestyy *Uusi tilaus* -kenttä.
- **Kampanja käytössä** – kentän aktivoidessa tuotteita voidaan ryhmitellä erilaisiin kampanjoihin, ja tilausta luotaessa näytetään vain valittuun kampanjaan kuuluvat tuotteet.
- **Paketti käytössä** – kentän aktivoidessa tilaustuotteista voi muodostaa paketteja, ja asetuksiin tulee näkyviin *Tilauspaketit*-välilehti.
- **Lehden numerot tilauksissa käytössä** – kentän ollessa aktivoituna voit määrittää tilauksen pituudeksi esimerkiksi 2 lehteä, jolloin tilauksen alku- ja loppupäivä määräytyvät julkaisukalenterin mukaan. Jotta tilauksen pituus määräytyy oikein, julkaisukalenterin pitää olla ajan tasalla ja julkaisuja lisättynä riittävän pitkälle tulevaisuuteen.
- **Lehtien tilaustavat** – kenttään kirjataan puolipisteillä eroteltuina, miltä kanavilta lehtiä voi tilata.
- **Lehtien tilausmyyjät** – kenttään annetaan lista lehtimyyjistä, joita voi tämän jälkeen valita valikosta tilauksia tehtäessä.
- **Lehtien tuoteryhmät** – kenttään syötetään tuoteryhmät, joiden alta lehtituotteet löytyvät.

## Jaksot ja kestojatko

- **Osissa maksettaviin tilauksiin jaksotieto päivinä** – kentän aktivoidessa osissa maksettavien tilausten laskuille lisätään laskutusjakso päivinä, esim. 1.1.2025–31.1.2025.
- **Tilausjakson hyvitysviesti käytössä** – kentän aktivoidessa tilaukselle tulee näkyviin *Hyvitä tilausjaksoa* -painike, jonka avulla voi siirtää tilauksen loppupäivää ja lisätä seuraavalle laskulle tekstin, jossa kerrotaan hyvityksestä.
- **Kestojatkon alkupäivän raja menneisyyteen (kk)** – kuinka kaukana menneisyydessä kestojatkon alkupäivä voi olla. Oletus -1 kuukautta.
- **Kestojatkon loppupäivän raja menneisyyteen (kk)** – kuinka kaukana menneisyydessä kestojatkon loppupäivä voi olla. Oletus -1 kuukautta.
- **Kestojatkon loppupäivän raja tulevaisuuteen (kk)** – kuinka kaukana tulevaisuudessa kestojatkon loppupäivä voi olla. Oletus 4 kuukautta.

## Katkaisut

**Katkaisun syyt** -valikkoon kirjataan mahdolliset tilauksen katkaisusyyt, jotka voidaan valita tilauksen katkaisun yhteydessä (esim. *"Lehti on liian kallis"*).

![Katkaisun syyt](/img/ohjeet/katkaisun-syyt.png)
*Katkaisun syyt ja karsittavat katkaisun syyt*

![Katkaisun syyt](/img/ohjeet/katkaisun-syyt2.png)
*Voit valita tällä välilehdellä asettamasi syyt tilauksen katkaisun yhteydessä.*

**Karsittavat katkaisun syyt** -kentässä määritellään, mitkä katkaisun syyt **sisältyvät Haut-välilehden ehtoon:** 
`[KAIKKI, PAITSI ASETUKSISSA MÄÄRITELLYT]`.  

Tähän asetetaan ne katkaisun syyt, jotka halutaan **karsia hausta tai raporteilta.**

Esimerkiksi **[Haut](/docs/ohjeet/yleiset_ominaisuudet/haut)**-välilehdellä voidaan hakea katkaistujen tilausten asiakkaita soittolistaan.  

Jos halutaan rajata pois katkaisut, jotka johtuvat tilaajan kuolemasta, määritellään **Asetukset → Tilausten hallinta** -välilehdeltä, että katkaisusyy **“ESTE: Kuollut”** karsitaan hausta, kun hakuehtona on **KAIKKI, PAITSI ASETUKSISSA MÄÄRITELLYT.**

![Karsittavat katkaisun syyt](/img/ohjeet/muut-asetukset3.png)

![Karsittavat katkaisun syyt](/img/ohjeet/muut-asetukset4.png)

## Ennakkomaksu ja Maksun palautus

Näitä asetuksia tarvitaan, kun *Saldo käytössä* tai *Maksun palautus käytössä* on otettu käyttöön. Ne tarvitaan [saldo ja rahan palautus](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo) -toiminnon käyttöönottoon.

- **Ennakkomaksujen (saldo) tili:** mille tilille saldoa lisätään ja käytetään
- **Saldon käytön TuoteID**: sen erillistuotteen TuoteID, jota käytetään tuoterivin luomiseen laskulle, kun saldoa käytetään laskun maksamiseen.
- **Maksun palautusten tili**: mille tilille palautettavat rahat merkitään odottamaan palautusta ja miltä palautukset kuitataan maksetuiksi
- **Maksetun laskun rahan palautus** -kentän aktivoidessa laskulle tulee painike, jota painamalla voi hyvittää kyseisen laskun ja laskun maksetun summan voi siirtää asiakkaalle palautettavaksi

![Tilaustiedot - Maksetun tilauksen katkaisu](/img/ohjeet/saldo-palautus3.png)

## Digilehti

- **Kirjautumistunniste käytössä** – kentän aktivoidessa ePaper-kirjautumisrajapinnassa käytetään vaihtuvaa käyttäjäkohtaista kirjautumistunnistetta.
- **Testaa Wordpress-salasanan tarkistamista** (vain TaikaTilaus) – WordPress-migraatioissa käytettävä apuväline: anna WordPressin salasana ja sen salattu vastine, niin TaikaTilaus kertoo, täsmäävätkö ne.

## Liittyvät asetukset muilla välilehdillä

Välilehden lopussa on linkit muihin tilauksiin liittyviin asetuksiin:

- **Tuotteet & Julkaisut** – [Tilaustuotteet](/docs/ohjeet/asetukset/tuotteet-ja-julkaisut/tilaustuotteet) ja [Tilauspaketit](/docs/ohjeet/asetukset/tuotteet-ja-julkaisut/tilauspaketit)
- **Asiointipalvelut** – [Tilauslomake](/docs/ohjeet/asetukset/asiointipalvelut/tilauslomake), [OmaPalvelu](/docs/ohjeet/asetukset/asiointipalvelut/omapalvelu) ja [Viestipohjat](/docs/ohjeet/asetukset/asiointipalvelut/viestipohjat)
- **Laskut** – [Laskutekstit](/docs/ohjeet/asetukset/laskut/laskutekstit)
- **Postitus** – [Postitus](/docs/ohjeet/asetukset/postitus)
