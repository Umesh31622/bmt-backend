const mongoose = require("mongoose");

const flightDiscountSchema = new mongoose.Schema({
  discountFor: {
    type: String,
    enum: ["B2C", "B2B"],
    required: true,
  },
  agentClass: [String], // e.g. ['Diamond', 'Gold']
  airlineCode: [String], // e.g. ['6E', 'ANY']
  flightType: [String],  // ['Domestic', 'International']
  journeyType: [String], // ['Oneway', 'Round-trip']
  discountType: {
    type: String,
    enum: ['Fixed', 'Percent'],
    required: true
  },
  amount: Number,
  cabinClass: [String], // ['Economy', 'PremiumEconomy', 'Business']
  fromDate: Date,
  toDate: Date
}, { timestamps: true });

module.exports = mongoose.model("FlightDiscount", flightDiscountSchema);
