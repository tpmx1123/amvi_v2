import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import HeroProduct from './components/HeroProduct';
import Why from './components/Why';
import WhatWe from './components/WhatWe';
import OurProcess from './components/OurProcess';
import OurCertification from './components/OurCertification';
import GlobalReach from './components/GlobalReach';
import ProcessingCapacity from './components/ProcessingCapacity';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Why />
        <Categories />
        <HeroProduct />
        <WhatWe />
        <ProcessingCapacity />
        <About />
        <OurProcess />
        <OurCertification />
        <GlobalReach />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
