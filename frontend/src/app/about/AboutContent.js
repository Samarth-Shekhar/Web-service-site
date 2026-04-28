'use client';

import ScrollReveal from '@/components/ScrollReveal';
import CTABanner from '@/components/CTABanner';
import styles from './about.module.css';

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Team Members' },
];

const values = [
  {
    icon: '🎯',
    title: 'Results-Driven',
    description: 'Every decision we make is focused on delivering measurable results and ROI for our clients.'
  },
  {
    icon: '💡',
    title: 'Innovation First',
    description: 'We stay at the cutting edge of technology, bringing the latest solutions to every project.'
  },
  {
    icon: '🤝',
    title: 'Client Partnership',
    description: 'We don\'t just build products — we become your trusted digital partner for long-term growth.'
  },
  {
    icon: '⚡',
    title: 'Speed & Quality',
    description: 'Fast delivery without compromising on quality. We believe you shouldn\'t have to choose.'
  },
  {
    icon: '🔒',
    title: 'Security & Reliability',
    description: 'Enterprise-grade security and 99.9% uptime guarantee for all our solutions.'
  },
  {
    icon: '📈',
    title: 'Scalable Solutions',
    description: 'Everything we build is designed to scale with your business from day one.'
  }
];

const team = [
  { name: 'Samarth Shekhar', role: 'Founder & CEO', initials: 'SS' },
  { name: 'Aarav Kumar', role: 'Lead Developer', initials: 'AK' },
  { name: 'Nisha Gupta', role: 'Design Lead', initials: 'NG' },
  { name: 'Rohan Singh', role: 'AI Engineer', initials: 'RS' },
];

export default function AboutContent() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOrb}></div>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">About Us</span>
            <h1 className={styles.heroTitle}>
              We&apos;re building the future of <span className="text-gradient">digital experiences</span>
            </h1>
            <p className={styles.heroSubtitle}>
              NexusDigital is a premium digital agency helping startups and enterprises 
              build scalable, beautiful, and high-performance digital products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className={styles.statCard}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionGrid}>
            <ScrollReveal>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>🔭</div>
                <h3>Our Vision</h3>
                <p>To be the most trusted digital partner for businesses worldwide, 
                   empowering them with technology that drives exponential growth.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>🚀</div>
                <h3>Our Mission</h3>
                <p>To deliver world-class digital solutions that combine beautiful design, 
                   cutting-edge technology, and strategic thinking to transform businesses.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className="section-label">Our Values</span>
              <h2 className="section-title">Why choose <span className="text-gradient">NexusDigital</span></h2>
            </div>
          </ScrollReveal>
          <div className={styles.valuesGrid}>
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className={styles.valueCard}>
                  <span className={styles.valueIcon}>{value.icon}</span>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
