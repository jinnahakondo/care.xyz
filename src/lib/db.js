import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error("MONGODB_URI environment variable is not defined");
}

export default async function connectDB() {
    if (mongoose.connection.readyState === 1) {
        console.log("Already connected");
        return;
    }

    await mongoose.connect(uri);
    console.log("MongoDB Connected");
}