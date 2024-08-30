import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
                <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
