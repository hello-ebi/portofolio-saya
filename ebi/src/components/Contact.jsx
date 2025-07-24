import Footer from "./Footer";

function Contact() {
  return (
<section
  id="contact"
  className="py-16 bg-white h-screen h-[90vh] relative"
>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Kontak Saya</h2>
  </div>

  <div className="absolute bottom-0 w-full">
    <Footer />
  </div>
</section>

  );
}

export default Contact;