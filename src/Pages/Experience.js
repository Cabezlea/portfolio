import React, { useState } from 'react';
import './Experience.css';

// Assuming you have an array of jobData like this:
const jobData = [
    {
        title: "Software Engineer Internship",
        company: "Sweet & Coffee, Guayaquil, Ecuador",
        date: "June 2024 - September 2024",
        details: [
            "Led the design and implementation of a centralized error log system using Django and Python, enhancing diagnostic capabilities across multiple SQL servers managed by PostgreSQL (Pgadmin4) and MySQL.",
            "Enhanced user interfaces with Vue.js, optimizing UX for internal system management tools and increasing operational efficiency. Used Axios for front and backend connection and created endpoints with Django REST.",
            "Spearheaded the development of a custom API to centralize server management tasks, boosting operational efficiency and system interoperability."
        ]
    },
    {
        title: "Programming Instructor",
        company: "Learn To Bot, The Woodlands, TX",
        date: "March 2024 - June 2024",
        details: [
            "Instructed over 150 students in Python and Java, significantly improving their computational thinking and enabling them to develop innovative projects.",
            "Facilitated hands-on programming workshops, promoting creativity and tech-savviness in young learners."
        ]
    }
];

const Experience = () => {
    const [selectedJob, setSelectedJob] = useState(jobData[0]); // Initialize with the first job

    return (
        <div className="experience-container">
            <h2 className="experience-title">Experience</h2>
            <div className="jobs-container">
                {jobData.map((job, index) => (
                    <div key={index} className="job-card" onClick={() => setSelectedJob(job)}>
                        <h3 className="job-title">{job.title}</h3>
                        <p className="job-company">{job.company}</p>
                        <p className="job-date">{job.date}</p>
                    </div>
                ))}
            </div>
            <div className="job-description">
                <ul>
                    {selectedJob.details.map((detail, index) => (
                        <li key={index} className="job-detail">{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
