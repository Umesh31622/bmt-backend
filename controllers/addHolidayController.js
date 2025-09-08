const AddHoliday = require("../models/AddHoliday");

exports.getAllHolidays = async (req, res) => {
  const data = await AddHoliday.find();
  res.json(data);
};

exports.createHoliday = async (req, res) => {
  const { body, file } = req;
  const newData = new AddHoliday({
    ...body,
    packageImage: file?.filename,
    themes: JSON.parse(body.themes || "[]"),
  });

  await newData.save();
  res.json(newData);
};

exports.updateHoliday = async (req, res) => {
  const { file, body } = req;
  if (file) body.packageImage = file.filename;
  body.themes = JSON.parse(body.themes || "[]");

  const updated = await AddHoliday.findByIdAndUpdate(req.params.id, body, { new: true });
  res.json(updated);
};

exports.deleteHoliday = async (req, res) => {
  await AddHoliday.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
