import React from 'react';
import Header from '../components/Header';
import BlurCard from '../components/BlurCard';

const Home = () => {
  return (
    <div className="relative-content">
      <Header />
      <BlurCard>
        <h2>Quién soy</h2>
        <p>Bienvenido a mi portafolio. Soy Franco, un desarrollador apasionado por la tecnología y la innovación. Aquí encontrarás información sobre mis proyectos y habilidades.</p>
      </BlurCard>
      {/* Añade más contenido según sea necesario */}
    </div>
  );
};

export default Home;