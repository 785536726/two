var http = require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    if(req.url == '/favicon.ico'){
        return
    }
// 读取内容
    // fs.readFile("./txt/01.txt",(err,data)=>{
    //     res.end(data)
    // })
    //修改内容 
    // fs.writeFile("./txt/02.txt","abcdefg",{flag:'a'},(err)=>{
    //     if(err){
    //         throw err;
    //     }
    //     res.end("success")
    // })
// 修改文件名
    // fs.rename("./txt/02.txt","./txt/second.txt",(err)=>{
    //     if(err){
    //         throw err;
    //     }
    //     res.end("success")
    // })
// 删除文件
    // fs.unlink("./txt/second.txt",(err)=>{
    //     if(err){
    //         throw err;
    //     }
    //     res.end("success")
    // })
// 创建文件夹
    // fs.mkdir("./createDir",(err)=>{
    //     if(err){
    //         throw err;
    //     }
    //     res.end("success")
    // })
    // // 删除文件夹
    // fs.rmdir("./createDir",(err)=>{
    //     if(err){
    //         throw err;
    //     }
    //     res.end("success")
    // })
    // 读取文件夹
    // fs.readdir("../../nodedemo",(err,data)=>{
    //     if(err){
    //         throw err;
    //     }else{
    //         res.end(data.toString())
    //     }
    // })

// 判断文件夹是否存在
    // fs.exists("./createDir",(exists)=>{
    //     if(exists){
    //         console.log('文件夹已存在');
    //     }else{
    //         fs.mkdir("./createDir",(err)=>{
    //             if(err){
    //                 throw err;
    //             }
    //         })
    //     }
    // })
// 判断文件还是文件夹
    fs.stat("./txt/01.txt",(err,stats)=>{
        console.log(stats.isDirectory());
        res.end('success')
    })
}).listen(3000)