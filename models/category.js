const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  createdBy: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Category;
