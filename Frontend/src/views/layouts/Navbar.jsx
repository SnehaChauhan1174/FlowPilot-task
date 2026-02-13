import { Link } from 'react-router-dom';
import '../../style/layouts/Navbar.css';

function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#333',
      padding: '1rem 2rem',
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      zIndex: 1000,
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
        MyApp
      </div>
      
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
          Register
        </Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
