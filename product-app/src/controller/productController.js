// productController.js

const productService = require('../service/productService');

const productController = {
  async getAllProducts(req, res) {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getProductById(req, res) {
    const { id } = req.params;
    try {
      const product = await productService.getProductById(id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createProduct(req, res) {
    const productData = req.body;
    try {
      const product = await productService.createProduct(productData);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateProduct(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
      const updatedProduct = await productService.updateProduct(id, newData);
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteProduct(req, res) {
    const { id } = req.params;
    try {
      await productService.deleteProduct(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = productController;
