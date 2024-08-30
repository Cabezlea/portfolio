import React, { useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Navbar from './Navbar';
import ThreeDBackground from './Pages/ThreeDBackground';

const App = () => {
    const wrapperRef = useRef(null);  // Use ref if you plan to add smooth scrolling logic later

    return (
        <BrowserRouter>
            <div className="app-container"> {/* Main container for application */}
                <ThreeDBackground /> {/* 3D background here */}
                <Navbar /> {/* Always visible navbar */}
                <div className='wrapper' ref={wrapperRef}> {/* Container for scrolling */}
                    <div id="home" className='section'>
                        <Home />
                    </div>
                    <div id="portfolio" className='section'>
                        <Portfolio />
                    </div>
                    <div id="experience" className='section'>
                        <Experience />
                    </div>
                    <div id="contact" className='section'>
                        <Contact />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
