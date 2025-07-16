const Fare = require('../models/fareModel');

const getFares = async (req, res) => {
  try {
    const fares = await Fare.find().sort({ createdAt: -1 });
    res.json(fares);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fares' });
  }
};

const addFare = async (req, res) => {
  const { supplierFareType, apiFareType, apiSupplier } = req.body;
  try {
    const newFare = new Fare({ supplierFareType, apiFareType, apiSupplier });
    await newFare.save();
    res.status(201).json(newFare);
  } catch (error) {
    res.status(500).json({ message: 'Error adding fare' });
  }
};

const updateFare = async (req, res) => {
  const { id } = req.params;
  const { supplierFareType, apiFareType, apiSupplier } = req.body;
  try {
    const updatedFare = await Fare.findByIdAndUpdate(
      id,
      { supplierFareType, apiFareType, apiSupplier },
      { new: true }
    );
    res.json(updatedFare);
  } catch (error) {
    res.status(500).json({ message: 'Error updating fare' });
  }
};

const deleteFare = async (req, res) => {
  try {
    await Fare.findByIdAndDelete(req.params.id);
    res.json({ message: 'Fare deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting fare' });
  }
};

module.exports = { getFares, addFare, updateFare, deleteFare };
