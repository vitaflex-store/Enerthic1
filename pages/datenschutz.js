import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function Datenschutz() {
  const { locale } = useRouter();

  const t = {
    de: {
      title: 'Datenschutzerklärung',
      content: 'Hier findest du alle Informationen zum Datenschutz auf unserer Website.'
    },
    es: {
      title: 'Política de Privacidad',
      content: 'Aquí encontrarás toda la información sobre la privacidad en nuestro sitio web.'
    },
    en: {
      title: 'Privacy Policy',
      content: 'Here you will find all the information about privacy on our website.'
    }
  }[locale || 'de'];

  return (
    <>
      <Head>
        <title>{t.title} | Enerthic</title>
      </Head>
      <Navbar />
      <main style={styles.container}>
        <h1>{t.title}</h1>
        <p style={styles.text}>{t.content}</p>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Inter, sans-serif'
  },
  text: {
    lineHeight: '1.6',
    fontSize: '1rem',
    color: '#333'
  }
};