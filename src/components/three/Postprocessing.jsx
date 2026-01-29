import { EffectComposer, Bloom} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

const Postprocessing = () => {

  return (
      <EffectComposer

      >
        <Bloom
          intensity={1}
          luminanceThreshold={0.4}
          luminanceSmoothing={1.8}
          mipmapBlur
          blendFunction={BlendFunction.ALPHA}
          // opacity={0.7}
        />
      </EffectComposer>
  );
}

export default Postprocessing;
