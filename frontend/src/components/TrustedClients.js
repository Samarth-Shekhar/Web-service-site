'use client';

import styles from './TrustedClients.module.css';

const companies = [
  "Zen Solarciti",
  "Marksman Technologies Pvt. Ltd",
  "Pepeleads",
  "Essentia.dev",
  "Airports Authority of India",
  "Celebal Technologies"
];

// Duplicate items for seamless infinite scroll
const marqueeItems = [...companies, ...companies, ...companies];

export default function TrustedClients() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Trusted By</span>
          <h2 className={styles.title}>
            Companies we've worked with
          </h2>
        </div>
      </div>
      
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeWrapper}>
          {marqueeItems.map((company, index) => (
            <div key={index} className={styles.companyItem}>
              <span className={styles.companyName}>{company}</span>
              <span className={styles.separator}></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
