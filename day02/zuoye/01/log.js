var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer((req,res)=>{
    if(req.url == '/favicon.ico'){
        return;
    }
    var obj = url.parse(req.url,true).query;
    var ousername = obj.username;
    var opassword = obj.password;
    var oaccount = 'username:'+ousername+';password:'+opassword;
    fs.writeFile('./static/user.txt',oaccount+'#',{'flag':'a'},(err,data)=>{
        if(err){
            throw err
        }
        res.end('success')
    })
}).listen(3000)

