---
sidebar_position: 3
sidebar_label: Postitusten tiedot
description: Postitusten tiedot.
---

# Postitusten tiedot

**Postitusten tiedot** -sivulla tehdään lehden postitus- ja LaPa-ajo. 

Jokainen rivi on yhden lehden yhden numeron postitus. Sivulla näet, milloin postituslista tehdään ja onko ajo valmis. Voit myös tehdä ajon tai nollata ajon ja tehdä sen uudelleen.

Palvelimella oleva ajo tekee postituslistan automaattisesti, kun postitusajon aika on mennyt eikä postituslistaa ole vielä ajettu manuaalisesti.

## Postitusten lista

Sivun avautuessa näet kaikki postitukset, uusin numero ensin. Listan yläpuolella voit rajata näkymää:

- **Lehti**
- **Ilmestymispäivä**

Valinnat säilyvät, kun siirryt sivulta toiselle ja palaat takaisin.

Listassa ovat sarakkeet 
- Lehti,
- Ilmestymispäivä, 
- Numero, 
- Postitusajo
- LähetysID

Asiakkailla, joilla LAPA-ajo on käytössä, näkyvät lisäksi:
- Paino,
- Paksuus,
- Lähetyslistan numero
- LAPA-ajo, 
- ja ulkomaiden painon kanssa myös Paino ulkomaat. 

**Painoaineistot**-sarake näkyy asiakkailla, joiden painoaineistot siirretään palvelimelta automaattisesti. **Sarakkeet**-painikkeella voit valita näytettävät sarakkeet.

Voit lajitella listan napsauttamalla yksittäistä sarakeotsikkoa Voit selata listan sivuja yläreunasta ja viedä listan Export-valikosta.

### Ajon tila

Ajosarakkeissa tila näkyy värillisenä merkkinä:

- **Odottaa** (harmaa): ajolle on asetettu ajoaika, eikä ajoa ole vielä tehty. Teksti on "Odottaa 20.11.2026 18:00". Jos ajoaikaa ei ole, teksti on "Ei ajoaikaa".
- **SUORITUKSESSA** (sininen): ajo on käynnissä.
- **VALMIS** (vihreä): ajo on tehty. Tekstissä näkyy ajon valmistumisaika.
- **VIRHE** (punainen): ajo epäonnistui. Postitusajon virhe estää myös LAPA-ajon. Avaa rivi ja katso virheen syy Ajojen lokista.

Kun napsautat riviä, postituksen tiedot avautuvat muokattavaksi.

## Postituksen lisääminen

Paina **Lisää postitus**. Täytä tiedot ja paina Tallenna.

1. Valitse **Lehti**. Listassa ovat yrityksesi lehdet.
2. Valitse **Ilmestymispäivä**. Päivä saa olla enintään kuukauden menneisyydessä ja puoli vuotta tulevaisuudessa. Kun valitset päivän, sivu asettaa ajoajat automaattisesti: postitusajo on kaksi päivää ennen ilmestymispäivää klo 18.00 ja LAPA-ajo puoli tuntia myöhemmin. Ajoaikoja ei muuteta, jos ajo on jo tehty.
3. Anna lehden **Numero** (1–1000).
4. Jos LAPA-ajo on käytössä, täytä **Paino (g)**, tarvittaessa **Paino ulkomaat (g)**, **Paksuus** ja **Lähetyslistan numero**. Painot ja paksuus ovat 0–10000.
5. Valitse **Lähetä postitusyhteenveto**, jos haluat, että postituksen lopuksi lähetetään postitusyhteenveto. Kirjoita **Postitusyhteenvedon vastaanottajat** sähköpostiosoitteina puolipisteillä erotettuna.
6. Tarkista **Postitusajon** ja **LAPA-ajon** ajoajat. Voit muuttaa niitä käsin. Painike **Tee heti** asettaa ajoajaksi nykyhetken, jolloin ajo tehdään seuraavalla tasaminuutilla.
7. Paina **Tallenna**.

