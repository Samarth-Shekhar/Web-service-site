'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'CEO, TechNova Solutions',
    content: 'NexusDigital transformed our outdated platform into a modern, high-performance SaaS application. The team\'s expertise in React and Node.js was exceptional. Our user engagement increased by 180%.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, EduLearn Platform',
    content: 'Working with NexusDigital was a game-changer. They built our AI-powered chatbot that handles 70% of customer queries autonomously. Professional, timely, and incredibly skilled.',
    rating: 5
  },
  {
    name: 'Rahul Verma',
    role: 'CTO, CloudSync Inc.',
    content: 'The UI/UX design NexusDigital delivered was beyond our expectations. Clean, modern, and conversion-focused. Our landing page conversion rate jumped from 2% to 8.5%.',
    rating: 5
  },
  {
    name: 'Sneha Patel',
    role: 'Marketing Head, DataPulse',
    content: 'Their SEO and performance marketing strategies doubled our organic traffic in just 4 months. The team is responsive, data-driven, and genuinely cares about results.',
    rating: 5
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

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
                {Array.from({ length: testimonials[active].rating }, (_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{testimonials[active].content}&rdquo;
              </blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonials[active].name.charAt(0)}
                </div>
                <div>
                  <div className={styles.authorName}>{testimonials[active].name}</div>
                  <div className={styles.authorRole}>{testimonials[active].role}</div>
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
