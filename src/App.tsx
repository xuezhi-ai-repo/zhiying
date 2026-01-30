import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import FeatureReference from './sections/FeatureReference';
import FeatureImage from './sections/FeatureImage';
import FeatureMore from './sections/FeatureMore';
import WhyChooseUs from './sections/WhyChooseUs';
import Pricing from './sections/Pricing';
import TemplateLibrary from './sections/TemplateLibrary';
import UseCases from './sections/UseCases';
import Community from './sections/Community';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize ScrollTrigger
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeatureReference />
        <FeatureImage />
        <FeatureMore />
        <WhyChooseUs />
        <Pricing />
        <TemplateLibrary />
        <UseCases />
        <Community />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
