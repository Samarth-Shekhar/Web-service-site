import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AboutContent from './AboutContent';

export const metadata = {
  title: 'About Us — NexusDigital',
  description: 'Learn about NexusDigital — a premium digital services agency building scalable web, AI, and design solutions for modern businesses.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
