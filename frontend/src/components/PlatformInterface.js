'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './PlatformInterface.module.css';

const industries = [
  'Development',
  'AI & Automation',
  'Design',
  'Marketing',
  'Infrastructure'
];

const projects = [
  {
    category: 'WEB APP',
    industry: 'DEVELOPMENT',
    title: 'Custom SaaS platform development',
    slug: 'web-development',
    icon: '💻'
  },
  {
    category: 'INTEGRATION',
    industry: 'AI & AUTOMATION',
    title: 'Intelligent AI chatbot deployment',
    slug: 'ai-chatbots',
    icon: '🤖'
  },
  {
    category: 'INTERFACE',
    industry: 'DESIGN',
    title: 'High-conversion UI/UX design',
    slug: 'ui-ux-design',
    icon: '🎨'
  },
  {
    category: 'GROWTH',
    industry: 'MARKETING',
    title: 'Data-driven SEO & performance marketing',
    slug: 'seo-optimization',
    icon: '📈'
  },
  {
    category: 'MOBILE',
    industry: 'DEVELOPMENT',
    title: 'Cross-platform mobile applications',
    slug: 'app-development',
    icon: '📱'
  },
  {
    category: 'SYSTEMS',
    industry: 'INFRASTRUCTURE',
    title: 'Robust API & backend architecture',
    slug: 'api-integration',
    icon: '⚙️'
  },
];

export default function PlatformInterface() {
  const [selectedInd, setSelectedInd] = useState(['Development']);

  const toggleIndustry = (ind) => {
    if (selectedInd.includes(ind)) {
      setSelectedInd(selectedInd.filter(i => i !== ind));
    } else {
      setSelectedInd([...selectedInd, ind]);
    }
  };

  return (
    <div className={styles.platform}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1>Our <span>Services</span></h1>
          <p>Everything you need to grow digitally.</p>
        </div>
        <div className={styles.sort}>
          <span>Sort by</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5"/></svg>
        </div>
      </div>

      <div className={styles.content}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Choose industry:</h3>
          <ul className={styles.filterList}>
            {industries.map(ind => (
              <li key={ind}>
                <label className={styles.checkbox}>
                  <input 
                    type="checkbox" 
                    checked={selectedInd.includes(ind)}
                    onChange={() => toggleIndustry(ind)}
                  />
                  <span className={styles.checkmark}></span>
                  <span className={styles.label}>{ind}</span>
                </label>
              </li>
            ))}
          </ul>
        </aside>

        {/* Grid */}
        <div className={styles.grid}>
          {projects.map((proj, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardVisual}>
                <div className={styles.icon}>{proj.icon}</div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.tags}>
                  <span className={styles.tagPrimary}>{proj.category}</span>
                  <span className={styles.tagSecondary}>{proj.industry}</span>
                </div>
                <h4 className={styles.cardTitle}>{proj.title}</h4>
                <Link href={`/portfolio/${proj.slug}`} className={styles.readMore}>
                  Read case study <span className={styles.arrow}>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
