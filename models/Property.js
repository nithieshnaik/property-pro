const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  type: {
    type: String,
    required: [true, 'Please select a property type'],
    enum: ['Apartment', 'House', 'Condo', 'Townhouse', 'Villa'],
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
  },
  bedrooms: {
    type: Number,
    required: [true, 'Please add number of bedrooms'],
  },
  bathrooms: {
    type: Number,
    required: [true, 'Please add number of bathrooms'],
  },
  area: {
    type: Number,
    required: [true, 'Please add area in sq ft'],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  status: {
    type: String,
    required: [true, 'Please select a status'],
    enum: ['For Sale', 'For Rent', 'Sold', 'Pending'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  features: {
    type: [String],
    enum: ['Pool', 'Garage', 'Garden', 'AC', 'Security', 'Furnished'],
  },
  images: {
    type: [String],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Property', PropertySchema);