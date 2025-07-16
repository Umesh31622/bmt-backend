const express = require('express');
const router = express.Router();
const Airline = require('../models/airlineModel'); // Make sure this exists

// ✅ POST route to add a new airline
router.post('/', async (req, res) => {
  try {
    const newAirline = new Airline(req.body);
    const savedAirline = await newAirline.save();
    res.status(201).json(savedAirline);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add airline', details: error.message });
  }
});

// ✅ GET all airlines
router.get('/', async (req, res) => {
  try {
    const airlines = await Airline.find();
    res.status(200).json(airlines);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch airlines' });
  }
});

module.exports = router;
