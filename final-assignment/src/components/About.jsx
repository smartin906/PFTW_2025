// pages/About.jsx
import React from 'react';
import '../style/Page.css';
import { motion } from 'framer-motion';
import splashImage from '../assets/about.jpeg';

const people = [
    { id: 1, name: 'Alex Brewer', title: 'Head Brewer', image: 'img/Alex_Brewer.jpeg' },
    { id: 2, name: 'Jamie Malt', title: 'Operations Manager', image: 'img/Jamie_Malt.jpeg' },
    { id: 3, name: 'Chris Hops', title: 'Lead Brewmaster', image: 'img/Chris_Hops.jpeg' },
    ];


export default function About() {
  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="splash-container">
        <img src={splashImage} alt="Brewery Splash" className="splash-image" />
        <div className="splash-text">
          <h1>About Roll 20 Brewery</h1>
            <p>At Roll 20 Brewery, we blend craft, creativity, and community. Founded in 2015 in the heart of Asheville, NC, our brewery was inspired by the spirit of tabletop gaming — bringing people together, sharing stories, and celebrating unforgettable moments.</p>
            <h2>Our Team</h2>
             <div className="product-list">
                    {people.map(people => (
                      <motion.div key={people.id} className="product" whileHover={{ scale: 1.05 }}>
                        <img src={people.image} alt={people.name} className="product-image" />
                            <div className="product-info">
                            <h2>{people.name}</h2>
                            <h3>{people.title}</h3>
                            </div>
                          </motion.div>
                        ))}
                         </div>
        </div>
    </div>
    </motion.div>
                    );
}