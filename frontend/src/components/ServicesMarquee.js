'use client';

import styles from './ServicesMarquee.module.css';

const services = [
  "UI/UX Design", "MVP Development", "Web Development", "App Development", "Branding", "SEO Optimization", "Marketing", "Cloud Solutions"
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
