import express from "express";
import { createOrder, fetchOrder, particularOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post('/createOrder', createOrder);

router.get('/', fetchOrder)
router.get('/invoice/:id', particularOrder)

export default router;

