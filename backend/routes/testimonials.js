const express = require('express');
const Testimonial = require('../models/Testimonial');
const { protect } = require('../middleware/auth');
const { testimonials: fallbackTestimonials, isMissingSupabaseTable } = require('../data/defaultContent');

const router = express.Router();

// @route   GET /api/testimonials
// @desc    Get all testimonials
// @access  Public
router.get('/', async (req, res) => {
  const { featured, limit } = req.query;
  try {
    let testimonials;

    if (featured === 'true') {
      testimonials = await Testimonial.getFeaturedTestimonials(limit ? parseInt(limit) : 6);
    } else {
      testimonials = await Testimonial.getAllTestimonials();
    }

    res.status(200).json({
      success: true,
      data: testimonials,
      count: testimonials.length
    });
  } catch (err) {
    if (isMissingSupabaseTable(err)) {
      const limitCount = limit ? parseInt(limit) : fallbackTestimonials.length;
      const rows = featured === 'true'
        ? fallbackTestimonials.filter(item => item.featured).slice(0, limitCount)
        : fallbackTestimonials.slice(0, limitCount);
      return res.status(200).json({
        success: true,
        data: rows,
        count: rows.length,
        source: 'fallback'
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   GET /api/testimonials/company/:company
// @desc    Get testimonials by company
// @access  Public
router.get('/company/:company', async (req, res) => {
  try {
    const testimonials = await Testimonial.getTestimonialsByCompany(req.params.company);

    res.status(200).json({
      success: true,
      data: testimonials,
      count: testimonials.length
    });
  } catch (err) {
    if (isMissingSupabaseTable(err)) {
      const rows = fallbackTestimonials.filter(item => item.company_name === req.params.company);
      return res.status(200).json({
        success: true,
        data: rows,
        count: rows.length,
        source: 'fallback'
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   GET /api/testimonials/:id
// @desc    Get single testimonial by id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.getTestimonialById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found'
      });
    }

    res.status(200).json({
      success: true,
      data: testimonial
    });
  } catch (err) {
    if (isMissingSupabaseTable(err)) {
      const testimonial = fallbackTestimonials.find(item => item.id === req.params.id);
      if (!testimonial) {
        return res.status(404).json({ success: false, message: 'Testimonial not found' });
      }
      return res.status(200).json({ success: true, data: testimonial, source: 'fallback' });
    }
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   POST /api/testimonials
// @desc    Create a new testimonial
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const payload = {
      ...req.body,
      company_name: req.body.company_name || req.body.company,
      company: req.body.company || req.body.company_name,
      company_logo_url: req.body.company_logo_url || req.body.company_logo,
      company_logo: req.body.company_logo || req.body.company_logo_url
    };
    const testimonial = await Testimonial.createTestimonial(payload);

    res.status(201).json({
      success: true,
      data: testimonial,
      message: 'Testimonial created successfully'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   PUT /api/testimonials/:id
// @desc    Update a testimonial
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    const payload = {
      ...req.body,
      company_name: req.body.company_name || req.body.company,
      company: req.body.company || req.body.company_name,
      company_logo_url: req.body.company_logo_url || req.body.company_logo,
      company_logo: req.body.company_logo || req.body.company_logo_url
    };
    const testimonial = await Testimonial.updateTestimonial(req.params.id, payload);

    res.status(200).json({
      success: true,
      data: testimonial,
      message: 'Testimonial updated successfully'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   DELETE /api/testimonials/:id
// @desc    Delete a testimonial
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    const testimonial = await Testimonial.deleteTestimonial(req.params.id);

    res.status(200).json({
      success: true,
      data: testimonial,
      message: 'Testimonial deleted successfully'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

module.exports = router;
