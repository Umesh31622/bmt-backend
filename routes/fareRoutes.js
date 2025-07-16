const express = require('express');
const { getFares, addFare, updateFare, deleteFare } = require('../controllers/fareController');
const router = express.Router();

router.get('/', getFares);
router.post('/', addFare);
router.put('/:id', updateFare);
router.delete('/:id', deleteFare); // <-- add this

module.exports = router;
