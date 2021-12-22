const Addict=require('../models/Addict');
const getAddict=async (req, res,next) => {
    try{
    const addict =await Addict.find();
    return res.status(200).json(addict);
    }catch(err){
        next(err);
    }
}
const PostAddict=async (req, res,next) => {
    try{
        const addict=new Addict(req.body);
        await addict.save();
        return res.status(201).json(addict);
    }catch(err){
        next(err);
    }
}
const updateAddict=async (req, res, next) => {
    try{
        const { id }=req.params;
        const newAddict =req.body;
        const result=await Addict.findByIdAndUpdate(id,newAddict);
        res.status(201).json(result);
    }catch(err){
        next(err);
    }
}
const getAddictID=async (req, res,next) => {
    try{
        const { id }=req.params;
        const addict=await Addict.findById(id);
        return res.status(200).json(addict);
    }catch(err){
        next(err);
    }
}
const DeleteAddict = async (req, res,next) => {
    try{
        const { id }=req.params;
        const data=await Addict.findById(id);
        await data.remove();
        return res.status(200).json(data);
    }catch(err){

    }
}
module.exports ={
    getAddict,PostAddict,updateAddict,getAddictID,DeleteAddict
}