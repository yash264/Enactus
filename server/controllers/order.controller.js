import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNo,
      address,
      products,
      total,
      method,
      transactionId,
    } = req.body;

    const newOrder = new Order({
      name: name,
      email: email,
      phoneNo: phoneNo,
      address: address,
      products: products,
      total: total,
      method: method,
      transactionId: transactionId,
    });

    await newOrder.save();

    return res.status(200).json({
      success: true,
      message: "Order Placed Successfully",
    });

  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Order creation failed",
    });
  }
};


export const fetchOrder = async (req, res) => {
  try {

    const query = req.query.q || "";
    const searchRegex = new RegExp(query, "i");

    const orders = await Order.find({
      $or: [
        { name: searchRegex },
        { email: searchRegex }
      ]
    }).sort({ createdAt: -1 }).lean();

    res.render("home", { orders });

  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Order creation failed",
    });
  }
};

export const particularOrder = async (req, res) => {
  try {

    const details = await Order.findById({ _id: req.params.id }).lean();

    res.render("invoice", { details });

  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Order creation failed",
    });
  }
};
