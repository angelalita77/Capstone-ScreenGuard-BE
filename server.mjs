// Imports
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { globalErr, log } from './middleware/middleware.mjs';
import connectDB from './db/conn.mjs';
import cors from 'cors';


//Import Routes
import userRoutes from "./routes/userRoutes.mjs"
import videoRoutes from "./routes/videoRoutes.mjs"


// Setups
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

// DB Connection
connectDB();


// Middleware
app.use(cors());
app.use (express.json());
app.use(log)


// Routes
app.use("/api/register/parent", userRoutes)
app.use("/api/videos", videoRoutes);

// Global Err Handling
app.use(globalErr);
// Listener
app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
});

