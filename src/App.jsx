import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const App = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Variables globales
    const G = 5;
    const MAX_DISTANCE = 30;
    const DAMPING = 0.99;
    const DT = 0.016;
    const PARTICLE_COUNT = 5000;
    const CENTRAL_MASS = 0.1;
    const Y_DISPERSION = 1;

    // Configuración de la escena
    const scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(10));

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(8.3, 15, 20);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 12, 12),
      new THREE.MeshStandardMaterial({
        color: 0xffff00,
        emissive: 0xffffff,
        emissiveIntensity: 1
      })
    );

    scene.add(sphere);

    // Cargar textura para las partículas
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load('white.png'); // Reemplaza con la ruta correcta

    // Configuración de partículas
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);

    // Función para inicializar las partículas
    const initializeParticles = () => {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const index = i * 3;

        // Posición inicial aleatoria en coordenadas polares (plano XY)
        const theta = Math.random() * Math.PI * 2; // Ángulo en el plano XY
        const radius = Math.random() * MAX_DISTANCE; // Radio entre 0 y MAX_DISTANCE

        // Convertir coordenadas polares a cartesianas
        positions[index] = radius * Math.cos(theta); // x
        positions[index + 1] = radius * Math.sin(theta); // y
        positions[index + 2] = (Math.random() - 0.5) * Y_DISPERSION * 2; // z entre -Y_DISPERSION y Y_DISPERSION

        // Calcular velocidad orbital
        const orbitalSpeed = Math.sqrt(G * CENTRAL_MASS / radius); // Velocidad orbital kepleriana

        // Vector perpendicular para la órbita
        const perpVector = new THREE.Vector3(-positions[index + 1], positions[index], 0).normalize();

        // Establecer velocidad perpendicular a la posición para órbita circular
        velocities[index] = perpVector.x * orbitalSpeed; // vx
        velocities[index + 1] = perpVector.y * orbitalSpeed; // vy
        velocities[index + 2] = 0; // vz

        // Color inicial basado en la distancia al centro
        const distanceRatio = radius / MAX_DISTANCE; // Normalizar distancia
        colors[index] = 1 - distanceRatio; // R (más cercano al centro, más blanco)
        colors[index + 1] = 1 - distanceRatio; // G (más cercano al centro, más blanco)
        colors[index + 2] = 1; // B (más lejano del centro, más azul)

        // Tamaño aleatorio para las partículas
        sizes[i] = 0.1 + Math.random() * 0.4; // Tamaño entre 0.1 y 0.5
      }

      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    };

    // Función para actualizar las partículas
    const updateParticles = () => {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const index = i * 3;

        // Obtener posición actual
        const x = positions[index];
        const y = positions[index + 1];
        const z = positions[index + 2];

        // Calcular distancia al centro
        const radius = Math.sqrt(x * x + y * y);

        // Calcular velocidad orbital basada en la distancia
        const orbitalSpeed = Math.sqrt(G * CENTRAL_MASS / radius);

        // Vector perpendicular para la órbita
        const perpVector = new THREE.Vector3(-y, x, 0).normalize();

        // Actualizar velocidades para mantener órbita circular
        velocities[index] = perpVector.x * orbitalSpeed;
        velocities[index + 1] = perpVector.y * orbitalSpeed;
        velocities[index + 2] = 0; // Mantener vz en 0 para órbitas en el plano XY

        // Aplicar amortiguación a las velocidades
        velocities[index] *= DAMPING;
        velocities[index + 1] *= DAMPING;
        velocities[index + 2] *= DAMPING;

        // Actualizar posiciones
        positions[index] += velocities[index] * DT;
        positions[index + 1] += velocities[index + 1] * DT;
        positions[index + 2] += velocities[index + 2] * DT;

        // Actualizar colores en función de la distancia al centro
        const distanceRatio = radius / MAX_DISTANCE; // Normalizar distancia
        colors[index] = 1 - distanceRatio; // R (más cercano al centro, más blanco)
        colors[index + 1] = 1 - distanceRatio; // G (más cercano al centro, más blanco)
        colors[index + 2] = 1; // B (más lejano del centro, más azul)

        // Mantener partículas dentro de los límites
        const newRadius = Math.sqrt(positions[index] ** 2 + positions[index + 1] ** 2);
        if (newRadius > MAX_DISTANCE) {
          const scale = MAX_DISTANCE / newRadius;
          positions[index] *= scale;
          positions[index + 1] *= scale;
        }
      }

      particles.attributes.position.needsUpdate = true;
      particles.attributes.color.needsUpdate = true;
    };

    // Configuración de postprocesado con Bloom Pass
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.5, 0.4, 0.25);
    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Shader material para partículas con tamaño variable
    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        pointTexture: { value: particleTexture }
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        varying vec3 vColor;
        void main() {
          gl_FragColor = vec4(vColor, 1.0);
          gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
        }
      `,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
      vertexColors: true
    });

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);
      updateParticles();
      composer.render();
    };

    // Inicializar y ejecutar
    initializeParticles();
    scene.add(new THREE.Points(particles, particleMaterial));
    animate();

    // Manejo de redimensionamiento de ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Limpiar al desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default App;