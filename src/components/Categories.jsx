const CATEGORIES = [
  {
    id: 'fresh',
    href: '#fresh-veg',
    title: 'Fresh Vegetables',
    desc: 'Farm-fresh vegetables carefully selected and packaged to maintain peak freshness during international shipping.',
    features: ['Seasonal produce', 'Temperature-controlled shipping', 'Direct from farms'],
    image: 'https://res.cloudinary.com/dnvpasppl/image/upload/v1773466840/pexels-photo-1300972_lx26w3.jpg',
  },
  {
    id: 'dehydrated',
    href: '#dehydrated',
    title: 'Dehydrated Powders',
    desc: 'Premium vegetables, fruits, leaves, and flowers processed to retain maximum nutrition and flavour.',
    features: ['Vegetables & Fruits', 'Leaves & Flowers', 'Extended shelf life'],
    image: 'https://res.cloudinary.com/dnvpasppl/image/upload/v1773466839/99e667e82e579f07fec436c6126fb028_d7txm0.jpg',
  },
  {
    id: 'rtc',
    href: '#ready-to-cook',
    title: 'Ready to Cook',
    desc: 'Convenient instant mixes for traditional dishes — authentic Indian flavours made easy.',
    features: ['Instant Biryani', 'Instant Sambar', 'Instant Chutney'],
    image: 'https://res.cloudinary.com/dnvpasppl/image/upload/v1773466839/eb3ed7087b887b902722e6dcdac216b6_v2bv40.jpg',
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="relative py-20 md:py-24 px-5 md:px-10 overflow-hidden font-sans bg-[#FCFBFA]"
    >
      {/* Background Accent - Responsive Scaling for Mobile */}
      <div
        className="absolute top-0 right-0 w-1/2 md:w-full max-w-[280px] md:max-w-xl h-48 md:h-80 bg-no-repeat bg-contain bg-right-top pointer-events-none opacity-60 md:opacity-100"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dhzhuobu2/image/upload/v1773318467/1048fbcec2d28ee44c26ee540b87f8bf-Photoroom_1_lzdkqw.png)`,
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Adjusted spacing for mobile */}
        <div className="text-center mb-10">
          <div className="section-eyebrow justify-center mb-3">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text tracking-[0.2em]">Product Categories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
            Our Product Range
          </h2>
          <p className="text-secondary/70 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Premium food products sourced from Konaseema for global markets.
          </p>
        </div>

        {/* Category Grid - 1 col on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl h-[320px] md:h-[480px] text-left no-underline shadow-md"
            >
              {/* Image with zoom effect */}
              <div className="absolute inset-0">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out md:group-hover:scale-110"
                />
                {/* Gradient: Stronger on mobile for better text contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500"
                  aria-hidden
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>
                
                {/* Features: Always visible on mobile, reveal on hover for desktop */}
                <ul className="flex flex-wrap md:flex-col gap-x-4 gap-y-2 mt-2 md:mt-4 overflow-hidden transition-all duration-500 ease-out 
                               md:max-h-0 md:opacity-0 md:group-hover:max-h-[200px] md:group-hover:opacity-100">
                  {cat.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent-gold"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
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