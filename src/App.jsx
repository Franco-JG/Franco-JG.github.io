import React from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, BrightnessContrast, HueSaturation } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
import Particles from './Particles';
import CameraControls from './CameraControls';

function BloomEffect() {

  const { size } = useThree();

  return (
    <EffectComposer>
      <Bloom
        intensity={5}
        kernelSize={KernelSize.VERY_SMALL}
        luminanceThreshold={0.6}
        luminanceSmoothing={0.6}
        mipmapBlur
        width={size.width}
        height={size.height}
      />
      <BrightnessContrast brightness={0.02} contrast={0.2}/>
      <HueSaturation hue={0} saturation={0.30} />
    </EffectComposer>
  );
}

function App() {
  return (
    <>
      <Canvas
        style={{ height: '100vh', width: '100vw', background: 'black'  }}
        camera={{ position: [70, -20, 45], fov: 45 }}
        dpr={window.devicePixelRatio}
      >
        <Sphere args={[2, 16, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial
            attach="material"
            color="white"
            emissive="white"
            emissiveIntensity={1.5}
          />
        </Sphere>
        <Particles />
        <BloomEffect />
        <OrbitControls />
      </Canvas>
      {/* <div style={{ height: '300vh' }}></div> */}
    </>
  );
}

export default App;
