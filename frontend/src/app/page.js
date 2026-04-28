import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import ServicesPreview from '@/components/ServicesPreview';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import ServiceSelector from '@/components/ServiceSelector';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceSelector />
        <ClientLogos />
        <ServicesPreview />
        <ProjectsShowcase />
        <WhyUs />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
