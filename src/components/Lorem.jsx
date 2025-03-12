import React from 'react';
import BlurCard from './BlurCard';

const Lorem = () => {
  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <div>
      <BlurCard>
        <h2>Card 1</h2>
        <p>{loremText}</p>
      </BlurCard>
      <BlurCard>
        <h2>Card 2</h2>
        <p>{loremText}</p>
      </BlurCard>
      <BlurCard>
        <h2>Card 3</h2>
        <p>{loremText}</p>
      </BlurCard>
      <BlurCard>
        <h2>Card 4</h2>
        <p>{loremText}</p>
      </BlurCard>
      <BlurCard>
        <h2>Card 5</h2>
        <p>{loremText}</p>
      </BlurCard>
    </div>
  );
};

export default Lorem;