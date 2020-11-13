import React from 'react';
import '../style/header.css';

export default function Header(props) {
  return (
    <header>
      <div id="title">
        <h1>MEMORY CARD GAME</h1>
        <h3>
          Get points by clicking on an image but don't click on any more than
          once!
        </h3>
      </div>
      <div id="score">
        <div id="currentScore" className="scoreCard">
          <p className='label'>SCORE</p>
          <p className='value'>{props.score}</p>
        </div>
        <div id="bestScore" className="scoreCard">
          <p className='label'>BEST</p>
          <p className='value'>{props.bestScore}</p>
        </div>
      </div>
    </header>
  );
}
