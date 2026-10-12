import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustIntro from '@/components/TrustIntro';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="hauptinhalt">
        <Hero />
        <TrustIntro />
        <Services />
        <Process />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
