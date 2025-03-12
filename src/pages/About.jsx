import React from 'react';
import BlurCard from '../components/BlurCard';

const About = () => {
  return (
    <div className="relative-content">
      <BlurCard>
        <h2>Sobre mí</h2>
        <p>Aquí puedes agregar información adicional sobre ti.</p>
      </BlurCard>
      {/* Añade más contenido según sea necesario */}
    </div>
  );
};

export default About;