const HERO_BG =
  'https://res.cloudinary.com/dnvpasppl/image/upload/v1773465704/ps20n6wq6srmy0cwxb4sa7vfhc_irsqeu.png';

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

      {/* Main content: heading + paragraph, left-aligned, pushed down */}
      <div className="relative z-10 max-w-7xl px-6 md:px-12 lg:px-16 pt-40 md:pt-36 pb-20">
      <div className="rounded-full border border-white  px-4 py-2  mb-5 w-fit ">
          <span className="text-[8px] md:text-xs font-semibold tracking-[0.1em] text-white uppercase">
            Purely Healthy
          </span>
        </div>
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
        AMVI Foods produces 30+ dehydrated powder products from the Godavari delta, processed at our Konaseema facility with a capacity of over 1 ton per day. We also supply fresh vegetables, fruits (over 1 ton per hour), and ready-to-cook products. Serving food manufacturers, wholesale distributors, and private label brands globally — with no intermediaries and no supply chain guesswork.
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
