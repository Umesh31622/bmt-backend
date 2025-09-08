const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const connectDB = require("./config/db");

// Routes
// const fareRoutes = require('./routes/flightFareRoutes');
// const liveFlightRoutes = require('./routes/liveFlights');
const liveFlightsRoute = require("./routes/liveFlights");

// const trainRoutes = require('./trainRoutes');
// const busRoutes = require('./busRoutes');
// const currencyRoutes = require('./currencyRoutes');
// const visaRoutes = require('./visaRoutes');
// const insuranceRoutes = require('./insuranceRoutes');



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
const ticketRoutes = require("./routes/ticketRoutes");
const flightLogRoutes = require("./routes/flightLogRoutes");
const flightQueryRoutes = require("./routes/flightQueryRoutes"); 
const inventoryRoutes = require("./routes/inventoryRoutes");
const privateFareRoutes = require("./routes/privateFareRoutes");
const fareRuleRoutes = require("./routes/fareRuleRoutes");
const manageFareRuleRoutes = require("./routes/manageFareRuleRoutes");
const hotelMarkupRoutes = require("./routes/hotelMarkupRoutes");
const hotelDiscountRoutes = require('./routes/hotelDiscountRoutes');
const hotelBookingRoutes = require('./routes/hotelBookingRoutes');
const hotelAmendmentRoutes = require('./routes/hotelAmendmentRoutes');
const hotelTicketRoutes = require("./routes/hotelTicketRoutes");
const hotelCouponRoutes = require("./routes/hotelCouponRoutes");
const addHotelRoutes = require('./routes/addHotelRoutes');
const globalHotelRoutes = require("./routes/globalHotelRoutes");
const propertyTypeRoutes = require("./routes/propertyTypeRoutes");
const holidayRoutes = require("./routes/holidayRoutes");
const addHolidayRoutes = require("./routes/addHolidayRoutes");
const holidayBookingRoutes = require('./routes/holidayBookingRoutes');
const holidayQueryRoutes = require("./routes/holidayQueryRoutes");
const holidayMarkupRoutes = require('./routes/holidayMarkupRoutes');
const holidayDiscountRoutes = require('./routes/holidayDiscountRoutes');
const holidayCouponRoutes = require('./routes/holidayCouponRoutes');
const holidayThemeRoutes = require('./routes/holidayThemeRoutes');
const carRoutes = require("./routes/carRoutes");
const carBookingRoutes = require('./routes/carBookingRoutes');
const carAmendmentRoutes = require("./routes/carAmendmentRoutes");
const carMarkupRoutes = require("./routes/carMarkupRoutes");
const carDiscountRoutes = require("./routes/carDiscountRoutes");
const carCouponRoutes = require("./routes/carCouponRoutes");
const carSettingRoutes = require("./routes/carSettingRoutes");
const couponLogRoutes = require("./routes/couponLogRoutes");
const pageRoutes = require("./routes/pageRoutes");
const contactRoutes = require("./routes/contactRoutes");
const blogCategoryRoutes = require("./routes/blogCategoryRoutes");
const airportRoutes = require("./routes/airportRoutes");

const busRouteRoutes = require("./routes/busRouteRoutes");
const busBookingRoutes = require("./routes/busBookingRoutes");
const busAmendmentRoutes = require("./routes/busAmendmentRoutes");
const busQueryRoutes = require("./routes/busQueryRoutes");
const busMarkupRoutes = require("./routes/busMarkupRoutes");
const busDiscountRoutes = require("./routes/busDiscountRoutes");
const busCouponRoutes = require("./routes/busCouponRoutes");
const busSettingRoutes = require("./routes/busSettingRoutes");
const currencyRoutes = require("./routes/currencyRoutes");
// server.js (snippet)
const forexCardRoutes = require("./routes/forexCardRoutes");
const moneyTransferRoutes = require("./routes/moneyTransferRoutes");
const forexBookingRoutes = require("./routes/forexBookingRoutes.js");
const forexMarkupRoutes = require("./routes/forexMarkupRoutes");
  const forexSettingRoutes = require("./routes/forexSettingRoutes");
const visaCountryRoutes = require("./routes/visaCountryRoutes");
const documentRequirementRoutes = require('./routes/documentRequirementRoutes');    
// const visaRoutes = require('./routes/visaApplicationRoutes');









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
// app.use('/api/fares', fareRoutes);



// app.use('/api/live-flights', liveFlightRoutes);
app.use("/api/live-flights", liveFlightsRoute);

