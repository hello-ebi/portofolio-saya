import React from 'react';
import Background from './Background';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="hero" className="h-screen flex text-white">
      <Background />
      <div className="absolute left-0 w-1/2 h-screen flex items-center justify-center">
        <div className="text-center px-4">
<h1 className="text-3xl md:text-5xl font-bold mb-4">

    Halo, nama saya
<br></br>
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 8 }}
  >
 Febrian Eka Putra
  </motion.span>
</h1>
          <p className="text-lg md:text-2xl mb-6">
            Saya sedang belajar menjadi Fullstack Developer
          </p>
          <a
            href="#about"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            Portofolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;