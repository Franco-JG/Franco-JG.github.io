import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

function CameraControls() {
  const { camera } = useThree();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      camera.position.y = scrollY * 0.02; // Ajusta el factor de desplazamiento según sea necesario
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [camera]);

  return null;
}

export default CameraControls;