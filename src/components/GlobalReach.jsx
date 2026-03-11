const MARKETS = [
  { flag: '🇦🇪', name: 'UAE' },
  { flag: '🇸🇦', name: 'KSA' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇺🇸', name: 'USA' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇯🇵', name: 'Japan' },
  { flag: '🇨🇦', name: 'Canada' },
];

export default function GlobalReach() {
  return (
    <section
      id="global-reach"
      className="py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden font-sans"
      style={{ backgroundColor: '#fcfaf6' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Markets</span>
              <span className="section-eyebrow-line" />
            </div>
            <h2
              className="text-primary font-serif font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Global Reach
            </h2>
            <p className="text-primary/90 font-serif text-lg md:text-xl mt-2 font-medium">
              Konaseema&apos;s output,
              <br />
              delivered worldwide.
            </p>
            <p className="text-secondary/85 text-sm md:text-base leading-relaxed mt-6">
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
                className="flex items-center gap-3 rounded-xl border border-primary/10 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <span className="text-2xl md:text-3xl" aria-hidden>
                  {market.flag}
                </span>
                <span className="font-semibold text-secondary text-sm md:text-base">
                  {market.name}
                </span>
              </div>
            ))}
            <div
              className="flex items-center gap-3 rounded-xl border border-primary/10 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md col-span-2 sm:col-span-1"
            >
              <span className="text-2xl md:text-3xl" aria-hidden>
                🌏
              </span>
              <span className="font-semibold text-secondary text-sm md:text-base">
                & More
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
