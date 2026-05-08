'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './admin.module.css';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const blankForms = {
  portfolio: {
    title: '', slug: '', description: '', category: 'Web & SaaS', sub_category: '', tech_stack: '',
    github_link: '', live_link: '', image_url: '', case_study: '', featured: false, is_active: true
  },
  testimonial: {
    client_name: '', company_name: '', role: '', review: '', rating: 5, company_logo_url: '', featured: true, is_active: true
  },
  company: { name: '', logo_url: '', website: '', description: '', is_active: true },
  service: {
    title: '', slug: '', category: 'Technical', icon: '', short_description: '', description: '',
    pricing_starting_at: 'Contact Us', image: '', is_active: true
  }
};

const tabs = ['inquiries', 'portfolio', 'testimonials', 'companies', 'services', 'payments'];

const toSlug = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export default function AdminPanel() {
  const [token, setToken] = useState('');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [activeTab, setActiveTab] = useState('inquiries');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [stats, setStats] = useState(null);
  const [data, setData] = useState({ inquiries: [], portfolio: [], testimonials: [], companies: [], services: [], payments: [] });
  const [modal, setModal] = useState({ type: '', item: null });

  useEffect(() => {
    const saved = localStorage.getItem('admin_token');
    if (saved) setToken(saved);
  }, []);

  useEffect(() => {
    if (!token) return;
    loadTab(activeTab);
    if (activeTab === 'inquiries') fetchStats();
  }, [token, activeTab, filter]);

  const currentRows = data[activeTab] || [];

  const formState = useMemo(() => {
    if (!modal.type) return null;
    const base = blankForms[modal.type];
    if (!modal.item) return base;
    if (modal.type === 'portfolio') {
      return { ...base, ...modal.item, tech_stack: Array.isArray(modal.item.tech_stack) ? modal.item.tech_stack.join(', ') : modal.item.tech_stack || '' };
    }
    return { ...base, ...modal.item };
  }, [modal]);

  const [form, setForm] = useState(null);
  useEffect(() => setForm(formState), [formState]);

  const authHeaders = { Authorization: `Bearer ${token}` };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || 'Login failed');
      setToken(json.token);
      localStorage.setItem('admin_token', json.token);
    } catch (err) {
      setError(err.message || 'Connection failed');
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    const res = await fetch(`${API}/leads/stats`, { headers: authHeaders });
    const json = await res.json();
    if (json.success) setStats(json.data);
  };

  const loadTab = async (tab = activeTab) => {
    const endpoint = tab === 'inquiries' ? 'leads' : tab;
    const params = new URLSearchParams();
    if (tab === 'inquiries' && filter !== 'all') params.set('status', filter);
    if (tab === 'inquiries' && search) params.set('search', search);
    const secure = ['inquiries', 'payments'].includes(tab);
    const res = await fetch(`${API}/${endpoint}${params.toString() ? `?${params}` : ''}`, secure ? { headers: authHeaders } : undefined);
    const json = await res.json();
    if (json.success) setData(prev => ({ ...prev, [tab]: json.data || [] }));
  };

  const saveItem = async (event) => {
    event.preventDefault();
    const type = modal.type;
    const endpoint = type === 'testimonial' ? 'testimonials' : type === 'company' ? 'companies' : type === 'portfolio' ? 'portfolio' : 'services';
    const body = { ...form };

    if (type === 'portfolio') body.tech_stack = String(body.tech_stack || '').split(',').map(item => item.trim()).filter(Boolean);
    if (!body.slug && body.title) body.slug = toSlug(body.title);
    if (type === 'service') {
      body.name = body.title;
      body.pricing = body.pricing_starting_at;
    }
    if (type === 'portfolio') body.image = body.image_url;
    if (type === 'testimonial') {
      body.company = body.company_name;
      body.company_logo = body.company_logo_url;
    }

    const id = modal.item?.id;
    const res = await fetch(`${API}/${endpoint}${id ? `/${id}` : ''}`, {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json', ...authHeaders },
      body: JSON.stringify(body)
    });
    const json = await res.json();
    if (!json.success) {
      setError(json.message || 'Save failed');
      return;
    }
    setModal({ type: '', item: null });
    await loadTab(type === 'testimonial' ? 'testimonials' : type === 'company' ? 'companies' : type);
  };

  const deleteItem = async (tab, id) => {
    if (!confirm('Delete this item?')) return;
    const endpoint = tab === 'inquiries' ? 'leads' : tab;
    await fetch(`${API}/${endpoint}/${id}`, { method: 'DELETE', headers: authHeaders });
    await loadTab(tab);
    if (tab === 'inquiries') fetchStats();
  };

  const updateLead = async (id, status) => {
    await fetch(`${API}/leads/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...authHeaders },
      body: JSON.stringify({ status })
    });
    await loadTab('inquiries');
    fetchStats();
  };

  if (!token) {
    return (
      <div className={styles.loginPage}>
        <div className={styles.loginCard}>
          <div className={styles.loginLogo}>Vorcit Admin</div>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" value={loginData.email} onChange={e => setLoginData({ ...loginData, email: e.target.value })} required />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input className="form-input" type="password" value={loginData.password} onChange={e => setLoginData({ ...loginData, password: e.target.value })} required />
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <button className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.headerLeft}><h1>Admin Dashboard</h1></div>
        <div className={styles.tabs}>
          {tabs.map(tab => <button key={tab} className={`${styles.tabBtn} ${activeTab === tab ? styles.tabActive : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>)}
        </div>
        <button className="btn btn-secondary" onClick={() => { localStorage.removeItem('admin_token'); setToken(''); }}>Logout</button>
      </header>

      {activeTab === 'inquiries' && (
        <>
          {stats && <div className={styles.statsGrid}>{Object.entries(stats).map(([label, value]) => <div className={styles.statCard} key={label}><div className={styles.statVal}>{value}</div><div className={styles.statLbl}>{label}</div></div>)}</div>}
          <div className={styles.toolbar}>
            <div className={styles.filters}>{['all', 'new', 'contacted', 'qualified', 'converted', 'closed'].map(item => <button key={item} className={`${styles.filterBtn} ${filter === item ? styles.active : ''}`} onClick={() => setFilter(item)}>{item}</button>)}</div>
            <div className={styles.searchBox}><input className="form-input" placeholder="Search inquiries" value={search} onChange={e => setSearch(e.target.value)} /><button className="btn btn-primary" onClick={() => loadTab('inquiries')}>Search</button></div>
          </div>
          <Table headers={['Name', 'Email', 'Phone', 'Service', 'Company', 'Status', 'Actions']} empty="No inquiries found">
            {currentRows.map(row => (
              <tr key={row.id}>
                <td className={styles.tdName}>{row.name}</td><td>{row.email}</td><td>{row.phone}</td><td>{row.service_requested}</td><td>{row.company || '-'}</td>
                <td><select className={styles.statusSelect} value={row.status || 'new'} onChange={e => updateLead(row.id, e.target.value)}>{['new', 'contacted', 'qualified', 'converted', 'closed'].map(s => <option key={s}>{s}</option>)}</select></td>
                <td><button className={`${styles.actionBtn} ${styles.deleteBtn}`} onClick={() => deleteItem('inquiries', row.id)}>Del</button></td>
              </tr>
            ))}
          </Table>
        </>
      )}

      {activeTab !== 'inquiries' && (
        <div className={styles.tableWrap}>
          <div className={styles.panelHead}>
            <h2>{activeTab} ({currentRows.length})</h2>
            {activeTab !== 'payments' && <button className="btn btn-primary" onClick={() => setModal({ type: modalTypeForTab(activeTab), item: null })}>Add</button>}
          </div>
          <table className={styles.table}>
            <thead><tr>{renderHeaders(activeTab).map(h => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>{currentRows.map(row => renderRow(activeTab, row, setModal, deleteItem, styles))}</tbody>
          </table>
          {currentRows.length === 0 && <div className={styles.empty}>No records found</div>}
        </div>
      )}

      {modal.type && form && (
        <div className={styles.modalBackdrop}>
          <form className={styles.modalCard} onSubmit={saveItem}>
            <div className={styles.modalHead}>
              <h2>{modal.item ? 'Edit' : 'Add'} {modal.type}</h2>
              <button type="button" onClick={() => setModal({ type: '', item: null })}>x</button>
            </div>
            <FormFields type={modal.type} form={form} setForm={setForm} />
            {error && <div className={styles.error}>{error}</div>}
            <button className="btn btn-primary">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}

function Table({ headers, children, empty }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead><tr>{headers.map(header => <th key={header}>{header}</th>)}</tr></thead>
        <tbody>{children}</tbody>
      </table>
      {!children?.length && <div className={styles.empty}>{empty}</div>}
    </div>
  );
}

function renderHeaders(tab) {
  if (tab === 'payments') return ['Client', 'Amount', 'Method', 'Status', 'Date'];
  if (tab === 'portfolio') return ['Title', 'Category', 'Tech Stack', 'Featured', 'Actions'];
  if (tab === 'testimonials') return ['Client', 'Company', 'Rating', 'Actions'];
  if (tab === 'companies') return ['Name', 'Website', 'Actions'];
  return ['Title', 'Category', 'Price', 'Actions'];
}

function renderRow(tab, row, setModal, deleteItem, css) {
  if (tab === 'payments') {
    return <tr key={row.id}><td>{row.client?.name || row.client_id || '-'}</td><td>Rs. {row.amount}</td><td>{row.payment_method}</td><td>{row.payment_status}</td><td>{new Date(row.created_at).toLocaleDateString()}</td></tr>;
  }
  if (tab === 'companies') {
    return (
      <tr key={row.id}>
        <td className={css.tdName}>{row.name}</td>
        <td>{row.website || '-'}</td>
        <td><div className={css.actions}><button className={css.actionBtn} onClick={() => setModal({ type: 'company', item: row })}>Edit</button><button className={`${css.actionBtn} ${css.deleteBtn}`} onClick={() => deleteItem(tab, row.id)}>Del</button></div></td>
      </tr>
    );
  }
  if (tab === 'testimonials') {
    return (
      <tr key={row.id}>
        <td className={css.tdName}>{row.client_name}</td>
        <td>{row.company_name}</td>
        <td>{row.rating}</td>
        <td><div className={css.actions}><button className={css.actionBtn} onClick={() => setModal({ type: 'testimonial', item: row })}>Edit</button><button className={`${css.actionBtn} ${css.deleteBtn}`} onClick={() => deleteItem(tab, row.id)}>Del</button></div></td>
      </tr>
    );
  }
  const type = modalTypeForTab(tab);
  return (
    <tr key={row.id}>
      <td className={css.tdName}>{row.title || row.client_name || row.name}</td>
      <td>{row.category || row.company_name || row.website || '-'}</td>
      <td>{Array.isArray(row.tech_stack) ? row.tech_stack.slice(0, 3).join(', ') : row.rating || row.pricing_starting_at || '-'}</td>
      {tab === 'portfolio' && <td>{row.featured ? 'Yes' : 'No'}</td>}
      <td><div className={css.actions}><button className={css.actionBtn} onClick={() => setModal({ type, item: row })}>Edit</button><button className={`${css.actionBtn} ${css.deleteBtn}`} onClick={() => deleteItem(tab, row.id)}>Del</button></div></td>
    </tr>
  );
}

function modalTypeForTab(tab) {
  return ({ portfolio: 'portfolio', testimonials: 'testimonial', companies: 'company', services: 'service' })[tab] || tab;
}

function FormFields({ type, form, setForm }) {
  const field = (name, label, textarea = false) => (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {textarea ? <textarea className="form-input" rows="4" value={form[name] || ''} onChange={e => setForm({ ...form, [name]: e.target.value })} /> : <input className="form-input" value={form[name] || ''} onChange={e => setForm({ ...form, [name]: e.target.value })} />}
    </div>
  );

  return (
    <div className={styles.formGrid}>
      {(type === 'portfolio' || type === 'service') && field('title', 'Title')}
      {type === 'portfolio' && field('slug', 'Slug')}
      {type === 'service' && field('slug', 'Slug')}
      {type === 'portfolio' && <Select name="category" label="Category" form={form} setForm={setForm} options={['Restaurant & Cafe', 'Web & SaaS', 'AI & Automation', 'Academic & Research']} />}
      {type === 'service' && <Select name="category" label="Category" form={form} setForm={setForm} options={['Technical', 'Academic']} />}
      {type === 'portfolio' && field('tech_stack', 'Tech Stack (comma separated)')}
      {type === 'portfolio' && field('github_link', 'GitHub Link')}
      {type === 'portfolio' && field('live_link', 'Live Link')}
      {(type === 'portfolio' || type === 'service') && field(type === 'portfolio' ? 'image_url' : 'image', 'Image URL')}
      {type === 'testimonial' && field('client_name', 'Client Name')}
      {type === 'testimonial' && field('company_name', 'Company')}
      {type === 'testimonial' && field('role', 'Role')}
      {type === 'testimonial' && field('company_logo_url', 'Company Logo URL')}
      {type === 'testimonial' && field('rating', 'Rating')}
      {type === 'company' && field('name', 'Company Name')}
      {type === 'company' && field('logo_url', 'Logo URL')}
      {type === 'company' && field('website', 'Website')}
      {(type === 'portfolio' || type === 'service' || type === 'company') && field('description', 'Description', true)}
      {type === 'service' && field('short_description', 'Short Description', true)}
      {type === 'service' && field('pricing_starting_at', 'Pricing')}
      {type === 'portfolio' && field('case_study', 'Case Study', true)}
      {(type === 'portfolio' || type === 'testimonial') && <label className={styles.checkLabel}><input type="checkbox" checked={!!form.featured} onChange={e => setForm({ ...form, featured: e.target.checked })} /> Featured</label>}
    </div>
  );
}

function Select({ name, label, form, setForm, options }) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <select className="form-input" value={form[name]} onChange={e => setForm({ ...form, [name]: e.target.value })}>
        {options.map(option => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
}
