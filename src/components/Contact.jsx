import { useState } from 'react';

const PHONE_TEL = 'tel:+919705922299';

const contactBlocks = [
  { emoji: '👤', label: 'Contact Person', value: 'Hemanth Nalla', href: PHONE_TEL },
  { emoji: null, label: 'WhatsApp', value: '+91 97059 22299', href: 'https://wa.me/919705922299', isWhatsApp: true },
  { emoji: '✉️', label: 'Email', value: 'info.amvifoods@gmail.com', href: 'mailto:info.amvifoods@gmail.com' },
  { emoji: '📍', label: 'Location', value: 'Konaseema, Andhra Pradesh, India', href: 'https://maps.app.goo.gl/ustk6WBrYWg1YX56A' },
];

const FORMSUBMIT_AJAX_URL = 'https://formsubmit.co/ajax/info.amvifoods@gmail.com';

export default function Contact() {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [submitting, setSubmitting] = useState(false);
  const [customerType, setCustomerType] = useState('B2B');

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const fullPhone = data.country_code ? `${data.country_code} ${data.phone}` : data.phone;

      const payload = {
        _subject: `AMVI Website — New ${customerType} Inquiry`,
        _template: 'table',
        _captcha: 'false',
        customer_type: customerType,
        ...data,
        phone: fullPhone,
      };

      const res = await fetch(FORMSUBMIT_AJAX_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        showToast('Inquiry sent successfully. We\'ll respond within 24 hours.', 'success');
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      showToast('Something went wrong. Please try again or email us directly.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white font-sans py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden border-t border-primary/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Original Styles Restored */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-primary text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Partner With AMVI
            </h2>
            <p className="font-montserrat text-secondary text-lg md:text-xl leading-snug mb-4">
              Tell us what you need. We&apos;ll make it happen.
            </p>
            <p className="text-secondary/85 text-sm md:text-base leading-relaxed max-w-xl font-montserrat">
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
                {block.isWhatsApp ? (
                  <span className="shrink-0 w-10 h-10 flex items-center justify-center" aria-hidden>
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#25D366" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                ) : (
                  <span className="text-2xl shrink-0" aria-hidden>
                    {block.emoji}
                  </span>
                )}
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary/70 font-montserrat">
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

        {/* Right Side: Enhanced Form with Validation */}
        <div className="bg-white rounded-2xl border border-primary/10 shadow-lg shadow-primary/5 p-6 md:p-8 lg:p-10">
          <div className="flex gap-4 mb-8 p-1 bg-gray-100 rounded-lg">
            {['B2B', 'B2C'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setCustomerType(type)}
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${
                  customerType === type ? 'bg-primary text-white shadow-sm' : 'text-secondary/60 hover:text-secondary'
                }`}
              >
                {type === 'B2B' ? 'Business / Wholesale' : 'Individual Customer'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-secondary mb-1.5">Your Name *</label>
                <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-secondary mb-1.5">Email *</label>
                <input name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-secondary mb-1.5">Mobile Number *</label>
              <div className="flex gap-2">
                {customerType === 'B2B' && (
                  <input 
                    name="country_code" 
                    type="text" 
                    placeholder="+91" 
                    required 
                    className="w-20 px-3 py-3 rounded-lg border border-gray-200 text-center text-secondary focus:ring-primary/20 focus:border-primary focus:outline-none"
                  />
                )}
                <input 
                  name="phone" 
                  type="tel" 
                  pattern="[0-9]{7,15}" 
                  placeholder="Phone number" 
                  required 
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
                />
              </div>
            </div>

            {customerType === 'B2B' && (
              <div className="animate-in fade-in slide-in-from-top-2">
                <label className="block text-sm font-bold text-secondary mb-1.5">Company Name *</label>
                <input name="company" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-secondary mb-1.5">
                {customerType === 'B2B' ? 'Full Business Address *' : 'City / Location *'}
              </label>
              <input name="address" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
            </div>

            <div>
              <label className="block text-sm font-bold text-secondary mb-1.5">Your Requirements *</label>
              <textarea 
                name="message" 
                required 
                rows={4} 
                placeholder={customerType === 'B2B' ? "Products needed, estimated quantities, and destination market..." : "How can we help you today?"}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-y min-h-[100px]" 
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 px-6 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? 'Sending…' : 'Send Inquiry — Response Within 24 Hours'}
              {!submitting && <span aria-hidden>→</span>}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification — top-right, rounded-full, light green */}
      <div
        role="alert"
        aria-live="polite"
        className={`fixed top-6 right-6 z-50 max-w-sm rounded-full px-5 py-3 shadow-lg transition-all duration-300 ease-out ${
          toast.show ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0 pointer-events-none'
        } ${
          toast.type === 'success'
            ? 'bg-green-100 border border-green-200/80 text-green-900 shadow-green-200/30'
            : 'bg-red-50 border border-red-200/80 text-red-900 shadow-red-200/30'
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
              toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
            aria-hidden
          >
            {toast.type === 'success' ? '✓' : '!'}
          </span>
          <p className="text-sm font-medium leading-snug">{toast.message}</p>
        </div>
      </div>
    </section>
  );
}