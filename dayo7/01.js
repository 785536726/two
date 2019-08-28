var express=require("express");
var app=express();
var db=require("./db");
var router=express.Router();
var bodyParser=require("body-parser");
app.use(express.static("./static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);
router.post("/reg",(req,res)=>{
    var resData={
                username:req.body.username,
                password:req.body.password,
                email:req.body.email,
                phone:req.body.phone,
            }
    db.add("userData",resData,(err,result)=>{
        if(err){
            throw err
        }
        res.send("success");
    })
})

router.get("/login",(req,res)=>{
    var useData={
        username:req.query.username,
        password:req.query.password
    }
    // 进行数据库的检索
    // console.log(useData)
    db.find("userData",useData,(err,data)=>{
        console.log(data)
        // res.send('suc')
        // if(data){
        //     res.send('登陆成功')
        // }else{
            res.send('用户名或密码错误')
        // }
    })
})
app.listen(3000,()=>{
    console.log("挂载")
})