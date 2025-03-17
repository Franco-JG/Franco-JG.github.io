import { EffectComposer, Bloom, HueSaturation, Pixelation  } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

function Postprocessing() {

  return (
      <EffectComposer

      >
        <Bloom
          intensity={2}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.8}
          mipmapBlur
          blendFunction={BlendFunction.ALPHA}
          // opacity={0.7}
        />
        {/* <HueSaturation hue={0} saturation={0.30} /> */}
      </EffectComposer>
  );
}

export default Postprocessing;
