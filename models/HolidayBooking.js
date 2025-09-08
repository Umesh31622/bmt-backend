const mongoose = require("mongoose");

const holidayBookingSchema = new mongoose.Schema({
  refNo: String,
  name: String,
  package: String,
  duration: String,
  travelDate: String,
  bookingStatus: String,
  price: Number,
  type: String,
  currency: String,
  currencyRate: String,
  assign: String,
  createdAt: String
});

module.exports = mongoose.model("HolidayBooking", holidayBookingSchema);
