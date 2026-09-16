---
sidebar_position: 3
description: Poliittisen mainoksen avoimuusilmoitus (TTPA) — käyttöönotto, pyyntö asiakkaalle, vahvistus, julkaisu, QR-koodi, useat maksajat, versiot ja 7 vuoden julkinen säilytys.
keywords: [avoimuusilmoitus, poliittinen mainos, TTPA, QR-koodi, 2024/900, 2025/1410, vaalit]
---

# Poliittinen mainos ja avoimuusilmoitus

EU:n asetus **(EU) 2024/900** (poliittisen mainonnan avoimuus ja kohdentaminen, TTPA) edellyttää 10.10.2025 alkaen, että jokaisen poliittisen mainoksen yhteydessä julkaistaan **avoimuusilmoitus**. Ilmoituksesta käyvät ilmi mainoksen rahoittaja, maksajat, rahoituksen alkuperä, mainoksen hinta ja yhteys vaaleihin. Komission täytäntöönpanoasetus **(EU) 2025/1410** määrää ilmoituksen mallin sekä merkinnän, joka painetaan mainokseen. Ilmoituksen on oltava **yleisön nähtävillä seitsemän vuotta** viimeisestä julkaisusta – sama aika kuin tietojen säilytysvelvollisuus.

TaikaTilaus tuottaa avoimuusilmoituksen ilmoitusvarauksen tiedoista, pyytää mainostajaa täydentämään ja vahvistamaan tiedot, julkaisee ilmoituksen omassa julkisessa osoitteessaan ja muodostaa mainokseen painettavan **QR-koodin**. Ilmoituksia ei voi poistaa, joten säilytysvelvoite täyttyy automaattisesti.

:::tip Käyttöönotto kolmessa vaiheessa
1. **Asetukset → Ylläpito → Poliittinen mainonta (TTPA)**: anna ilmoitusmekanismin sähköposti (pakollinen) ja tulevien vaalien lista. Halutessasi lehden väri ja logo.
2. Merkitse ilmoitusvaraus **Poliittinen mainos** -valinnalla ja lähetä mainostajalle pyyntö.
3. Kun mainostaja on vahvistanut, lisää taittoon ilmoituksen mukana tuleva merkintä ja QR-koodi.
:::

## Asetukset

Asetukset tehdään **Asetukset → Ylläpito → Poliittinen mainonta (TTPA)**.

| Asetus | Merkitys |
|---|---|
| Julkaisijan nimi | Näytetään avoimuusilmoituksella. Tyhjä: yrityksen nimi. |
| Ilmoitusmekanismin sähköposti | **Pakollinen.** Osoite, johon lukija voi ilmoittaa vaatimustenvastaisesta mainoksesta (15 artikla). Osoite saa myös kopion julkaistuista ilmoituksista. Ilman tätä ilmoituksia ei voi julkaista. |
| Ilmoitusmekanismin teksti | Ohjeteksti ilmoituksen tekijälle. Tyhjä: vakioteksti. |
| Laskentamenetelmän teksti | Miten ilmoituksen rahamäärä on laskettu (kohta 8). Tyhjä: vakioteksti (varausvahvistuksen tai laskun mukainen veroton ja verollinen hinta). |
| Vaalilista | Rivi per vaali muodossa `avain\|nimi\|taso\|pvm`, esim. `EDUSKUNTA2027\|Eduskuntavaalit\|kansallinen\|2027-04-18`. Mainostaja valitsee näistä lomakkeella; lisäksi hän voi kirjoittaa muun vaalin tai lainsäädäntöprosessin. |
| Virallisten vaalitietojen osoite | Linkki virallisiin tietoihin vaaleihin osallistumisesta. Tyhjä: https://vaalit.fi |
| Avoimuusilmoitusten osoitteen juuri | Julkinen osoite, jonka alle ilmoitussivut muodostuvat (esim. `https://lehti.fi`). Tyhjä: OmaPalvelun domain. **Tarkista tämä ennen ensimmäistä julkaisua** – QR-koodi painetaan lehteen. |
| Muistutus | Päiviä ennen ilmestymistä, jolloin vahvistamattomasta ilmoituksesta muistutetaan. |
| Vaatii hallinnan hyväksynnän | Oletuksena mainostajan vahvistama ilmoitus julkaistaan heti. Valittuna hallinta tarkistaa ja julkaisee (**Hyväksy ja julkaise**). |
| Julkinen luettelo | Sivu `Avoimuusilmoitukset.aspx` listaa kaikki julkaistut ilmoitukset. Linkitä se lehden verkkosivuilta. |
| Brändiväri | `#rrggbb`. Käytetään ylätunnisteen taustana, painikkeissa, korostusreunoissa ja sähköposteissa. Painikkeen tekstiväri valitaan automaattisesti kontrastin mukaan. Tyhjä: tumma harmaa. |
| Logo | Tiedostonimi `/AsiakasData/[GUID]/Pohjat/`-kansiosta, sivuston polku tai https-osoite. Tyhjä: yleinen *Asiakasyrityksen logo* -asetus (sama kuin hallinnan yläpalkissa; valkoinen logo näkyy brändivärin päällä). |
| Lisä-CSS | Vapaa CSS avoimuusilmoitussivuille, esim. `.ai-brand{background:#fff}` jos logo on tumma. Luokat `.ai-brand`, `.ai-otsake`, `.ai-kohta`, `.ai-lomake`, `.ai-julkaisija`, `.ai-merkintalaatikko`; muuttujat `--ai-vari`, `--ai-vari-teksti`, `--ai-linkki`. |

