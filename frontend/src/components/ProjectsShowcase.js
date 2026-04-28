'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import styles from './ProjectsShowcase.module.css';

const projects = [
  {
    id: 1,
    title: 'NexGen E-Commerce',
    category: 'Website Design & Dev',
    description: 'High-performance, fully custom e-commerce platform with Stripe integration and dynamic inventory management.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    link: '/portfolio'
  },
  {
    id: 2,
    title: 'EduTech Learning Portal',
    category: 'Educational Websites',
    description: 'Interactive LMS platform designed for universities with live video classes, quizzes, and secure student portals.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Express', 'WebRTC'],
    link: '/portfolio'
  },
  {
    id: 3,
    title: 'Automated Support AI',
    category: 'AI Chatbots',
    description: 'Custom-trained NLP chatbot integrated into WhatsApp that handles customer inquiries and appointment bookings 24/7.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['Python', 'OpenAI', 'LangChain'],
    link: '/portfolio'
  },
  {
    id: 4,
    title: 'Lumina Brand Identity',
    category: 'UI/UX & Branding',
    description: 'Complete visual overhaul for a tech startup, including wireframing, modern typography, and a cohesive design system.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['Figma', 'Prototyping', 'User Research'],
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
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={styles.image}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
