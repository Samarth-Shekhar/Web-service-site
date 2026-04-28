const express = require('express');
const Payment = require('../models/Payment');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/payments
// @desc    Create a payment record
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { clientId, amount, paymentStatus, paymentMethod } = req.body;

    const payment = await Payment.create({
      clientId,
      amount,
      paymentStatus,
      paymentMethod
    });

    res.status(201).json({ success: true, data: payment });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// @route   GET /api/payments
// @desc    Get all payments
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const payments = await Payment.find().populate('clientId', 'name email').sort('-createdAt');
    res.status(200).json({ success: true, data: payments });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
