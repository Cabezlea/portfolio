import React, { useRef } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Navbar from './Navbar';
import ThreeDScene from "./Components/ThreeDScene";

const App = () => {
    const wrapperRef = useRef(null);

    return (
        <Router>
            <Navbar />
            <div className="wrapper" ref={wrapperRef}>
                {/* Home Section */}
                <section id="home" className="section">
                    <Home />
                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className="section">
                    <Portfolio />
                </section>

                {/* Experience Section */}
                <section id="experience" className="section">
                    <Experience />
                </section>

                {/* Contact Section */}
                <section id="contact" className="section">
                    <Contact />
                </section>
            </div>
        </Router>
    );
};

export default App;
