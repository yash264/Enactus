import express from "express";
import { createOrder, verifyPayments } from "../controllers/paymentController.js";

const router = express.Router();

router.post('/createOrder',createOrder);

router.post('/verifyPayment',verifyPayments);

export default router;
