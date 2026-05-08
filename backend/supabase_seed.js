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

// Portfolio Projects Data - Expanded with all categories
const portfolioProjects = [
  // Restaurant & Cafe Projects (6)
  {
    title: 'Cafe Management Website', slug: 'cafe-management-website', description: 'Complete cafe management platform with menu, inventory, and online ordering.', category: 'Restaurant & Cafe', sub_category: 'Cafe Management', tech_stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'], github_link: 'https://github.com/Samarth-Shekhar/cafe-management', live_link: 'https://cafe-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Increased order efficiency by 60% and reduced manual work by 80%', featured: true, sort_order: 1
  },
  {
    title: 'Restaurant Ordering System', slug: 'restaurant-ordering-system', description: 'Real-time restaurant ordering with kitchen display and notifications.', category: 'Restaurant & Cafe', sub_category: 'Restaurant Management', tech_stack: ['Next.js', 'Express', 'WebSocket', 'MongoDB'], github_link: 'https://github.com/Samarth-Shekhar/restaurant-order', live_link: 'https://restaurant-order-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Handling 500+ daily orders with 99.9% uptime across 15+ restaurants', featured: true, sort_order: 2
  },
  {
    title: 'QR Menu Web App', slug: 'qr-menu-web-app', description: 'Digital QR menu system with dynamic pricing and language support.', category: 'Restaurant & Cafe', sub_category: 'Digital Menu', tech_stack: ['React', 'Firebase', 'Tailwind CSS'], github_link: 'https://github.com/Samarth-Shekhar/qr-menu', live_link: 'https://qr-menu-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1514432324607-2e467f4af445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Deployed across 20 restaurants, reducing paper waste significantly', featured: false, sort_order: 3
  },
  {
    title: 'Restaurant Landing Page', slug: 'restaurant-landing-page', description: 'Premium restaurant landing page with reservations and gallery.', category: 'Restaurant & Cafe', sub_category: 'Web Design', tech_stack: ['Next.js', 'Tailwind CSS', 'Supabase'], github_link: 'https://github.com/Samarth-Shekhar/restaurant-landing', live_link: 'https://restaurant-landing-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'SEO ranking improved from 0 to page 1 in 3 months', featured: false, sort_order: 4
  },
  {
    title: 'Cafe Booking System', slug: 'cafe-booking-system', description: 'Table reservation and event booking with automated reminders.', category: 'Restaurant & Cafe', sub_category: 'Booking', tech_stack: ['React', 'Node.js', 'PostgreSQL', 'Twilio'], github_link: 'https://github.com/Samarth-Shekhar/cafe-booking', live_link: 'https://cafe-booking-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Reduced no-shows by 70% with SMS reminders', featured: false, sort_order: 5
  },
  {
    title: 'Food Delivery Dashboard', slug: 'food-delivery-dashboard', description: 'Analytics dashboard with real-time tracking and metrics.', category: 'Restaurant & Cafe', sub_category: 'Analytics', tech_stack: ['React', 'Chart.js', 'Redux', 'Node.js'], github_link: 'https://github.com/Samarth-Shekhar/delivery-dashboard', live_link: 'https://delivery-dashboard-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1460925895917-aaf4ee8ac442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Real-time insights helped optimize operations, 45% revenue increase', featured: true, sort_order: 6
  },

  // Web & SaaS Projects (9)
  {
    title: 'AI Meal Planner', slug: 'ai-meal-planner', description: 'AI-powered meal planning with personalized suggestions.', category: 'Web & SaaS', sub_category: 'AI Application', tech_stack: ['Next.js', 'OpenAI', 'Supabase', 'Stripe'], github_link: 'https://github.com/Samarth-Shekhar/ai-meal-planner', live_link: 'https://ai-meal-planner-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'SaaS with 5000+ users generating $15k/month', featured: true, sort_order: 7
  },
  {
    title: 'Shipment Delivery Application', slug: 'shipment-delivery-app', description: 'Logistics platform with real-time tracking and optimization.', category: 'Web & SaaS', sub_category: 'Logistics', tech_stack: ['MERN', 'Google Maps API', 'Socket.io', 'Redis'], github_link: 'https://github.com/Samarth-Shekhar/shipment-delivery', live_link: 'https://shipment-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Processing 10k+ shipments daily for 50+ partners with 99.9% uptime', featured: true, sort_order: 8
  },
  {
    title: 'React Admin Dashboard', slug: 'react-admin-dashboard', description: 'Professional admin dashboard with charts and real-time analytics.', category: 'Web & SaaS', sub_category: 'Dashboard', tech_stack: ['React', 'Chart.js', 'Material-UI', 'Redux'], github_link: 'https://github.com/Samarth-Shekhar/admin-dashboard', live_link: 'https://admin-dashboard-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1460925895917-aaf4ee8ac442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: '5k+ GitHub stars, used by 100+ companies', featured: false, sort_order: 9
  },
  {
    title: 'Spotify Clone', slug: 'spotify-clone', description: 'Music streaming app with playlists and recommendations.', category: 'Web & SaaS', sub_category: 'Music App', tech_stack: ['React', 'Express', 'MongoDB', 'AWS S3'], github_link: 'https://github.com/Samarth-Shekhar/spotify-clone', live_link: 'https://spotify-clone-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1611339555312-e607c90352fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Music streaming with 1000+ songs and real-time features', featured: false, sort_order: 10
  },
  {
    title: 'MERN E-commerce Platform', slug: 'mern-ecommerce', description: 'Full-stack e-commerce with payment gateway integration.', category: 'Web & SaaS', sub_category: 'E-commerce', tech_stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe'], github_link: 'https://github.com/Samarth-Shekhar/mern-ecommerce', live_link: 'https://mern-ecommerce-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Generating $50k monthly revenue with 10k+ products', featured: true, sort_order: 11
  },
  {
    title: 'Firebase Real-time Chat', slug: 'firebase-realtime-chat', description: 'Real-time messaging with group chats and file sharing.', category: 'Web & SaaS', sub_category: 'Communication', tech_stack: ['React', 'Firebase', 'Tailwind CSS'], github_link: 'https://github.com/Samarth-Shekhar/firebase-chat', live_link: 'https://firebase-chat-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1615232759019-ad9f86f6bc1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: '10k+ daily active users with real-time notifications', featured: false, sort_order: 12
  },
  {
    title: 'Weather Dashboard', slug: 'weather-dashboard', description: 'Real-time weather with 7-day forecast and analytics.', category: 'Web & SaaS', sub_category: 'Dashboard', tech_stack: ['React', 'Node.js', 'OpenWeatherMap API', 'Chart.js'], github_link: 'https://github.com/Samarth-Shekhar/weather-dashboard', live_link: 'https://weather-dashboard-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: '50k+ users with real-time data integration', featured: false, sort_order: 13
  },
  {
    title: 'REST API Microservices', slug: 'rest-api-microservices', description: 'Scalable microservices architecture with documentation.', category: 'Web & SaaS', sub_category: 'Backend', tech_stack: ['Node.js', 'Express', 'PostgreSQL', 'Docker'], github_link: 'https://github.com/Samarth-Shekhar/microservices-api', live_link: 'https://api-docs-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Handling 100k+ requests/day with 99.95% uptime', featured: false, sort_order: 14
  },

  // AI & Automation Projects (8)
  {
    title: 'Instagram Comment Scraper', slug: 'instagram-comment-scraper', description: 'Automated tool for scraping Instagram comments with sentiment.', category: 'AI & Automation', sub_category: 'Social Media', tech_stack: ['Python', 'Selenium', 'NLP', 'Flask'], github_link: 'https://github.com/Samarth-Shekhar/ig-scraper', live_link: null, image_url: 'https://images.unsplash.com/photo-1611087620459-c8960db8b83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Extracting 10k+ comments daily for 50+ brands', featured: false, sort_order: 15
  },
  {
    title: 'WhatsApp Automation System', slug: 'whatsapp-automation', description: 'Intelligent WhatsApp automation for messaging and support.', category: 'AI & Automation', sub_category: 'Communication', tech_stack: ['Python', 'WhatsApp API', 'NLP', 'FastAPI'], github_link: 'https://github.com/Samarth-Shekhar/whatsapp-automation', live_link: null, image_url: 'https://images.unsplash.com/photo-1611612135195-d67e451020b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Handling 50k+ messages daily, 90% response time improvement', featured: true, sort_order: 16
  },
  {
    title: 'Real Estate AI Agent', slug: 'real-estate-ai-agent', description: 'AI assistant for real estate with property matching and analysis.', category: 'AI & Automation', sub_category: 'Real Estate', tech_stack: ['Python', 'OpenAI', 'LangChain', 'FastAPI'], github_link: 'https://github.com/Samarth-Shekhar/real-estate-ai', live_link: 'https://real-estate-ai-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Helping 100+ agents, 65% lead conversion increase', featured: true, sort_order: 17
  },
  {
    title: 'AI Lead Generation Bot', slug: 'ai-lead-generation-bot', description: 'Intelligent bot for prospect identification and outreach.', category: 'AI & Automation', sub_category: 'Sales', tech_stack: ['Python', 'OpenAI', 'Zapier', 'MongoDB'], github_link: 'https://github.com/Samarth-Shekhar/lead-gen-bot', live_link: 'https://lead-gen-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Generating 500+ qualified leads monthly for SaaS companies', featured: true, sort_order: 18
  },
  {
    title: 'Web Scraper Tool', slug: 'web-scraper-tool', description: 'Automated web scraping for competitive intelligence.', category: 'AI & Automation', sub_category: 'Data Collection', tech_stack: ['Python', 'BeautifulSoup', 'Scrapy', 'PostgreSQL'], github_link: 'https://github.com/Samarth-Shekhar/web-scraper', live_link: null, image_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Processing 1M+ data points daily from 100+ websites', featured: false, sort_order: 19
  },
  {
    title: 'AI Chatbot Dashboard', slug: 'ai-chatbot-dashboard', description: 'Custom AI chatbot with learning and multi-language support.', category: 'AI & Automation', sub_category: 'Chatbot', tech_stack: ['React', 'Python', 'OpenAI', 'WebSocket'], github_link: 'https://github.com/Samarth-Shekhar/ai-chatbot', live_link: 'https://chatbot-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: '100k+ conversations monthly, 95% satisfaction', featured: true, sort_order: 20
  },
  {
    title: 'Resume Screening AI', slug: 'resume-screening-ai', description: 'AI-powered automatic resume analysis and ranking.', category: 'AI & Automation', sub_category: 'HR Tech', tech_stack: ['Python', 'NLP', 'Machine Learning', 'Flask'], github_link: 'https://github.com/Samarth-Shekhar/resume-screener', live_link: 'https://resume-screener-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Screening 5000+ applications monthly, 80% HR time reduction', featured: false, sort_order: 21
  },
  {
    title: 'Content Automation Workflow', slug: 'content-automation-workflow', description: 'Automated content creation and multi-platform distribution.', category: 'AI & Automation', sub_category: 'Content', tech_stack: ['Python', 'OpenAI', 'Zapier', 'Node.js'], github_link: 'https://github.com/Samarth-Shekhar/content-automation', live_link: 'https://content-automation-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Automating 100+ posts weekly for 30+ clients', featured: false, sort_order: 22
  },

  // Academic & Research Projects (7)
  {
    title: 'IEEE Paper Formatter', slug: 'ieee-paper-formatter', description: 'Automated IEEE research paper formatting tool.', category: 'Academic & Research', sub_category: 'Academic Writing', tech_stack: ['Python', 'LaTeX', 'Flask', 'React'], github_link: 'https://github.com/Samarth-Shekhar/ieee-formatter', live_link: 'https://ieee-formatter-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1507842217343-583f20270319?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Used by 5000+ researchers, 1000+ papers monthly', featured: false, sort_order: 23
  },
  {
    title: 'Dissertation Assistant', slug: 'dissertation-assistant', description: 'AI-powered dissertation writing and editing support.', category: 'Academic & Research', sub_category: 'Academic Writing', tech_stack: ['Python', 'OpenAI', 'React', 'FastAPI'], github_link: 'https://github.com/Samarth-Shekhar/dissertation-ai', live_link: 'https://dissertation-assistant-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1455849318169-8c3a34ee37f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Helping 2000+ graduate students complete research', featured: true, sort_order: 24
  },
  {
    title: 'Literature Review Dashboard', slug: 'literature-review-dashboard', description: 'Literature review management with organization features.', category: 'Academic & Research', sub_category: 'Research Tools', tech_stack: ['React', 'Node.js', 'MongoDB', 'PDF.js'], github_link: 'https://github.com/Samarth-Shekhar/lit-review', live_link: 'https://lit-review-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1434493789351-909de77aae1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Organizing 100k+ research papers for institutions', featured: false, sort_order: 25
  },
  {
    title: 'Technical Documentation System', slug: 'technical-docs-system', description: 'Automated technical documentation with code analysis.', category: 'Academic & Research', sub_category: 'Documentation', tech_stack: ['Node.js', 'Markdown', 'Swagger', 'React'], github_link: 'https://github.com/Samarth-Shekhar/tech-docs', live_link: 'https://tech-docs-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Used by 100+ open-source projects and companies', featured: false, sort_order: 26
  },
  {
    title: 'Research Publication Workflow', slug: 'research-publication-workflow', description: 'End-to-end research publication management system.', category: 'Academic & Research', sub_category: 'Publishing', tech_stack: ['React', 'Node.js', 'PostgreSQL', 'Email API'], github_link: 'https://github.com/Samarth-Shekhar/publication-workflow', live_link: 'https://publication-workflow-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Processing 500+ submissions annually for conferences', featured: false, sort_order: 27
  },
  {
    title: 'Academic Report Generator', slug: 'academic-report-generator', description: 'AI-powered academic report generation with data analysis.', category: 'Academic & Research', sub_category: 'Report Writing', tech_stack: ['Python', 'OpenAI', 'Chart.js', 'FastAPI'], github_link: 'https://github.com/Samarth-Shekhar/report-generator', live_link: 'https://report-generator-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1460925895917-aaf4ee8ac442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Creating 500+ academic reports monthly', featured: true, sort_order: 28
  },
  {
    title: 'Business Proposal Creator', slug: 'business-proposal-creator', description: 'AI-powered business proposal and PPT creator.', category: 'Academic & Research', sub_category: 'Business Writing', tech_stack: ['Python', 'OpenAI', 'python-pptx', 'React'], github_link: 'https://github.com/Samarth-Shekhar/proposal-creator', live_link: 'https://proposal-creator-demo.vercel.app', image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', case_study: 'Generating 1000+ professional proposals monthly', featured: false, sort_order: 29
  }
];

