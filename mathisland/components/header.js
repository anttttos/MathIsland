// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <h1>El Reto de la Isla Matemática</h1>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/sumas">Playa de las Sumas</Link>
        <Link href="/restas">Selva de las Restas</Link>
        <Link href="/multiplicacion">Montañas de la Multiplicación</Link>
        <Link href="/pistas">Sistema de Pistas</Link>
      </nav>
    </header>
  );
};

export default Header;
