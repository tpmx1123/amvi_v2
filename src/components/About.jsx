// Set your About section image URL here (right column)
const ABOUT_IMAGE_URL =
  'https://res.cloudinary.com/dhzhuobu2/image/upload/v1773048242/unnamed_e3ru2d.jpg';

const ABOUT_BG_IMAGE_URL =
  'https://res.cloudinary.com/dhzhuobu2/image/upload/v1773309931/Screenshot_2026-03-12_153452_r16qlg.png';

const stats = [
  { value: '1 TON+/hr', label: 'Processing Capacity' },
  { value: '30+ SKUs', label: 'Product Range' },
  { value: '100%', label: 'Direct Manufacturer' },
  { value: 'B2B focused', label: 'Exclusively Trade' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-[#7cc2c3] font-sans"
    >
      {/* Background image with low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url('${ABOUT_BG_IMAGE_URL}')` }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Desktop: grid grid-cols-2 (Original behavior)
            Mobile: flex flex-col (New behavior)
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Column (Content) */}
          <div className="order-1">
            
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-primary mb-4 uppercase">The <span className="text-accent-red"> Story of </span> AMVI Foods</h2>
            <p
              className="text-white font-serif text-lg md:text-xl italic leading-relaxed mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-accent-red">&ldquo;</span> We don&apos;t source and ship. We grow, process, and export
              — from Konaseema&apos;s soil to your facility.<span className="text-accent-red">&rdquo;</span>
            </p>

            {/* Mobile-Only Image + Stats: Injected here to break up text on small screens */}
            <div className="lg:hidden mb-8 space-y-4">
               <div className="rounded-2xl overflow-hidden bg-cream/50 border border-primary/10 shadow-lg">
                <img
                  src={ABOUT_IMAGE_URL}
                  alt="AMVI Foods Facility Mobile"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {stats.map((item) => (
                  <div key={item.label} className="p-3 rounded-xl bg-cream/70 border border-primary/10">
                    <p className="font-bold text-primary text-base">{item.value}</p>
                    <p className="text-secondary/70 text-[10px] font-medium mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10 text-secondary/85 text-sm md:text-base leading-relaxed">
  {/* Introduction */}
  <p className="text-lg font-medium text-secondary/90 leading-snug">
    Amvi is a premier manufacturer and supplier of dehydrated vegetables, fruits, and powders. 
    Our dedication to quality, innovation, and sustainability drives us to deliver natural, 
    nutritious products that capture the authentic flavors and health benefits of fresh produce.
  </p>

  {/* Value Grid */}
  <div>
    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-3">
      Our Strategic Priorities in Konaseema
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Quality */}
      <div className="group border-l border-primary/20 pl-4 py-2 hover:border-primary transition-colors">
        <h4 className="font-serif font-bold text-secondary group-hover:text-primary transition-colors">Quality</h4>
        <p className="text-xs mt-2 text-secondary/70">
          Every batch undergoes rigorous quality checks to ensure absolute purity.
        </p>
      </div>

      {/* Safety */}
      <div className="group border-l border-primary/20 pl-4 py-2 hover:border-primary transition-colors">
        <h4 className="font-serif font-bold text-secondary group-hover:text-primary transition-colors">Safety & Hygiene</h4>
        <p className="text-xs mt-2 text-secondary/70">
          We follow strict hygiene protocols and international industry standards.
        </p>
      </div>

      {/* Innovation */}
      <div className="group border-l border-primary/20 pl-4 py-2 hover:border-primary transition-colors">
        <h4 className="font-serif font-bold text-secondary group-hover:text-primary transition-colors">Innovation</h4>
        <p className="text-xs mt-2 text-secondary/70">
          Advanced drying techniques maintain natural taste, color, and density.
        </p>
      </div>
    </div>
  </div>

  
</div>
          </div>

          {/* Right Column (Desktop Only Stats/Image) */}
          <div className="hidden lg:block order-2 space-y-4">
            <div className="rounded-2xl overflow-hidden bg-cream/50 border border-primary/10 shadow-lg">
              {ABOUT_IMAGE_URL ? (
                <img
                  src={ABOUT_IMAGE_URL}
                  alt="AMVI Foods — Konaseema facility and team"
                  className="w-full h-auto object-contain"
                />
              ) : (
                <div className="aspect-4/5 flex items-center justify-center text-secondary/40">
                  <span className="text-sm">About image</span>
                </div>
              )}
            </div>
            {/* Stats below image */}
            <div className="grid grid-cols-2 gap-2">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-xl bg-cream/70 border border-primary/10"
                >
                  <p className="font-bold text-primary text-base md:text-lg">
                    {item.value}
                  </p>
                  <p className="text-secondary/70 text-[10px] md:text-sm font-medium mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}