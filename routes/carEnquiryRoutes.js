const express = require('express');
const router = express.Router();
const {
  getAllCarEnquiries,
  deleteCarEnquiry,
} = require('../controllers/carEnquiryController');

router.get('/', getAllCarEnquiries);
router.delete('/:id', deleteCarEnquiry);

module.exports = router;
