---
sidebar_position: 10
description: Lemonsoft — Käyttötarkoitus, Siirrettävät tiedot, Toimintaperiaate, Laskujen lähetys Lemonsoftista, Lemonsoftin asetukset, Käyttöönotto.
keywords: [lemonsoft, lemononline, lemonrest, lemonhub, myyntilasku, laskujen siirto, myyntireskontra, asiakasrekisteri, verkkolasku, kuluttajan e-lasku, e-lasku, sähköpostilasku, kirjelasku, tulostuspalvelu, virtuaaliviivakoodi, laskupohja, ilmoituslasku, yhteisilmoitus]
---

# Lemonsoft

Yksisuuntainen integraatio, joka siirtää TaikaTilauksessa muodostetut tilaus- ja ilmoituslaskut [Lemonsoft](https://www.lemonsoft.fi/)-toiminnanohjausjärjestelmään. Laskut lähetetään asiakkaille Lemonsoftista, ja niiden myyntireskontra hoidetaan Lemonsoftissa.

## Käyttötarkoitus

Integraatio sopii julkaisijalle, jonka taloushallinto on Lemonsoftissa:

- Tilaukset, ilmoitusvaraukset ja laskujen muodostus hoidetaan TaikaTilauksessa kuten ennenkin
- Laskut siirtyvät Lemonsoftiin valmiina, eikä niitä tarvitse syöttää käsin
- Maksajan tiedot (nimi, osoite, Y-tunnus, sähköposti, laskutustapa ja verkkolaskuosoite) päivittyvät Lemonsoftiin TaikaTilauksesta
- Laskujen lähetys, maksujen seuranta ja kirjanpito tehdään Lemonsoftissa

## Siirrettävät tiedot

### Asiakas

Laskutusasiakas on aina laskun maksaja. Maksaja perustetaan Lemonsoftin asiakasrekisteriin, tai sen tiedot päivitetään, jos asiakas on jo olemassa.

| Tieto | Kuvaus |
|-------|--------|
| Asiakasnumero | TaikaTilauksen asiakasnumero |
| Nimi ja lisänimi | Yritys ja henkilön nimi, tai pelkkä henkilön nimi |
| Osoite | Lähiosoite, postinumero, postitoimipaikka ja maa |
| Y-tunnus | Yritysasiakkaalla |
| Sähköposti | Asiakkaan yhteyshenkilöksi; sähköpostilaskulla myös laskun vastaanottajaksi |
| Laskutustapa | TaikaTilauksen laskun toimitustavan mukaan |
| Verkkolaskuosoite ja välittäjä | Verkkolaskulla; kuluttajan e-laskulla IBAN ja pankin BIC-tunnus |

Lahjatilauksessa lehden saaja näkyy laskulla toimitusasiakkaana (nimi ja osoite). Saajaa ei perusteta Lemonsoftin asiakasrekisteriin.

### Lasku

| Tieto | Kuvaus |
|-------|--------|
| Laskunumero ja viite | TaikaTilauksen laskunumero ja viitenumero |
| Päiväys ja eräpäivä | TaikaTilauksen laskulta |
| Kuvaus | "Lehtitilausmaksu - *lehti*" tai "Ilmoitusmyynti - *lehti*". Näkyy laskulla ja sähköpostilaskun viestissä |
| Tilauslaskun rivit | Koodina tilausnumero, nimenä lehti ja tilaustuotteen nimi, lisätietoina tilausjakso, lehden saaja ja laskuosa |
| Ilmoituslaskun rivit | Koodina ilmoituksen koko, nimenä lehti, lisätietoina julkaisupäivä, määräin ja yhteisilmoituksen maksajan osuus |
| Viitteenne | Ilmoituslaskulla määräin, jos se on sama kaikilla riveillä |
| Viesti | TaikaTilauksen "Lisätiedot laskulle" |
| Tilit, ALV ja kustannuspaikat | Käyttöönotossa sovitun kohdistuksen mukaan |

## Toimintaperiaate

1. **Laskut muodostetaan TaikaTilauksessa** — laskutusajo ja ilmoitusten laskutus tehdään normaalisti. Lemonsoftiin siirrettävät laskut eivät lähde TaikaTilauksesta.
2. **Tarkistus ennen siirtoa** — jokaisen rivin tili, ALV-kanta, kustannuspaikka ja laskun laskutustapa tarkistetaan käyttöönotossa sovittua kohdistusta vastaan. Puute pysäyttää siirron ennen kuin Lemonsoftiin kirjoitetaan mitään.
3. **Asiakas** — Lemonsoftista haetaan asiakas TaikaTilauksen asiakasnumerolla. Puuttuva asiakas luodaan, ja olemassa olevan asiakkaan muuttuneet tiedot päivitetään TaikaTilauksesta. Jos numerolla löytyy toinen asiakas, siirto pysähtyy.
4. **Lasku** — lasku luodaan Lemonsoftiin lähettämättömänä. Tallennettu lasku luetaan takaisin, ja sen asiakas, rivit ja summat verrataan TaikaTilauksen laskuun.
5. **Siirtoloki** — jokaisesta laskusta pidetään siirtolokia. Samaa laskua ei siirretä kahdesti, eikä keskeytynyttä kirjoitusta toisteta automaattisesti ennen kuin tulos on tarkistettu Lemonsoftista.

Verkkomaksulla (esim. Paytrail) jo maksettuja laskuja ei siirretä Lemonsoftiin.

:::info Huomio
Lasku siirtyy Lemonsoftiin lähettämättömänä. Asiakkaalle se lähetetään Lemonsoftista.
:::

## Laskujen lähetys Lemonsoftista

TaikaTilauksen laskun toimitustapa määrää Lemonsoftin laskutustavan:

| TaikaTilaus | Lemonsoft | Lähetys |
|-------------|-----------|---------|
| SÄHKÖPOSTI | Sähköposti | PDF-lasku liitteenä, viestinä Lemonsoftin viestipohja |
| VERKKOLASKU | Lemonsoft verkkolasku | LemonHubin kautta yrityksen verkkolaskuoperaattorille tai kuluttajan pankkiin (e-lasku) |
| KIRJE | Lemonsoft tulostuspalvelu | LemonHubin kautta tulostuspalveluun, joka tulostaa ja postittaa laskun |

Laskutustapojen numerot ovat Lemonsoftissa yhtiökohtaisia, ja ne sovitaan käyttöönotossa.

### Lähetys

Laskut lähetetään Lemonsoftin **Laskujen lähetys** -näkymästä laskutustavoittain. Valitse lähetettävät laskut ja paina **Lähetä**. Onnistuneesti lähetetyt laskut poistuvat listalta.

### Verkkolaskun tila

Verkkolaskun vaiheet näkyvät laskulla kohdassa **Näytä › Lemonsoft verkkolasku -tapahtumat**:

| Tapahtuma | Merkitys |
|-----------|----------|
| Registered | LemonHub on vastaanottanut laskun |
| Delivered | Lasku on välitetty vastaanottajan operaattorille |
| Rejected | Vastaanottava operaattori hylkäsi laskun. Selitteessä on syy |

Tapahtumat päivittyvät viiveellä, usein puolen tunnin kuluessa lähetyksestä.

:::tip Vinkki
Jos verkkolasku hylätään syyllä "No ... routes found for the given document", vastaanottajan verkkolaskuosoite ja välittäjä eivät vastaa toisiaan. Tarkista välittäjätunnus TaikaTilauksen asiakaskortilta tai verkkolaskuosoitteistosta ja korjaa se. Seuraava siirto päivittää tiedon Lemonsoftiin, tai sen voi korjata Lemonsoftin asiakkaan **Laskutus**-välilehdelle.
:::

### Uudelleenlähetys

Jo lähetetyn laskun voi lähettää uudelleen, esimerkiksi toisella laskutustavalla:

1. Avaa lasku ja valitse **… › Peru laskutus**. Lasku palaa lähetettäväksi.
2. Vaihda tarvittaessa laskun **Laskutustapa** ja tallenna.
3. Lähetä lasku **Laskujen lähetys** -näkymästä.

## Lemonsoftin asetukset

Laskun ulkoasu ja lähetys määritellään Lemonsoftissa (LemonOnline, **Asetukset**):

- **OVT-tunnus** — julkaisijan oma verkkolaskuosoite laskuttajana
- **Virtuaaliviivakoodi** — Toimintokeskuksen asetus `BANKREFERENCE` = 4 (IBAN ja suomalainen viitenumero)
- **Laskupohja** — **Oletusraportit › Lasku**, esim. Lemonsoftin vakiopohja Lasku A4. Tulostuspalvelun laskutustavalle valitaan **Laskutustavat**-asetuksessa oma pohja.
- **Yrityksen tiedot** — **Yritystiedot › Toimipaikat**: osoite, puhelin, sähköposti, viivästyskorko ja huomautusaika. Viivästyskoron desimaalierottimena käytetään pistettä (esim. 9.5).
- **Logo** — laskupohjan logo, enintään 870 × 200 pikseliä (PNG tai JPG)
- **Sähköpostin viestipohja** — **Muut viestit › Sähköpostiviestit › Laskujen lähetys**. Viestissä voi käyttää laskun tietoja, esim. `{Invoice_number}`, `{Invoice_totalsum}`, `{Invoice_duedate}`, `{Company_print_iban}`, `{Invoice_reference}` ja virtuaaliviivakoodi `{Invoice_RfBankCode}`.
- **Sähköpostin lähettäjä** — oletuksena laskut lähtevät Lemonsoftin omasta lähetyspalvelusta. Jos laskujen halutaan lähtevän julkaisijan omasta osoitteesta (esim. jaetusta postilaatikosta), Lemonsoft kytketään julkaisijan Microsoft 365:een: **Integraatiot › Graph-luvat** (Outlook ja Jaettu postilaatikko) ja lähettävälle käyttäjälle Send As -oikeus postilaatikkoon. Kytkentä vaatii julkaisijan Microsoft 365 -ylläpitäjän hyväksynnän.

## Käyttöönotto

1. **Lemonsoft-tunnukset** — julkaisija tilaa Lemonsoftilta rajapintatunnukset (LemonRest) jokaiselle yhtiölle ja antaa TaikaTilauksen tukitunnukselle oikeudet asetuksiin ja laskujen lähetykseen.
2. **Kohdistus** — sovitaan, mitkä lehdet laskutetaan mistäkin yhtiöstä, myyntitilit tuoteryhmän ja ALV-kannan mukaan, kustannuspaikat, laskutustavat ja asiakasnumerointi.
3. **Lemonsoftin asetukset** — OVT-tunnus, virtuaaliviivakoodi, laskupohja, yrityksen tiedot, logo ja sähköpostin viestipohja (ks. yllä).
4. **Testaus** — jokainen laskutuskanava testataan testilaskuilla testiasiakkaille perille asti: sähköpostilasku, yrityksen verkkolasku, kuluttajan e-lasku, kirjelasku ja ilmoituslasku, myös yhteisilmoitus usealla maksajalla.
5. **Tuotantokäyttö** — siirto kytketään päälle, kun testit ovat kunnossa.

## Hinta

TaikaTilauksen osalta integraatiosta veloitetaan käyttöönottomaksu sekä [hinnaston](https://www.taikatilaus.fi/hinnasto) mukainen kiinteä kuukausimaksu.

Lisätietoja:
Jari Mäkelä
p. 050 557 6130
jari.makela@taikatilaus.fi
