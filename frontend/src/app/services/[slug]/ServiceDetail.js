'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './service.module.css';

export default function ServiceDetail({ service, slug }) {
  if (!service) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <h1>Service Not Found</h1>
          <p>The service you are looking for does not exist.</p>
          <Link href="/" className="btn btn-primary">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOrb}></div>
        <div className="container">
          <ScrollReveal>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link><span>/</span>
              <Link href="/#services">Services</Link><span>/</span>
              <span className={styles.breadcrumbCurrent}>{service.category}</span>
            </div>
            <div className={styles.heroIcon}>{service.icon}</div>
            <h1 className={styles.heroTitle}>{service.title}</h1>
            <p className={styles.heroDesc}>{service.shortDescription}</p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary btn-lg">Get a Quote →</Link>
              <a href={`https://wa.me/919650754598?text=Hi%2C%20I%27m%20interested%20in%20${slug}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">💬 WhatsApp</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.descSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.descCard}>
              <h2>About This Service</h2>
              <p>{service.description}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className="section-label">Included</span>
              <h2 className="section-title">Key <span className="text-gradient">Features</span></h2>
            </div>
          </ScrollReveal>
          <div className={styles.featuresGrid}>
            {service.features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className={styles.featureCard}>
                  <div className={styles.featureNumber}>{String(i+1).padStart(2,'0')}</div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {service.pricing && (
        <section className={styles.pricingSection}>
          <div className="container">
            <ScrollReveal>
              <div className={styles.pricingCard}>
                <div>
                  <span className="section-label">Pricing</span>
                  <h2>Investment</h2>
                  <p>{service.pricing.note}</p>
                </div>
                <div className={styles.pricingRight}>
                  <div className={styles.priceTag}>
                    <span className={styles.priceLabel}>Starting at</span>
                    <span className={styles.priceValue}>{service.pricing.startingAt}</span>
                  </div>
                  <Link href="/contact" className="btn btn-primary btn-lg">Get Custom Quote</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaBanner}>
              <h2>Ready for <span className="text-gradient">{service.title}</span>?</h2>
              <p>Let us discuss your requirements and create a custom solution.</p>
              <div className={styles.heroCtas}>
                <Link href="/contact" className="btn btn-primary btn-lg">Start Your Project</Link>
                <a href="tel:+919650754598" className="btn btn-secondary btn-lg">📞 Call Now</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
