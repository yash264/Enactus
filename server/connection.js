import mongoose from 'mongoose';
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Successfully");
  } 
  catch (error){
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;