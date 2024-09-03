import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CanvasLoader from "./Loader";

const ThreeDScene = () => {
    useEffect(() => {
        // Setup the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement); // Attach the renderer to the DOM

        // Set camera position
        camera.position.z = 500;

        // Lights
        const topLight = new THREE.DirectionalLight(0xffffff, 1);
        topLight.position.set(500, 500, 500);
        scene.add(topLight);

        const ambientLight = new THREE.AmbientLight(0x333333, 1);
        scene.add(ambientLight);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);

        // Load the GLTF model
        const loader = new GLTFLoader();
        loader.load(
            `${process.env.PUBLIC_URL}/Images/black_hole/scene.gltf`,  // Corrected path
            (gltf) => {
                const object = gltf.scene;
                scene.add(object);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error('An error happened:', error);
            }
        );

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            controls.update();
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return null; // No need to render a div since we are using document.body directly
};

export default ThreeDScene;
