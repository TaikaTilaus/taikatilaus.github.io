---
sidebar_position: 2
title: Keräilylista
description: Keräilylista — Asiakkaiden tuominen asiakasnumeroilla, Keräilylistan tiedot, Keräilylistan hakeminen ja suodattaminen.
---

# Keräilylista

Keräilylistalle voit koota asiakkaita eri puolilta järjestelmää jatkokäsittelyä varten. Asiakkaita lisätään listalle muilta sivuilta rivin keräilylistakuvakkeella tai valikosta (esimerkiksi Asiakkaat-, Tilaukset- ja Laskujen haku -sivuilta) tai tuomalla asiakasnumeroita tältä sivulta. Jos lista on tyhjä, sivulla lukee "Keräilylista on tyhjä."

Avaa keräilylista napsauttamalla päävalikon oikeassa reunassa olevaa **keräilylistakuvaketta**. Kuvakkeen yhteydessä näkyvä numero kertoo keräilylistalla olevien asiakkaiden määrän.

![Keräilylistan yleisnäkymä ja asiakasluettelo](/img/versio2/kerailylista.png)

## Asiakkaiden tuominen asiakasnumeroilla

Voit lisätä asiakkaita keräilylistalle syöttämällä asiakasnumerot käsin tai tuomalla ne tiedostosta.

1. Napsauta **Tuo asiakasnumeroita**.
2. Lisää asiakasnumerot jommallakummalla tavalla:
   - kirjoita tai liitä numerot **Asiakasnumerot**-kenttään yksi asiakasnumero per rivi
   - valitse tuotava **TXT- tai CSV-tiedosto**.
3. Napsauta **Esikatsele**.
4. Tuo asiakkaat keräilylistaan painamalla **Lisää X asiakasta keräilylistaan**

Numerot voi erottaa riviväleillä, pilkuilla, puolipisteillä, tabulaattorilla tai välilyönneillä. Tuotavan tiedoston enimmäiskoko on 10 Mt.

Järjestelmä vertaa annettuja asiakasnumeroita asiakasrekisteriin. Rekisteristä löytyneet asiakkaat voidaan lisätä keräilylistalle.

Esikatselu kertoo, montako numeroa annettiin, montako asiakasta tunnistettiin (joista kuinka moni on jo listalla ja kuinka monta lisätään) ja mitä numeroita ei löytynyt. Taulukossa asiakkaan tilana on joko **jo listalla** tai **lisätään**. Kun lisäys on tehty, sivulla lukee "N asiakasta lisätty keräilylistaan."

Tyhjennä syötetyt asiakasnumerot ja valittu tiedosto napsauttamalla **Tyhjennä**.

![Asiakasnumeroiden syöttäminen tai tuominen tiedostosta](/img/versio2/kerailylista2.png)

## Keräilylistan tiedot

| Sarake | Sisältö |
| --- | --- |
| **Asiakasnro** | Asiakkaan numero ja linkki asiakaskortille. |
| **Nimi** | Asiakkaan nimi. |
| **Yritys** | Asiakkaan yrityksen nimi. |
| **Katuosoite** | Asiakkaan katuosoite. |
| **Postitoimipaikka** | Asiakkaan postinumero ja postitoimipaikka. |
| **Sähköposti** | Asiakkaan sähköpostiosoite. |
| **Puhelin** | Asiakkaan puhelinnumero. |
| **Lisätty** | Päivämäärä ja kellonaika, jolloin asiakas lisättiin keräilylistalle. |
| **Markkinointikiellot** | Asiakkaan voimassa olevat markkinointikiellot. |

Rivin alussa on Muokkaa-painike (kynä) ja Avaa uuteen välilehteen -painike. Avaa asiakkaan asiakaskortti napsauttamalla **asiakasnumeroa**. Lajittele lista napsauttamalla sarakkeen otsikkoa; oletuksena uusimmat lisäykset ovat ylimpänä. Listan yläosan sivutuksella valitaan rivien määrä per sivu (oletus 100).

