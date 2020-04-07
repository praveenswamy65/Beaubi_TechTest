// Server.js to load the react component and handle all the routes for Http requests
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();
const bodyParser = require('body-parser');
const prodController = require('./controllers/index');   //Controller to add new product

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));

//Ping test for http test call
app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Http post call to add new product
app.post('/addProduct', function (req, res) {
    //Controller function call
    prodController.createProduct(req, res);
});

app.listen(port);