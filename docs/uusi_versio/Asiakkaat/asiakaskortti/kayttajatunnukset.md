---
sidebar_position: 10
title: Käyttäjätunnukset
---

# Käyttäjätunnukset {#kayttajatunnukset}

**Käyttäjätunnukset**-välilehdellä näet ja hallitset asiakkaan käyttäjätunnuksia. Tunnuksilla asiakas kirjautuu digilehteen ja verkkosivuille ja, jos OmaPalvelu on käytössä, myös OmaPalveluun.

Välilehti näkyy vain tallennetulla asiakkaalla, ja vain jos asiakkaiden käyttäjätunnukset on otettu käyttöön. Välilehden nimen vieressä oleva numero kertoo asiakkaan tunnusten määrän.

## Tunnuslista

Lista näyttää asiakkaan tunnukset. Jos tunnuksia ei ole, näkyy teksti *Ei käyttäjätunnuksia*.

| Sarake | Sisältö |
|---|---|
| **Tunnus** | Käyttäjätunnus. Jos tunnukselle on annettu nimi, se näkyy tunnuksen alla. |
| **Liitos** | Päätunnus tai Alitunnus. Päätunnuksella on kaikki oikeudet palveluissa, esimerkiksi yhteystietojen muuttaminen. Alitunnuksella on rajatut oikeudet muuttaa tietoja, mutta se näkee samat tilaukset kuin päätunnus. |
| **Salasana** | Asetettu, jos salasana on annettu. Muuten Ei asetettu. Asiakas asettaa salasanan sähköpostin linkistä, tai voit asettaa sen tunnuksen toiminnoista. Salasanaa ei koskaan näytetä. |
| **Viimeisin kirjautuminen** | Tunnuksen viimeisimmät kirjautumiset kanavittain: OmaPalvelu, Digi ja Verkkosivut. Jos kirjautumisia ei ole, näkyy Ei kirjautumisia. |
| **Liitetty myös** | Muut asiakkaat, joihin sama tunnus on liitetty. |

Avaa tunnuksen toiminnot napsauttamalla riviä tai kynäkuvaketta.

## Tunnuksen lisääminen

1. Napsauta **Lisää tunnus**.
2. Kirjoita **Käyttäjätunnus**. Tunnus on sähköpostiosoite ja vähintään kolmen merkin mittainen.
3. Kirjoita halutessasi **Nimi**.
4. Valitse Liitoksen tyyppi: **Päätunnus** tai **Alitunnus**.
5. Napsauta **Tallenna**.

Tunnusta ei voi lisätä, jos se on jo toisella asiakkaalla. Silloin virheilmoitus näyttää asiakkaan, johon tunnus on jo liitetty. Uuden tunnuksen kanssa asiakas tarvitsee salasanan: lähetä uuden tunnuksen viesti tai aseta salasana tunnuksen toiminnoista ja ilmoita se asiakkaalle.

## Tunnuksen toiminnot

Napsauta tunnuksen riviä, niin avautuu ikkuna **Käyttäjätunnus ja tunnus**. Ikkunassa on seuraavat osiot:

**Tunnuksen tiedot.** Voit muuttaa tunnuksen nimen ja liitoksen tyypin (Päätunnus tai Alitunnus). Napsauta Tallenna. Painike aktivoituu, kun olet muuttanut jotakin.

**Salasana.** Kirjoita uusi salasana kenttään tai napsauta Luo uusi salasana, jolloin järjestelmä tekee riittävän vahvan salasanan. Napsauta Tallenna salasana.

**Sähköpostit ja OmaPalvelu.** Osio näkyy vain, jos OmaPalvelu on käytössä. Viestien tekstit ovat kohdassa [Asetukset → OmaPalvelu](../../asetukset/omapalvelu/asetukset.md#viestit). Salasanan asetus- ja vaihtolinkit ovat voimassa kaksi vuorokautta, ja vain viimeisin lähetetty linkki on voimassa.

| Painike | Toiminto |
|---|---|
| **Lähetä uuden tunnuksen viesti** | Lähettää viestin tunnuksen aktivoinnista. Asiakas luo salasanan viestin linkistä. |
| **Lähetä salasanan vaihtolinkki** | Asiakas voi resetoida salasanansa viestin linkistä. |
| **Lähetä kertakirjautumislinkki** | Lähettää kertakäyttöisen linkin, jolla asiakas kirjautuu OmaPalveluun. Kun uusi OmaPalvelu on käytössä, linkki avaa uuden OmaPalvelun. |
| **Kirjaudu OmaPalveluun** | Avaa asiakkaan OmaPalvelun uuteen välilehteen tällä käyttäjätunnuksella. Painike ei vaadi sähköpostiosoitetta. Kun uusi OmaPalvelu on käytössä, painike avaa sen henkilökunnan istunnossa. |

### Henkilökunnan kirjautuminen uuteen OmaPalveluun

Kun uusi [OmaPalvelu](../../asetukset/omapalvelu/index.md) on käytössä, **Kirjaudu OmaPalveluun** -painikkeen siirtolinkki on voimassa vain minuutin ja toimii vain kerran. Sivun yläosassa näkyy merkintä *Henkilökunta (tunnus): katselet asiakkaan OmaPalvelua asiakaskortilta*. Asiakkaan OmaPalvelussa tekemäsi muutokset kirjataan henkilökunnan tekemiksi. Salasanaa ei voi vaihtaa henkilökunnan istunnossa. Kirjautuminen kirjataan kirjautumislokiin.

**Tunnuksen poistaminen.** Napsauta ikkunan alareunan Poista tunnus.

Jos tunnuksen jokin toiminto epäonnistuu, ikkunassa näkyy virheilmoitus.
