var express = require('express');
var router = require('./router').router;
var bodyParser = require('body-parser')
// console.log(bodyParser)
var app = express();
app.use(express.static("./static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(router);
app.listen(3000);