// pages/Contact.jsx
import React from 'react';
import '../style/Page.css';
import { motion } from 'framer-motion';
import splashImage from '../assets/contact.jpeg';


export default function Contact() {
    const emailSent = () => {
        alert(`message sent!`);
      };

  return (
    <motion.div className="page" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
    <div className="splash-container">
        <img src={splashImage} alt="Brewery Splash" className="splash-image" />
        <div className="splash-text">
      <h1>Contact</h1>
        <form className="contact-form">
        <fieldset className="fieldset">
            <legend>Get in touch with us for events, questions, or partnerships.</legend>
            <div className="form-group">
            <label>Name: </label>
            <input type="text" name="name" required />
            </div>
            <div className="form-group">
            <label> Email: </label>
            <input type="email" name="email" required />
            </div>
            <div className="form-group">
            <label>Message:</label>
            <textarea name="message" required></textarea>
            </div>
            <button onClick={emailSent} type="submit">Send</button>
            </fieldset>
        </form>
        </div>
        </div>
    </motion.div>
  );
}