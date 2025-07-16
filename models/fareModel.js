const mongoose = require('mongoose');

const fareSchema = new mongoose.Schema({
  supplierFareType: { type: String, required: true },
  apiFareType: { type: String, required: true },
  apiSupplier: { type: String, required: true, default: 'TBO' },
}, { timestamps: true });

module.exports = mongoose.model('Fare', fareSchema);
