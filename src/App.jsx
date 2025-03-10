import React, { useRef, useEffect } from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei'; // Eliminamos OrbitControls
import { EffectComposer, RenderPass, UnrealBloomPass } from 'three-stdlib';
import Particles from './Particles';
import CameraControls from './CameraControls';
import * as THREE from 'three';

// Extender los componentes de postprocesado
extend({ EffectComposer, RenderPass, UnrealBloomPass });

function Bloom() {
  const { scene, gl, camera } = useThree();
  const composer = useRef();

  useEffect(() => {
    composer.current = new EffectComposer(gl);
    composer.current.addPass(new RenderPass(scene, camera));
    composer.current.addPass(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 2.5, 0.9, 0.2));
  }, [scene, gl, camera]);

  useFrame(() => composer.current && composer.current.render(), 1);

  return null;
}

function App() {
  return (
    <>
      <Canvas
        style={{ height: '100vh', width: '100vw' }}
        camera={{ position: [0, 0, 60], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Particles />
        <CameraControls />
        <OrbitControls />
        <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial attach="material" color="white" emissive="white" emissiveIntensity={1} />
        </Sphere>
        <Bloom />
      </Canvas>
      {/* <div style={{ height: '300vh' }}></div> */}
    </>
  );
}

export default App;