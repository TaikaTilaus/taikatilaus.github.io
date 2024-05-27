---
sidebar_position: 3
---

# Ilmoitustyöjono

## Yleistä ilmoitustyöjonosta

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono.png)

**Ilmoitustyöjono**–välilehdellä käsittelijät ja myyjät pääsevät katselemaan työjonossa olevia mainos-/ilmoitusaineistoja.

**Käsittelijä** on henkilö, joka tekee mainoksen materiaalien pohjalta ja lataa sen palveluun hyväksyttäväksi (esim. graafikko).

Voit valita mainokselle Käsittelijän klikkaamalla **Käsittelijä**-sarakkeen linkkiä ja lisäämällä Käsittelijän **sähköpostiosoitteen** ja klikkaamalla **Tallenna**–painiketta.

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono2.png)

Ohjelmaan kirjautunut käsittelijä voi ottaa AINEISTO_TOIMITETTU-tilassa olevan ilmoitusvarauksen käsittelyyn **Valitse käsittelyyn** –painikkeella.

AINEISTO_TOIMITETTU- tai KÄSITTELYSSÄ-tilassa olevalle ilmoitusvarauksen käsittelijälle voi lähettää linkin aineiston lataamista ja ilmoituksen liittämistä varten **Lähetä linkki käsittelijälle** -painikkeella.

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono3.png)

Ilmoitustyöjonolta voi **hakea ja suodattaa suodattaa** ilmoitusvarauksia:
- Ilmoitusten ilmestymisaikavälin
- Käsittelijän
- Ilmoitusvarauksen tilan
- Kanavan
- Julkaisun
- Ryhmän mukaan

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono4.png)

**Ilmoitusvarauksen tila** voi olla
- **Alustava** – Luotu, mutta ilman aineistoa
- **Ei_Aineistoa** – Odottaa sisältöä
- **Aineisto_Toimitettu** – Käsittelijällä/Ilmoitustyöjonossa
- **Ilmoitus_valmis** – Taittaja tehnyt ilmoituksen, mutta asiakas ei ole vielä hyväksynyt
- **Hyväksyttävänä** – Odottaa asiakkaan hyväksyntäkuittausta
- **Hyväksynyt** – Asiakkaan hyväksymä valmis ilmoitus

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono5.png)

Voit muuttaa ilmoitusvarauksen tilaa painamalla **Muuta tilaa** -painiketta.

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono7.png)

## Ilmoitustyöjono ja aineistot

Voit lisätä ilmoitukseen aineistoa tai valmiin ilmoituksen **Lisää aineisto** -painikkeella tai **Lisää ilmoitus** -painikkeella.

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono10.png)
*Aineiston ja valmiin ilmoituksen lisääminen*

### Aineiston lisääminen

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono8.png)
*Aineiston lisääminen*

- 

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono9.png)

*Valmiin ilmoituksen lisääminen*

Aktivoimalla **Näytä tiedostojen poistaminen** -kentän voit poistaa ilmoituksiin lisättyjä aineistoja.

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono6.png)

### Ilmoituksen käsittely

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono11.png)

Painamalla ensimmäisessa sarakkeessa olevaa ikonia selaimeen avautuu uusi välilehti, jossa
- **Lisää aineisto** –painikkeella voi lisätä ilmoitukseen tulevan kuvan
- **Lisää ilmoitusteksti** –painikkeella voi lisätä ilmoitukseen tulevan tekstityksen
- **Lisää valmis ilmoitus** –painikkeella lisätään valmis ilmoitus

Lisätyt aineistot näytetään listauksen **Aineistot ja ilmoitustekstit**, sekä **Ilmoitus** –sarakkeissa, joista ne voi avata katselmoitavaksi **Nimi**–linkkiä klikkaamalla. 

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono12.png)

## Automatisoidut aineistosiirrot

**Toiminnallisuudesta yleisesti**

Kun uusi ilmoitusvaraus tallennetaan, luodaan TaikaTilauksen palvelimella olevaan hakemistorakenteeseen kansio varauksessa valitun Julkaisun alle (esim. TaikaNakka 01/2022) nimettynä uudella VarausNumerolla. Tallennuksen yhteydessä kirjoitetaan samaan hakemistokansioon myös ilmoitusvarauksen tiedot erilliseen .txt tiedostoon.

Kun tallennettuun ilmoitusvaraukseen lisätään myöhemmin käyttöliittymän kautta aineistoja (myyjä/asiakas/mainoststo/jne.), niin ne tallentuvat automaattisesti em. VarausNro -hakemistoon.
Ilmoitusaineisto voidaan tallentaa heti myös painovalmiina, jolloin se siirretään autom. haluttuun hakemistoon.

Automaattisessa siirrossa palvelimen kansioissa olevat tiedostot saadaan siirtymään parissa minuutissa yrityksen omalle palvelimelle (sisäverkkoon), jossa on TaikaTilauksen palvelinta vastaava rakenne.
Riippuen yrityskohtaisesta tarpeesta, voidaan yrityksen sisäverkkoon välittää myös yhteenvetotiedosto ko. Julkaisun kaikista sen sisältämistä ilmoitusvarauksista (esim. InDesign plug-inin käyttöön).

Ilmoitusvalmistaja (käsittelijä) saa suoraan hakemistosta tarvitsemansa aineistotiedostot (ja .txt tiedoston), jonka perusteella ilmoitus voidaan tehdä.
Valmis ilmoitus tallennetaan yrityksen omalle palvelimelle, josta se taas siirtyy TaikaTilauksen palvelimelle automaattisesti.
Tämän siirron yhteydessä voidaan ilmoitusasiakkaalle myös lähettää autom. hyväksymispyyntö -viesti.