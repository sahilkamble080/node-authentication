const { validationResult } = require('express-validator');
const Product = require('../models/product');

exports.addProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, price, image, category, createdBy } = req.body;

  try {
    const product = await Product.create({ name, price, image, category, createdBy });
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
