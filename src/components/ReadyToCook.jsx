const PRODUCT_CARDS = [
  {
    title: 'Instant Biryani Mix',
    desc: 'Vegetable & Chicken, serves 4–5, ready in 15 min',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80',
    features: [],
  },
  {
    title: 'Instant Sambar Mix',
    desc: 'Authentic South Indian, ready in 10 min',
    image: 'https://images.unsplash.com/photo-1630383064653-2a8bf2c73b3d?w=500&q=80',
    features: [],
  },
  {
    title: 'Instant Chutney Powder',
    desc: 'Coconut, Peanut & Tomato variants',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f2b26?w=500&q=80',
    features: [],
  },
  {
    title: 'Instant Curry Mix',
    desc: 'Multiple regional variants, serves 4–6, ready in 12 min',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80',
    features: [],
  },
];

export default function ReadyToCook() {
  return (
    <section id="ready-to-cook" className="py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">Instant & Traditional</span>
          </div>
          <h2 className="section-title text-secondary mb-2">
            Ready to Cook Products
          </h2>
          <p className="section-subtitle">
            Traditional Indian recipes in convenient instant formats. No artificial colours, flavours, or preservatives — consistent taste every time.
          </p>
        </div>

        <p className="text-center text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-10">Products</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {PRODUCT_CARDS.map((card) => (
            <div key={card.title} className="group premium-card flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden bg-primary/5">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                {card.title === 'Instant Biryani Mix' && (
                  <span className="absolute top-3 right-3 bg-accent-gold text-primary text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    Popular
                  </span>
                )}
              </div>
              <div className="p-5 lg:p-6">
                <h4 className="font-serif font-bold text-secondary text-base lg:text-lg mb-1 group-hover:text-primary transition-colors">
                  {card.title}
                </h4>
                <p className="text-sm text-secondary/75">
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
