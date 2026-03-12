import { useState } from 'react';

const CATEGORIES = [
  { id: 'fresh', label: 'Fresh Harvest' },
  { id: 'dehydrated', label: 'Dehydrated Suite' },
  { id: 'ready-to-cook', label: 'Culinary Instant' },
];

const PRODUCTS = {
  fresh: [
    { name: 'Fresh Tomatoes', icon: '🍅', useCases: 'Salads · Sauces · Cooking · Export' },
    { name: 'Fresh Mango', icon: '🥭', useCases: 'Juices · Desserts · Export · Retail' },
    { name: 'Fresh Banana', icon: '🍌', useCases: 'Snacks · Smoothies · Baby food · Export' },
    { name: 'Fresh Coconut', icon: '🥥', useCases: 'Water · Flesh · Oil · Export' },
    { name: 'Fresh Papaya', icon: '🍈', useCases: 'Digestive health · Salads · Export' },
    { name: 'Fresh Okra', icon: '🫛', useCases: 'Curries · Frying · Export · Retail' },
    { name: 'Fresh Brinjal', icon: '🍆', useCases: 'Cooking · Grilling · Export' },
    { name: 'Fresh Green Chilli', icon: '🌶️', useCases: 'Spicing · Pickles · Export' },
    { name: 'Fresh Curry Leaves', icon: '🌿', useCases: 'Tempering · Ayurveda · Export' },
    { name: 'Fresh Drumstick', icon: '🥬', useCases: 'Curries · Soups · Export' },
    { name: 'Fresh Lemon', icon: '🍋', useCases: 'Beverages · Seasoning · Export' },
    { name: 'Fresh Ginger', icon: '🫚', useCases: 'Tea · Cooking · Export' },
    { name: 'Fresh Carrot', icon: '🥕', useCases: 'Salads · Juices · Baby food · Export' },
    { name: 'Fresh Beetroot', icon: '🍠', useCases: 'Salads · Juices · Colour · Export' },
   
  ],
  dehydrated: [
    { name: 'Turmeric Powder', icon: '🟡', useCases: 'Spice blends · Food manufacturing · Nutraceuticals' },
    { name: 'Ginger Powder', icon: '🫚', useCases: 'Seasoning · Beverages · Health foods · Baking' },
    { name: 'Moringa Powder', icon: '🌿', useCases: 'Health supplements · Functional foods · Export' },
    { name: 'Tomato Powder', icon: '🍅', useCases: 'Soups · Sauces · Seasoning blends · RTE' },
    { name: 'Beetroot Powder', icon: '🟣', useCases: 'Natural colouring · Health drinks · Bakery' },
    { name: 'Papaya Powder', icon: '❤️', useCases: 'Digestive health · Nutraceuticals · Smoothies' },
    { name: 'Banana Powder', icon: '🍌', useCases: 'Baby food · Baking · Smoothie bases' },
    { name: 'Carrot Powder', icon: '🥕', useCases: 'Baby food · Soups · Natural colouring' },
    { name: 'Curry Leaves Powder', icon: '🌿', useCases: 'Spice blends · Seasoning · Health supplements' },
    { name: 'Brinjal Powder', icon: '🍆', useCases: 'Food processing · Seasoning · Ready meals' },
    { name: 'Lemon Powder', icon: '🍋', useCases: 'Beverages · Flavouring · Food manufacturing' },
    { name: 'Rose Powder', icon: '🌹', useCases: 'Cosmetics · Beverages · Wellness products' },
    { name: 'Curd Powder', icon: '🥛', useCases: 'Marinades · Ready meals · Dips · Seasoning' },
    { name: 'Bitter Gourd Powder', icon: '💚', useCases: 'Health supplements · Herbal products' },
    
  ],
  'ready-to-cook': [
    { name: 'Instant Biryani Mix', icon: '🍚', useCases: 'Ready meals · Food service · Retail' },
    { name: 'Instant Sambar Mix', icon: '🥣', useCases: 'South Indian · RTE · Export' },
    { name: 'Instant Chutney Mix', icon: '🫙', useCases: 'Condiments · Ready meals · Retail' },
    { name: 'Ready-to-Cook Upma', icon: '🍲', useCases: 'Breakfast · Quick meals · Export' },
    { name: 'Pongal Mix', icon: '🥘', useCases: 'Traditional · RTE · Festive' },
    { name: 'Instant Pulao Mix', icon: '🍛', useCases: 'Rice dishes · Food service · Retail' },
    { name: 'Tamarind Rice Mix', icon: '🍽️', useCases: 'South Indian · Seasoning · Export' },
    { name: 'Curd Rice Mix', icon: '🥄', useCases: 'Comfort food · RTE · Retail' },
    { name: 'Lemon Rice Mix', icon: '🍋', useCases: 'Quick meals · Travel · Export' },
    { name: 'Tomato Rice Mix', icon: '🍅', useCases: 'One-pot · Food service · Retail' },
    { name: 'Coconut Chutney Mix', icon: '🥥', useCases: 'Dips · Breakfast · Export' },
    { name: 'Sambar Powder Pack', icon: '📦', useCases: 'Home cooking · Bulk · Export' },
    { name: 'Rasam Mix', icon: '🫕', useCases: 'Soups · Digestive · Export' },
    { name: 'Vada Mix', icon: '🥟', useCases: 'Snacks · Food service · Retail' },
    
  ],
};

