'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Read the current theme from the DOM attribute (set by ThemeScript)
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '#services' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>
            {/* Muscular arm flexing with code brackets */}
            <svg viewBox="0 0 48 48" fill="none" width="32" height="32" className={styles.logoSvg}>
              <defs>
                <linearGradient id="armGrad" x1="0" y1="0" x2="48" y2="48">
                  <stop offset="0%" stopColor="#00F5D4" />
                  <stop offset="50%" stopColor="#7B61FF" />
                  <stop offset="100%" stopColor="#FF6B9D" />
                </linearGradient>
                <linearGradient id="codeGrad" x1="0" y1="0" x2="48" y2="48">
                  <stop offset="0%" stopColor="#00F5D4" />
                  <stop offset="100%" stopColor="#7B61FF" />
                </linearGradient>
              </defs>
              {/* Flexing bicep arm */}
              <path className={styles.armPath} d="M8 38 C8 38 6 30 10 26 C14 22 16 18 20 16 C22 15 24 12 22 8 C20 5 24 3 27 6 C30 9 30 14 28 18 C26 22 30 22 34 20 C38 18 40 22 38 26 C36 30 30 32 26 34 C22 36 18 38 14 38 Z" fill="url(#armGrad)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
              {/* Muscle bulge highlight */}
              <path className={styles.musclePulse} d="M18 14 C20 12 24 10 26 8 C28 12 26 16 22 18 C20 19 18 16 18 14Z" fill="rgba(255,255,255,0.25)" />
              {/* Code brackets </> */}
              <text className={styles.codeBrackets} x="20" y="30" fill="white" fontSize="10" fontWeight="900" fontFamily="monospace" textAnchor="middle">&lt;/&gt;</text>
            </svg>
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoVorc}>Vorc</span>
            <span className={styles.logoIT}>IT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          
          <Link href="/contact" className="btn btn-primary">
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`${styles.mobileToggle} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.path}
            className={styles.mobileLink}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>
          Start a Project
        </Link>
      </div>
    </nav>
  );
}
