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
              <svg viewBox="0 0 64 64" fill="none" width="28" height="28" className={styles.footerLogoSvg}>
                <defs>
                  <linearGradient id="footerArmGrad" x1="0" y1="0" x2="64" y2="64">
                    <stop offset="0%" stopColor="#00F5D4" />
                    <stop offset="60%" stopColor="#7B61FF" />
                    <stop offset="100%" stopColor="#6C4FE0" />
                  </linearGradient>
                </defs>
                <path d="M12,52 C12,52 8,44 10,38 C12,32 16,28 18,26 C20,24 22,20 24,16 C26,12 28,8 32,6 C34,5 36,6 36,8 C36,10 34,14 32,16 C30,18 30,20 32,20 C34,20 38,18 42,16 C44,15 46,14 48,16 C50,18 48,22 44,24 C40,26 36,28 36,32 C36,36 40,38 44,40 C48,42 52,46 50,50 C48,54 42,56 36,56 C30,56 24,56 18,54 C14,52 12,52 12,52 Z" fill="url(#footerArmGrad)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
                <path d="M32,16 C28,20 26,26 28,30 C30,28 34,24 38,20 C36,18 34,18 32,20" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
                <text x="36" y="44" fill="rgba(255,255,255,0.9)" fontSize="8" fontWeight="800" fontFamily="monospace" textAnchor="middle" letterSpacing="-0.5">&lt;/&gt;</text>
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
            <svg viewBox="0 0 64 64" fill="none" className={styles.bigLogoSvg}>
              <defs>
                <linearGradient id="bigArmGrad" x1="0" y1="0" x2="64" y2="64">
                  <stop offset="0%" stopColor="#00F5D4" />
                  <stop offset="60%" stopColor="#7B61FF" />
                  <stop offset="100%" stopColor="#6C4FE0" />
                </linearGradient>
              </defs>
              <path className={styles.bigArm} d="M12,52 C12,52 8,44 10,38 C12,32 16,28 18,26 C20,24 22,20 24,16 C26,12 28,8 32,6 C34,5 36,6 36,8 C36,10 34,14 32,16 C30,18 30,20 32,20 C34,20 38,18 42,16 C44,15 46,14 48,16 C50,18 48,22 44,24 C40,26 36,28 36,32 C36,36 40,38 44,40 C48,42 52,46 50,50 C48,54 42,56 36,56 C30,56 24,56 18,54 C14,52 12,52 12,52 Z" fill="url(#bigArmGrad)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <path d="M32,16 C28,20 26,26 28,30 C30,28 34,24 38,20 C36,18 34,18 32,20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M28,12 C30,10 34,8 34,12 C34,16 30,18 28,16 Z" fill="rgba(255,255,255,0.12)" />
              <text x="36" y="44" fill="rgba(255,255,255,0.9)" fontSize="8" fontWeight="800" fontFamily="monospace" textAnchor="middle" letterSpacing="-0.5">&lt;/&gt;</text>
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
