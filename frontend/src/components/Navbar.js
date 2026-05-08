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
            <svg viewBox="0 0 64 64" fill="none" width="32" height="32" className={styles.logoSvg}>
              <defs>
                <linearGradient id="armGrad" x1="0" y1="0" x2="64" y2="64">
                  <stop offset="0%" stopColor="#00F5D4" />
                  <stop offset="60%" stopColor="#7B61FF" />
                  <stop offset="100%" stopColor="#6C4FE0" />
                </linearGradient>
              </defs>
              {/* Classic flexing bicep - matching reference */}
              <path className={styles.armPath} d="M12,52 C12,52 8,44 10,38 C12,32 16,28 18,26 C20,24 22,20 24,16 C26,12 28,8 32,6 C34,5 36,6 36,8 C36,10 34,14 32,16 C30,18 30,20 32,20 C34,20 38,18 42,16 C44,15 46,14 48,16 C50,18 48,22 44,24 C40,26 36,28 36,32 C36,36 40,38 44,40 C48,42 52,46 50,50 C48,54 42,56 36,56 C30,56 24,56 18,54 C14,52 12,52 12,52 Z" fill="url(#armGrad)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
              {/* Bicep muscle definition line */}
              <path className={styles.musclePulse} d="M32,16 C28,20 26,26 28,30 C30,28 34,24 38,20 C36,18 34,18 32,20" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
              {/* Muscle highlight on bicep bulge */}
              <path d="M28,12 C30,10 34,8 34,12 C34,16 30,18 28,16 Z" fill="rgba(255,255,255,0.15)" />
              {/* </> code tattoo on the forearm */}
              <text className={styles.codeBrackets} x="36" y="44" fill="rgba(255,255,255,0.9)" fontSize="8" fontWeight="800" fontFamily="monospace" textAnchor="middle" letterSpacing="-0.5">&lt;/&gt;</text>
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
