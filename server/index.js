import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import paymentRoutes from './routes/paymentRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use('/payment',paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
