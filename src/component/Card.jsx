import React from 'react';
import '../style/card.css';

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="shih tzu" />
    </div>
  );
}
