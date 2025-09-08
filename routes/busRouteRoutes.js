// const express = require('express');
// const router = express.Router();
// const { getBusRoutes, bookBus } = require('../controllers/busController');

// // Bus Management Routes
// router.get('/search', getBusRoutes);
// router.post('/book', bookBus);

// router.get('/bookings', async (req, res) => {
//   try {
//     const BusBooking = require('../models/BusBooking');
//     const bookings = await BusBooking.find().populate('busId').sort({ createdAt: -1 });
//     res.json({ success: true, data: bookings });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// router.get('/routes', async (req, res) => {
//   try {
//     const Bus = require('../models/Bus');
//     const routes = await Bus.aggregate([
//       {
//         $group: {
//           _id: { source: '$source', destination: '$destination' },
//           count: { $sum: 1 },
//           operators: { $addToSet: '$operatorName' }
//         }
//       }
//     ]);
//     res.json({ success: true, data: routes });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const { getRoutes, addRoute, updateRoute, deleteRoute } = require("../controllers/busRouteController");

router.get("/", getRoutes);
router.post("/", addRoute);
router.put("/:id", updateRoute);
router.delete("/:id", deleteRoute);

module.exports = router;
