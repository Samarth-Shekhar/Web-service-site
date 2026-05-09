'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import styles from './ProjectsShowcase.module.css';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const CATEGORIES = [
  'All Projects',
  'Restaurant & Cafe',
  'Web & SaaS',
  'AI & Automation',
  'Academic & Research'
];

const FALLBACK_PROJECTS = [
  {
    id: 'fallback-cafe',
    title: 'Cafe Management Website',
    slug: 'cafe-management-website',
    description: 'A premium cafe operations website with menu management, booking, inventory, and order workflows.',
    category: 'Restaurant & Cafe',
    tech_stack: ['Next.js', 'Supabase', 'Stripe'],
    github_link: 'https://github.com/Samarth-Shekhar',
    live_link: '#',
    image_url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80',
    case_study: 'Designed for busy cafes that need table bookings, digital menus, stock visibility, and a cleaner customer journey from discovery to order.',
    featured: true
  },
  {
    id: 'fallback-meal',
    title: 'AI Meal Planner',
    slug: 'ai-meal-planner',
    description: 'Personalized meal planning SaaS with AI recipes, nutrition goals, grocery lists, and user dashboards.',
    category: 'Web & SaaS',
    tech_stack: ['React', 'Node.js', 'OpenAI'],
    github_link: 'https://github.com/Samarth-Shekhar',
    live_link: '#',
    image_url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80',
    case_study: 'Built around weekly planning, dietary preferences, and repeatable subscription workflows for health-focused consumers.',
    featured: true
  },
  {
    id: 'fallback-shipment',
    title: 'Shipment Delivery Application',
    slug: 'shipment-delivery-application',
    description: 'Logistics dashboard for route visibility, delivery status, partner tracking, and operational reporting.',
    category: 'Web & SaaS',
    tech_stack: ['MERN', 'Maps API', 'Socket.io'],
    github_link: 'https://github.com/Samarth-Shekhar',
    live_link: '#',
    image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    case_study: 'A scalable delivery workflow for shipment creation, live status updates, proof of delivery, and branch-level monitoring.',
    featured: true
  },
  {
    id: 'fallback-ai-agent',
    title: 'Real Estate Agentic AI Assistant',
    slug: 'real-estate-agentic-ai-assistant',
    description: 'AI assistant that qualifies leads, recommends properties, drafts follow-ups, and keeps brokers organized.',
    category: 'AI & Automation',
    tech_stack: ['Python', 'LangChain', 'FastAPI'],
    github_link: 'https://github.com/Samarth-Shekhar',
    live_link: '#',
    image_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
    case_study: 'Created to reduce repetitive broker work while improving response speed, lead scoring, and buyer-property matching.',
    featured: true
  },
  {
    id: 'fallback-research',
    title: 'Research Publication Workflow',
    slug: 'research-publication-workflow',
    description: 'Academic workflow system for IEEE formatting, literature tracking, drafts, reports, and submission timelines.',
    category: 'Academic & Research',
    tech_stack: ['React', 'LaTeX', 'PDF.js'],
    github_link: 'https://github.com/Samarth-Shekhar',
    live_link: '#',
    image_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=80',
    case_study: 'A research operations layer for students and teams managing citations, publication stages, technical reports, and presentations.',
    featured: true
  },
  {
    id: 'fallback-scraper',
    title: 'Instagram Comment Scraper Tool',
    slug: 'instagram-comment-scraper-tool',
    description: 'Automation tool for structured comment extraction, filtering, enrichment, and lead/export workflows.',
    category: 'AI & Automation',
    tech_stack: ['Python', 'Selenium', 'NLP'],
    github_link: 'https://github.com/Samarth-Shekhar',
    live_link: '#',
    image_url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1000&q=80',
    case_study: 'Built for social research and campaign teams that need clean, repeatable audience intelligence from public engagement data.',
    featured: false
  }
];

export default function ProjectsShowcase({ limit = 6, showViewAll = true }) {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [activeCategory, searchTerm, projects]);

  const fetchProjects = async () => {
    // Bypass fetch to prevent connection refused errors on static GitHub Pages
    setProjects(FALLBACK_PROJECTS);
    setError('');
    setLoading(false);
  };

  const filterProjects = () => {
    let filtered = projects;

    // Filter by category
    if (activeCategory !== 'All Projects') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tech_stack?.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  };

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
                Production-style builds across food tech, SaaS, AI automation, and academic research systems.
              </p>
            </div>
            {showViewAll && (
              <Link href="/portfolio" className="btn btn-secondary">
                View All Projects
              </Link>
            )}
          </div>
        </ScrollReveal>

        {/* Search Bar */}
        <ScrollReveal delay={100}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={150}>
          <div className={styles.filterContainer}>
            {CATEGORIES.map(category => (
              <button
                key={category}
                className={`${styles.filterBtn} ${activeCategory === category ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        {loading ? (
          <div className={styles.loading}>Loading projects...</div>
        ) : error ? (
          <div className={styles.error}>{error}</div>
        ) : filteredProjects.length === 0 ? (
          <div className={styles.empty}>No projects found matching your search.</div>
        ) : (
          <div className={styles.grid}>
            {filteredProjects.slice(0, limit).map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 100}>
                <article className={styles.card}>
                    <div className={styles.cardImage}>
                      <img 
                        src={project.image_url || 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} 
                        alt={project.title}
                        className={styles.image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <span className={styles.categoryBadge}>{project.category}</span>
                      {project.featured && <span className={styles.featuredBadge}>Featured</span>}
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      <p className={styles.cardDesc}>{project.description}</p>
                      <div className={styles.techStack}>
                        {project.tech_stack?.slice(0, 3).map(t => (
                          <span key={t} className={styles.techTag}>{t}</span>
                        ))}
                        {project.tech_stack?.length > 3 && (
                          <span className={styles.techTag}>+{project.tech_stack.length - 3}</span>
                        )}
                      </div>
                      <div className={styles.projectLinks}>
                        <button type="button" className={styles.link} onClick={() => setSelectedProject(project)}>
                          Case Study
                        </button>
                        {project.github_link && (
                          <a href={project.github_link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            GitHub
                          </a>
                        )}
                        
                      </div>
                    </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {selectedProject && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-label={`${selectedProject.title} case study`}>
          <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={() => setSelectedProject(null)} aria-label="Close case study">x</button>
            <div className={styles.modalImage}>
              <img src={selectedProject.image_url} alt={selectedProject.title} />
            </div>
            <div className={styles.modalBody}>
              <span className={styles.categoryBadge}>{selectedProject.category}</span>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.case_study || selectedProject.description}</p>
              <div className={styles.timeline}>
                <div><strong>Discovery</strong><span>Business workflow, audience, and data model mapped.</span></div>
                <div><strong>Build</strong><span>Responsive interface, API layer, and admin-ready content model.</span></div>
                <div><strong>Outcome</strong><span>Cleaner operations, faster delivery, and measurable client-facing credibility.</span></div>
              </div>
              <div className={styles.techStack}>
                {selectedProject.tech_stack?.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
