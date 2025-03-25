import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function Impressum() {
  const { locale } = useRouter();

  const t = {
    de: {
      title: 'Impressum',
      content: `
Verantwortlich für den Inhalt:
Enerthic GmbH
Musterstraße 1
12345 Berlin
Deutschland

Telefon: +49 (0) 123 456789
E-Mail: info@enerthic.com

Umsatzsteuer-ID: DE123456789
Registergericht: Amtsgericht Berlin
Registernummer: HRB 123456
      `,
    },
    es: {
      title: 'Aviso Legal',
      content: `
Responsable del contenido:
Enerthic GmbH
Musterstraße 1
12345 Berlín
Alemania

Teléfono: +49 (0) 123 456789
Correo electrónico: info@enerthic.com

NIF: DE123456789
Registro Mercantil: Juzgado de Berlín
Número de registro: HRB 123456
      `,
    },
    en: {
      title: 'Legal Notice',
      content: `
Responsible for content:
Enerthic GmbH
Musterstraße 1
12345 Berlin
Germany

Phone: +49 (0) 123 456789
Email: info@enerthic.com

VAT ID: DE123456789
Commercial Register: Berlin District Court
Registration number: HRB 123456
      `,
    },
  }[locale || 'de'];

  return (
    <>
      <Head>
        <title>{t.title} | Enerthic</title>
      </Head>
      <Navbar />
      <main style={styles.container}>
        <h1>{t.title}</h1>
        <pre style={styles.text}>{t.content}</pre>
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
    whiteSpace: 'pre-wrap',
    lineHeight: '1.6',
    fontSize: '1rem',
    color: '#333'
  }
};