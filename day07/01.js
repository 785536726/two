// var express=require("express");
// var app=express();
// var db=require("./add");
// var router=express.Router();
// var bodyParser=require("body-parser");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(router)
// router.post("/reg",(req,res)=>{
//     var resData={
//                 username:req.body.username,
//                 password:req.body.password,
//                 email:req.body.email,
//                 phone:req.body.phone,
//             }
//     db.add("test",resData,(err,result)=>{
//         if(err){
//             throw err
//         }
//         res.send("success");
//     })
// })
// app.listen(3000,()=>{
//     console.log("挂载")
// })