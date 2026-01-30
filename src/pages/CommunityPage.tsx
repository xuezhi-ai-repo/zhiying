import Community from '@/sections/Community';
import Testimonials from '@/sections/Testimonials';
import PageShell from './PageShell';

export default function CommunityPage() {
  return (
    <PageShell>
      <Community />
      <Testimonials />
    </PageShell>
  );
}
