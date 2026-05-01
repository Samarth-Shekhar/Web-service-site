const express = require('express');
const SupabaseService = require('../services/supabaseService');
const { protect } = require('../middleware/auth');
const nodemailer = require('nodemailer');

const router = express.Router();

// Email transporter setup (keeping existing logic)
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send notification email
const sendNotificationEmail = async (lead) => {
  try {
    const transporter = createTransporter();
    
    await transporter.sendMail({
      from: `"NexusDigital" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Lead: ${lead.name} - ${lead.service_requested}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Lead Received</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${lead.name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${lead.email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${lead.phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${lead.service_requested}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Message:</td><td style="padding: 8px;">${lead.message || 'N/A'}</td></tr>
          </table>
        </div>
      `
    });
  } catch (err) {
    console.error('Email notification failed:', err.message);
  }
};

// @route   POST /api/leads
// @desc    Create a new lead (public)
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, serviceRequested, serviceRequired, service, message } = req.body;

    // Use whichever field name the frontend is sending
    const serviceName = serviceRequested || serviceRequired || service || 'General Inquiry';

    const lead = await SupabaseService.createClient({
      name,
      email,
      phone,
      service_requested: serviceName,
      message
    });

    // Send notification email (non-blocking)
    sendNotificationEmail(lead);

    res.status(201).json({
      success: true,
      message: 'Thank you! We will get back to you shortly.',
      data: lead
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   GET /api/leads
// @desc    Get all leads (admin only)
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const status = req.query.status;
    const search = req.query.search;

    const { data: leads, total } = await SupabaseService.getClients({
      page,
      limit,
      status,
      search
    });

    res.status(200).json({
      success: true,
      data: leads,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   GET /api/leads/stats
// @desc    Get lead statistics
// @access  Private
router.get('/stats', protect, async (req, res) => {
  try {
    const stats = await SupabaseService.getClientStats();

    res.status(200).json({
      success: true,
      data: stats
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   PUT /api/leads/:id
// @desc    Update a lead
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    const lead = await SupabaseService.updateClient(req.params.id, req.body);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      });
    }

    res.status(200).json({ success: true, data: lead });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   DELETE /api/leads/:id
// @desc    Delete a lead
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    await SupabaseService.deleteClient(req.params.id);
    res.status(200).json({ success: true, message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

module.exports = router;
