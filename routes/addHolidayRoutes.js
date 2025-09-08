const express = require("express");
const router = express.Router();
const controller = require("../controllers/addHolidayController");
const multer = require("multer");

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

router.get("/", controller.getAllHolidays);
router.post("/", upload.single("packageImage"), controller.createHoliday);
router.put("/:id", upload.single("packageImage"), controller.updateHoliday);
router.delete("/:id", controller.deleteHoliday);

module.exports = router;
