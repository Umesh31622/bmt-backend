const HotelAmendment = require("../models/hotelAmendmentModel");

// GET with filters
exports.getHotelAmendments = async (req, res) => {
  try {
    const filters = {};

    if (req.query.key && req.query.value) {
      filters[req.query.key] = { $regex: req.query.value, $options: 'i' };
    }

    if (req.query.fromDate && req.query.toDate) {
      filters.createdAt = {
        $gte: new Date(req.query.fromDate),
        $lte: new Date(req.query.toDate)
      };
    }

    const results = await HotelAmendment.find(filters).sort({ createdAt: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add
exports.addHotelAmendment = async (req, res) => {
  try {
    const data = await HotelAmendment.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
