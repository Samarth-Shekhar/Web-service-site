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
            <svg viewBox="0 0 32 32" fill="none" width="24" height="24" className={styles.logoSvg}>
              <defs>
                <linearGradient id="vorcitGrad" x1="0" y1="0" x2="32" y2="32">
                  <stop offset="0%" stopColor="#00F5D4" />
                  <stop offset="50%" stopColor="#7B61FF" />
                  <stop offset="100%" stopColor="#FF6B9D" />
                </linearGradient>
              </defs>
              <polygon points="16,2 28,10 28,22 16,30 4,22 4,10" fill="url(#vorcitGrad)" className={styles.logoHex} />
              <polygon points="16,8 22,12 22,20 16,24 10,20 10,12" fill="white" fillOpacity="0.9" className={styles.logoInner} />
              <circle cx="16" cy="16" r="3" fill="url(#vorcitGrad)" className={styles.logoCore} />
            </svg>
          </span>
          <span className={styles.logoText}>Vor<span className={styles.logoAccent}>cit</span></span>
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
