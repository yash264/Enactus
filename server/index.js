import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import paymentRoutes from './routes/paymentRoutes.js';
import newsRoutes from './routes/newsRoutes.js';

const app = express();

const corsOptions ={
  origin: "https://enactus-meta.vercel.app",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
  "Access-Control-Allow-Credentials": "*",
}; 

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use('/news',newsRoutes);
app.use('/payment',paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
