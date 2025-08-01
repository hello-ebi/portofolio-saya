import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ebikomputr from '../assets/gif/ebikomputr.gif';
import { SiJavascript, SiExpress, SiMysql, SiBulma, SiMongodb } from "react-icons/si";
import { FaCss3, FaNodeJs, FaReact, FaGithub, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import kucingcuddle from "../assets/images/kucingcuddle.png";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const skillIcons = [
    SiJavascript,
    FaCss3,
    SiBulma,
    RiTailwindCssFill,
    SiMysql,
    SiMongodb,
    SiExpress,
    FaReact,
    FaNodeJs
  ];

  const toolsIcons = [
    VscVscodeInsiders,
    FaGitAlt,
    FaGithub,
    IoLogoVercel
  ]

  return (
    <section
      id="about"
      className="pt-[80px] w-full md:pt-[100px] h-screen bg-black flex flex-col justify-between items-start"
    >
      <div className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container relative left-0 ml-10 h-[80vh] w-[70vw] px-4"
        >
          <h1 className="md:text-3xl font-bold text-gray-100 md:text-left md:mb-4">Tentang Saya</h1>
          <p className="md:text-3xl text-gray-100 md:text-left md:mb-6 mb-1">
            Halo! Saya Febrian Eka Putra, biasa dipanggil ebi. Saya tinggal di Cikarang, Jawa Barat.
            Saat ini saya sedang menempuh studi S1 Teknik Informatika di STMIK Pamitran.
            Meski masih dalam tahap kuliah, saya sangat antusias dan aktif mendalami dunia pemrograman,
            khususnya di bidang Fullstack Web Development, dan saya fokus mengembangkan skill di ekosistem JavaScript.
          </p>

          <div className="text-gray-100 md:mb-1 text-center md:text-xl text-xl font-semibold">Hard Skills</div>
          <div className="flex flex-wrap gap-1 justify-center md:gap-4 text-white text-xl md:text-4xl mb-1">
            {skillIcons.map((Icon, index) => (
              <Icon key={index} className="hover:text-yellow-400 text-gray-400 transition-all duration-200" />
            ))}
          </div>
          <div className="text-gray-100 md:mt-4 md:mb-1 text-xl text-center md:text-xl font-semibold">Tools</div>
          <div className="flex flex-wrap gap-1 md:gap-4 text-white justify-center text-xl md:text-4xl mb-1">
            {toolsIcons.map((Icon, index) => (
              <Icon key={index} className="hover:text-yellow-400 text-gray-400 transition-all duration-200" />
            ))}
          </div>
          <div className="text-gray-100 text-center md:mt-4 md:text-xl text-xl font-semibold">Soft Skill</div>
           <div className="flex justify-center">
              <img
              src={kucingcuddle}
              alt="kucingcuddle"
              className="w-10" />
          </div>
        </motion.div>
      </div>

      <div className="relative w-full flex z-0 justify-center">
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
