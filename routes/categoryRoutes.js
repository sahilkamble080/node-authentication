const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { authenticateToken, authorizeRole } = require('../middlewares/authMiddleware');
const categoryController = require('../controllers/categoryController');

router.post('/category', [
  authenticateToken,
  authorizeRole('Admin'),
  body('name', 'Category name is required').exists().isLength({ min: 3 }),
  body('createdBy', 'CreatedBy is required').exists()
], categoryController.addCategory);

module.exports = router;
