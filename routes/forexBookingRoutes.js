// // routes/forexBookingRoutes.js
// import express from "express";
// import {
//   createBooking,
//   getBookings,
//   updateBookingStatus,
//   deleteBooking,
// } from "../controllers/forexBookingController.js";

// const router = express.Router();

// router.post("/forex-bookings", createBooking);         // Create booking
// router.get("/forex-bookings", getBookings);            // Get all bookings
// router.put("/forex-bookings/:id", updateBookingStatus); // Update booking status
// router.delete("/forex-bookings/:id", deleteBooking);    // Delete booking


// export default router;
const express = require("express");
const {
  createBooking,
  getBookings,
  updateBookingStatus,
  deleteBooking,
} = require("../controllers/forexBookingController.js");

const router = express.Router();

router.post("/forex-bookings", createBooking);          // Create booking
router.get("/forex-bookings", getBookings);             // Get all bookings
router.put("/forex-bookings/:id", updateBookingStatus); // Update booking status
router.delete("/forex-bookings/:id", deleteBooking);    // Delete booking

module.exports = router;