export default function HeroProduct() {
  const [activeCategory, setActiveCategory] = useState('fresh');
  const products = PRODUCTS[activeCategory] || [];

  return (
    <section id="products" className="py-10 md:py-12 px-4 sm:px-6 md:px-10 overflow-hidden bg-cream font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 md:mb-10">
          <div>
            <div className="section-eyebrow mb-3">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Our Product Range</span>
            </div>
            <h2 className="text-secondary font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
              <span className="font-serif ">30+ Products.</span>
              <br />
              <span className="font-serif  text-primary">Three Categories.</span>
            </h2>
          </div>

          <div className="flex bg-white shadow-xl shadow-black/5 rounded-full p-1.5 border border-[#091F15]/5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-[10px] md:text-xs tracking-widest uppercase font-bold transition-all duration-500 ${
                  activeCategory === cat.id 
                  ? 'bg-[#091F15] text-white shadow-lg shadow-[#091F15]/20' 
                  : 'text-[#091F15]/40 hover:text-[#091F15]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid – theme colors + blurred hover overlay */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-primary/5 rounded-xl overflow-hidden">
          {products.map((product) => (
            <div
              key={`${activeCategory}-${product.name}`}
              className="group relative min-h-[90px] sm:min-h-[100px] md:min-h-[140px] flex flex-col items-center justify-center p-4 bg-white overflow-hidden transition-all duration-300 hover:bg-primary/5"
            >
              {/* Invisible focusable layer so tap on mobile reveals overlay (group-focus-within) */}
              <span
                tabIndex={0}
                className="absolute inset-0 z-10 focus:outline-none"
                aria-label={`${product.name}, ${product.useCases}`}
              />
              {/* Default: icon + name */}
              <div className="flex flex-col items-center text-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 group-focus-within:opacity-0 group-focus-within:scale-95 relative z-0">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 transition-all duration-500">
                  {product.icon}
                </div>
                <h3 className="text-secondary font-bold text-[11px] sm:text-xs md:text-sm tracking-tight uppercase">
                  {product.name}
                </h3>
              </div>

              {/* Hover / focus (mobile tap): blurred overlay + use cases (theme primary) */}
              <div className="absolute inset-0 z-20 flex items-center justify-center p-4 opacity-0 backdrop-blur-md bg-primary/85 transition-all duration-400 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none">
                <div className="text-center">
                  <p className="text-accent-gold text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold mb-1.5">
                    Export Grade
                  </p>
                  <p className="text-white/95 text-[10px] sm:text-xs leading-relaxed font-light">
                    {product.useCases}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}