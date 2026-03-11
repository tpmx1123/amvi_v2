const IMAGE_URL =
  'https://res.cloudinary.com/dhzhuobu2/image/upload/v1773229387/WhatsApp_Image_2026-03-09_at_4.06.06_PM_pelonf.jpg';

export default function ProcessingCapacity() {
  return (
    <section
      id="processing-capacity"
      className="py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-cream/50 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column: eyebrow, heading, quote, location */}
          <div className="order-2 lg:order-1">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Processing Capacity</span>
            </div>
            <h2
              className="text-secondary font-serif font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The infrastructure most exporters{' '}
              <span className="text-primary">don&apos;t have.</span>
            </h2>
            <blockquote
              className="text-secondary/90 text-base md:text-lg italic font-serif  leading-relaxed mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;Our assembly line processes over{' '}
              <span className="text-primary font-semibold not-italic">
                1 Ton per hour
              </span>
              {' '}— from raw intake to export-ready pack. This is not a cottage
              operation.&rdquo;
            </blockquote>
            <p className="text-[10px] md:text-xs  tracking-[0.1em] font-semibold text-secondary/70 mb-5">
              AMVI Foods Processing Facility, Konaseema
            </p>
            <p className="text-sm md:text-base text-secondary/85 leading-relaxed font-monsterrat">
              Most Indian agri-exporters aggregate and ship. AMVI runs a
              dedicated fruits and vegetables dehydration line — wash stage,
              sort stage, precision drying chamber, milling, and packing — all
              under one roof, all owned and operated by us. That means faster
              turnaround, direct traceability, and no supplier surprises.
            </p>
          </div>

          {/* Right column: image card + paragraph below */}
          <div className=" pt-10 space-y-5">
            <div className="rounded-2xl overflow-hidden bg-white border border-primary/10 shadow-md">
              <img
                src={IMAGE_URL}
                alt="AMVI Foods — Fruits and Vegetables Dehydration Line, Konaseema, AP"
                className="w-full h-auto object-cover"
              />
              
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
