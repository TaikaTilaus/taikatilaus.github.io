---
---

# Paytrail

[Paytrail](https://www.paytrail.com/)-maksutavan integraatio. 

Tämä ohje kuvaa, kuinka Paytrailin kautta tulevat suoritukset näkyvät TaikaTilauksessa ja miten niitä tulee käsitellä. 

## Käyttötarkoitus

Paytrailin avulla asiakas voi maksaa tilauksensa suoraan verkossa, kun hän tilaa lehden tilauslomakkeen kautta.

## Suorituksien käsittely

1. **Paytrail-suoritusten näkyminen TaikaTilauksessa:**

   **Suoritukset**-välilehdellä näkyvät myös Paytrailin kautta tehdyt korttimaksut. Nämä maksut ovat tyypillisesti provisiokoontimaksuja, jotka voivat sisältää useita eri laskuihin liittyviä yksittäisiä provisioita.
   
   ![Suoritukset](/img/paytrail.png)

2. **Tiliöinti TaikaTilauksessa ei ole mahdollista:**

   Näitä koontisuorituksia ei voida automaattisesti tiliöidä yksittäisille laskuille TaikaTilauksessa, koska oikeat **LaskuID**-tunnisteet puuttuvat. Paytrail ei välitä viitettä, joka yhdistäisi maksun tiettyyn laskuun, sillä lasku/kuitti muodostuu vasta maksun yhteydessä.

3. **Merkitse Paytrailin suoritukset OK:**

   Tästä syystä nämä Paytrail-suoritukset jäävät virheellisiin suorituksiin TaikaTilauksessa, mutta koska tiliöinnit löytyvät todennäköisesti jo laskuilta, voit merkitä kaikki Paytrail-suoritukset "OK"-tilaan.

    ![Suoritukset](/img/paytrail2.png)

4. **Provisioiden tarkempi seuranta Paytrailin käyttöliittymässä:**

   Jos haluat tarkastella yksittäisiä provisioita tai laskukohtaisia tietoja, kirjaudu Paytrailin [omaan käyttöliittymään](https://www.paytrail.com/uuden-asiakkaan-tietopaketti). Sieltä löydät koontisuoritukset ja niiden sisältämät yksittäiset suoritukset, joissa on mainittu myös LaskuID-tunnukset.

5. **Yksittäisten provisioiden tiliöinti:**

   Jos provisioita halutaan seurata raportoinnissa tai kirjanpidossa yksittäisten laskujen tasolla, ne täytyy [tiliöidä manuaalisesti](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/suoritukset#esimerkkej%C3%A4-laskun-tili%C3%B6intien-muokkauksesta) oikeille laskuille.

6. **Kirjanpidon käsittely:**

   Varsinainen provisioiden kirjaus tehdään kirjanpidossa kirjanpitoraporttien perusteella. TaikaTilauksessa ei tarvitse tehdä näille provisiomaksuille muita toimenpiteitä.

## Hinta

TaikaTilauksen osalta Liittymästä veloitetaan käyttöönottomaksu sekä [hinnaston](https://www.taikatilaus.fi/hinnasto) mukainen kiinteä kuukausimaksu. 

Lisätietoja:   
Jari Mäkelä  
p. 050 557 6130  
jari.makela@taikatilaus.fi
