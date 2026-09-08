//imports all of the useful stuff
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

//function that actually builds the basic modules of the website
//contains some simple text and a link to the nextjs website
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Heyo! I'm Alex. I'm a comp sci student and chronic bad idea haver.</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Nex.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
