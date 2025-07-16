
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const connectDB = require("./config/db");

// Routes
const fareRoutes = require('./routes/fareRoutes');
const convenienceFeeRoutes = require('./routes/convenienceFeeRoutes');
const bankAccountRoutes = require('./routes/bankAccountRoutes');
const agentNotificationRoutes = require('./routes/agentNotificationRoutes');
const emailTemplateRoutes = require('./routes/emailTemplateRoutes');
const companySettingRoutes = require("./routes/companySettingRoutes");
const agentPaymentRoutes = require('./routes/agentPaymentRoutes');
const onlineTransactionRoutes = require('./routes/onlineTransactionRoutes');
const flightMarkupRoutes = require('./routes/flightMarkupRoutes');
const flightDiscountRoutes = require("./routes/flightDiscountRoutes");
const bookingRoutes = require("./routes/bookingRoute");
const flightBookingRoutes = require('./routes/flightBookingRoute');
const flightAmendmentRoutes = require("./routes/flightAmendmentRoute");
const flightCouponRoutes = require("./routes/flightCouponRoute");
const flightTopDestinationRoutes = require("./routes/flightTopDestinationRoute");
const flightTopRouteRoutes = require("./routes/flightTopRoute");
const webCheckinRoutes = require('./routes/webCheckinRoutes');
const flightReplaceRoutes = require('./routes/flightReplaceRoutes');
const offlineFlightRoutes = require("./routes/offlineFlightRoutes");
const userRoutes = require("./routes/userRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const flightApiSupplierRoutes = require('./routes/flightApiSupplierRoutes');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Register Routes
app.use("/api/users", userRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use('/api/fares', fareRoutes);
app.use('/api/convenience-fees', convenienceFeeRoutes);
app.use('/api/bank-accounts', bankAccountRoutes);
app.use('/api/notifications', agentNotificationRoutes);
app.use('/api/email-templates', emailTemplateRoutes);
app.use("/api/company-setting", companySettingRoutes);
app.use('/api/agent-payments', agentPaymentRoutes);
app.use("/api/online-transactions", onlineTransactionRoutes);
app.use("/api/flight-markup", flightMarkupRoutes);
app.use("/api/flight-discounts", flightDiscountRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/flight-bookings", flightBookingRoutes);
app.use("/api/flight-amendments", flightAmendmentRoutes);
app.use("/api/flight-coupons", flightCouponRoutes);
app.use("/api/flight-top-destinations", flightTopDestinationRoutes);
app.use("/api/flight-top-routes", flightTopRouteRoutes);
app.use('/api/web-checkin', webCheckinRoutes);
app.use('/api/airline-replace', flightReplaceRoutes);
app.use("/api/offline-flights", offlineFlightRoutes);
app.use('/api/flight-api-suppliers', flightApiSupplierRoutes);

// ✅ World Airlines API (from GitHub OpenFlights)
app.get("/api/world-airlines", async (req, res) => {
  try {
    const response = await axios.get("https://raw.githubusercontent.com/jpatokal/openflights/master/data/airlines.dat");
    const lines = response.data.split("\n");

    const airlines = lines
      .map((line) => line.split(","))
      .filter((a) => a.length > 6 && a[3] !== "\\N")
      .map((a) => ({
        airlineName: a[1].replace(/"/g, ""),
        airlineCode: a[3].replace(/"/g, ""),
        callsign: a[4].replace(/"/g, ""),
        country: a[6].replace(/"/g, ""),
        airlineImage: `https://content.airhex.com/content/logos/airlines_${a[3].replace(/"/g, "")}_200_200_s.png`
      }));

    res.json(airlines);
  } catch (err) {
    console.error("❌ Error fetching airlines:", err.message);
    res.status(500).json({ message: "Error loading airline data" });
  }
});

// ✅ World Airports API
app.get("/api/world-airports", async (req, res) => {
  try {
    const response = await axios.get("https://raw.githubusercontent.com/mwgg/Airports/master/airports.json");
    const data = Object.values(response.data);

    const cleanedData = data.map(a => ({
      airportCode: a.iata || '',
      airportName: a.name || '',
      cityCode: a.city || '',
      countryName: a.country || '',
      countryCode: a.iso || '',
      lat: a.lat || '',
      lon: a.lon || ''
    })).filter(a => a.airportCode);

    res.json(cleanedData);
  } catch (error) {
    console.error("❌ Error fetching airport data:", error.message);
    res.status(500).json({ message: "Error loading airport data" });
  }
});

// Testing route
app.get("/testing", (req, res) => {
  res.send("✅ Testing route is working");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Server error:", err.stack);
  res.status(500).send("Something went wrong!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
