const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const mongoose=require('mongoose');
const config=require('./config/config');
const app = express();
const routesAddict = require('./router/addict');
const routerUser=require('./router/User');
const RouterVideo=require('./router/video')
//listen port
app.listen(3000,()=>console.log('Listen Successfully'));
app.use(express.static('public'));
//connect mongoose
mongoose.connect(config.API_URL)
.then(()=>console.log('Ket Noi Thanh Cong'))
.catch(err => console.log("Ket Noi That Bai "+err))
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
//Middle ware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/addict',routesAddict);
app.use('/User',routerUser);
app.use('/Video',RouterVideo)
app.get((req, res) =>{
    return res.status(200).json({
        message:'Thanh Cong'
    });
})

//catch 4040 Error and forward them to error handler
app.use((req,res,next) => {
    const err=new Error('Not Found')
    err.status = 404
    next(err)
})

//error handler function
app.use((err,req,res,next) => {
    const status = err.status || 500 //không tìm được lỗi thì sẽ là lỗi 500
    //response to client
    res.status(status).json({
        error:{
            message: error.message
        }
    })
})
