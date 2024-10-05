import React from 'react';
import './Portfolio.css';
import VinumImage from '../Images/Vinum.png'; // Adjust the path as necessary
import MercadonaImage from '../Images/Mercadona.png'; // Adjust the path as necessary
import MusicPlayerImage from '../Images/MusicPlayer.png'; // Adjust the path as necessary

const Portfolio = () => {
    const projects = [
        {
            name: "Vinum - AI-Powered Wine Recommendation",
            description: "Engineered and co-founded Vinum, a personalized wine discovery mobile app with React Native, Xcode, and Grok AI's API for enhanced wine suggestions.",
            image: VinumImage,
            link: "https://github.com/Cabezlea/Vinum"
        },
        {
            name: "Mercadona - Financial Data Processing",
            description: "Developed a Python-based system for financial transaction categorization using advanced regex algorithms, enhancing budget management capabilities.",
            image: MercadonaImage,
            link: "https://github.com/Cabezlea/Main-Projects/tree/main/Python%20-%20Git/ScriptPythonMercadona"
        },
        {
            name: "Music Player - Full Stack App Development",
            description: "Crafted a cross-platform music player in C++ with QT, focusing on low-latency audio data handling and efficient system architecture.",
            image: MusicPlayerImage,
            link: "https://github.com/Cabezlea/MusicPlayer"
        }
    ];

    return (
        <div className="portfolio-container">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.name} className="project-image" />
                        </a>
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
