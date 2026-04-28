# NexusDigital — Premium Digital Services Agency

**🌍 [Live Preview](https://web-service-site-kappa.vercel.app)** *(Replace with your actual deployed Vercel link)*

A modern, full-stack digital services agency website with Next.js frontend, Express.js backend, and MongoDB database.

## 🏗️ Architecture

```
├── frontend/          # Next.js 15 (React)
│   ├── src/
│   │   ├── app/       # Pages (App Router)
│   │   │   ├── page.js            # Landing Page
│   │   │   ├── about/             # About Page
│   │   │   ├── portfolio/         # Portfolio Page
│   │   │   ├── contact/           # Contact Page
│   │   │   ├── services/[slug]/   # Dynamic Service Pages
│   │   │   └── admin/             # Admin Panel
│   │   └── components/            # Shared Components
│   └── package.json
├── backend/           # Node.js + Express
│   ├── models/        # MongoDB Schemas
│   ├── routes/        # API Routes
│   ├── middleware/     # Auth Middleware
│   ├── server.js      # Entry Point
│   └── seed.js        # Database Seeder
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### 1. Backend Setup
```bash
cd backend
npm install
# Edit .env with your MongoDB URI
npm run seed    # Seed database with services + admin
npm run dev     # Starts on port 5000
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev     # Starts on port 3000
```

### 3. Access
- **Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin
- **API**: http://localhost:5000/api

### Admin Credentials
- Email: samarthshekhar12@gmail.com
- Password: admin123456

## 📡 API Endpoints

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | /api/auth/login | Public | Admin login |
| GET | /api/auth/me | Private | Get admin profile |
| POST | /api/leads | Public | Submit contact form |
| GET | /api/leads | Private | Get all leads |
| GET | /api/leads/stats | Private | Lead statistics |
| PUT | /api/leads/:id | Private | Update lead |
| DELETE | /api/leads/:id | Private | Delete lead |
| GET | /api/services | Public | Get all services |
| GET | /api/services/:slug | Public | Get single service |
| POST | /api/services | Private | Create service |
| PUT | /api/services/:id | Private | Update service |
| DELETE | /api/services/:id | Private | Delete service |

## 🎨 Features

- ✅ Dark/Light theme toggle
- ✅ Glassmorphism UI with smooth animations
- ✅ Mega dropdown navigation with 20+ services
- ✅ Dynamic service detail pages
- ✅ Contact form with database storage
- ✅ WhatsApp floating button integration
- ✅ Admin panel with lead management
- ✅ JWT authentication
- ✅ Email notifications for new leads
- ✅ SEO optimized
- ✅ Fully responsive (mobile-first)
- ✅ Scroll-triggered animations
- ✅ Particle canvas background

## 📱 Contact Info
- Phone: +91 9650754598
- Email: samarthshekhar12@gmail.com
- WhatsApp: +919650754598
