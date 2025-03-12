import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const LoadingBar = () => {
  const meshRef = useRef();
  const progressRef = useRef(0);

  useFrame(() => {
    progressRef.current += 0.01;
    if (progressRef.current > 1) progressRef.current = 0;

    if (meshRef.current) {
      meshRef.current.scale.x = 0.1 + progressRef.current;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[2, 0.1]} />
      <meshBasicMaterial color="white" transparent opacity={0.8} />
    </mesh>
  );
};

export default LoadingBar;