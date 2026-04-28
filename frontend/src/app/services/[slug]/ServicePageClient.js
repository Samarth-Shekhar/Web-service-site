'use client';

import { useState, useEffect } from 'react';
import ServiceDetail from './ServiceDetail';

// Use environment variable for API URL so it works in production
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function ServicePageClient({ slug }) {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`${API_URL}/services/${slug}`);
        const data = await res.json();
        if (data.success) {
          setService(data.data);
        }
      } catch (err) {
        console.error('Error fetching service:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '60vh' }}>
        <div style={{ display: 'inline-block', width: '40px', height: '40px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent-primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ marginTop: '20px', color: 'var(--text-muted)' }}>Loading service details...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Service Not Found</h2>
        <p style={{ color: 'var(--text-muted)' }}>The service you are looking for does not exist or has been removed.</p>
      </div>
    );
  }

  return <ServiceDetail service={service} slug={slug} />;
}
