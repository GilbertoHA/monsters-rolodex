import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card-container">
      <img
        alt="robot-name"
        src={`https://robohash.org/${props.monster.id}?size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
}

export default Card;
