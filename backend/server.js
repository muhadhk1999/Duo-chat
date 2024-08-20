//package imports....
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

//file imports....
import authRoute from "./routes/auth.route.js"
import messageRoute from "./routes/message.route.js"
import userRoute from "./routes/user.route.js"
import connectToMomgoDB from "./db/connectToMongoDB.js"

//variables...
const app = express()
const PORT = process.env.PORT || 3000

dotenv.config()
console.log(process.env.MONGO_DB_URI, 'gfshddfhg');

//middlewares...
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth",authRoute)
app.use("/api/message",messageRoute)
app.use("/api/user",userRoute)

// app.get("/", (req,res) => { 
//     res.send("helllllloooooooo")
// })



app.listen(PORT, async()=> {
    await connectToMomgoDB()
    console.log("backend is running...")
})

