const Sequelize = require('sequelize');

const sequelize = new Sequelize('express-demo', 'root', 'Aditya@24', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
