const portfolioProjects = [
  {
    id: 'fallback-cafe-management',
    title: 'Cafe Management Website',
    slug: 'cafe-management-website',
    description: 'Cafe operations website with digital menu, table booking, inventory visibility, and order flow.',
    category: 'Restaurant & Cafe',
    tech_stack: ['Next.js', 'Supabase', 'Stripe'],
    github_link: 'https://github.com/Samarth-Shekhar',
    live_link: '#',
    image_url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80',
    case_study: 'Built for cafes that need bookings, dynamic menus, order management, and a premium customer journey.',
    featured: true
  },
  {
    id: 'fallback-ai-meal-planner',
    title: 'AI Meal Planner',
    slug: 'ai-meal-planner',
    description: 'AI meal planning SaaS with personalized recipes, grocery lists, and nutrition dashboards.',
    category: 'Web & SaaS',
    tech_stack: ['React', 'Node.js', 'OpenAI'],
    github_link: 'https://github.com/Samarth-Shekhar',
    live_link: '#',
    image_url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80',
    case_study: 'Designed as a subscription-ready product for weekly meal plans, preferences, and repeatable user workflows.',
    featured: true
  },
  {
    id: 'fallback-shipment-delivery',
    title: 'Shipment Delivery Application',
    slug: 'shipment-delivery-application',
    description: 'Delivery operations platform with shipment status, branch tracking, and route visibility.',
    category: 'Web & SaaS',
    tech_stack: ['MERN', 'Maps API', 'Socket.io'],
    github_link: 'https://github.com/Samarth-Shekhar',
    live_link: '#',
    image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    case_study: 'A logistics dashboard for shipment creation, real-time status updates, and proof-of-delivery workflows.',
    featured: true
  },
  {
    id: 'fallback-real-estate-ai',
    title: 'Real Estate Agentic AI Assistant',
    slug: 'real-estate-agentic-ai-assistant',
    description: 'AI assistant for property recommendations, lead qualification, follow-ups, and broker workflows.',
    category: 'AI & Automation',
    tech_stack: ['Python', 'LangChain', 'FastAPI'],
    github_link: 'https://github.com/Samarth-Shekhar',
    live_link: '#',
    image_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
    case_study: 'Reduces repetitive broker work while improving lead response time and buyer-property matching quality.',
    featured: true
  },
  {
    id: 'fallback-instagram-scraper',
    title: 'Instagram Comment Scraper Tool',
    slug: 'instagram-comment-scraper-tool',
    description: 'Automation tool for public comment extraction, filtering, enrichment, and export workflows.',
    category: 'AI & Automation',
    tech_stack: ['Python', 'Selenium', 'NLP'],
    github_link: 'https://github.com/Samarth-Shekhar',
    live_link: '#',
    image_url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1000&q=80',
    case_study: 'Created for social research and campaign teams that need structured audience intelligence.',
    featured: false
  },
  {
    id: 'fallback-publication-workflow',
    title: 'Research Publication Workflow',
    slug: 'research-publication-workflow',
    description: 'Academic workflow system for IEEE formatting, literature tracking, drafts, and submission timelines.',
    category: 'Academic & Research',
    tech_stack: ['React', 'LaTeX', 'PDF.js'],
    github_link: 'https://github.com/Samarth-Shekhar',
    live_link: '#',
    image_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=80',
    case_study: 'A research operations layer for citations, publication stages, reports, and presentation assets.',
    featured: true
  }
];

const companies = [
  'Marksman Technologies',
  'Airports Authority of India',
  'Essentia.dev',
  'Celebal Technologies',
  'ZenSolarCiti',
  'Chaupal Foundation',
  'PepeLeads'
].map((name, index) => ({
  id: `fallback-company-${index + 1}`,
  name,
  logo_url: '',
  website: '#',
  description: 'Trusted client and collaboration partner.',
  sort_order: index + 1
}));

const testimonials = [
  {
    id: 'fallback-testimonial-1',
    client_name: 'Aarav Mehta',
    company_name: 'Marksman Technologies',
    company: 'Marksman Technologies',
    role: 'Product Lead',
    review: 'Excellent automation solutions and timely delivery. The team understood the workflow and shipped a polished system.',
    rating: 5,
    company_logo_url: '',
    company_logo: '',
    featured: true
  },
  {
    id: 'fallback-testimonial-2',
    client_name: 'Priya Sharma',
    company_name: 'Essentia.dev',
    company: 'Essentia.dev',
    role: 'Engineering Manager',
    review: 'Professional dashboard development with scalable architecture. Frontend quality and backend structure were both strong.',
    rating: 5,
    company_logo_url: '',
    company_logo: '',
    featured: true
  },
  {
    id: 'fallback-testimonial-3',
    client_name: 'Rohan Kapoor',
    company_name: 'PepeLeads',
    company: 'PepeLeads',
    role: 'Founder',
    review: 'Strong frontend and backend expertise. Our lead automation workflow became faster, cleaner, and easier to manage.',
    rating: 5,
    company_logo_url: '',
    company_logo: '',
    featured: true
  }
];

const isMissingSupabaseTable = (err) => (
  err?.code === 'PGRST205' ||
  err?.message?.includes('Could not find the table') ||
  err?.message?.includes('schema cache')
);

module.exports = {
  portfolioProjects,
  companies,
  testimonials,
  isMissingSupabaseTable
};
