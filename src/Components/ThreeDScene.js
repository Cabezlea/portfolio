import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from './Loader'; // Import the updated loader
import spacemanModel from '../Images/Spaceman.glb';

const SpacemanModel = () => {
    const spacemanRef = useRef();
    const { scene } = useGLTF(spacemanModel);

    // Subtle rotation
    useFrame(() => {
        spacemanRef.current.rotation.y += 0.005;
    });

    return <primitive object={scene} ref={spacemanRef} scale={[1.5, 1.5, 1.5]} position={[0, -0.5, 0]} />;
};


const ThreeDScene = () => {
    return (
        <Canvas
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh' }}
            camera={{ position: [0, 0, 50], fov: 75 }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <SpacemanModel />
            </Suspense>
        </Canvas>
    );
};

export default ThreeDScene;
