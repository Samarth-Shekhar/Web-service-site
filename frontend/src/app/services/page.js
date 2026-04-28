'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServicesPreview from '@/components/ServicesPreview';
import ScrollReveal from '@/components/ScrollReveal';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
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
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(123, 97, 255, 0.1) 100%)',
              borderRadius: 'var(--radius-2xl)',
              padding: '80px 40px',
              textAlign: 'center',
              border: '1px solid var(--border-color)'
            }}>
              <ScrollReveal>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '24px' }}>
                  Need a <span className="text-gradient">Custom Solution?</span>
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                  Don't see exactly what you're looking for? We specialize in building bespoke 
                  digital products tailored to unique business requirements.
                </p>
                <a href="/contact" className="btn btn-primary btn-lg">
                  Let's Talk About Your Project
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
