'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import styles from './WhyUs.module.css';

const consultingCards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6z" />
      </svg>
    ),
    title: 'AI strategy',
    description: 'We help you identify opportunities for AI adoption and implement the right solutions.',
    image: null
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
    title: 'Business consulting',
    description: 'We help you identify opportunities for top growth and implement the right strategies.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: 'Data & insights',
    description: 'We help you identify opportunities for Big Data and implement the right analytics.',
    image: null
  }
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Comprehensive consulting and<br />
              intelligent innovation
            </h2>
            <p className={styles.subtitle}>
              Whether you're optimizing today or building for tomorrow we help you<br />
              move faster with confidence.
            </p>
            <Link href="/contact" className={styles.btnBlack}>
              GET STARTED
              <span className={styles.btnIconWrap}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {consultingCards.map((card, index) => (
            <ScrollReveal key={index} delay={index * 150} className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.iconBox}>{card.icon}</div>
                
                {card.image && (
                  <div className={styles.imageWrapper}>
                    <img src={card.image} alt={card.title} />
                  </div>
                )}
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
