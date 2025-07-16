// const express = require("express");
// const router = express.Router();
// const {
//   sendOtp,
//   verifyOtpAndRegister,
// requestLoginOtp ,

//   verifyLoginOtp
// } = require("../controllers/userController");

// router.post("/send-otp", sendOtp);
// router.post("/register", verifyOtpAndRegister);
// router.post("/login", requestLoginOtp );
// router.post("/verify-login-otp", verifyLoginOtp);   
// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  sendOtp,
  verifyOtpAndRegister,
  requestLoginOtp,
  verifyLoginOtp,
  getAllUsers,         // ✅ Add this line
  updateUserStatus     // ✅ Optional if using status update
} = require("../controllers/userController");

// Existing routes
router.post("/send-otp", sendOtp);
router.post("/register", verifyOtpAndRegister);
router.post("/login", requestLoginOtp);
router.post("/verify-login-otp", verifyLoginOtp);

// ✅ ADD THIS ROUTE for fetching all users
router.get("/", getAllUsers);

// ✅ Optional route for updating status
router.put("/:id/status", updateUserStatus);

module.exports = router;
