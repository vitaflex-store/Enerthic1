import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import translations from '../translations/contact.json';

export default function Contact() {
  const { locale } = useRouter();
  const t = translations[locale] || translations['de'];

  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>
      <Navbar />
      <main style={styles.container}>
        <h1 style={styles.title}>{t.title}</h1>
        <form style={styles.form}>
          <input type="text" placeholder={t.name} required style={styles.input} />
          <input type="email" placeholder={t.email} required style={styles.input} />
          <textarea placeholder={t.message} required style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>{t.send}</button>
        </form>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: 'auto',
    padding: '50px 20px',
    fontFamily: 'Inter, sans-serif'
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '30px',
    color: '#00c853',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  textarea: {
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    minHeight: '150px',
  },
  button: {
    backgroundColor: '#00c853',
    color: '#fff',
    padding: '15px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};