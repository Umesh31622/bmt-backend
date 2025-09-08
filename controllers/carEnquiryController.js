const CarEnquiry = require('../models/CarEnquiry');

// @desc Get all car enquiries with filters
exports.getAllCarEnquiries = async (req, res) => {
  try {
    const { key, value, fromDate, toDate } = req.query;
    const query = {};

    if (key && value) {
      query[key] = { $regex: value, $options: 'i' };
    }

    if (fromDate && toDate) {
      query.createdAt = {
        $gte: new Date(fromDate),
        $lte: new Date(toDate),
      };
    }

    const enquiries = await CarEnquiry.find(query).sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc Delete a car enquiry
exports.deleteCarEnquiry = async (req, res) => {
  try {
    await CarEnquiry.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
