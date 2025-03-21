import { EffectComposer, Bloom, HueSaturation, Pixelation, Glitch  } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

function Postprocessing() {

  return (
      <EffectComposer

      >
        {/* <Glitch
          delay={[1.5, 3.5]} // [min, max] delay entre glitches
          duration={[0.1, 0.3]} // [min, max] duración de cada glitch
          strength={[0.3, 0.8]} // [min, max] intensidad del efecto
          // mode={GlitchMode.CONSTANT} // CONSTANT o SPORADIC
          // active={true} // activa/desactiva el efecto
          ratio={0.25} // probabilidad de que ocurra el glitch
          chromaticAberrationOffset={[0.2, 0.4]} // desplazamiento RGB
          // perturbationMap={perturbationTexture} // textura opcional para el efecto
        /> */}
        <Bloom
          intensity={2}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.8}
          mipmapBlur
          blendFunction={BlendFunction.ALPHA}
          // opacity={0.7}
        />
        <HueSaturation hue={0} saturation={0.30} />
      </EffectComposer>
  );
}

export default Postprocessing;
