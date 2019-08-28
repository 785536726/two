var bar = require("./bar.js");
var http = require('http');
var fs = require('fs');
// console.log(bar.a())
http.createServer((req,res)=>{
    if(req.url == '/'){
        bar.shouye(req,res)
    }else if(req.url == '/news'){
        bar.news(req,res)
    }else if(req.url == '/yule'){
        bar.yule(req,res)
    }else{
        res.end('fail')
    }
}).listen(3000)