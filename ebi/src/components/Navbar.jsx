import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-stone-950 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static w-full md:w-auto left-0 top-14 md:top-0 transition-all`}>
          <li><a href="#hero" className="block p-2 hover:bg-stone-800">Home</a></li>
          <li><a href="#about" className="block p-2 hover:bg-stone-800">About</a></li>
          <li><a href="#portfolio" className="block p-2 hover:bg-stone-800">Portfolio</a></li>
          <li><a href="#contact" className="block p-2 hover:bg-stone-800">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;