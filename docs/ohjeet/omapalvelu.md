---
sidebar_position: 6
---

# OmaPalvelu

## Kertakirjautuminen

OmaPalveluun kirjaudutaan tyypillisesti palvelun käyttäjäyrityksen määrittelemällä osoitteella esim. https://omataika.taikatilaus.fi.

![Suoritukset](/img/omapalvelu/1.png)

Asiakas voi yksinkertaisimmillaan kirjautua sisään **Kertakirjautuminen**–painikkeen kautta antamalla oman sähköpostiosoitteensa ja tilaamalla sisäänkirjautumislinkin **Tilaa linkki** -painikkeesta

![Suoritukset](/img/omapalvelu/2.png)

Mikäli asiakkaan sähköposti löytyy järjestelmästä ja se on yksilöllinen, sisäänkirjaus onnistuu.

## Kirjautuminen tunnuksella

Aiemmin käyttämällään tunnuksellaan (esim. Asiakasnumero) asiakas voi kirjautua syöttämällä sen tiedot **Käyttäjätunnus/Sähköposti** ja **Salasana**–kenttiin

- Asiakaskortilla oltava **pakolliset tiedot**: Etunimi, Sukunimi, Asiakasnumero ja Sähköpostiosoite

Taikatilaus-ylläpitäjä voi myös **luoda tunnuksen** asiakkaalle tämän asiakaskortilla.

Uudelle asiakkaalle lähetetään tunnuksen aktivoitumisesta viesti, kun tilauksesta lähetetty lasku on maksettu.

Mikäli yrityksen sivustolla on käytössä oma rekisteröinti-/kirjautumislomake, voidaan sen nettiosoite linkittää OmaPalveluun **Rekisteröidy OmaPalvelun käyttäjäksi** –linkin taakse

Palvelusta kirjaudutaan ulos avaamalla oikean reunan sivupalkki ja painamalla **Kirjaudu ulos** -painikkeesta.

![OmaPalvelu](/img/omapalvelu/3.png)

Hallintakäyttäjän ylläpito-ohjeet tunnuksen salasanaa varten löytyvät <a href="http://localhost:3000/docs/ohjeet/yleiset_ominaisuudet/asiakkaat#omapalvelu">täältä.</a>

## Salasanan vaihtaminen

Asiakas voi tarvittaessa tilata sähköpostiinsa linkin salasanan vaihtamiseen painamalla **Unohtuiko salasana** –painikkeesta
- lisätään oma sähköposti ja
- klikataan Lähetä linkki sähköpostiin

![OmaPalvelu](/img/omapalvelu/4.png)

Viestin linkkiä klikattaessa avautuu selaimeen lomake, jossa

- Käyttäjätunnus/Sähköposti on annettu valmiina (viestin pohjalta) eikä sitä voi muokata
- Annetaan Uusi salasana
- Annetaan Uusi salasana uudelleen

Salasanassa pitää olla vähintään 6 merkkiä ja siinä tulee olla ainakin yksi pieni ja iso kirjain, yksi numero ja yksi erikoismerkki.

Mikäli asiakas ei keksi uutta salasanaa itse, hän voi pyytää ohjelmaa luomaa automaattisesti generoidun salasanan **En keksi salasanaa, luo sellainen** –painikkeesta

- Lomakkeen alla näytetään Ehdotettu salasana, joka
- Kopioidaan Uusi salasana ja Uusi salasana uudelleen –kenttiin

Lisätyt salasanat tallennetaan palveluun, jonka jälkeen pääsee siirtymään kirjautumiseen.

## Sisältö

![OmaPalvelu](/img/omapalvelu/5.png)

Sisäänkirjauksen jälkeen käyttäjälle näytetään OmaPalvelun etusivu. Näytettävät välilehdet ja kentät, joiden muokkaus sallitaan, sovitaan **yrityskohtaisesti**. Yleisiä välilehtiä ovat mm.

- Omat tietosi -välilehdellä voi muuttaa tunnukseen liittyviä tietoja, kuten nimeä ja puhelinnumeroa
- Tilaa lehti –välilehdellä voi tilata lehtiä itselle tai lahjaksi
- Ilmoitukset–välilehdellä voivat ilmoitusasiakkaat hyväksyä ja kommentoida ostamaansa ilmoitusta ennen kuin se julkaistaan
- Digilehdet-välilehdellä voidaan esittää lehtitilaajille paperijulkaisujen digiversiot ja/tai ilmoitusasiakkaille ne julkaisut, joissa on heidän ostamansa ilmoitus
- Laskut–välilehdellä voi katsella omaa laskutushistoriaansa
- Tilaukset-välilehdellä voi katsella omaa tilaushistoriaansa ja peruuttaa tilauksia
- Ota yhteyttä tilajaapalveluun -välilehdellä voi lähettää viestin, joka käsitellään yrityksen omassa asiakaspalvelussa

Mikäli välilehdellä on jotain asiakkaan huomiota odottavaa tietoa (esim. uusi lasku), näkyy punainen pallo, jonka sisällä oleva numero ilmaisee uudet huomion kohteet.

Voit myös **mainostaa** esim. erillaisia tapahtumia etusivulla.

### Omat tiedot

![OmaPalvelu](/img/omapalvelu/6.png)

**Omat tiedot** -näkymässä käyttäjä voi päivittää omia tietojaan Muuta tunnustietoja –painikkeesta esim.
- Nimeä
- Puhelinnumeroa
- Syntymäpäivää

**Vaihda salasana** -painikkeesta tulee käyttäjän sähköpostiin linkki, josta hän voi vaihtaa salasanaa.

Jos on useampi käyttäjä, valitsemalla käyttäjätunnuksen pääse käyttäjä muokkaamaan sen käyttäjän tilauksia.

