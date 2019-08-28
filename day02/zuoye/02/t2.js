var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer((req,res)=>{
    if(req.url == '/favicon.ico'){
        return
    }
    fs.readdir('../../zuoye',(err,data)=>{
        if(err){
            throw err
        }else{
            var odata = data.toString().split(',');
            for(let i = 0;i < odata.length;i++){
                fs.stat('../'+odata[i],(err,stats)=>{
                    // console.log();
                    if(stats.isDirectory()){
                        console.log(odata[i]);
                    }
                })
            }
            res.end('success')

        }
        
    })
    // res.end('success');
}).listen(3000)