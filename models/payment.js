'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('payment', {
    method: DataTypes.STRING,
    meta: DataTypes.STRING,
    success: DataTypes.BOOLEAN
  },
  {
    underscored: true
  });

  Model.associate = function(models) {
    models.payment.belongsTo(models.order);
  };

  return Model;
};
