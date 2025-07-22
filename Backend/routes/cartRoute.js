import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js"
import authmidware from "../middleware/auth.js";

const cartRouter =express.Router();
cartRouter.post("/add",authmidware,addToCart)
cartRouter.post("/remove",authmidware,removeFromCart)
cartRouter.post("/get",authmidware,getCart)

export default cartRouter;