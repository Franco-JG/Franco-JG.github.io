import React from 'react';
import './BlurCard.css';

const BlurCard = ({ children }) => {
  return (
    <div className="blur-card">
      {children}
    </div>
  );
};

export default BlurCard;