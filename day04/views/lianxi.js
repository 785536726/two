var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
// console.log(ejs);
http.createServer((req,res) => {
    var olist = [
        'a','b','c','d'
    ]
    fs.readFile('./lianxi.ejs',(err,data)=>{
        // console.log(data.toString())
        var template = data.toString();
        console.log(template);
        var str = ejs.render(template,{olist})
        res.end(str)
    })
}).listen(3000)