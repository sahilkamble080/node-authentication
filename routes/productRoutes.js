const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { authenticateToken, authorizeRole } = require('../middlewares/authMiddleware');
const productController = require('../controllers/productController');

router.post('/product', [
  authenticateToken,
  authorizeRole('Supervisor'),
  body('name', 'Product name is required').exists().isLength({ min: 3 }),
  body('price', 'Invalid price').isFloat(),
  body('category', 'Category is required').exists(),
  body('createdBy', 'CreatedBy is required').exists()
], productController.addProduct);

module.exports = router;
