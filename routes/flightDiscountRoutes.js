const express = require("express");
const {
  createDiscount,
  getAllDiscounts,
  updateDiscount,
  deleteDiscount,
} = require("../controllers/flightDiscountController");

const router = express.Router();

router.route("/")
  .post(createDiscount)
  .get(getAllDiscounts);

router.route("/:id")
  .put(updateDiscount)
  .delete(deleteDiscount);

module.exports = router;
