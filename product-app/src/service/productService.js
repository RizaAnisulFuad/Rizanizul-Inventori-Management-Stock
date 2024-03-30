// productService.js

const Product = require('../model/Product');

const productService = {
  async getAllProducts() {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw new Error('Error fetching products');
    }
  },

  async getProductById(productId) {
    try {
      const product = await Product.findById(productId);
      return product;
    } catch (error) {
      throw new Error('Error fetching product');
    }
  },

  async createProduct(productData) {
    try {
      const product = new Product(productData);
      await product.save();
      return product;
    } catch (error) {
      throw new Error('Error creating product');
    }
  },

  async updateProduct(productId, newData) {
    try {
      const product = await Product.findByIdAndUpdate(productId, newData, { new: true });
      return product;
    } catch (error) {
      throw new Error('Error updating product');
    }
  },

  async deleteProduct(productId) {
    try {
      await Product.findByIdAndDelete(productId);
    } catch (error) {
      throw new Error('Error deleting product');
    }
  }
};

module.exports = productService;
