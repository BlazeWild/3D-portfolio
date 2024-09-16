import React, { useState } from 'react';
import AICard from './AICard';
import GameCard from './GameCard';
import { aiCards, gameCards } from '../data';  // Import the card data
import '../cardcss.css'
const CardSwitcher = () => {
  const [activeCardType, setActiveCardType] = useState('ai');

  return (
    <div className="card-switcher">
      <div className="buttons">
        <button onClick={() => setActiveCardType('ai')}>AI</button>
        <button onClick={() => setActiveCardType('game')}>Game</button>
      </div>

      <div className="card-content">
        {activeCardType === 'ai' && aiCards.map((card, index) => (
          <AICard key={index} title={card.title} description={card.description} />
        ))}
        {activeCardType === 'game' && gameCards.map((card, index) => (
          <GameCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default CardSwitcher;
