import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import ServicesPreview from '@/components/ServicesPreview';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import TrustedClients from '@/components/TrustedClients';
import PremiumShowcases from '@/components/PremiumShowcases';
import ServiceSelector from '@/components/ServiceSelector';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ServicesMarquee from '@/components/ServicesMarquee';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesMarquee />
        <ServiceSelector />
        <ClientLogos />
        <ServicesPreview />
        <ProjectsShowcase />
        <TrustedClients />
        <PremiumShowcases />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
