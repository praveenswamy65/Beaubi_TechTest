var Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const brands = sequelize.define('brands', {
    brand_name: DataTypes.STRING,
    product: DataTypes.STRING,
    category: DataTypes.STRING
  },
      {
    freezeTableName: true, // Model tableName will be the same as the model name
    classMethods:{

      }
    }
    );
  brands.associate = function(models) {
    // associations can be defined here
  };

  brands.sync({force: true}).then(function () {
    return brands.create({
      brand_name: 'ssdf',
      product: 'Hsss',
      category:'ssdd'
    });
  });
  return brands;
};