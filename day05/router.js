// 接口编写文件
var express = require('express');
var app = express();
var router = express.Router();
router.post('/login',(req,res)=>{
    var data = {
        "username":'admin',
        "password":123
    }
    var result = [{"username":"admin","password":"123","phone":"1326318"}]
    if(req.body.username == data.username&&req.body.password == data.password){
        
         res.send({"success":"ok","data":result})
    }else{
        res.send({"error":"u哦那个户名需哦呜"})
    }
})
// post方法需要使用工具postman：接口测试工具
// module.exports = router;
exports.router = router;