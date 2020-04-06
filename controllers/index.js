const models = require('../models').brands;
var Create=function (req,res) {
  alert(req.body());
  models.create({

    //brand_name: req.formData.brand,
    //product:req.formData.prod,
    //category: req.formData.cat

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