app.use("/api/exchange-rates", require("./routes/exchangeRateRoutes"));


app.use("/api/currencies", currencyRoutes);

// app.use('/api/trains', trainRoutes);
// app.use('/api/buses', busRoutes);
// app.use('/api/currency', currencyRoutes);
// app.use('/api/visa', visaRoutes);
// app.use('/api/insurance', insuranceRoutes);
app.use("/api/bus-routes", busRouteRoutes);
app.use("/api/bus-bookings", busBookingRoutes);
app.use("/api/bus-amendments", busAmendmentRoutes);
app.use("/api/bus-queries", busQueryRoutes);
app.use("/api/bus-markups", busMarkupRoutes);
app.use("/api/bus-discounts", busDiscountRoutes);
app.use("/api/bus-coupons", busCouponRoutes);
app.use("/api/bus-settings", busSettingRoutes);
app.use("/api/forex-cards", forexCardRoutes);
app.use("/api/money-transfers", moneyTransferRoutes);
app.use("/api", forexBookingRoutes);
app.use("/api/forex-markups", forexMarkupRoutes);
app.use("/api/forex-settings", forexSettingRoutes);
app.use("/api/visa-countries", visaCountryRoutes);
app.use('/api/document-requirements', documentRequirementRoutes);
// app.use('/api/visaApplications', visaRoutes);



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
app.use("/api/tickets", ticketRoutes);
app.use("/api/flight-logs", flightLogRoutes);
app.use("/api/flight-queries", flightQueryRoutes);   
app.use("/api/inventories", inventoryRoutes);
app.use("/api/private-fare", privateFareRoutes);
app.use("/api/fare-rules", fareRuleRoutes);
 app.use("/api/manage-fare-rules", manageFareRuleRoutes);
app.use("/api/hotel-markup", hotelMarkupRoutes);
app.use("/api/hotel-discount", hotelDiscountRoutes);
app.use("/api/hotel-bookings", hotelBookingRoutes);
app.use("/api/hotel-amendments", hotelAmendmentRoutes);
app.use("/api/hotel-tickets", hotelTicketRoutes);
app.use("/api/hotel-coupons", hotelCouponRoutes);
app.use("/api/add-hotels", addHotelRoutes); 
app.use("/api/global-hotels", globalHotelRoutes);
app.use("/api/property-types", propertyTypeRoutes);
app.use("/api/holidays", holidayRoutes);
app.use("/api/addholiday", addHolidayRoutes);
app.use("/api/holiday-bookings", holidayBookingRoutes);
app.use("/api/holiday-amendments", require("./routes/holidayAmendmentRoutes"));
app.use("/api/holiday-query", holidayQueryRoutes);
app.use("/api/holiday-markups", holidayMarkupRoutes);
app.use("/api/holiday-discounts", holidayDiscountRoutes);
app.use("/api/holiday-coupons", holidayCouponRoutes);
app.use("/api/holiday-themes", holidayThemeRoutes);
app.use("/api", carRoutes);
app.use('/api/car-bookings', carBookingRoutes);
app.use("/api/car-amendments", carAmendmentRoutes);
app.use('/api/car-enquiries', require('./routes/carEnquiryRoutes'));
// *******
app.use("/api/admin", carMarkupRoutes);
app.use("/api/car-discounts", carDiscountRoutes);
app.use("/api/car-coupons", carCouponRoutes);
app.use("/api/admin/car-settings", carSettingRoutes);
app.use("/api/admin", couponLogRoutes);
app.use("/api/admin", pageRoutes);
app.use("/api/admin/menus", require("./routes/menuRoutes"));
app.use("/api/contacts", contactRoutes);
app.use("/api/blog-categories", blogCategoryRoutes);
app.use("/api/blogs", require("./routes/blogRoutes"));

app.use("/api/airports", airportRoutes);



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
// app.get("/api/world-airports", async (req, res) => {
//   try {
//     const response = await axios.get("https://raw.githubusercontent.com/mwgg/Airports/master/airports.json");
//     const data = Object.values(response.data);

//     const cleanedData = data.map(a => ({
//       airportCode: a.iata || '',
//       airportName: a.name || '',
//       cityCode: a.city || '',
//       countryName: a.country || '',
//       countryCode: a.iso || '',
//       lat: a.lat || '',
//       lon: a.lon || ''
//     })).filter(a => a.airportCode);

//     res.json(cleanedData);
//   } catch (error) {
//     console.error("❌ Error fetching airport data:", error.message);
//     res.status(500).json({ message: "Error loading airport data" });
//   }
// });

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
