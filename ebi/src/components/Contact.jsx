import Footer from "./Footer";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
  return (
<section
  id="contact"
  className="py-16 bg-white h-screen h-[90vh] relative"
>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-left mb-8">Kontak Saya</h2>
    <p>
Saat ini saya terbuka untuk peluang kerja sama dan kolaborasi baru. <br /> Jangan ragu untuk menghubungi saya untuk bekerja sama, atau sekedar ingin terkoneksi! <br />
    </p>
<div className="flex mt-1">
  <MdEmail className="text-[30px] mt-[1px]" /> &nbsp;
    <a href={mailtoLink} className="text-2xl">
    febrianekaputra.396@gmail.com
  </a>
</div>
<div className="flex mt-1">
  <FaLinkedin className="text-[30px] mt-[1px]" /> &nbsp;
  <a href="https://www.linkedin.com/in/febrian-eka-putra-92a8a735a" className="text-2xl">Febrian Eka Putra</a>
</div>
<div className="flex mt-1">
  <FaGithub className="text-[30px] mt-[1px]" /> &nbsp;
  <a href="https://github.com/hello-ebi" className="text-2xl">hello-ebi</a>
</div>
<div className="flex mt-1">
  <FaXTwitter className="text-[30px] mt-[1px]" /> &nbsp;
  <a href="https://x.com/penantanghilang" className="text-2xl">penantang.hilang</a>
</div>
  </div>

  <div className="absolute bottom-0 w-full">
    <Footer />
  </div>
</section>

  );
}

export default Contact;