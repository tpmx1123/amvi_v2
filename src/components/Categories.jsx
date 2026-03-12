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
      image: 'https://i.pinimg.com/1200x/99/e6/67/99e667e82e579f07fec436c6126fb028.jpg',
    },
    {
      id: 'rtc',
      href: '#ready-to-cook',
      title: 'Ready to Cook',
      desc: 'Convenient instant mixes for traditional dishes — authentic Indian flavours made easy.',
      features: ['Instant Biryani', 'Instant Sambar', 'Instant Chutney'],
      image: 'https://i.pinimg.com/736x/eb/3e/d7/eb3ed7087b887b902722e6dcdac216b6.jpg',
    },
  ];

  export default function Categories() {
    return (
      <section
        id="categories"
        className="relative py-10 md:py-12 px-4 sm:px-6 md:px-10 overflow-hidden font-sans"
      >
        {/* Background image at top right */}
        <div
          className="absolute top-0 right-0 w-full max-w-md lg:max-w-lg xl:max-w-xl h-64 md:h-80 bg-no-repeat bg-contain bg-right-top pointer-events-none"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dhzhuobu2/image/upload/v1773315580/1048fbcec2d28ee44c26ee540b87f8bf-Photoroom_1_smjtzh.png)`,
          }}
          aria-hidden
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <div className="section-eyebrow justify-center">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text ">Product Categories</span>
            </div>
            <h2 className="section-title text-primary mb-2">
              Our Product Categories
            </h2>
            <p className="text-secondary/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Three distinct categories of premium food products for global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={cat.href}
                className="group relative flex flex-col justify-end overflow-hidden rounded-xl min-h-[280px] sm:min-h-[320px] md:min-h-[480px] max-h-[520px] text-left no-underline"
              >
                {/* Full-bleed image with zoom on hover */}
                <div className="absolute inset-0">
                  <img
                    src={cat.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Overlay: darken on hover */}
                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-transparent transition-all duration-500 group-hover:from-black/85 group-hover:via-black/50"
                    aria-hidden
                  />
                </div>

                

                {/* Content: title + subtitle always visible; features reveal on hover */}
                <div className="relative z-10 p-5 sm:p-6 md:p-7">
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-white transition-colors duration-500  mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/95">
                    {cat.desc}
                  </p>
                  {/* Product features – slide up on hover (desktop); always visible on mobile */}
                  <ul
                    className="mt-4 space-y-2 overflow-hidden transition-all duration-500 ease-out
                      max-h-[200px] opacity-100 translate-y-0
                      md:max-h-0 md:opacity-0 md:translate-y-4
                      md:group-hover:max-h-[200px] md:group-hover:opacity-100 md:group-hover:translate-y-0"
                    style={{ transitionProperty: 'opacity, transform, max-height' }}
                  >
                    {cat.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-white/90 group-hover:text-accent-gold/95 transition-colors duration-300 "
                      >
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent-gold" aria-hidden  />
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
