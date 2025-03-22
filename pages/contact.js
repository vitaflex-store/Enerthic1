import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Contacto</h1>
        <p>Envíanos tus consultas usando nuestro formulario o escribiendo a contacto@enerthic.com</p>
      </main>
      <Footer />
    </>
  );
}
