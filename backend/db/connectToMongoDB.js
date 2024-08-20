import mongoose from "mongoose";

const connectToMomgoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("connected to mongoDB");
    } catch (error) {
        console.log("error connecting mongoDB",error.message);
    }
}

export default connectToMomgoDB;