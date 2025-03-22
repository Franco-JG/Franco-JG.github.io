import { EffectComposer, Bloom, SelectiveBloom  } from '@react-three/postprocessing';
import { useThree } from '@react-three/fiber';
import { BlendFunction } from 'postprocessing';

function Postprocessing() {

  const {scene} = useThree();

  return (
      <EffectComposer

      >
        <Bloom
          intensity={1}
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
