// 接口编写文件
var express = require('express');
var app = express();
var router = express.Router();
router.get('/news',(req,res)=>{
    res.send({"news":"null"})
})
// module.exports = router;
exports.router = router;