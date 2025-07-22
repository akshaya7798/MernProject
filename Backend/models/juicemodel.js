import mongoose from "mongoose";

const juiceSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})
const juiceModel=mongoose.models.juice|| mongoose.model("juice",juiceSchema);

export default juiceModel;