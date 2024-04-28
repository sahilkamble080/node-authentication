const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  emailId: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  number: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  role: {
    type: Sequelize.ENUM('Admin', 'Supervisor'),
    allowNull: false
  }
});

module.exports = User;
