import { useFrame } from '@react-three/fiber';
import { useRef, lazy } from 'react';

const Particles = lazy(() => import('./Particles'));
const Postprocessing = lazy(() => import('./Postprocessing'));

function Scene() {
  const materialRef = useRef();

  // useFrame(({ clock }) => {
  //   const time = clock.getElapsedTime();

  //   // Oscilación base suave entre 1 y 1.3
  //   const baseOscillation = 1 + Math.sin(time * 3) * 0.3; // Resultado: 1 -> 1.3

  //   // Parpadeo aleatorio ocasional que sube hasta 1.5
  //   const randomFlicker = (Math.random() > 0.92) ? Math.random() * 10 : 0; // Hasta 0.2 extra

  //   // Combinamos ambos efectos
  //   let intensity = baseOscillation + randomFlicker;

  //   // Limita a un máximo de 1.5, y mínimo de 1
  //   intensity = Math.min(Math.max(intensity, 1), 1.5);

  //   if (materialRef.current) {
  //     materialRef.current.emissiveIntensity = intensity;
  //   }
  // });

  return (
    <>
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial
          ref={materialRef}
          color="white"
          emissive="white"
          emissiveIntensity={1}
        />
      </mesh>
      <Particles />
      <Postprocessing />
    </>
  );
}

export default Scene;
