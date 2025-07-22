import mongoose from "mongoose";

export const connectDB =async()=>{
     await mongoose.connect('mongodb+srv://kattaakshaya07:FIfHecaYcMsfXzKI@cluster0.dcqzxq1.mongodb.net/Juice-del').then(()=>console.log("DB connected"));


}