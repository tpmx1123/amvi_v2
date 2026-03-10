

// YouTube embed URL (video: https://youtu.be/Dz9MmBaAdwg)
const ABOUT_VIDEO_URL = 'https://www.youtube.com/embed/Dz9MmBaAdwg';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-12 md:mb-16">
          <div className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">Our Story</span>
          </div>
          <h2 className="section-title text-primary mb-2">
            About AMVI
          </h2>
          <p className="section-subtitle">
            Excellence in Food Exports Since 2008
          </p>
        </div>

        {/* --- TWO COLUMNS: Content + Video --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          {/* Left: Content */}
          <div className="space-y-5 text-left">
            <p className="text-secondary font-semibold text-base md:text-lg leading-relaxed">
              AMVI is a premier food export company delivering the finest vegetables, dehydrated powders, and ready-to-cook products to markets across the globe.
            </p>
            <p className="text-secondary/85 text-sm md:text-base leading-relaxed">
              With over 15 years of experience, we partner directly with certified farms in Konaseema to ensure every product meets rigorous international quality standards.
            </p>
          </div>

          {/* Right: Video */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-bg border border-primary/10 shadow-xl shadow-primary/5">
            {ABOUT_VIDEO_URL ? (
              <iframe
                src={ABOUT_VIDEO_URL}
                title="About AMVI"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-secondary/50 p-8 text-center">
                <div className="text-5xl mb-3">▶</div>
                <p className="text-sm font-medium">Video placeholder</p>
                <p className="text-xs mt-1">Set ABOUT_VIDEO_URL in About.jsx to show your video</p>
              </div>
            )}
          </div>
        </div>

        
      </div>
    </section>
  );
}
