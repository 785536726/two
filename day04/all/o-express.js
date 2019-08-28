// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express()
// app.use(bodyParser.urlencoded({extended:false}))
// // console.log(bodyParser)
// // console.log(app);
// // app.use('/',(req,res)=>{
// //     console.log(req.body)
// //     res.send('express')
// // })
// // app.get('/send/:id',(req,res)=>{
// //     console.log(req.params)
// //     res.send('新闻')
// // })
// // app.get('/about',(req,res)=>{
// //     res.send('关于')
// // })
// app.post('/send',(req,res)=>{
//     console.log(req.body)
//     res.send('新闻')
// })

// app.listen(3000)

var express=require("express")
var app=express()
var path=require("path")
// ejs   模板引擎
// set 设置  engine  引擎
// 如何设置模板引擎
app.set("views",path.join(__dirname,"/o-views"))
// app.set("view engine","ejs")
app.get("/",(req,res)=>{
       var list=["news","新闻","关于"]
       res.render("list.ejs",{
           list:list
       })
    })
app.listen(3000)