## Kulku

1. **Myyjä merkitsee varauksen poliittiseksi.** Ilmoitusvarauksen [aineistotiedoissa](./ilmoitusasiakas#aineistotiedot) valitaan **Poliittinen mainos** ja tallennetaan. Paneeliin ilmestyy **Avoimuusilmoitus**-alue. Alue on samanlainen kaikissa varausnäkymissä (Myynnit, pelkistetty varauslomake ja IlmoitusStudio).
2. **Pyyntö mainostajalle.** Kirjoita vastaanottajan sähköposti (esitäytetty aineiston toimittajasta tai yhteyshenkilöstä) ja klikkaa **Lähetä avoimuusilmoituspyyntö asiakkaalle**. Mainostaja saa sähköpostin, jossa on henkilökohtainen täyttölinkki. Vaihtoehtoisesti **Täytä itse**, jos tiedot on saatu esimerkiksi puhelimessa – silloin vahvistajaksi kirjataan käyttäjä ja "asiakkaan puolesta".
3. **Mainostaja täydentää ja vahvistaa.** Lomake on esitäytetty varauksen tiedoilla. Julkaisijan vastuulla olevat tiedot (julkaisu, ilmestymispäivä, hinta veroton ja verollinen, laskentamenetelmä) ovat vain luettavissa. Mainostaja täydentää:
   - rahoittajan tyypin (puolue, ehdokas, tukiyhdistys, muu poliittinen toimija, yritys, muu) ja sen, onko rahoittaja oikeushenkilö vai luonnollinen henkilö;
   - mahdollisen tahon, jonka määräysvallassa rahoittaja viime kädessä on;
   - **maksajat**, jos mainoksen maksaa muu kuin rahoittaja tai maksajia on useita (esim. ehdokas, tukiyhdistys ja puolue yhdessä). Jokainen lisätään omalle rivilleen **+ Lisää maksaja** -painikkeella samoilla tiedoilla kuin rahoittaja; valinnainen **Osuus (€)** kertoo, miten maksu jakautuu. Osuuksien summa ei saa ylittää mainoksen verollista hintaa;
   - vaalit tai lainsäädäntöprosessin, rahoituksen tyypin (julkinen/yksityinen) ja lähteen (EU / EU:n ulkopuolelta);
   - omat yhteystietonsa (ei julkaista) ja vakuutuksen, että tiedot ovat oikein.

   Lomakkeen voi tallentaa keskeneräisenä ja palata siihen samasta linkistä. **Vahvistuksen jälkeen mainostaja ei voi enää muokata tietoja.**
4. **Julkaisu.** Ilmoitus julkaistaan heti vahvistuksesta (tai hallinnan hyväksynnän jälkeen). Mainostaja ja ilmoitusmekanismin osoite saavat sähköpostin, jossa on julkinen linkki, QR-koodi ja mainokseen painettava merkintä. Sama tieto näkyy mainostajalle heti vahvistussivulla.
5. **Merkintä mainokseen.** Taittoon lisätään selvästi taustasta erottuva laatikko:

```
POLIITTINEN MAINOS
Rahoittaja: Puolueyhdistys ry
Mainos liittyy: Eduskuntavaalit 18.4.2027 (kansallinen)
Avoimuusilmoitus: https://lehti.fi/Avoimuusilmoitus.aspx?g=…   [QR-koodi]
```

QR-koodin saa painokelpoisena PNG-tiedostona sekä mainostajan vahvistussivulta että hallinnasta (**QR-koodi (PNG)**). QR-koodi johtaa suoraan kyseiseen avoimuusilmoitukseen, kuten täytäntöönpanoasetus edellyttää – yleinen luettelosivun osoite ei riitä merkinnäksi.

## Hallinnan toiminnot

Avoimuusilmoitus-alue varauksella näyttää tilan ja toiminnot:

- **Lähetä muistutus** – pyyntö lähetetty, mutta mainostaja ei ole vahvistanut.
- **Täytä itse / katso** – avaa lomakkeen hallintanäkymässä.
- **Hyväksy ja julkaise** – kun hyväksyntä on asetuksella vaadittu ja mainostaja on vahvistanut.
- **Avaa julkinen sivu**, **QR-koodi (PNG)** – julkaistu ilmoitus.
- **Korjaa (uusi versio)** – hallinta korjaa lukittua ilmoitusta. Korjaus julkaistaan aina uutena versiona ja syy kirjataan; aiemmat versiot jäävät nähtäville julkiselle sivulle.
- **Pyydä uusi vahvistus** – avaa ilmoituksen uudelleen mainostajan täydennettäväksi ja lähettää uuden täyttölinkin; vanha linkki lakkaa toimimasta. Julkaistu versio pysyy näkyvissä, kunnes uusi versio julkaistaan.
- **Merkitse mainos perutuksi** – ilmoitus jää nähtäville merkinnällä "Mainoksen julkaisu on peruttu".

Julkaisu täyttää varauksen **Avoimuusilmoitus URL** -kentän eikä sitä sen jälkeen muokata käsin. Pyynnöt, vahvistukset ja julkaisut kirjataan varauksen tilamuutoslokiin.

Mainostajan **aineistosivulla** näytetään poliittiselle mainokselle banneri: täyttölinkki, kun ilmoitusta ei ole vahvistettu, ja julkisen ilmoituksen linkki sekä QR-koodi, kun se on julkaistu.

### Poliittisten mainosten hakeminen

Poliittisiksi merkityt varaukset löytää hakuehdolla, joka rajaa tulokset **Poliittinen mainos** -valinnalla merkittyihin varauksiin:

- **Ilmoitukset**-haussa valinta **Vain poliittiset ilmoitukset** (ks. [Ilmoitusvaraukset](/docs/ohjeet/ilmoitustenhallinta/ilmoistusvaraukset#hakulistauksen-asetukset)).
- **IlmoitusStudiossa** valinta **Vain poliittiset** (ks. [IlmoitusStudio](ilmoitusstudio#hakuehdot)).

Hakuehto tallentuu muiden hakuehtojen tapaan käyttäjäkohtaisesti. Sillä on kätevä käydä ennen lehden painoon lähettämistä läpi, että jokaisella poliittisella mainoksella on julkaistu avoimuusilmoitus – tila näkyy varauksen Avoimuusilmoitus-alueella. Laskutetut poliittiset mainokset saa myös [raportilta](#poliittiset-mainokset--raportti).

## Julkinen sivu ja säilytys

- `Avoimuusilmoitus.aspx?g=…` näyttää ilmoituksen täytäntöönpanoasetuksen liitteen II kohdan 3 mukaisessa järjestyksessä (kohdat 1–13; kohdentamista koskevat kohdat 14–16 eivät koske painettua mediaa). Lisäämällä `&muoto=json` saa saman sisällön koneellisesti luettavana.
- Kohta 3 erittelee kaikki maksajat järjestyksessä osuuksineen; jos maksajia ei ole annettu, sivulla lukee "Rahoittaja maksaa mainoksen itse".
- Sivu näyttää julkaisuhetken tiedot (snapshot). Varauksen myöhempi muutos ei muuta jo julkaistua ilmoitusta; korjaus tehdään aina uutena versiona, ja aiemmat versiot ovat luettavissa sivun Versiot-listasta.
- Luonnollisen henkilön (esim. ehdokkaan) postiosoite ja sähköposti julkaistaan vain, jos ne on merkitty julkisiksi lomakkeella. Oikeushenkilön sijoittautumispaikan osoite julkaistaan aina. Ilmoituksen jättäjän yhteystietoja ei julkaista koskaan.
- Ilmoitukset versioineen ovat yleisön nähtävillä ja säilytetään **seitsemän vuotta** viimeisestä julkaisusta (12 artiklan 4 kohta). Niitä ei voi poistaa sovelluksesta.
- `Avoimuusilmoitukset.aspx` on julkinen luettelo, josta ilmoitukset löytyvät rahoittajan tai mainoksen nimellä. Luettelon osoite kannattaa linkittää lehden verkkosivuille poliittisen mainonnan ohjeiden yhteyteen.

## Poliittiset mainokset -raportti

**Raportit → Ilmoitusmyynnin raportit → Poliittiset mainokset** listaa aikavälillä **laskutetut** poliittisiksi merkityt ilmoitusvaraukset tietoineen: yksilöivä tunnus, kampanja ja avoimuusilmoituksen URL. Julkaisu täyttää URL-sarakkeen automaattisesti, joten raportilta näkee suoraan, mille laskutetuille mainoksille ilmoitus on olemassa. Raportti sopii esimerkiksi viranomaisen tietopyyntöön tai vaalien jälkeiseen tarkistukseen. Huomaa, että raportilla ei näy varauksia ennen laskutusta – avoimuusilmoituksen tila ennen julkaisua tarkistetaan varaukselta. Katso [Ilmoitusmyynnin raportit](../yleiset_ominaisuudet/raportit/ilmoitusmyynnin_raportit#poliittiset-mainokset).

## Usein kysyttyä

**Mainostaja ei vastaa pyyntöön.** Lähetä muistutus varaukselta tai täytä ilmoitus itse mainostajan antamien tietojen perusteella (**Täytä itse**). Asetuksen mukaan mainosta ei saa julkaista ennen kuin avoimuusilmoitus on saatavilla.

**Mainostajalla on jo oma avoimuusilmoitus muualla (esim. puolueen sivuilla).** Kirjoita sen osoite varauksen **Avoimuusilmoitus URL** -kenttään ennen kuin luot TaikaTilauksen ilmoituksen. Jos TaikaTilauksen ilmoitus julkaistaan, se korvaa kentän arvon.

**Koskeeko EU:n eurooppalainen rekisteri meitä?** Eurooppalainen rekisteri koskee vain verkkomainontaa, eikä se ole vielä käytössä. Painetun lehden ilmoituksiin sitä ei tarvita; TaikaTilaus tukee rekisteriä, kun se avataan.

**Voiko saman kampanjan useita ilmoituksia niputtaa?** Jokainen ilmoitusvaraus saa oman avoimuusilmoituksen ja QR-koodin. Ilmoituksella näytetään kuitenkin myös saman myynnin poliittisten varausten yhteissumma (kohta 6), ja mainostaja voi antaa koko kampanjan summan muiden medioiden osalta.

**Mitä tapahtuu, jos hintaa muutetaan julkaisun jälkeen?** Julkaistu ilmoitus ei muutu itsestään. Avaa varaukselta **Korjaa (uusi versio)**, tarkista tiedot ja julkaise uusi versio syyn kanssa.
