//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser');
//const main = require('./src/components/Forms/Addproducts')
const db = require('./models/index.js');
const prodController = require('./controllers/index');
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(bodyParser.json())
console.log(port);
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//app.get('/users', main.getNewArrivals())
//app.post('/crud', (req, res) => main.postTableData(req, res, db))
app.post('/url',function(req, res){
  prodController.Create();
});

  //const url = req.body.url;
  //let brand_name = "asd";
  //let product = "sss";
  //let category = "dffd";
  //prodController.create();
//});
app.listen(port);