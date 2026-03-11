import React from 'react';

const CERTIFICATIONS = [
  { id: 'apeda', name: 'APEDA', alt: 'APEDA', logo: null },
  { id: 'msme', name: 'MSME', alt: 'MSME - Micro, Small & Medium Enterprises', logo: null },
  { id: 'fssai', name: 'FSSAI', alt: 'FSSAI', logo: null },
  { id: 'tea-board', name: 'Tea Board India', alt: 'Tea Board India', logo: null },
];

const COPY = {
  title: 'Our Certification',
  description:
    'Verified excellence from farm to fork. Our certifications represent our unwavering commitment to sustainable sourcing, rigorous testing, and food safety protocols.',
};

export default function OurCertification() {
  /* Duplicate items so marquee loops seamlessly */
  const items = [...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section
      id="our-certification"
      className="py-12 md:py-16 px-4 sm:px-6 md:px-10 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-primary font-serif font-bold text-2xl md:text-3xl lg:text-4xl">
            {COPY.title}
          </h2>
          <p className="text-secondary/90 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            {COPY.description}
          </p>
        </div>

        {/* Marquee track with fade masks */}
        <div className="relative">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, white 0%, transparent 100%)',
            }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, white 100%, transparent 0%)',
            }}
          />

          <div className="overflow-hidden">
            <div className="certification-marquee flex gap-8 md:gap-12 w-max">
              {items.map((cert, index) => (
                <div
                  key={`${cert.id}-${index}`}
                  className="certification-logo shrink-0 flex items-center justify-center w-36 md:w-44 h-24 md:h-28 rounded-xl border border-primary/10 bg-cream/50 px-4"
                >
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt={cert.alt}
                      className="max-h-16 md:max-h-20 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-primary font-semibold text-sm md:text-base text-center">
                      {cert.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
