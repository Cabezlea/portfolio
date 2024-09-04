import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';
import CanvasLoader from './Loader'; // Import the updated loader
import spacemanModel from '../Images/Spaceman.glb';

const SpacemanModel = () => {
    const spacemanRef = useRef();
    const { scene, animations } = useGLTF(spacemanModel, true); // The second parameter ensures the model and animations are draco-compressed if applicable.
    const { actions } = useAnimations(animations, spacemanRef);

    useFrame(() => {
        spacemanRef.current.rotation.y += 0.005; // Subtle rotation on the y-axis
    });

    useEffect(() => {
        if (actions['Idle']) {
            actions['Idle'].reset().play();
        }
    }, [actions]);

    return (
        <primitive
            object={scene}
            ref={spacemanRef}
            scale={[2.5, 2.5, 2.5]}  // Increased scale
            position={[4, 0.5, 42]}  // Adjust position closer to the camera
            rotation={[Math.PI / 0.7, -2.5, 3 * Math.PI / 4]}  // Tilts the spaceman backward
        />
    );
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
