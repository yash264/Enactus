import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from './connection.js';
import orderRoutes from './routes/order.routes.js';

const PORT = process.env.PORT 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });


dotenv.config();
const app = express();

connectDB();

app.use(express.json());


const corsOptions ={
  origin: 'http://localhost:3000',
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}; 

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', orderRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

