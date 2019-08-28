var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    if(req.url == '/'){
        res.end("首页")
    }else if(req.url == '/red'){
        console.log('red')
        fs.readFile("./html/red.html",function(err,data){
            // fs.readFile("./static/color.css",function(err,data){
            res.end(data)
            // })
        })
        console.log('red')
    }else if(req.url == '/blue'){
        console.log('blue')
        fs.readFile("./html/blue.html",function(err,data){
            res.end(data)
        })
    }else if(req.url == '/static/color.css'){
        console.log('color')
        res.writeHead(200,{"Content-type":"text/css"})
        fs.readFile("./static/color.css",function(err,data){
            res.end(data)
        })
    }else if(req.url == '/static/95.1.jpg'){
        console.log('img')
        res.writeHead(200,{"Content-type":"image/jpeg"})
        fs.readFile("./static/95.1.jpg",function(err,data){
            res.end(data)
        })
    }
    console.log(req.url);   


    // res.end('success')
}).listen(3000,function(){
    console.log('success')
})
// var server = http.createServer();
// server.listen('3300','localhost',function(){
//     console.log('success');
    
// })   
// server.on('request',function(req,res){
//     if(req.url == '/'){
//         fs.readFile('./static/red.html',function(err,data){
//             res.write(data);
//             res.end();
//         })
//     }else if(req.url.startsWith('/sta')){
//         fs.readFile(__dirname + req.url,function(err,data){
//             res.write(data);
//             res.end();
//         })
//     }
// })