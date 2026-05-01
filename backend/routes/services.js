const express = require('express');
const SupabaseService = require('../services/supabaseService');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/services
// @desc    Get all active services
// @access  Public
router.get('/', async (req, res) => {
  try {
    const category = req.query.category;
    const services = await SupabaseService.getServices(category);

    res.status(200).json({
      success: true,
      data: services
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   GET /api/services/:slug
// @desc    Get single service by slug
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const service = await SupabaseService.getServiceBySlug(req.params.slug);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.status(200).json({ success: true, data: service });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   POST /api/services
// @desc    Create a service
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const service = await SupabaseService.createService(req.body);
    res.status(201).json({ success: true, data: service });
  } catch (err) {
    if (err.code === '23505') { // Supabase unique constraint error code
      return res.status(400).json({
        success: false,
        message: 'Service with this slug already exists'
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   PUT /api/services/:id
// @desc    Update a service
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    const service = await SupabaseService.updateService(req.params.id, req.body);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.status(200).json({ success: true, data: service });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   DELETE /api/services/:id
// @desc    Delete a service
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    await SupabaseService.deleteService(req.params.id);
    res.status(200).json({ success: true, message: 'Service deleted' });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

module.exports = router;
