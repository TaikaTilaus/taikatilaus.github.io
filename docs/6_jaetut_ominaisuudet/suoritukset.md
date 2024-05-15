---
sidebar_position: 3
---

# Suoritukset

## Yleistä suorituksista

Suoritukset–välilehdellä tarkastellaan sovellukseen tulevia maksuja

Hae –painike hakee kaikki saapuneet Suoritukset listaukselle

Tyhjennä hakuehdot -painike poistaa aiemmin valitut hakukriteerit

Tuo suorituksia –painikkeella voidaan siirtää palveluun esim. Excel taulukosta kopioituna aineistoa
- Näytä esikatselussa -painikkeesta aineisto käsitellään ja näytetään mahdolliset toimenpiteet
- Lue aineisto sisään suorituksiin -painikkeesta suoritukset käsitellään ja niihin liitetyt laskut kuitataan maksetuiksi

Suoritukset luetaan ja tiliöidään (Suoritus/Kuittaus) laskuille automaattisesti pankkiaineiston sisäänluvun yhteydessä
- Mahdolliset virheet korjataan manuaalisesti ko. laskulle, johon suoritus liittyy (Esim. Tiliöinnit puuttuu / Summat eivät täsmää jne.)

Hakulistauksella näytetään (aktivoinnin ollessa päällä)
- kaikki ne suoritukset joissa on Info -sarakkeessa jotain tekstiä
- joissa EI OLE mitään tekstiä Käsitelty info -sarakkeessa 

Hakukenttien alapuolella on kenttä Hae vain käsittelyä vaativat, jonka aktivointi piilottaa listaukselta kaikki ne suoritukset
- jotka on liitetty ko. laskulle virheettöminä (saapuneesta pankkiaineistoista)
- jotka on manuaalisesti lisätty laskuille (käyttäjän tekemät) 

Virheellisten käsittelyssä pitää merkitä Käsitelty info -kenttään tietoa (esim. OK ja/tai muuta lisäselvennystä), että rajaustoiminto toimii suunnitellusti

Suorituksia voi myös itse luoda esim. käteismaksun tilanteessa Lisää suoritus –painikkeen avulla

Suoritukset –välilehden listauksen SuoritusID –sarakkeen numerotietoa klikkaamalla pääsee Lisäämään/korjaamaan kyseistä suoritusta
1. Poistamaan kyseisen suorituksen
2. Muuttamaan suorituksen tiliöintitiliä

Suoritukset –välilehden listauksen Laskun nro / Tiliöinnit –sarakkeiden numerotietoa klikkaamalla pääsee siirtymään ko. laskulle ja
- Muokkaamaan kyseistä laskua
- Lisäämään/Liittämään tiliöintejä laskulle

## Suorituksen kohdistus laskulla

Käsiteltäviä Suorituksia voi hakea mm.
- Suoritukset –listauksen avulla
- Raportit / Tarkastusraportit - Suoritukset joiden tiliöinneissä virheitä –raportin avulla

Suoritukset –välilehden listauksen Laskun nro –sarakkeen numerotietoa klikkaamalla pääsee muokkaamaan kyseistä laskua

Esim. Lisäämään kyseisen suorituksen tiliöinnin ko. laskulle
- Jos asiakas on maksanut vain osan laskun summasta
- Liitetään/lisätään suoritus vastaavalla summalla (S/K) tiliöinneiksi

Ko. Laskun voi lähettää asiakkaalle sähköpostilla tai tulosteena kirjeitse
- Laskulomakkeen yläosassa on alkup. maksutiedot
- Pankkisiirto-osan Summa –kentässä on Maksamatta -summa

Suoritukset -listauksella näkyy myös mahdolliset korttimaksut, jotka ovat VismaPayn/Paytrailin provisiomaksuja. Ne voivat kuitenkin sisältää useamman yksittäisen provision (koonti), joten niitä ei voi suoraan tiliöidä (ohjelmallisesti) yksittäisille laskuille, koska sitä varten tarvitaan LaskuID numerot.

Esimerkiksi PayTrailillä on oma käyttöliittymänsä, josta asiakas voi nähdä nämä koontisuoritukset ja niiden kautta kaikki sen sisältävät yksittäiset (joissa LaskuIDt mainittuina).

Jos halutaan seurata yksittäisiä/laskukohtaisia provisioita (esim. raporteilla), tulee ne manuaalisesti tiliöidä ko. laskuille.