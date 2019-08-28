var express = require('express');
var app = express();
var router = require('./router').router;
var indexRouter = require('./indexRouter').router;
// app.get 基于服务端的写法
console.log(router)
app.use(router)
// router已经是Router方法调用之后的
// 中间件使用前需要use
// router.get('/login',(res,req,next)=>{

//     res.send('login')
// });
// console.log(router)
app.listen(3000)