import Hero from '@/sections/Hero';
import FeatureReference from '@/sections/FeatureReference';
import FeatureImage from '@/sections/FeatureImage';
import FeatureMore from '@/sections/FeatureMore';
import CTA from '@/sections/CTA';
import PageShell from './PageShell';

export default function CreatePage() {
  return (
    <PageShell>
      <Hero />
      <FeatureReference />
      <FeatureImage />
      <FeatureMore />
      <CTA />
    </PageShell>
  );
}
