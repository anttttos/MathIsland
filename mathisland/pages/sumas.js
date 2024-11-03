// pages/sumas.js
import { useState } from 'react';
import Header from '../components/Header';
import ProgressBar from '../components/progressbar';

const Sumas = () => {
  const [score, setScore] = useState(0);
  const problem = { question: '5 + 3', answer: 8 };
  const [userAnswer, setUserAnswer] = useState('');

  const handleAnswer = () => {
    if (parseInt(userAnswer) === problem.answer) {
      setScore(score + 1);
      alert("¡Correcto! Ganaste una gema.");
    } else {
      alert("Incorrecto, intenta de nuevo.");
    }
    setUserAnswer('');
  };

  return (
    <div>
      <Header />
      <h2>Playa de las Sumas</h2>
      <ProgressBar progress={(score / 10) * 100} />
      <div>
        <p>{problem.question}</p>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button onClick={handleAnswer}>Responder</button>
      </div>
    </div>
  );
};

export default Sumas;
