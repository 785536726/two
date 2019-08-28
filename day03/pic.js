var http = require('http');
var fd = require('formidable');
var path = require('path');
var sd = require('silly-datetime');
var fs = require('fs');
// var obj = path.extname('E:\前端\练习\正课\25\last\nodedemo\day03\pic.js');
// var obj = path.basename('last/nodedemo/day03/pic.js')
// var obj = path.normalize('last/////////nodedemo/day03/pic.js')
// var obj = path.join('a','b','c','d')
var obj = path.dirname('last/nodedemo/day03/pic.js')
// console.log(path.isAbsolute('前端/练习/正课/25/last/nodedemo/day03'))
console.log(obj);
// http.createServer((req,res)=>{
//     if(req.url == '/send' && req.method == 'POST'){
//         var form = new fd.IncomingForm()
//         form.uploadDir = './uploads'
//         form.parse(req,function(err,fields,files){
//             // console.log(files)
//             // var username = fields.username;
//             var oldPath = files.pic.path;
//             var extname = path.extname(files.pic.name);
//             var tt = sd.format(new Date(),"YYYYMMDDHHmmss");
//             var newPath = "./uploads/"+tt+extname;
//             console.log(newPath)
//             fs.rename(oldPath,newPath,(err)=>{
//                 if(err){
//                     throw err
//                 }
//             })
//             res.end('success')

//         })
//     }
// }).listen(3000)