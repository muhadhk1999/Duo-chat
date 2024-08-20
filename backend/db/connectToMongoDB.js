import mongoose from "mongoose";

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(`mongodb+srv://muhadhk1999:XtQZEN7ZCwwxkIxY@cluster0.ybmn46k.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("connected to mongoDB");
    } catch (error) {
        console.log("error connecting mongoDB",error.message);
    }
}

export default connectToMongoDB;