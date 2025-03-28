// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TaikaTilaus-tukipalvelu',
  tagline: 'Kuinka voimme auttaa?',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://support.taikatilaus.fi/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TaikaTilaus', // Usually your GitHub org/user name.
  projectName: 'taikatilaus.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fi',
    locales: ['fi', 'en', 'sv'],
  },

  plugins: [
    'docusaurus-plugin-image-zoom', // can also just be 'image-zoom'
  ],

  scripts: [
    {
      src: 'https://cdn.amplitude.com/libs/analytics-browser-2.8.1-min.js.gz',
    },
    {
      src: 'https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.5.0-min.js.gz',
    },
    {
      src: 'https://cdn.amplitude.com/libs/plugin-autocapture-browser-0.9.2-min.js.gz',
    },
    {
      src: '/amplitude.js',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/TaikaTilaus/taikatilaus.github.io/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/TaikaTilaus/taikatilaus.github.io/blob/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-FE8605KBTG',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: '/img/social.png',
      navbar: {
        title: 'TaikaTilaus',
        logo: {
          alt: 'TaikaTilaus Logo',
          src: 'img/logo-orange.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'ohjeetSidebar',
            position: 'left',
            label: 'Ohjeet',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pikaohjeetSidebar',
            position: 'left',
            label: 'Pikaohjeet',
          },
          {to: '/docs/ohjevideot', label: 'Ohjevideot', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'versiotiedotteetSidebar',
            position: 'left',
            label: 'Versiotiedotteet',
          },        
          // {to: '/blog', label: 'Uutiset', position: 'left'},
          {to: 'https://taikatilaus.freshdesk.com/support/home', label: 'Tukipyyntö', position: 'right'},         
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Ohjeet',
            items: [
              {
                label: 'Ohjeet',
                to: '/docs/etusivu',
              },
              {
                label: 'Pikaohjeet',
                to: '/docs/pikaohjeet/alennuksen-lisaaminen',
              },
            ],
          },
          {
            title: 'Tukipalvelu',
            items: [
              {
                label: 'Tukiportaalin ohjeet',
                href: '/docs/tukiportaali',
              },
              {
                label: 'Tukipyyntö',
                href: 'https://taikatilaus.freshdesk.com/support/home',
              },
            ],
          },
          {
            title: 'Ajankohtaista',
            items: [
              {
                label: 'Versiotiedotteet',
                to: '/docs/versiotiedotteet/helmikuu_2025',
              },
              {
                label: 'Blogi',
                href: 'https://www.taikatilaus.fi/blog',
              },
            ],
          },
        ],
        copyright: `<div>Copyright © ${new Date().getFullYear()} <a href="https://www.taikatilaus.fi" class="footer__link-item">TaikaTilaus Oy</a>.</div>`,
      },
      metadata: [
        {name: 'keywords', content: 'tilausten hallinta, ilmoitusten hallinta, ilmoitusmyynti, maksumuuri, asiakashallinta, laskutus, postitus, omapalvelu, omailmoitus, subscription management, advertising, ad management'},
        {name: 'description', content: 'Ohjeet TaikaTilaus -ohjelmiston käyttöön, sekä uusimmat tuoteuutiset, uutiskirjearkisto, ja webinaaritallenteet' },
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:image:alt', content: 'TaikaTilaus - Monikanavaista mediaympäristöä tukevat SaaS-ratkaisut tilausten ja ilmoitusten hallintaan.'},
      ],
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '21SMQAJV6J',
  
        // Public API key: it is safe to commit it
        apiKey: '9784c5bff78f1c6955a87080cc738edf',
  
        indexName: 'crawler_support.taikatilaus.fi',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},      
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
  
        //... other Algolia params
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
    }),
};

export default config;
