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

      <main className="hero">
        <motion.div
          className="heroBox"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heroTitle">{t.title}</h1>
          <p className="heroSubtitle">{t.subtitle}</p>
          <div className="buttonGroup">
            <a href="/catalog" className="button">Zum Katalog</a>
            <a href="/contact" className="buttonOutline">Kontakt</a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
