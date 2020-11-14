import React from 'react';
import '../style/gameover.css';

export default function GameOver(props) {
  return (
    <div id="gameOver">
      <h2>GAME OVER</h2>
      <p>SCORE : {props.score}</p>
    </div>
  );
}
