const models = require('../models').brands;
var Create=function (req,res) {
  models.create({
    brand_name: 'asdfg',
    product: 'sdfgvc',
    category: 'xcvb'

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