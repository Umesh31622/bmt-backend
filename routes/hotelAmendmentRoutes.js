const express = require("express");
const router = express.Router();
const {
  getHotelAmendments,
  addHotelAmendment
} = require("../controllers/hotelAmendmentController");

router.get("/", getHotelAmendments);
router.post("/", addHotelAmendment);

module.exports = router;
