import formGeneratorsertifikat from "../assets/images/generatorSertifikat.png";

function Portfolio() {
  return (
    <section id="portfolio" className="pt-[100px] py-16 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Portofolio Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={formGeneratorsertifikat}
              alt="generator sertifikat"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Generator Sertifikat</h3>
              <p className="text-gray-600 mb-4">
                Aplikasi berbasis React dan Tailwind yang memudahkan peserta mengisi data sertifikat secara mandiri.
                Cukup share link, peserta isi sendiri, dan sertifikat otomatis dibuat.
              </p>
              <a
                href="https://generator-sertifikat.vercel.app" // ganti ini dengan link asli kalau ada yaa~
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
