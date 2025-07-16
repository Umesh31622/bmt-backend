const express = require('express');
const router = express.Router();
const { createMarkup, getAllMarkups } = require('../controllers/flightMarkupController');

router.post('/', createMarkup);
router.get('/', getAllMarkups);

module.exports = router;
