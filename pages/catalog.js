import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: {
      de: 'Widerstandsband',
      es: 'Banda de resistencia',
      en: 'Resistance Band'
    },
    price: '14,99€',
    image: '/products/band.jpg'
  },
  {
    id: 2,
    name: {
      de: 'Proteinriegel',
      es: 'Barrita de proteína',
      en: 'Protein Bar'
    },
    price: '2,99€',
    image: '/products/bar.jpg'
  },
  {
    id: 3,
    name: {
      de: 'Fitnesshandschuhe',
      es: 'Guantes de gimnasio',
      en: 'Gym Gloves'
    },
    price: '9,99€',
    image: '/products/gloves.jpg'
  }
];

export default function Catalog() {
  const { locale } = useRouter();
  const [cart, setCart] = useState([]);

  const t = {
    de: {
      title: 'Katalog',
      add: 'In den Warenkorb'
    },
    es: {
      title: 'Catálogo',
      add: 'Añadir al carrito'
    },
    en: {
      title: 'Catalog',
      add: 'Add to cart'
    }
  }[locale || 'de'];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name[locale]} ${t.add}`);
  };

  return (
    <>
      <Head>
        <title>Enerthic - {t.title}</title>
      </Head>
      <Navbar />
      <main style={styles.container}>
        <h1 style={styles.title}>{t.title}</h1>
        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <img src={product.image} alt={product.name[locale]} style={styles.image} />
              <h2>{product.name[locale]}</h2>
              <p>{product.price}</p>
              <button style={styles.button} onClick={() => addToCart(product)}>
                {t.add}
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Inter, sans-serif'
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#00c853',
    marginBottom: '40px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px'
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    borderRadius: '12px',
    marginBottom: '15px'
  },
  button: {
    marginTop: '10px',
    backgroundColor: '#00c853',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 600,
    cursor: 'pointer'
  }
};