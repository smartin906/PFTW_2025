import React from 'react';
import '../style/Page.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faBeer } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBeer, faCheckSquare, faFacebook, faInstagram, faTwitter);

const products = [
    { id: 1, name: 'Wizard Duel', style: 'Imperial Stout', description: 'Rich and complex with notes of spice.', price: '$12', image: './img/dark_saison.jpeg', seasonal: true },
    { id: 2, name: 'Dark Tower', style: 'Dark Imperial', description: 'Dark, bold, and intense.', price: '$15', image: './img/imperial_stout.jpeg', seasonal: true },
    { id: 3, name: 'White Tower', style: 'Pale Ale', description: 'Bright and refreshing with a citrus punch.', price: '$10', image: './img/pale_ale.jpeg', seasonal: true },
    { id: 4, name: 'Critical Hit', style: 'India Pale Ale', description: 'Juicy and hazy with tropical fruit flavors.', price: '$14', image: './img/hazy_ipa.jpeg', seasonal: true },
    { id: 5, name: 'Goblin Grog', style: 'Wild Ale', description: 'Tart and funky with a refreshing finish.', price: '$11', image: './img/sour_ale.jpeg', seasonal: true },
    { id: 6, name: 'Dragon’s Breath', style: 'Lager', description: 'Crisp and clean with a smooth finish.', price: '$9', image: './img/lager.jpeg', seasonal: false },
    { id: 7, name: 'Frost Giant', style: 'English-Style Porter', description: 'Light and refreshing with a hint of citrus.', price: '$10', image: './img/wheat_beer.jpeg', seasonal: false },
    { id: 8, name: 'Wizard’s Wit', style: 'Witbier', description: 'Rich and malty with a warming finish.', price: '$18', image: './img/barleywine.jpeg', seasonal: true },
    { id: 9, name: 'Potion of Healing', style: 'Belgian Trippel', description: 'Dark and fruity with a hint of caramel.', price: '$13', image: './img/belgian_dubbel.jpeg', seasonal: false },

];

export default function Shop() {
    const handleAddToCart = (product) => {
      alert(`Added ${product.name} to cart!`);
    };

  return (
    <motion.div className="page" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>

      <div className="product-list">
        {products.map(product => (
          <motion.div key={product.id} className="product" whileHover={{ scale: 1.05 }}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
            <h2>{product.name}</h2>
            <h3>{product.style}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.seasonal ? (<span title="Seasonal Product">
                                    <FontAwesomeIcon icon="beer" size="2x"/> 
                                    'Seasonal'</span>) : ('Year-Round')}
            </p>
            <button 
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}