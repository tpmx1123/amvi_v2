import { useEffect, useRef, useState } from 'react';

const MARKETS = [
  { code: 'ae', name: 'UAE' },
  { code: 'sa', name: 'KSA' },
  { code: 'gb', name: 'UK' },
  { code: 'us', name: 'USA' },
  { code: 'de', name: 'Germany' },
  { code: 'sg', name: 'Singapore' },
  { code: 'au', name: 'Australia' },
  { code: 'jp', name: 'Japan' },
  { code: 'ca', name: 'Canada' },
  { code: 'in', name: 'India' },
  { code: 'cn', name: 'China' },
  { code: 'br', name: 'Brazil' },
];

export default function GlobalReach() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="global-reach"
      className="py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden font-sans relative"
      style={{ backgroundColor: '#fcfaf6' }}
    >
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Copy – 5 cols on large */}
          <div className="lg:col-span-5">
            <div
              className={`section-eyebrow transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Markets</span>
            </div>
            <h2
              className={`section-title text-primary mt-2 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '80ms' }}
            >
              Global Reach
            </h2>
            <p
              className={`text-primary font-serif text-xl md:text-2xl mt-4 font-medium leading-snug transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '160ms' }}
            >
              Konaseema&apos;s output,
              <br />
              delivered worldwide.
            </p>
            <p
              className={`text-secondary/80 text-sm md:text-base leading-relaxed mt-6 max-w-md transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '240ms' }}
            >
              AMVI Foods supplies buyers across international markets. We manage
              end-to-end export logistics — so you receive the product, not the
              paperwork headache.
            </p>
          </div>

          {/* Right: Country grid – 7 cols */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-primary/10 bg-white/90 backdrop-blur-sm p-5 md:p-6 shadow-[0_4px_24px_rgba(26,60,58,0.06)]">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {MARKETS.map((market, index) => (
                  <div
                    key={market.name}
                    className={`global-reach-card group flex items-center gap-3 rounded-xl border border-primary/10 bg-white px-4 py-3.5 md:px-5 md:py-4 shadow-sm transition-all duration-500 ease-out hover:border-accent-gold/50 hover:shadow-[0_12px_32px_rgba(26,60,58,0.12)] hover:-translate-y-1 hover:bg-cream/50 ${
                      inView ? 'global-reach-card--visible' : 'global-reach-card--hidden'
                    }`}
                    style={{
                      transitionDelay: inView ? `${320 + index * 45}ms` : '0ms',
                    }}
                  >
                    <img
                      src={`https://flagcdn.com/${market.code}.svg`}
                      alt={`${market.name} flag`}
                      className="w-9 h-5 md:w-10 md:h-6 object-contain rounded-sm transition-transform duration-300 group-hover:scale-110 shrink-0"
                    />
                    <span className="font-semibold text-primary text-sm md:text-base truncate">
                      {market.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
