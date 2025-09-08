// import mongoose from "mongoose";

// const busBookingSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   busId: { type: mongoose.Schema.Types.ObjectId, ref: "Bus", required: true },
//   seatsBooked: { type: Number, required: true },
//   bookingDate: { type: Date, default: Date.now },
//   status: { type: String, enum: ["confirmed", "pending", "cancelled"], default: "pending" }
// }, { timestamps: true });

// export default mongoose.model("BusBooking", busBookingSchema);
const mongoose = require("mongoose");

const busBookingSchema = new mongoose.Schema({
  route: { type: mongoose.Schema.Types.ObjectId, ref: "BusRoute" },
  passengerName: String,
  seatNumber: String,
  bookingDate: Date,
  status: { type: String, enum: ["booked", "cancelled"], default: "booked" },
  amount: Number,
}, { timestamps: true });

module.exports = mongoose.model("BusBooking", busBookingSchema);
