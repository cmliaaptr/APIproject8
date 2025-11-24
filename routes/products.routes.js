const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');
import { authBearer } from '../middlewares/auth.middleware.js';

// Routing standar REST API untuk Product
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);
router.post("/", authBearer, createProduct);
router.put("/:id", authBearer, updateProduct);
router.delete("/:id", authBearer, deleteProduct);

module.exports = router;
