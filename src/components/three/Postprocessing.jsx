import { EffectComposer, Bloom} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

const Postprocessing = () => {

  return (
      <EffectComposer

      >
        <Bloom
          intensity={100}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.8}
          mipmapBlur
          blendFunction={BlendFunction.ALPHA}
          // opacity={0.7}
        />
      </EffectComposer>
  );
}

export default Postprocessing;
