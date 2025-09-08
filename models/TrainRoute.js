// // const mongoose = require("mongoose");

// // const trainSchema = new mongoose.Schema({
// //   origin: String,
// //   destination: String,
// //   departure_time: String,
// //   arrival_time: String,
// //   duration: String,
// //   fare: Number,
// //   convenience_fee: Number,
// //   total_fare: Number,
// // });

// // module.exports = mongoose.model("Train", trainSchema);
// import mongoose from "mongoose";

// const trainSchema = new mongoose.Schema({
//   trainNumber: { type: String, required: true },
//   trainName: { type: String, required: true },
//   source: { type: String, required: true },
//   destination: { type: String, required: true },
//   departureTime: { type: String, required: true },
//   arrivalTime: { type: String, required: true },
//   seatsAvailable: { type: Number, required: true },
//   fare: { type: Number, required: true },
// }, { timestamps: true });

// export default mongoose.model("Train", trainSchema);
const mongoose = require("mongoose");

const trainRouteSchema = new mongoose.Schema({
  trainNo: {
    type: String,
    required: true,
  },
  trainName: {
    type: String,
  },
  source: {
    code: { type: String, required: true },
    name: { type: String, required: true }
  },
  destination: {
    code: { type: String, required: true },
    name: { type: String, required: true }
  },
  duration: {
    type: String, // "10h 25m" format
  },
  route: [
    {
      stationCode: String,
      stationName: String,
      arrival: String,
      departure: String,
      day: Number,
      distance: Number
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("TrainRoute", trainRouteSchema);
