// src/components/AICard.js
import React from 'react';

const AICard = ({ title, description }) => {
  return (
    <div className="card ai-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default AICard;
