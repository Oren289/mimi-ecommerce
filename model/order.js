const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: String,
  username: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    default: [],
  },
  total: Number,
  userinfo: {
    type: Array,
    default: [],
  },
  deliveryOption: String,
  timestamp: Date,
  paymentMethod: String,
  paymentStatus: String,
  accountNumber: String,
  accountName: String,
  productReadyStatus: Boolean,
  deliveredStatus: Boolean,
  grandTotal: Number,
});

const Order = new mongoose.model("order", orderSchema);

module.exports = Order;
