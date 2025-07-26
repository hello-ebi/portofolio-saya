import { useState, useRef, useEffect } from "react";
import Footer from "./Footer";
import { motion, useInView } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import backgroundContact from "../assets/videos/bg2.mp4";
import ebihengker from "../assets/images/ebihengker.png";
import matahurung from "../assets/images/ebimatahurung.png";
import backsound from "../assets/audio/girei.mp3";

const email = "febrianekaputra.396@gmail.com";
const subject = "Minat Terhadap Proyek atau Peluang Kerja Sama";
const body = `Halo Febrian Eka Putra,

Saya [nama kamu], tertarik untuk menjalin kerja sama atau kolaborasi profesional dengan Anda.
Latar belakang dan keahlian Anda sangat relevan dengan kebutuhan saya saat ini.

Jika berkenan, saya berharap bisa berdiskusi lebih lanjut.
Terima kasih atas waktunya 🙏

Hormat saya,
[nama kamu]
[Kontak/LinkedIn opsional]`;

const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

function Contact() {
  const [clicked, setClicked] = useState(false);
  const audioRef = useRef(null);
  const [textVariant, setTextVariant] = useState("normal");
  const [shownTexts, setShownTexts] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (clicked) {
      setShownTexts([0]);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 700);
    } else {
      setShownTexts([]);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [clicked]);

  const handleClick = () => {
    setClicked(!clicked);
    setTextVariant(clicked ? "normal" : "alt");
  };

  return (
    <section id="contact" className="py-16 overflow-x-hidden  bg-white h-[100vh] md:h-[90vh] relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundContact} type="video/mp4" />
      </video>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className={`absolute md:right-[4%] h-[65vh] md:h-[65vh] w-[35vw] md:w-[35vw] rounded-3xl bg-cover bg-center mt-7 transition-opacity duration-700 z-20 ${clicked ? "opacity-0" : "opacity-100"
            }`}
          style={{ backgroundImage: `url(${ebihengker})` }}
          onClick={handleClick}
        ></div> </motion.div>
      <div
        className={`absolute md:right-[4%] w-[35vw] h-[65vh] md:h-[65vh] md:w-[35vw] rounded-3xl bg-cover bg-center transition-opacity duration-700 mt-7 z-10 ${clicked ? "opacity-100" : "opacity-0"
          }`}
        style={{ backgroundImage: `url(${matahurung})` }}
      ></div>

      <audio ref={audioRef} src={backsound} preload="auto" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute md:left-20 mt-[12%] left-[38%] w-[60vw] md:mt-8 z-30">
          {textVariant === "normal" ? (
            <>
              <h1 className="md:text-5xl font-bold text-center md:text-left text-gray-100 md:mb-2">Kontak Saya</h1>
              <p className="text-center md:text-left md:text-xl text-gray-100">
                Saat ini saya terbuka untuk peluang kerja sama dan kolaborasi baru, <br /> yang bisa menambah pengalaman saya di industri teknologi. <br /> Jangan ragu untuk menghubungi saya untuk bekerja sama, <br /> atau sekedar ingin terkoneksi! <br />
              </p>
              <div className="flex text-gray-400 hidden md:mt-1">
                <MdEmail className="md:text-[30px] md:mt-[1px]" />
                <a href={mailtoLink} className="md:text-3xl hover:bg-gray-100 hover:text-black rounded hover:duration-300 hover:delay-150">
                  febrianekaputra.396@gmail.com
                </a>
              </div>
              <div className="flex text-gray-400 md:mt-1">
                <FaLinkedin className="md:text-[35px] md:mt-[1px]" />
                <a href="https://www.linkedin.com/in/febrian-eka-putra-92a8a735a" className="hover:bg-gray-100 rounded hover:text-black md:text-2xl hover:duration-300 hover:delay-150">Febrian Eka Putra</a>
              </div>
              <div className="flex text-gray-400 md:mt-1">
                <FaGithub className="md:text-[35px] md:mt-[1px]" />
                <a href="https://github.com/hello-ebi" className="hover:bg-gray-100 rounded hover:text-black md:text-3xl hover:duration-300 hover:delay-150">hello-ebi</a>
              </div>
              <div className="flex text-gray-400 md:mt-1">
                <FaXTwitter className="md:text-[35px] mt-[1px]" />
                <a href="https://x.com/penantanghilang" className="md:text-3xl hover:bg-gray-100 rounded hover:text-black hover:duration-300 hover:delay-150">penantang.hilang</a>
              </div>
              <div className="flex relative  text-black md:mt-3 md:ml-10">
                <a href={mailtoLink} className="md:text-3xl hover:bg-yellow-400 rounded-full md:px-12 md:py-5 bg-gray-200 hover:text-black hover:duration-300 block mx-auto hover:delay-150 px-[20%] py-[2%] flex items-center md:gap-4">Kirim email<FaPaperPlane /> </a>
              </div>
            </>
          ) : (
            <div className="md:ml-10 md:w-[500px] mt-[40%] relative mx-auto md:left-11 text-right md:space-y-2">
              {shownTexts.includes(0) && (
                <motion.p
                  className="md:text-7xl text-4xl text-[#e0f7fa] text-center font-light tracking-wide z-30"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 2, y: 0 }}
                  transition={{ duration: 10 }}
                >
                  Kadang, keheningan <br /> justru paling banyak bercerita.
                </motion.p>
              )}
            </div>
          )}
        </div>
      </motion.div>
      <div className="container relative bg-white opacity-10 rounded-3xl h-[65vh] z-10 mx-auto mt-7 md:px-3"></div>

      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>

    </section>
  );
}

export default Contact;