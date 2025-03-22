import { useRef, useEffect, useMemo, useCallback } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 200;
const MAX_DISTANCE = 30;
const DISPLACEMENT = 1;
const MAX_Y_DISPERSION = 3;
const CENTRAL_MASS = 0.1;
// Antes usabas DT fijo de 0.03, que era una especie de factor de velocidad
const SPEED_FACTOR = 1.0; // Puedes ajustar esto si va muy lento o muy rápido

function Particles() {
  const particlesRef = useRef();
  const pointTexture = useLoader(THREE.TextureLoader, 'white.png');
  const pointColor = useMemo(() => new THREE.Color("rgb(255, 255, 255)"), []);
  const positions = useRef(new Float32Array(PARTICLE_COUNT * 3));
  const sizes = useRef(new Float32Array(PARTICLE_COUNT));
  const angles = useRef(new Float32Array(PARTICLE_COUNT));
  const radii = useRef(new Float32Array(PARTICLE_COUNT));
  const colors = useRef(new Float32Array(PARTICLE_COUNT * 3)); 

  const initializeParticles = useCallback(() => {
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
      const distanceRatio = radius / MAX_DISTANCE;  //Normalizar distancia

      colorsArray[index] = 1 - distanceRatio;           // R (más cercano al centro, más blanco)
      colorsArray[index + 1] = 1 - distanceRatio;       // G (más cercano al centro, más blanco)
      colorsArray[index + 2] = 1;                       // B (más lejano del centro, más azul)

      anglesArray[i] = theta;
      radiiArray[i] = radius;

      positionsArray[index] = radius * Math.cos(theta);
      positionsArray[index + 1] = radius * Math.sin(theta);
      positionsArray[index + 2] = (Math.random() - 0.5) * yDispersion * 2;

      sizesArray[i] = Math.random() < 0.01 ? 0.6 : 0.05 + Math.random() * 0.5;
    }

    if (particlesRef.current) {
      const positionAttr = new THREE.BufferAttribute(positionsArray, 3);
      positionAttr.setUsage(THREE.DynamicDrawUsage);

      particlesRef.current.setAttribute('position', positionAttr);
      particlesRef.current.setAttribute('size', new THREE.BufferAttribute(sizesArray, 1));
      particlesRef.current.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3)); // Cambiado a 3
    }
  }, []);

  const updateParticles = useCallback((delta) => {
    if (!particlesRef.current) return;

    const positionsArray = positions.current;
    const anglesArray = angles.current;
    const radiiArray = radii.current;
    const colorsArray = colors.current;

    // Aplicar delta escalado si lo necesitas
    const dt = delta * SPEED_FACTOR;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const index = i * 3;

      // Incremento de ángulo usando dt (delta frame time en segundos)
      anglesArray[i] += Math.sqrt(CENTRAL_MASS / radiiArray[i]) * dt;

      // Actualización de la posición en x, y
      positionsArray[index] = radiiArray[i] * Math.cos(anglesArray[i]);
      positionsArray[index + 1] = radiiArray[i] * Math.sin(anglesArray[i]);

      // Actualizar colores basados en la distancia
      const distanceRatio = radiiArray[i] / MAX_DISTANCE;
      colorsArray[index] = 1 - distanceRatio;     // R (más cercano al centro, más blanco)
      colorsArray[index + 1] = 1 - distanceRatio; // G (más cercano al centro, más blanco)
      colorsArray[index + 2] = 1;                 // B (más lejano del centro, más azul)
    }

    particlesRef.current.attributes.position.needsUpdate = true;
    particlesRef.current.attributes.color.needsUpdate = true;
  }, []);

  useEffect(() => {
    initializeParticles();
  }, [initializeParticles]);

  useFrame((state, delta) => {
    // Limita delta a 60ms máximo para evitar saltos grandes en bajas FPS
    const clampedDelta = Math.min(delta, 0.06);
    updateParticles(clampedDelta);
    // console.log(particlesRef.current.geometry.attributes.color);

  });

  return (
    <points frustumCulled={true}>
      <bufferGeometry ref={particlesRef} />
      <shaderMaterial
        uniforms={{
          pointTexture: { value: pointTexture },
          // particleColor: { value: pointColor }
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
