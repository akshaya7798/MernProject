import juiceModel from "../models/juicemodel.js";
import fs from 'fs'


//add juice item

const addJuice = async (req, res) => {
    console.log("req.file:", req.file); 
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }

    const image_filename = req.file.filename;

    const juice = new juiceModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    await juice.save();
    res.json({ success: true, message: "Juice added successfully" });
  } catch (error) {
    console.error("Error adding juice:", error);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};
//all juice lst
const listJuice=async(req,res)=>{
    try{
        const juices=await juiceModel.find({});
        res.json({success:true,data:juices})
    }catch(error){
        console.log(error);
         res.json({success:false,message:"error"})
    }
}
// remove 
const removeJuice=async (req,res)=>{
    try{
        const juice=await juiceModel.findById(req.body.id);
        fs.unlink(`uploads/${juice.image}`,()=>{})
        await juiceModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"juice removed"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"error"})

    }
}
export {addJuice,listJuice,removeJuice}