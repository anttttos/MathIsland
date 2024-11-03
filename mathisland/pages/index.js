// pages/index.js
import Header from '../components/Header';
import ProgressBar from '../components/progressbar';

const Home = () => {
  return (
    <div>
      <Header />
      <h2>Bienvenido a la Isla Matemática</h2>
      <p>Explora las diferentes zonas para aprender matemáticas y completa desafíos.</p>
      <ProgressBar progress={50} /> {/* Ejemplo de progreso al 50% */}
    </div>
  );
};

export default Home;
