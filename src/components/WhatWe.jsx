import { ClipboardCheck, MapPin, ThermometerSnowflake, Package } from 'lucide-react';

const BG_IMAGE =
  'https://res.cloudinary.com/dnvpasppl/image/upload/v1773391882/a55847c61b4a25136ba80c4fc331cbbe-Photoroom_2_ik4ojr.png';



const priorities = [
  {
    icon: <ClipboardCheck strokeWidth={1.2} size={36} />,
    title: 'Batch-Level Quality Control',
    desc: 'Every production batch undergoes moisture, microbiology, and purity testing before clearance. Full documentation — COA, phytosanitary, MSDS — issued on every export.',
  },
  {
    icon: <MapPin strokeWidth={1.2} size={36} />,
    title: 'Farm-Direct Sourcing',
    desc: 'We source from a verified network of partner farms within Konaseema. Produce moves from field to processing line within hours — no cold-chain gaps, no aggregator markups.',
  },
  {
    icon: <ThermometerSnowflake strokeWidth={1.2} size={36} />,
    title: 'Precision Dehydration Technology',
    desc: 'Product-specific low-heat and precision drying methods preserve natural colour, taste, and nutritional density. No additives. No fillers. Pure product.',
  },
  {
    icon: <Package strokeWidth={1.2} size={36} />,
    title: 'Export-Grade Packaging',
    desc: 'Vacuum and nitrogen-flush packaging extends shelf life. Custom spec, private label, and retail-ready formats available for all markets.',
  },
];

export default function WhatWe() {
  return (
    <section
      id="priorities"
      className="relative py-8 px-6 md:px-12 bg-[#FCFBFA] font-sans overflow-hidden"
      style={{
        // We use a linear-gradient overlay ON TOP of the logo to reduce its opacity
        backgroundImage: `
          url(${BG_IMAGE}), 
          linear-gradient(rgba(252, 251, 250, 0.96)
        `,
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundPosition: 'left top, center center, center center',
        backgroundSize: 'auto min(420px, 55vw), cover, 35% auto',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="section-eyebrow justify-center mb-2">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text ">What We Prioritise</span>
          </div>
          <h2 className="section-title text-primary ">
            Built on Four Non-Negotiables.
          </h2>
        </div>

        {/* --- LUXURY ICON GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#091F15]/10">
          {priorities.map((item) => (
            <div
              key={item.title}
              className="group relative pt-10 pb-6 px-8 border-b border-[#091F15]/10 lg:border-r last:border-r-0 transition-all duration-700 hover:bg-white"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-700 group-hover:w-full" />
              
              <div className="mb-2 text-[#C5A059] transform transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-1">
                {item.icon}
              </div>

              <h3 className="text-xl font-serif text-[#091F15] mb-6 leading-tight group-hover:text-[#C5A059] transition-colors duration-500">
                {item.title}
              </h3>

              <p className="text-[#091F15]/60 text-sm font-light leading-relaxed mb-4">
                {item.desc}
              </p>

              <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                <div className="w-8 h-px bg-[#C5A059]" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#C5A059] mt-2 block">
                  Amvi Foods
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}