![Keräilylistan asiakkaiden tiedot](/img/versio2/kerailylista5.png)

Sarakkeet-painikkeella (listan oikeassa yläkulmassa Exportin vieressä) voit valita näytettävät sarakkeet. Oletuksena piilossa ovat Sukunimi, Etunimi, Postinumero, Postitoimipaikka (pelkkä) ja Maa. 

![Keräilylistan asiakkaiden tiedot](/img/versio2/kerailylista-sarakkeet.png)

## Keräilylistan hakeminen ja suodattaminen

Voit rajata keräilylistan sisältöä seuraavilla hakuehdoilla:

| Hakuehto | Kuvaus |
| --- | --- |
| **Haku keräilylistan sisällöstä** | Hae asiakkaita esimerkiksi nimellä, asiakasnumerolla, yrityksen nimellä tai sähköpostiosoitteella. |
| **Postitoimipaikka** | Rajaa asiakkaat postitoimipaikan perusteella. |
| **Sähköposti** | Rajaa asiakkaita sähköpostiosoitteen perusteella. |
| **Kaikki markkinointi kielletty** | Rajaa asiakkaat sen mukaan, onko heillä yleinen markkinointikielto (Kaikki / Kyllä / Ei). |
| **Markkinointikanavat** | Jokaiselle kanavalle (sähköposti, kirje, puhelin, tekstiviesti) on oma suodatin: Kaikki, Ei kielletty, Sallittu, Kielletty, Ei tiedossa tai Tila puuttuu.|

Hakutulokset päivittyvät automaattisesti, kun kirjoitat hakukenttään tai muutat suodatusta.

Hakuehtojen oikealla puolella näkyvä luku, esimerkiksi **31 / 31 asiakasta**, kertoo näytettävien asiakkaiden määrän suhteessa keräilylistan asiakkaiden kokonaismäärään.

![Keräilylistan haku- ja suodatusehdot](/img/versio2/kerailylista3.png)

## Asiakkaiden valitseminen

## Asiakkaiden valitseminen

Valitse yksittäinen asiakas napsauttamalla rivin vasemmassa reunassa olevaa valintaruutua. Otsikkorivin valintaruutu valitsee kaikki hakutuloksen asiakkaat, myös muilla sivuilla olevat. Valittujen määrä näkyy listan yläpuolella (Valittu N).

Toiminnot-kohdassa näkyy, montaako asiakasta toiminto koskee, ja teksti **valitut** tai **suodatetut**.

:::note
**Huomio:** Jos et ole valinnut yhtään asiakasta, toiminnot (Vie päivityspohjaan, Lisää ryhmään, Lähetä sähköposti, Poista keräilylistalta ja Export) koskevat kaikkia nykyisillä hakuehdoilla näkyviä asiakkaita. Tarkista aina Toiminnot-kohdan asiakasmäärä ennen toiminnon suorittamista.
:::

![Asiakkaiden valitseminen keräilylistalta](/img/versio2/kerailylista4.png)

## Asiakkaan poistaminen listalta

Poista yksittäinen asiakas keräilylistalta napsauttamalla asiakasrivin oikeassa reunassa olevaa punaista **X-painiketta**. 

Poista monta asiakasta valitsemalla ne listalta ja painamalla sitten **Poista keräilylistalta** -painiketta. Jos yhtään asiakasta ei ole valittuna, poistetaan kaikki keräilylistalla olevat. 

Tyhjennä keräilylista kokonaan painamalla **Tyhjennä** -painiketta. 

Asiakkaan poistaminen keräilylistalta tai keräilylistan tyhjentäminen ei poista asiakaskorttia tai asiakkaan muita tietoja järjestelmästä.

![Asiakkaiden poistaminen keräilylistalta](/img/versio2/kerailylista6.png)

## Keräilylistan toiminnot

