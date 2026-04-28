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
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOrb}></div>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Get In Touch</span>
            <h1 className={styles.heroTitle}>
              Let&apos;s build something <span className="text-gradient">amazing together</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Have a project in mind? Fill out the form below or reach out directly. 
              We&apos;ll respond within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Form */}
            <ScrollReveal>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Send us a message</h2>
                <form onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Full Name *</label>
                      <input 
                        id="contact-name"
                        type="text" 
                        name="name" 
                        className="form-input" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email Address *</label>
                      <input 
                        id="contact-email"
                        type="email" 
                        name="email" 
                        className="form-input" 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                      <input 
                        id="contact-phone"
                        type="tel" 
                        name="phone" 
                        className="form-input" 
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-service">Service Required *</label>
                      <select 
                        id="contact-service"
                        name="service" 
                        className="form-input"
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
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Your Message</label>
                    <textarea 
                      id="contact-message"
                      name="message" 
                      className="form-input" 
                      placeholder="Tell us about your project, goals, and timeline..."
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
                    className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className={styles.spinner}></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <div className={styles.infoSide}>
              <ScrollReveal delay={100}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>📞</div>
                  <h3>Call Us</h3>
                  <a href="tel:+919650754598" className={styles.infoLink}>+91 9650754598</a>
                  <p>Mon-Sat, 10AM - 7PM IST</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>📧</div>
                  <h3>Email Us</h3>
                  <a href="mailto:samarthshekhar12@gmail.com" className={styles.infoLink}>samarthshekhar12@gmail.com</a>
                  <p>We reply within 24 hours</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>💬</div>
                  <h3>WhatsApp</h3>
                  <a 
                    href="https://wa.me/919650754598?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20services" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.infoLink}
                  >
                    Chat with us
                  </a>
                  <p>Instant response available</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>🕐</div>
                  <h3>Response Time</h3>
                  <p className={styles.highlight}>Under 2 hours</p>
                  <p>Average response during business hours</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
