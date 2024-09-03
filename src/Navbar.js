import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
        </div>
    );
};

export default Navbar;
