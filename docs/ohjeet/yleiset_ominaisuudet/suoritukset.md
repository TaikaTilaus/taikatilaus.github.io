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
- **Pankkitilin numero** - tilin numero, jolle maksu on tullut
- **Laskun numero** - suoritukseen liittyvän laskun numero TaikaTilauksessa
- Laskun **kirjauspäivä** - päivä, jona suoritus on kirjattu
- **Maksupäivä** - päivä, jona lasku on maksettu
- **Arkistointitunnus** - Pankin antama yksilöllinen tunniste, jonka avulla maksutapahtuma löytyy tarvittaessa pankin arkistointijärjestelmästä. Tunnus näkyy sekä laskuttajan että maksajan tiliotteilla, ja sitä käytetään mahdollisissa maksujen selvittelytilanteissa.
- **Viitenumero** - suoritukseen littyvän laskun viitenumero
- **Maksajan nimi** - maksajan nimi (voi olla oudossa muodossa, jos sisältää ääkkösiä)
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
1. **Muuttamaan** suorituksen tietoja
2. **Lähettämään asiakkaalle sähköpostia suoritukseen liittyen** 
3. **Palauttamaan liikasuorituksen**, jos teillä on [saldo ja rahanpalautus](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo#virheellisten-suorituksien-k%C3%A4sittely) -toiminto käytössä
4. **Siirtämään liikasuorituksen saldoksi**, jos teillä on [saldo ja rahanpalautus](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo#virheellisten-suorituksien-k%C3%A4sittely) -toiminto käytössä
5. **Poistamaan suoritukseen liittyvät tiliöinnit**
6. **Hyvittämään suorituksen** - luo uuden suorituksen, minkä summatiedot ovat päinvastoin

Virheellisen suorituksen voi merkata käsitellyksi kirjoittamalla **Käsitelty info** -kenttään tietoa siitä, mitä virheelliselle suoritukselle on tehty. (esim. "OK - liikasuoritus palautettu asiakkaalle")

![Suoritukset](/img/ohjeet/suoritukset4.png)

Suoritukset–välilehden listauksen **Laskun nro / Tiliöinnit** –sarakkeiden tietoja klikkaamalla pääsee siirtymään kyseiselle laskulle ja
- **Muokkaamaan** kyseistä laskua
- **Lisäämään/Liittämään** tiliöintejä laskulle

Luo lisää laskujen muokkaamisesta [täältä](/docs/ohjeet/yleiset_ominaisuudet/lasku).

### Esimerkki suorituksen korjaamisesta

Käsiteltäviä **Suorituksia** voi hakea mm.
- **Suoritukset**–listauksen avulla
    - Aktivoimalla **Hae vain käsittelyä vaativat** -kentän (1) ja painamalla **Hae** (2)
- **Raportit** / Tarkastusraportit - **Suoritukset joiden tiliöinneissä virheitä** –raportin avulla

**Suoritukset** –välilehden listauksen **Laskun nro** –sarakkeen numerotietoa klikkaamalla (3) pääsee **muokkaamaan** kyseistä laskua

![Suoritukset](/img/ohjeet/suorituksen-korjaus.png)

Esim. **Lisäämään** kyseisen suorituksen tiliöinnin ko. laskulle
- Jos asiakas on **maksanut vain osan** laskun summasta
- Liitetään/lisätään suoritus **vastaavalla summalla** (S/K) tiliöinneiksi (4-5)

![Suoritukset](/img/ohjeet/suorituksen-korjaus2.png)

![Suoritukset](/img/ohjeet/suorituksen-korjaus3.png)

Ko. Laskun **voi lähettää asiakkaalle** sähköpostilla (6) tai tulosteena kirjeitse
- Laskulomakkeen yläosassa on alkup. maksutiedot (7)
- Pankkisiirto-osan Summa–kentässä on **Maksamatta**-summa (8)

![Suoritukset](/img/ohjeet/suorituksen-korjaus4.png)

![Suoritukset](/img/ohjeet/suorituksen-korjaus5.png)

Merkitse suoritus **käsitellyksi**:

- Siirry suorituksen käsitellyyn **SuoritusID**:stä (9)
- Kirjoita selitys **Käsitelty info** -kenttään (10)
- **Tallenna** (11)

Suoritus poistuu täten käsiteltävistä suorituksista.

![Suoritukset](/img/ohjeet/suorituksen-korjaus6.png)

![Suoritukset](/img/ohjeet/suorituksen-korjaus7.png)

## Esimerkkejä laskun tiliöintien muokkauksesta

Tiliöintejä/suorituksia voi lisätä laskulle **Lisää tiliöinti laskulle** - ja **Lisää uusi suoritus** -painikkeista.

![Suoritukset](/img/ohjeet/suoritukset9.png)

### Maksumuistutuksen lisämaksun kirjaaminen laskun tiliöinteihin:
- Maksettu 50,00 €, Lasku 45,00 €, Maksumuistutus 5,00 € kirjataan
- Pankkitilille (S) +50,00 €
- Tilausmyyntisaamiset (K) -45,00 € (kuittaa laskun maksetuksi)
- Muistutusmaksu-tilille (K) -5,00 €

![Suoritukset](/img/ohjeet/mamu.png)
*Maksumuistutus on erillisenä tuotteena laskulla ja sillä on omat tiliöinnit.*

![Suoritukset](/img/ohjeet/mamu2.png)
*Kun kirjaat suoritusta, paina **Näytä lisää tiliöintejä** -painiketta, jotta saat toisen myyntitilin näkyviin.*

![Suoritukset](/img/ohjeet/mamu3.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/mamu4.png)
*Summa suorituksen kirjauksen jälkeen*

### Maksamattoman Maksumuistutuksen kirjaaminen laskun tiliöinteihin:
- Maksettu 45,00 €, Lasku 45,00 € + 5,00 € Maksumuistutus kirjataan
- Pankkitilille (S) +45,00 €
- Tilausmyyntisaamiset (K) -50,00 € (kuittaa laskun maksetuksi)
- Muistutusmaksu-tilille (T) +5,00 €

![Suoritukset](/img/ohjeet/suoritukset24.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/suoritukset25.png)
*Summa suorituksen kirjauksen jälkeen*

### Liian vähän maksetun summan kirjaaminen laskun tiliöinteihin ja uusi lasku:
- Maksettu 35,00 €, Lasku 50,00 € kirjataan
- Pankkitilille (S) +35,00 €
- Tilausmyyntisaamiset (K) -35,00 € (kuittaa laskun maksetuksi)
- Maksamatta summaksi jää 15,00 €
- ko. lasku lähetetään uudelleen asiakkaalle (Pankkisiirto-osassa näkyy Maksamatta summa)

![Suoritukset](/img/ohjeet/suoritukset10.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/suoritukset11.png)
*Summa suorituksen kirjauksen jälkeen*

### Liian vähän maksetun summan kirjaaminen laskun tiliöinteihin ja laskun kuittaaminen maksetuksi:
- Maksettu 35,00 €, Lasku 50,00 € kirjataan
- Pankkitilille (S) +35,00 €
- Tilausmyyntisaamiset (K) -50,00 € (kuittaa laskun maksetuksi)
- Oikaisu -tilille (T) +15,00 € (tai Luottotappio -tilille jos loppuosaa ei haluta periä asiakkaalta)

![Suoritukset](/img/ohjeet/suoritukset12.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/suoritukset13.png)
*Summa suorituksen kirjauksen jälkeen*

### Liian suuren summan kirjaaminen ja maksu takaisin asiakkaalle:
- Asiakas maksanut 80,00 €, vaikka Lasku oli 50,00 € korjataan
- Pankkitilille (S) +80,00 €
- Myyntisaamisiin (K) -50,00 € (kuittaa laskun maksetuksi)
- Pankki-/Kulu-/Oikaisutililtä (T) -30,00 € (tili määräytyy tilitston mukaisesti)
- Kirjanpidossa (esim. tilitsto) maksetaan takaisin asiakkaan tilille +30,00 €

![Suoritukset](/img/ohjeet/suoritukset14.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/suoritukset15.png)
*Summa suorituksen kirjauksen jälkeen*

### Kahdesti maksetun summan kirjaaminen ja ylimääräinen maksu takaisin asiakkaalle:
- Asiakas maksanut yhteensä 80,00 €, vaikka Lasku oli 40,00 € korjataan
- Pankkitilille (S) +80,00 €
- Myyntisaamisiin (K) -40,00 € (kuittaa laskun maksetuksi)
- Pankki-/Kulu-/Oikaisutililtä (T) -40,00 € (tili määräytyy tilitston mukaisesti)
- Kirjanpidossa (esim. tilitsto) maksetaan takaisin asiakkaan tilille +40,00 €

![Suoritukset](/img/ohjeet/suoritukset16.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/suoritukset17.png)
*Summa suorituksen kirjauksen jälkeen*

### Laskun osittaisen maksun kirjaaminen ja loppuosan maksu takaisin asiakkaalle.
- Kun asiakas on maksanut koko laskun 103,00 €, mutta peruutuksen jälkeen laskutetaan vain jo jaetut lehdet 94,00 €:
- Pankkitilille (S) +103,00 €
- Myyntisaamisiin (K) -94,00 €
- Pankki-/Kulu-/Oikaisutililtä (T) -9,00 € (tili määräytyy tilitston mukaisesti)
- Kirjanpidossa (esim. tilitsto) maksetaan takaisin asiakkaan tilille +9,00 €

### Koko laskun takaisinmaksun kirjaaminen ja maksu takaisin asiakkaalle:
- Asiakas maksanut 100,00 €, mutta esim. peruuttaakin koko tilauksen
- Tehdään hyvityslasku koko laskusta (ohje kohdassa [Hyvityslaskun luonti ja poistaminen](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/lasku#hyvityslaskun-luonti-ja-poistaminen))
- Pankkitilillä näkyy Suoritus +100,00 €
- Kirjanpidossa (esim. tilitsto) maksetaan takaisin asiakkaan tilille -100,00 €
- Hyvityslasku on kuitannut laskun maksetuksi palvelussa (Maksettu 0,00 €)

![Suoritukset](/img/ohjeet/hyvityslasku.png)
*Hyvityslasku luodaan painamalla **Luo hyvityslasku** -painiketta*

![Suoritukset](/img/ohjeet/hyvityslasku2.png)
*Hyvityslaskun summa ja tiliöinnit ovat vastakkaisia kuin alkuperäisen laskun.*

### Osahyvityksen kirjaaminen laskun tiliöinteihin:
- Alkuperäinen lasku 100,00 €, josta sovittu maksettavaksi 80,00 € kirjataan
- Pankkia vastaava Kuittaustili (S) 20,00 €
- Myyntisaamisiin (K) -20,00 € (kuittaa hyvityksen laskulta maksetuksi)
- Maksamatta summaksi jää 80,00 €
- ko. lasku lähetetään uudelleen asiakkaalle (Pankkisiirto-osassa näkyy Maksamatta summa)

![Suoritukset](/img/ohjeet/suoritukset19.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/suoritukset20.png)
*Summa suorituksen kirjauksen jälkeen*

### Osasuorituksen kirjaaminen laskun tiliöinteihin:
- Alkuperäinen lasku 100,00 €, josta maksettu vain 80,00 € kirjataan
- Pankkitilille (S) +80,00 €
- Myyntisaamisiin (K) -80,00 € (kuittaa osasuorituksen laskulta maksetuksi)
- Maksamatta summaksi jää 20,00 €

![Suoritukset](/img/ohjeet/suoritukset21.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/suoritukset22.png)
*Summa suorituksen kirjauksen jälkeen*

### (kokonaan) Maksamatta jääneen laskun kirjaaminen:
- Asiakkaan alkuperäinen Lasku oli 50 € kirjataan
- Pankkitilille (S) +0,00 €
- Myyntisaamisiin (K) -50,00 € (kuittaa laskun maksetuksi)
- Luottotappiot (T) +50,00 €

![Suoritukset](/img/ohjeet/luottotappio.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/luottotappio2.png)
*Summa suorituksen kirjauksen jälkeen*

### Paytrail provision kirjaaminen laskun tiliöinteihin:
- Asiakas maksanut 50,00 €, mutta Paytrail tilittänyt 48,50 € kirjataan
- Pankkitilille (S) +48,50 €
- Myyntisaamisiin (K) -50,00 € (kuittaa laskun maksetuksi)
- Pankkikulutililtä (T) +1,50 €

![Suoritukset](/img/ohjeet/paytrail.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/paytrail2.png)
*Summa suorituksen kirjauksen jälkeen*

### Useampi (erilliset laskut) maksettu yhdellä laskulla ja niiden kirjaaminen yksittäisten laskujen tiliöinteihin:

Esim. **Lasku 1** 100,00€ / **Lasku 2** 50,00€ / **Lasku 3** 150,00€

**Lasku 1:lle** 300,00 € kirjataan

- Pankkitilille (S) +300,00 €
- Tilausmyyntisaamiset (K) -100,00 € (kuittaa laskun maksetuksi)
- Siirto-/Kuittaustilille (T) -50,00 € (Lasku2) (esim. Oikaisutili)
- Siirto-/Kuittaustilille (T) -150,00 € (Lasku3) (esim. Oikaisutili)

![Suoritukset](/img/ohjeet/koontilasku.png)
*Kun kirjaat suoritusta, paina **Näytä lisää tiliöintejä** -painiketta, jotta saat toisen kulutilin näkyviin.*

![Suoritukset](/img/ohjeet/koontilasku2.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/koontilasku3.png)
*Summa suorituksen kirjauksen jälkeen*

**Lasku 2:lle** 50,00 € kirjataan

- Pankkitilille (S) 0,00 €
- Tilausmyyntisaamiset (K) -50,00 €
- Siirto-/Kuittaustilille (S) 50,00 € (esim. Oikaisutili)

![Suoritukset](/img/ohjeet/koontilasku4.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/koontilasku5.png)
*Summa suorituksen kirjauksen jälkeen*

**Lasku 3:lle** 150,00 € kirjataan

- Pankkitilille (S) 0,00 €
- Tilausmyyntisaamiset (K) -150,00 €
- Siirto-/Kuittaustilille (S) 150,00 € (esim. Oikaisutili)

![Suoritukset](/img/ohjeet/koontilasku6.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/koontilasku7.png)
*Summa suorituksen kirjauksen jälkeen*

### Ennakkomaksun kirjaaminen laskun tiliöinteihin:
- Maksettu 65,00 €, tulossa olevasta Laskusta kirjataan (sallittua vain saman kuukauden aikana)
- Kuittaustilille (S) +65,00 €
- Tilausmyyntisaamiset (K) -65,00 € (kuittaa laskun maksetuksi)
- Infokenttään esim. "Ennakkomaksu"

![Suoritukset](/img/ohjeet/ennakkomaksu.png)
*Suorituksen kirjaaminen*

![Suoritukset](/img/ohjeet/ennakkomaksu2.png)
*Summa suorituksen kirjauksen jälkeen*

<!-- #### Malli ennakkomaksun tiliöintien korjauksesta

**Raportit** –näkymän

**Tarkistusraportit / Laskujen pikatiliöintivirheet** –raporttipohjaan ajetaan automaattisesti tiliöintitiedot nopeaa raportointia varten
- Samassa yhteydessä tarkistetaan tiliöintien oikeellisuus ja virheet kirjataan laskulle
- Virheelliset laskut saa haettua tämän raportin avulla ja niiden tiliöinnit tulisi korjata ennen kirjanpitoraporttien ottamista (esim. Reskontraluettelo)

Tiliöintivirhe voi liittyä esim. ’ennakkomaksuun’, jossa asiakas on maksanut suorituksen pankkitilille ennen alkup. laskun luontia
- jolloin Laskun päivä on ’suurempi’ kuin Suorituksen kirjauspäivä esim. Laskun päivä 05.03.2022 ja Suorituspäivä 28.02.2022

Tiliöinnit tulee korjata laskulle muuttamalla
- **Laskun tiedot / Laskun päivä** –kentän päiväys samaksi kuin saapuneen **Suorituksen kirjauspäivä**
- ja **Tallenna**
 -->
