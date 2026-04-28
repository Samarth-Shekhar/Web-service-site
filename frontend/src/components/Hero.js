'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background effects */}
      <div className={styles.bgGrid}></div>
      <div className={styles.glowOrb1}></div>
      <div className={styles.glowOrb2}></div>

      <div className={`container ${styles.content}`}>
        <div className={styles.topRow}>
          <div className={styles.textSide}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              Premium Digital Agency
            </div>

            <h1 className={styles.title}>
              We Build Digital<br />
              Experiences That<br />
              <span className={styles.gradientText}>Scale & Inspire</span>
            </h1>

            <p className={styles.subtitle}>
              From concept to launch — we craft premium web applications, AI-powered 
              solutions, and stunning interfaces that drive real business growth.
            </p>

            <div className={styles.ctas}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/portfolio" className="btn btn-secondary btn-lg">
                View Our Work
              </Link>
            </div>
          </div>

          <div className={styles.imageSide}>
            <div className={styles.heroImageWrapper}>
              <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/hero-dashboard.png`}
                alt="Premium SaaS dashboard built by NexusDigital"
                width={600}
                height={400}
                className={styles.heroImage}
                priority
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>150+</span>
            <span className={styles.statLabel}>Projects Delivered</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>12</span>
            <span className={styles.statLabel}>Countries Served</span>
          </div>
        </div>
      </div>
    </section>
  );
}
