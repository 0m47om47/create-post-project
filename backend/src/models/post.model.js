const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
    image:String,
    captaion:String,
})
const postModel=mongoose.model("post",postSchema)
module.exports=postModel;
