'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import styles from './ServicesPreview.module.css';

const services = [
  {
    id: 1,
    title: 'Web & App Development',
    description: 'Full-stack web applications and cross-platform mobile apps built with React, Next.js, and Node.js for maximum performance.',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    image: '/images/service-webdev.png',
    link: '/services/web-development'
  },
  {
    id: 2,
    title: 'AI & Automation',
    description: 'Custom AI chatbots, LLM integrations, and intelligent workflow automation that reduce costs and scale operations.',
    tags: ['OpenAI', 'Python', 'LangChain', 'RAG'],
    image: '/images/service-ai.png',
    link: '/services/ai-chatbots'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Research-driven, pixel-perfect interfaces and design systems that convert visitors into loyal users.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
    image: '/images/service-design.png',
    link: '/services/ui-ux-design'
  }
];

export default function ServicesPreview() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <div>
              <span className="section-label">Our Services</span>
              <h2 className="section-title">
                What we <span className="text-gradient">build best</span>
              </h2>
              <p className="section-subtitle">
                End-to-end digital solutions from strategy through launch and beyond.
              </p>
            </div>
            <Link href="/services" className="btn btn-secondary">
              All Services →
            </Link>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {services.map((svc, i) => (
            <ScrollReveal key={svc.id} delay={i * 100}>
              <Link href={svc.link} className={styles.cardLink}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image 
                      src={svc.image}
                      alt={svc.title}
                      width={400}
                      height={240}
                      className={styles.image}
                    />
                    <div className={styles.cardNumber}>0{svc.id}</div>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{svc.title}</h3>
                    <p className={styles.description}>{svc.description}</p>
                    <div className={styles.tags}>
                      {svc.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <div className={styles.cardFooter}>
                      <span className={styles.learnMore}>Learn more</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
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
