import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Benefits from './components/sections/Benefits';
import Reviews from './components/sections/Reviews';
import Comparison from './components/sections/Comparison';
import CTA from './components/sections/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <Reviews />
      <Comparison />
      <CTA />
      <Footer />
    </>
  );
}
