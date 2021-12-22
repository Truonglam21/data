const mongoose = require('mongoose');
const User=new mongoose.Schema({
    UserName:String,
    Password:String,
    Authorities:String
})
module.exports=mongoose.model('User',User);