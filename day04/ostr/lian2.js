var express = require('express');
var bodyParser = require('body-parser');
app = express();
// console.log(bodyParser())
app.use(bodyParser())
app.get('/',(req,res)=>{
    res.send('首页')
})
// app.get('/send',(req,res)=>{
//     console.log(req.query)
//     res.send('send')
// })
// app.post('/send',(req,res)=>{
//     console.log(req.body)
//     res.send('send')
// })
app.use('/send/:id',(req,res)=>{
    console.log(req.params)
    res.send('send')
})
app.listen(2000)