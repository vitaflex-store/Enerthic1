
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Enerthic</title>
      </Head>
      <main style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Inter, sans-serif'
      }}>
        <h1 style={{ color: '#00c853', fontSize: '3rem' }}>Willkommen bei Enerthic 💪</h1>
        <p style={{ fontSize: '1.25rem' }}>Dein Shop für Fitnesszubehör und natürliche Produkte 🌱</p>
      </main>
    </>
  );
}
