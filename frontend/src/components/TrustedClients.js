'use client';

import { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import styles from './TrustedClients.module.css';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const FALLBACK_COMPANIES = [
  'Marksman Technologies',
  'Airports Authority of India',
  'Essentia.dev',
  'Celebal Technologies',
  'ZenSolarCiti',
  'Chaupal Foundation',
  'PepeLeads'
].map((name, index) => ({
  id: `fallback-${index}`,
  name,
  logo_url: '',
  website: '#'
}));

const initials = (name) => name.split(/\s|\./).filter(Boolean).slice(0, 2).map(word => word[0]).join('').toUpperCase();

export default function TrustedClients() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const res = await fetch(`${API}/companies`);
      const data = await res.json();
      if (data.success) {
        setCompanies(data.data?.length ? data.data : FALLBACK_COMPANIES);
      }
    } catch (err) {
      console.error('Error fetching companies:', err);
      setCompanies(FALLBACK_COMPANIES);
      setError('');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.loading}>Loading companies...</div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className="section-label">Partnerships</span>
            <h2 className="section-title">
              Trusted by <span className="text-gradient">leading companies</span>
            </h2>
            <p className="section-subtitle">
              We partner with innovative organizations and global brands to deliver exceptional solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Infinite Marquee */}
        <ScrollReveal delay={150}>
          <div className={styles.marqueeContainer}>
            <div className={styles.marquee}>
              {companies.length > 0 && companies.map((company, i) => (
                <div key={`${company.id}-1`} className={styles.marqueeItem}>
                  <div className={styles.companyCard}>
                    <div className={styles.logoWrapper}>
                      {company.logo_url ? (
                        <img src={company.logo_url} alt={company.name} className={styles.logo} />
                      ) : (
                        <span className={styles.logoInitials}>{initials(company.name)}</span>
                      )}
                    </div>
                    <p className={styles.companyName}>{company.name}</p>
                  </div>
                </div>
              ))}
              {/* Duplicate for infinite scroll */}
              {companies.length > 0 && companies.map((company, i) => (
                <div key={`${company.id}-2`} className={styles.marqueeItem}>
                  <div className={styles.companyCard}>
                    <div className={styles.logoWrapper}>
                      {company.logo_url ? (
                        <img src={company.logo_url} alt={company.name} className={styles.logo} />
                      ) : (
                        <span className={styles.logoInitials}>{initials(company.name)}</span>
                      )}
                    </div>
                    <p className={styles.companyName}>{company.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <ScrollReveal delay={300}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>50+</div>
              <div className={styles.statLabel}>Enterprise Clients</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>150+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>12</div>
              <div className={styles.statLabel}>Countries Served</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>4.9★</div>
              <div className={styles.statLabel}>Average Rating</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
