const models = require('../models').brands;
const reqProds = require('../src/components/Forms/ProductReq');

var Create=function (req,res) {
  models.create({
    //brand_name: req.brand_name,//req.formData.brand,
    //product:  req.product_name,//req.formData.prod,
    //category: req.category//req.formData.cat
    brand_name : reqProds.state.brand_name,
    product : reqProds.state.product_name,
    category:reqProds.state.category
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