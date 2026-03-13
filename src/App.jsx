import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Categories = lazy(() => import('./components/Categories'));
const HeroProduct = lazy(() => import('./components/HeroProduct'));
const Why = lazy(() => import('./components/Why'));
const WhatWe = lazy(() => import('./components/WhatWe'));
const OurProcess = lazy(() => import('./components/OurProcess'));
const OurCertification = lazy(() => import('./components/OurCertification'));
const GlobalReach = lazy(() => import('./components/GlobalReach'));
const ProcessingCapacity = lazy(() => import('./components/ProcessingCapacity'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const SectionFallback = () => (
  <div className="min-h-[30vh] flex items-center justify-center bg-[#fcfaf6]" aria-hidden="true">
    <span className="text-secondary/30 text-sm">Loading…</span>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<SectionFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Why />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Categories />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HeroProduct />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhatWe />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProcessingCapacity />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <OurProcess />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <OurCertification />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GlobalReach />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default App;
