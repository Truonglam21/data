const User = require('../models/User');
const getUser=async (req, res,next) => {
    try{
    const user =await User.find();
    return res.status(200).json(user);
    }catch(err){
        next(err);
    }
}
const PostUser=async (req, res,next) => {
    try{
        const user=new User(req.body);
        await user.save();
        return res.status(201).json(user);
    }catch(err){
        next(err);
    }
}
const updateUser=async (req, res, next) => {
    try{
        const { id }=req.params;
        const newUser =req.body;
        const result=await User.findByIdAndUpdate(id,newUser);
        res.status(201).json(result);
    }catch(err){
        next(err);
    }
}
const getUserID=async (req, res,next) => {
    try{
        const { id }=req.params;
        const user=await User.findById(id);
        return res.status(200).json(user);
    }catch(err){
        next(err);
    }
}
const DeleteUser = async (req, res,next) => {
    try{
        const { id }=req.params;
        const data=await User.findById(id);
        await data.remove();
        return res.status(200).json(data);
    }catch(err){

    }
}
module.exports ={
    getUser,PostUser,updateUser,getUserID,DeleteUser
}