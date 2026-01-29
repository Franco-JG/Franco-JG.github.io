import { useRef, useEffect, useCallback } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 200;
const MAX_DISTANCE = 20;
const DISPLACEMENT = 3;
const MAX_Y_DISPERSION = 3;
const CENTRAL_MASS = 0.5;
const SPEED_FACTOR = 1.0;

function Particles() {
  const pointsRef = useRef();
  const geometryRef = useRef();
  const initializedRef = useRef(false);
  const pointTexture = useLoader(THREE.TextureLoader, 'white.png');
  const positions = useRef(new Float32Array(PARTICLE_COUNT * 3));
  const sizes = useRef(new Float32Array(PARTICLE_COUNT));
  const angles = useRef(new Float32Array(PARTICLE_COUNT));
  const radii = useRef(new Float32Array(PARTICLE_COUNT));
  const colors = useRef(new Float32Array(PARTICLE_COUNT * 3)); 

  const initializeParticles = useCallback(() => {
    if (!geometryRef.current) return;
    
    const positionsArray = positions.current;
    const sizesArray = sizes.current;
    const anglesArray = angles.current;
    const radiiArray = radii.current;
    const colorsArray = colors.current;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const index = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const radius = Math.random() * MAX_DISTANCE + DISPLACEMENT;
      const yDispersion = (radius / MAX_DISTANCE) * MAX_Y_DISPERSION;
      const distanceRatio = radius / MAX_DISTANCE;

      colorsArray[index] = 1 - distanceRatio;
      colorsArray[index + 1] = 1 - distanceRatio;
      colorsArray[index + 2] = 1 - distanceRatio;

      anglesArray[i] = theta;
      radiiArray[i] = radius;

      positionsArray[index] = radius * Math.cos(theta);
      positionsArray[index + 1] = radius * Math.sin(theta);
      positionsArray[index + 2] = (Math.random() - 0.5) * yDispersion * 2;

      sizesArray[i] = Math.random() < 0.01 ? 0.9 : 0.02 + Math.random() * 0.6;
    }

    // Create attributes
    geometryRef.current.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));
    geometryRef.current.setAttribute('size', new THREE.BufferAttribute(sizesArray, 1));
    geometryRef.current.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    
    // Mark as initialized
    initializedRef.current = true;
  }, []);

  const updateParticles = useCallback((delta) => {
    if (!geometryRef.current || !initializedRef.current) return;

    const positionsArray = positions.current;
    const anglesArray = angles.current;
    const radiiArray = radii.current;
    const colorsArray = colors.current;

    const dt = delta * SPEED_FACTOR;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const index = i * 3;

      anglesArray[i] += Math.sqrt(CENTRAL_MASS / radiiArray[i]) * dt;

      positionsArray[index] = radiiArray[i] * Math.cos(anglesArray[i]);
      positionsArray[index + 1] = radiiArray[i] * Math.sin(anglesArray[i]);

      const distanceRatio = radiiArray[i] / MAX_DISTANCE;
      colorsArray[index] = 1 - distanceRatio;
      colorsArray[index + 1] = 1 - distanceRatio;
      colorsArray[index + 2] = 1;
    }

    try {
      // Get the attributes (make sure they exist)
      const positionAttribute = geometryRef.current.getAttribute('position');
      const colorAttribute = geometryRef.current.getAttribute('color');
      
      if (positionAttribute && colorAttribute) {
        // Copy updated data to the attribute (safer than using .set())
        for (let i = 0; i < positionsArray.length; i++) {
          positionAttribute.array[i] = positionsArray[i];
        }
        
        for (let i = 0; i < colorsArray.length; i++) {
          colorAttribute.array[i] = colorsArray[i];
        }
        
        // Mark attributes as needing update
        positionAttribute.needsUpdate = true;
        colorAttribute.needsUpdate = true;
      }
    } catch (error) {
      console.error("Error updating particle attributes:", error);
    }
  }, []);

  useEffect(() => {
    // Wait for the next frame to ensure the geometry is available
    const timer = setTimeout(() => {
      initializeParticles();
    }, 0);
    
    return () => clearTimeout(timer);
  }, [initializeParticles]);

  useFrame((state, delta) => {
    const clampedDelta = Math.min(delta, 0.06);
    updateParticles(clampedDelta);
  });

  return (
    <points ref={pointsRef} frustumCulled={true}>
      <bufferGeometry ref={geometryRef} />
      <shaderMaterial
        uniforms={{
          pointTexture: { value: pointTexture },
        }}
        vertexShader={`
          attribute float size;
          varying float vSize;
          varying vec3 vColor;
          void main() {
            vSize = size;
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          uniform sampler2D pointTexture;
          varying float vSize;
          varying vec3 vColor;
          void main() {
            float alpha = vSize * 3.0;
            gl_FragColor = vec4(vColor, alpha);
            gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
          }
        `}
        transparent={true}
        vertexColors={true}
      />
    </points>
  );
}

export default Particles;