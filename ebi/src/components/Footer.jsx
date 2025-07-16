import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Febrian Eka Putra. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://www.linkedin.com/in/febrian-eka-putra-92a8a735a" className="mx-2 hover:underline">LinkedIn</a>
          <a href="https://github.com/hello-ebi" className="mx-2 hover:underline">GitHub</a>
          <a href="https://x.com/penantanghilang" className="mx-2 hover:underline">X</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;