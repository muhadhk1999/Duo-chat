import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path'

// Import routes and database connection
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import userRoute from "./routes/user.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

// socket 
import {app, server} from './socket/socket.js';

// Variables
dotenv.config(); // Load environment variables
const PORT = process.env.PORT  

const __dirname = path.resolve();

// Middlewares
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

// Connect to database and start server
server.listen(PORT, async () => {
    await connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
