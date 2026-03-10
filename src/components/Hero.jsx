const LOGO_URL = 'https://res.cloudinary.com/dhzhuobu2/image/upload/v1772605073/Screenshot_2026-03-04_114703-removebg-preview_exaaet.png';
const HERO_BG = 'https://res.cloudinary.com/dhzhuobu2/image/upload/v1773145354/ChatGPT_Image_Mar_10_2026_03_44_43_PM_swsor7.png';

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans">
      

      {/* --- HERO SECTION --- */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl z-10">
          <h1 
            className="text-white mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              lineHeight: 1.1,
            }}
          >
            Fresh From <br />
            <span className="italic font-light">Farm to the World</span>
          </h1>
          
          <p className="text-white/90 text-sm md:text-lg max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Delivering premium quality fresh fruits, dehydrated vegetables, and dehydrated powders to global markets with unmatched freshness, purity, and reliability.
          </p>

          <a 
            href="#products" 
            className="inline-flex items-center gap-2 bg-white text-[#FF4D30] px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all group"
          >
            Explore Our Products
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}