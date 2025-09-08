const express = require('express');
const router = express.Router();
const {
  getHolidayBookings,
  createBooking,
  deleteBooking
} = require('../controllers/holidayBookingController');

router.get("/", getHolidayBookings);
router.post("/", createBooking);
router.delete("/:refNo", deleteBooking);

module.exports = router;
