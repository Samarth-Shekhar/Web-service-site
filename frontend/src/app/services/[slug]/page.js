import { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServicePageClient from './ServicePageClient';

// Hardcoded slugs for GitHub Pages static export to succeed
const SLUGS = [
  'website-design', 'wordpress-development', 'web-application', 'ecommerce-solutions', 
  'api-development', 'cloud-hosting', 'seo-optimization', 'performance-marketing', 
  'social-media', 'ui-ux-design', 'research-paper', 'thesis-dissertation', 
  'data-analysis', 'academic-editing', 'literature-review', 'research-proposal', 
  'journal-publication', 'plagiarism-check', 'statistical-consulting',
  'ai-chatbots', 'app-development', 'web-development'
];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({
    slug: slug,
  }));
}

export function generateMetadata({ params }) {
  // Static fallback for metadata during GitHub Pages export
  return { 
    title: 'Service Detail — NexusDigital',
    description: 'Learn more about our premium digital services.'
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  
  return (
    <>
      <Navbar />
      <main>
        <ServicePageClient slug={slug} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
