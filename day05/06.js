var express = require('express');
var app = express();
app.all("*",(req,res,next)=>{
    //请求源；加*表示允许所有域名进行访问
    res.header("Access-Control-Allow-origin")
    //定义请求头类型
    res.header("Access-Control-Allow-Content","content-type")
    //定义允许跨域访问的请求方式
    res.header("Access-Control-Allow-Method","GET","POST","PATCH","PUT","DELETE","OPTIONS")
    //继续执行 
    next()

})
app.listen(3000)