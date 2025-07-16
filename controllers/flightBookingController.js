const FlightBooking = require("../models/FlightBooking");

exports.getBookingsByDate = async (req, res) => {
  const { fromDate, toDate } = req.query;

  try {
    const bookings = await FlightBooking.find({
      bookingDate: {
        $gte: new Date(fromDate),
        $lte: new Date(toDate)
      }
    });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
