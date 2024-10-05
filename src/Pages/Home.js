import React from 'react';
import './Home.css';
import ThreeDScene from "../Components/ThreeDScene";

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
                Digital nomad crafting immersive experiences that blend artistry with utility—transforming everyday interactions into imaginative adventures
            </p>
            <ThreeDScene />
        </div>
    );
};

export default Home;
