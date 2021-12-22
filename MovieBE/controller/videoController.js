const Video=require('../models/video');
const getVideo=async (req, res, next) => {
    try{
        const data=await Video.find();
        return res.render('Video')
    }
    catch(err){
        next(err);
    }
}
const addVideo = async (req, res, next) => {
    try{
        const video=new Video(req.body);
        const data=await video.save();
        return res.status(200).json(data);
    }catch(err){
        next(err);
    }
}
const updateVideo = async (req, res, next) => {
    try{
        const video=req.body;
        const { id }=req.params;
        const data=await Video.findByIdAndUpdate(id, video);
        return res.status(200).json(data);
    }catch(err){
        next(err);
    }
}
const deleteVideo = async (req, res, next) => {
    try{
        const { id }=req.params;
        const data=await Video.findById(id);
        await data.remove()
        return res.status(200).json(data);
    }catch(err){
        next(err);
    }
}
const getVideoID = async (req, res, next) => {
    try{
        const { id }=req.params;
        const data=await Video.findById(id);
        return res.status(200).json(data);
    }catch(err){
        next(err);
    }
}
module.exports ={
    getVideo,addVideo,deleteVideo,updateVideo,getVideoID
}