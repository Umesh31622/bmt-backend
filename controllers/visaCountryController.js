const VisaCountry = require("../models/VisaCountry");

// Get all countries
exports.getAll = async (req, res, next) => {
  try {
    const countries = await VisaCountry.find();
    res.json(countries);
  } catch (err) { next(err); }
};

// Get one country
exports.getOne = async (req, res, next) => {
  try {
    const doc = await VisaCountry.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not found" });
    res.json(doc);
  } catch (err) { next(err); }
};

// Create new country
exports.create = async (req, res, next) => {
  try {
    const { name, iso2 } = req.body;
    const flagUrl = `https://flagcdn.com/w320/${iso2.toLowerCase()}.png`;
    const doc = await VisaCountry.create({ name, iso2, flagUrl });
    res.status(201).json(doc);
  } catch (err) { next(err); }
};

// Update country
exports.update = async (req, res, next) => {
  try {
    const updates = { ...req.body };
    if (updates.iso2) updates.flagUrl = `https://flagcdn.com/w320/${updates.iso2.toLowerCase()}.png`;
    const doc = await VisaCountry.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!doc) return res.status(404).json({ message: "Not found" });
    res.json(doc);
  } catch (err) { next(err); }
};

// Delete country
exports.remove = async (req, res, next) => {
  try {
    const doc = await VisaCountry.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not found" });
    res.json({ success: true });
  } catch (err) { next(err); }
};

// Add/Update passport-specific policy
exports.upsertPolicy = async (req, res, next) => {
  try {
    const { passport, requirement, stay, notes } = req.body;
    if (!passport) return res.status(400).json({ message: "passport (ISO2) required" });

    const country = await VisaCountry.findById(req.params.id);
    if (!country) return res.status(404).json({ message: "Not found" });

    const idx = country.policies.findIndex(p => p.passport.toUpperCase() === passport.toUpperCase());
    const payload = { passport: passport.toUpperCase(), requirement, stay, notes };

    if (idx >= 0) country.policies[idx] = { ...country.policies[idx]._doc, ...payload };
    else country.policies.push(payload);

    await country.save();
    res.json(country);
  } catch (err) { next(err); }
};
