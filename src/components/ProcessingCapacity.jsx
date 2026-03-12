import { useState, useEffect, useRef } from 'react';

const IMAGE_URL =
  'https://res.cloudinary.com/dhzhuobu2/image/upload/v1773311601/Frame_1984078903_dsxos4.png';

export default function ProcessingCapacity() {
  const [imageInView, setImageInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setImageInView(true);
      },
      { threshold: 0.4, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="processing-capacity"
      className="py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-cream/50 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop remains Grid | Mobile switches to Flex-Col */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* text content container */}
          <div className="order-1 flex flex-col">
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
              className="text-secondary/90 text-base md:text-lg italic font-serif leading-relaxed mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;Our assembly line processes over{' '}
              <span className="text-primary font-semibold not-italic">
                1 Ton per hour
              </span>
              {' '}— from raw intake to export-ready pack. This is not a cottage
              operation.&rdquo;
            </blockquote>

            <p className="text-[10px] md:text-xs tracking-[0.1em] font-semibold text-secondary/70 mb-5">
              AMVI Foods Processing Facility, Konaseema
            </p>

            {/* --- MOBILE ONLY IMAGE: Visible only on small screens, hidden on LG --- */}
            <div className={`lg:hidden mb-6 transition-all duration-1000 ${imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-md">
                <img
                  src={IMAGE_URL}
                  alt="AMVI Foods Facility Mobile"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <p className="text-sm md:text-base text-secondary/85 leading-relaxed font-monsterrat order-last">
              Most Indian agri-exporters aggregate and ship. AMVI runs a
              dedicated fruits and vegetables dehydration line — wash stage,
              sort stage, precision drying chamber, milling, and packing — all
              under one roof, all owned and operated by us. That means faster
              turnaround, direct traceability, and no supplier surprises.
            </p>
          </div>

          {/* --- DESKTOP ONLY IMAGE: Hidden on Mobile, Visible on LG --- */}
          <div className={`hidden lg:block pt-10 space-y-5 ${imageInView ? 'capacity-image-visible' : ''}`}>
            <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-md">
              <img
                src={IMAGE_URL}
                alt="AMVI Foods — Fruits and Vegetables Dehydration Line"
                className={`capacity-image w-full h-auto object-cover transition-opacity duration-1000 ${imageInView ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}