const cards = [
  {
    icon: '🔬',
    title: 'Rigorous Quality Control',
    desc: 'Every batch tested for purity and safety, from farm to package.',
  },
  {
    icon: '💡',
    title: 'Innovative Drying Technology',
    desc: 'Preserves natural taste, colour, and full nutritional value.',
  },
  {
    icon: '🛡️',
    title: 'Strict Safety & Hygiene',
    desc: 'National and international standards followed across every facility.',
  },
  {
    icon: '🌱',
    title: 'Sustainable Sourcing',
    desc: 'Supporting local Konaseema farmers while delivering global-quality produce.',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group premium-card relative flex flex-col h-full p-6 lg:p-7"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-2xl" />
              <div className="w-12 h-12 lg:w-14 lg:h-14 mb-4 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-2xl lg:text-3xl group-hover:bg-primary/10 group-hover:border-accent-gold/30 transition-all duration-300">
                {c.icon}
              </div>
              <h3 className="font-serif text-base lg:text-lg font-bold mb-2 text-secondary group-hover:text-primary transition-colors duration-300">
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary/80 flex-1">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
