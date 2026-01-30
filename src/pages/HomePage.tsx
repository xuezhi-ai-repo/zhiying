import Hero from '@/sections/Hero';
import FeatureReference from '@/sections/FeatureReference';
import FeatureImage from '@/sections/FeatureImage';
import FeatureMore from '@/sections/FeatureMore';
import WhyChooseUs from '@/sections/WhyChooseUs';
import Pricing from '@/sections/Pricing';
import TemplateLibrary from '@/sections/TemplateLibrary';
import UseCases from '@/sections/UseCases';
import Community from '@/sections/Community';
import Testimonials from '@/sections/Testimonials';
import FAQ from '@/sections/FAQ';
import CTA from '@/sections/CTA';
import PageShell from './PageShell';

export default function HomePage() {
  return (
    <PageShell>
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
    </PageShell>
  );
}
