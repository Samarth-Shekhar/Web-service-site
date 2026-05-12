'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  column1: [
    { label: 'Home V.1', href: '/' },
    { label: 'Home V.2', href: '/' },
    { label: 'Home V.3', href: '/' },
    { label: 'Services', href: '/services' },
  ],
  column2: [
    { label: 'Contact V.1', href: '/contact' },
    { label: 'Contact V.2', href: '/contact' },
    { label: 'Contact V.3', href: '/contact' },
    { label: 'Pricing', href: '/services' },
  ],
  column3: [
    { label: 'About us', href: '/about' },
    { label: 'About us', href: '/about' },
    { label: 'About us', href: '/about' },
    { label: 'Blog', href: '#' },
  ]
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.massiveAnimatedText}>
        <div className={styles.textTrack}>
          <span>LET'S WORK TOGETHER</span>
          <span>LET'S WORK TOGETHER</span>
          <span>LET'S WORK TOGETHER</span>
        </div>
      </div>
      
      <div className="container">
        <div className={styles.simpleFooterContent}>
          <div className={styles.brandInfo}>
            <Link href="/" className={styles.logo}>
              <span className={styles.brandName}>Web Services</span>
            </Link>
            <p className={styles.description}>
              Providing premium digital solutions, MVP development, and automation.
            </p>
            <a href="mailto:samarthshekhar12@gmail.com" className={styles.contactEmail}>samarthshekhar12@gmail.com</a>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Web Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
