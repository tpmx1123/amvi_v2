const contactBlocks = [
  {
    label: 'Email',
    value: 'amvifoods@gmail.com',
    href: 'mailto:amvifoods@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 97059 22299',
    href: 'tel:+919705922299',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: 'Konaseema, Andhra Pradesh, India',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Business Hours',
    value: 'Mon–Sat, 9:00 AM – 6:00 PM IST',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const productInterestOptions = [
  'Select a category',
  'Fresh Vegetables',
  'Dehydrated Powders',
  'Ready to Cook',
  'Multiple categories',
  'Other',
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white font-sans py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden border-t border-primary/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Get in Touch + contact blocks */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-secondary text-2xl md:text-3xl font-bold mb-3">
              Get in Touch
            </h2>
            <p className="text-secondary/80 text-sm md:text-base leading-relaxed max-w-xl">
              Ready to start exporting premium food products? Contact us for pricing, samples, and partnership opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contactBlocks.map((block) => (
              <div
                key={block.label}
                className="flex items-center gap-4 p-4 md:p-5 rounded-xl bg-[#eef2f0] border border-primary/5"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                  {block.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary/70">
                    {block.label}
                  </div>
                  {block.href ? (
                    <a
                      href={block.href}
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

        {/* Right: Request Information form */}
        <div className="bg-white rounded-2xl border border-primary/10 shadow-lg shadow-primary/5 p-6 md:p-8 lg:p-10">
          <h2 className="font-serif text-secondary text-xl md:text-2xl font-bold mb-6">
            Request Information
          </h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="contact-name" className="block text-sm font-bold text-secondary mb-1.5">
                Full Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-bold text-secondary mb-1.5">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-company" className="block text-sm font-bold text-secondary mb-1.5">
                Company Name
              </label>
              <input
                id="contact-company"
                type="text"
                placeholder="Your company"
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
                placeholder="Your country"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-interest" className="block text-sm font-bold text-secondary mb-1.5">
                Product Interest
              </label>
              <select
                id="contact-interest"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231A3C3A'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem', paddingRight: '2.5rem' }}
              >
                {productInterestOptions.map((opt) => (
                  <option key={opt} value={opt === 'Select a category' ? '' : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-bold text-secondary mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Tell us about your requirements..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-y min-h-[100px]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 px-6 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 transition-all duration-300"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
