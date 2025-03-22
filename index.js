import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Enerthic - Fitness & Natur</title>
        <meta name="description" content="Fitnesszubehör und natürliche Produkte für deinen aktiven Lebensstil." />
      </Head>
      <main style={{ textAlign: 'center', padding: '60px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#00c853' }}>Willkommen bei Enerthic 💪</h1>
        <p style={{ fontSize: '1.25rem', color: '#444' }}>Dein Shop für Fitnesszubehör und natürliche Produkte 🌱</p>
      </main>
    </>
  );
}
