'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      <div className={`container ${styles.content}`}>
        <div className={styles.topRow}>
          <h1 className={styles.title}>
            Building the future with<br />
            AI and strategy
          </h1>

          <p className={styles.subtitle}>
            We help organizations unlock growth and efficiency through<br />
            data-driven consulting and intelligent automation.
          </p>

          <div className={styles.ctas}>
            <Link href="/portfolio" className={`btn ${styles.btnOutline}`}>
              VIEW DEMO
            </Link>
            <Link href="/contact" className={`btn ${styles.btnLime}`}>
              GET STARTED
              <span className={styles.btnIconWrap}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.floatingCardsContainer}>
        <div className={styles.cardsTrack}>
          {/* Card 1 */}
          <div className={`${styles.floatCard} ${styles.card1}`}>
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Data & Insights" />
          </div>
          {/* Card 2 */}
          <div className={`${styles.floatCard} ${styles.card2}`}>
             <div className={styles.darkCard}>
               <h3>Expertise <span className={styles.greenDot}></span> in AI Automation & MVP Development</h3>
             </div>
          </div>
          {/* Card 3 */}
          <div className={`${styles.floatCard} ${styles.card3}`}>
             <div className={styles.blueCard}>
               <div className={styles.plusIcon}>📚</div>
               <h3>Academic Services</h3>
               <p>IEEE & Thesis Support</p>
             </div>
          </div>
          {/* Card 4 (Center) */}
          <div className={`${styles.floatCard} ${styles.card4}`}>
             <div className={styles.statsCard}>
               <div className={styles.tags}>
                 <span>Scalable</span>
                 <span>Secure</span>
                 <span>Cloud</span>
               </div>
               <div className={styles.statsData}>
                 <p>Lines of Code</p>
                 <h2>500k+</h2>
               </div>
             </div>
          </div>
          {/* Card 5 */}
          <div className={`${styles.floatCard} ${styles.card5}`}>
             <div className={styles.darkGraphCard}>
                <p>Efficiency</p>
                <h2>10x <span className={styles.greenArrow}>↑</span></h2>
             </div>
          </div>
          {/* Card 6 */}
          <div className={`${styles.floatCard} ${styles.card6}`}>
             <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Consulting" />
          </div>
          {/* Card 7 */}
           <div className={`${styles.floatCard} ${styles.card7}`}>
             <div className={styles.lightGraphCard}>
               <h3>Data-Driven Innovation</h3>
               <div className={styles.barGraph}>
                 <div className={styles.bar} style={{height: '40%'}}></div>
                 <div className={styles.bar} style={{height: '60%'}}></div>
                 <div className={styles.bar} style={{height: '100%'}}></div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
