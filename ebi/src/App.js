import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portofolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
<div>
        <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
</div>
    </div>
  );
}

export default App;