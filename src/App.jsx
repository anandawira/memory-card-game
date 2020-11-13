import React, { useState } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import './style/app.css';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <Main />
    </div>
  );
}
