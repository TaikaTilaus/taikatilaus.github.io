---
sidebar_position: 3
---

# Suoritukset

## Yleistä suorituksista

### Suoriteperusteinen kirjanpito

Palvelussa käytetään **suoriteperusteista kirjanpitoa**, jossa kulut ja tulot kirjataan kirjanpitoon sen mukaan, milloin ne syntyvät – eli **laskupäivän perusteella**.

- esim. myyntilasku, joka tehdään tammikuun lopussa ja maksetaan maaliskuun alussa
- Tämä myynti näkyy tuloslaskelmassa suoriteperusteisesti tammikuussa (eikä maaliskuussa kuten maksuperusteisesti)

Suoriteperusteisessa kirjanpidossa kulu kirjataan

- laskupäivän mukaan **kulutilin debitteihin** ja **ostovelkojen kreditteihin**
- Myöhemmin, **kun lasku maksetaan** kirjaus menee **pankkitilin kreditteihin ja ostovelkojen debitteihin**
- Maksun yhteydessä ostovelat siis nollautuvat

**Myyntien** osalta kirjaukset menevät samalla logiikalla, mutta **debitit ja kreditit ovat päinvastaiset**

- Myyntilasku kirjataan laskun päivämäärän mukaan kredittiin (esim. 1502 Lehtitilaussaamiset TaikaVakka) ja myyntisaamisten (saamiset asiakkailta) debittiin (esim. 30090 Suomi vuositilaus TaikaVakka alv 10% ja 2470 Myynnin 10% ALV-velka)
- Myöhemmin, kun asiakas suorittaa laskun pankkitilille, kirjaus menee pankkitilin debittiin (esim. 1710 Nordea) ja myyntisaamisten kredittiin (esim. 1502 Lehtitilaussaamiset TaikaVakka)
- Suorituksen yhteydessä myyntisaamiset siis nollautuvat

![Suoritukset esimerkki](/img/ohjeet/tiliointi.png)
*Esimerkki suorituksista*

---

## Suoritukset-välilehti

**Suoritukset**–välilehdellä tarkastellaan sovellukseen tulevia maksuja. Suorituksia voi myös luoda itse esimerkiksi tilanteessa, jossa asiakas on maksanut laskun paikan päällä käteisellä. Tämä tehdään yksittäisen laskun kautta **Lisää suoritus** -painikkeella.

![Suoritukset](/img/ohjeet/suoritukset.png)

---

### Suoritusten haku

**Hae**–painike hakee kaikki saapuneet suoritukset listalle.

Voit myös rajata hakutuloksia eri hakuehdoilla:

- **SuoritusID** – suorituksen yksilöivä numero  
- **AineistoID** – pankista haettujen viitemaksujen aineiston numero (vaihtuu joka yö)  
- **Pankkitilin numero** – tili, jolle maksu on saapunut  
- **Laskun numero** – suoritukseen liittyvän laskun numero TaikaTilauksessa  
- **Laskun kirjauspäivä** – päivä, jolloin suoritus on kirjattu  
- **Maksupäivä** – päivä, jolloin lasku on maksettu
- **Arkistointitunnus** - Pankin antama yksilöllinen tunniste, jonka avulla maksutapahtuma löytyy tarvittaessa pankin arkistointijärjestelmästä. Tunnus näkyy sekä laskuttajan että maksajan tiliotteilla, ja sitä käytetään mahdollisissa maksujen selvittelytilanteissa.
- **Viitenumero** - suoritukseen littyvän laskun viitenumero
- **Maksajan nimi** – maksajan nimi (voi näkyä virheellisesti, jos sisältää ääkkösiä)  
- **Info** – jos kentässä on muu kuin *OK*, suoritus on virheellinen  
- **Käsitelty info** – tähän kenttään kirjoitetaan tieto suorituksen korjauksesta, jotta ohjelma merkitsee sen käsitellyksi

**Tyhjennä hakuehdot** -painike poistaa kaikki valitut hakukriteerit.

