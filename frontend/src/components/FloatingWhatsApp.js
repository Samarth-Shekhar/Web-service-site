'use client';

import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  return (
    <a
      className={styles.whatsapp}
      href="https://wa.me/919650754598?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      WA
    </a>
  );
}
