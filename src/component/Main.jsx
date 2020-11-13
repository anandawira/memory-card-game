import React, { useState } from 'react';
import Card from './Card';
import '../style/main.css';
import ImageArray from '../asset/imageIndex';

const cloneDeep = require('lodash.clonedeep');

export default function Main(props) {
  const [images, setImages] = useState(cloneDeep(ImageArray));

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function handleClick(clicked, index) {
    console.log(clicked);
    if (clicked) {
      console.log('Game Over');
      props.resetScore();
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

  return (
    <main>
      {images.map((imageObj, index) => (
        <Card
          imageUrl={imageObj.image}
          key={index}
          onClick={() => handleClick(imageObj.clicked, index)}
        />
      ))}
    </main>
  );
}
