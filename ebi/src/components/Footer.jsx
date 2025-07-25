import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Footer() {
  return (
    <>
    <footer className="bg-stone-950 text-center text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Febrian Eka Putra. All rights reserved.</p>
        <div className="mt-1">
          <span className="flex justify-center items-center flex-row">
            Web ini saya buat dengan:
         <FaReact className="mx-2 text-xl" />
<RiTailwindCssFill className="text-xl" />   
          </span>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;