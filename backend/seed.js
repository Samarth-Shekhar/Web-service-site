const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const Service = require('./models/Service');
require('dotenv').config();

const services = [
  // Technical Services
  {
    title: 'Website Design',
    slug: 'website-design',
    category: 'Technical',
    icon: '🎨',
    shortDescription: 'Modern, responsive, and high-converting website designs.',
    description: 'We craft stunning website designs tailored to your brand identity, ensuring a seamless user experience across all devices.',
    features: [{ title: 'Responsive', description: 'Looks great on mobile and desktop' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 1
  },
  {
    title: 'WordPress Development',
    slug: 'wordpress-development',
    category: 'Technical',
    icon: '📝',
    shortDescription: 'Custom WordPress themes and plugin development.',
    description: 'End-to-end WordPress solutions including custom theme development, plugin integration, and performance tuning.',
    features: [{ title: 'Custom Themes', description: 'Built from scratch for your needs' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 2
  },
  {
    title: 'Website Auditing',
    slug: 'website-auditing',
    category: 'Technical',
    icon: '🔍',
    shortDescription: 'Comprehensive technical and SEO website audits.',
    description: 'We analyze your website for performance bottlenecks, SEO issues, and security vulnerabilities to provide actionable insights.',
    features: [{ title: 'Deep Analysis', description: 'Covering SEO, speed, and security' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 3
  },
  {
    title: 'Agentic AI Creation',
    slug: 'agentic-ai-creation',
    category: 'Technical',
    icon: '🤖',
    shortDescription: 'Custom AI agents and automation bots for your business.',
    description: 'Deploy intelligent AI agents like Real Estate AI Bots and customer support automation to scale your operations effortlessly.',
    features: [{ title: 'Autonomous', description: 'Self-prompting AI workflows' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 4
  },
  {
    title: 'Web Scraper Tools',
    slug: 'web-scraper-tools',
    category: 'Technical',
    icon: '🕷️',
    shortDescription: 'Automated data extraction and web scraping solutions.',
    description: 'Extract valuable data from any website reliably with our custom-built web scrapers and automation tools.',
    features: [{ title: 'Data Pipeline', description: 'Clean, structured data delivery' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 5
  },
  {
    title: 'Website Restoration & Recovery',
    slug: 'website-restoration',
    category: 'Technical',
    icon: '🛡️',
    shortDescription: 'Recover hacked, broken, or lost websites quickly.',
    description: 'Expert recovery services to restore your website from backups, clean malware, and secure it against future attacks.',
    features: [{ title: 'Fast Recovery', description: 'Minimize downtime' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 6
  },
  {
    title: 'Custom SaaS Development',
    slug: 'custom-saas',
    category: 'Technical',
    icon: '☁️',
    shortDescription: 'Scalable Software-as-a-Service platforms.',
    description: 'From idea to launch, we build robust, multi-tenant SaaS applications designed to handle scale and generate recurring revenue.',
    features: [{ title: 'Scalable Architecture', description: 'Built for high traffic' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 7
  },
  {
    title: 'API Integration Services',
    slug: 'api-integration',
    category: 'Technical',
    icon: '🔌',
    shortDescription: 'Connect your tools with custom API integrations.',
    description: 'Seamlessly connect third-party services, payment gateways, and CRMs to your existing software stack.',
    features: [{ title: 'Seamless Flow', description: 'Data synchronization across apps' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 8
  },
  {
    title: 'Admin Dashboard Development',
    slug: 'admin-dashboard',
    category: 'Technical',
    icon: '📊',
    shortDescription: 'Custom data visualization and admin panels.',
    description: 'Manage your business effectively with custom-built admin dashboards featuring real-time data and analytics.',
    features: [{ title: 'Real-time Metrics', description: 'Live data tracking' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 9
  },
  {
    title: 'Performance Optimization',
    slug: 'performance-optimization',
    category: 'Technical',
    icon: '⚡',
    shortDescription: 'Speed up your web applications for better UX.',
    description: 'We optimize your codebase, database queries, and server configuration to deliver blazing fast load times.',
    features: [{ title: 'Core Web Vitals', description: 'Optimize for Google rankings' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 10
  },

  // Academic & Research Services
  {
    title: 'Research Papers',
    slug: 'research-papers',
    category: 'Academic',
    icon: '📚',
    shortDescription: 'High-quality, peer-reviewed standard research writing.',
    description: 'Professional assistance in writing, formatting, and structuring academic research papers across various disciplines.',
    features: [{ title: 'Original Content', description: 'Plagiarism-free research' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 11
  },
  {
    title: 'Case Studies',
    slug: 'case-studies',
    category: 'Academic',
    icon: '📋',
    shortDescription: 'In-depth business and academic case studies.',
    description: 'Comprehensive analysis and well-structured case studies that clearly present the problem, methodology, and solutions.',
    features: [{ title: 'Deep Analysis', description: 'Thorough research and findings' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 12
  },
  {
    title: 'Dissertations',
    slug: 'dissertations',
    category: 'Academic',
    icon: '🎓',
    shortDescription: 'Complete dissertation writing and editing services.',
    description: 'Expert guidance and writing support for your thesis or dissertation, from proposal to final defense.',
    features: [{ title: 'Academic Standard', description: 'Strict adherence to guidelines' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 13
  },
  {
    title: 'Blogs & Articles',
    slug: 'blogs-articles',
    category: 'Academic',
    icon: '✍️',
    shortDescription: 'Engaging, well-researched technical and academic blogs.',
    description: 'High-quality articles and blog posts written by subject matter experts to engage your readers and build authority.',
    features: [{ title: 'SEO Optimized', description: 'Written for both readers and search engines' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 14
  },
  {
    title: 'PowerPoint Presentations (PPTs)',
    slug: 'powerpoint-presentations',
    category: 'Academic',
    icon: '📊',
    shortDescription: 'Professional pitch decks and academic presentations.',
    description: 'Visually compelling and well-structured PowerPoint presentations for business meetings, academic defenses, or conferences.',
    features: [{ title: 'Visual Storytelling', description: 'Engaging slide designs' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 15
  },
  {
    title: 'Business Proposals',
    slug: 'business-proposals',
    category: 'Academic',
    icon: '💼',
    shortDescription: 'Winning business proposals and grant applications.',
    description: 'Persuasive business proposals designed to secure funding, win clients, or establish valuable partnerships.',
    features: [{ title: 'Persuasive Writing', description: 'Clear value propositions' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 16
  },
  {
    title: 'Academic Reports',
    slug: 'academic-reports',
    category: 'Academic',
    icon: '📑',
    shortDescription: 'Structured and detailed academic reporting.',
    description: 'Comprehensive academic reports that clearly synthesize data, methodologies, and actionable conclusions.',
    features: [{ title: 'Data Driven', description: 'Accurate data representation' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 17
  },
  {
    title: 'Literature Reviews',
    slug: 'literature-reviews',
    category: 'Academic',
    icon: '📖',
    shortDescription: 'Thorough reviews of existing academic literature.',
    description: 'Extensive synthesis of published research to establish the context and theoretical framework for your study.',
    features: [{ title: 'Comprehensive', description: 'Covering all relevant sources' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 18
  },
  {
    title: 'Technical Documentation',
    slug: 'technical-documentation',
    category: 'Academic',
    icon: '⚙️',
    shortDescription: 'Clear, concise documentation for software and processes.',
    description: 'User manuals, API documentation, and process guides written clearly to ensure your users and team understand your systems.',
    features: [{ title: 'Developer Friendly', description: 'Clear code examples and guides' }],
    pricing: { startingAt: 'Contact Us', note: '' },
    order: 19
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nexusdigital');
    console.log('✅ Connected to MongoDB');

    await Service.deleteMany({});
    await Admin.deleteMany({});
    console.log('🗑️ Cleared existing data');

    await Service.insertMany(services);
    console.log(`✅ Created ${services.length} services`);

    const admin = await Admin.create({
      email: process.env.ADMIN_EMAIL || 'samarthshekhar12@gmail.com',
      password: process.env.ADMIN_PASSWORD || 'admin123456',
      name: 'Admin',
      role: 'superadmin'
    });
    console.log(`✅ Created admin user: ${admin.email}`);

    console.log('\n🎉 Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
};

seedDatabase();
