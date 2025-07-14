import mongoose from "mongoose";

const DB = process.env.DATABASE_URL;
const connectToDatabase = async() =>{
    try{
        await mongoose.connect(DB);
    }
    catch(err){
        console.error(err);
    }
}

export default connectToDatabase;