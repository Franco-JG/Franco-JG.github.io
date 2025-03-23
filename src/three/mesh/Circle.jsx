import { Billboard } from '@react-three/drei';
import { Color } from 'three';

const Circle = () =>{
  return(
    <Billboard
    >
      <mesh>
        <circleGeometry args={[0.5, 16]} />
        <meshStandardMaterial
          color={new Color("rgb(255, 255, 255)")}
          emissive={new Color("rgb(255, 255, 255)")}
          emissiveIntensity={5.5}
          // wireframe
        />
      </mesh>
    </Billboard>
  )
}

export default Circle;