| Toiminto | Kuvaus |
| --- | --- |
| **Export** | Avaa keräilylistan tulostus-, kopiointi- ja vientitoiminnot. |
| **Vie päivityspohjaan** | Vie asiakkaiden tiedot päivityspohjaan. |
| **Lisää ryhmään** | Lisää asiakkaat valittuun asiakasryhmään. |
| **Muokkaa ryhmiä** | Avaa järjestelmässä käytettävien ryhmätyyppien ja ryhmien hallinnan. |
| **Lähetä sähköposti** | Avaa sähköpostin lähettämisen valituille asiakkaille. |

![Keräilylistan asiakastoiminnot](/img/versio2/kerailylista9.png)

### Keräilylistan tulostaminen ja vieminen

Avaa vientivalikko napsauttamalla **Export**-painiketta.

Valikossa näkyvä rivimäärä kertoo, kuinka monta valittua tai suodatettua asiakasta käsitellään. Esimerkiksi **129 riviä** tarkoittaa, että vientiin sisältyy 129 asiakasta. Tarkista määrä ennen toiminnon suorittamista. Vienti sisältää ne sarakkeet, jotka ovat näkyvissä (Sarakkeet-valinta).

| Toiminto | Kuvaus |
| --- | --- |
| **Tulosta** | Avaa keräilylistan tiedot tulostettavaksi. |
| **Kopioi** | Kopioi tiedot tietokoneen leikepöydälle. |
| **PDF** | Vie tiedot PDF-tiedostoon. |
| **Excel** | Vie tiedot Excel-tiedostoon. |
| **CSV** | Vie tiedot CSV-tiedostoon. |
| **JSON** | Vie tiedot JSON-tiedostoon. |
| **HTML** | Vie tiedot HTML-tiedostoon. |

![Keräilylistan tulostus- ja vientivalikko](/img/versio2/kerailylista7.png)

## Asiakastietojen vieminen päivityspohjaan

**Vie päivityspohjaan** -toiminnolla voit ladata keräilylistalta valittujen asiakkaiden tiedot Excel-tiedostoon. Voit muokata tietoja Excelissä ja tuoda päivitetyn tiedoston takaisin järjestelmään asiakastietojen päivittämistä varten.

1. Valitse keräilylistalta asiakkaat, joiden tietoja haluat päivittää.
2. Tarkista **Toiminnot**-kohdasta valittujen asiakkaiden määrä.
3. Napsauta **Vie päivityspohjaan**.
4. Tallenna muodostettu Excel-tiedosto tietokoneellesi.
5. Avaa tiedosto Excelissä ja tee tarvittavat muutokset.
6. Tallenna valmis tiedosto.
7. Tuo muokattu tiedosto takaisin järjestelmään asiakastietojen päivitystoiminnolla.

Päivityspohja sisältää esimerkiksi seuraavia tietoja:

- asiakasnumero
- etu- ja sukunimi
- yritys ja osasto
- osoitetiedot
- maa
- sähköpostiosoite
- puhelinnumero.

**Älä muuta tai poista Asiakasnumero-sarakkeen arvoja.** Järjestelmä tunnistaa päivitettävän asiakaskortin asiakasnumeron perusteella.

Tarkista muutokset huolellisesti ennen tiedoston tuomista takaisin järjestelmään, sillä tuonnilla voidaan päivittää useiden asiakkaiden tietoja samalla kertaa.

### Asiakkaiden lisääminen ryhmään

Voit lisätä keräilylistan suodatetut asiakkaat valittuun ryhmään.

1. Rajaa keräilylistalle ne asiakkaat, jotka haluat lisätä ryhmään.
2. Tarkista **Toiminnot**-kohdasta käsiteltävien asiakkaiden määrä.
3. Napsauta **Lisää ryhmään**.
4. Valitse **Tyyppi**, esimerkiksi **Ryhmä**.
5. Valitse **Arvo**-valikosta ryhmä, johon asiakkaat lisätään.
6. Napsauta **Lisää [määrä] asiakasta ryhmään**.

Painikkeessa näkyvä määrä kertoo, kuinka monta asiakasta ryhmään lisätään. 

