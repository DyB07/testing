'use strict';

module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class cars extends Model {}

  cars.init(
    {
      name: DataTypes.STRING,
      sewa: DataTypes.INTEGER,
      ukuran: DataTypes.STRING,
      foto: DataTypes.STRING
    }, 
    
    {
      sequelize,
    });

  return cars;
};