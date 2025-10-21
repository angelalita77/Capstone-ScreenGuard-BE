import mongoose from "mongoose";
import dotenv from 'dotenv'

// load environment variables from a .env file into process.env
dotenv.config()

const connectionStr = process.env.mongoURI || "";

//initiate connection to MongoDB database
async function connectDB() {
    try {
        await mongoose.connect(connectionStr);
        console.log("✅ MongoDB Connection successful!")
    } catch (err) {
        console.error(`❌ DB Connection Error - ${err.message}`);
        process.exit(1) // terminate DB connection
        
    }
}

export default connectDB;