Käytettävissä olevat ryhmittelytyypit ja ryhmät määritetään järjestelmän asetuksissa.

Sulje toiminto tekemättä muutoksia napsauttamalla **Sulje**.

![Keräilylistan asiakkaiden lisääminen ryhmään](/img/versio2/kerailylista8.png)

### Ryhmien muokkaaminen

Avaa ryhmien hallinta napsauttamalla keräilylistalla **Muokkaa ryhmiä**.

Tässä toiminnossa hallitaan järjestelmässä käytettäviä ryhmätyyppejä ja ryhmiä. Toiminto ei lisää keräilylistan asiakkaita ryhmiin. Lisää asiakkaat olemassa olevaan ryhmään **Lisää ryhmään** -toiminnolla.

![Ryhmien muokkaus keräilylistalta](/img/versio2/kerailylista11.png)

#### Uuden ryhmän lisääminen

1. Kirjoita **Tyyppi**-kenttään ryhmittelyn tyyppi, esimerkiksi **Yritysala**.
2. Kirjoita **Arvo**-kenttään uuden ryhmän nimi, esimerkiksi **TEOLLISUUS**.
3. Napsauta **+ Lisää**.

Ryhmä luodaan aluksi ilman asiakkaita. Lisää asiakkaat ryhmään erikseen keräilylistan **Lisää ryhmään** -toiminnolla.

![Uuden ryhmätyypin ja ryhmän lisääminen](/img/versio2/ryhma.png)

#### Ryhmätyyppien ja ryhmien hallinta

Ryhmittelyt näytetään ryhmätyypeittäin, esimerkiksi **Laskut**, **Rooli** ja **Ryhmä**. Ryhmän nimen vieressä näkyvä numero on ryhmän tunniste ID.

Ryhmätyypin otsikkorivillä olevilla painikkeilla voit:

- lisätä uuden ryhmän kyseisen tyypin alle **pluspainikkeella**
- muokata ryhmätyyppiä **kynäkuvakkeella**
- poistaa ryhmätyypin **roskakorikuvakkeella**.

Yksittäisen arvon rivillä olevilla painikkeilla voit:

- muokata arvoa **kynäkuvakkeella**
- poistaa arvoa **roskakorikuvakkeella**.

Sulje Ryhmien muokkaus -ikkuna **Sulje**-painikkeella tai oikean yläkulman rastista.

![Ryhmätyyppien ja ryhmien hallintatoiminnot](/img/versio2/kerailylista10.png)

### Sähköpostin lähettäminen keräilylistalta

Voit lähettää saman sähköpostiviestin keräilylistalta valituille asiakkaille.

1. Valitse keräilylistalta asiakkaat, joille haluat lähettää viestin.
2. Tarkista **Toiminnot**-kohdasta valittujen asiakkaiden määrä.
3. Napsauta **Lähetä sähköposti**.
4. Tarkista vastaanottajien määrä. Näkymässä kerrotaan myös, kuinka monta asiakasta ohitetaan puuttuvan sähköpostiosoitteen vuoksi.
5. Kirjoita viestin otsikko **Aihe**-kenttään.
6. Kirjoita sähköpostin sisältö **Viesti**-kenttään.
7. Tarkista viesti ja napsauta **Lähetä**.

Viesti lähetetään jokaiselle vastaanottajalle erikseen. Vastaanottajat eivät näe muiden asiakkaiden sähköpostiosoitteita.

Asiakkaat, joilla ei ole sähköpostiosoitetta, ohitetaan automaattisesti. Onnistumisen jälkeen sivulla lukee "Lähetetty N viestiä." ja mahdolliset epäonnistuneet kerrotaan erikseen.

Voit sulkea sähköpostitoiminnon lähettämättä viestiä napsauttamalla osion oikeassa yläkulmassa olevaa **X-painiketta**.

![Sähköpostin lähettäminen keräilylistan asiakkaille](/img/versio2/kerailylista12.png)
