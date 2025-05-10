import React from 'react';
import { motion } from 'framer-motion';
import '../style/Page.css';

export default function TeamMember({ name, title, image }) {
  return (
    <motion.div className="product" whileHover={{ scale: 1.05 }}>
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h2>{name}</h2>
        <h3>{title}</h3>
      </div>
    </motion.div>
  );
}
