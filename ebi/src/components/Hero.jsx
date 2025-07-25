import Background2 from './Background2';
import { motion } from 'framer-motion';



function Hero() {
  return (
    <section id="hero" className="h-screen flex text-gray-100">
      <Background2 />
      <div
        className="absolute w-full transform z-20 h-screen flex items-center justify-center sm:transform-none"
      >
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-1">
            Halo, nama saya
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 8 }}
            >
              Febrian Eka Putra
            </motion.span>
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Saya adalah Fullstack Developer
          </p>
          <a
            href="#about"
            className="bg-gray-200 text-stone-950 px-[100px] py-3 md:px-6 md:py-3 rounded-full sm:w-auto font-semibold hover:bg-yellow-400"
          >
            Portofolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;