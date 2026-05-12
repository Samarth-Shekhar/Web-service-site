'use client';

import styles from './ServicesMarquee.module.css';

const services = [
  "Academic & Research", "AI Automation", "MVP Development", "Web Development", "UI/UX Design", "Cloud Solutions", "SEO Optimization"
];

// Duplicate items to ensure smooth infinite scroll
const marqueeItems = [...services, ...services, ...services, ...services];

export default function ServicesMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeWrapper}>
        {marqueeItems.map((item, i) => (
          <div key={i} className={styles.marqueeItem}>
            <span>{item}</span>
            <span className={styles.marqueeStar}></span>
          </div>
        ))}
      </div>
    </div>
  );
}
