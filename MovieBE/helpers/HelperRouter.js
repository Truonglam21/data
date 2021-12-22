const Joi=require("@hapi/joi");
const validateParam=(schema,name)=>{
    return (req,res,next)=>{
        console.log('Params...',req.params[name])
        const result=schema.validate({param: req.params[name]});
        console.log(result)
    }
};
const validateBody=(schema)=>{
    return (req,res,next)=>{
        const Result=schema.validate({name:req.body.name});
        if(Result.error){
            return res.status(400).json(Result.error);
        }
        else{
            next();
        }
    }
}
const schemas={
    idSchema:Joi.object().keys({
        param:Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
    }),
    userSchema:Joi.object({
        name:Joi.string().min(2).required()
    })
}
module.exports ={
    validateParam,schemas,validateBody
}