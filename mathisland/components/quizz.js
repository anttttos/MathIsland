// components/Quiz.js
import { useState } from 'react';

const Quiz = ({ problem, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleAnswer = () => {
    onAnswer(parseInt(userAnswer) === problem.answer);
    setUserAnswer('');
  };

  return (
    <div>
      <p>{problem.question}</p>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={handleAnswer}>Responder</button>
    </div>
  );
};

export default Quiz;
