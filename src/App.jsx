import React, { useState } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import './style/app.css';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function incrementScore() {
    setScore(score + 1);
    if (score + 1 > bestScore) {
      setBestScore(score + 1);
    }
    console.log(score, bestScore);
  }

  function resetScore() {
    setScore(0);
  }

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <Main incrementScore={incrementScore} resetScore={resetScore} />
    </div>
  );
}
