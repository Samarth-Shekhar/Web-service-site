const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const leadRoutes = require('./routes/leads');
const serviceRoutes = require('./routes/services');
const paymentRoutes = require('./routes/payments');
const portfolioRoutes = require('./routes/portfolio');
const testimonialRoutes = require('./routes/testimonials');
const companyRoutes = require('./routes/companies');

const app = express();

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use('/api/', limiter);

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://samarth-shekhar.github.io'
  ],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/companies', companyRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'NexusDigital API is running',
    timestamp: new Date().toISOString()
  });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;

const checkSupabaseConnection = async () => {
  try {
    const supabase = require('./config/supabase');
    const timeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Supabase health check timed out')), 5000);
    });
    const query = supabase.from('services').select('id', { count: 'exact', head: true }).limit(1);
    const { error } = await Promise.race([query, timeout]);

    if (error) {
      console.warn('Supabase connection warning:', error.message);
      console.warn('Make sure the tables exist and your .env Supabase values are valid.');
    } else {
      console.log('Supabase connection verified');
    }
  } catch (err) {
    console.warn('Supabase health check skipped:', err.message);
  }
};

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API: http://localhost:${PORT}/api`);
  checkSupabaseConnection();
});

module.exports = app;
