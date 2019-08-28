// cookie-parser
var express = require('express');
var app = express();
var cookie = require('cookie-parser');
// 可以储存二级域名
app.use(cookie())
app.get('/set',(req,res)=>{
    res.cookie("username","admin",{maxAge:9000000,httpOnly:true})
    res.send('success')
})
app.get('/get',(req,res)=>{
    console.log(req.cookies)
    var data = req.cookies.username
    res.send({"data":data})
})
app.listen(3000)