// models/exchangeRateModel.js
const mongoose = require("mongoose");

const exchangeRateSchema = new mongoose.Schema(
  {
    fromCurrency: { type: String, required: true },
    toCurrency: { type: String, required: true },
    rate: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExchangeRate", exchangeRateSchema);
