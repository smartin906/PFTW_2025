import React from 'react';
import '../style/Page.css';
import { motion } from 'framer-motion';
import splashImage from '../assets/hero.jpeg';

export default function Home() {
  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="splash-container">
        <img src={splashImage} alt="Brewery Splash" className="splash-image" />
        <div className="splash-text">
          <h1>Welcome to Roll 20 Brewery</h1>
          <p>Roll for thirst.</p>
          <p>At Roll 20 Brewery, we blend craft, creativity, and community. Founded in 2015 in the heart of Asheville, NC, our brewery was inspired by the spirit of tabletop gaming — bringing people together, sharing stories, and celebrating unforgettable moments.</p>
          <h2>Our Mission</h2>
            <p>We are dedicated to crafting bold, innovative beers that push the boundaries of flavor while honoring brewing traditions. Whether it’s a limited-edition barrel-aged stout or a crisp, hop-forward IPA, every batch is brewed with passion and precision.
            </p>
        </div>
      </div>
    </motion.div>
  );
}