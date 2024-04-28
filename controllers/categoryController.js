const { validationResult } = require('express-validator');
const Category = require('../models/category');

exports.addCategory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, createdBy } = req.body;

  try {
    const category = await Category.create({ name, createdBy });
    res.status(201).json({ message: 'Category added successfully', category });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
