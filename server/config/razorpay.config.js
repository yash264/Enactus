import razorpay from "razorpay";
import dotenv from "dotenv"

dotenv.config();

export const createRazorpayInstance = () => {
    return new razorpay({
        key_id: process.env.RAZORPAY_KEY_ID || '1234',
        key_secret: process.env.RAZORPAY_KEY_SECRET
    });
}
