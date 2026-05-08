const express = require('express');
const Company = require('../models/Company');
const { protect } = require('../middleware/auth');
const { companies, isMissingSupabaseTable } = require('../data/defaultContent');

const router = express.Router();

// @route   GET /api/companies
// @desc    Get all companies
// @access  Public
router.get('/', async (req, res) => {
  try {
    const companies = await Company.getAllCompanies();

    res.status(200).json({
      success: true,
      data: companies,
      count: companies.length
    });
  } catch (err) {
    if (isMissingSupabaseTable(err)) {
      return res.status(200).json({
        success: true,
        data: companies,
        count: companies.length,
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

// @route   GET /api/companies/:id
// @desc    Get single company by id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const company = await Company.getCompanyById(req.params.id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: 'Company not found'
      });
    }

    res.status(200).json({
      success: true,
      data: company
    });
  } catch (err) {
    if (isMissingSupabaseTable(err)) {
      const company = companies.find(item => item.id === req.params.id);
      if (!company) {
        return res.status(404).json({ success: false, message: 'Company not found' });
      }
      return res.status(200).json({ success: true, data: company, source: 'fallback' });
    }
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   POST /api/companies
// @desc    Create a new company
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const company = await Company.createCompany(req.body);

    res.status(201).json({
      success: true,
      data: company,
      message: 'Company created successfully'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   PUT /api/companies/:id
// @desc    Update a company
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    const company = await Company.updateCompany(req.params.id, req.body);

    res.status(200).json({
      success: true,
      data: company,
      message: 'Company updated successfully'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   DELETE /api/companies/:id
// @desc    Delete a company
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    const company = await Company.deleteCompany(req.params.id);

    res.status(200).json({
      success: true,
      data: company,
      message: 'Company deleted successfully'
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
