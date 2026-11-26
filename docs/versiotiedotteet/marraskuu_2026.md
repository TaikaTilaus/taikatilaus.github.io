---
sidebar_position: 1
description: Uudistuksia TaikaTilaus-tuotteeseen 1.10.-30.11.2026 välisenä aikana
image: /img/social.png
keywords: [versiotiedote, OmaIlmoitus, Planner, yhteislehti, IlmoitusStudio, alennukset, kestojatko, hinnanmuutos, laskujen haku, Orbyt, Stripe, StripeGateway, maksumuuri, jakelupalaute, haut, viestit, Excel-tuonti]
---

# Loka–marraskuu 2026

Uudistuksia TaikaTilaus-tuotteeseen 1.10.–30.11.2026 välisenä aikana.

> Kysy tarkemmin yksittäisten toiminnallisuuksien käyttöönotosta [tuestamme](https://taikatilaus.freshdesk.com/).

## Uusi hinta

- Tilaustuotteissa näkyvät uuden hinnaston **aktivoitumispäivä** ja uusi hinta. Uuden hinnan voi antaa nyt myös verollisena.
- **Kestojatko** käyttää uutta hintaa, kun uusi tilausjakso alkaa hinnaston aktivointipäivänä tai sen jälkeen. Esikatselu korostaa uuden hinnaston rivit. Katso [kestojatko-ohje](/docs/ohjeet/tilaustenhallinta/kestojatko).

## IlmoitusStudio ja ilmoitusmyynti

- IlmoitusStudion etusivu avautuu huomattavasti nopeammin. Lista näyttää ensin 500 uusinta varausta.
- Kun tallennetun varauksen julkaisu vaihdetaan, hinta säilyy, aineisto siirtyy uuden julkaisun kansioon ja muutos välittyy Planneriin.
- **Asiakasalennuksen** voi valita, vaihtaa tai poistaa ilmoitusvarauksella, kun ilmoitusten alennukset ovat käytössä.
- Euromääräinen alennus näkyy laskulla omana rivinään.
- Ilmoitusvarauksen **Laskun maksaja** -kortilla näkyy osoite, johon sähköpostilasku lähtee.
- Uusi raportti **Ilmoitusmyynti julkaisuittain** näyttää verottoman ja verollisen myynnin kanavittain ja julkaisuittain valitulta aikaväliltä.

## Yksi ilmoitusvaraus useaan lehteen

Samana päivänä ilmestyvien lehtien **yhteislehti-ilmoitus** voidaan hoitaa yhdellä ilmoitusvarauksella. Varaus näkyy IlmoitusStudiossa kaikkien siihen kuuluvien lehtien haussa ja siirtyy Planneriin jokaisen lehden aineistoon samalla PDF-tiedostolla. Yhteislehdet määritellään asetuksissa kanavien yhteydessä.

## Tilauslomake
- Alennussäännöt ovat käytettävissä myös tilauksissa ja tilauslomakkeelle voi antaa alennuskoodin.
- Tilausvahvistuksessa näkyvät alkuperäinen hinta, alennus ja hinta alennuksen jälkeen.
- **Karenssi** estää uusille asiakkaille tarkoitetun tarjouksen tilaamisen myös kirjautumatta (tunnistus sähköpostiosoitteella) ja kuponkituotteella.

## Asiakkaat, haut ja viestit

- **Haut**-sivulla on uusi **Markkinointikielto**-ehto ja valinta **Poista tuplakontaktit**.
- Virheeseen jääneen sähköpostin voi lähettää uudelleen viestilistasta. Esikatselusta voi lähettää kopion, jonka vastaanottajaa ja otsikkoa voi muuttaa.
- Kontaktin tallennus varoittaa tuntemattomasta pakotetusta nippunumerosta.
- Asiakaskortin sähköpostiosoitteen päällekkäisyystarkistus ei enää huomioi kokonaan poistettuja kontakteja.

## Laskutus ja maksut

**Laskut**

- Laskujen haku on nopeampi.
- **Laskujen luonti** -sivulle on lisätty **Toimitustapa**-hakuehto, joten yhden lähetyskanavan laskut voi muodostaa kerralla.
- Laskua, jolta puuttuu maksajan nimi, ei voi luoda eikä lähettää.
- Maksajan haku ja uusi maksaja päivittävät laskulle myös Y-tunnuksen.

**Orbyt**

- Lähetyshistoriassa näkyy, milloin Orbyt vastaanotti aineiston ja Orbytin poikkeamalistalle siirretty lasku näkyy pysäytettynä.

Katso [Orbyt-ohje](/docs/ohjeet/integraatiot/orbyt).

**Stripe**

- Stripe-toiminnot kulkevat StripeGatewayn kautta, ja tuotteen Stripe-tuoteavain ja kuponki asetetaan siellä.

Katso [Stripe-ohje](/docs/ohjeet/integraatiot/stripe#stripegateway).

## Maksumuuri ja kirjautuminen

- Maksumuurin asetukset löytyvät nyt **Tilausten hallinta** -asetusten Digilehti-osiosta.
- Maksumuurin paluutiedoissa on uusi pysyvä **KayttajatunnusID** analytiikkaa varten, ja kirjautuminen sekä tilauslomake välittävät myös **p5**-parametrin.
- Tietoturvaa on vahvistettu hakukenttien ja rajapintojen käsittelyssä.

## Uusi TaikaTilaus

Linkki uuteen käyttöliittymään on avattu käyttöön asiakas kerrallaan. Kun se on käytössä, linkki löytyy **Omat tiedot** -valikosta. Katso [uuden version ohjeet](/docs/uusi_versio/yleista).

## Korjauksia

- Saman asiakasnumeron tuplakontaktien yhdistäminen toimii.
- Huomautusmaksun automaattikuittaus ei enää hyvitä osamaksettua laskua toiseen kertaan.
- Hyvityslaskun saldotiliöinti säilyttää asiakkaan, joten käytetty saldo palautuu asiakaskortille.
- Suoritusten käsintuonnissa tyhjä viite ei enää kohdistu laskulle.
- Julkaisun poisto onnistuu, vaikka julkaisulla on tyhjiä varauspaikkoja.

**Stripe**

- Stripe-maksusta syntyy nyt suoritus, joten maksu näkyy suorituspäiväkirjalla.
- Samasta maksusta ei voi enää syntyä kahta laskua.
- Tilauksen peruutus kohdistuu oikealle tilausjaksolle.