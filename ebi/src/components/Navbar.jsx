
import ebilogogif from '../assets/gif/hello-ebilogogip.gif';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";


function Navbar() {

  return (
    <nav className="bg-stone-950 w-[100vw] relative text-white h-[8vh] lg:h-[10vh] p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
<div className="z-30 -translate-y-[50%] lg:-translate-y-9 lg:-translate-x-5 top-0 mt-3">
  <img src={ebilogogif} alt="ebi" className="w-[150px]" />
</div>


        <ul className="md:flex flex flex-row items-end md:block absolute -translate-y-[95%] translate-x-[85%] gap-2
         lg:-translate-y-6 md:static md:w-auto top-14 md:top-0 transition-all justify-end">
          <li>
            <a href="#hero" className="relative inline-block after:block after:h-[2px] p-2 after:bg-yellow-400 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform">
              <FaHome className="text-3xl md:hidden" />
              <span className="hidden md:block">Beranda</span>
            </a></li>
          <li><a href="#about" className="relative inline-block after:block after:h-[2px] p-2 after:bg-yellow-400 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform">
            <FaUser className="text-2xl md:hidden" />
            <span className="hidden md:block">Tentang Saya</span>
            </a></li>
          <li><a href="#portfolio" className="relative inline-block after:block after:h-[2px] p-2 after:bg-yellow-400 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform">
             <FaBriefcase className="text-2xl md:hidden" />
             <span className="hidden md:block">Portofolio</span>
            </a></li>
          <li><a href="#contact" className="relative inline-block after:block after:h-[2px] p-2 after:bg-yellow-400 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform">
            <FaEnvelope className="text-2xl md:hidden" />
            <span className="hidden md:block">Kontak Saya</span>
            </a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;