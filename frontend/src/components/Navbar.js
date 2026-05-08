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
            <svg viewBox="0 0 40 40" fill="none" width="30" height="30" className={styles.logoSvg}>
              <defs>
                <linearGradient id="armGrad" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#00F5D4" />
                  <stop offset="100%" stopColor="#7B61FF" />
                </linearGradient>
              </defs>
              {/* Clean flexing bicep arm */}
              <path className={styles.armPath} d="M28,36 L18,36 C16,36 14,34 13,32 L10,26 C9,24 9,22 10,20 L12,16 C12.5,15 13,14.5 13,13 L13,11 C13,9.5 14,8 15.5,8 L17,8 C18,8 19,9 19,10 L19,14 C19,15 19.5,15.5 20,16 L22,17 C24,17.5 26,16 27,14 L28,12 C28.5,11 29.5,10.5 30.5,11 C31.5,11.5 32,12.5 31.5,13.5 L29,18 C28,20 28,22 30,23 L33,24 C35,25 36,27 35,29 L34,32 C33,34 31,36 28,36 Z" fill="url(#armGrad)" />
              {/* Bicep muscle highlight */}
              <path className={styles.musclePulse} d="M27,14 C28.5,17 27,20 24,21 C22,21.5 20,20 19.5,18 C21,18 24,17 27,14 Z" fill="rgba(255,255,255,0.2)" />
              {/* Code tattoo on the bicep */}
              <text className={styles.codeBrackets} x="23" y="23" fill="rgba(255,255,255,0.85)" fontSize="6" fontWeight="800" fontFamily="monospace" textAnchor="middle" letterSpacing="-0.5">&lt;/&gt;</text>
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
