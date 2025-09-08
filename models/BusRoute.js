// import mongoose from "mongoose";

// const busSchema = new mongoose.Schema({
//   busNumber: { type: String, required: true },
//   operator: { type: String, required: true },
//   source: { type: String, required: true },
//   destination: { type: String, required: true },
//   departureTime: { type: String, required: true },
//   arrivalTime: { type: String, required: true },
//   seatsAvailable: { type: Number, required: true },
//   fare: { type: Number, required: true },
// }, { timestamps: true });

// export default mongoose.model("Bus", busSchema);
const mongoose = require("mongoose");

const busRouteSchema = new mongoose.Schema({
  fromCity: { type: String, required: true },
  toCity: { type: String, required: true },
  distance: { type: Number }, 
  duration: { type: String },
  status: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("BusRoute", busRouteSchema);
