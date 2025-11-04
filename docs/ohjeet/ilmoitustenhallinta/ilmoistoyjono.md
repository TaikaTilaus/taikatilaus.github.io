---
sidebar_position: 3
---

# Ilmoitustyöjono

## Yleistä ilmoitustyöjonosta

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono.png)

**Ilmoitustyöjono**–välilehdellä käsittelijät ja myyjät voivat tarkastella työjonossa olevia mainos- ja ilmoitusaineistoja.

**Käsittelijä** on henkilö, joka tekee mainoksen asiakkaan toimittamien materiaalien pohjalta ja lataa sen palveluun hyväksyttäväksi (esimerkiksi graafikko).

Voit valita ilmoitukselle käsittelijän klikkaamalla **Käsittelijä**–sarakkeen linkkiä, syöttämällä käsittelijän **sähköpostiosoitteen** ja painamalla **Tallenna**–painiketta.

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono2.png)

Ohjelmaan kirjautunut käsittelijä voi ottaa **AINEISTO_TOIMITETTU**–tilassa olevan ilmoitusvarauksen käsittelyyn **Valitse käsittelyyn** –painikkeella.

Ilmoitusvarauksista, jotka ovat **AINEISTO_TOIMITETTU**– tai **KÄSITTELYSSÄ**–tilassa, voidaan lähettää linkki ilmoitusvarauksen käsittelijälle aineiston lataamista ja ilmoituksen liittämistä varten **Lähetä linkki käsittelijälle** –painikkeella.

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono3.png)

Ilmoitustyöjonolta voi **hakea ja suodattaa** ilmoitusvarauksia esimerkiksi:
- ilmoitusten ilmestymisajankohdan,
- käsittelijän,
- ilmoitusvarauksen tilan,
- kanavan,
- julkaisun tai
- ryhmän mukaan.

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono4.png)

**Ilmoitusvarauksen tila** voi olla jokin seuraavista:

- **Alustava** – luotu, mutta ilman aineistoa  
- **Ei_Aineistoa** – odottaa sisältöä  
- **Aineisto_Toimitettu** – käsittelijällä / ilmoitustyöjonossa  
- **Ilmoitus_valmis** – taittaja on tehnyt ilmoituksen, mutta asiakas ei ole vielä hyväksynyt sitä  
- **Hyväksyttävänä** – odottaa asiakkaan hyväksymistä  
- **Hyväksynyt** – asiakkaan hyväksymä valmis ilmoitus  

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono5.png)

Voit muuttaa ilmoitusvarauksen tilaa painamalla **Muuta tilaa** –painiketta.

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono7.png)

## Ilmoitustyöjono ja aineistot

Voit lisätä ilmoitukseen aineistoa tai valmiin ilmoituksen **Lisää aineisto**– tai **Lisää ilmoitus**–painikkeella.

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono10.png)
*Aineiston ja valmiin ilmoituksen lisääminen*

### Aineiston lisääminen

- Lisää aineisto omalta koneeltasi  
- Lisää kuvaus  
- Lisää aineiston käsittelyohjeet  

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono8.png)
*Aineiston lisääminen*

### Valmiin ilmoituksen lisääminen

- Lisää valmis ilmoitus omalta koneeltasi  
- Lisää kuvaus  
- Lisää käsittelyohjeet  
- Lisää hyväksyjän sähköposti  

Jos et halua, että ohjelma lähettää hyväksymispyynnön automaattisesti, valitse **Älä lähetä hyväksymisviestiä**–kenttä.  

Jos ilmoitusta ei tarvitse hyväksyttää ja se on heti valmis julkaistavaksi, valitse **Ilmoitusta ei tarvitse hyväksyttää**–kenttä.  

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono9.png)

*Valmiin ilmoituksen lisääminen*

### Aineiston poistaminen

Aktivoimalla **Näytä tiedostojen poistaminen** –kentän voit poistaa ilmoituksiin liitettyjä aineistoja.  

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono6.png)

### Ilmoituksen käsittely erillisessä välilehdessä

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono11.png)

Painamalla ensimmäisessä sarakkeessa olevaa kuvaketta selaimeen avautuu uusi välilehti, jossa voit:  
- **Lisää aineisto** –painikkeella lisätä ilmoitukseen kuvan  
- **Lisää ilmoitusteksti** –painikkeella lisätä ilmoituksen tekstin  
- **Lisää valmis ilmoitus** –painikkeella lisätä valmiin ilmoituksen  

Lisätyt aineistot näkyvät kentissä **Aineistot ja ilmoitustekstit** sekä **Tuotettu ilmoitus**, joista ne voi avata klikkaamalla niiden nimeä.

Ilmoitusvarauksen tila näkyy **yläbannerissa**.  

![Ilmoitustyöjono](/img/ohjeet/ilmoitustyojono12.png)

## Automatisoidut aineistosiirrot

**Toiminnallisuudesta yleisesti**

Kun uusi **ilmoitusvaraus tallennetaan**, luodaan TaikaTilauksen palvelimella olevaan hakemistorakenteeseen kansio varauksessa valitun **Julkaisun** alle (esim. *TaikaNakka 01/2022*), nimettynä uudella **varausnumerolla**.  

Tallennuksen yhteydessä kirjoitetaan samaan hakemistokansioon myös ilmoitusvarauksen tiedot erilliseen **`.txt`-tiedostoon.**

---

Kun tallennettuun ilmoitusvaraukseen lisätään myöhemmin käyttöliittymän kautta **aineistoja** (esim. myyjä, asiakas tai mainostoimisto), ne tallentuvat automaattisesti kyseiseen **VarausNro**-hakemistoon.

Ilmoitusaineisto voidaan tallentaa heti myös **painovalmiina**, jolloin se siirretään automaattisesti haluttuun hakemistoon.

---

Automaattisessa siirrossa palvelimen kansioissa olevat tiedostot siirtyvät **muutamassa minuutissa** yrityksen omalle palvelimelle (sisäverkkoon), jossa on TaikaTilauksen palvelinta **vastaava hakemistorakenne**.

Yrityskohtaisesta tarpeesta riippuen sisäverkkoon voidaan välittää myös **yhteenvetotiedosto** kyseisen julkaisun kaikista sen sisältämistä ilmoitusvarauksista (esim. **InDesign plug-inin käyttöön**).

Ilmoitusvalmistaja (käsittelijä) saa suoraan hakemistosta tarvitsemansa **aineistotiedostot** sekä **`.txt`-tiedoston**, joiden perusteella ilmoitus voidaan valmistaa.

---

Valmis ilmoitus tallennetaan yrityksen omalle palvelimelle, josta **se siirtyy automaattisesti takaisin TaikaTilauksen palvelimelle**.  
Tämän siirron yhteydessä voidaan asiakkaalle lähettää myös automaattinen **hyväksymispyyntöviesti**.







