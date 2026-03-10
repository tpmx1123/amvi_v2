import { useState, useEffect } from 'react';

const LOGO_URL = 'https://res.cloudinary.com/dhzhuobu2/image/upload/v1772605073/Screenshot_2026-03-04_114703-removebg-preview_exaaet.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once in case page loads scrolled
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = [
    'fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12 md:py-5 font-sans transition-all duration-300',
    isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm text-primary' : 'text-white',
  ].join(' ');

  const linkClasses = (base) =>
    `${base} ${isScrolled ? 'text-primary hover:text-accent-gold' : 'text-white hover:text-accent-gold'} transition-colors no-underline tracking-wide`;

  return (
    <nav className={navClasses}>
      {/* LEFT SIDE: Logo */}
      <a href="#home" className="flex items-center gap-3 no-underline text-inherit">
        <img src={LOGO_URL} alt="Amvi" className="h-9 md:h-11 w-auto object-contain block" />
      </a>

      {/* RIGHT SIDE: Links + Button grouped together */}
      <div className="flex items-center gap-6 md:gap-10">
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <a href="#categories" className={linkClasses('text-sm font-medium')}>Categories</a>
          <a href="#products" className={linkClasses('text-sm font-medium')}>Products</a>
          <a href="#fresh-veg" className={linkClasses('text-sm font-medium')}>Fresh Veg</a>
          <a href="#why" className={linkClasses('text-sm font-medium')}>Why Us</a>
          <a href="#contact" className={linkClasses('text-sm font-medium')}>Contact</a>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="py-2.5 px-6 bg-accent-red text-white rounded-full text-sm font-semibold no-underline transition-all hover:bg-red-600 hover:-translate-y-0.5 hover:shadow-lg tracking-wide whitespace-nowrap"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}