import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
