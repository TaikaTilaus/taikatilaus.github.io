---
---

# Fennoa

Yksisuuntainen integraatio myyntilaskujen kirjanpitotositteiden automaattiseen vientiin TaikaTilauksesta Fennoa taloushallinto-ohjelmaan.

## Yleiskuvaus

TaikaTilauksen myyntireskontra tuottaa kirjanpitotositteita. 

Kirjanpitotosite muodostuu tapahtuman ajankohdasta, kuvauksesta ja debet/kredit -tiliöintiriveistä. Myyntilaskuista voi muodostua seuraavia tositteita:
- alkuperäinen myyntilasku tuoteriveineen: tilaus/ilmoitustuote ja mahdolliset laskutuslisät paperilaskuista
- maksumuistutus, jossa tuoterivinä muistutusmaksu ja mahdollinen viivästyskorko
- suoritukset pankkitileille ja kassaan

Yksi myyntilasku tuottaa vähintään kaksi kirjanpitotositetta, yhden laskua muodostettaessa ja yhden suorituksen saapuessa pankkitilille.

TaikaTilaus_Fennoa -liittymä tekee TaikaTilauksen tiliöinneistä Fennoaan kelpaavat tositteet, ja siirtää nämä Fennoan päiväkirjaan, jotta kirjanpitäjän ei tarvitse manuaalisesti hakea tietoja TaikaTilauksesta.

Suorituksesta ja virheistä koostetaan raportti, joka toimitetaan sähköpostilla haluttuun osoitteeseen.

## Hinta

Liittymästä veloitetaan käyttöönottomaksu sekä kiinteä kuukausimaksu. 

Lisätietoja:   
Jari Mäkelä  
p. 050 557 6130  
jari.makela@taikatilaus.fi

## Liittymän toimintaperiaate

Liittymäprosessi suoritetaan ajastetusti määräaikavälein, esim. päivittäin, viikoittain tai kuukausittain.

Liittymäprosessin suoritus etenee vaiheittain:
1. Kirjanpitotositteiden muodostaminen TaikaTilauksessa
2. Tositteiden lähettäminen Fennoa API:n 
3. Onnistuneesti käsiteltyjen tositteiden merkitseminen siirretyiksi, virheellisten koostaminen raportiksi
4. Suoritusraportin kirjaaminen lokiin ja lähettäminen sähköpostitse yhteyshenkilölle, esim. kirjanpitäjälle korjaavia toimenpiteitä varten

##  Liittymän käyttöönotto

Sujuvimmin käyttöönottoon liittyvät valmistelutyöt voidaan sopia lyhyessä käyttöönottopalaverissa.

1. API-tunnusten tilaus ja lisääminen Fennoaan
   - Asiakkaan tulee lisätä Fennoaan API-tunnukset testi- ja tuotantoympäristöön kirjanpitäjä-oikeuksilla.
   - Huomiothan, että API-tunnukset ovat maksullisia. Lisätietoja saat Fennoan yhteyshenkilöltäsi.

2. Tietojen toimittaminen TaikaTilaukseen
   - Fennoa API testi- ja tuotantotunnukset
   - ajastusaikaväli ja kellonaika
   - sähköposti-ilmoitusten vastaanottaja

3. Kirjanpitotositteen tietojen, käytettävien tilien ja ALV-käsittelyn määrittely
   - Kirjanpitotositteen tositelaji,  esim. GL2
   - Kirjanpitotositteen selite
   - TaikaTilauksen ja Fennoan käytössä olevien tilien numerot tulee vastata toisiaan. Myyntitilit, myyntisaamiset, pankkitili, kassa, maksuhuomautukset, luottotappiot jne.
   - Automaattinen ALV-käsittely voidaan tehdä sekä TaikaTilauksessa että Fennoassa. Liittymän konfiguroinnissa tulee määritellä lähetetäänkö ALV-tiliöinnit Fennoaan. 

4. Liittymän testaus testiympäristössä

5. Liittymän kytkeminen päälle tuotannossa