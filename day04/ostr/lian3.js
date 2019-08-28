var express = require('express');
var path = require('path');
var app = express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    var list = ['shouye','xinwen','huanyu'];
    res.render('./views/lianxi.ejs',{
        list:list
    })
})
app.listen(3000)        