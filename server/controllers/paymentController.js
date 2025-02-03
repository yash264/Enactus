import { createRazorpayInstance } from "../config/razorpay.config.js";
import crypto from "crypto";
import Order from "../models/orderModel.js";

const razorpayInstance = createRazorpayInstance();

export const createOrder = async (req, res) => {
  const { productId, amount, productName, address, name } = req.body;

  const options = {
    amount: amount * 100, // Razorpay expects amount in paise (1 INR = 100 paise)
    currency: "INR",
    receipt: `receipt_order_${productId}`,
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    console.log("order response ->", order);
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Order creation failed",
      error: error.message,
    });
  }
};

export const verifyPayments = async (req, res) => {
  const { order_id, payment_id, signature } = req.body;
  const secret = process.env.RAZORPAY_KEY_SECRET;

  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(order_id + "|" + payment_id);
  const generatedSignature = hmac.digest("hex");

  if (generatedSignature === signature) {
    const { productId, amount, productName, address, name } = req.body;

    const newOrder = new Order({
      productId,
      amount,
      productName,
      address,
      name,
      orderId: order_id,
      paymentId: payment_id,
    });

    try {
      await newOrder.save();
      return res.status(200).json({
        success: true,
        message: "Payment verified and order saved",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Payment verified but order saving failed",
        error: error.message,
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Payment verification failed",
    });
  }
};
