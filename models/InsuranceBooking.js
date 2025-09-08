// import mongoose from "mongoose";

// const insuranceBookingSchema = new mongoose.Schema({
//   policyNumber: { type: String, required: true, unique: true },
//   policyId: { type: mongoose.Schema.Types.ObjectId, ref: "InsurancePolicy", required: true },
//   insuredDetails: {
//     name: String,
//     dateOfBirth: Date,
//     age: Number,
//     email: String,
//     mobile: String,
//     address: String,
//     passportNumber: String,
//   },
//   travelDetails: {
//     destination: String,
//     departureDate: Date,
//     returnDate: Date,
//     tripDuration: Number,
//     purposeOfTravel: String,
//   },
//   coverage: {
//     medicalExpenses: Number,
//     accidentalDeath: Number,
//     baggage: Number,
//     flightDelay: Number,
//     tripCancellation: Number,
//   },
//   premiumAmount: { type: Number, required: true },
//   policyStatus: {
//     type: String,
//     enum: ["ACTIVE", "EXPIRED", "CANCELLED"],
//     default: "ACTIVE",
//   },
//   paymentStatus: {
//     type: String,
//     enum: ["PAID", "PENDING"],
//     default: "PENDING",
//   },
//   issueDate: { type: Date, default: Date.now },
//   expiryDate: { type: Date, required: true },
// }, { timestamps: true });

// export default mongoose.model("InsuranceBooking", insuranceBookingSchema);
