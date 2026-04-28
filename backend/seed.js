const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const Service = require('./models/Service');
require('dotenv').config();

const services = [
  // Development
  {
    title: 'Web Development',
    slug: 'web-development',
    category: 'development',
    icon: '🌐',
    shortDescription: 'Custom websites built with modern technologies for performance and scalability.',
    description: 'We create stunning, high-performance websites using the latest technologies including React, Next.js, and Node.js. Our websites are built with SEO optimization, responsive design, and blazing-fast performance in mind. From corporate websites to complex web applications, we deliver solutions that drive results.',
    features: [
      { title: 'Custom Design', description: 'Unique designs tailored to your brand identity' },
      { title: 'Responsive Layout', description: 'Perfect experience on all devices and screen sizes' },
      { title: 'SEO Optimized', description: 'Built-in search engine optimization for better rankings' },
      { title: 'Fast Performance', description: 'Optimized loading speeds for better user experience' },
      { title: 'CMS Integration', description: 'Easy content management with modern CMS solutions' },
      { title: 'Analytics Setup', description: 'Track your visitors and conversions effectively' }
    ],
    pricing: { startingAt: '₹25,000', note: 'Price varies based on complexity and features' },
    order: 1
  },
  {
    title: 'App Development',
    slug: 'app-development',
    category: 'development',
    icon: '📱',
    shortDescription: 'Native and cross-platform mobile apps that users love.',
    description: 'Build powerful mobile applications for iOS and Android using React Native and Flutter. We focus on creating intuitive user experiences, smooth animations, and robust backend integrations. Our apps are designed to scale with your business and delight your users.',
    features: [
      { title: 'Cross-Platform', description: 'One codebase for iOS and Android' },
      { title: 'Native Performance', description: 'Smooth, native-like experience' },
      { title: 'Push Notifications', description: 'Engage users with timely notifications' },
      { title: 'Offline Support', description: 'App works even without internet' },
      { title: 'App Store Deployment', description: 'Complete submission and approval process' },
      { title: 'Analytics & Tracking', description: 'Monitor user behavior and app performance' }
    ],
    pricing: { startingAt: '₹50,000', note: 'Based on features and platforms' },
    order: 2
  },
  {
    title: 'SaaS Development',
    slug: 'saas-development',
    category: 'development',
    icon: '☁️',
    shortDescription: 'Scalable SaaS platforms built for growth and recurring revenue.',
    description: 'Transform your idea into a fully functional SaaS product. We handle everything from architecture design to deployment, including multi-tenant systems, subscription management, user authentication, and scalable infrastructure. Built to grow with your business.',
    features: [
      { title: 'Multi-tenant Architecture', description: 'Serve multiple clients from one codebase' },
      { title: 'Subscription Management', description: 'Stripe/Razorpay integration for billing' },
      { title: 'User Management', description: 'Roles, permissions, and team management' },
      { title: 'API Design', description: 'RESTful APIs for third-party integrations' },
      { title: 'Auto-scaling', description: 'Infrastructure that grows with your users' },
      { title: 'Dashboard & Analytics', description: 'Admin dashboards with real-time metrics' }
    ],
    pricing: { startingAt: '₹1,00,000', note: 'Comprehensive SaaS solutions' },
    order: 3
  },
  {
    title: 'Admin Dashboards',
    slug: 'admin-dashboards',
    category: 'development',
    icon: '📊',
    shortDescription: 'Powerful admin panels and dashboards for data-driven decisions.',
    description: 'Custom admin dashboards that give you complete control over your business data. Built with React and modern UI frameworks, featuring real-time analytics, data visualization, user management, and workflow automation tools.',
    features: [
      { title: 'Real-time Data', description: 'Live updates and real-time analytics' },
      { title: 'Data Visualization', description: 'Charts, graphs, and interactive reports' },
      { title: 'Role-based Access', description: 'Control who sees what with granular permissions' },
      { title: 'Export & Reports', description: 'Generate and export PDF/Excel reports' },
      { title: 'Notification System', description: 'Alerts and notifications for important events' },
      { title: 'Mobile Responsive', description: 'Manage your business from any device' }
    ],
    pricing: { startingAt: '₹30,000', note: 'Custom dashboard solutions' },
    order: 4
  },
  // AI & Automation
  {
    title: 'AI Chatbots',
    slug: 'ai-chatbots',
    category: 'ai-automation',
    icon: '🤖',
    shortDescription: 'Intelligent chatbots that handle customer queries 24/7.',
    description: 'Deploy AI-powered chatbots that understand natural language and provide instant responses. Built using GPT-4, LangChain, and custom ML models, our chatbots can handle customer support, lead qualification, and sales assistance around the clock.',
    features: [
      { title: 'Natural Language Processing', description: 'Understand and respond to natural language queries' },
      { title: 'Multi-platform', description: 'Deploy on website, WhatsApp, and social media' },
      { title: 'Custom Training', description: 'Train on your business data and FAQs' },
      { title: 'Lead Capture', description: 'Automatically capture and qualify leads' },
      { title: 'Human Handoff', description: 'Seamlessly transfer to human agents when needed' },
      { title: 'Analytics', description: 'Track conversations and improve over time' }
    ],
    pricing: { startingAt: '₹40,000', note: 'Custom AI chatbot solutions' },
    order: 5
  },
  {
    title: 'Automation Systems',
    slug: 'automation-systems',
    category: 'ai-automation',
    icon: '⚡',
    shortDescription: 'Automate repetitive tasks and streamline your workflows.',
    description: 'Eliminate manual work with intelligent automation. We build custom automation systems using tools like Make, Zapier, and custom scripts to connect your apps, automate workflows, and save hundreds of hours per month.',
    features: [
      { title: 'Workflow Automation', description: 'Automate complex business processes' },
      { title: 'App Integration', description: 'Connect 500+ apps and services' },
      { title: 'Data Sync', description: 'Keep your data consistent across platforms' },
      { title: 'Email Automation', description: 'Automated email sequences and campaigns' },
      { title: 'Report Generation', description: 'Auto-generate and send reports' },
      { title: 'Error Handling', description: 'Smart error detection and recovery' }
    ],
    pricing: { startingAt: '₹20,000', note: 'Per automation workflow' },
    order: 6
  },
  {
    title: 'Custom AI Tools',
    slug: 'custom-ai-tools',
    category: 'ai-automation',
    icon: '🧠',
    shortDescription: 'Bespoke AI solutions tailored to your specific business needs.',
    description: 'We develop custom AI tools and models for your unique business challenges. From document processing to predictive analytics, image recognition to recommendation engines, we leverage the latest AI technologies to give you a competitive edge.',
    features: [
      { title: 'Custom Models', description: 'AI models trained on your specific data' },
      { title: 'Document Processing', description: 'Extract and analyze data from documents' },
      { title: 'Predictive Analytics', description: 'Forecast trends and make data-driven decisions' },
      { title: 'Image Recognition', description: 'Computer vision solutions for your needs' },
      { title: 'Recommendation Engine', description: 'Personalized recommendations for users' },
      { title: 'API Integration', description: 'Easy integration with your existing systems' }
    ],
    pricing: { startingAt: '₹60,000', note: 'Custom AI development' },
    order: 7
  },
  {
    title: 'LLM Integration',
    slug: 'llm-integration',
    category: 'ai-automation',
    icon: '💬',
    shortDescription: 'Integrate large language models into your applications.',
    description: 'Harness the power of GPT-4, Claude, Gemini, and other LLMs in your applications. We build RAG systems, fine-tune models, create semantic search, and develop AI-powered features that transform user experiences.',
    features: [
      { title: 'RAG Systems', description: 'Retrieval-augmented generation for accurate answers' },
      { title: 'Fine-tuning', description: 'Custom model training on your data' },
      { title: 'Semantic Search', description: 'AI-powered search that understands context' },
      { title: 'Content Generation', description: 'Automated content creation and editing' },
      { title: 'Multi-model', description: 'Choose the best model for each task' },
      { title: 'Cost Optimization', description: 'Efficient API usage to minimize costs' }
    ],
    pricing: { startingAt: '₹45,000', note: 'LLM integration projects' },
    order: 8
  },
  // Design
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    category: 'design',
    icon: '🎨',
    shortDescription: 'User-centered designs that convert visitors into customers.',
    description: 'Create exceptional user experiences with our UI/UX design services. We combine research, wireframing, prototyping, and visual design to create interfaces that are both beautiful and functional. Our designs are driven by data and user feedback.',
    features: [
      { title: 'User Research', description: 'Understand your users needs and behaviors' },
      { title: 'Wireframing', description: 'Blueprint your application structure' },
      { title: 'Prototyping', description: 'Interactive prototypes for testing' },
      { title: 'Visual Design', description: 'Stunning visual designs that stand out' },
      { title: 'Design System', description: 'Consistent design language across products' },
      { title: 'Usability Testing', description: 'Validate designs with real users' }
    ],
    pricing: { startingAt: '₹15,000', note: 'Per project basis' },
    order: 9
  },
  {
    title: 'Branding',
    slug: 'branding',
    category: 'design',
    icon: '✨',
    shortDescription: 'Build a memorable brand identity that resonates with your audience.',
    description: 'Craft a powerful brand identity that sets you apart from competitors. From logo design to brand guidelines, color palettes to typography, we create cohesive visual identities that tell your story and connect with your target audience.',
    features: [
      { title: 'Logo Design', description: 'Unique, memorable logo designs' },
      { title: 'Brand Guidelines', description: 'Comprehensive brand style guide' },
      { title: 'Color Palette', description: 'Strategic color selection for your brand' },
      { title: 'Typography', description: 'Font selection and typography guidelines' },
      { title: 'Brand Collateral', description: 'Business cards, letterheads, and more' },
      { title: 'Social Templates', description: 'Branded social media templates' }
    ],
    pricing: { startingAt: '₹20,000', note: 'Complete branding packages' },
    order: 10
  },
  {
    title: 'Landing Pages',
    slug: 'landing-pages',
    category: 'design',
    icon: '🚀',
    shortDescription: 'High-converting landing pages that drive results.',
    description: 'Design and develop landing pages that convert. We combine compelling copywriting, strategic design, and optimization techniques to create pages that turn visitors into leads and customers. A/B tested and performance optimized.',
    features: [
      { title: 'Conversion Focused', description: 'Designed to maximize conversions' },
      { title: 'A/B Testing', description: 'Test variations to find what works best' },
      { title: 'Fast Loading', description: 'Optimized for speed and performance' },
      { title: 'Mobile First', description: 'Perfect on every screen size' },
      { title: 'Analytics Integration', description: 'Track every visitor and conversion' },
      { title: 'Lead Capture', description: 'Effective forms and CTAs' }
    ],
    pricing: { startingAt: '₹10,000', note: 'Per landing page' },
    order: 11
  },
  {
    title: 'Product Design',
    slug: 'product-design',
    category: 'design',
    icon: '💎',
    shortDescription: 'End-to-end product design from concept to launch.',
    description: 'Full-cycle product design services from ideation to launch. We work closely with your team to define product strategy, create user flows, design interfaces, and build prototypes that validate your ideas before development begins.',
    features: [
      { title: 'Product Strategy', description: 'Define your product vision and roadmap' },
      { title: 'User Flows', description: 'Map out complete user journeys' },
      { title: 'Interface Design', description: 'Beautiful, intuitive interfaces' },
      { title: 'Prototyping', description: 'Clickable prototypes for stakeholder buy-in' },
      { title: 'Design Handoff', description: 'Developer-ready design specifications' },
      { title: 'Iteration', description: 'Continuous improvement based on feedback' }
    ],
    pricing: { startingAt: '₹35,000', note: 'Full product design' },
    order: 12
  },
  // Marketing
  {
    title: 'SEO Optimization',
    slug: 'seo-optimization',
    category: 'marketing',
    icon: '🔍',
    shortDescription: 'Rank higher on Google and drive organic traffic.',
    description: 'Comprehensive SEO services to improve your search engine rankings and drive organic traffic. We handle technical SEO, content optimization, link building, and local SEO to ensure your business gets found by the right audience.',
    features: [
      { title: 'Technical SEO', description: 'Fix technical issues affecting rankings' },
      { title: 'Keyword Research', description: 'Find high-value keywords for your business' },
      { title: 'Content Optimization', description: 'Optimize existing content for search' },
      { title: 'Link Building', description: 'Build quality backlinks to your site' },
      { title: 'Local SEO', description: 'Dominate local search results' },
      { title: 'Monthly Reports', description: 'Detailed performance reports' }
    ],
    pricing: { startingAt: '₹15,000/mo', note: 'Monthly retainer' },
    order: 13
  },
  {
    title: 'Performance Marketing',
    slug: 'performance-marketing',
    category: 'marketing',
    icon: '📊',
    shortDescription: 'Data-driven ad campaigns that maximize ROI.',
    description: 'Run high-performance advertising campaigns across Google Ads, Facebook, Instagram, and LinkedIn. We use data-driven strategies, advanced targeting, and continuous optimization to deliver maximum ROI on your marketing spend.',
    features: [
      { title: 'Google Ads', description: 'Search, display, and shopping campaigns' },
      { title: 'Social Media Ads', description: 'Facebook, Instagram, LinkedIn ads' },
      { title: 'Retargeting', description: 'Bring back visitors who didnt convert' },
      { title: 'A/B Testing', description: 'Test and optimize ad creatives' },
      { title: 'Conversion Tracking', description: 'Track every conversion and its source' },
      { title: 'ROI Reports', description: 'Clear reporting on your ad spend' }
    ],
    pricing: { startingAt: '₹20,000/mo', note: 'Plus ad spend budget' },
    order: 14
  },
  {
    title: 'Social Media Management',
    slug: 'social-media-management',
    category: 'marketing',
    icon: '📱',
    shortDescription: 'Build your brand presence across social platforms.',
    description: 'Let us handle your social media presence. We create engaging content, manage your accounts, interact with your audience, and grow your following across Instagram, LinkedIn, Twitter, and more.',
    features: [
      { title: 'Content Creation', description: 'Engaging posts, reels, and stories' },
      { title: 'Community Management', description: 'Respond to comments and messages' },
      { title: 'Growth Strategy', description: 'Organic growth tactics that work' },
      { title: 'Influencer Outreach', description: 'Connect with relevant influencers' },
      { title: 'Content Calendar', description: 'Planned and consistent posting schedule' },
      { title: 'Analytics', description: 'Track growth and engagement metrics' }
    ],
    pricing: { startingAt: '₹12,000/mo', note: 'Per platform' },
    order: 15
  },
  {
    title: 'Content Strategy',
    slug: 'content-strategy',
    category: 'marketing',
    icon: '✍️',
    shortDescription: 'Strategic content that attracts and converts your audience.',
    description: 'Develop a comprehensive content strategy that drives traffic, builds authority, and converts readers into customers. We handle content planning, creation, distribution, and performance analysis.',
    features: [
      { title: 'Content Audit', description: 'Analyze your existing content performance' },
      { title: 'Strategy Planning', description: 'Data-driven content roadmap' },
      { title: 'Blog Writing', description: 'SEO-optimized blog posts and articles' },
      { title: 'Email Marketing', description: 'Newsletter and email campaign content' },
      { title: 'Video Scripts', description: 'Scripts for video content' },
      { title: 'Performance Tracking', description: 'Measure content ROI' }
    ],
    pricing: { startingAt: '₹18,000/mo', note: 'Content packages available' },
    order: 16
  },
  // Other Services
  {
    title: 'API Integration',
    slug: 'api-integration',
    category: 'other-services',
    icon: '🔗',
    shortDescription: 'Connect your systems with third-party APIs and services.',
    description: 'Seamlessly integrate third-party APIs and services into your applications. From payment gateways to CRM systems, social media APIs to cloud services, we ensure smooth data flow between all your business tools.',
    features: [
      { title: 'REST & GraphQL', description: 'Integration with any API type' },
      { title: 'Payment APIs', description: 'Stripe, Razorpay, PayPal integration' },
      { title: 'CRM Integration', description: 'Connect with Salesforce, HubSpot, etc.' },
      { title: 'Cloud Services', description: 'AWS, Google Cloud, Azure integration' },
      { title: 'Webhook Setup', description: 'Real-time event-driven integrations' },
      { title: 'Documentation', description: 'Complete API documentation' }
    ],
    pricing: { startingAt: '₹15,000', note: 'Per integration project' },
    order: 17
  },
  {
    title: 'Firebase Setup',
    slug: 'firebase-setup',
    category: 'other-services',
    icon: '🔥',
    shortDescription: 'Complete Firebase setup for authentication, database, and hosting.',
    description: 'Set up and configure Firebase for your applications. We handle authentication, Firestore database, cloud storage, hosting, cloud functions, and push notifications to give you a complete backend-as-a-service solution.',
    features: [
      { title: 'Authentication', description: 'Email, Google, phone auth setup' },
      { title: 'Firestore Database', description: 'Real-time database configuration' },
      { title: 'Cloud Storage', description: 'File upload and storage setup' },
      { title: 'Cloud Functions', description: 'Serverless backend logic' },
      { title: 'Push Notifications', description: 'FCM setup for notifications' },
      { title: 'Security Rules', description: 'Proper security configuration' }
    ],
    pricing: { startingAt: '₹12,000', note: 'Firebase configuration' },
    order: 18
  },
  {
    title: 'Payment Gateway Integration',
    slug: 'payment-gateway-integration',
    category: 'other-services',
    icon: '💳',
    shortDescription: 'Secure payment processing for your applications.',
    description: 'Integrate secure payment processing into your website or app. We work with Razorpay, Stripe, PayPal, and other payment gateways to ensure smooth, secure transactions for your customers.',
    features: [
      { title: 'Multiple Gateways', description: 'Razorpay, Stripe, PayPal support' },
      { title: 'Subscription Billing', description: 'Recurring payment setup' },
      { title: 'Invoice Generation', description: 'Automated invoice creation' },
      { title: 'Refund Management', description: 'Easy refund processing' },
      { title: 'Payment Analytics', description: 'Track revenue and transactions' },
      { title: 'PCI Compliance', description: 'Secure, compliant payment processing' }
    ],
    pricing: { startingAt: '₹10,000', note: 'Per gateway integration' },
    order: 19
  },
  {
    title: 'Website Maintenance',
    slug: 'website-maintenance',
    category: 'other-services',
    icon: '🛠️',
    shortDescription: 'Keep your website running smoothly with ongoing maintenance.',
    description: 'Ensure your website stays secure, updated, and performing optimally with our maintenance services. We handle updates, security patches, performance optimization, backups, and content updates so you can focus on your business.',
    features: [
      { title: 'Regular Updates', description: 'Keep software and plugins up to date' },
      { title: 'Security Monitoring', description: 'Protect against threats and vulnerabilities' },
      { title: 'Performance Optimization', description: 'Keep your site fast and responsive' },
      { title: 'Regular Backups', description: 'Automated backup solutions' },
      { title: 'Content Updates', description: 'Update content as needed' },
      { title: 'Uptime Monitoring', description: '24/7 uptime monitoring and alerts' }
    ],
    pricing: { startingAt: '₹5,000/mo', note: 'Monthly maintenance plans' },
    order: 20
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nexusdigital');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Service.deleteMany({});
    await Admin.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Create services
    await Service.insertMany(services);
    console.log(`✅ Created ${services.length} services`);

    // Create admin user
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
