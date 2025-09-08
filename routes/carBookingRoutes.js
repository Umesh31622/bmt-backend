const express = require('express');
const router = express.Router();
const carBookingController = require('../controllers/carBookingController');

router.get('/', carBookingController.getAllBookings);
router.post('/', carBookingController.createBooking);
router.delete('/:id', carBookingController.deleteBooking);

module.exports = router;
