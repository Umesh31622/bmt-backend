const ConvenienceFee = require('../models/convenienceFeeModel');

// GET all convenience fees
const getFees = async (req, res) => {
  try {
    const fees = await ConvenienceFee.find();
    res.json(fees);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch fees" });
  }
};

// POST new convenience fee
const addFee = async (req, res) => {
  try {
    const fee = new ConvenienceFee(req.body);
    await fee.save();
    res.status(201).json(fee);
  } catch (err) {
    res.status(400).json({ message: "Failed to add fee", error: err.message });
  }
};

module.exports = { getFees, addFee };
