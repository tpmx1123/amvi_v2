const contactBlocks = [
  {
    emoji: '👤',
    label: 'Contact Person',
    value: 'Hemanth Nalla',
    href: null,
  },
  {
    emoji: '📞',
    label: 'Phone & WhatsApp',
    value: '+91 97059 22299',
    href: 'https://wa.me/919705922299',
  },
  {
    emoji: '✉️',
    label: 'Email',
    value: 'amvifoods@gmail.com',
    href: 'mailto:amvifoods@gmail.com',
  },
  {
    emoji: '🌐',
    label: 'Website',
    value: 'www.amvifoods.com',
    href: 'https://www.amvifoods.com',
  },
  {
    emoji: '📍',
    label: 'Location',
    value: 'Konaseema, Andhra Pradesh, India',
    href: null,
  },
];

const inquiryTypeOptions = [
  'Select inquiry type',
  'Bulk supply / Manufacturing',
  'Private label product',
  'Export distribution',
  'Samples & specs',
  'Other',
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white font-sans py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden border-t border-primary/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Partner With AMVI + contact blocks */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-primary text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Partner With AMVI
            </h2>
            <p className="font-serif text-secondary text-lg md:text-xl leading-snug mb-4">
              Tell us what
              
              you need. We&apos;ll
          
              make it happen.
            </p>
            <p className="text-secondary/85 text-sm md:text-base leading-relaxed max-w-xl">
              Whether you need consistent bulk supply for a manufacturing line, a
              new private label product, or a reliable source for export
              distribution — we respond within 24 hours with specs, pricing, and
              samples.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contactBlocks.map((block) => (
              <div
                key={block.label}
                className="flex items-center gap-4 p-4 md:p-5 rounded-xl bg-[#eef2f0] border border-primary/5"
              >
                <span className="text-2xl shrink-0" aria-hidden>
                  {block.emoji}
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary/70">
                    {block.label}
                  </div>
                  {block.href ? (
                    <a
                      href={block.href}
                      target={block.href.startsWith('http') ? '_blank' : undefined}
                      rel={block.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm md:text-base font-medium text-secondary mt-0.5 block hover:text-primary transition-colors break-all"
                    >
                      {block.value}
                    </a>
                  ) : (
                    <div className="text-sm md:text-base font-medium text-secondary mt-0.5">
                      {block.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Send a Product Inquiry form */}
        <div className="bg-white rounded-2xl border border-primary/10 shadow-lg shadow-primary/5 p-6 md:p-8 lg:p-10">
          <h2 className="font-serif text-secondary text-xl md:text-2xl font-bold mb-6">
            Send a Product Inquiry
          </h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="contact-name" className="block text-sm font-bold text-secondary mb-1.5">
                Your Name <span className="text-accent-red">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-bold text-secondary mb-1.5">
                Business Email <span className="text-accent-red">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-company" className="block text-sm font-bold text-secondary mb-1.5">
                Company
              </label>
              <input
                id="contact-company"
                type="text"
                placeholder="Company name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-country" className="block text-sm font-bold text-secondary mb-1.5">
                Country
              </label>
              <input
                id="contact-country"
                type="text"
                placeholder="Destination country"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-inquiry-type" className="block text-sm font-bold text-secondary mb-1.5">
                Inquiry Type
              </label>
              <select
                id="contact-inquiry-type"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231A3C3A'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1.25rem',
                  paddingRight: '2.5rem',
                }}
              >
                {inquiryTypeOptions.map((opt) => (
                  <option key={opt} value={opt === 'Select inquiry type' ? '' : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact-requirement" className="block text-sm font-bold text-secondary mb-1.5">
                Your Requirement
              </label>
              <textarea
                id="contact-requirement"
                rows={4}
                placeholder="Products needed · Quantity · Packaging format · Destination market · Frequency of supply..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-y min-h-[100px]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 px-6 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Inquiry — Response Within 24 Hours
              <span aria-hidden>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
