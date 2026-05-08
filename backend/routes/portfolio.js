const express = require('express');
const Portfolio = require('../models/Portfolio');
const { protect } = require('../middleware/auth');
const { portfolioProjects, isMissingSupabaseTable } = require('../data/defaultContent');

const router = express.Router();

// @route   GET /api/portfolio
// @desc    Get all portfolio projects with optional filters
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, featured, search } = req.query;
    let projects;

    if (search) {
      projects = await Portfolio.searchProjects(search);
    } else {
      projects = await Portfolio.getAllProjects({
        category: category || null,
        featured: featured === 'true'
      });
    }

    res.status(200).json({
      success: true,
      data: projects,
      count: projects.length
    });
  } catch (err) {
    if (isMissingSupabaseTable(err)) {
      const { category, featured, search } = req.query;
      let fallback = portfolioProjects;
      if (category) fallback = fallback.filter(project => project.category === category);
      if (featured === 'true') fallback = fallback.filter(project => project.featured);
      if (search) {
        const needle = search.toLowerCase();
        fallback = fallback.filter(project => (
          project.title.toLowerCase().includes(needle) ||
          project.description.toLowerCase().includes(needle) ||
          project.category.toLowerCase().includes(needle) ||
          project.tech_stack.some(tech => tech.toLowerCase().includes(needle))
        ));
      }
      return res.status(200).json({
        success: true,
        data: fallback,
        count: fallback.length,
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

// @route   GET /api/portfolio/categories
// @desc    Get portfolio categories with counts
// @access  Public
router.get('/categories/count', async (req, res) => {
  try {
    const categoryCounts = await Portfolio.getCategoriesCount();

    res.status(200).json({
      success: true,
      data: categoryCounts
    });
  } catch (err) {
    if (isMissingSupabaseTable(err)) {
      const counts = portfolioProjects.reduce((acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1;
        return acc;
      }, {});
      return res.status(200).json({ success: true, data: counts, source: 'fallback' });
    }
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   GET /api/portfolio/:slug
// @desc    Get single portfolio project by slug
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const project = await Portfolio.getProjectBySlug(req.params.slug);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio project not found'
      });
    }

    res.status(200).json({
      success: true,
      data: project
    });
  } catch (err) {
    if (isMissingSupabaseTable(err)) {
      const project = portfolioProjects.find(item => item.slug === req.params.slug);
      if (!project) {
        return res.status(404).json({ success: false, message: 'Portfolio project not found' });
      }
      return res.status(200).json({ success: true, data: project, source: 'fallback' });
    }
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   POST /api/portfolio
// @desc    Create a new portfolio project
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const payload = {
      ...req.body,
      image_url: req.body.image_url || req.body.image,
      image: req.body.image || req.body.image_url
    };
    const project = await Portfolio.createProject(payload);

    res.status(201).json({
      success: true,
      data: project,
      message: 'Portfolio project created successfully'
    });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).json({
        success: false,
        message: 'Portfolio project with this slug already exists'
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   PUT /api/portfolio/:id
// @desc    Update a portfolio project
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    const payload = {
      ...req.body,
      image_url: req.body.image_url || req.body.image,
      image: req.body.image || req.body.image_url
    };
    const project = await Portfolio.updateProject(req.params.id, payload);

    res.status(200).json({
      success: true,
      data: project,
      message: 'Portfolio project updated successfully'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   DELETE /api/portfolio/:id
// @desc    Delete a portfolio project
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    const project = await Portfolio.deleteProject(req.params.id);

    res.status(200).json({
      success: true,
      data: project,
      message: 'Portfolio project deleted successfully'
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
