const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('qcomemos', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;