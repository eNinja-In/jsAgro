import express from 'express';
import { addProductController, getProductController, updateProductController, deleteProductController, getAllProductsController, listProductsController } from '../controllers/productController.js';

const router = express.Router();

// Define your routes
router.post('/products', addProductController); // Add a new product
router.get('/products/:id', getProductController); // Get a product by ID
router.put('/products/:id', updateProductController); // Update a product by ID
router.delete('/products/:id', deleteProductController); // Delete a product by ID
router.get('/products', getAllProductsController); // Get all products with optional filters
router.get('/products/list', listProductsController); // Get a list of all products

export default router;
