import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Cart() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Tu carrito está vacío 🛒</h1>
        <p>Agrega productos para comenzar tu compra.</p>
      </main>
      <Footer />
    </>
  );
}
