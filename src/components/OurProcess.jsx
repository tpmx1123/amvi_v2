import { useState, useEffect, useRef } from 'react';

const FILTERS = [
  { id: 'fresh', label: 'Fresh Fruits & Vegetables' },
  { id: 'powders', label: 'Dehydrated Powders' },
  { id: 'ready-to-cook', label: 'Ready to Cook' },
];

const PROCESSES = {
  fresh: {
    subtitle:
      'From harvest to export. Every consignment is graded, packed, and shipped with full traceability.',
    steps: [
      {
        icon: '🌾',
        title: 'Farm Sourcing',
        desc: 'Direct procurement from verified Konaseema farms with seasonal quality grading.',
      },
      {
        icon: '💧',
        title: 'Wash & Sort',
        desc: 'Triple-wash protocol. Manual and optical sorting to remove defects.',
      },
      {
        icon: '✅',
        title: 'Quality Check',
        desc: 'Grade verification, size sorting, and phytosanitary clearance before dispatch.',
      },
      {
        icon: '📦',
        title: 'Pack & Cold Chain',
        desc: 'Export-compliant packaging. Temperature-controlled logistics from our floor.',
      },
      {
        icon: '🚚',
        title: 'Dispatch',
        desc: 'Insured, on-time delivery. Full documentation and traceability with every shipment.',
      },
    ],
  },
  powders: {
    subtitle:
      'Every step runs at 1 TON+ per hour. Every batch is tested and documented before it clears our floor.',
    steps: [
      {
        icon: '🌾',
        title: 'Farm Sourcing',
        desc: 'Direct procurement from verified Konaseema farms with seasonal quality grading.',
      },
      {
        icon: '💧',
        title: 'Wash & Sort',
        desc: 'Triple-wash protocol. Manual and optical sorting to remove defects.',
      },
      {
        icon: '🌡️',
        title: 'Precision Drying',
        desc: 'Low-heat or freeze dehydration. Nutrient-lock technology applied.',
      },
      {
        icon: '🔬',
        title: 'Quality Testing',
        desc: 'Moisture, microbiology and purity tests on every production batch.',
      },
      {
        icon: '📦',
        title: 'Pack & Dispatch',
        desc: 'Vacuum/nitrogen-flush packaging. Export-compliant labelling.',
      },
    ],
  },
  'ready-to-cook': {
    subtitle:
      'Blend, test, pack. Every mix is batch-documented and ready for retail or food service.',
    steps: [
      {
        icon: '🥬',
        title: 'Ingredient Sourcing',
        desc: 'Premium spices and dehydrated ingredients from our own line. No third-party blends.',
      },
      {
        icon: '🍲',
        title: 'Blend & Formulate',
        desc: 'Recipe-specific mixing. Consistent flavour and portion control for every SKU.',
      },
      {
        icon: '🔬',
        title: 'Quality Testing',
        desc: 'Moisture, microbiology, and sensory checks. COA and specs issued per batch.',
      },
      {
        icon: '📦',
        title: 'Pack & Label',
        desc: 'Retail or bulk formats. Private label and export-compliant labelling available.',
      },
      {
        icon: '🚚',
        title: 'Dispatch',
        desc: 'Insured shipping. Full documentation. On-time delivery to your facility.',
      },
    ],
  },
};

export default function OurProcess() {
  const [activeFilter, setActiveFilter] = useState('powders');
  const [stepsInView, setStepsInView] = useState(false);
  const sectionRef = useRef(null);
  const process = PROCESSES[activeFilter];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStepsInView(true);
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      id="our-process"
      className="py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden font-sans"
      style={{ backgroundColor: '#fcfaf6' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-8">
          <div className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">Our Process</span>
            <span className="section-eyebrow-line" />
          </div>
          <h2
            className="text-secondary font-serif font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            From Intake to Export-Ready
           
            <span className="text-primary"> In Five Steps.</span>
          </h2>
          
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`py-2.5 px-4 md:px-5 text-[8px] md:text-xs font-semibold rounded-full border transition-all duration-300 ${
                activeFilter === f.id
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-secondary border-primary/20 hover:border-primary/40 hover:bg-cream/80'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* --- DYNAMIC TIMELINE --- */}
        <div className="relative px-4">
          {/* Desktop: horizontal dotted lines – hidden on mobile */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] z-0 opacity-20">
            <div
              className="w-full h-full bg-size-[20px_20px]"
              style={{
                backgroundImage: 'radial-gradient(circle, #0f1414 2px, transparent 2px)',
              }}
            />
          </div>
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] z-0">
            <div
              className="w-full h-full bg-size-[20px_20px] animate-draw-line"
              style={{
                backgroundImage: 'radial-gradient(circle, var(--primary) 3px, transparent 2px)',
                backgroundPosition: 'left center',
                animation: stepsInView
                  ? 'draw-line 4s cubic-bezier(0.45, 0.05, 0.55, 0.95) forwards, flow-dots 2s linear infinite'
                  : 'none',
              }}
            />
          </div>

          {/* Mobile: vertical dotted line on left, icons left, text right */}
          <div className="lg:hidden relative pl-1">
            <div
              className="absolute left-8 top-6 w-[2px] opacity-60 animate-flow-dots-vertical"
              style={{
                height: 'calc(100% - 7rem)',
                backgroundImage: 'radial-gradient(circle, var(--primary) 2px, transparent 2px)',
                backgroundSize: '2px 20px',
                backgroundPosition: 'center top',
              }}
            />
            {process.steps.map((step, index) => (
              <div
                key={`${activeFilter}-m-${index}`}
                className="flex gap-4 items-start relative pb-8 last:pb-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-2xl shadow-sm">
                  {step.icon}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black text-white bg-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <h4 className="text-[9px] font-black text-primary uppercase tracking-widest mb-1">
                    STEP {String(index + 1).padStart(2, '0')}
                  </h4>
                  <h3 className="text-base font-black text-secondary mb-2 group-hover:text-accent-red transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-secondary text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 5-column grid – hidden on mobile */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative z-10">
            {process.steps.map((step, index) => (
              <div
                key={`${activeFilter}-${index}`}
                className="group flex flex-col items-center text-center opacity-0 animate-timeline-fade-in"
                style={{
                  animationDelay: stepsInView ? `${index * 400 + 500}ms` : '0ms',
                  animationFillMode: 'forwards',
                }}
              >
                <div className="relative mb-10">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center relative z-10 transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:border-transparent">
                    <span className="text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                      {step.icon}
                    </span>
                    <div className="absolute inset-0 rounded-full border-2 border-dashed opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow border-accent-red" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg z-20 transition-transform duration-700 bg-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="px-2">
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 font-sans">
                    STEP {String(index + 1).padStart(2, '0')}
                  </h4>
                  <h3 className="text-xl font-sans font-black text-secondary mb-4 group-hover:text-accent-red transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-secondary text-xs md:text-sm leading-relaxed max-w-[180px] mx-auto font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
