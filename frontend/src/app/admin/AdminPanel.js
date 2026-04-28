'use client';

import { useState, useEffect } from 'react';
import styles from './admin.module.css';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function AdminPanel() {
  const [token, setToken] = useState('');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  
  const [activeTab, setActiveTab] = useState('inquiries'); // inquiries, services, payments
  
  const [leads, setLeads] = useState([]);
  const [services, setServices] = useState([]);
  const [payments, setPayments] = useState([]);
  
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('admin_token');
    if (saved) { setToken(saved); }
  }, []);

  useEffect(() => {
    if (token) { 
      if (activeTab === 'inquiries') {
        fetchLeads(); 
        fetchStats(); 
      } else if (activeTab === 'services') {
        fetchServices();
      } else if (activeTab === 'payments') {
        fetchPayments();
      }
    }
  }, [token, activeTab, filter]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });
      const data = await res.json();
      if (data.success) {
        setToken(data.token);
        localStorage.setItem('admin_token', data.token);
      } else {
        setError(data.message);
      }
    } catch { setError('Connection failed'); }
    setLoading(false);
  };

  const fetchLeads = async () => {
    try {
      const params = new URLSearchParams();
      if (filter !== 'all') params.set('status', filter);
      if (search) params.set('search', search);
      const res = await fetch(`${API}/leads?${params}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) setLeads(data.data);
    } catch {}
  };

  const fetchStats = async () => {
    try {
      const res = await fetch(`${API}/leads/stats`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) setStats(data.data);
    } catch {}
  };

  const fetchServices = async () => {
    try {
      const res = await fetch(`${API}/services`);
      const data = await res.json();
      if (data.success) setServices(data.data);
    } catch {}
  };

  const fetchPayments = async () => {
    try {
      const res = await fetch(`${API}/payments`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) setPayments(data.data);
    } catch {}
  };

  const updateLead = async (id, updates) => {
    try {
      await fetch(`${API}/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(updates)
      });
      fetchLeads();
      fetchStats();
    } catch {}
  };

  const deleteLead = async (id) => {
    if (!confirm('Delete this inquiry?')) return;
    try {
      await fetch(`${API}/leads/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchLeads();
      fetchStats();
    } catch {}
  };

  const deleteService = async (id) => {
    if (!confirm('Delete this service?')) return;
    try {
      await fetch(`${API}/services/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchServices();
    } catch {}
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('admin_token');
  };

  if (!token) {
    return (
      <div className={styles.loginPage}>
        <div className={styles.loginCard}>
          <div className={styles.loginLogo}>
            <svg viewBox="0 0 32 32" fill="none" width="40" height="40">
              <rect width="32" height="32" rx="8" fill="url(#adminGrad)"/>
              <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="white" fillOpacity="0.9"/>
              <defs><linearGradient id="adminGrad" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#00F5D4"/><stop offset="1" stopColor="#7B61FF"/></linearGradient></defs>
            </svg>
            <span>NexusDigital Admin</span>
          </div>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" value={loginData.email} onChange={e => setLoginData({...loginData, email: e.target.value})} required />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" className="form-input" value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})} required />
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <button type="submit" className="btn btn-primary" style={{width:'100%'}} disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
            <rect width="32" height="32" rx="8" fill="url(#dashGrad)"/>
            <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="white" fillOpacity="0.9"/>
            <defs><linearGradient id="dashGrad" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#00F5D4"/><stop offset="1" stopColor="#7B61FF"/></linearGradient></defs>
          </svg>
          <h1>Admin Dashboard</h1>
        </div>
        <div className={styles.tabs}>
          <button className={`${styles.tabBtn} ${activeTab === 'inquiries' ? styles.tabActive : ''}`} onClick={() => setActiveTab('inquiries')}>Inquiries</button>
          <button className={`${styles.tabBtn} ${activeTab === 'services' ? styles.tabActive : ''}`} onClick={() => setActiveTab('services')}>Services</button>
          <button className={`${styles.tabBtn} ${activeTab === 'payments' ? styles.tabActive : ''}`} onClick={() => setActiveTab('payments')}>Payments</button>
        </div>
        <button onClick={logout} className="btn btn-secondary" style={{padding: '8px 16px', fontSize: '0.9rem'}}>Logout</button>
      </header>

      {/* INQUIRIES TAB */}
      {activeTab === 'inquiries' && (
        <>
          {stats && (
            <div className={styles.statsGrid}>
              {[
                { label: 'Total Inquiries', value: stats.total, color: '#00F5D4' },
                { label: 'New Inquiries', value: stats.newLeads, color: '#7B61FF' },
                { label: 'Today', value: stats.todayLeads, color: '#10b981' },
                { label: 'This Month', value: stats.monthlyLeads, color: '#f59e0b' },
                { label: 'Contacted', value: stats.contacted, color: '#06b6d4' },
                { label: 'Converted', value: stats.converted, color: '#ec4899' },
              ].map(s => (
                <div key={s.label} className={styles.statCard}>
                  <div className={styles.statVal} style={{color: s.color}}>{s.value}</div>
                  <div className={styles.statLbl}>{s.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className={styles.toolbar}>
            <div className={styles.filters}>
              {['all','new','contacted','qualified','converted','closed'].map(f => (
                <button key={f} className={`${styles.filterBtn} ${filter===f ? styles.active : ''}`} onClick={() => setFilter(f)}>
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
            <div className={styles.searchBox}>
              <input type="text" className="form-input" placeholder="Search inquiries..." value={search} onChange={e => setSearch(e.target.value)} onKeyDown={e => e.key === 'Enter' && fetchLeads()} />
              <button onClick={fetchLeads} className="btn btn-primary" style={{padding:'10px 20px'}}>Search</button>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th><th>Email</th><th>Phone</th><th>Service</th><th>Status</th><th>Date</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead._id}>
                    <td className={styles.tdName}>{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.phone}</td>
                    <td><span className={styles.serviceTag}>{lead.serviceRequested}</span></td>
                    <td>
                      <select value={lead.status} onChange={e => updateLead(lead._id, {status: e.target.value})} className={styles.statusSelect}>
                        {['new','contacted','qualified','converted','closed'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td className={styles.tdDate}>{new Date(lead.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className={styles.actions}>
                        <a href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className={styles.actionBtn} title="WhatsApp">💬</a>
                        <a href={`mailto:${lead.email}`} className={styles.actionBtn} title="Email">📧</a>
                        <button onClick={() => deleteLead(lead._id)} className={`${styles.actionBtn} ${styles.deleteBtn}`} title="Delete">🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {leads.length === 0 && <div className={styles.empty}>No inquiries found</div>}
          </div>
        </>
      )}

      {/* SERVICES TAB */}
      {activeTab === 'services' && (
        <div className={styles.tableWrap}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid var(--border-light)' }}>
            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Manage Services</h2>
            <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }} onClick={() => alert('Editing features are managed in the DB seed or custom editor.')}>+ Add New Service</button>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Icon</th><th>Title</th><th>Category</th><th>Price</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map(svc => (
                <tr key={svc._id}>
                  <td style={{ fontSize: '1.5rem' }}>{svc.icon}</td>
                  <td className={styles.tdName}>{svc.title}</td>
                  <td><span className={styles.serviceTag}>{svc.category}</span></td>
                  <td>{svc.pricing?.startingAt || 'Contact Us'}</td>
                  <td>
                    <div className={styles.actions}>
                      <button className={styles.actionBtn} onClick={() => alert('Edit modal here')} title="Edit">✏️</button>
                      <button onClick={() => deleteService(svc._id)} className={`${styles.actionBtn} ${styles.deleteBtn}`} title="Delete">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {services.length === 0 && <div className={styles.empty}>No services found</div>}
        </div>
      )}

      {/* PAYMENTS TAB */}
      {activeTab === 'payments' && (
        <div className={styles.tableWrap}>
          <div style={{ padding: '20px', borderBottom: '1px solid var(--border-light)' }}>
            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Payment History</h2>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Client Name</th><th>Client Email</th><th>Amount</th><th>Method</th><th>Status</th><th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(payment => (
                <tr key={payment._id}>
                  <td className={styles.tdName}>{payment.clientId?.name || 'Unknown'}</td>
                  <td>{payment.clientId?.email || 'N/A'}</td>
                  <td style={{ fontWeight: 'bold' }}>₹{payment.amount}</td>
                  <td><span style={{ textTransform: 'capitalize' }}>{payment.paymentMethod}</span></td>
                  <td>
                    <span className={styles.serviceTag} style={{ background: payment.paymentStatus === 'success' ? '#10b98122' : '#f59e0b22', color: payment.paymentStatus === 'success' ? '#10b981' : '#f59e0b' }}>
                      {payment.paymentStatus}
                    </span>
                  </td>
                  <td className={styles.tdDate}>{new Date(payment.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {payments.length === 0 && <div className={styles.empty}>No payments found</div>}
        </div>
      )}

    </div>
  );
}
