import React, { useState } from 'react';
import Card from './Card';
import '../style/main.css';
import ImageArray from '../asset/imageIndex';
import GameOver from './GameOver';

const cloneDeep = require('lodash.clonedeep');

export default function Main(props) {
  const [images, setImages] = useState(cloneDeep(ImageArray));
  const [isGameOver, setIsGameOver] = useState(false);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function gameOver() {
    setIsGameOver(true);
    setTimeout(() => {
      setIsGameOver(false);
      props.resetScore();
    }, 3000);
  }

  function handleClick(clicked, index) {
    if (clicked) {
      gameOver();
      const newImageArray = cloneDeep(ImageArray);
      shuffle(newImageArray);
      setImages(newImageArray);
    } else {
      props.incrementScore();
      const newImageArray = cloneDeep(images);
      newImageArray[index].clicked = true;
      shuffle(newImageArray);
      setImages(newImageArray);
    }
  }

  const cardsDom = images.map((imageObj, index) => (
    <Card
      imageUrl={imageObj.image}
      key={index}
      onClick={() => handleClick(imageObj.clicked, index)}
    />
  ));

  return (
    <main>
      {isGameOver ? <GameOver score={props.score} /> : cardsDom}
      {/* <GameOver /> */}
    </main>
  );
}
