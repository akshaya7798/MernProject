import userModel from "../models/userModel.js"
//add
const addToCart = async (req, res) => {
try {
  let userData=await userModel.findById(req.body.userId)
 let cartData=await userData.cartData;
  if(!cartData[req.body.itemId]){
    cartData[req.body.itemId]=1
  }else{
    cartData[req.body.itemId]+=1;


  }
  await userModel.findByIdAndUpdate(req.body.userId,{cartData});
  res.json({success:true,message:"added"})
} catch (error) {
console.error(error); res.json({ success: false, message: "Error while adding to cart" }); 
}
};
//remove
const removeFromCart = async (req, res) => {
try { 
 let  userData = await userModel.findById(req.body.userId); 
 let cartData=await userData.cartData;
 if (cartData[req.body.itemId] > 0) 
  { cartData[req.body.itemId] -= 1; } 
 await userModel.findByIdAndUpdate(req.body.userId, { cartData });
  res.json({ success: true, message: "Removed from cart" }); 
} catch (error) { 
  console.log(error); 
  res.json({ success: false, message: "Failed to remove from cart" }); } 
};
//fetch
const getCart= async (req,res)=>{
try {
let userData=await userModel.findById(req.body.userId);
 let cartData=await userData.cartData; 
 res.json({success:true,cartData}) 
} catch (error) {
res.json({success:false,message:"error"}); 
}
}
export {addToCart,removeFromCart,getCart}
