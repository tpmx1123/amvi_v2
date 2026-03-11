const cards = [
  {
    number: '01',
    title: 'Assembly-Line at 1 TON+ Per Hour',
    desc: 'Fresh vegetables and fruits processed at over 1 ton per hour, while our advanced dehydration and micro-grinding line produces up to 1 ton of premium powders per day.'
  },
  {
    number: '02',
    title: 'Konaseema — Where Big Brands Source From',
    desc: 'The major FMCG companies source raw material from this very delta. AMVI is headquartered here. You get the origin directly, not through a reseller chain.',
  },
  {
    number: '03',
    title: 'Manufacturer to Buyer — Zero Layers',
    desc: 'Direct pricing, real traceability, batch-level documentation. One conversation with the people who actually make the product.',
  },
];

export default function Why() {
  return (
    <section id="why" className="py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-cream/50 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">Our Promise</span>
          </div>
          <h2 className="section-title text-primary mb-2">
            Why Choose AMVI?
          </h2>
          <p className="section-subtitle">
            We are not just a supplier — we are your partner in delivering health, taste, and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((c) => (
            <div
              key={c.number}
              className="group relative flex flex-col h-full p-6 lg:p-7 rounded-3xl bg-white border border-primary/10 shadow-sm transition-all duration-300 hover:bg-primary hover:border-primary hover:shadow-md"
            >
              <h3 className=" text-base lg:text-lg font-bold  tracking-tight mb-3 text-secondary group-hover:text-white transition-colors duration-300 flex items-baseline gap-2 flex-wrap">
                <span className="text-accent-gold group-hover:text-accent-gold/90 text-monsterrat">{c.number}</span>
                <span className="text-monsterrat">{c.title}</span>
              </h3>
              <p className="text-sm leading-relaxed text-secondary/80 group-hover:text-white/90 flex-1 transition-colors duration-300">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
