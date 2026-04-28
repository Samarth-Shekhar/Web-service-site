'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import styles from './ProjectsShowcase.module.css';

const projects = [
  {
    id: 1,
    title: 'ShopVault E-Commerce',
    category: 'Web Development',
    description: 'Full-stack e-commerce platform with real-time inventory, Stripe payments, and admin dashboard.',
    image: '/images/project-ecommerce.png',
    tech: ['Next.js', 'Stripe', 'MongoDB'],
    link: '/portfolio'
  },
  {
    id: 2,
    title: 'DataPulse Analytics',
    category: 'SaaS Platform',
    description: 'Enterprise analytics dashboard with real-time data streams, custom visualizations, and team collaboration.',
    image: '/images/project-saas.png',
    tech: ['React', 'D3.js', 'PostgreSQL'],
    link: '/portfolio'
  },
  {
    id: 3,
    title: 'PayFlow Mobile',
    category: 'Mobile App',
    description: 'Cross-platform fintech app for peer-to-peer payments, bill splitting, and expense tracking.',
    image: '/images/project-mobile.png',
    tech: ['React Native', 'Node.js', 'Firebase'],
    link: '/portfolio'
  },
  {
    id: 4,
    title: 'MediConnect Health',
    category: 'Healthcare',
    description: 'Patient management system with appointment scheduling, telemedicine, and health metrics tracking.',
    image: '/images/project-healthcare.png',
    tech: ['Next.js', 'Python', 'AWS'],
    link: '/portfolio'
  }
];

export default function ProjectsShowcase() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <div>
              <span className="section-label">Our Work</span>
              <h2 className="section-title">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="section-subtitle">
                Real products we&apos;ve built for startups and enterprises across industries.
              </p>
            </div>
            <Link href="/portfolio" className="btn btn-secondary">
              View All Projects →
            </Link>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 100}>
              <Link href={project.link} className={styles.cardLink}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={340}
                      className={styles.image}
                    />
                    <span className={styles.categoryBadge}>{project.category}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardDesc}>{project.description}</p>
                    <div className={styles.techStack}>
                      {project.tech.map(t => (
                        <span key={t} className={styles.techTag}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
