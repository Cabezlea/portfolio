import React, { useState } from 'react';
import './Contact.css';
import GitHubIcon from '../Images/Github.svg';
import MailIcon from '../Images/Mail.svg';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="contact-container">
            <h1 className="contact-header">Contact</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />

                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Enter your message"></textarea>

                <button type="submit">Send</button>
            </form>
            <div className="github-link">
                <a href="https://github.com/Cabezlea?tab=overview&from=2024-10-01&to=2024-10-04" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubIcon} alt="GitHub" className="icon" />
                </a>
            </div>
            <div className="mail-link">
                <a href="mailto:Leandro.cabezas@utdallas.edu">
                    <img src={MailIcon} alt="Email" className="icon" />
                </a>
            </div>
        </div>
    );
};

export default Contact;
