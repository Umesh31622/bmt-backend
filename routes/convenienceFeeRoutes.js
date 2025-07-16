const express = require('express');
const { getFees, addFee } = require('../controllers/convenienceFeeController');
const router = express.Router();

router.get('/', getFees);
router.post('/', addFee);

module.exports = router;
