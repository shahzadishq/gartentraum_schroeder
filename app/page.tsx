import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import TrustIntro from '@/components/TrustIntro';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="hauptinhalt">
        <Hero />
        <Marquee />
        <TrustIntro />
        <Services />
        <Process />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
