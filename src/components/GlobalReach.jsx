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
  return (
    <section
      id="global-reach"
      className="py-14 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden font-sans bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Markets</span>
            </div>
            <h2 className="section-title text-primary mt-2">
              Global Reach
            </h2>
            <p className="text-primary font-serif text-lg md:text-xl mt-3 font-medium leading-snug">
              Konaseema&apos;s output,
              <br />
              delivered worldwide.
            </p>
            <p className="text-secondary/80 text-sm md:text-base leading-relaxed mt-6 max-w-lg">
              AMVI Foods supplies buyers across international markets. We manage
              end-to-end export logistics — so you receive the product, not the
              paperwork headache.
            </p>
          </div>

          {/* Right: Country grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {MARKETS.map((market) => (
              <div
                key={market.name}
                className="group flex items-center gap-3 rounded-xl border border-primary/10 bg-white/80 backdrop-blur-sm px-4 py-3.5 shadow-sm transition-all duration-300 hover:border-accent-gold/40 hover:shadow-[0_12px_28px_rgba(26,60,58,0.12)] hover:-translate-y-0.5"
              >
                {/* Image-based flags that work on Desktop/Windows */}
                <img
                  src={`https://flagcdn.com/${market.code}.svg`}
                  alt={`${market.name} flag`}
                  className="w-8 h-4 object-contain rounded-sm transition-transform duration-300 group-hover:scale-110 shadow-sm"
                />
                <span className="font-semibold text-primary text-sm md:text-base">
                  {market.name}
                </span>
              </div>
            ))}
            
            
          </div>
        </div>
      </div>
    </section>
  );
}