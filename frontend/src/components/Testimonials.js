'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import styles from './Testimonials.module.css';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const FALLBACK_TESTIMONIALS = [
  {
    id: 'fallback-1',
    client_name: 'Aarav Mehta',
    company_name: 'Marksman Technologies',
    role: 'Product Lead',
    review: 'Excellent automation solutions and timely delivery. The team understood the business workflow and shipped a polished system.',
    rating: 5
  },
  {
    id: 'fallback-2',
    client_name: 'Priya Sharma',
    company_name: 'Essentia.dev',
    role: 'Engineering Manager',
    review: 'Professional dashboard development with scalable architecture. The frontend quality and backend structure were both strong.',
    rating: 5
  },
  {
    id: 'fallback-3',
    client_name: 'Ricky',
    company_name: 'PepeLeads',
    role: 'Technical Manager',
    review: 'Strong frontend and backend expertise. Our lead automation workflow became faster, cleaner, and easier to manage.',
    rating: 5
  }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    // Bypass fetch to prevent connection refused errors on static GitHub Pages
    setTestimonials(FALLBACK_TESTIMONIALS);
    setLoading(false);
  };

  if (loading || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[active];

  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What our clients <span className="text-gradient">say about us</span></h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className={styles.carousel}>
            <div className={styles.testimonial}>
              <div className={styles.stars}>
                {Array.from({ length: currentTestimonial.rating }, (_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{currentTestimonial.review}&rdquo;
              </blockquote>
              <div className={styles.author}>
                {currentTestimonial.company_logo_url && (
                  <div className={styles.companyLogo}>
                    <img 
                      src={currentTestimonial.company_logo_url} 
                      alt={currentTestimonial.company_name}
                    />
                  </div>
                )}
                <div>
                  <div className={styles.authorName}>{currentTestimonial.client_name}</div>
                  <div className={styles.authorRole}>{currentTestimonial.role}</div>
                  <div className={styles.authorCompany}>{currentTestimonial.company_name}</div>
                </div>
              </div>
            </div>

            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
