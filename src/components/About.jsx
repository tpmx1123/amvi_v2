// Set your About section image URL here (right column)
const ABOUT_IMAGE_URL =
  'https://res.cloudinary.com/dhzhuobu2/image/upload/v1773048242/unnamed_e3ru2d.jpg';

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
      className="py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-white font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Our Story</span>
            </div>
            <h2 className="section-title text-primary mb-4">About AMVI Foods</h2>
            <p
              className="text-secondary font-serif text-lg md:text-xl italic leading-relaxed mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;We don&apos;t source and ship. We grow, process, and export
              — from Konaseema&apos;s soil to your facility.&rdquo;
            </p>

            <div className="space-y-4 text-secondary/85 text-sm md:text-base leading-relaxed">
              <p>
                AMVI Foods is a manufacturer and direct exporter of dehydrated
                vegetables, fruits, and powders based in Konaseema, Andhra
                Pradesh. Our model is simple: own the source, own the process,
                deliver directly to the buyer.
              </p>
              <p>
                Our facility runs a dedicated dehydration assembly line
                processing over 1 Ton per hour — from raw vegetable intake
                through multi-stage washing, precision drying, milling, and
                export-grade packaging. Every batch is documented, tested, and
                cleared before it leaves our floor.
              </p>
              <p>
                We supply food manufacturers, wholesale distributors, RTE
                brands, spice companies, and nutraceutical producers —
                globally. Whether you need weekly bulk supply or a custom private
                label product, we are built for it.
              </p>
            </div>
          </div>

          {/* Right: Image + Stats below */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="rounded-2xl overflow-hidden bg-cream/50 border border-primary/10 shadow-lg">
              {ABOUT_IMAGE_URL ? (
                <img
                  src={ABOUT_IMAGE_URL}
                  alt="AMVI Foods — Konaseema facility and team"
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="aspect-4/5 flex items-center justify-center text-secondary/40">
                  <span className="text-sm">About image</span>
                </div>
              )}
            </div>
            {/* Stats below image */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-cream/70 border border-primary/10"
                >
                  <p className="font-bold text-primary text-lg md:text-xl">
                    {item.value}
                  </p>
                  <p className="text-secondary/70 text-xs md:text-sm font-medium mt-0.5">
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
