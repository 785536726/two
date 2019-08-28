var express = require('express');
var ejs = require('ejs');
var app = express();
app.get('/',(req,res)=>{
    res.send('index');
})
app.listen(3000)