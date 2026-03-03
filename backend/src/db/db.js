const mongoose=require("mongoose");
async function connectDB(){
    await mongoose.connect("mongodb+srv://choubeyom873_db_user:Post47post47@cluster0.np6a2po.mongodb.net/project-1")
    console.log("DB connected");
}
module.exports=connectDB;