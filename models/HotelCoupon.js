const mongoose = require("mongoose");

const hotelCouponSchema = new mongoose.Schema({
  couponCode: String,
  regionType: String,
  starRating: [String],  // example: ["4", "3", "2", "1"]
  couponType: { type: String, enum: ["Fixed", "Percentage"] },
  value: Number,
  maxLimit: Number,
  useLimit: Number,
  expireFrom: Date,
  expireTo: Date,
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" }
}, { timestamps: true });

module.exports = mongoose.model("HotelCoupon", hotelCouponSchema);
