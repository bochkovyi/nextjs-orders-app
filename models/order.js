'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('order', {
    name: DataTypes.STRING,
    status: DataTypes.ENUM('created', 'confirmed', 'delivered', 'canceled'),
    amount_cents: DataTypes.INTEGER
  },
  {
    underscored: true
  });

  return Model;
};
