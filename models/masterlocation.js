
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Master = sequelize.define('Master', {
    location:DataTypes.STRING
  }, {});

  return Master;
};