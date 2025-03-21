import React from 'react';
import Typewriter from 'typewriter-effect';
import Header from '../components/Header';
import BlurCard from '../components/BlurCard';
import Lorem from '../components/Lorem';

const Home = () => {
  return (
    <div className="relative-content">
      <Header />
      <BlurCard>
        <h2>Quién soy</h2>
        <p>Bienvenido a mi portafolio. Soy Franco, un desarrollador apasionado por la tecnología y la innovación.</p>
      </BlurCard>
      
      <Lorem/>
      <Lorem/>
      
    </div>
  );
};

export default Home;