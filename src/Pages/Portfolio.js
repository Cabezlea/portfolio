import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            name: "Vinum - AI-Powered Wine Recommendation",
            description: "Engineered and co-founded Vinum, a personalized wine discovery mobile app with React Native, Xcode, and Grok AI's API for enhanced wine suggestions.",
            image: '/Images/Vinum.png'
        },
        {
            name: "Mercadona - Financial Data Processing",
            description: "Developed a Python-based system for financial transaction categorization using advanced regex algorithms, enhancing budget management capabilities.",
            image: '/Images/Mercadona.png'
        },
        {
            name: "Music Player - Full Stack App Development",
            description: "Crafted a cross-platform music player in C++ with QT, focusing on low-latency audio data handling and efficient system architecture.",
            image: '/Images/MusicPlayer.png'
        }
    ];

    return (
        <div className="portfolio-container">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.name} className="project-image" />
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
