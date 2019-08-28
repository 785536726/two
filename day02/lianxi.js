var http = require("http");
var url = require("url");
// console.log(url.parse('http://127.0.0.1:3000'));
// var obj = url.format('http://127.0.0.1:3000/a/c/d');
// var obj = url.resolve("http://127.0.0.1:3000/a/c/d","/b")
// var obj = url.format({
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: '',
//     port: '3000',
//     hostname: '127.0.0.1',
//     hash: null,
//     search: null,
//     query: null,
//     pathname: '',
//     path: 'c',
//     href: '' 
// })
// console.log(obj)
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    var obj = url.parse(req.url,true).query;
    // console.log(url.parse(req.url,true))
    // console.log(url.parse(req.url))
    console.log(url.parse(req.url).query)
    res.end("接收到的用户名"+obj.username)
}).listen(3000)