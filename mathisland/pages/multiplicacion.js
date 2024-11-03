// pages/multiplicacion.js
import { useState } from 'react';
import Header from '../components/Header';
import ChallengeCard from '../components/ChallengeCard';

const Multiplicacion = () => {
  const [score, setScore] = useState(0);
  const challenges = [
    { title: "Multiplicación fácil", description: "2 x 3 = ?" },
    { title: "Multiplicación media", description: "5 x 4 = ?" },
  ];

  return (
    <div>
      <Header />
      <h2>Montañas de la Multiplicación</h2>
      {challenges.map((challenge, index) => (
        <ChallengeCard key={index} title={challenge.title} description={challenge.description} />
      ))}
      <p>Puntuación: {score}</p>
    </div>
  );
};

export default Multiplicacion;