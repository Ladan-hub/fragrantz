'use strict';
module.exports = (sequelize, DataTypes) => {
  const Perfume = sequelize.define('Perfume', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    masterPerfumer: DataTypes.STRING,
    scentProfile: DataTypes.STRING,
    description: DataTypes.STRING,
    perfumeImg: DataTypes.STRING
  }, {});
  Perfume.associate = function(models) {
    // associations can be defined here
    Perfume.belongsTo(models.User, {foreignKey: 'userId'})
    Perfume.hasMany(models.Comment, {foreignKey: 'perfumeId', onDelete: "cascade", hooks:true})
  };
  return Perfume;
};
