
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password:DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Absen,{as: 'absen',onDelete: 'CASCADE'})
  };
  return User;
};