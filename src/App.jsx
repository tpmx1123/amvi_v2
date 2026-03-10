import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Products from './components/Products';
import FreshVeg from './components/FreshVeg';
import ReadyToCook from './components/ReadyToCook';
import Why from './components/Why';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <FreshVeg />
        <Products />
        <ReadyToCook />
        <Why />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
