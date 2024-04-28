const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./category');

const Product = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdBy: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Product.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = Product;
