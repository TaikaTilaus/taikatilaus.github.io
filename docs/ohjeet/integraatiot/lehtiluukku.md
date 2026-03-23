---
sidebar_position: 2
---

# Lehtiluukku

[Lehtiluukku](https://www.lehtiluukku.fi/) on digitaalinen lehtipalvelu, jossa lukijat voivat lukea näköislehtiä verkossa. Integraatio mahdollistaa tilaajatietojen automaattisen siirron TaikaTilauksesta Lehtiluukkuun, jolloin tilaajien lukuoikeudet pysyvät ajan tasalla ilman manuaalista ylläpitoa.

## Käyttötarkoitus

Integraatio ylläpitää Lehtiluukun tilaajarekisteriä automaattisesti TaikaTilauksen tilaustietojen perusteella. Siirron avulla:

- Lehtiluukku saa ajantasaisen listan voimassa olevista tilaajista
- Tilaajien lukuoikeudet päivittyvät automaattisesti
- Manuaalinen tilaajahallinnointi Lehtiluukussa poistuu

## Toimintaperiaate

Integraatio kerää TaikaTilauksesta kaikkien voimassa olevien tilausten tiedot (sekä kesto- että määräaikaistilaukset, kotimaa ja ulkomaat) ja muodostaa niistä CSV-tiedoston, joka lähetetään Lehtiluukun rajapintaan. Siirrettävä yksilöintitieto on lehtinimikkeestä riippuen joko **asiakasnumero** tai **tilausnumero**.

Tiedosto sisältää listan yksilöintitiedoista (yksi per rivi), ja Lehtiluukku päivittää lukuoikeudet tämän listan perusteella.

## Käyttö postituslistan kautta

Lehtiluukku-siirto tehdään **Postituslista**-näkymässä. Painike näkyy automaattisesti, kun lehtinimikkeelle on määritetty Lehtiluukku-asetukset.

### Vaihe 1: Esikatsele siirrettävät tiedot

1. Avaa **Postituslista** ja valitse haluttu lehti.
2. Klikkaa **Lehtiluukkuun päivitettävät** -painiketta.
3. Näytölle tulee yhteenveto voimassa olevista tilauksista:
   - Kestotilausten ja määräaikaistilausten lukumäärät (kotimaa/ulkomaat)
   - Lista siirrettävistä asiakas- tai tilausnumeroista
4. Samalla muodostuu CSV-siirtotiedosto, jonka voit halutessasi ladata linkistä.

### Vaihe 2: Siirrä tiedot Lehtiluukkuun

1. Tarkista yhteenvedon tiedot.
2. Klikkaa **Siirrä lehtiluukkuun** -painiketta.
3. Tiedot siirtyvät Lehtiluukku-rajapinnan kautta välittömästi.
4. Näytölle tulee Lehtiluukun rajapinnan vastaus, josta näet siirron onnistumisen.
5. Siirron aikaleima ("Tunnukset päivitetty") päivittyy myös Lehtiluukun Partner-sivuille.

:::tip Vinkki
Siirron voi tehdä turvallisesti useita kertoja — Lehtiluukku päivittää tilaajarekisterin aina siirtotiedoston perusteella.
:::

## Automaattinen tausta-ajo

Lehtiluukku-siirron voi myös automatisoida tausta-ajona, jolloin tilaajatiedot päivittyvät Lehtiluukkuun automaattisesti ilman manuaalista toimenpidettä. Tausta-ajo suoritetaan öisin, jolloin Lehtiluukun tilaajarekisteri on aina ajan tasalla seuraavana aamuna.

Tausta-ajon käyttöönotto sovitaan erikseen TaikaTilauksen tuen kanssa.

## Lokitus

Jokainen Lehtiluukku-siirto kirjataan lokiin, josta näkyvät:
- Siirron ajankohta
- Siirretty lehti
- Siirtotiedoston nimi
- Lehtiluukun rajapinnan vastaus

## Käyttöönotto

Lehtiluukku-integraation käyttöönotto edellyttää, että lehtinimikkeelle on määritetty Lehtiluukun tunnukset (lehtinimikkeen tunniste ja avain). Nämä tiedot saadaan Lehtiluukulta.

Käyttöönoton vaiheet:

1. **Sovi Lehtiluukun kanssa** lehtinimikkeen lisäämisestä palveluun.
2. **Toimita Lehtiluukulta saadut tunnukset** TaikaTilauksen tukeen.
3. **TaikaTilaus konfiguroi** integraation tunnusten perusteella.
4. **Testaa siirto** Postituslista-näkymässä.
5. Sovi tarvittaessa **automaattisen tausta-ajon** käyttöönotosta.

## Lehtiluukun Partner-sivut

Lehtiluukun [Partner-sivuilta](https://www.lehtiluukku.fi/partner) voit seurata siirtojen tilaa ja tarkistaa, milloin tilaajarekisteri on viimeksi päivitetty.

## Hinta

TaikaTilauksen osalta integraatiosta veloitetaan käyttöönottomaksu sekä [hinnaston](https://www.taikatilaus.fi/hinnasto) mukainen kiinteä kuukausimaksu.

Lisätietoja:
Jari Mäkelä
p. 050 557 6130
jari.makela@taikatilaus.fi
