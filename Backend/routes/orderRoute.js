import express from "express"
import authmidware from "../middleware/auth.js"
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderController.js"
const orderRouter=express.Router();
orderRouter.post("/place",authmidware,placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authmidware,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)
export default orderRouter;
