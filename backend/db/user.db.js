import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()


const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("DB Connected Successfully...");
        
    } catch (error) {
        console.log({message:error.message});
        
    }
}

export default connectDB;