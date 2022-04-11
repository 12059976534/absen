
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Absen = sequelize.define('Absen', {
    UserId:DataTypes.INTEGER
  }, {});
  Absen.associate = function(models) {
    Absen.belongsTo(models.User,{foreignKey: 'UserId', as: 'user',onDelete: 'CASCADE'})  
  };
  return Absen;
};