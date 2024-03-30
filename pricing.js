//pricing.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./config');
const Organization = require('./organization');
const Item = require('./item');

const Pricing = sequelize.define('Pricing', {
  base_distance_in_km: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  km_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fix_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Organization.hasMany(Pricing);
Pricing.belongsTo(Organization);

Item.hasMany(Pricing);
Pricing.belongsTo(Item);

module.exports = Pricing;