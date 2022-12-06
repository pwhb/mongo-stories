import { MONGODB_URI } from '$env/static/private'
import mongoose from "mongoose";

export const connectDB = mongoose.connect(MONGODB_URI).then(() => {
    console.log("MongoDB connected!")
})