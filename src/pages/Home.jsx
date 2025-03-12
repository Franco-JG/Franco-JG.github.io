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
      <BlurCard>
        <h2>Mi pasión</h2>
        <h1>
            <Typewriter
              options={{
                strings: ['Lesly 🍑'],
                autoStart: true,
                loop: true,
              }}
            /> y los autos
        </h1>
      </BlurCard>
      {/* Añade más contenido según sea necesario */}
      <Lorem/>
    </div>
  );
};

export default Home;