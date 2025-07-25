import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import formGeneratorsertifikat from "../assets/images/generatorSertifikat.png";
import portalAbsensi from "../assets/images/portalAbsensi.png"
import ebihengker from "../assets/images/ebihengker.png"
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";

function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section id="portfolio" className="pt-[100px] py-16 bg-gray-100 min-h-screen">
                <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4"
        >
        <h2 className="text-3xl font-bold text-center mb-8">Portofolio Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-110 transition duration-300 ease-in-out group">
            <img
              src={formGeneratorsertifikat}
              alt="generator sertifikat"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Generator Sertifikat</h3>
              <p className="text-gray-600 mb-4">
                Aplikasi berbasis React dan Tailwind yang memudahkan peserta mengisi data sertifikat secara mandiri.
                Cukup share link, peserta isi sendiri, dan sertifikat otomatis dibuat.
              </p>
              <a
                href="https://generator-sertifikat.vercel.app"
                className="text-white rounded-lg hover:bg-yellow-400 hover:text-black w-max block mx-auto text-center py-2 px-10 bg-stone-950"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Project Saya
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-110 transition duration-300 ease-in-out group">
            <img
              src={portalAbsensi}
              alt="generator sertifikat"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Sistem Absensi Kampus</h3>
              <p className="text-gray-600 mb-4">
                Aplikasi absensi berbasis MySQL, Express, React, dan Node.js. Dirancang untuk mempermudah proses absensi secara digital.
              </p>
              <span
                href="https://generator-sertifikat.vercel.app"
                className="text-white rounded-lg w-max block mx-auto text-center py-2 px-7 bg-red-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Masih dalam Tahap Pengembangan
              </span>
            </div>
          </div>

          <a href="#contact" className="bg-white relative rounded-lg shadow-lg backdrop:blur-lg z-0 overflow-hidden group hover:scale-110 transition duration-300 ease-in-out" style={{
            backgroundImage: `url(${ebihengker})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>

            <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0 "></div>
            <div className="relative text-center text-gray-100 items-center justify-center flex flex-col h-full z-10 p-4">
              <p className="text-2xl font-bold">Mari Bekerja Sama Untuk Membuka Potensi Saya</p>
              <div className="relative w-[60px] h-[60px] mx-auto">
                <FaLock className="absolute inset-0 w-full h-full text-5xl transition-opacity duration-300 group-hover:opacity-0" />
                <FaLockOpen className="absolute inset-0 w-full text-yellow-400 h-full text-5xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

            </div>
          </a>


        </div>
      </motion.div>
    </section>
  );
}

export default Portfolio;
