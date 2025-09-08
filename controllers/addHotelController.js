const AddHotel = require('../models/addHotelModel');

// Create hotel
exports.createHotel = async (req, res) => {
  try {
    const hotel = new AddHotel(req.body);
    await hotel.save();
    res.status(201).json(hotel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all hotels
exports.getHotels = async (req, res) => {
  try {
    const hotels = await AddHotel.find().sort({ createdAt: -1 });
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single hotel
exports.getHotelById = async (req, res) => {
  try {
    const hotel = await AddHotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(404).json({ error: 'Hotel not found' });
  }
};

// Update hotel
exports.updateHotel = async (req, res) => {
  try {
    const hotel = await AddHotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete hotel
exports.deleteHotel = async (req, res) => {
  try {
    await AddHotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Hotel deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
