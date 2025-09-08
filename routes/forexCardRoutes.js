// routes/forexCardRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/forexCardController");

router.post("/", controller.createForexCard);
router.get("/", controller.getForexCards);
router.get("/:id", controller.getForexCardById);
router.put("/:id", controller.updateForexCard);
router.delete("/:id", controller.deleteForexCard);

module.exports = router;
