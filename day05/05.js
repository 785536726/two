var express = require('express');
var session = require('express-session')
var app = express();
app.use(session({
    name:'fcht',//session名称  默认为connect_id
    secret:"fcht",  //签名  防止信息被篡改
    resave:"false",    //强制保存为session值
    cookie:("name","value",{originalMaxAge:90000,httpOnly:true}),
    saveUninitialized:true  //初始化
}))
app.get('/set',(req,res)=>{
    // console.log(req)
    res.session.username('suc')
    res.send('suc')
})
app.get('/get',(req,res)=>{
    console.log(req.session)
    res.send()
})
app.listen(3000)