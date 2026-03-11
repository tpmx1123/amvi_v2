const priorities = [
  {
    icon: '🔬',
    title: 'Batch-Level Quality Control',
    desc: 'Every production batch undergoes moisture, microbiology, and purity testing before clearance. Full documentation — COA, phytosanitary, MSDS — issued on every export.',
  },
  {
    icon: '🌾',
    title: 'Farm-Direct Sourcing',
    desc: 'We source from a verified network of partner farms within Konaseema. Produce moves from field to processing line within hours — no cold-chain gaps, no aggregator markups.',
  },
  {
    icon: '🏭',
    title: 'Precision Dehydration Technology',
    desc: 'Product-specific low-heat and precision drying methods preserve natural colour, taste, and nutritional density. No additives. No fillers. Pure product.',
  },
  {
    icon: '📦',
    title: 'Export-Grade Packaging',
    desc: 'Vacuum and nitrogen-flush packaging extends shelf life. Custom spec, private label, and retail-ready formats available for all markets.',
  },
];

export default function WhatWe() {
  return (
    <section
      id="priorities"
      className="py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-cream/50 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">What We Prioritise</span>
          </div>
          <h2 className="section-title text-primary ">
            Built on Four Non-Negotiables.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {priorities.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col h-full p-6 lg:p-7 rounded-2xl bg-white border border-primary/10 shadow-sm transition-all duration-300 hover:border-accent-gold hover:bg-gold-light/20 hover:shadow-lg"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 mb-4 rounded-xl bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-2xl lg:text-3xl group-hover:bg-accent-gold/20 group-hover:border-accent-gold/50 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-base lg:text-lg text-secondary group-hover:text-primary mb-3 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary/80 flex-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
