import { useRef, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { BufferAttribute, TextureLoader, Color, AdditiveBlending } from 'three';

const PARTICLE_COUNT = 1000;
const MAX_DISTANCE = 30;
const DISPLACEMENT = 1;
const MAX_Y_DISPERSION = 3;
const CENTRAL_MASS = 0.1;
const DT = 0.06;

function Particles() {
  const particlesRef = useRef();
  const positions = useRef(new Float32Array(PARTICLE_COUNT * 3));
  const sizes = useRef(new Float32Array(PARTICLE_COUNT));
  const angles = useRef(new Float32Array(PARTICLE_COUNT));
  const radii = useRef(new Float32Array(PARTICLE_COUNT));

  useLayoutEffect(() => {
    const positionsArray = positions.current;
    const sizesArray = sizes.current;
    const anglesArray = angles.current;
    const radiiArray = radii.current;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const index = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const radius = Math.random() * MAX_DISTANCE + DISPLACEMENT;
      const yDispersion = (radius / MAX_DISTANCE) * MAX_Y_DISPERSION;

      anglesArray[i] = theta;
      radiiArray[i] = radius;

      positionsArray[index] = radius * Math.cos(theta); // x
      positionsArray[index + 1] = radius * Math.sin(theta); // y
      positionsArray[index + 2] = (Math.random() - 0.5) * yDispersion * 2; // z

      sizesArray[i] = Math.random() < 0.01 ? 1 : 0.1 + Math.random() * 0.5;
    }

    if (particlesRef.current) {
      particlesRef.current.setAttribute('position', new BufferAttribute(positionsArray, 3));
      particlesRef.current.setAttribute('size', new BufferAttribute(sizesArray, 1));
    }
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      const positionsArray = positions.current;
      const anglesArray = angles.current;
      const radiiArray = radii.current;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const index = i * 3;
        anglesArray[i] += Math.sqrt(CENTRAL_MASS / radiiArray[i]) * DT;
        positionsArray[index] = radiiArray[i] * Math.cos(anglesArray[i]);
        positionsArray[index + 1] = radiiArray[i] * Math.sin(anglesArray[i]);
      }

      particlesRef.current.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points>
      <bufferGeometry ref={particlesRef} />
      <shaderMaterial
        uniforms={{
          pointTexture: { value: new TextureLoader().load('white.png') },
          particleColor: { value: new Color("rgb(225, 143, 255)") }
        }}
        vertexShader={`
          attribute float size;
          varying float vSize;
          void main() {
            vSize = size;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          uniform sampler2D pointTexture;
          uniform vec3 particleColor;
          varying float vSize;
          void main() {
            float alpha = vSize * 2.0;
            gl_FragColor = vec4(particleColor, alpha);
            gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
          }
        `}
        blending={AdditiveBlending}
        depthTest={false}
        transparent={true}
        // toneMapped={false}
      />
    </points>
  );
}

export default Particles;