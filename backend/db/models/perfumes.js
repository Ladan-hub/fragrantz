'use strict';
module.exports = (sequelize, DataTypes) => {
  const Perfume = sequelize.define('Perfume', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    masterPerfumer: DataTypes.STRING,
    perfumeImg: DataTypes.STRING
  }, {});
  Perfume.associate = function(models) {
    // associations can be defined here
    Perfume.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Perfume;
};
