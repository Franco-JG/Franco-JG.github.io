import React from 'react';
import Typewriter from 'typewriter-effect';
import BlurCard from './BlurCard';
import './Header.css';

const Header = () => {
  return (
    <BlurCard>
      <div className="header-content">
        <img src="path/to/avatar.jpg" alt="Avatar" className="avatar" />
        <h1>
          <Typewriter
            options={{
              strings: ['Franco'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
    </BlurCard>
  );
};

export default Header;