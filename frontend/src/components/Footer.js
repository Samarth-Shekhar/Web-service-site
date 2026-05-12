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
              <div className={styles.logoIcon}>
                <img 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vorcit-bicep.png`}
                  alt="VorcIT Bicep"
                  className={styles.logoImg}
                  width={24}
                  height={24}
                />
              </div>
              <span className={styles.logoText}>
                <span className={styles.logoVorc}>Vorc</span>
                <span className={styles.logoIT}>IT</span>
              </span>
            </Link>
            <p className={styles.description}>
              We help you build smarter, adapt faster, and move with confidence. Code Strong. Build Stronger.
            </p>
            <Link href="/contact" className={styles.getStartedBtn}>
              GET STARTED
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
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
            © {new Date().getFullYear()} VorcIT. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
