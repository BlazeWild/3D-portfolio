// src/components/GameCard.js
import React from 'react';

const GameCard = ({ title, description }) => {
  return (
    <div className="card game-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default GameCard;
