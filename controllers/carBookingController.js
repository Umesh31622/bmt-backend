const CarBooking = require('../models/carBookingModel');

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await CarBooking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bookings', error: err.message });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const newBooking = new CarBooking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ message: 'Error creating booking', error: err.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    await CarBooking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting booking', error: err.message });
  }
};
