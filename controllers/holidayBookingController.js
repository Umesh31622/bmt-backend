const HolidayBooking = require("../models/HolidayBooking");

exports.getHolidayBookings = async (req, res) => {
  try {
    const {
      businessType,
      searchKey,
      value,
    } = req.query;

    let query = {};

    if (businessType) {
      query.type = businessType;
    }

    if (searchKey && value) {
      query[searchKey.toLowerCase()] = { $regex: value, $options: "i" };
    }

    const data = await HolidayBooking.find(query).sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const booking = new HolidayBooking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking created", booking });
  } catch (err) {
    res.status(500).json({ message: "Failed to create booking" });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const { refNo } = req.params;
    await HolidayBooking.deleteOne({ refNo });
    res.json({ message: `Booking ${refNo} deleted` });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete booking" });
  }
};
