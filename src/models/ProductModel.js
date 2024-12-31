// models/MotherProduct.js
const mongoose = require("mongoose");

// Schema for Child Products
const childProductSchema = new mongoose.Schema({
  product_image: { type: String, required: true },
  product_name: { type: String, required: true },
  product_discount: { type: Number, default: 0 },
  product_price: { type: Number, required: true },
  product_quantity: { type: Number, required: true },
  product_category: { type: String, required: true },
  color: { type: String },
  size: {
    type: [Number],
    enum: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
  },
  needs_color: { type: Boolean, default: false },
  needs_size: { type: Boolean, default: false },
});

// Schema for Mother Product
const motherProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    review: [],
    description: [],
    child_products: [childProductSchema], // Array of child products
  },
  { timestamps: true }
);

module.exports = mongoose.model("MotherProduct", motherProductSchema);
