import React from 'react';
import './Home.css';

const produceSpans = (text) => {
    return text.split("").map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
      {char === " " ? "\u00A0" : char}
    </span>
    ));
};

const Home = () => {
    return (
        <div className="hero-content">
            <h1>{produceSpans("LEANDRO CABEZAS")}</h1>
            <p className="subtitle">Software Developer</p>
            <p className="description">
                I love crafting captivating experiences for the digital world to savor.
            </p>
        </div>
    );
};

export default Home;
