const express = require("express");
const router = express.Router();
const { getBookingsByDate } = require("../controllers/flightBookingController");

router.get("/by-date", getBookingsByDate);

module.exports = router;
