require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dnsRoutes = require("./routes/dnsRoutes");
const passport = require("passport");
const userRoutes = require("./routes/userRoutes");

// Adjust the path as necessary to correctly point to your mongoConfig.js
const connectDB = require("./config/mongoConfig");

const app = express();

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", userRoutes);

app.use(cors());
app.use(express.json());

// Directly call connectDB here if you're handling the connection at this point.
connectDB()
  .then(() => console.log("Database Connected Successfully"))
  .catch((error) => console.error("Database Connection Failed", error));

app.use("/api/dns", dnsRoutes);

module.exports = app;
