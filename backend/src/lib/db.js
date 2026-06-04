import mongoose from 'mongoose';
import {ENV} from './env.js';

export const connectDB = async() => {
    try {
        if (!ENV.DB_URL) {
            throw new Error('DB_URL is missing. Check your .env file and env loading.');
        }
        const con = await mongoose.connect(ENV.DB_URL);
        console.log("Connected to MongoDB:", con.connection.host);
    }
    catch(error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // 0: success, 1: error
    }
}