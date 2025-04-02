import { useRef, lazy, useEffect } from 'react';
import { useThree } from '@react-three/fiber';

// Importación lazy de los componentes
const Particles = lazy(() => import('./Particles'));
const Circle = lazy(() => import('./Circle'));

const Scene = ({ progress = 0 }) => {
  const ref = useRef();
  const { camera } = useThree();
  const isMobile = window.innerWidth < 768;
  
  // Variables para las animaciones
  const rotationEndX = -Math.PI / 4;
  const rotationEndY = -Math.PI / 3;
  const positionEndX = isMobile ? 2 : 10;
  const positionEndY = isMobile ? -5 : 0;
  const positionEndZ = -10;
  const cameraEndX = isMobile ? 5 : 10;

  // Actualizar las transformaciones basadas en el progreso del scroll
  useEffect(() => {
    if (!ref.current) return;

    // Aplicar las transformaciones
    ref.current.rotation.x = rotationEndX * progress;
    ref.current.rotation.y = rotationEndY * progress;
    
    ref.current.position.x = positionEndX * progress;
    ref.current.position.y = positionEndY * progress;
    ref.current.position.z = positionEndZ * progress;
    
    // Actualizar la cámara
    camera.position.x = cameraEndX * progress;
    camera.lookAt(0, 0, -10 * progress);
    
  }, [progress, camera, rotationEndX, rotationEndY, positionEndX, positionEndY, positionEndZ, cameraEndX]);

  return (
    <group ref={ref}>
      <Circle />
      <Particles />
    </group>
  );
};

export default Scene;