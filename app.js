const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const motherProductRoutes = require("./src/routes/ProductRoutes");
const connectDB = require("./src/config/db");

// Load environment variables
require("dotenv").config();

const app = express();

// Connect to the database
connectDB();

// Middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/products", motherProductRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server Error" });
});

module.exports = app;
