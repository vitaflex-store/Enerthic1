import Link from 'next/link';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#00c853', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ fontWeight: 'bold', color: '#fff' }}>Enerthic</div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/"><span style={{ color: '#fff' }}>Home</span></Link>
        <Link href="/catalog"><span style={{ color: '#fff' }}>Katalog</span></Link>
        <Link href="/contact"><span style={{ color: '#fff' }}>Kontakt</span></Link>
        <Link href="/impressum"><span style={{ color: '#fff' }}>Impressum</span></Link>
        <Link href="/datenschutz"><span style={{ color: '#fff' }}>Datenschutz</span></Link>
      </div>
      <LanguageSelector />
    </nav>
  );
}