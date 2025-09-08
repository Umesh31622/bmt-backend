const mongoose = require("mongoose");

const hotelBookingSchema = new mongoose.Schema({
  refNo: String,
  bookingSource: String,
  hotelName: String,
  destination: String,
  checkinDate: Date,
  checkoutDate: Date,
  fare: Number,
  payStatus: String,
  bookStatus: String,
  cnfNumber: String,
  supplier: String,
  type: String,
  bookingCurrency: String,
  currencyRate: Number,
  assignUser: String,
}, { timestamps: true });

module.exports = mongoose.model("HotelBooking", hotelBookingSchema);
