---
sidebar_position: 3
---

# Suoritukset

## Yleistä suorituksista

![Suoritukset](/img/ohjeet/suoritukset.png)

**Suoritukset**–välilehdellä tarkastellaan sovellukseen tulevia maksuja. Suorituksia voi myös itse luoda esim. tilanteessa, jossa asiakas on maksanut laskun paikan päällä käteisellä, **Lisää suoritus** –painikkeen avulla yksittäisissä laskuissa. 

**Hae**–painike hakee kaikki saapuneet Suoritukset listaukselle.

Voit myös karsia hakutuloksia eri hakuehdoilla:
- **SuoritusID** - suorituksen yksilöivä numero
- **AinestoID** - pankista haettujen viitemaksujen numero, joka vaihtuu joka yö
- **Pankkitilin numero**
- **Laskun numero**
- Laskun **kirjauspäivä**
- **Maksupäivä**
- **Arkistointitunnus** - ??
- **Viitenumero**
- **Maksajan nimi**
- **Info** - jos tässä kentässä lukee muuta kuin OK, suoritus on virheellinen
- **Käsitelty info** - Tähän kenttään pitää kirjoittaa tietoa suorituksen korjauksen yhteydessä, jotta ohjelma lukee sen käsitellyksi

**Tyhjennä hakuehdot** -painike poistaa aiemmin valitut hakukriteerit.

**Tuo suorituksia** –painikkeella voidaan siirtää palveluun esim. Excel taulukosta kopioituna aineistoa
- **Näytä esikatselussa** -painikkeesta aineisto käsitellään ja näytetään mahdolliset toimenpiteet
- **Lue aineisto sisään suorituksiin** -painikkeesta suoritukset käsitellään ja niihin liitetyt laskut kuitataan maksetuiksi

![Suoritukset](/img/ohjeet/suoritukset3.png)

**Kohdistusraportti** -painike luo linkin josta voit ladata viitemaksujen kohdistusraportin.

![Suoritukset](/img/ohjeet/suoritukset6.png)

**Tiedot Exceliin** -painike luo linkin josta voit ladata suoritukset Exceliin.

![Suoritukset](/img/ohjeet/suoritukset7.png)

Painamalla **Hae Paytrail -viitteellä** muodostuu uusi kenttä, jonka kautta voit hakea suorituksia Paytrail-viitteellä. 

![Suoritukset](/img/ohjeet/suoritukset8.png)

Suoritukset luetaan ja tiliöidään (Suoritus/Kuittaus) laskuille automaattisesti pankkiaineiston sisäänluvun yhteydessä
- Mahdolliset **virheet korjataan manuaalisesti** kyseiselle laskulle, johon suoritus liittyy (Esim. Tiliöinnit puuttuu / Summat eivät täsmää jne.)

**Suoritukset**-listauksella näkyy myös mahdolliset korttimaksut, jotka ovat **VismaPayn/Paytrailin** provisiomaksuja. Ne voivat kuitenkin sisältää useamman yksittäisen provision (koonti), joten niitä ei voi suoraan tiliöidä (ohjelmallisesti) yksittäisille laskuille, koska sitä varten tarvitaan LaskuID numerot.

Esimerkiksi PayTrailillä on oma käyttöliittymänsä, josta asiakas voi nähdä nämä koontisuoritukset ja niiden kautta kaikki sen sisältävät yksittäiset suoritukset (joissa LaskuIDt mainittuina).

Jos halutaan seurata yksittäisiä/laskukohtaisia provisioita (esim. raporteilla), tulee ne manuaalisesti tiliöidä kyseisille laskuille.

### Virheellisten suorituksien haku

Hakukenttien alapuolella on kenttä **Hae vain käsittelyä vaativat**, jonka **aktivointi piilottaa** listaukselta kaikki ne suoritukset
- jotka on liitetty laskulle **virheettöminä** (saapuneesta pankkiaineistoista)
- jotka on **manuaalisesti** lisätty laskuille (käyttäjän tekemät) 

Hakulistauksella **näytetään** (aktivoinnin ollessa päällä)
- kaikki ne suoritukset joissa **Info** -sarakkeessa ei lue OK (onnistunut suoritus)
- joissa **EI OLE** mitään tekstiä **Käsitelty info** -sarakkeessa

![Suoritukset](/img/ohjeet/suoritukset2.png)

Virheellisten suorituksien käsittelyssä pitää merkitä **Käsitelty info** -kenttään **tietoa** (esim. **OK** ja muuta lisäselvennystä), että ohjelma lukee suorituksen korjattuna/käsiteltynä.

### Suorituksen korjaaminen

![Suoritukset](/img/ohjeet/suoritukset5.png)

**Suoritukset** –välilehden listauksen **SuoritusID**–sarakkeen numerotietoa klikkaamalla pääsee **käsittelemään** kyseistä suoritusta:
1. **Poistamaan** kyseisen suorituksen
2. **Muuttamaan** suorituksen tiliöintitiliä

![Suoritukset](/img/ohjeet/suoritukset4.png)

Suoritukset–välilehden listauksen **Laskun nro / Tiliöinnit** –sarakkeiden tietoja klikkaamalla pääsee siirtymään kyseiselle laskulle ja
- **Muokkaamaan** kyseistä laskua
- **Lisäämään/Liittämään** tiliöintejä laskulle

Luo lisää laskujen muokkaamisesta <a href="https://taikatilaus.github.io/docs/ohjeet/yleiset_ominaisuudet/lasku">täältä.</a>

### Esimerkki suorituksen korjaamisesta

/// kuvat 

Käsiteltäviä **Suorituksia** voi hakea mm.
- **Suoritukset**–listauksen avulla
- **Raportit** / Tarkastusraportit - **Suoritukset joiden tiliöinneissä virheitä** –raportin avulla

**Suoritukset** –välilehden listauksen **Laskun nro** –sarakkeen numerotietoa klikkaamalla pääsee **muokkaamaan** kyseistä laskua

Esim. **Lisäämään** kyseisen suorituksen tiliöinnin ko. laskulle
- Jos asiakas on **maksanut vain osan** laskun summasta
- Liitetään/lisätään suoritus **vastaavalla summalla** (S/K) tiliöinneiksi

Ko. Laskun **voi lähettää asiakkaalle** sähköpostilla tai tulosteena kirjeitse
- Laskulomakkeen yläosassa on alkup. maksutiedot
- Pankkisiirto-osan Summa–kentässä on **Maksamatta**-summa

