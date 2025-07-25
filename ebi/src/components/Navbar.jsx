import React, { useState } from 'react';
import ebilogogif from '../assets/gif/hello-ebilogogip.gif'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-stone-950 text-white p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
<div className=" max-w-[100px]">
  <img src={ebilogogif} alt="ebi" className="w-[100px]" />
</div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static w-full md:w-auto left-0 top-14 md:top-0 transition-all`}>
          <li><a href="#hero" className="relative inline-block after:block after:h-[2px] p-2 after:bg-yellow-400 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform">Beranda</a></li>
          <li><a href="#about" className="relative inline-block after:block after:h-[2px] p-2 after:bg-yellow-400 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform">Tentang</a></li>
          <li><a href="#portfolio" className="relative inline-block after:block after:h-[2px] p-2 after:bg-yellow-400 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform">Portofolio</a></li>
          <li><a href="#contact" className="relative inline-block after:block after:h-[2px] p-2 after:bg-yellow-400 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform">Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;