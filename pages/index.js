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
        <title>Enerthic</title>
        <meta name="description" content={t.subtitle} />
      </Head>
      <Navbar />
      <main>
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </main>
      <Footer />
    </>
  );
}
