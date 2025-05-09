import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Shop from './components/Shop.jsx';
import Contact from './components/Contact.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}