var http=require("http")
var ejs=require("ejs")
var fs=require("fs")
var art = require('art-template');
var querystring = require('querystring');
// var str = querystring.parse('http://127.0.0.1:3000&&/send?name=tom&age=12')
// var str = querystring.stringify({"name":"tom","age":12})
// var str = querystring.escape('转码');
// var str = querystring.unescape('%E8%BD%AC%E7%A0%81');
// console.log(str)
// console.log(art.render())
// console.log(ejs);
http.createServer((req,res)=>{
    var olist = ['main','news','about']
    // var olist = {
    //     num:8
    // }
    // fs.readFile('./views/list.ejs',(err,data)=>{
    //     var template = data.toString()
    //     var str = ejs.render(template,{list:olist})
    //     res.end(str)
    // })
    // fs.readFile('./views/list.art',(err,data)=>{
    //     var template = data.toString()
    //     var str = ejs.render(template,{list:olist})
    //     res.end(str)
    // })
    fs.readFile('./views/list.art',(err,data)=>{
        var odata = data.toString()
        var str = art.render(odata,{list:olist})
        res.end(str)
    })

}).listen(3000)