![Suoritukset](/img/ohjeet/suoritukset.png)

---

### Painikkeet

**Tuo suorituksia** –painikkeella voidaan siirtää palveluun aineistoa esimerkiksi Excel-taulukosta kopioituna.

![Suoritukset](/img/ohjeet/tuosuorituksia.png)

    - **Näytä esikatselussa** – aineisto käsitellään ja näytetään mahdolliset toimenpiteet  
    - **Lue aineisto sisään suorituksiin** – suoritukset käsitellään ja niihin liitetyt laskut kuitataan maksetuiksi

![Suoritukset](/img/ohjeet/suoritukset3.png)

**Kohdistusraportti** –painike luo linkin, josta voit ladata viitemaksujen kohdistusraportin.

![Suoritukset](/img/ohjeet/suoritukset6.png)

**Tiedot Exceliin** –painike luo linkin, josta voit ladata suoritukset Excel-tiedostona.

![Suoritukset](/img/ohjeet/suoritukset7.png)

Painamalla **Hae Paytrail -viitteellä** avautuu uusi kenttä, jonka kautta voit hakea suorituksia Paytrail-viitteellä.

![Suoritukset](/img/ohjeet/suoritukset8.png)

---

### Suoritusten tiliöinti

Suoritukset luetaan ja tiliöidään laskuille automaattisesti pankkiaineiston sisäänluvun yhteydessä:

- Mahdolliset **virheet korjataan manuaalisesti** kyseisen laskun tiliöinteihin  
  *(esim. puuttuvat tiliöinnit, täsmäämättömät summat jne.)*

**Suoritukset**-listauksessa näkyvät myös mahdolliset korttimaksut, jotka ovat **VismaPayn/Paytrailin provisiomaksuja**. Nämä voivat sisältää useita yksittäisiä provisioita (koontisuoritus), joten niitä ei voi tiliöidä automaattisesti yksittäisille laskuille, koska laskukohtaisia LaskuID-numeroita ei ole käytettävissä.

Paytraililla on oma käyttöliittymä, jossa asiakas voi nähdä koontisuoritukset ja niiden sisältämät yksittäiset suoritukset (LaskuID-numeroineen).

Jos halutaan seurata provisioita laskukohtaisesti (esim. raporteilla), ne tulee **tiliöidä manuaalisesti** oikeille laskuille.

---

### Virheellisten suorituksien haku

Hakukenttien alapuolella on kenttä **Hae vain käsittelyä vaativat**, jonka **aktivointi piilottaa** listaukselta kaikki suoritukset:

- jotka on liitetty laskulle **virheettöminä** (saapuneesta pankkiaineistosta)
- jotka on **manuaalisesti** lisätty laskuille (käyttäjän tekemät suoritukset)

Hakulistauksella **näytetään** (aktivoinnin ollessa päällä):

- kaikki suoritukset, joissa **Info**-sarakkeessa ei lue *OK* (eli suoritus ei ole onnistunut)
- suoritukset, joissa **Käsitelty info** -sarakkeessa **ei ole** mitään tietoa

![Suoritukset](/img/ohjeet/suoritukset2.png)

Virheellisten suoritusten käsittelyssä tulee merkitä **Käsitelty info** –kenttään **selite** (esim. *“OK – liikasuoritus palautettu asiakkaalle”*), jotta ohjelma merkitsee suorituksen korjatuksi/käsitellyksi.

---

### Suorituksen korjaaminen

![Suoritukset](/img/ohjeet/suoritukset5.png)

**Suoritukset**-välilehden listauksen ensimmäisessä sarakkeessa olevaa **kynäkuvaketta** klikkaamalla avautuu suorituksen käsittely. Toiminnoissa voi:

