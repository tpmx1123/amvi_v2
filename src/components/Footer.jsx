const LOGO_URL = 'https://res.cloudinary.com/dhzhuobu2/image/upload/v1772605073/Screenshot_2026-03-04_114703-removebg-preview_exaaet.png';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white/70 font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto py-10 md:py-12 px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo + branding */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <a href="#home" className="inline-block transition-transform duration-300 hover:scale-105">
              <img
                src={LOGO_URL}
                alt="AMVI"
                className="h-10 md:h-12 w-auto"
              />
            </a>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-serif text-white font-bold tracking-tight">Purely Healthy</span>
              <span className="text-white/50 hidden sm:inline">·</span>
              <span className="text-white/80">Konaseema, Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Contact links */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm">
            <a
              href="mailto:amvifoods@gmail.com"
              className="text-accent-gold/90 font-medium no-underline hover:text-accent-gold transition-colors"
            >
              amvifoods@gmail.com
            </a>
            <span className="text-white/40">·</span>
            <a
              href="tel:+919705922299"
              className="text-accent-gold/90 font-medium no-underline hover:text-accent-gold transition-colors"
            >
              +91 97059 22299
            </a>
            <span className="text-white/40">·</span>
            <a
              href="https://amvifoods.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-gold/90 font-medium no-underline hover:text-accent-gold transition-colors"
            >
              amvifoods.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
