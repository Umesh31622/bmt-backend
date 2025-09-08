// models/ForexBooking.js
import mongoose from "mongoose";

const forexBookingSchema = new mongoose.Schema(
  {
    bookingId: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    currency: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Confirmed", "Cancelled"], default: "Pending" },
  },
  { timestamps: true }
);

export default mongoose.model("ForexBooking", forexBookingSchema);
