const VEG_CARDS = [
  { title: 'Tomatoes', desc: 'Fresh, vine-ripened', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80' },
  { title: 'Onions', desc: 'Premium red and white', image: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=400&q=80' },
  { title: 'Carrots', desc: 'Crisp and sweet', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80' },
  { title: 'Bell Peppers', desc: 'Red, yellow, and green', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80' },
];

const PROCESS_LINE = 'Farm sourcing → Wash & sort → Pack & dispatch';

export default function FreshVeg() {
  return (
    <section id="fresh-veg" className="py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-cream/50 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">Farm Fresh</span>
          </div>
          <h2 className="section-title text-secondary mb-2">
            Fresh Vegetables
          </h2>
          <p className="section-subtitle">
            Premium farm-fresh vegetables delivered with guaranteed freshness. Sourced directly from certified Konaseema farms, harvested at peak ripeness, and shipped in temperature-controlled conditions.
          </p>
        </div>

        <p className="text-center text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-2">Our Process</p>
        <p className="text-center text-sm text-secondary/70 mb-10 max-w-2xl mx-auto">
          {PROCESS_LINE}
        </p>

        <p className="text-sm font-semibold text-secondary/80 mb-4 text-center">Available Products</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {VEG_CARDS.map((card) => (
            <div key={card.title} className="group premium-card flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden bg-primary/5">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 lg:p-6">
                <h4 className="font-serif font-bold text-secondary text-base lg:text-lg mb-1 group-hover:text-primary transition-colors">
                  {card.title}
                </h4>
                <p className="text-sm text-secondary/75 leading-tight">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
