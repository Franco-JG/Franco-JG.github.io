import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  // Inicializar Lenis al montar el componente
  useEffect(() => {
    
    //! Importante: configura ScrollTrigger para usar el método de Lenis para obtener el progreso del scroll
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenisRef.current.scrollTo(value);
        }
        return lenisRef.current.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });


    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Función de suavizado (ease-out)
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true, // Desactivar en dispositivos táctiles si prefieres
      touchMultiplier: 2,
      infinite: false,
    });

    // Opcional: integrar con GSAP
    lenisRef.current.on('scroll', ScrollTrigger.update);

    // Función que se ejecuta en cada frame para actualizar Lenis
    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return <>{children}</>;
};
SmoothScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SmoothScroll;