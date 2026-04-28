'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import CTABanner from '@/components/CTABanner';
import styles from './portfolio.module.css';

const projects = [
  {
    id: 1,
    title: 'EduLearn Platform',
    category: 'development',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'A comprehensive e-learning platform with AI-powered course recommendations, video streaming, and real-time collaboration tools.',
    color: '#7c3aed',
    results: '200% increase in user engagement'
  },
  {
    id: 2,
    title: 'CloudSync Dashboard',
    category: 'development',
    tags: ['Next.js', 'GraphQL', 'AWS'],
    description: 'Enterprise-grade cloud management dashboard with real-time monitoring, automated scaling, and cost optimization features.',
    color: '#3b82f6',
    results: '40% reduction in cloud costs'
  },
  {
    id: 3,
    title: 'NeuralAssist Chatbot',
    category: 'ai',
    tags: ['GPT-4', 'LangChain', 'Python'],
    description: 'AI-powered customer support chatbot handling 70% of queries autonomously with multi-language support and sentiment analysis.',
    color: '#10b981',
    results: '70% automated query resolution'
  },
  {
    id: 4,
    title: 'FinTrack Mobile App',
    category: 'development',
    tags: ['React Native', 'Firebase', 'Stripe'],
    description: 'Personal finance management app with expense tracking, budget planning, and investment portfolio analysis.',
    color: '#f59e0b',
    results: '50K+ downloads in 3 months'
  },
  {
    id: 5,
    title: 'Luxe Brand Identity',
    category: 'design',
    tags: ['Branding', 'UI/UX', 'Motion'],
    description: 'Complete brand identity redesign for a luxury fashion startup including logo, guidelines, website, and social media templates.',
    color: '#ec4899',
    results: '300% social media growth'
  },
  {
    id: 6,
    title: 'DataPulse Marketing',
    category: 'marketing',
    tags: ['SEO', 'Google Ads', 'Analytics'],
    description: 'Full-scale digital marketing campaign including SEO optimization, PPC advertising, and content strategy execution.',
    color: '#06b6d4',
    results: '250% increase in organic traffic'
  },
  {
    id: 7,
    title: 'HealthConnect SaaS',
    category: 'development',
    tags: ['Next.js', 'PostgreSQL', 'Docker'],
    description: 'Telemedicine SaaS platform with video consultations, prescription management, and health record integration.',
    color: '#8b5cf6',
    results: '10K+ active healthcare providers'
  },
  {
    id: 8,
    title: 'AutoFlow CRM',
    category: 'ai',
    tags: ['Automation', 'Zapier', 'HubSpot'],
    description: 'Custom CRM automation system integrating 15+ tools with intelligent lead scoring and automated follow-ups.',
    color: '#f43f5e',
    results: '60% increase in lead conversion'
  },
];

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'development', label: 'Development' },
  { key: 'ai', label: 'AI & Automation' },
  { key: 'design', label: 'Design' },
  { key: 'marketing', label: 'Marketing' },
];

export default function PortfolioContent() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOrb}></div>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Our Work</span>
            <h1 className={styles.heroTitle}>
              Projects that <span className="text-gradient">speak for themselves</span>
            </h1>
            <p className={styles.heroSubtitle}>
              A showcase of our best work across web development, AI solutions, design, and marketing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <section className={styles.filterSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.filterBar}>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`${styles.filterBtn} ${filter === cat.key ? styles.filterActive : ''}`}
                  onClick={() => setFilter(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.grid}>
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 100}>
                <div className={styles.projectCard}>
                  <div className={styles.projectPreview} style={{ '--project-color': project.color }}>
                    <div className={styles.projectIcon}>
                      <span style={{ color: project.color, fontSize: '2rem' }}>◆</span>
                    </div>
                    <div className={styles.projectOverlay}>
                      <span className={styles.viewBtn}>View Case Study →</span>
                    </div>
                  </div>
                  <div className={styles.projectInfo}>
                    <div className={styles.projectTags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.description}</p>
                    <div className={styles.projectResult}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1V13M7 1L3 5M7 1L11 5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{project.results}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
