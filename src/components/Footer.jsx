export default function Footer() {
  return (
    <footer className="bg-secondary text-white/70 py-10 px-6 md:px-12 flex flex-wrap justify-between items-center gap-6 font-sans border-t border-white/10">
      <div className="flex items-center gap-2">
        <span className="font-serif text-white font-bold text-lg tracking-tight">AMVI</span>
        <span className="text-white/50">·</span>
        <span>Purely Healthy</span>
        <span className="text-white/50">·</span>
        <span>Konaseema, Andhra Pradesh, India</span>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <a href="mailto:amvifoods@gmail.com" className="text-accent-gold/90 font-medium no-underline hover:text-accent-gold transition-colors">amvifoods@gmail.com</a>
        <span className="text-white/40">·</span>
        <a href="tel:+919705922299" className="text-accent-gold/90 font-medium no-underline hover:text-accent-gold transition-colors">+91 97059 22299</a>
        <span className="text-white/40">·</span>
        <a href="https://amvifoods.com" target="_blank" rel="noopener noreferrer" className="text-accent-gold/90 font-medium no-underline hover:text-accent-gold transition-colors">amvifoods.com</a>
      </div>
    </footer>
  );
}
