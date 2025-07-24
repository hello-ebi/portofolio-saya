import { useState, useRef, useEffect } from "react";
import Footer from "./Footer";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import backgroundContact from "../assets/videos/bg2.mp4";
import ebihengker from "../assets/images/ebihengker.png";
import matahurung from "../assets/images/ebimatahurung.png";
import backsound from "../assets/audio/girei.mp3"


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

const phrases = ["Kadang,", "keheningan", "justru", "paling banyak bercerita"];


function Contact() {
  const [clicked, setClicked] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
const [fade, setFade] = useState(true);
 const audioRef = useRef(null);
  const [textVariant, setTextVariant] = useState("normal");

useEffect(() => {
  if (clicked) {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 2000);
    }, 5000);

    return () => clearInterval(interval);
  }
}, [clicked]);


 

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      setTextVariant("alt");
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 700);
    } else {
      setClicked(false);
      setTextVariant("normal");
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-white h-[90vh] relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundContact} type="video/mp4" />
      </video>

      <div
        className={`absolute right-[4%] h-[65vh] w-[35vw] rounded-3xl bg-cover bg-center transition-opacity duration-700 z-20 ${clicked ? "opacity-0" : "opacity-100"
          }`}
        style={{ backgroundImage: `url(${ebihengker})` }}
        onClick={handleClick}
      ></div>
      <div
        className={`absolute right-[4%] h-[65vh] w-[35vw] rounded-3xl bg-cover bg-center transition-opacity duration-700 z-10 ${clicked ? "opacity-100" : "opacity-0"
          }`}
        style={{ backgroundImage: `url(${matahurung})` }}
      ></div>
      <audio ref={audioRef} src={backsound} preload="auto" />

      <div className="absolute left-20 mt-12 z-20">
{textVariant === "normal" ? (
  <>
          <h1 className="text-5xl font-bold text-left text-gray-100 mb-5">Kontak Saya</h1>
        <p className="text-xl text-gray-100">
          Saat ini saya terbuka untuk peluang kerja sama dan kolaborasi baru. <br /> Jangan ragu untuk menghubungi saya untuk bekerja sama, <br /> atau sekedar ingin terkoneksi! <br />
        </p>
        <div className="flex text-gray-400 mt-1">
          <MdEmail className="text-[30px] mt-[1px]" /> &nbsp;
          <a href={mailtoLink} className="text-3xl hover:bg-gray-100 hover:text-black rounded hover:duration-300 hover:delay-150">
            febrianekaputra.396@gmail.com
          </a>
        </div>
        <div className="flex text-gray-400 mt-1">
          <FaLinkedin className="text-[35px] mt-[1px]" /> &nbsp;
          <a href="https://www.linkedin.com/in/febrian-eka-putra-92a8a735a" className="hover:bg-gray-100 rounded hover:text-black text-2xl hover:duration-300 hover:delay-150">Febrian Eka Putra</a>
        </div>
        <div className="flex text-gray-400 mt-1">
          <FaGithub className="text-[35px] mt-[1px]" /> &nbsp;
          <a href="https://github.com/hello-ebi" className="hover:bg-gray-100 rounded hover:text-black text-3xl hover:duration-300 hover:delay-150">hello-ebi</a>
        </div>
        <div className="flex text-gray-400 mt-1">
          <FaXTwitter className="text-[35px] mt-[1px]" /> &nbsp;
          <a href="https://x.com/penantanghilang" className="text-3xl hover:bg-gray-100 rounded hover:text-black hover:duration-300 hover:delay-150">penantang.hilang</a>
        </div>
  </>
) : (
      <>
<div className="h-[150px] transition-opacity duration-500" style={{ opacity: fade ? 1 : 0 }}>
  <p className="text-5xl ml-10 text-gray-100">{phrases[textIndex]}</p>
</div>

    </>
)

}
      </div>
      <div className="container relative bg-white opacity-10 rounded-3xl h-[65vh] z-10 mx-auto px-3"></div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </section>

  );
}

export default Contact;