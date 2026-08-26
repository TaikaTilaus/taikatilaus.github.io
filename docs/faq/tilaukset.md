---
sidebar_position: 1
---

# Tilaukset

### Onnistuuko tilauksen väliaikainen keskeyttäminen?

Kyllä, asiakaskortille määritellään haluttu keskeytysaikaväli, jonka ohjelma huomioi postitusaineistoja luotaessa ja jatkaa tilausta automaattisesti keskeytyspäivämäärän jälkeen.

<a href="../pikaohjeet/jakelun-keskeytys">Lue pikaohje</a>

### Kuinka lisään väliaikaisen osoitteen tilaukselle?

Asiakaskortille määritellään väliaikainen osoite ja haluttu siirtoaikaväli, jolloin lehti halutaan ko. osoitteeseen. Ohjelma huomioi tiedot postitusaineistoja luotaessa ja siirtää tilauksen automaattisesti takaisin vakio-osoitteeksi päättymispäivämäärän jälkeen.

<a href="../pikaohjeet/valiaikainen-osoitteenmuutos">Lue pikaohje</a>

### Kuinka lisään osoitteenmuutoksen tulevaisuuteen?

Asiakaskortille määritellään uusi osoite ja siirtopäivä, jolloin lehti halutaan ko. osoitteeseen. Ohjelma huomioi tiedot postitusaineistoja luotaessa ja päivittää uuden osoitteen vakio-osoitteeksi.

<a href="../pikaohjeet/osoitteenmuutos">Lue pikaohje</a>

### Kun tilaus syötetään, tuleeko automaattitarjontana varhaisjakelu?

Jakelu menee automaattisesti tallennetun vakio-osoitteen mukaisesti. Jos se löytyy Varhaisjakelun rekisteristä, niin jaetaan silloin, mutta voidaan myös tarvittaessa pakottaa Päiväjakeluun.

<a href="../pikaohjeet/varhaisjakelun-esto">Lue pikaohje.</a>

### Pysyvätkö jakelun kohdistustiedot asiakaskohtaisesti, kun varhaisjakelualueella oleva tilaus on haluttu päiväpostin kantoon?

Kyllä, meillä on niin sanottu Pakotettu nippu-kenttä, jolla asiakaskohtaisesti voidaan ohittaa normirekisterit ja pakottaa lehti haluttuun/tiettyyn nippuun, vaikka osoite kuuluisi rekisterin mukaan muualle.

### Kuinka lisään ilmaisia lehtiä tilaukselle?

Tilaukselle saadaan lisälehtiä pidentämällä olemassa olevan tilauksen loppupäivämäärää sovitusti. Katso alta ohjevideo:

<div class="ratio ratio-16x9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4i9R_Pw-PIc?si=y4ASXbL2bdqMnE-z"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
</div>

<a href="../pikaohjeet/tilausjakson-pidentaminen"> Tai lue pikaohje</a>

### Voinko lisätä jälkikäteen tilaukselle eri maksajan?

Kyllä, tilauslomakkeelta löytyy erillinen painike maksajan valintaan, mikäli maksaja on eri kuin tilaaja.

<a href="../pikaohjeet/eri-maksaja">Lue pikaohje</a>

### Saako tilauksille merkittyä Asiamieskoodin?

Kyllä, Asiamiesnumeron saa lisättyä tilauslomakkeen "Viitteenne" -kenttään ja samalla asiakasrekisteristä haetaan tilauksen maksajaksi asiamiehen tiedot (tarkemmat ohjeet maksajan lisäykseen yllä).

<a href="../pikaohjeet/asiamieskoodin-lisays">Lue pikaohje</a>

### Voiko olemassa olevaan tuotteeseen tehdä hinnan muutoksia?

Kyllä, Asetuksien kautta voi kaikkia tuotteiden tietoja muuttaa. Esim. hinnanmuutos astuu voimaan tallennushetkellä, mutta ei vaikuta jo luotuihin tilauksiin, joissa sitä on käytetty.

<a href="../pikaohjeet/tuotteen-hinnanmuutos">Lue pikaohje</a>

### Miten palautan rahat tilaukseen, joka on maksettu koontilaskulla?

Rahat voi palauttaa [Maksetun tilauksen katkaisu](/docs/pikaohjeet/maksetun-tilauksen-katkaisu) -toiminnolla. Palautettavaa summaa on kuitenkin muokattava vastaamaan yksittäisen tilauksen hintaa ja kestoa, koska ohjelma laskee summan automaattisesti koko koontilaskun perusteella.

Syötä katkaistavasta tilauksesta palautettava summa **Palautettava summa** -kenttään.

![Tilausnäkymä](/img/fqa/takaisin-maksettava.png)

### Voiko näköislehtitilauksen tehdä sekä määräaikaisena että kestotilauksena?

Näköislehtitilaus luodaan [tilaustuotteena](/docs/ohjeet/asetukset/tuotteet-ja-julkaisut/tilaustuotteet). Jokaiselle tilaustuotteelle voi määrittää sekä keston että sen, onko kyseessä määräaikainen tilaus vai kestotilaus.

Jos tuotekatalogistanne ei löydy esimerkiksi näköislehden kestotilausta, uuden tilaustuotteen voi lisätä asetuksissa.