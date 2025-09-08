const HolidayTheme = require('../models/holidayThemeModel');

exports.getAll = async (req, res) => {
  const { search } = req.query;
  const query = search
    ? { themeName: { $regex: search, $options: 'i' } }
    : {};
  const themes = await HolidayTheme.find(query).sort({ createdAt: -1 });
  res.json(themes);
};

exports.create = async (req, res) => {
  const file = req.file ? `/uploads/${req.file.filename}` : '';
  const theme = new HolidayTheme({ ...req.body, themeImage: file });
  await theme.save();
  res.json(theme);
};

exports.update = async (req, res) => {
  const updateData = req.body;
  if (req.file) {
    updateData.themeImage = `/uploads/${req.file.filename}`;
  }
  const updated = await HolidayTheme.findByIdAndUpdate(req.params.id, updateData, { new: true });
  res.json(updated);
};

exports.delete = async (req, res) => {
  await HolidayTheme.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

exports.toggleStatus = async (req, res) => {
  const theme = await HolidayTheme.findById(req.params.id);
  theme.status = theme.status === "Active" ? "Inactive" : "Active";
  await theme.save();
  res.json(theme);
};
