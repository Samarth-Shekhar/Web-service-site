'use client';

import ScrollReveal from './ScrollReveal';
import styles from './PremiumShowcases.module.css';

const automations = [
  ['Instagram Comment Scraper', 'Audience extraction, filtering, enrichment, and export workflows.'],
  ['WhatsApp Automation System', 'Lead replies, status updates, reminders, and human handoff flows.'],
  ['AI Lead Generation Bot', 'Prospect discovery, scoring, CRM-ready summaries, and outreach drafts.'],
  ['Resume Screening AI', 'Candidate parsing, role-fit scoring, ranking, and review dashboards.']
];

const researchItems = [
  ['IEEE Formatting', 'Template-safe formatting, citations, figures, and camera-ready exports.'],
  ['Literature Reviews', 'Source mapping, comparison matrices, research gaps, and synthesis dashboards.'],
  ['Publication Workflow', 'Milestones for drafts, supervisor review, revisions, submission, and proofing.'],
  ['PPT & Proposals', 'Business proposals, academic decks, and structured report generation.']
];

const technologies = ['Next.js', 'React', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'MongoDB', 'Firebase', 'OpenAI', 'Python', 'FastAPI', 'Stripe'];

export default function PremiumShowcases() {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.splitHeader}>
              <div>
                <span className="section-label">AI Automation Showcase</span>
                <h2 className="section-title">Operational AI systems that remove repetitive work</h2>
              </div>
              <p className="section-subtitle">
                Practical automation for sales, support, research, and internal operations with dashboards your team can actually run.
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.bentoGrid}>
            {automations.map(([title, copy], index) => (
              <ScrollReveal key={title} delay={index * 80}>
                <article className={styles.bentoCard}>
                  <span className={styles.cardIndex}>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <div className={styles.signalBar}><span style={{ width: `${68 + index * 7}%` }} /></div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.researchSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.splitHeader}>
              <div>
                <span className="section-label">Research & Publications</span>
                <h2 className="section-title">Academic delivery with publication discipline</h2>
              </div>
              <p className="section-subtitle">
                Structured research support, documentation systems, proposal decks, and PDF-first workflows for serious academic output.
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.timelineGrid}>
            {researchItems.map(([title, copy], index) => (
              <ScrollReveal key={title} delay={index * 90}>
                <article className={styles.pdfCard}>
                  <div className={styles.pdfTop}>
                    <span>PDF</span>
                    <small>Stage {index + 1}</small>
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <div className={styles.paperLines}><i /><i /><i /></div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.techSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.techPanel}>
              <div>
                <span className="section-label">Technologies Used</span>
                <h2 className="section-title">Modern stacks for websites, SaaS, AI, and data products</h2>
              </div>
              <div className={styles.techCloud}>
                {technologies.map(tech => <span key={tech}>{tech}</span>)}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
