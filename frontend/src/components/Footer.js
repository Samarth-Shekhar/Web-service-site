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
      <div className="container">
        <div className={styles.grid}>
          {/* Brand & Newsletter Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <img 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vorcit-bicep.png`}
                alt="VorcIT"
                width={24}
                height={24}
                className={styles.footerLogoImg}
              />
              <span className={styles.brandName}>Aeline</span>
            </Link>
            
            <p className={styles.description}>
              Easily adapt to changes and scale your operations with our flexible
              infrastructure, designed to support your business growth.
            </p>
            
            <div className={styles.newsletterSection}>
              <p className={styles.newsletterLabel}>Subscribe our newsletter</p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className={styles.newsletterInput} 
                  required
                />
                <button type="submit" className={styles.submitBtn}>
                  SUBMIT
                  <span className={styles.submitIcon}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div className={styles.linksWrapper}>
            <div className={styles.linkGroup}>
              {footerLinks.column1.map((link, i) => (
                <Link key={i} href={link.href} className={styles.link}>{link.label}</Link>
              ))}
            </div>

            <div className={styles.linkGroup}>
              {footerLinks.column2.map((link, i) => (
                <Link key={i} href={link.href} className={styles.link}>{link.label}</Link>
              ))}
            </div>

            <div className={styles.linkGroup}>
              {footerLinks.column3.map((link, i) => (
                <Link key={i} href={link.href} className={styles.link}>{link.label}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLinks}>
            <Link href="#">Style Guide</Link>
            <Link href="#">Changelog</Link>
            <Link href="#">Licensing</Link>
          </div>
          <div className={styles.copyright}>
            © 2026 Aeline
          </div>
        </div>
      </div>
    </footer>
  );
}
