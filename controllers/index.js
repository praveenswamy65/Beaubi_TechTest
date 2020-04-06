const models = require('../models').brands;

var Create=function (req,res) {
  models.create({
    //brand_name: req.brand_name,//req.formData.brand,
    //product:  req.product_name,//req.formData.prod,
    //category: req.category//req.formData.cat
    brand_name : "brand",
    product : "prod",
    category: "cate"
  }, function (err, usr) {
    if (err) console.log("Error in updating the product.");
    else {
      console.log("Please check the input fields.");

    }
  });
}
module.exports = {
  Create:Create
}