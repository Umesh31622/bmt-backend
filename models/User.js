// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   isAdmin: { type: Boolean, default: false },
//   otp: String,
//   otpExpires: Date,
// });

// module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["admin", "vendor", "customer"],
    default: "vendor",  // ✅ Default vendor or customer as per your logic
  },
  otp: String,
  otpExpires: Date,
});

module.exports = mongoose.model("User", userSchema);