1. **Muokata** suorituksen tietoja  
2. **Lähettää asiakkaalle sähköpostia** suoritukseen liittyen  
3. **Palauttaa liikasuorituksen**, jos [saldo ja rahanpalautus](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/saldo#virheellisten-suorituksien-k%C3%A4sittely) -toiminto on käytössä  
4. **Siirtää liikasuorituksen saldoksi**, jos saldo ja rahanpalautus -toiminto on käytössä  
5. **Poistaa suoritukseen liittyvät tiliöinnit**  
6. **Hyvittää suorituksen** – luo uuden suorituksen, jossa summat ovat päinvastaiset (käänteinen suoritus). Tätä käytetään tapauksessa, jossa suoritusta ei ole tullutkaan.

Virheellinen suoritus merkitään käsitellyksi kirjoittamalla **Käsitelty info** -kenttään selite siitä, mitä suoritukselle on tehty (esim. *“OK – liikasuoritus palautettu asiakkaalle”*).

![Suoritukset](/img/ohjeet/suoritukset4.png)

Suoritukset–välilehden listauksen **Laskun nro / Tiliöinnit** -sarakkeiden tietoja klikkaamalla pääset siirtymään kyseiselle laskulle, jossa voit:

- **Muokata** laskun tietoja  
- **Lisätä tai liittää tiliöintejä** laskulle  

Lue lisää laskujen muokkaamisesta [täältä](/docs/ohjeet/yleiset_ominaisuudet/lasku).

---

### Esimerkki suorituksen korjaamisesta

Käsiteltäviä **Suorituksia** voi hakea mm.
- **Suoritukset**–listauksen avulla
    - Aktivoimalla **Hae vain käsittelyä vaativat** -kentän (1) ja painamalla **Hae** (2)
- **Raportit** / Tarkastusraportit - **Suoritukset joiden tiliöinneissä virheitä** –raportin avulla

**Suoritukset** –välilehden listauksen **Laskun nro** –sarakkeen numerotietoa klikkaamalla (3) pääsee **muokkaamaan** kyseistä laskua

![Suoritukset](/img/ohjeet/suorituksen-korjaus.png)

Esim. **Lisäämään** kyseisen suorituksen tiliöinnin ko. laskulle
- Jos asiakas on **maksanut vain osan** laskun summasta
- Liitetään/lisätään suoritus **vastaavalla summalla** (S/K) tiliöinneiksi (4-7)

![Suoritukset](/img/ohjeet/suorituksen-korjaus2.png)

![Suoritukset](/img/ohjeet/suorituksen-korjaus3.png)

![Suoritukset](/img/ohjeet/suorituksen-korjaus8.png)

Ko. Laskun **voi lähettää asiakkaalle** sähköpostilla (8) tai tulosteena kirjeitse
- Laskulomakkeen yläosassa on alkup. maksutiedot (9)
- Pankkisiirto-osan Summa–kentässä on **Maksamatta**-summa (10)

![Suoritukset](/img/ohjeet/suorituksen-korjaus4.png)

![Suoritukset](/img/ohjeet/suorituksen-korjaus5.png)

Merkitse suoritus **käsitellyksi**:

- Siirry suorituksen käsitellyyn **Kynä-ikonista** (11)
- Kirjoita selitys **Käsitelty info** -kenttään (12)
- **Tallenna** (13)

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
- Tilausmyyntisaamiset (K) -35,00 € (kuittaa tämän osan laskun summasta maksetuksi)
- Maksamatta summaksi jää 15,00 €
- kyseinen lasku lähetetään uudelleen asiakkaalle (laskulla näkyy Maksamatta oleva summa)

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
- Alkuperäinen lasku 80,00 €, josta sovittu maksettavaksi 20,00 € kirjataan
- Pankkitilille (S) 0,00 €  
- Myyntisaamisiin (K) -20,00 €
- Kulutilille (oikaisutili) (T) -20,00 € 
- Maksamatta summaksi jää 60,00 €
- kyseinen lasku lähetetään uudelleen asiakkaalle (laskun Pankkisiirto-osiossa näkyy Maksamatta summa)

![Laskujen haku -välilehti](/img/ohjeet/osahyvitys.png)
*Suorituksen kirjaaminen*

![Laskujen haku -välilehti](/img/ohjeet/osahyvitys2.png)
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
