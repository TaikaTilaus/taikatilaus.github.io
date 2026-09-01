// Varmistaa, että window.gtag on aina olemassa.
//
// @docusaurus/plugin-google-gtag kutsuu window.gtag-funktiota jokaisen
// sivunvaihdon yhteydessä. Jos gtag-snippettiä ei ole ajettu (selaimen
// mainos-/seurantaesto, CSP tai kehityspalvelin), kutsu heittää
// "window.gtag is not a function" -virheen ja Docusauruksen virheikkuna
// peittää sivun. Alla oleva varmistus tekee samaa kuin Googlen virallinen
// snippetti: kutsut jonotetaan dataLayeriin, joten oikea gtag.js käsittelee
// ne jälkikäteen, jos se ehtii latautua.
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
}

export default {};
