import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px', backgroundColor: '#00c853', color: '#fff', fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Enerthic</div>
      <ul style={{
        display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0
      }}>
        <li><a href="/" style={link}>Startseite</a></li>
        <li><a href="/catalog" style={link}>Katalog</a></li>
        <li><a href="/contact" style={link}>Kontakt</a></li>
        <li><a href="/impressum" style={link}>Impressum</a></li>
        <li><a href="/datenschutz" style={link}>Datenschutz</a></li>
      </ul>
      <LanguageSelector />
    </nav>
  );
}

const link = { color: '#fff', textDecoration: 'none', fontWeight: 500 };