import React from 'react';
import '../style/card.css';

export default function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.imageUrl} alt="" />
    </div>
  );
}
