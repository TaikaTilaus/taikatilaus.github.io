// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TaikaTilaus tukipalvelu',
  tagline: 'Kuinka voimme auttaa?',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://taikatilaus.github.io/',
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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TaikaTilaus/taikatilaus.github.io/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TaikaTilaus/taikatilaus.github.io/blob/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-XDZ7S0L9K2', // Replace with your ID
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'TaikaTilaus',
        logo: {
          alt: 'TaikaTilaus Logo',
          src: 'img/logo-orange.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
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
          {to: '/blog', label: 'Uutiset', position: 'left'},
          {to: 'https://taikatilausoy.freshdesk.com/support/home', label: 'Tukipyyntö', position: 'right'},         
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
                href: 'https://taikatilausoy.freshdesk.com/support/home',
              },
            ],
          },
          {
            title: 'Ajankohtaista',
            items: [
              {
                label: 'Uutiset',
                to: '/blog',
              },
              {
                label: 'TaikaTilaus',
                href: 'https://www.taikatilaus.fi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TaikaTilaus Oy.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '5STAXL8M7K',
  
        // Public API key: it is safe to commit it
        apiKey: '9a4df9f5cc99ae0e2f77bcc29172c771',
  
        indexName: 'crawler_taikatilaus.github.io',
  
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
