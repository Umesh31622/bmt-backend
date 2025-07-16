const express = require("express");
const router = express.Router();
const {
  getAmendmentsByDate,
  addAmendment
} = require("../controllers/flightAmendmentController");

router.get("/by-date", getAmendmentsByDate);
router.post("/add", addAmendment); // for testing

module.exports = router;
