const FlightAmendment = require("../models/FlightAmendment");

exports.getAmendmentsByDate = async (req, res) => {
  try {
    const { fromDate, toDate } = req.query;

    const amendments = await FlightAmendment.find({
      departureDate: {
        $gte: new Date(fromDate),
        $lte: new Date(toDate),
      },
    });

    res.json(amendments);
  } catch (error) {
    console.error("❌ Error fetching amendments:", error.message);
    res.status(500).json({ message: "Failed to get amendments" });
  }
};

exports.addAmendment = async (req, res) => {
  try {
    const newAmendment = new FlightAmendment(req.body);
    await newAmendment.save();
    res.status(201).json({ message: "Amendment saved successfully" });
  } catch (err) {
    console.error("❌ Error saving amendment:", err.message);
    res.status(500).json({ message: "Failed to save amendment" });
  }
};
