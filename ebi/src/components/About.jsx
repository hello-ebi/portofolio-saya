import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ebikomputr from '../assets/gif/ebikomputr.gif';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      id="about"
      className="pt-[100px] h-screen bg-black flex flex-col justify-between items-center"
    >
<div className="relative z-10">
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-gray-50 text-center mb-4">About Me</h2>
        <p className="text-lg text-gray-100 text-center max-w-2xl mx-auto">
          Hard skill soft skill
        </p>
      </motion.div>
</div>

<div className="relative w-full flex justify-center">
  <img
    src={ebikomputr}
    alt="ebi laptop"
    className="absolute z-0 right-0 bottom-0 max-h-[100vh] object-contain"
  />
</div>


    </section>
  );
}

export default About;
