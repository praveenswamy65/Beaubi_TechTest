// Defines the model for the DB table - auto created using Sequelize commands
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

  // Initial table loading with dummy data for testing
  /*brands.sync({force: true}).then(function () {
    return brands.create({
      brand_name:"brand_dummy",
      product : "prod_dummy",
      category:"cate_dummy"
    });
  });*/
  return brands;
};