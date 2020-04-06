'use strict';
module.exports = (sequelize, DataTypes) => {
  const brands = sequelize.define('brands', {
    brand_name: DataTypes.STRING,
    product: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  brands.associate = function(models) {
    // associations can be defined here
  };
  brands.sync({force: true}).then(function () {
    return brands.create({
      brand_name:"asdf",
      product : "aass",
      category:"dfgh"
    });
  });
  return brands;
};