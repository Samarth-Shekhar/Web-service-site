'use client';

import ProjectsShowcase from '@/components/ProjectsShowcase';
import CTABanner from '@/components/CTABanner';
import styles from './portfolio.module.css';

export default function PortfolioContent() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">Portfolio</span>
          <h1 className={styles.heroTitle}>
            Premium builds across web, AI, automation, and research
          </h1>
          <p className={styles.heroSubtitle}>
            Search, filter, and open case studies from the same Supabase-backed project system used on the homepage.
          </p>
        </div>
      </section>
      <ProjectsShowcase limit={60} showViewAll={false} />
      <CTABanner />
    </div>
  );
}
