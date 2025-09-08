// const Bus = require('../models/Bus');
// const BusBooking = require('../models/BusBooking');

// // Get bus routes using RedBus API
// const getBusRoutes = async (req, res) => {
//   try {
//     const { source, destination, date } = req.query;
    
//     // Using MakeMyTrip Bus API or Paytm Travel API
//     // For demo, using mock data structure similar to real APIs
//     const mockBusData = [
//       {
//         busId: 'BUS001',
//         operatorName: 'Shatabdi Travels',
//         busType: 'AC Sleeper',
//         source: source,
//         destination: destination,
//         departureTime: '20:30',
//         arrivalTime: '06:00',
//         duration: '9h 30m',
//         distance: 450,
//         totalSeats: 40,
//         availableSeats: 15,
//         price: 1200,
//         amenities: ['WiFi', 'Charging Point', 'Blanket', 'Water Bottle'],
//         ratings: 4.2
//       }
//     ];

//     // In production, replace with actual API call
//     res.json({
//       success: true,
//       data: mockBusData
//     });
//   } catch (error) {
//     console.error('Bus search error:', error);
//     res.status(500).json({ success: false, message: 'Failed to search buses' });
//   }
// };

// // Book bus ticket
// const bookBus = async (req, res) => {
//   try {
//     const bookingData = req.body;
    
//     const bookingId = 'BUS' + Math.random().toString(36).substr(2, 10).toUpperCase();
    
//     const booking = new BusBooking({
//       ...bookingData,
//       bookingId
//     });
    
//     await booking.save();
    
//     res.json({
//       success: true,
//       data: booking,
//       message: 'Bus booked successfully'
//     });
//   } catch (error) {
//     console.error('Bus booking error:', error);
//     res.status(500).json({ success: false, message: 'Failed to book bus' });
//   }
// };
const BusRoute = require("../models/BusRoute");

exports.getRoutes = async (req, res) => {
  try {
    const routes = await BusRoute.find();
    res.json(routes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addRoute = async (req, res) => {
  try {
    const route = new BusRoute(req.body);
    await route.save();
    res.status(201).json(route);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateRoute = async (req, res) => {
  try {
    const route = await BusRoute.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(route);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteRoute = async (req, res) => {
  try {
    await BusRoute.findByIdAndDelete(req.params.id);
    res.json({ message: "Route deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
