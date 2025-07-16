const express = require("express");
const router = express.Router();
const {
  getAllSuppliers,
  createSupplier,
  updateSupplierStatus
} = require("../controllers/supplierController");

router.get("/", getAllSuppliers);
router.post("/", createSupplier);
router.put("/:id", updateSupplierStatus);

module.exports = router;
