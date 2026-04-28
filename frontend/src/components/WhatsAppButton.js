'use client';

import { useState, useEffect } from 'react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const tooltipTimer = setTimeout(() => setTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const phoneNumber = '919650754598';
  const message = encodeURIComponent('Hi, I want to know more about your services');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  if (!visible) return null;

  return (
    <div className={styles.wrapper}>
      {tooltip && (
        <div className={styles.tooltip}>
          <p>👋 Need help? Chat with us!</p>
          <button className={styles.tooltipClose} onClick={() => setTooltip(false)}>×</button>
        </div>
      )}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.052 9.376L1.056 31.58l6.456-2.07A15.916 15.916 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.608c-.39 1.098-1.932 2.01-3.172 2.276-.848.18-1.956.324-5.686-1.222-4.774-1.978-7.844-6.822-8.082-7.138-.23-.316-1.928-2.568-1.928-4.896s1.222-3.474 1.656-3.95c.434-.476.948-.594 1.264-.594.316 0 .632.002.908.016.292.014.682-.11.948.724.434 1.098.946 2.672 1.028 2.866.082.194.14.42.028.672-.112.258-.168.418-.336.644-.168.224-.352.5-.504.672-.168.186-.344.39-.148.762.196.372.87 1.434 1.868 2.324 1.286 1.146 2.37 1.502 2.706 1.67.336.168.532.14.728-.084.196-.224.838-.978 1.062-1.314.224-.336.448-.28.756-.168.308.112 1.952.922 2.286 1.09.336.168.558.252.64.39.084.14.084.796-.306 1.894z"/>
        </svg>
        <span className={styles.pulse}></span>
      </a>
    </div>
  );
}
