import React from 'react';

function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Halo, nama saya Febrian Eka Putra</h1>
        <p className="text-lg md:text-2xl mb-6">Saya sedang belajar menjadi Fullstack Developer</p>
        <a href="#about" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">Portofolio</a>
      </div>
    </section>
  );
}

export default Hero;