import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Configura las animaciones para el timeline de GSAP.
 * @param {Object} ref - Referencia al grupo de Three.js.
 * @param {Object} camera - Cámara de Three.js.
 * @param {boolean} isMobile - Indica si el dispositivo es móvil.
 */
export const setupAnimations = (ref, camera, isMobile) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: document.documentElement, // Usa el elemento raíz del documento
      start: 'top top',
      end: 'bottom bottom',
      scrub: true, // Hace que el timeline se sincronice con el scroll
      markers: false, // Cambia a true para debuggear
    },
  });

  // Animación del grupo (rotación)
  tl.to(
    ref.current.rotation,
    {
      duration: 3,
      x: -Math.PI / 4, // 45 grados
      y: -Math.PI / 3, // 120 grados
    },
    0
  );

  // Animación del grupo (posición)
  tl.to(
    ref.current.position,
    {
      duration: 3,
      x: isMobile ? 2 : 10,
      y: isMobile ? -5 : 0,
      z: -10,
      ease: 'power2.in',
    },
    0
  );

  // Animación de la cámara
  tl.to(
    camera.position,
    {
      duration: 3,
      x: isMobile ? 5 : 10,
      onUpdate: () => camera.lookAt(0, 0, -10),
    },
    0
  );
};

/**
 * Configura Lenis y GSAP para sincronizar el scroll.
 * @param {Object} lenis - Instancia de Lenis.
 */
export const setupLenisWithGSAP = (lenis) => {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.lagSmoothing(0);

  function update(time) {
    lenis.raf(time * 1000);
  }

  gsap.ticker.add(update);

  return () => {
    gsap.ticker.remove(update);
    lenis.destroy();
  };
};