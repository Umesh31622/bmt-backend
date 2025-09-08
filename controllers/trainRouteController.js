// controllers/trainRouteController.js
const TrainRoute = require("../models/TrainRoute");
const axios = require("axios");

exports.getLiveTrainRoute = async (req, res) => {
  const { trainNo } = req.query;

  try {
    // ✅ Pehle DB check kar le
    let existing = await TrainRoute.findOne({ trainNo });
    if (existing) {
      return res.json(existing);
    }

    // ✅ Agar DB me nahi mila to API call
    const response = await axios.get(
      `https://indianrailapi.com/api/v2/TrainSchedule/apikey/${process.env.RAIL_API_KEY}/TrainNumber/${trainNo}`
    );

    const data = response.data;

    // ✅ DB me Save kar de
    const newRoute = new TrainRoute({
      trainNo: data.TrainNo,
      trainName: data.TrainName,
      source: { code: data.Route[0].StationCode, name: data.Route[0].StationName },
      destination: {
        code: data.Route[data.Route.length - 1].StationCode,
        name: data.Route[data.Route.length - 1].StationName,
      },
      duration: data.Route[data.Route.length - 1].Day, // approx
      route: data.Route.map((st) => ({
        stationCode: st.StationCode,
        stationName: st.StationName,
        arrival: st.ArrivalTime,
        departure: st.DepartureTime,
        day: st.Day,
        distance: st.Distance,
      })),
    });

    await newRoute.save();
    res.json(newRoute);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
