const supabase = require('./config/supabase');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const services = [
  // Technical Services
  {
    title: 'Website Design',
    slug: 'website-design',
    category: 'Technical',
    icon: '🎨',
    short_description: 'Modern, responsive, and high-converting website designs.',
    description: 'We craft stunning website designs tailored to your brand identity, ensuring a seamless user experience across all devices.',
    features: [{ title: 'Responsive', description: 'Looks great on mobile and desktop' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 1
  },
  {
    title: 'WordPress Development',
    slug: 'wordpress-development',
    category: 'Technical',
    icon: '📝',
    short_description: 'Custom WordPress themes and plugin development.',
    description: 'End-to-end WordPress solutions including custom theme development, plugin integration, and performance tuning.',
    features: [{ title: 'Custom Themes', description: 'Built from scratch for your needs' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 2
  },
  {
    title: 'Website Auditing',
    slug: 'website-auditing',
    category: 'Technical',
    icon: '🔍',
    short_description: 'Comprehensive technical and SEO website audits.',
    description: 'We analyze your website for performance bottlenecks, SEO issues, and security vulnerabilities to provide actionable insights.',
    features: [{ title: 'Deep Analysis', description: 'Covering SEO, speed, and security' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 3
  },
  {
    title: 'Agentic AI Creation',
    slug: 'agentic-ai-creation',
    category: 'Technical',
    icon: '🤖',
    short_description: 'Custom AI agents and automation bots for your business.',
    description: 'Deploy intelligent AI agents like Real Estate AI Bots and customer support automation to scale your operations effortlessly.',
    features: [{ title: 'Autonomous', description: 'Self-prompting AI workflows' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 4
  },
  {
    title: 'Web Scraper Tools',
    slug: 'web-scraper-tools',
    category: 'Technical',
    icon: '🕷️',
    short_description: 'Automated data extraction and web scraping solutions.',
    description: 'Extract valuable data from any website reliably with our custom-built web scrapers and automation tools.',
    features: [{ title: 'Data Pipeline', description: 'Clean, structured data delivery' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 5
  },
  {
    title: 'Website Restoration & Recovery',
    slug: 'website-restoration',
    category: 'Technical',
    icon: '🛡️',
    short_description: 'Recover hacked, broken, or lost websites quickly.',
    description: 'Expert recovery services to restore your website from backups, clean malware, and secure it against future attacks.',
    features: [{ title: 'Fast Recovery', description: 'Minimize downtime' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 6
  },
  {
    title: 'Custom SaaS Development',
    slug: 'custom-saas',
    category: 'Technical',
    icon: '☁️',
    short_description: 'Scalable Software-as-a-Service platforms.',
    description: 'From idea to launch, we build robust, multi-tenant SaaS applications designed to handle scale and generate recurring revenue.',
    features: [{ title: 'Scalable Architecture', description: 'Built for high traffic' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 7
  },
  {
    title: 'API Integration Services',
    slug: 'api-integration',
    category: 'Technical',
    icon: '🔌',
    short_description: 'Connect your tools with custom API integrations.',
    description: 'Seamlessly connect third-party services, payment gateways, and CRMs to your existing software stack.',
    features: [{ title: 'Seamless Flow', description: 'Data synchronization across apps' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 8
  },
  {
    title: 'Admin Dashboard Development',
    slug: 'admin-dashboard',
    category: 'Technical',
    icon: '📊',
    short_description: 'Custom data visualization and admin panels.',
    description: 'Manage your business effectively with custom-built admin dashboards featuring real-time data and analytics.',
    features: [{ title: 'Real-time Metrics', description: 'Live data tracking' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 9
  },
  {
    title: 'Performance Optimization',
    slug: 'performance-optimization',
    category: 'Technical',
    icon: '⚡',
    short_description: 'Speed up your web applications for better UX.',
    description: 'We optimize your codebase, database queries, and server configuration to deliver blazing fast load times.',
    features: [{ title: 'Core Web Vitals', description: 'Optimize for Google rankings' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 10
  },
  // Academic & Research Services
  {
    title: 'Research Papers',
    slug: 'research-papers',
    category: 'Academic',
    icon: '📚',
    short_description: 'High-quality, peer-reviewed standard research writing.',
    description: 'Professional assistance in writing, formatting, and structuring academic research papers across various disciplines.',
    features: [{ title: 'Original Content', description: 'Plagiarism-free research' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 11
  },
  {
    title: 'Case Studies',
    slug: 'case-studies',
    category: 'Academic',
    icon: '📋',
    short_description: 'In-depth business and academic case studies.',
    description: 'Comprehensive analysis and well-structured case studies that clearly present the problem, methodology, and solutions.',
    features: [{ title: 'Deep Analysis', description: 'Thorough research and findings' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 12
  },
  {
    title: 'Dissertations',
    slug: 'dissertations',
    category: 'Academic',
    icon: '🎓',
    short_description: 'Complete dissertation writing and editing services.',
    description: 'Expert guidance and writing support for your thesis or dissertation, from proposal to final defense.',
    features: [{ title: 'Academic Standard', description: 'Strict adherence to guidelines' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 13
  },
  {
    title: 'Blogs & Articles',
    slug: 'blogs-articles',
    category: 'Academic',
    icon: '✍️',
    short_description: 'Engaging, well-researched technical and academic blogs.',
    description: 'High-quality articles and blog posts written by subject matter experts to engage your readers and build authority.',
    features: [{ title: 'SEO Optimized', description: 'Written for both readers and search engines' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 14
  },
  {
    title: 'PowerPoint Presentations (PPTs)',
    slug: 'powerpoint-presentations',
    category: 'Academic',
    icon: '📊',
    short_description: 'Professional pitch decks and academic presentations.',
    description: 'Visually compelling and well-structured PowerPoint presentations for business meetings, academic defenses, or conferences.',
    features: [{ title: 'Visual Storytelling', description: 'Engaging slide designs' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 15
  },
  {
    title: 'Business Proposals',
    slug: 'business-proposals',
    category: 'Academic',
    icon: '💼',
    short_description: 'Winning business proposals and grant applications.',
    description: 'Persuasive business proposals designed to secure funding, win clients, or establish valuable partnerships.',
    features: [{ title: 'Persuasive Writing', description: 'Clear value propositions' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 16
  },
  {
    title: 'Academic Reports',
    slug: 'academic-reports',
    category: 'Academic',
    icon: '📑',
    short_description: 'Structured and detailed academic reporting.',
    description: 'Comprehensive academic reports that clearly synthesize data, methodologies, and actionable conclusions.',
    features: [{ title: 'Data Driven', description: 'Accurate data representation' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 17
  },
  {
    title: 'Literature Reviews',
    slug: 'literature-reviews',
    category: 'Academic',
    icon: '📖',
    short_description: 'Thorough reviews of existing academic literature.',
    description: 'Extensive synthesis of published research to establish the context and theoretical framework for your study.',
    features: [{ title: 'Comprehensive', description: 'Covering all relevant sources' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 18
  },
  {
    title: 'Technical Documentation',
    slug: 'technical-documentation',
    category: 'Academic',
    icon: '⚙️',
    short_description: 'Clear, concise documentation for software and processes.',
    description: 'User manuals, API documentation, and process guides written clearly to ensure your users and team understand your systems.',
    features: [{ title: 'Developer Friendly', description: 'Clear code examples and guides' }],
    pricing_starting_at: 'Contact Us',
    pricing_note: '',
    sort_order: 19
  }
];

const seedSupabase = async () => {
  try {
    console.log('🚀 Starting Supabase seeding...');

    // Clear existing services (optional, but follows seed.js logic)
    const { error: deleteError } = await supabase.from('services').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    if (deleteError) console.warn('Warning deleting services:', deleteError.message);

    // Insert services
    const { data: insertedServices, error: insertError } = await supabase
      .from('services')
      .insert(services);
    
    if (insertError) throw insertError;
    console.log(`✅ Inserted ${services.length} services`);

    // Create admin user
    const adminEmail = process.env.ADMIN_EMAIL || 'samarthshekhar12@gmail.com';
    const rawPassword = process.env.ADMIN_PASSWORD || 'admin123456';
    const hashedPassword = await bcrypt.hash(rawPassword, 12);

    const { data: adminData, error: adminError } = await supabase
      .from('admins')
      .upsert({
        email: adminEmail,
        password: hashedPassword,
        name: 'Admin',
        role: 'superadmin'
      }, { onConflict: 'email' });

    if (adminError) throw adminError;
    console.log(`✅ Created/Updated admin user: ${adminEmail}`);

    console.log('\n🎉 Supabase seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
};

seedSupabase();
