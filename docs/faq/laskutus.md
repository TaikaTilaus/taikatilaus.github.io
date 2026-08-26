---
sidebar_position: 2
---

# Laskutus

### Kestotilaus laskutetaan monessa erässä, miten se käytännössä toimii ja milloin erät lähtevät?

Jos tilaustuotteen [asetuksissa](/docs/ohjeet/asetukset/tuotteet-ja-julkaisut/tilaustuotteet) on määritetty, että tilaus laskutetaan useassa erässä, ohjelma luo automaattisesti määritetyn määrän laskutuspyyntöjä ja jakaa hinnan tasan erien kesken.

Erät laskutetaan säännöllisin väliajoin tilauksen aikana. Näet tilaukseen kuuluvista laskutuspyynnöistä, milloin kukin laskutuspyyntö lähtee ja mikä erän hinta on. Lähetysajankohta näkyy laskutuspyynnön **Saa luoda** -päivämäärästä.

![Tilausnäkymä](/img/fqa/laskutuspyynnot.png)

### Voiko asiakkaalle laittaa e-laskun?

Kyllä voi, asiakaskortille määritetään laskun toimitustavaksi verkkolasku ja täydennetään asiakkaan tilitiedot. Mikäli kyseessä on henkilöasiakas, tulee hänen tehdä omassa verkkopankissa eLaskuvaltuutus, joka päivittyy pankkien aineistosiirtojen yhteydessä asiakaskortille.

<a href="../pikaohjeet/laskun-toimitustapa">Lue pikaohje</a>

### Miten teen asiakkaalle hyvityslaskun?

Hyvityslasku luodaan avaamalla alkuperäinen Lasku, jonka alaosasta löytyy Hyvityslasku-painike, jota klikkaamalla ohjelma käsittelee sekä alkuperäisen laskun, että muodostaa sille uuden Hyvityslaskun. Katso alta ohjevideo:

<div class="ratio ratio-16x9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QF_IBKckFxE?si=3ETsFK1E4THmBsqV"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>

<a href="../pikaohjeet/hyvityslasku">Tai lue pikaohje</a>

### Kuinka lähetän jo kertaalleen lähetetyn laskun asiakkaalle sähköpostitse?

Sekä Laskut –listausnäkymässä, että avattaessa ko. laskulomake löytyy molemmista oma Lähetä lasku sähköpostilla -painike. Katso alta ohjevideo:

<div class="ratio ratio-16x9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/z1XZNEZGjVU?si=jb33QTCx9rE-Rpep"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
</div>

### Kuinka tiliöidään kassaan maksettu suoritus

Tiliöinti tehdään Lisää uusi suoritus –painikkeen kautta. Pankkitiliksi valitaan Kassatili ja Myyntitiliksi valitaan tuoterivin tuotteen (esim. tilaus) mukainen Myyntisaamistili. Katso alta ohjevideo:

<div class="ratio ratio-16x9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/aC7Ms9ojohU?si=Bqgo_HaGQ9k6bJk1"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
</div>

<a href="../pikaohjeet/kassa-tiliointi">Tai lue pikaohje</a>

### Tuleeko virheellinen laskun suoritus jonnekin näkyviin?

Kyllä tulee, Suoritukset-välilehdellä voidaan suodattaa vain virheelliset listaukselle, josta ne on helpompi käsitellä manuaalisesti (esim. liittää oikealle laskulle).

<a href="../pikaohjeet/suorituksen-tiliointi">Lue pikaohje</a>

### Asiakas on tehnyt tilauksen/itsepalveluilmoituksen ja niistä muodostui vain nollalasku, miksei laskua tehty?

Jos asiakkaalla näkyy nollalasku ja tilaus, jonka päivämäärät ovat pitkällä tulevaisuudessa (esim. vuosi on 2086), tilaus on luonnostilassa ja odottaa laskun maksamista. Tällaisia tilausluonnoksia syntyy, kun asiakas aloittaa tilauksen maksamisen maksupalvelussa, mutta jättää maksun kesken. Jos maksua ei koskaan suoriteta loppuun, automaattinen ajo poistaa tilausluonnokset ja niihin liittyvät nollalaskut järjestelmästä noin viiden päivän kuluessa.

Samanlaisia nollalaskuja ja ilmoitusluonnoksia voi syntyä myös silloin, kun asiakas luo ilmoituksen OmaIlmoituksessa mutta jättää maksamisen kesken.

### Kun lähetän maksumuistutuksia ja samalle asiakkaalle lähtee monta samana päivänä, tulevatko ne yhdessä kirjeessä?

Jokainen maksumuistutus on liitetty tiettyyn laskuun. Jos laskut on lähetetty erikseen, myös maksumuistutukset lähtevät erikseen.

### Missä raportissa on päiväkohtaiset Stripe-suoritukset?

Näet yhteenvedon Stripestä tulleista maksuista [**Kirjanpitoyhteenveto**](https://support.taikatilaus.fi/docs/ohjeet/yleiset_ominaisuudet/raportit/kirjanpidon_raportit#kirjanpitoyhteenveto) -raportilta sekä päiväkohtaiset tiliöinnit [**Kaikki tiliöinnit**](/docs/ohjeet/yleiset_ominaisuudet/raportit/kirjanpidon_raportit#kaikki-tili%C3%B6innit) -raportilta valitsemalla **Valitut tilit** -hakuehdossa Stripe-tilin.

Jos etsit Stripestä yrityksesi pankkitilille siirrettyjä maksuja, löydät ne omalta Stripe-tililtäsi TaikaTilauksen sijaan.

### Miten tehdään virheellisesti veloitettujen Stripe-maksujen palautus?

Virheellisen Stripe-maksun voi palauttaa suoraan Stripestä. Asiakkaan Stripe-maksuista voidaan palauttaa tällä tavalla vain uusin.

Jos kyseessä on vanhempi maksu, lasku voidaan [merkitä palautettavaksi](https://support.taikatilaus.fi/docs/pikaohjeet/maksetun-laskun-palautus), jos saldo-toiminto on käytössä. Varsinainen rahojen palautus tehdään taloushallinnon kautta.