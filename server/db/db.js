import mongoose from "mongoose";

const DB = process.env.DATABASE_URL;

if(!DB){
    throw new Error("DATABASE_URL environment variable is required");
}

const connectToDatabase = async() =>{
    try{
        await mongoose.connect(DB);
        console.log("Database connected successfully");
    }
    catch(err){
        console.error("Database connection failed:", err);
        throw err;
    }
}

export default connectToDatabase;