// controllers/forexBookingController.js
import ForexBooking from "../models/ForexBooking.js";

// ✅ Create new booking
export const createBooking = async (req, res) => {
  try {
    const { bookingId, userName, userEmail, currency, amount } = req.body;

    const newBooking = new ForexBooking({
      bookingId,
      userName,
      userEmail,
      currency,
      amount
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error: error.message });
  }
};

// ✅ Get all bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await ForexBooking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error: error.message });
  }
};

// ✅ Update booking status
export const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const booking = await ForexBooking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!booking) return res.status(404).json({ message: "Booking not found" });

    res.status(200).json({ message: "Booking updated successfully", booking });
  } catch (error) {
    res.status(500).json({ message: "Error updating booking", error: error.message });
  }
};

// ✅ Delete booking
export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await ForexBooking.findByIdAndDelete(id);

    if (!booking) return res.status(404).json({ message: "Booking not found" });

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking", error: error.message });
  }
};
