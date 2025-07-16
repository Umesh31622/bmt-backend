const FlightMarkup = require('../models/flightMarkupModel'); // ✅ CORRECT PATH

exports.createMarkup = async (req, res) => {
  try {
    const newMarkup = await FlightMarkup.create(req.body);
    res.status(201).json(newMarkup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllMarkups = async (req, res) => {
  try {
    const allMarkups = await FlightMarkup.find();
    res.json(allMarkups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
