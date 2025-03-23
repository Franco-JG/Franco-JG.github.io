import { lazy } from "react";
import { Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Color } from "three";
import Scene from "../three/scene/Scene";
import { Box } from "@mui/material";
const Postprocessing = lazy(() => import('../three/scene/Postprocessing'));

const Experience = () => {
    return(
        <Box sx={{ height: '100vh', width: '100%', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
            <Canvas
            camera={{ 
              position: window.innerWidth < 768 ? [0, 0, 15] : [0, 0, 20],
              fov: 45 }}
            dpr={
              Math.min(window.devicePixelRatio, 1.5)}
            gl={{
              alpha: false, 
              antialias: false,
              powerPreference: 'high-performance'}}
            scene={{
              background: new Color('black')}}
            shadows={false}
            >
              <Stats />
              <Scene />
              {/* <Postprocessing /> */}
            </Canvas>
        </Box>
    );
}

export default Experience;