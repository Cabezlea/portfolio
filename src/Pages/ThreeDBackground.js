import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const ThreeDBackground = () => {
    return (
        <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
            {/* Stars component from @react-three/drei, which creates a starry background */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
            {/* Add other 3D objects or lights here */}
        </Canvas>
    );
};

export default ThreeDBackground;
