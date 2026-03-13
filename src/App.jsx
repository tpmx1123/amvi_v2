import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import ScrollReveal from './components/ScrollReveal';
import CinematicLoader from './components/CinematicLoader';

// Components
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

// Improved Fallback to prevent layout shift
const SectionFallback = () => (
  <div className="w-full h-[60vh] bg-[#091F15]/5 animate-pulse" aria-hidden="true" />
);

function App() {
  return (
    <CinematicLoader>
      {/* Navbar is usually small, no need to lazy load it */}
      <Navbar />
      
      <main>
        {/* HERO: Loaded immediately with the Loader */}
        <Suspense fallback={<SectionFallback />}>
           <Hero />
        </Suspense>

        {/* REST OF THE SECTIONS: Wrapped in individual reveals */}
        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal><Why /></ScrollReveal>
          <ScrollReveal><Categories /></ScrollReveal>
          <ScrollReveal><HeroProduct /></ScrollReveal>
          <ScrollReveal><WhatWe /></ScrollReveal>
          <ScrollReveal><ProcessingCapacity /></ScrollReveal>
          <ScrollReveal><About /></ScrollReveal>
          <ScrollReveal><OurProcess /></ScrollReveal>
          <ScrollReveal><OurCertification /></ScrollReveal>
          <ScrollReveal><GlobalReach /></ScrollReveal>
          <ScrollReveal><Contact /></ScrollReveal>
          <Footer />
        </Suspense>
      </main>
    </CinematicLoader>
  );
}

export default App;