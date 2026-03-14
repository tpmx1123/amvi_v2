import { useState } from 'react';

const PHONE_TEL = 'tel:+919705922299';
const contactBlocks = [
  { emoji: '👤', label: 'Contact Person', value: 'Hemanth Nalla', href: PHONE_TEL },
  { emoji: null, label: 'WhatsApp', value: '+91 97059 22299', href: 'https://wa.me/919705922299', isWhatsApp: true },
  { emoji: '✉️', label: 'Email', value: 'info.amvifoods@gmail.com', href: 'mailto:info.amvifoods@gmail.com' },
  { emoji: '📍', label: 'Location', value: 'Konaseema, Andhra Pradesh, India', href: 'https://maps.app.goo.gl/u7Nkhe6CsUaAcMgT9' },
];

const FORMSUBMIT_AJAX_URL = 'https://formsubmit.co/ajax/info.amvifoods@gmail.com';

export default function Contact() {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [submitting, setSubmitting] = useState(false);
  const [customerType, setCustomerType] = useState('B2B');
  
  // Validation State
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country_code: '+91',
    company: '',
    address: '',
    message: ''
  });

  const validateField = (name, value) => {
    let error = '';
    
    // 1. Check if previous required fields are empty
    if (name === 'email' && !formData.name) error = 'Please enter your name first';
    if (name === 'phone' && !formData.email) error = 'Please enter your email first';

    // 2. Specific Format Validation
    if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Please enter a valid email address';
    }
    if (name === 'phone' && value && !/^\d{7,15}$/.test(value)) {
      error = 'Phone must be between 7 to 15 digits';
    }
    if (!value && ['name', 'email', 'phone', 'address', 'message'].includes(name)) {
      error = 'This field is required';
    }

    setErrors(prev => ({ ...prev, [name]: error }));
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let nextValue = value;
    // Mobile number: allow only digits
    if (name === 'phone') {
      nextValue = value.replace(/\D/g, '');
    }
    if (name === 'country_code') {
      nextValue = value.replace(/[^\d+]/g, '');
    }
    setFormData(prev => ({ ...prev, [name]: nextValue }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Final Validation Check
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (customerType === 'B2C' && key === 'company') return;
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.values(newErrors).some(x => x)) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    try {
      const fullPhone = `${formData.country_code} ${formData.phone}`;
      const payload = {
        ...formData,
        phone: fullPhone,
        customer_type: customerType,
        _subject: `AMVI Inquiry from ${formData.name}`,
      };

      const res = await fetch(FORMSUBMIT_AJAX_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        showToast('Inquiry sent successfully!', 'success');
        setFormData({ name: '', email: '', phone: '', country_code: '+91', company: '', address: '', message: '' });
      } else throw new Error();
    } catch {
      showToast('Submission failed. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const InputError = ({ name }) => (
    errors[name] ? <p className="text-red-500 text-[11px] font-bold mt-1 animate-pulse">{errors[name]}</p> : null
  );

  return (
    <section id="contact" className="bg-white font-sans py-20 md:py-24 px-6 border-t border-primary/10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start min-w-0">
        
        {/* Left Side (Original Styles) */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-primary text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Partner With AMVI</h2>
            <p className="font-montserrat text-secondary text-lg md:text-xl mb-4">Tell us what you need. We&apos;ll make it happen.</p>
            <p className="text-secondary/85 text-sm font-montserrat leading-relaxed max-w-xl">
              From consistent bulk supply to private label manufacturing — we respond within 24 hours.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contactBlocks.map((block) => (
              <div key={block.label} className="flex items-center gap-4 p-4 rounded-xl bg-[#eef2f0] border border-primary/5">
                {block.isWhatsApp ? (
                   <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                ) : (
                  <span className="text-2xl shrink-0">{block.emoji}</span>
                )}
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary/70 font-montserrat">{block.label}</div>
                  <a
                    href={block.href}
                    {...(block.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="text-sm md:text-base font-medium text-secondary hover:text-primary transition-colors block"
                  >
                    {block.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-white rounded-2xl border border-primary/10 shadow-lg p-6 md:p-8">
          <div className="flex gap-4 mb-8 p-1 bg-gray-100 rounded-lg">
            {['B2B', 'B2C'].map((type) => (
              <button key={type} type="button" onClick={() => setCustomerType(type)}
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${customerType === type ? 'bg-primary text-white shadow-sm' : 'text-secondary/60'}`}>
                {type === 'B2B' ? 'Wholesale' : 'Individual'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-secondary mb-1 uppercase">Name *</label>
                <input name="name" value={formData.name} onChange={handleInputChange} onBlur={(e) => validateField('name', e.target.value)} 
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:ring-primary/20'}`} />
                <InputError name="name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-secondary mb-1 uppercase">Email *</label>
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} onBlur={(e) => validateField('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:ring-primary/20'}`} />
                <InputError name="email" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-secondary mb-1 uppercase">Mobile *</label>
              <div className="flex gap-2">
                <input
                  name="country_code"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-country-code"
                  value={formData.country_code}
                  onChange={handleInputChange}
                  placeholder="+91"
                  className="w-16 px-2 py-3 rounded-lg border border-gray-200 text-center text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="tel-national"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={(e) => validateField('phone', e.target.value)}
                  placeholder="Phone number"
                  className={`flex-1 min-w-0 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all ${errors.phone ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:ring-primary/20'}`}
                />
              </div>
              <InputError name="phone" />
            </div>

            {customerType === 'B2B' && (
              <div className="animate-in fade-in duration-300">
                <label className="block text-xs font-bold text-secondary mb-1 uppercase">Company Name *</label>
                <input name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200" />
                <InputError name="company" />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-secondary mb-1 uppercase">{customerType === 'B2B' ? 'Business Address *' : 'City / Location *'}</label>
              <input name="address" value={formData.address} onChange={handleInputChange} onBlur={(e) => validateField('address', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200" />
              <InputError name="address" />
            </div>

            <div>
              <label className="block text-xs font-bold text-secondary mb-1 uppercase">Message *</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} onBlur={(e) => validateField('message', e.target.value)} rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 resize-none" />
              <InputError name="message" />
            </div>

            <button type="submit" disabled={submitting} className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50">
              {submitting ? 'Sending...' : 'Send Inquiry →'}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification (Top-Right, Rounded-Full) */}
      <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full shadow-2xl border transition-all duration-500 ${toast.show ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'} ${toast.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs text-white ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
          {toast.type === 'success' ? '✓' : '!'}
        </span>
        <p className="text-sm font-bold">{toast.message}</p>
      </div>
    </section>
  );
}