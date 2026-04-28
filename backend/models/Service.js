const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Service title is required'],
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Technical', 'Academic']
  },
  icon: {
    type: String,
    default: '💻'
  },
  shortDescription: {
    type: String,
    required: true,
    maxlength: 200
  },
  description: {
    type: String,
    required: true
  },
  features: [{
    title: String,
    description: String
  }],
  pricing: {
    startingAt: String,
    note: String
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

serviceSchema.index({ slug: 1 });
serviceSchema.index({ category: 1 });
serviceSchema.index({ isActive: 1 });

module.exports = mongoose.model('Service', serviceSchema);
