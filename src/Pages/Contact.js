import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import GitHubIcon from '../Images/Github.svg';
import MailIcon from '../Images/Mail.svg';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: '', // Changed from 'name'
        from_email: '', // Changed from 'email'
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

        // Check if all fields are filled
        if (!formData.from_name || !formData.from_email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        emailjs.sendForm(
            'service_2tqojrk',
            'template_e49mswr',
            form.current,
            '8K0WcWO2498S0pIYA'
        )
            .then((result) => {
                console.log('SUCCESS!', result.text);
                alert('Message sent successfully!');
                // Clear form after successful send
                setFormData({
                    from_name: '',
                    from_email: '',
                    message: ''
                });
            }, (error) => {
                console.log('FAILED...', error.text);
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <div className="contact-container">
            <h1 className="contact-header">Contact</h1>
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="from_name">Full Name</label>
                <input
                    type="text"
                    id="from_name"
                    name="from_name" // Changed to match template variable
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                />

                <label htmlFor="from_email">Email Address</label>
                <input
                    type="email"
                    id="from_email"
                    name="from_email" // Changed to match template variable
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Enter your message"
                    required
                />

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
