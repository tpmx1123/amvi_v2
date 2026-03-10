const CATEGORY_CARDS = [
  {
    title: 'Vegetable Powders',
    image: 'https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=600',
    items: ['Onion', 'Garlic', 'Tomato', 'Carrot'],
  },
  {
    title: 'Fruit Powders',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&q=80',
    items: ['Mango', 'Banana', 'Pomegranate', 'Apple'],
  },
  {
    title: 'Leaf Powders',
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=500&q=80',
    items: ['Moringa', 'Curry Leaf', 'Mint', 'Sorrel'],
  },
  {
    title: 'Flower Powders',
    image: 'https://images.pexels.com/photos/5945768/pexels-photo-5945768.jpeg?auto=compress&cs=tinysrgb&w=600',
    items: ['Rose', 'Hibiscus', 'Jasmine', 'Marigold'],
  },
];

const PROCESS_LINE = 'Farm sourcing → Wash & sort → Precision drying → Quality testing → Pack & dispatch';

export default function Products() {
  return (
    <section id="products" className="py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-white font-sans">
      <span id="dehydrated" className="block scroll-mt-24" aria-hidden />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">Dehydrated</span>
          </div>
          <h2 className="section-title text-secondary mb-2">
            Dehydrated Powders
          </h2>
          <p className="section-subtitle">
            Advanced spray-drying and freeze-drying technology that preserves natural colour, taste, and nutrients. No artificial preservatives. Shelf life of 12–24 months.
          </p>
        </div>

        <p className="text-center text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-2">Our Process</p>
        <p className="text-center text-sm text-secondary/70 mb-10 max-w-2xl mx-auto">
          {PROCESS_LINE}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {CATEGORY_CARDS.map((card) => (
            <div key={card.title} className="group premium-card flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden bg-primary/5">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 lg:p-6">
                <h4 className="font-serif font-bold text-secondary text-base lg:text-lg mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h4>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-secondary/80">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent-gold" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
