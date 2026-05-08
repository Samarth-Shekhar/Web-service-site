'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  services: [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'App Development', href: '/services/app-development' },
    { label: 'AI Chatbots', href: '/services/ai-chatbots' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    { label: 'SEO Optimization', href: '/services/seo-optimization' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '/portfolio' },
    { label: 'Documentation', href: '#' },
  ]
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.gradientLine}></div>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              {/* Muscular arm SVG logo */}
              <svg viewBox="0 0 48 48" fill="none" width="28" height="28" className={styles.footerLogoSvg}>
                <defs>
                  <linearGradient id="footerArmGrad" x1="0" y1="0" x2="48" y2="48">
                    <stop offset="0%" stopColor="#00F5D4" />
                    <stop offset="50%" stopColor="#7B61FF" />
                    <stop offset="100%" stopColor="#FF6B9D" />
                  </linearGradient>
                </defs>
                <path d="M8 38 C8 38 6 30 10 26 C14 22 16 18 20 16 C22 15 24 12 22 8 C20 5 24 3 27 6 C30 9 30 14 28 18 C26 22 30 22 34 20 C38 18 40 22 38 26 C36 30 30 32 26 34 C22 36 18 38 14 38 Z" fill="url(#footerArmGrad)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                <path d="M18 14 C20 12 24 10 26 8 C28 12 26 16 22 18 C20 19 18 16 18 14Z" fill="rgba(255,255,255,0.25)" />
                <text x="20" y="30" fill="white" fontSize="10" fontWeight="900" fontFamily="monospace" textAnchor="middle">&lt;/&gt;</text>
              </svg>
              <span className={styles.brandName}>
                <span>Vorc</span>
                <span className={styles.accent}>IT</span>
              </span>
            </Link>
            <p className={styles.tagline}>Code Strong. Build Stronger. Premium web, AI, design & marketing solutions that flex your business forward.</p>
            <div className={styles.socials}>
              {['twitter', 'linkedin', 'instagram', 'github'].map((social) => (
                <a key={social} href="#" className={styles.socialIcon} aria-label={social}>
                  {social === 'twitter' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>}
                  {social === 'linkedin' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>}
                  {social === 'instagram' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>}
                  {social === 'github' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Services</h4>
            {footerLinks.services.map((link) => (
              <Link key={link.href} href={link.href} className={styles.link}>{link.label}</Link>
            ))}
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Company</h4>
            {footerLinks.company.map((link) => (
              <Link key={link.href} href={link.href} className={styles.link}>{link.label}</Link>
            ))}
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Contact</h4>
            <a href="tel:+919650754598" className={styles.link}>📞 +91 9650754598</a>
            <a href="mailto:samarthshekhar12@gmail.com" className={styles.link}>📧 samarthshekhar12@gmail.com</a>
            <a href="https://wa.me/919650754598" target="_blank" rel="noopener noreferrer" className={styles.link}>💬 WhatsApp</a>
          </div>
        </div>

        {/* CRAZY ANIMATED BRAND SHOWCASE */}
        <div className={styles.brandShowcase}>
          {/* Animated background particles */}
          <div className={styles.particles}>
            {[...Array(12)].map((_, i) => (
              <span key={i} className={styles.particle} style={{ '--i': i }} />
            ))}
          </div>

          {/* Giant animated logo */}
          <div className={styles.bigLogo}>
            <svg viewBox="0 0 48 48" fill="none" className={styles.bigLogoSvg}>
              <defs>
                <linearGradient id="bigArmGrad" x1="0" y1="0" x2="48" y2="48">
                  <stop offset="0%" stopColor="#00F5D4" />
                  <stop offset="50%" stopColor="#7B61FF" />
                  <stop offset="100%" stopColor="#FF6B9D" />
                </linearGradient>
              </defs>
              <path className={styles.bigArm} d="M8 38 C8 38 6 30 10 26 C14 22 16 18 20 16 C22 15 24 12 22 8 C20 5 24 3 27 6 C30 9 30 14 28 18 C26 22 30 22 34 20 C38 18 40 22 38 26 C36 30 30 32 26 34 C22 36 18 38 14 38 Z" fill="url(#bigArmGrad)" />
              <path d="M18 14 C20 12 24 10 26 8 C28 12 26 16 22 18 C20 19 18 16 18 14Z" fill="rgba(255,255,255,0.3)" />
              <text x="20" y="30" fill="white" fontSize="10" fontWeight="900" fontFamily="monospace" textAnchor="middle">&lt;/&gt;</text>
            </svg>
          </div>

          {/* Giant animated brand name */}
          <div className={styles.bigBrandName}>
            <span className={styles.bigVorc}>Vorc</span>
            <span className={styles.bigIT}>IT</span>
          </div>

          {/* Catchy animated slogan */}
          <div className={styles.sloganContainer}>
            <p className={styles.slogan}>
              <span className={styles.sloganWord} style={{ '--delay': '0s' }}>Code</span>
              <span className={styles.sloganWord} style={{ '--delay': '0.15s' }}>Strong.</span>
              <span className={styles.sloganWordAccent} style={{ '--delay': '0.3s' }}>Build</span>
              <span className={styles.sloganWordAccent} style={{ '--delay': '0.45s' }}>Stronger.</span>
            </p>
          </div>

          {/* Orbiting code symbols */}
          <div className={styles.orbitRing}>
            {['<', '/>', '{', '}', '()', '[]', '=>', '&&'].map((sym, i) => (
              <span key={i} className={styles.orbitSymbol} style={{ '--orbit-i': i, '--orbit-total': 8 }}>
                {sym}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} VorcIT. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
