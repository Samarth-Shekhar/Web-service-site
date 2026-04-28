import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactContent from './ContactContent';

export const metadata = {
  title: 'Contact Us — NexusDigital',
  description: 'Get in touch with NexusDigital. Let\'s discuss your project and build something amazing together.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
