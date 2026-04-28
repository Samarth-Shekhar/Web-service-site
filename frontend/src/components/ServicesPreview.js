'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import styles from './ServicesPreview.module.css';

const FALLBACK_SERVICES = [
  {
    _id: '1',
    title: 'Website Design',
    slug: 'website-design',
    category: 'Technical Services',
    shortDescription: 'Modern, responsive website designs tailored to your brand identity.',
    features: [{ title: 'UI/UX Design' }, { title: 'Responsive' }]
  },
  {
    _id: '2',
    title: 'Web Application',
    slug: 'web-application',
    category: 'Technical Services',
    shortDescription: 'Custom web applications built with React and Next.js for high performance.',
    features: [{ title: 'Full-stack' }, { title: 'Scalable' }]
  },
  {
    _id: '3',
    title: 'AI Chatbots',
    slug: 'ai-chatbots',
    category: 'AI & Automation',
    shortDescription: 'Intelligent AI-powered chatbots to automate your customer support.',
    features: [{ title: 'GPT-4' }, { title: '24/7 Support' }]
  },
  {
    _id: '4',
    title: 'SEO Optimization',
    slug: 'seo-optimization',
    category: 'Technical Services',
    shortDescription: 'Rank higher on search engines and drive organic traffic to your site.',
    features: [{ title: 'Keywords' }, { title: 'Backlinks' }]
  },
  {
    _id: '5',
    title: 'Research Paper',
    slug: 'research-paper',
    category: 'Academic Services',
    shortDescription: 'Professional assistance for high-quality academic research papers.',
    features: [{ title: 'PhD Experts' }, { title: 'Plagiarism Free' }]
  },
  {
    _id: '6',
    title: 'Data Analysis',
    slug: 'data-analysis',
    category: 'Academic Services',
    shortDescription: 'Expert data analysis using Python, R, and advanced statistical tools.',
    features: [{ title: 'Statistical' }, { title: 'Visuals' }]
  }
];

export default function ServicesPreview() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/services');
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          setServices(data.data.slice(0, 6));
        } else {
          setServices(FALLBACK_SERVICES);
        }
      } catch (err) {
        console.error('Error fetching services, using fallback:', err);
        setServices(FALLBACK_SERVICES);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const getImageForIndex = (index) => {
    const images = [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Web
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // AI
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Design
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Data
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Team
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'  // Office
    ];
    return images[index % images.length];
  };

  if (loading) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', width: '40px', height: '40px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent-primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

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
            <ScrollReveal key={svc._id || i} delay={i * 100}>
              <div className={styles.card}>
                <Link href={`/services/${svc.slug}`} className={styles.cardHeaderLink}>
                  <div className={styles.cardImage}>
                    <img 
                      src={getImageForIndex(i)} 
                      alt={svc.title} 
                      className={styles.image}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div className={styles.categoryBadge}>{svc.category}</div>
                  </div>
                </Link>
                <div className={styles.cardBody}>
                  <Link href={`/services/${svc.slug}`} className={styles.titleLink}>
                    <h3 className={styles.cardTitle}>{svc.title}</h3>
                  </Link>
                  <p className={styles.description}>{svc.shortDescription}</p>
                  
                  {svc.features && svc.features.length > 0 && (
                    <div className={styles.tags}>
                      {svc.features.slice(0, 2).map((feat, idx) => (
                        <span key={idx} className={styles.tag}>{feat.title}</span>
                      ))}
                    </div>
                  )}
                  
                  <div className={styles.cardFooter}>
                    <Link href="/contact" className={styles.btnOutline}>
                      Get Quote
                    </Link>
                    <a 
                      href={`https://wa.me/919650754598?text=Hi, I am interested in your ${svc.title} service`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.btnWhatsapp}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                      </svg>
                      Talk on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
