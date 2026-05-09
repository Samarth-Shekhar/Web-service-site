'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServicesPreview from '@/components/ServicesPreview';
import ScrollReveal from '@/components/ScrollReveal';
import CTABanner from '@/components/CTABanner';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <section style={{ padding: '80px 0 0', background: 'var(--bg-color)' }}>
          <div className="container">
            <ScrollReveal>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span className="section-label">Our Services</span>
                <h1 className="section-title">
                  Premium Digital <span className="text-gradient">Solutions</span>
                </h1>
                <p className="section-subtitle" style={{ margin: '0 auto' }}>
                  We offer a comprehensive range of digital services tailored to help your business 
                  scale, innovate, and lead in the modern digital landscape.
                </p>
              </div>
            </ScrollReveal>
            
            <ServicesPreview />
          </div>
        </section>

        <section style={{ padding: '100px 0' }}>
          <div className="container">
            <CTABanner />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
