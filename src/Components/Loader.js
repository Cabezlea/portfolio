// src/Components/Loader.js
import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
    const { progress } = useProgress(); // Hook to get loading progress

    return (
        <Html
            as="div"
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <span className="canvas-loader"></span> {/* This can be styled via CSS */}
            <p
                style={{
                    fontSize: 14,
                    color: '#F1F1F1',
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};

export default CanvasLoader;
