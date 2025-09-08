const express = require("express");
const router = express.Router();
const {
  getHotelBookings,
  addHotelBooking
} = require("../controllers/hotelBookingController");

router.get("/", getHotelBookings);
router.post("/", addHotelBooking);

module.exports = router;
