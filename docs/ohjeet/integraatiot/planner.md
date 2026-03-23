---
sidebar_position: 7
---

# Anygraaf Planner

[Anygraaf Planner](https://www.anygraaf.fi/) on lehden taitto-ohjelmisto, jota käytetään ilmoitusten sijoitteluun lehden sivuille. Integraatio siirtää TaikaTilauksen ilmoitusvarausten tiedot ja aineistot automaattisesti Planneriin, jolloin taittaja näkee ilmoitukset suoraan taitto-ohjelmassa.

## Käyttötarkoitus

Integraatio automatisoi ilmoitusaineiston siirron TaikaTilauksesta taittojärjestelmään:

- Ilmoitusvarausten tiedot (koko, sijoittelu, asiakas) siirtyvät CSV-muodossa
- Ilmoitusten PDF-aineistot siirtyvät taittajalle valmiina
- Muutokset päivittyvät automaattisesti muutaman minuutin viiveellä
- Taittajan ei tarvitse syöttää ilmoitustietoja manuaalisesti

## Siirrettävät tiedot

Jokaisesta ilmoitusvarauksesta siirretään seuraavat tiedot:

| Tieto | Kuvaus |
|-------|--------|
| Ilmoitusvarausnumero | Ilmoitusvarauksen yksilöivä tunniste |
| Ilmoitusosasto | Lehden osasto, johon ilmoitus sijoitetaan (esim. "Tekstissä", "Etusivu", "Takasivu") |
| Asiakasnumero | Ilmoittajan asiakasnumero |
| Asiakkaan nimi | Yritys tai henkilönimi |
| Ilmoitusteksti | Ilmoituksen lisätieto tai kuvaus |
| Palstoja | Ilmoituksen leveys palstoina |
| Korkeus | Ilmoituksen korkeus millimetreinä |
| PDF-aineiston polku Plannerissa | Viittaus ilmoituksen valmiiseen aineistotiedostoon |

## Toimintaperiaate

### Automaattinen tausta-ajo

Planner-siirto toimii automaattisena tausta-ajona, joka suoritetaan muutaman minuutin välein. Tausta-ajo:

1. **Hakee ilmoitusvaraukset** — kerää kaikki voimassa olevat, ei-poistetut ilmoitusvaraukset tuleviin julkaisuihin
2. **Muodostaa CSV-tiedostot** — luo jokaiselle julkaisunumerolle oman CSV-tiedoston (esim. `0503_Lehti.csv` = 3.5. julkaistava lehti)
3. **Tarkistaa muutokset** — vertaa onko ilmoitusvarauksiin tai aineistoihin tullut muutoksia edellisen siirron jälkeen
4. **Siirtää tiedostot FTP-palvelimelle** — CSV-tiedostot ja hyväksyttyjen ilmoitusten PDF-aineistot siirretään FTP:n kautta Plannerin käyttöön

CSV-tiedostot nimetään julkaisupäivän ja lehden lyhenteen mukaan, esimerkiksi `0503_Lehti.csv`.

### Manuaalinen CSV-tiedoston luonti

CSV-tiedoston voi luoda myös manuaalisesti **Hallinta**-sivulta. Tämä on hyödyllistä esimerkiksi testauksessa tai yksittäisissä tarkistustilanteissa. Manuaalisessa luonnissa tiedoston voi ladata omalle koneelle tarkistettavaksi.

## Ilmoitusvarauksen pakolliset tiedot

Kun Planner-integraatio on käytössä, ilmoitusvarauksilla vaaditaan seuraavat pakolliset kentät:

- **Ilmoitusosasto** — valitaan ennalta määritetystä listasta, joka vastaa Plannerin osastoja
- **Palstoja (lkm)** — ilmoituksen leveys
- **Korkeus (mm)** — ilmoituksen korkeus

Jos nämä tiedot puuttuvat tai ovat virheellisiä, järjestelmä varoittaa tallennuksen yhteydessä.

## FTP-siirron seuranta

IlmoitusStudiossa voit seurata yksittäisten ilmoitusvarausten FTP-siirron tilaa. **PlannerFTP-aikaleima** kertoo, milloin ilmoitusvarauksen PDF-aineisto on viimeksi löytynyt ja siirretty FTP-palvelimelle.

:::info Huomio
Kun yhdenkin ilmoitusvarauksen aineisto muuttuu, kaikki saman julkaisunumeron tiedostot siirretään kerralla uudelleen.
:::

## Asetukset

### Julkaisujen lyhenteet

Jokaiselle lehtinimikkeelle tulee määrittää lyhenne asetuksissa (JULKAISUJEN_LYHENTEET). Lyhennettä käytetään CSV-tiedoston nimessä ja aineistopolun muodostamisessa. Esimerkiksi:

```
Moottoriurheilu: MU
Paikallissanomat: PS
```

Digilehtiä ei siirretä Planneriin.

### Ilmoitusosastot

Sallitut ilmoitusosastot on määritetty lehtikohtaisesti. Jos ilmoitusvarauksen osasto ei ole sallittujen listassa, ilmoitusta ei siirretä ja järjestelmä ilmoittaa virheestä.

## Käyttöönotto

1. **Aktivoi integraatio** — Asetukset-sivulla valitse "Anygraaf Planner -integraatio käytössä".
2. **Määritä julkaisujen lyhenteet** — lisää asetuksiin jokaisen lehden lyhenne.
3. **Sovi FTP-yhteys** — TaikaTilaus konfiguroi FTP-siirron tausta-ajoon.
4. **Tarkista ilmoitusosastot** — varmista, että käytettävät ilmoitusosastot vastaavat Plannerin osastoja.
5. **Testaa** — luo CSV-tiedosto manuaalisesti Hallinta-sivulta ja tarkista sisältö.

## Hinta

TaikaTilauksen osalta integraatiosta veloitetaan käyttöönottomaksu sekä [hinnaston](https://www.taikatilaus.fi/hinnasto) mukainen kiinteä kuukausimaksu.

Lisätietoja:
Jari Mäkelä
p. 050 557 6130
jari.makela@taikatilaus.fi
