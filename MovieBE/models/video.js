const mongoose = require('mongoose');
const video=mongoose.Schema({
    title:String,
    description:String,
    key:String,
    image:String,
    createdAt:{type:Date,default:Date.now},
    updateAt:{type:Date,default:Date.now}
})
module.exports =mongoose.model('video',video);