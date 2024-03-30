const mongoose = require('mongoose');

// Define a schema for your product collection
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

// Create a Mongoose model using the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