// Companies Data (Trusted By)
const companies = [
  { name: 'Marksman Technologies', logo_url: 'https://via.placeholder.com/200x100?text=Marksman', website: 'https://marksman.com', sort_order: 1 },
  { name: 'Airports Authority of India', logo_url: 'https://via.placeholder.com/200x100?text=AAI', website: 'https://aai.aero', sort_order: 2 },
  { name: 'Essentia.dev', logo_url: 'https://via.placeholder.com/200x100?text=Essentia', website: 'https://essentia.dev', sort_order: 3 },
  { name: 'Celebal Technologies', logo_url: 'https://via.placeholder.com/200x100?text=Celebal', website: 'https://celebaltech.com', sort_order: 4 },
  { name: 'ZenSolarCiti', logo_url: 'https://via.placeholder.com/200x100?text=ZenSolar', website: 'https://zensolarciti.com', sort_order: 5 },
  { name: 'Chaupal Foundation', logo_url: 'https://via.placeholder.com/200x100?text=Chaupal', website: 'https://chaupralfoundation.org', sort_order: 6 },
  { name: 'PepeLeads', logo_url: 'https://via.placeholder.com/200x100?text=PepeLeads', website: 'https://pepeleads.com', sort_order: 7 }
];

// Testimonials Data
const testimonials = [
  {
    client_name: 'Arjun Mehta', company_name: 'Marksman Technologies', role: 'CEO & Founder',
    review: 'Excellent automation solutions and timely delivery. NexusDigital transformed our systems into modern platforms. Highly recommend!',
    rating: 5, company_logo_url: 'https://via.placeholder.com/200x100?text=Marksman', featured: true, sort_order: 1
  },
  {
    client_name: 'Priya Sharma', company_name: 'Essentia.dev', role: 'CTO & Co-Founder',
    review: 'Professional dashboard development with scalable architecture. Delivered beyond expectations. Outstanding work!',
    rating: 5, company_logo_url: 'https://via.placeholder.com/200x100?text=Essentia', featured: true, sort_order: 2
  },
  {
    client_name: 'Rajesh Kumar', company_name: 'Airports Authority of India', role: 'Director, IT Division',
    review: 'Strong frontend and backend expertise. Improved operations by 60%. Trustworthy and reliable partners!',
    rating: 5, company_logo_url: 'https://via.placeholder.com/200x100?text=AAI', featured: true, sort_order: 3
  },
  {
    client_name: 'Sneha Patel', company_name: 'Celebal Technologies', role: 'Head of Product',
    review: 'AI automation reduced manual work by 80%. Responsive, innovative, and genuinely cares about success!',
    rating: 5, company_logo_url: 'https://via.placeholder.com/200x100?text=Celebal', featured: true, sort_order: 4
  },
  {
    client_name: 'Vikram Singh', company_name: 'ZenSolarCiti', role: 'Operations Manager',
    review: 'Revolutionary web scraping tools saved hundreds of hours. Professional and results-oriented team!',
    rating: 5, company_logo_url: 'https://via.placeholder.com/200x100?text=ZenSolar', featured: false, sort_order: 5
  },
  {
    client_name: 'Deepika Verma', company_name: 'Chaupal Foundation', role: 'Executive Director',
    review: 'Built an amazing donation platform with real-time tracking. Intuitive UI and rock-solid backend!',
    rating: 5, company_logo_url: 'https://via.placeholder.com/200x100?text=Chaupal', featured: false, sort_order: 6
  },
  {
    client_name: 'Rohit Desai', company_name: 'PepeLeads', role: 'Founder',
    review: 'Lead generation system generated 500+ qualified leads monthly. Best investment for sales team!',
    rating: 5, company_logo_url: 'https://via.placeholder.com/200x100?text=PepeLeads', featured: true, sort_order: 7
  },
  {
    client_name: 'Meera Singh', company_name: 'TechNova Solutions', role: 'CEO',
    review: '45% conversion increase and 180% user engagement boost. Outstanding results across the board!',
    rating: 5, company_logo_url: 'https://via.placeholder.com/200x100?text=TechNova', featured: false, sort_order: 8
  }
];

