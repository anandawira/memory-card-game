import React, { useState } from 'react';
import Card from './Card';
import '../style/main.css';
import ImageArray from '../asset/imageIndex';

export default function Main() {
  const [images, setImages] = useState(ImageArray);
  console.log(images);
  return (
    <main>
      {images.map((image) => (
        <Card imageUrl={image.image} clicked={image.clicked} />
      ))}
    </main>
  );
}
