const CATEGORIES = [
  {
    id: 'fresh',
    href: '#fresh-veg',
    title: 'Fresh Vegetables',
    desc: 'Farm-fresh vegetables carefully selected and packaged to maintain peak freshness during international shipping.',
    features: ['Seasonal produce', 'Temperature-controlled shipping', 'Direct from farms'],
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'dehydrated',
    href: '#dehydrated',
    title: 'Dehydrated Powders',
    desc: 'Premium vegetables, fruits, leaves, and flowers processed to retain maximum nutrition and flavour — 12–24 month shelf life.',
    features: ['Vegetables & Fruits', 'Leaves & Flowers', 'Extended shelf life'],
    image: 'https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'rtc',
    href: '#ready-to-cook',
    title: 'Ready to Cook',
    desc: 'Convenient instant mixes for traditional dishes — authentic Indian flavours made easy.',
    features: ['Instant Biryani', 'Instant Sambar', 'Instant Chutney'],
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-cream/50 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">Product Categories</span>
          </div>
          <h2 className="section-title text-secondary mb-2">
            Our Product Categories
          </h2>
          <p className="section-subtitle">
            Three distinct categories of premium food products for global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group premium-card flex flex-col h-full hover:no-underline text-left"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-primary/5">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="flex flex-col flex-1 p-6 lg:p-7">
                <h3 className="font-serif text-lg lg:text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-secondary/75 text-sm leading-relaxed mb-4 flex-1">
                  {cat.desc}
                </p>
                <ul className="space-y-2">
                  {cat.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-secondary/85">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent-gold" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
