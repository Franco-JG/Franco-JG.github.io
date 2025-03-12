import { useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, BrightnessContrast, HueSaturation } from '@react-three/postprocessing';

function Postprocessing() {

  const { size } = useThree();

  return (
    <>
      <EffectComposer>
        <Bloom
          intensity={5}
          luminanceThreshold={0.1}
          luminanceSmoothing={1}
          mipmapBlur
          width={size.width}
          height={size.height}
        />
        <BrightnessContrast brightness={0.02} contrast={0.2}/>
        <HueSaturation hue={0} saturation={0.30} />
      </EffectComposer>
    </>
  );
}

export default Postprocessing;