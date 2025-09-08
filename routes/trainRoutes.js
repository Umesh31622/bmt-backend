// // const express = require("express");
// // const router = express.Router();
// // const { getTrains } = require("../controllers/trainController");

// // router.get("/", getTrains);

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const {
//   getTrainRoutes,
//   searchTrains,
//   getPNRStatus,
//   bookTrain
// } = require('../controllers/trainController');

// // Train Management Routes
// router.get('/routes', getTrainRoutes);
// router.get('/search', searchTrains);
// router.get('/pnr/:pnr', getPNRStatus);
// router.post('/book', bookTrain);

// // Additional train management endpoints
// router.get('/bookings', async (req, res) => {
//   try {
//     const TrainBooking = require('../models/TrainBooking');
//     const bookings = await TrainBooking.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: bookings });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// router.put('/booking/:id/status', async (req, res) => {
//   try {
//     const TrainBooking = require('../models/TrainBooking');
//     const { status } = req.body;
//     const booking = await TrainBooking.findByIdAndUpdate(
//       req.params.id,
//       { bookingStatus: status },
//       { new: true }
//     );
//     res.json({ success: true, data: booking });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// module.exports = router;
// routes/trainRoutes.js

const express = require("express");
const { getLiveTrainRoute } = require("../controllers/trainRouteController");
const router = express.Router();

router.get("/route", getLiveTrainRoute);

module.exports = router;
