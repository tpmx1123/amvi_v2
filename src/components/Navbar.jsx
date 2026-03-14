import { useState, useEffect } from 'react';

const LOGO_URL = 'https://res.cloudinary.com/dnvpasppl/image/upload/v1773392136/Screenshot_2026-03-04_114703-removebg-preview_a5xoie.png';

const EMAIL = 'info.amvifoods@gmail.com';

const NAV_LINKS = [
  { href: '#about', label: 'The Heritage' },
  { href: '#categories', label: 'Our Collections' },
  { href: '#products', label: 'our Products' },
  { href: '#our-process', label: 'The Process' },
  { href: '#global-reach', label: 'Global Export' },
  { href: '#why', label: 'Why Amvi' },
  { href: '#priorities', label: 'Our Vision' },
  { href: '#processing-capacity', label: 'Infrastructure' },
  { href: '#our-certification', label: 'Certifications' },
  { href: '#contact', label: 'Contact Us' },
];

const MENU_ITEM_DELAY_MS = 60;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-700 px-6 md:px-16
        ${isScrolled ? 'py-2 bg-white backdrop-blur-xl border-b border-white/5' : 'py-5 bg-transparent'}`}
      >
        <div className=" mx-auto flex items-center justify-between ">
         <a
            href="#home"
            className={`relative z-[130] block transition-all duration-500 hover:scale-105 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
          <img src={LOGO_URL} alt="AMVI" className="h-10 md:h-14 w-auto " />
         </a>

          {/* ACTION & HAMBURGER */}
          <div className="flex items-center gap-10 text-white">
            <a
              href="#contact"
              onClick={closeMenu}
              className={`hidden lg:block text-[10px] tracking-[0.4em] uppercase font-bold border-b border-[#C5A059]/50 pb-1 hover:border-[#C5A059] transition-all duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              Request a Quote
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-[130] flex flex-col items-end gap-2 p-2 group"
              aria-label="Toggle Menu"
            >
              <div className={`h-[1px]  transition-all duration-500 ${isScrolled ? 'bg-primary' : 'bg-white'} ${isMenuOpen ? 'w-8 rotate-45 translate-y-[9px] bg-[#C5A059]' : 'w-10'}`} />
              <div className={`h-[1px]  transition-all duration-500 ${isScrolled ? 'bg-primary' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : 'w-6 group-hover:w-10'}`} />
              <div className={`h-[1px]  transition-all duration-500 ${isScrolled ? 'bg-primary' : 'bg-white'} ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-[9px] bg-[#C5A059]' : 'w-10'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* FULL-SCREEN OVERLAY MENU */}
      <div 
        className={`fixed inset-0 z-[110] bg-[#091F15] flex flex-col lg:flex-row lg:items-center lg:justify-center overflow-hidden transition-all duration-1000 ease-in-out
        ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{
            clipPath: isMenuOpen ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)'
        }}
      >
        {/* GRAND BACKGROUND WATERMARK - Replaces the small logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
             <img 
                src={LOGO_URL} 
                alt="" 
                className={`w-[60%] h-auto opacity-[0.1]  transition-all duration-1000 delay-300 
                ${isMenuOpen ? 'scale-110 blur-none' : 'scale-150 blur-xl'}`} 
             />
             
        </div>

        {/* Mobile: scrollable area with scrollbar. Desktop: centered, no scroll */}
        <div
          className="nav-menu-scroll relative z-10 w-full max-w-4xl px-8 md:px-12 py-10 mt-10 lg:mt-5 flex-1 min-h-0 overflow-y-auto overflow-x-hidden lg:overflow-visible lg:flex-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-2 md:gap-y-2">
            {NAV_LINKS.map((link, i) => (
              <div key={link.href} className="overflow-hidden border-b border-white/5 group">
                <a 
                  href={link.href} 
                  onClick={closeMenu}
                  className={`flex items-center justify-between py-3 text-white transition-all duration-700 delay-[${i * 50}ms] cursor-pointer touch-manipulation
                  ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-0'}
                  group-hover:pl-4`}
                >
                  <span className="flex items-baseline gap-4">
                    
                    <span className="text-2xl md:text-xl font-serif tracking-tight group-hover:italic group-hover:text-[#C5A059] transition-all">
                      {link.label}
                    </span>
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#C5A059] transition-all duration-500 translate-x-[-20px] group-hover:translate-x-0">
                    →
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* SECONDARY FOOTER INSIDE MENU */}
          <div className={`mt-16 flex flex-col md:flex-row justify-between items-end gap-8 transition-opacity duration-1000 delay-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
             <div className="text-left">
                <p className="text-[#C5A059] text-[10px] tracking-[0.5em] uppercase font-bold mb-4">Export Enquiries</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white/40 font-light text-sm tracking-widest uppercase hover:text-[#C5A059] transition-colors"
                >
                  {EMAIL}
                </a>
             </div>
             <div className="flex gap-10">
                <a
                  href="https://www.instagram.com/amvi_foods/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-[10px] tracking-[0.3em] font-bold hover:text-[#C5A059] transition-colors"
                >
                  INSTAGRAM
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61579465403341"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-[10px] tracking-[0.3em] font-bold hover:text-[#C5A059] transition-colors"
                >
                  FACEBOOK
                </a>
                <a
                  href="https://x.com/Amvi_Foods"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-[10px] tracking-[0.3em] font-bold hover:text-[#C5A059] transition-colors"
                >
                  X
                </a>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}