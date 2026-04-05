const mongoose=require("mongoose");
async function connectDB(){
    await mongoose.connect(process.env.MONGODB_CONEECTION);
    console.log("DB connected");
}
module.exports=connectDB;