//item.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./config');

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  type: {
    type: DataTypes.ENUM('perishable', 'non-perishable'),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Item;