const HERO_BG =
  'https://i.pinimg.com/1200x/c5/c9/4e/c5c94e59aa8fd075e78c640c6e5e1533.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center font-sans overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
      />

      {/* Top right: badge only */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-start px-6 pt-8 md:px-12 md:pt-28">
        <div className="rounded-full border border-white  px-4 py-2 ">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-white uppercase">
            Purely Healthy
          </span>
        </div>
      </div>

      {/* Main content: heading + paragraph, left-aligned, pushed down */}
      <div className="relative z-10 max-w-7xl px-6 md:px-12 lg:px-16 pt-40 md:pt-48 pb-20">
        <h1
          className="text-white font-bold uppercase leading-[1.15] tracking-tight mb-4"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          }}
        >
          Konaseema Farms 
          <br />
          to Global Markets
        </h1>
        <p className="text-white text-xs md:text-sm max-w-2xl leading-relaxed opacity-95">
        AMVI Foods manufactures 30+ dehydrated products from the Godavari delta — sourced, processed, and packed at our Konaseema facility running at over 1 Ton per hour. We supply food manufacturers, wholesale distributors, and private label brands globally. No intermediaries. No supply chain guesswork
        </p>

        {/* CTAs: solid button + text link */}
        <div className="flex flex-wrap items-center gap-6 mt-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent-gold text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-accent-yellow/90 transition-colors no-underline"
          >
            Request a Quote
            <span aria-hidden>→</span>
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 text-white/85 font-medium text-sm hover:text-white transition-colors no-underline"
          >
            Browse Products
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
