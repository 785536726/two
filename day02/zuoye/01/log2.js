var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf8' });
    if (req.url == '/favicon.ico') {
        return
    }
    var obj = url.parse(req.url, true).query;
    var ousername = obj.username;
    var opassword = obj.password;
    var oaccount = 'username:'+ousername+';password:'+opassword;
    // console.log(message);
    fs.readFile('./static/user.txt', (err, data) => {
        var arr = data.toString().split('#');
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i])
            if (arr[i] == oaccount) {
                res.end('登陆成功')
            } 
        }
        res.end('密码错误')
    })
}).listen(2000)