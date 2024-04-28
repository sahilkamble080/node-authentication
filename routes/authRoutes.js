const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authController = require('../controllers/authController');

router.post('/login', [
  body('emailId', 'Invalid email').isEmail(),
  body('password', 'Password is required').exists()
], authController.login);

router.post('/register', [
  body('name', 'Name is required').exists(),
  body('emailId', 'Invalid email').isEmail(),
  body('number', 'Invalid phone number').isMobilePhone(),
  body('role', 'Role is required').isIn(['Admin', 'Supervisor'])
], authController.register);

module.exports = router;
