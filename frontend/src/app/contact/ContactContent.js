'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './contact.module.css';

const serviceOptions = [
  'Web Development',
  'App Development',
  'SaaS Development',
  'Admin Dashboards',
  'AI Chatbots',
  'Automation Systems',
  'Custom AI Tools',
  'LLM Integration',
  'UI/UX Design',
  'Branding',
  'Landing Pages',
  'Product Design',
  'SEO Optimization',
  'Performance Marketing',
  'Social Media Management',
  'Content Strategy',
  'API Integration',
  'Firebase Setup',
  'Payment Gateway Integration',
  'Website Maintenance',
  'Other'
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Thank you! We\'ll get back to you shortly.' });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Unable to connect to server. Please try again or contact us directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      {/* Contact Section - Split Layout like Aeline */}
      <section className={styles.contactSection}>
        {/* Left Side - Info */}
        <div className={styles.infoSide}>
          <ScrollReveal>
            <h1 className={styles.mainTitle}>Reach out today</h1>
            <p className={styles.mainSubtitle}>
              Learn about our journey, mission, and the team driving innovation.
            </p>
          </ScrollReveal>

          <div className={styles.contactDetails}>
            <ScrollReveal delay={100}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Email:</span>
                <a href="mailto:samarthshekhar12@gmail.com" className={styles.detailValue}>
                  samarthshekhar12@gmail.com
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Phone:</span>
                <a href="tel:+919650754598" className={styles.detailValue}>
                  +91 9650754598
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>WhatsApp:</span>
                <a 
                  href="https://wa.me/919650754598?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.detailValue}
                >
                  Chat with us instantly
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Response Time:</span>
                <span className={styles.detailValue}>Under 2 hours</span>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500}>
            <div className={styles.socialRow}>
              <span className={styles.detailLabel}>Follow Us:</span>
              <div className={styles.socialIcons}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X (Twitter)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side - Form with Sky Background */}
        <div className={styles.formSide}>
          <div className={styles.formBg}></div>
          <div className={styles.formOverlay}></div>
          <div className={styles.formWrapper}>
            <ScrollReveal>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-name">Full name</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    name="name" 
                    className={styles.formInput}
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-email">Email address</label>
                  <input 
                    id="contact-email"
                    type="email" 
                    name="email" 
                    className={styles.formInput}
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-phone">Phone number</label>
                  <input 
                    id="contact-phone"
                    type="tel" 
                    name="phone" 
                    className={styles.formInput}
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-service">Service required</label>
                  <select 
                    id="contact-service"
                    name="service" 
                    className={styles.formInput}
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-message">Messages</label>
                  <textarea 
                    id="contact-message"
                    name="message" 
                    className={styles.formTextarea}
                    placeholder="Your messages here..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                    {status.type === 'success' ? '✅' : '❌'} {status.message}
                  </div>
                )}

                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className={styles.spinner}></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      SUBMIT
                      <span className={styles.submitIconWrap}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </>
                  )}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