Jos tiedoissa on virhe, sivu näyttää punaisessa ruudussa, mikä pitää korjata ("Numero virheellinen (1–1000)", "Postitusajon suoritusaika virheellinen" jne.). Onnistuneen tallennuksen jälkeen sivu ilmoittaa "Postitus tallennettu."

## Postituksen käsittely

Napsauta listalta riviä, niin postituksen tiedot avautuvat. Voit muokata samoja kenttiä kuin lisättäessä ja tallentaa muutokset.

Postitusajo- ja LAPA-ajo-osiossa näkyvät ajon **Tila** ja tehdyn ajon suoritusaika, esimerkiksi "(suoritettu 12.11.2026 16:02)". 

Painoaineistot-osiossa näkyy painoaineistojen siirron tila. Palvelin siirtää aineistot painotaloon postitusajon jälkeen.

### Ajon nollaaminen

Jos postitusajo tai LAPA-ajo on tehty väärin, voit nollata sen ja tehdä uudelleen. Painikkeet näkyvät, kun ajolla on jo tila.

- **Nollaa postitusaineisto**: poistaa tehdyn postitusaineiston ja tyhjentää ajoajat. Aseta sen jälkeen postitusajon ja LAPA-ajon uudet ajoajat. Ohjelma kysyy vahvistuksen: *"Poistetaanko tehty postitusaineisto? Huomaa, että LAPA-ajo täytyy myös tehdä uudelleen."*
- **Nollaa ja aja heti**: nollaa postitusaineiston ja ajaa postituksen uudelleen heti. LAPA-ajo tehdään minuutteja myöhemmin.
- **Nollaa LAPA-ajo**: poistaa tehdyn LAPA-ajon ja ajaa sen uudelleen heti.

Nollaukset kirjataan ajon lokiin.

### Tee kopio

**Tee kopio** luo uuden postituksen samoilla tiedoilla. Ilmestymispäiväksi ja ajoajoiksi asetetaan päivä viiden päivän päästä. Muuta ne oikeiksi ja paina **Tallenna**. Ennen tallennusta ajoajat eivät ole oikein, joten tarkista ne.

### Poista

**Poista** poistaa postituksen kokonaan. Ohjelma kysyy *"Haluatko varmasti poistaa postituksen?".* Poistoa ei voi perua.

## Ajojen loki

Avatun postituksen alla on **Ajojen loki**. Siinä näkyvät ajon vaiheet ajankohtineen, uusin ensin. Lokissa näkyy esimerkiksi nollaukset, virheet ja painoaineistojen siirrot. 

**Päivitä loki** hakee uusimmat tiedot. Virheen tapahtuessa ajossa, käytä lokia ensimmäisenä virheen selvittämiseen. Jos et saa virhettä ratkaistua lokin avulla, voit ottaa yhteyttä tuki@taikatilaus.fi

## Suorita postitus palvelimella

Jos asiakkaalla on palvelimen postitusajo käytössä, listan yläreunassa on **Suorita postitus palvelimella** -painike. Se pyytää palvelinta tekemään ajoaikansa saavuttaneet postitukset seuraavalla tasaminuutilla. 

Sivu ilmoittaa: *"Suorituspyyntö asetettu. Ajo alkaa palvelimella seuraavalla tasaminuutilla".* Jos asiakkaalla ei ole palvelimen ajoa, sivu kertoo siitä.

## Postitusten luonti ja LAPA

Kun teet postituksen **Postitusten luonti** -sivulla, ohjelma liittää postituksen saman ilmestymispäivän riville tässä näkymässä. 

Rivillä **Postitusajon tila** on **VALMIS** ja ohjelma tallentaa postituksen **LähetysID**:n, jonka LAPA-ajo lukee. Näin palvelin ei tee samaa postitusta uudestaan. 

Jos rivi puuttuu, LAPA-asiakkaalle näytetään ohje lisätä se. LAPA-ajo käynnistetään silti tällä sivulla asettamalla ajoaika.