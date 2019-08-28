var express = require('express');
var app = express();
app.get('/set',(req,res)=>{
    var data = res.cookie("name","tom",{maxAge:900000,httpOnly:true})
    console.log(data)
    res.send('success')
})
app.get('/get',(req,res)=>{
    var data = res.cookie("name");
    res.send(data)
})
app.listen(3000)