const seedSupabase = async () => {
  try {
    console.log('🚀 Starting Supabase seeding...\n');

    const serviceRows = services.map(service => ({
      ...service,
      name: service.title,
      pricing: service.pricing_starting_at,
      image: service.image || null
    }));
    const portfolioRows = portfolioProjects.map(project => ({
      ...project,
      image: project.image_url
    }));
    const testimonialRows = testimonials.map(testimonial => ({
      ...testimonial,
      company: testimonial.company_name,
      company_logo: testimonial.company_logo_url
    }));

    // Insert services
    console.log('📚 Seeding services...');
    const { data: insertedServices, error: serviceError } = await supabase
      .from('services')
      .insert(serviceRows);
    
    if (serviceError) console.warn('⚠️ Services warning:', serviceError.message);
    else console.log(`✅ Inserted ${services.length} services`);

    // Insert portfolio projects
    console.log('\n📁 Seeding portfolio projects...');
    const { error: portfolioError } = await supabase
      .from('portfolio_projects')
      .insert(portfolioRows);
    
    if (portfolioError) console.warn('⚠️ Portfolio warning:', portfolioError.message);
    else console.log(`✅ Inserted ${portfolioProjects.length} portfolio projects`);

    // Insert companies
    console.log('\n🏢 Seeding companies...');
    const { error: companiesError } = await supabase
      .from('companies')
      .insert(companies);
    
    if (companiesError) console.warn('⚠️ Companies warning:', companiesError.message);
    else console.log(`✅ Inserted ${companies.length} companies`);

    // Insert testimonials
    console.log('\n💬 Seeding testimonials...');
    const { error: testimonialError } = await supabase
      .from('testimonials')
      .insert(testimonialRows);
    
    if (testimonialError) console.warn('⚠️ Testimonials warning:', testimonialError.message);
    else console.log(`✅ Inserted ${testimonials.length} testimonials`);

    // Create admin user
    const adminEmail = process.env.ADMIN_EMAIL || 'samarthshekhar12@gmail.com';
    const rawPassword = process.env.ADMIN_PASSWORD || 'admin123456';
    const hashedPassword = await bcrypt.hash(rawPassword, 12);

    console.log('\n👤 Creating admin user...');
    const { error: adminError } = await supabase
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
