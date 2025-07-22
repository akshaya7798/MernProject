import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import juiceRouter from "./routes/juiceRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app
const app=express()
const port= process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors())
//db connection
connectDB();
//api endpoints

app.use("/api/juice",juiceRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://kattaakshaya07:FIfHecaYcMsfXzKI@cluster0.dcqzxq1.mongodb.net/?