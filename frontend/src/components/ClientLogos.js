'use client';

import Image from 'next/image';
import styles from './ClientLogos.module.css';

export default function ClientLogos() {
  return (
    <section className={styles.logosSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textContent}>
          <span className="section-label">Trusted Worldwide</span>
          <h2 className={styles.heading}>
            We collaborate with<br />
            <span className={styles.highlight}>startups & brands</span><br />
            around the world
          </h2>
          <p className={styles.description}>
            At NexusDigital, we believe that great design is born from strong partnerships.
            We&apos;ve helped startups and global companies alike to craft identities,
            web experiences, and AI-powered solutions that make an impact.
          </p>
          {/* Logo ticker */}
          <div className={styles.logoTicker}>
            {['Vercel', 'Stripe', 'AWS', 'Figma', 'Notion', 'Shopify'].map(name => (
              <div key={name} className={styles.logoItem}>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statText}>Global Clients</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>12</span>
            <span className={styles.statText}>Countries</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>150+</span>
            <span className={styles.statText}>Projects</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>4.9★</span>
            <span className={styles.statText}>Avg Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
