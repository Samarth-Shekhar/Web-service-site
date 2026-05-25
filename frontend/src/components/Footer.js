'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA Section with Sky Background */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg}></div>
        <div className={styles.ctaOverlay}></div>
        <div className={styles.ctaContent}>
          <div className={styles.ctaTrust}>
            <span className={styles.ctaTrustText}>Trusted by 500+ clients</span>
            <div className={styles.ctaAvatars}>
              <div className={styles.avatar} style={{ backgroundImage: 'linear-gradient(135deg, #667eea, #764ba2)' }}></div>
              <div className={styles.avatar} style={{ backgroundImage: 'linear-gradient(135deg, #f093fb, #f5576c)' }}></div>
              <div className={styles.avatar} style={{ backgroundImage: 'linear-gradient(135deg, #4facfe, #00f2fe)' }}></div>
            </div>
          </div>
          <h2 className={styles.ctaTitle}>
            We combine human insight<br />with digital innovation
          </h2>
          <p className={styles.ctaSubtitle}>
            Our team bridges strategic thinking and advanced technologies to help
            companies streamline processes, improve decision-making, and create
            intelligent digital experiences.
          </p>
          <Link href="/contact" className="btnLime">
            GET STARTED
            <span className="btnIconWrap">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* Scrolling Text Marquee */}
      <div className={styles.massiveAnimatedText}>
        <div className={styles.textTrack}>
          <span>LET&apos;S WORK TOGETHER</span>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vorcit-bicep.png`} alt="VorcIT" className={styles.trackLogo} />
          <span>LET&apos;S WORK TOGETHER</span>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vorcit-bicep.png`} alt="VorcIT" className={styles.trackLogo} />
          <span>LET&apos;S WORK TOGETHER</span>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vorcit-bicep.png`} alt="VorcIT" className={styles.trackLogo} />
        </div>
      </div>

      {/* Footer Content */}
      <div className={styles.footerMain}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Brand Column */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.logo}>
                <div className={styles.logoIcon}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vorcit-bicep.png`}
                    alt="VorcIT"
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
              <p className={styles.brandDescription}>
                Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.
              </p>
              <div className={styles.newsletter}>
                <span className={styles.newsletterLabel}>Subscribe to our newsletter</span>
                <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter your email" className={styles.newsletterInput} />
                  <button type="submit" className={styles.newsletterBtn}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Links Columns */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Pages</h4>
              <ul className={styles.linkList}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
              </ul>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Services</h4>
              <ul className={styles.linkList}>
                <li><Link href="/services">Web Development</Link></li>
                <li><Link href="/services">App Development</Link></li>
                <li><Link href="/services">AI Solutions</Link></li>
                <li><Link href="/services">UI/UX Design</Link></li>
              </ul>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Connect</h4>
              <ul className={styles.linkList}>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><a href="https://wa.me/919650754598" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href="mailto:samarthshekhar12@gmail.com">Email Us</a></li>
                <li><a href="tel:+919650754598">Call Us</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons & Bottom Bar */}
          <div className={styles.bottomBar}>
            <div className={styles.socialIcons}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <div className={styles.copyright}>
              © {new Date().getFullYear()} VorcIT. All rights reserved.
            </div>
            <div className={styles.bottomLinks}>
              <Link href="/about">Privacy Policy</Link>
              <Link href="/about">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
