import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Catalog() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Catálogo de productos</h1>
        <p>Próximamente verás nuestros productos aquí.</p>
      </main>
      <Footer />
    </>
  );
}
