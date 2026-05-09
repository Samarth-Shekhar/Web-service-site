'use client';

import ScrollReveal from './ScrollReveal';
import styles from './TrustedClients.module.css';

export default function TrustedClients() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <h2 className={styles.title}>
              A global consulting partner<br />
              dedicated to building <span className={styles.blueDot}></span> smarter<br />
              and <span className={styles.limeDot}></span> more adaptive
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {/* Card 1 */}
          <ScrollReveal delay={100} className={styles.cardWrapper}>
            <div className={styles.blueCard}>
              <div className={styles.blueCardHeader}>
                <span className={styles.ipsumLogo}>IPSUM</span>
                <span className={styles.barIcon}>
                   <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 10h3v4H2zm5-6h3v10H7zm5 3h3v7h-3z"/></svg>
                </span>
              </div>
              <div className={styles.blueCardImage}>
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Person" />
              </div>
              <div className={styles.blueCardContent}>
                <h2>120+</h2>
                <p>Collaborating with leading AI and cloud technology providers.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay={200} className={styles.cardWrapper}>
            <div className={styles.whiteCard}>
              <p className={styles.smallLabel}>Commitment to measurable</p>
              <h2>100%</h2>
              
              <div className={styles.avatars}>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Avatar" />
              </div>
              
              <p className={styles.quote}>&quot;Their automation strategy completely reshaped how we work. It&apos;s efficient, intelligent, and seamless.&quot;</p>
            </div>
          </ScrollReveal>

          {/* Card 3 (Split column) */}
          <ScrollReveal delay={300} className={styles.cardWrapper}>
            <div className={styles.splitCol}>
              <div className={styles.limeCard}>
                <p className={styles.smallLabel}>Data Points</p>
                <h2>520k+</h2>
                <p className={styles.limeDesc}>Analyzed monthly to power smarter business strategies.</p>
              </div>
              <div className={styles.blackCard}>
                <p>Continents</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
