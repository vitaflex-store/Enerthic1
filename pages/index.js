
// pages/index.js
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  const { locale } = useRouter();

  const t = {
    de: {
      title: 'Willkommen bei Enerthic 💪',
      subtitle: 'Dein Shop für Fitnesszubehör und natürliche Produkte 🌱',
    },
    es: {
      title: 'Bienvenido a Enerthic 💪',
      subtitle: 'Tu tienda de accesorios fitness y productos naturales 🌱',
    },
    en: {
      title: 'Welcome to Enerthic 💪',
      subtitle: 'Your store for fitness gear and natural products 🌱',
    },
  }[locale || 'de'];

  return (
    <>
      <Head>
        <title>Enerthic - Fitness & Natur</title>
        <meta name="description" content="Fitnesszubehör und natürliche Produkte für deinen aktiven Lebensstil." />
      </Head>

      <Navbar />

      <main style={styles.hero}>
        <motion.div
          style={styles.heroBox}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={styles.heroTitle}>{t.title}</h1>
          <p style={styles.heroSubtitle}>{t.subtitle}</p>
          <div style={styles.buttonGroup}>
            <a href="/catalog" style={styles.button}>Zum Katalog</a>
            <a href="/contact" style={styles.buttonOutline}>Kontakt</a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}

const styles = {
  hero: {
    minHeight: 'calc(100vh - 160px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #e0ffe7, #f5f5f5)',
    fontFamily: 'Inter, sans-serif',
    padding: '20px'
  },
  heroBox: {
    textAlign: 'center',
    padding: '50px 30px',
    background: '#fff',
    borderRadius: '24px',
    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
    maxWidth: '650px',
    width: '100%'
  },
  heroTitle: {
    fontSize: '3rem',
    color: '#00c853',
    marginBottom: '20px',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#333',
    marginBottom: '30px'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: '#00c853',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    color: '#00c853',
    border: '2px solid #00c853',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
  }
};
