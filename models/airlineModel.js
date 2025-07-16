const mongoose = require('mongoose');

const airlineSchema = new mongoose.Schema({
  airlineImage: String,
  airlineCode: String,
  airlineName: String,
  contactNo: String,
  isLcc: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Airline', airlineSchema);
