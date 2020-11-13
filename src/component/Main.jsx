import React from 'react';
import Card from './Card';
import '../style/main.css';
import images from '../asset/imageIndex';

export default function Main() {
  console.log(images);
  return (
    <main>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  );
}
