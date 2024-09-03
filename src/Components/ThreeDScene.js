import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from './Loader'; // Import the updated loader
import spacemanModel from '../Images/Spaceman.glb';
import blackHole from '../Images/black_hole.glb';

const SpacemanModel = () => {
    const { scene } = useGLTF(spacemanModel);
    return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
};

const BlackHole = () =>  {
    const { scene } = useGLTF(blackHole);
    return <primitive object= {scene} scale={1.5} position={[0, -1, 0]} />;
}


const ThreeDScene = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={<CanvasLoader />}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <BlackHole />
                <SpacemanModel />
                <OrbitControls />
            </Suspense>
        </Canvas>
    );
};

export default ThreeDScene;
