---
sidebar_position: 2
title: Yhteenveto
---

# Yhteenveto

Yhteenveto-välilehdellä näet yhdellä silmäyksellä, kuinka kauan asiakas on ollut tilaajana, paljonko hän on maksanut ja onko maksuissa ongelmia.

Välilehti näkyy vain tallennetulla asiakkaalla. Sovelluksen tila määrää, mitä osioita näytetään:

| Osio | Tilaukset | Ilmoitukset | Tilaukset ja ilmoitukset |
|---|---|---|---|
| **Tilaajuus** | kyllä | ei | kyllä |
| **Ilmoitusasiakkuus** | ei | kyllä | kyllä |
| **Maksut ja Maksuongelmat** | kyllä | kyllä | kyllä |

**Kaaviot-valinta.** Valikosta Kaaviot voit rajata, kuinka pitkälle taaksepäin aikajana ja vuosipylväät ulottuvat: kaikki vuodet, viimeinen vuosi tai viimeiset 2, 3, 5 tai 10 vuotta. Rajaus ei vaikuta lukuihin eikä taulukoihin, jotka lasketaan aina koko ajalta.

**Päivittyminen.** Yhteenveto päivittyy aina, kun tallennat [asiakaskortin](/docs/uusi_versio/Asiakkaat/asiakaskortti) (esim. jos muutat jakelun keskeytyksen alku- tai loppupäivää, asiakkaan tilausten tila päivittyy heti).

## Tilaajuus

Osio huomioi tilaukset, joissa asiakas on tilaajana tai maksajana.

| Tieto | Sisältö |
|---|---|
| **Tilaaja alkaen** | Vanhimman sellaisen tilauksen alkupäivä, jossa asiakas on tilaajana, sekä tilaajuuden kesto. Jos tilaajuudessa on ollut taukoja, näkyvät taukojen määrä ja yhteenlaskettu kesto punaisella. |
| **Tila nyt** | Asiakkaan tilaajuuden tila tänään (ks. alla). Alla näkyy voimassa olevien tilausjaksojen määrä niistä jaksoista, joissa asiakas on tilaajana. |
| **Eri tuotteita** | Asiakkaan tilaamien eri tuotteiden määrä. |
| **Katkaisu** | Viimeisimmän katkaisun peruutuspäivä, katkaistujen jaksojen määrä ja viimeisimmän katkaisun syy. Jos tilauksia ei ole katkaistu, näkyy Ei katkaistuja tilauksia. Normaalisti päättyneet tilaukset (määräaikaiset) ei lasketa katkaistuiksi. |

**Tila nyt.** Tila määräytyy niistä tilauksista, joissa asiakas on tilaajana. Jos tilauksia on useassa tilassa, näytetään vahvin tila ensin:

| Merkki | Merkitys |
|---|---|
| **Voimassa (vihreä)** | Asiakkaalla on voimassa oleva tilaus. |
| **Nukutettu (keltainen)** | Tilaus on nukutettu jakelun keskeytyksen ajaksi. Vie hiiren merkin päälle, niin näet keskeytyksen päivät. Tilaus jatkuu keskeytyksen jälkeen. |
| **Tulossa voimaan (vaaleansininen)** | Tilaus alkaa vasta tulevaisuudessa. |
| **Ei tilaaja (tummanharmaa)** | Asiakkaalla ei ole voimassa olevaa tai tulevaa tilausta. |

Värit ovat samat kuin tilauslistan tilamerkeissä.

**Asiakkaan rooli tilauksessa.** Taulukko näyttää, missä roolissa asiakas on tilauksissaan. Siinä on kullekin roolille tilausten määrä ja voimassa olevien määrä. Rivi näkyy vain, jos asiakkaalla on sen roolin tilauksia:

| Rooli | Merkitys |
|---|---|
| **Tilaajana ja maksajana** | Asiakas tilaa ja maksaa itse. |
| **Vain tilaajana (maksaja on joku muu)** | Asiakas on tilaaja, mutta tilauksen maksaa toinen asiakas. |
| **Vain maksajana (tilaaja on joku muu)** | Asiakas maksaa toisen asiakkaan tilauksen. |

Tila nyt, Tilaaja alkaen, Tilaajana yhteensä, tauot ja aikajanan rivi Asiakas tilaajana lasketaan vain tilauksista, joissa asiakas on tilaajana. Jos asiakas vain maksaa toisen tilausta, se ei vaikuta hänen omaan tilaajuuteensa.

**Tilausjaksot aikajanalla.** Aikajanalla näkyvät asiakkaan tilausjaksot:

