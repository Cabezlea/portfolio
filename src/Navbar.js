import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="home" smooth={true} duration={500}>Home</Link>
            <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
            <Link to="experience" smooth={true} duration={500}>Experience</Link>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </div>
    );
};

export default Navbar;
