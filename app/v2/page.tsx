import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import HeroV2 from '@/components/v2/HeroV2';
import TrustIntro from '@/components/TrustIntro';
import ServicesV2 from '@/components/v2/ServicesV2';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import WhyUs from '@/components/WhyUs';
import TestimonialsV2 from '@/components/v2/TestimonialsV2';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
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
        <Process />
        <Gallery />
        <WhyUs />
        <TestimonialsV2 />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
