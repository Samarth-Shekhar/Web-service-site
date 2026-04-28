'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.banner}>
            <div className={styles.glowEffect}></div>
            <div className={styles.content}>
              <span className={styles.badge}>Let&apos;s Work Together</span>
              <h2 className={styles.title}>
                Ready to build something <span className={styles.highlight}>amazing?</span>
              </h2>
              <p className={styles.subtitle}>
                Let&apos;s discuss your project and create something that stands out. No commitment, just a conversation.
              </p>
              <div className={styles.ctas}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Start Your Project
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <a href="https://wa.me/919650754598?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20services" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
