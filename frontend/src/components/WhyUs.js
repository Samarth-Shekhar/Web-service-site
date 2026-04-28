'use client';

import ScrollReveal from './ScrollReveal';
import styles from './WhyUs.module.css';

const reasons = [
  {
    step: '01',
    icon: '🎯',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, target audience, and competition to craft a winning strategy.'
  },
  {
    step: '02',
    icon: '✏️',
    title: 'Design & Prototype',
    description: 'Our designers create stunning, user-centered interfaces with interactive prototypes for your approval.'
  },
  {
    step: '03',
    icon: '⚡',
    title: 'Develop & Test',
    description: 'Our engineers build robust, scalable solutions using cutting-edge technologies with rigorous testing.'
  },
  {
    step: '04',
    icon: '🚀',
    title: 'Launch & Grow',
    description: 'We deploy your project and provide ongoing support, optimization, and growth strategies.'
  }
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className="section-label">Our Process</span>
            <h2 className="section-title">How we bring your <span className="text-gradient">vision to life</span></h2>
            <p className="section-subtitle">A proven 4-step process that delivers results consistently, on time and on budget.</p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {reasons.map((item, index) => (
            <ScrollReveal key={item.step} delay={index * 150}>
              <div className={styles.card}>
                <div className={styles.stepNumber}>{item.step}</div>
                <div className={styles.icon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
                {index < reasons.length - 1 && <div className={styles.connector}></div>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
