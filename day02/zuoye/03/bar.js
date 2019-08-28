var fs = require('fs')

function shouye(req,res){
    fs.readFile('./shouye.html',(err,data)=>{
             res.end('首页')   
    })
};
function news(req,res){
    fs.readFile('./xinwen.html',(err,data)=>{
             res.end('新闻')   
    })
};
function yule(req,res){
    fs.readFile('./yule.html',(err,data)=>{
             res.end('娱乐')   
    })
};
module.exports = {
    shouye : shouye,
    news : news,
    news : news
};