### Tilaa lehti

![OmaPalvelu](/img/omapalvelu/7.png)

**Tilaa lehti** -näkymässä käyttäjä voi tilata haluamansa julkaisun esim.

- joko itselleen tai lahjaksi toiselle
- toivomallaan maksutavalla, esim. joko Verkkomaksulla heti tai Laskulla eräpäivänä

Tilaustuotteen valinnan jälkeen avautuu Tilauslomake, jolle lisätään
- Tilaustyyppi
- Laskutusväli
- Toivottu tilauksen alkamispäivä

![OmaPalvelu](/img/omapalvelu/8.png)

- Lehden saaja (itselle/lahjaksi)
- Lehden saajan osoite- ja muut yhteystiedot

![OmaPalvelu](/img/omapalvelu/9.png)

- Maksutapa

![OmaPalvelu](/img/omapalvelu/10.png)

- Hyväksytään tilausehdot
- Annetaan luvat markkinointiin

![OmaPalvelu](/img/omapalvelu/11.png)

Tilauslomakkeen kautta tehtyjen tilauksien tiedot tallentuvat Taikatilaus-ohjelmaan automaattisesti.

### Digilehti

![OmaPalvelu](/img/omapalvelu/13.png)

**Digilehti**-näkymässä käyttäjä voi selata ja lukea digijulkaisuja tilaamistaan lehdistä, jos hänellä on **oikeus** digilehden lukemiseen.

**Lue**–painiketta klikkaamalla avautuu kyseisen julkaisun näköislehti uuteen ikkunaan selaimessa.

Julkaisua voi mm. selata, suurentaa ja hakea hakusanoilla
- Yläreunan painikkeilla
- Vasemman/oikean reunan nuolipainikkeilla < >

![OmaPalvelu](/img/omapalvelu/12.png)

### Ilmoitukset

/// en saa kuvaa tähän

**Ilmoitukset**-välilehdellä käyttäjälle näytetään tietoja ostamistaan ilmoituksista.

Uusin ilmoitusvaraus, joka vaatii Hyväksyntää tai Kommenttia näytetään oletuksena avattuna
- Kommentin tilaruutua voi laajentaa alakulman ruutua kursorilla raahaamalla

Käytettävissä olevat lisätoiminnot sovitaan yrityskohtaisesti
- Mediakortti, jossa lisätietoja ostettaviin ilmoituksiin liittyen
- Aineistopankki, jossa listataan aiemmat ilmoitusvaraukset
- Maksamattomat ilmoitusvaraukset voi maksaa valitsemalla v ja klikkaamalla Maksa valitut –painiketta (esim. Verkkomaksulla heti)
- Uusi ilmoitus, jolla voi tehdä uuden, alustava ilmoitusvarauksen, jonka Myyjä voi jatkokäsitellä

### Laskusi

**Laskusi**-näkymässä käyttäjälle näytetään avoimet laskut ja laskutushistoria. Laskun numeroja painamalla käyttäjä näkee laskun tiedot PDF-muodossa.

Käyttäjä voi myös vaihtaa laskun toimitustapaa.

![OmaPalvelu](/img/omapalvelu/14.png)

### Tilauksesi

**Tilauksesi**-välilehdellä käyttäjälle näytetään käyttäjän avoimet ja päättyneet tilaukset. Käyttäjä voi myös peruuttaa tilauksia.

![OmaPalvelu](/img/omapalvelu/15.png)

### Ota yhteyttä tilaajapalveluun

**Ota yhteyttä tilaajapalveluun** -välilehdellä käyttäjä näkee yrityksen asiakaspalvelun yhteystiedot ja voi lähettää viestin

- Viesti ohjataan jatkokäsittelyä varten yrityksen oman asiakaspalvelun sähköpostiin

Viestin tilaruutua voi laajentaa alakulman ruutua kursorilla raahaamalla.

Viestilähetyksen vahvistus listataan lomakkeen alaosaan.

![OmaPalvelu](/img/omapalvelu/16.png)

### Vakituinen osoitteenmuutos

![OmaPalvelu](/img/omapalvelu/19.png)

![OmaPalvelu](/img/omapalvelu/20.png)

### Väliaikainen osoitteenmuutos

![OmaPalvelu](/img/omapalvelu/17.png)

![OmaPalvelu](/img/omapalvelu/18.png)

### Paperilehden jakelunkeskeytys

![OmaPalvelu](/img/omapalvelu/21.png)

![OmaPalvelu](/img/omapalvelu/22.png)

### Ilmoita paperilehden jakeluvirheestä

![OmaPalvelu](/img/omapalvelu/23.png)

### Muuta nykyistä tilaustasi

![OmaPalvelu](/img/omapalvelu/24.png)

### Tilaa digilukuoikeus

![OmaPalvelu](/img/omapalvelu/25.png)

### Perhetunnukset

![OmaPalvelu](/img/omapalvelu/25.png)

### Siirry lukemaan

![OmaPalvelu](/img/omapalvelu/27.png)

### Juttuvinkki

![OmaPalvelu](/img/omapalvelu/28.png)

### Arvonta

![OmaPalvelu](/img/omapalvelu/29.png)

### Uutiset

![OmaPalvelu](/img/omapalvelu/30.png)

### Sääennuste

![OmaPalvelu](/img/omapalvelu/31.png)

### Päivän sarjakuvat

![OmaPalvelu](/img/omapalvelu/32.png)

### Kyselyt

![OmaPalvelu](/img/omapalvelu/33.png)

### Viihde

![OmaPalvelu](/img/omapalvelu/34.png)

### Sosiaalinen media

![OmaPalvelu](/img/omapalvelu/35.png)

### Kaavio

![OmaPalvelu](/img/omapalvelu/36.png)

### Tilaushinnat

// ei kuvaa