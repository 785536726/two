var express = require("express");
var app = express()
// 链接mongodb客户端
// var mongoClient = require('mongodb').MongoClient;
var db = require('./add');
// console.log(mongoClient)
//                                                                                        

// app.get("/find",(req,res)=>{
//     mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
//         var dbName = db.db("adminuser");
//         dbName.collection("test").find({"username":"jack"}).toArray(function(err,data){
//             if(err){
//                 throw err;
//             }
//             res.send(data)
//         })
//     })
// })

// app.get("/update",(req,res)=>{
//     mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
//         var dbName = db.db("adminuser");
//         dbName.collection("test").update({"username":"james"},function(err,data){
//             if(err){
//                 throw err;
//             }
//             res.send(data)
//         })
//     })
// })
// app.get("/add",(req,res)=>{
//     db.add("test",{"username":"rrr"},(err)=>{
//         if(err){
//             throw err;
//         }
//         res.send("输入成功")
//     })
// })
app.get("/login",(req,res)=>{
    db.add("test",{"username":"rrr"},(err,data)=>{
        if(err){
            throw err;
        }
        res.send({'data':data})
    })
})
// app.get("/update",(req,res)=>{
//     db.add("test",{"username":"rrr"},(err,data)=>{
//         if(err){
//             throw err;
//         }
//         res.send({'data':data})
//     })
// })
app.listen(3000,function(){
    console.log('guaqi')
})