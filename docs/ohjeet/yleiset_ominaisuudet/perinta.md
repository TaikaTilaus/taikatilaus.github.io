---
sidebar_position: 3
---

# Perintä

<!-- ## Yleiset periaatteet

- Palvelun roolit:
    - TaikaTilaus (Asiakaspalvelu): Vastaa ohjelmistosta, tietokannasta ja automaatiosta.
    - Asiakas/Perintätoimisto: Vastaa rekisterin sisällöstä ja perintäprosessin päätöksistä, mukaan lukien perintäkulujen ja ohimaksujen käsittely.
- GDPR-vaatimukset: TaikaTilaus toimii tietojen käsittelijänä, ja asiakkaalla tai lehdellä on vastuu tallennetuista tiedoista. -->

## Prosessin vaiheet ja ohjeet

### Vaihe 1: Perinnän aloitus
- Perintäprosessin aktivointi:
    - Asiakas päättää perinnän käytöstä ja tekee sopimuksen halutun perintätoimiston kanssa.
    - Asiakas seuraa ja käsittelee erääntyneet laskut.

### Vaihe 2: Perintäaineistojen koonti

#### 1. tapa

Jos asiakkaalla **ei ole käytössä** [Katkaisukäsittely](https://support.taikatilaus.fi/docs/ohjeet/tilaustenhallinta/tilaukset#tilauksen-katkaisu-maksamattomana) -toimintoja
    
1. Valitse laskutyyppi asiakkaan käytön mukaisesti:
    - Jos käytössä on vain **Maksumuistutuslasku #1:**
        - Klikkaa **Hae maksumuistutettavat 2** -painiketta, jolloin automaattisesti listautuvat erääntyneet **Maksumuistutuslasku #1** laskut.
    - Jos käytössä on **Maksumuistutuslasku #2:**
        - Suodata laskut seuraavasti:
            - Laskun tila: **Erääntynyt**
            - Laskun muoto: **Maksum.#2**
2. Varmista listan oikeellisuus:
    - esim. kaupungit ja lehtivälittäjät eivät yleensä kuulu mukaan perittäviin.
3. Valitse perintään siirrettävät laskut joko painamalla **Valitse kaikki** -painiketta tai valitsemalla siirrettävät laskut yksitellen listasta.
4. Siirrä laskut perintään:
    - Klikkaa **Siirrä perintään**-painiketta vasta, kun lista on tarkistettu.

![Laskut-välilehti](/img/ohjeet/perinta4.png)
    
#### 2. tapa

Jos asiakkaalla **on käytössä** [Katkaisukäsittely](https://support.taikatilaus.fi/docs/ohjeet/tilaustenhallinta/tilaukset#tilauksen-katkaisu-maksamattomana) -toiminnot.

1. Suodata laskut:
    - Laskun tila: **Erääntynyt**
    - Laskun tarkenne: **toimitetut tuotteet**
2. Tarkista lista:
    - Varmista, että laskujen joukossa ei ole esimerkiksi kaupunkeja tai lehtivälittäjiä, jotka eivät yleensä kuulu perintään.
3. Valitse laskut:
    - Käytä **Valitse kaikki** -painiketta tai valitse laskut yksitellen.
4. Siirrä perintään:
    - Klikkaa **Siirrä perintään** -painiketta, kun lista on tarkistettu.

![Laskut-välilehti](/img/ohjeet/perinta5.png)

### Vaihe 3: Suoritusten hallinta ja tilauksien päivitys

#### Ohimaksujen ja osasuoritusten merkinnät

Lehti tai tilitoimisto hoitaa ohitus- tai osasuoritusten kirjaamisen.

**Ohimaksujen käsittely**:
    - Ilmoita ohimaksut perintätoimistolle sovitulla tavalla.
    - Kopioi alkuperäinen lasku ja liitä saapunut ohimaksu uudelle laskulle.
    - Ilmoita ohimaksun tiedot perintätoimistolle ja kirjaa ne kirjanpitoon.
    - Asiakkaan tulee huolehtia, että perintäkulut kirjataan oikein, vaikka ohimaksu tapahtuisi.

1. Ohimaksu tapahtuu
    - Jos tilaaja maksaa alkuperäisen laskun, eikä perinnäst lähetetyn laskun, johon kuuluu perintätoimistolle maksettavat perintäkulut:
        - Viitemaksuna (maksuun sisältyy viite)
        - Pelkkänä panona (ilman viitettä), jolloin maksu näkyy vain tiliotteella, eikä TaikaTilauksessa
2. Maksujen näkyvyys järjestelmässä
    - Viitemaksu näkyy näkymässä **Suoritukset / Käsittelyä vaativat suoritukset** (viiteaineistossa tulleet)
    - Ohimaksu jää virhelistalle, koska alkuperäinen lasku on merkitty tilaan **HYVITETTY**

![Laskut-välilehti](/img/ohjeet/perinta12.png)

3. Ohimaksun käsittely
    - Avaa **alkuperäinen lasku** (HYVITETTY-tilassa)
    - Kopioi lasku käyttäen **Luo laskusta kopio** -painiketta

![Laskut-välilehti](/img/ohjeet/perinta11.png)

    - Liitä saapunut ohisuoritus **uudelle laskukopiolle** käyttäen joko **Lisää uusi suoritus** tai **Liitä suoritus** -toimintoa
        - Käytä **Lisää uusi suoritus** -toimintoa, kun maksu on tullut panona, ilman viitettä
            - Lisää kopioidun laskun **Suorituksen Info** -kenttään tieto, esimerkiksi "Perinnän ohisuoritus"

![Laskut-välilehti](/img/ohjeet/perinta10.png)

        - Käytä **Liitä uusi suoritus** -toimintoa, kun maksu on tullut viitemaksuna

![Laskut-välilehti](/img/ohjeet/perinta9.png)


4. Tilauksen/-jakson voimassaolo
    - Jos laskua koskeva tilaus tai laskutusjakso on edelleen voimassa, tee seuraavat toimenpiteet:
        - Lisää uusi vastaava tilaus
        - Poista muodostunut laskutuspyyntö
        - Kirjaa tilauksen **Lisätiedot**-kenttään tiedot tehdyistä toimenpiteistä ja uuden (kopioidun) laskun numero, johon suoritus liitettiin
5. Ilmoitus perintätoimistolle
    - Ilmoita ohisuorituksista perintätoimistolle, jotta he voivat päättää perinnästä ja veloittaa tilaajalta maksamatta jääneet perintäkulut

**Osasuorituksen käsittely:**
    - Luo kopio alkuperäisestä laskusta ja lisää uusi osasuoritus.
    - Kirjaa tilin tiedot, maksupäivä, osamäärä sekä mahdollinen jäljellä oleva summa.
    - Varmista, että osasuoritukset näkyvät oikein laskun suorituksissa ja summatiedoissa.
    - Seuraa osasuorituksia kirjaamalla ne erilliseen seurantataulukkoon (esim. maksajan nimi, tilausnumero, laskunumero, laskun summa, maksettu osamäärä ja jäljellä oleva summa).

1. Ilmoitus perintätoimistolta:
    - Perintätoimisto ilmoittaa maksusta, joka voi kattaa joko koko laskun tai vain osan siitä, ja antaa alkuperäisen laskun numeron.
2. Laskun kopiointi:
    - Siirry kyseiselle laskulle ja luo siitä ensin kopio.

![Laskut-välilehti](/img/ohjeet/perinta11.png)

3. Osasuorituksen kirjaaminen kopioidulle laskulle:
    - Klikkaa laskulla olevaa **Lisää uusi suoritus** -painiketta.

![Laskut-välilehti](/img/ohjeet/perinta7.png)

    - Kirjaa seuraavat tiedot:
        - **Tili:** Mihin maksu on saapunut
        - **Maksupäivä:** Päivä, jolloin osamaksu on maksettu
        - **Osasumma:** Maksettu osuus laskun summasta (osa tai kokonainen suoritus)
        - **Selite ja lisätiedot:** Kirjaa selitteeseem ja lisätietoihin tieto siitä, että suoritus on tullut perinnän kautta

![Laskut-välilehti](/img/ohjeet/perinta8.png)

4. Seuranta:
    - Osasuoritukset, jotka liittyvät perinnässä oleviin laskuihin, kannattaa kirjata seurantaa varten esim. samaan perintäaineistotaulukkoon, joka on jo lähetetty perintätoimistolle.
        - Maksajan nimi ja asiakasnumero
        - Tilausnumero
        - Laskun numero
        - Laskun summa
        - Osamaksun määrä
        - Osamaksun kirjaus/maksupäivä
        - Jäljelle jäävän summan määrä

#### Luottotappioiden hallinta

- Luottotappioiksi kirjattavat laskut:
    - Mikäli lasku jää perimättä (esim. alle 10,00 €), kirjaa lasku luottotappioksi.
    - Käytä päätettyjä tilejä (Kassa-, myynti- ja kulutilit) luottotappiokirjauksissa.

1. Klikkaa **Lisää uusi suoritus** -painiketta.
2. Tiliöi laskun summa seuraavasti:
- **Pankkitili:** Merkitse "Kassa" -tilille 0,00 €
- **Myyntitili:** Käytä "Lehden myyntisaamiset" -tiliä ja kirjaa luottotappioksi jäävä summa esim. -1,91€
- **Kulutili**: Kirjaa asiakkaan "Luottotappio" -tilille ja kirjaa luottotappioksi jäävä summa esim. 1,91€

![Laskut-välilehti](/img/ohjeet/perinta6.png)

#### Poikkeustapaukset

- Aiheettomiksi päätettävät laskut:
    - Kirjaa asiakkaan ohjeiden mukaisesti, esimerkiksi muuttamalla laskun tilaa luottotappioksi.
    - Jos tilaus on perintään siirron yhteydessä katkaistu, älä muuta sitä, vaan luo tarvittaessa uusi tilaus.
- Asiakaskohtaiset ohjeet:
    - Perintään voi liittyä asiakaskohtaisia käytäntöjä, jotka itse päätätte

#### Tilausten jatkaminen perinnän jälkeen
    - Asiakas päättää itse jatketaanko tilauksia onnistuneen perinnän jälkeen

<!--  ### Vaihe 4: Raportointi
- Raporttien laatiminen:
    - Tuota automaattiset ja räätälöidyt raportit kirjanpitoa varten.
    - Raportoi perintään siirretyt laskut ja perintätoimiston tekemät toimenpiteet asiakalle säännöllisesti (esim. kuukausittain).-->


