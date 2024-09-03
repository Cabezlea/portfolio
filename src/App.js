import React, { useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Navbar from './Navbar';
import ThreeDScene from './Components/ThreeDScene.js'; // Corrected import path

const App = () => {
    const wrapperRef = useRef(null);

    return (
        <BrowserRouter>
            <div className="app-container">
                <ThreeDScene /> {/* 3D scene from GitHub repo using traditional Three.js */}
                <Navbar />
                <div className="wrapper" ref={wrapperRef}>
                    <div id="home" className="section">
                        <Home />
                    </div>
                    <div id="portfolio" className="section">
                        <Portfolio />
                    </div>
                    <div id="experience" className="section">
                        <Experience />
                    </div>
                    <div id="contact" className="section">
                        <Contact />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
