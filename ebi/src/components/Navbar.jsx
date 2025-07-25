import { useState } from 'react';
import ebilogogif from '../assets/gif/hello-ebilogogip.gif';
import { FaHamburger } from "react-icons/fa";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-stone-950 relative text-white h-[8vh] lg:h-[10vh] p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
<div className="z-30 -translate-y-11 -translate-x-1 lg:-translate-y-9 lg:-translate-x-5 top-0 mt-3">
  <img src={ebilogogif} alt="ebi" className="w-[150px]" />
</div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaHamburger />
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block absolute lg:-translate-y-6 lg:-translate-x- md:static w-full md:w-auto  top-14 md:top-0 transition-all`}>
          <li><a href="#hero" className="relative inline-block after:block after:h-[2px] p-2 after:bg-yellow-400 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform">
            Beranda</a></li>
          <li><a href="#about" className="relative inline-block after:block after:h-[2px] p-2 after:bg-yellow-400 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform">Tentang</a></li>
          <li><a href="#portfolio" className="relative inline-block after:block after:h-[2px] p-2 after:bg-yellow-400 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform">Portofolio</a></li>
          <li><a href="#contact" className="relative inline-block after:block after:h-[2px] p-2 after:bg-yellow-400 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform">Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;