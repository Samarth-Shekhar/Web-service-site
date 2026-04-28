'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ServiceSelector.module.css';
import ScrollReveal from './ScrollReveal';

const FALLBACK_SERVICES = [
  { _id: '1', title: 'Website Design', slug: 'website-design', category: 'Technical', icon: '🌐' },
  { _id: '2', title: 'Web Application', slug: 'web-application', category: 'Technical', icon: '💻' },
  { _id: '3', title: 'E-commerce Solutions', slug: 'ecommerce-solutions', category: 'Technical', icon: '🛍️' },
  { _id: '4', title: 'AI Chatbots', slug: 'ai-chatbots', category: 'AI & Automation', icon: '🤖' },
  { _id: '5', title: 'Research Paper', slug: 'research-paper', category: 'Academic', icon: '📝' },
  { _id: '6', title: 'Data Analysis', slug: 'data-analysis', category: 'Academic', icon: '📊' },
  { _id: '7', title: 'Journal Publication', slug: 'journal-publication', category: 'Academic', icon: '📚' }
];

export default function ServiceSelector() {
  const [services, setServices] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/services');
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          setServices(data.data);
        } else {
          setServices(FALLBACK_SERVICES);
        }
      } catch (err) {
        console.error('Failed to fetch services, using fallback:', err);
        setServices(FALLBACK_SERVICES);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter based on search
  const filtered = services.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()));
  
  // Group services
  const technicalServices = filtered.filter(s => s.category === 'Technical' || s.category === 'Technical Services');
  const academicServices = filtered.filter(s => s.category === 'Academic' || s.category === 'Academic Services');
  const otherServices = filtered.filter(s => s.category !== 'Technical' && s.category !== 'Technical Services' && s.category !== 'Academic' && s.category !== 'Academic Services');

  const handleSelect = (slug) => {
    setIsOpen(false);
    router.push(`/services/${slug}`);
  };

  return (
    <section className={styles.section} id="service-selector">
      <div className="container">
        <ScrollReveal>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <span className="section-label">Find What You Need</span>
              <h2 className={styles.title}>👉 Choose a Service for You</h2>
            </div>
            
            <div className={styles.selectorContainer} ref={dropdownRef}>
              <div 
                className={`${styles.selectorBox} ${isOpen ? styles.active : ''}`}
                onClick={() => setIsOpen(true)}
              >
                <input 
                  type="text" 
                  placeholder={loading ? "Loading services..." : "Search for a service..."}
                  className={styles.searchInput}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsOpen(true)}
                  disabled={loading}
                />
                <div className={styles.iconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              {isOpen && !loading && (
                <div className={styles.dropdownMenu}>
                  {technicalServices.length > 0 && (
                    <div className={styles.categoryGroup}>
                      <h3 className={styles.categoryTitle}>Technical Services</h3>
                      <ul className={styles.serviceList}>
                        {technicalServices.map((service, i) => (
                          <li key={service._id || i} onClick={() => handleSelect(service.slug)}>
                            <span className={styles.serviceIcon}>{service.icon}</span>
                            {service.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {academicServices.length > 0 && (
                    <div className={styles.categoryGroup}>
                      <h3 className={styles.categoryTitle}>Academic & Research Services</h3>
                      <ul className={styles.serviceList}>
                        {academicServices.map((service, i) => (
                          <li key={service._id || i} onClick={() => handleSelect(service.slug)}>
                            <span className={styles.serviceIcon}>{service.icon}</span>
                            {service.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {otherServices.length > 0 && (
                    <div className={styles.categoryGroup}>
                      <h3 className={styles.categoryTitle}>AI & Other Services</h3>
                      <ul className={styles.serviceList}>
                        {otherServices.map((service, i) => (
                          <li key={service._id || i} onClick={() => handleSelect(service.slug)}>
                            <span className={styles.serviceIcon}>{service.icon}</span>
                            {service.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {filtered.length === 0 && (
                    <div className={styles.noResults}>No services found matching "{searchQuery}"</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
