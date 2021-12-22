const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const multer=require('multer');
const app=express();
app.listen(3030,()=>console.log('listening on port 3030'))
app.set("view engine","ejs");
app.set("views","./views");
app.get("/",(req,res)=>{
    res.render("User")
})