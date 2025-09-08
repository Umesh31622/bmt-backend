const HolidayAmendment = require("../models/holidayAmendmentModel");

exports.getHolidayAmendments = async (req, res) => {
  const data = await HolidayAmendment.find().sort({ createdAt: -1 });
  res.json(data);
};

exports.addHolidayAmendment = async (req, res) => {
  const item = new HolidayAmendment(req.body);
  await item.save();
  res.status(201).json(item);
};

exports.updateHolidayAmendment = async (req, res) => {
  const updated = await HolidayAmendment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteHolidayAmendment = async (req, res) => {
  await HolidayAmendment.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
