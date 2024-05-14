---
sidebar_position: 3
---

# Ilmoitustyöjono

## Yleistä lmoitustyöjonosta

Ilmoitustyöjono –välilehdellä käsittelijät ja myyjät pääsevät katselemaan työjonossa olevia mainos-/ilmoitusaineistoja
Käsittelijä on henkilö, joka tekee mainoksen materiaalien pohjalta ja lataa sen palveluun hyväksyttäväksi (esim. graafikko)
Myyjä voi valita mainokselle Käsittelijän klikkaamalla Käsittelijä -sarakkeen linkkiä ja lisäämällä Käsittelijän sähköpostiosoitteen ja klikkaamalla Tallenna –painiketta
Myyjä voi ottaa sen myös itselleen käsittelyyn avaamalla listauksen ensimmäisen sarakkeen ikonista siirtymän OmaIlmoitus-palveluun ja klikkaamalla Ota ilmoitus itsellesi käsittelyyn –painiketta

AINEISTO_TOIMITETTU-tilassa olevan ilmoitusvarauksen voi ottaa käsittelyyn kirjatulle käsittelijälle Valitse käsittelyyn –painikkeella

AINEISTO_TOIMITETTU- ja KÄSITTELYSSÄ tilassa olevalle ilmoitusvarauksen käsittelijälle voi lähettää linkin aineiston lataamista ja ilmoituksen liittämistä varten Lähetä linkki käsittelijälle -painikkeella

Hakulistausta voi hyödyntää esim. hakemalla seuraavan Julkaisun nimi ja Ilmoitusvarauksen tila -tiedoilla jo valmiina olevat ilmoitukset (Hyväksytty) tai keskeneräisiä/hyväksyntää odottavat ilmoitukset (Ilmoitus_valmis/Hyväksyttävänä)

## Ilmoitustyöjono ja aineistot

Käsittelijä aktivoinnin jälkeen pääsee lisäämään ko. Ilmoitusvaraukseen liittyviä aineistoja klikkaamalla listauksen ensimmäisen sarakkeen ikonia

Selaimeen avautuu uusi välilehti, jossa
-Lisää aineisto –painikkeella voi lisätä ilmoitukseen tulevan kuvan
-Lisää ilmoitusteksti–painikkeella voi lisätä ilmoitukseen tulevan tekstityksen
-Lisää valmis ilmoitus –painikkeella lisätään valmis ilmoitus

Lisätyt aineistot näytetään listauksen Aineistot ja ilmoitustekstit, sekä Ilmoitus –sarakkeissa, joista ne voi avata katselmoitavaksi Nimi –linkkiä klikkaamalla

## Automatisoidut aineistosiirrot

Toiminnallisuudesta yleisesti

Kun uusi ilmoitusvaraus tallennetaan, luodaan TaikaTilauksen palvelimella olevaan hakemistorakenteeseen kansio varauksessa valitun Julkaisun alle (esim. TaikaNakka 01/2022) nimettynä uudella VarausNumerolla. Tallennuksen yhteydessä kirjoitetaan samaan hakemistokansioon myös ilmoitusvarauksen tiedot erilliseen .txt tiedostoon.

Kun tallennettuun ilmoitusvaraukseen lisätään myöhemmin käyttöliittymän kautta aineistoja (myyjä/asiakas/mainoststo/jne.), niin ne tallentuvat automaattisesti em. VarausNro -hakemistoon.
Ilmoitusaineisto voidaan tallentaa heti myös painovalmiina, jolloin se siirretään autom. haluttuun hakemistoon.

Automaattisessa siirrossa palvelimen kansioissa olevat tiedostot saadaan siirtymään parissa minuutissa yrityksen omalle palvelimelle (sisäverkkoon), jossa on TaikaTilauksen palvelinta vastaava rakenne.
Riippuen yrityskohtaisesta tarpeesta, voidaan yrityksen sisäverkkoon välittää myös yhteenvetotiedosto ko. Julkaisun kaikista sen sisältämistä ilmoitusvarauksista (esim. InDesign plug-inin käyttöön).

Ilmoitusvalmistaja (käsittelijä) saa suoraan hakemistosta tarvitsemansa aineistotiedostot (ja .txt tiedoston), jonka perusteella ilmoitus voidaan tehdä.
Valmis ilmoitus tallennetaan yrityksen omalle palvelimelle, josta se taas siirtyy TaikaTilauksen palvelimelle automaattisesti.
Tämän siirron yhteydessä voidaan ilmoitusasiakkaalle myös lähettää autom. hyväksymispyyntö -viesti.