- Ylimmällä rivillä Asiakas tilaajana on asiakkaan omien tilausten jaksot yhdistettynä. Rivin nimen napsautus avaa asiakkaan tilaukset [Tilaukset](/docs/uusi_versio/tilaukset)-sivulla.
- Jokaisella tuotteella on oma rivinsä. Jakson napsautus avaa tilauksen tiedot.
- Punainen pystyviiva on tämä päivä.
- Jakson väri kertoo sen tilan. Aikajanan alla oleva selite näyttää vain ne värit, joita aikajanalla on käytetty:

| Väri | Merkitys |
|---|---|
| **Vihreä** | Tilaajana. |
| **Vaaleansininen** | Tulossa voimaan. |
| **Keltainen** | Jakelun keskeytys, tila nukutettu. Keltaisena näkyvät keskeytyksen päivät siltä osin kuin ne osuvat tilausjaksolle. |
| **Sininen** | Asiakas vain maksajana (tilaaja on joku muu). |
| **Punainen** | Tauko eli aika, jolloin asiakkaalla ei ole ollut omaa tilausta. |
| **Tumma** | Ei tilaaja: viimeisen päättymisen jälkeinen aika tähän päivään asti. |

## Ilmoitusasiakkuus

| Tieto | Sisältö |
|---|---|
| **Ensimmäinen ilmoitus** | Ensimmäisen ilmoituksen ilmestymispäivä ja aika siitä tähän päivään. |
| **Viimeisin ilmoitus** | Viimeisimmän ilmoituksen ilmestymispäivä sekä tulevien varausten määrä. |
| **Varauksia** | Varausten määrä, julkaisujen määrä ja se, kuinka monessa varauksessa asiakas on maksajana. |
| **Myynti yhteensä** | Ilmoitusmyynti yhteensä ilman arvonlisäveroa. |

Mukana ovat varaukset, joissa asiakas on varaaja, maksaja tai laskutusosoitteena.

Kaaviot:

- **Ilmoitusmyynti vuosittain.** Pylvään napsautus avaa vuoden ilmoitukset Ilmoitukset-sivulla.
- **Ilmoitusmyynti kanavittain** ja **myyntituotteittain.** Kuusi suurinta on omina viipaleinaan ja loput ryhmässä Muut. Viipaleen napsautus avaa kyseisen kanavan tai tuotteen ilmoitukset.

## Maksut

Osio näyttää asiakkaan laskut, joissa hän on maksajana. Hyvityslaskut ja hyvitetyt laskut jätetään pois, koska ne kumoavat toisensa. Jos asiakkaalla ei ole laskuja, näkyy teksti Asiakkaalle ei ole laskuja maksajana.

| Tieto | Sisältö |
|---|---|
| **Maksettu yhteensä** | Asiakkaan maksamat summat ja viimeisin maksupäivä. |
| **Laskutettu yhteensä** | Laskutettu summa, laskujen määrä ja mahdollisten hyvitysten määrä. |
| **Avoinna** | Maksamatta oleva summa. Punaisena, jos summaa on. |
| **Keskimääräinen maksuaika** | Keskimääräinen maksuaika eräpäivään nähden ja maksettujen laskujen määrä. |

Kaaviot ja taulukko:

- **Laskutettu ja maksettu vuosittain.** Harmaa pylväs on laskutettu ja vihreä maksettu. Pylvään napsautus avaa vuoden laskut [Laskujen haussa](/docs/uusi_versio/Laskut/laskujen-haku).
- **Laskutetun jakauma.** Piirakka jakaa laskut tilan (Maksettu, Avoinna, Erääntynyt) ja laskumuodon mukaan. Viipaleen napsautus avaa vastaavat laskut [Laskujen haussa](/docs/uusi_versio/Laskut/laskujen-haku).
- **Vuositaulukko.** Vuosittain laskujen määrä, laskutettu ja maksettu. Vuosi tulee laskun päivämäärästä.

## Maksuongelmat

Osio kokoaa asiakkaan maksuun liittyvät ongelmat. Jos ongelmia ei ole, näkyy teksti *Ei havaittuja maksuongelmia*. Muuten luetellaan:

- erääntyneiden laskujen määrä ja yhteissumma sekä tieto siitä, kuinka monta päivää pisimpään erääntyneenä ollut lasku on ollut maksamatta.
- laskut, joista on lähetetty maksumuistutus
- perintään siirretyt laskut
- tilaukset, jotka ovat päättyneet maksamattomuuden vuoksi
- eräpäivän jälkeen maksettujen laskujen määrä.

## Mitä Yhteenvedossa näytetään

Ylläpitäjä voi piilottaa yksittäisiä osioita, lukuja ja kaavioita sekä koko Yhteenveto-välilehden ja esikatselun palkin kohdassa [Asetukset → Asiakkaan tietokentät → Yhteenveto](/docs/uusi_versio/asetukset/asiakkaan-tietokentat).
