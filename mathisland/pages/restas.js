// pages/restas.js
import { useState } from 'react';
import Header from '../components/header';
import Quiz from '../components/Quiz';

const Restas = () => {
  const [score, setScore] = useState(0);
  const problem = { question: '9 - 4', answer: 5 };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      alert("¡Correcto! Ganaste una estrella.");
    } else {
      alert("Incorrecto, intenta de nuevo.");
    }
  };

  return (
    <div>
      <Header />
      <h2>Selva de las Restas</h2>
      <Quiz problem={problem} onAnswer={handleAnswer} />
      <p>Puntuación: {score}</p>
    </div>
  );
};

export default Restas;
