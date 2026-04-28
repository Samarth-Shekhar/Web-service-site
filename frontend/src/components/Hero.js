'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

function AnimatedCounter({ endValue, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = endValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue]);

  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  const [typingText, setTypingText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Scale & Inspire', 'Drive Growth', 'Wow Users', 'Solve Problems'];

  useEffect(() => {
    let ticker = setInterval(() => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setTypingText(isDeleting ? fullText.substring(0, typingText.length - 1) : fullText.substring(0, typingText.length + 1));
      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && typingText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [typingText, isDeleting, loopNum, typingSpeed]);

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
              <span className={styles.gradientText}>{typingText}<span className={styles.cursor}>|</span></span>
            </h1>

            <p className={styles.subtitle}>
              From concept to launch — we craft premium web applications, AI-powered 
              solutions, and stunning interfaces that drive real business growth.
            </p>

            <div className={styles.ctas}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Hey, help us build our thing!
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '8px' }}>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/portfolio" className="btn btn-secondary btn-lg">
                View Our Work
              </Link>
            </div>
          </div>

          <div className={styles.imageSide}>
            <div className={`${styles.heroImageWrapper} ${styles.floatingImage}`}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Creative team collaborating on web development"
                className={styles.heroImage}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}><AnimatedCounter endValue={10} suffix="+" /></span>
            <span className={styles.statLabel}>Projects Delivered</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}><AnimatedCounter endValue={98} suffix="%" /></span>
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}><AnimatedCounter endValue={1} suffix="+" /></span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}><AnimatedCounter endValue={3} suffix="" /></span>
            <span className={styles.statLabel}>Countries Served</span>
          </div>
        </div>
      </div>
    </section>
  );
}
