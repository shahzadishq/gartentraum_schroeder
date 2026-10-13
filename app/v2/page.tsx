import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import HeroV2 from '@/components/v2/HeroV2';
import TrustIntro from '@/components/TrustIntro';
import ServicesV2 from '@/components/v2/ServicesV2';
import ProcessV2 from '@/components/v2/ProcessV2';
import ProjectsV2 from '@/components/v2/ProjectsV2';
import FeaturedProjectV2 from '@/components/v2/FeaturedProjectV2';
import WhyUs from '@/components/WhyUs';
import TestimonialsV2 from '@/components/v2/TestimonialsV2';
import CTA from '@/components/CTA';
import FooterV2 from '@/components/v2/FooterV2';
import WhatsAppFab from '@/components/WhatsAppFab';

export default function V2Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar lightHero />
      <main id="hauptinhalt">
        <HeroV2 />
        <TrustIntro />
        <ServicesV2 />
        <ProcessV2 />
        <ProjectsV2 />
        <FeaturedProjectV2 />
        <WhyUs />
        <TestimonialsV2 />
        <CTA />
      </main>
      <FooterV2 />
      <WhatsAppFab />
    </>
  );
}
