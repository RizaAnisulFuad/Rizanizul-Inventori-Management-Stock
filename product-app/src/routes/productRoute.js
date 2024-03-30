// productRouter.js

const express = require('express');
const productController = require('../controller/productController');

const router = express.Router();

// Route for getting all products
router.get('/', productController.getAllProducts);

// Route for getting a product by ID
router.get('/:id', productController.getProductById);

// Route for creating a new product
router.post('/', productController.createProduct);

// Route for updating an existing product
router.put('/:id', productController.updateProduct);

// Route for deleting an existing product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
