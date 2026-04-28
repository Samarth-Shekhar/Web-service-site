import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PortfolioContent from './PortfolioContent';

export const metadata = {
  title: 'Portfolio — NexusDigital',
  description: 'Explore our portfolio of premium web, AI, and design projects. See how we\'ve helped businesses grow digitally.',
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
