import { useState } from 'react';

const CATEGORIES = [
  { id: 'fresh', label: 'Fruits and Vegetable Fresh' },
  { id: 'dehydrated', label: 'Dehydrated Powder' },
  { id: 'ready-to-cook', label: 'Ready to Cook' },
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
    { name: 'Fresh Spinach', icon: '🥬', useCases: 'Saag · Salads · Export' },
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
    { name: 'ABC Powder', icon: '🌈', useCases: 'Apple · Beetroot · Carrot – health drink blend' },
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
    { name: 'Idli Batter Mix', icon: '🍘', useCases: 'Breakfast · Fermented · Export' },
  ],
};

export default function HeroProduct() {
  const [activeCategory, setActiveCategory] = useState('fresh');
  const products = PRODUCTS[activeCategory] || [];

  return (
    <section
      id="products"
      className="py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-cream/50 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header row: title left, filters right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 md:mb-10">
          <div>
            <div className="section-eyebrow mb-3">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Our Product Range</span>
            </div>
            <h2 className="text-secondary font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
              <span className="font-sans">30+ Products.</span>
              <br />
              <span className="font-serif italic text-primary">Three Categories.</span>
            </h2>
          </div>

          {/* Filter tabs - right side */}
          <div className="flex flex-wrap gap-0 rounded-xl overflow-hidden border border-primary/15 bg-white shadow-sm lg:shrink-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`py-3.5 px-4 md:px-5 text-sm font-semibold transition-all duration-300 border-r border-primary/10 last:border-r-0 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-secondary hover:bg-primary hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid - 3×5 style: icon top center, title + description centered */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
          {products.map((product) => (
            <div
              key={`${activeCategory}-${product.name}`}
              className="group bg-white p-5 lg:p-6 flex flex-col items-center text-center rounded-lg border border-primary/10 shadow-sm transition-all duration-300 hover:bg-primary hover:border-primary hover:shadow-md"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 mb-3 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-2xl lg:text-3xl shrink-0">
                {product.icon}
              </div>
              <h3 className="font-bold text-secondary text-sm lg:text-base mb-2 group-hover:text-white transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-secondary/60 text-xs lg:text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {product.useCases}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
