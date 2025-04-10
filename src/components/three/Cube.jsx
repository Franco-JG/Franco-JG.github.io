import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';
// import * as THREE from 'three';

// Componente Cube que define la geometría y comportamiento del cubo
const CubeGeometry = ({ size = 2, wireframeColor = "#ff0000", ...props }) => {
  // Referencia al mesh para poder animarlo
  const meshRef = useRef();
  
  // Animación de rotación en dos ejes (X e Y)
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3; // Rotación en eje X
      meshRef.current.rotation.y += delta * 0.5; // Rotación en eje Y
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial 
        color={wireframeColor}
        wireframe={true}
        transparent={true}
        opacity={0.8}
      />
    </mesh>
  );
};

// Componente principal que incluye el Canvas y el Cubo
const Cube = () => {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 2]} // Optimización de resolución para diferentes dispositivos
      gl={{ antialias: true }} // Anti-aliasing para líneas más suaves
      camera={{ position: [0, 0, 4], fov: 50 }} // Posición de cámara fija
      performance={{ min: 0.5 }} // Configuración de rendimiento
    >
      <CubeGeometry/>
    </Canvas>
  );
};
CubeGeometry.propTypes = {
  size: PropTypes.number,
  wireframeColor: PropTypes.string,
};

export default Cube;