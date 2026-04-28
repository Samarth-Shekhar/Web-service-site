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
              <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
                <rect width="32" height="32" rx="8" fill="url(#footerGrad)" />
                <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="white" fillOpacity="0.9" />
                <path d="M12 16L16 12L20 16L16 20L12 16Z" fill="url(#footerGrad2)" />
                <defs>
                  <linearGradient id="footerGrad" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#00F5D4"/><stop offset="1" stopColor="#7B61FF"/></linearGradient>
                  <linearGradient id="footerGrad2" x1="12" y1="12" x2="20" y2="20"><stop stopColor="#00F5D4"/><stop offset="1" stopColor="#7B61FF"/></linearGradient>
                </defs>
              </svg>
              <span>Nexus<span className={styles.accent}>Digital</span></span>
            </Link>
            <p className={styles.tagline}>We build digital experiences that scale. Premium web, AI, design & marketing solutions for modern businesses.</p>
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

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} NexusDigital. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
