// pages/About.jsx
import React from 'react';
import '../style/Page.css';
import { motion } from 'framer-motion';
import splashImage from '../assets/about.jpeg';
import alexBrewer from '../assets/Alex_Brewer.jpg';
import chrisHops from '../assets/Chris_Hops.jpg';
import TeamMember from '../components/TeamMember';

const people = [
  { id: 1, name: 'Alex Brewer', title: 'Head Brewer', image: alexBrewer },
  { id: 2, name: 'Chris Hops', title: 'Operations Manager', image: chrisHops },
  ];

export default function About() {
  return (
    <motion.div
    className="page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="splash-container">
      <img src={splashImage} alt="Brewery Splash" className="splash-image" />
      <div className="splash-text">
        <h1>About Roll 20 Brewery</h1>
        <p>
          At Roll 20 Brewery, we blend craft, creativity, and community. Founded in 2015 in the
          heart of Asheville, NC, our brewery was inspired by the spirit of tabletop gaming —
          bringing people together, sharing stories, and celebrating unforgettable moments.
        </p>
      </div>
    </div>
  
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="product-list">
        {people.map((person) => (
          <TeamMember
            key={person.id}
            name={person.name}
            title={person.title}
            image={person.image}
          />
        ))}
      </div>
    </section>
    </motion.div>
    );
  }
  
