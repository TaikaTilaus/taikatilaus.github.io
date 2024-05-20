import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ohjeet',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Yksityiskohtaiset ohjeet TaikaTilaus-sovelluksen käyttöön.
      </>
    ),
    url: '/docs/etusivu'
  },
  {
    title: 'Pikaohjeet',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Pikaohjeita tavallisiin käyttötapauksiin.
      </>
    ),
    url: '/docs/pikaohjeet/asiakkaan-lisaaminen'
  },
  {
    title: 'FAQ',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Usein kysyttyjä kysymyksiä TaikaTilaukseen liittyvistä aiheista.
      </>
    ),
    url: '/docs/category/faq'
  },  
  {
    title: 'Ohjevideot',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        TaikaTilaus-sovelluksen ohjevideoita.
      </>
    ),
    url: 'docs/ohjevideot'
  },  
  {
    title: 'Tukiportaalin ohjeet',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Freshdesk tukiportaalin ohjeet.
      </>
    ),
    url: '/docs/tukiportaali'
  },
  {
    title: 'Uutiset',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Uutisarkisto ja versiotiedotteet.
      </>
    ),
    url: '/blog'
  },

];

function Feature({Svg, title, description, url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"><a href={url}>{title}</a></Heading>
        <p>{description}</p>        
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
