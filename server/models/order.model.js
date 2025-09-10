import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  products: [
    {
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  method: {
    type: String,
    enum: ['online', 'cod'],
    required: true,
  },
  transactionId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("order", orderSchema);

export default Order;
