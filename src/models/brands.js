'use strict';
//var Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const brands = sequelize.define('brands', {
    brand_name: DataTypes.STRING,
    product: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    freezeTableName: true, // Model tableName will be the same as the model name
    classMethods:{

      }
  });
  brands.associate = function(models) {
    // associations can be defined here
  };
  return brands;
};