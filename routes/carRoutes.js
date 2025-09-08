// const express = require("express");
// const router = express.Router();
// const {
//   addCar,
//   getAllCars,
//   deleteCar,
// } = require("../controllers/carController");

// router.post("/add-car", addCar);
// router.get("/cars", getAllCars);
// router.delete("/car/:id", deleteCar);

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  searchCars,
  getDepots,  
  getDepotReviews,
  getCarDetails,
  getSuppliers,
  getConstants
} = require("../controllers/carController");

router.post("/search", searchCars);
router.get("/depots", getDepots);
router.get("/depots/reviews", getDepotReviews);
router.get("/details/:id", getCarDetails);
router.get("/suppliers", getSuppliers);
router.get("/constants", getConstants);

module.exports = router;
