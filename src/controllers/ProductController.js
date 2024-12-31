// controllers/motherProductController.js
const MotherProduct = require("../models/ProductModel");

// Create a new mother product
const createMotherProduct = async (req, res) => {
  try {
    const { title, review, description, child_products } = req.body;

    const motherProduct = new MotherProduct({
      title,
      review,
      description,
      child_products,
    });

    await motherProduct.save();
    res.status(201).json(motherProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a child product to an existing mother product
const addChildProduct = async (req, res) => {
  try {
    const { id } = req.params; // Mother product ID
    const childProduct = req.body; // Child product data

    const motherProduct = await MotherProduct.findById(id);

    if (!motherProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    motherProduct.child_products.push(childProduct);
    await motherProduct.save();

    res.status(200).json(motherProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all mother products
const getMotherProducts = async (req, res) => {
  try {
    const motherProducts = await MotherProduct.find();
    res.status(200).json(motherProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single mother product by ID
const getMotherProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const motherProduct = await MotherProduct.findById(id);

    if (!motherProduct) {
      return res.status(404).json({ error: "Mother product not found." });
    }

    res.status(200).json(motherProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a mother product
const updateMotherProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMotherProduct = await MotherProduct.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedMotherProduct) {
      return res.status(404).json({ error: "Mother product not found." });
    }

    res.status(200).json(updatedMotherProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a mother product
const deleteMotherProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMotherProduct = await MotherProduct.findByIdAndDelete(id);

    if (!deletedMotherProduct) {
      return res.status(404).json({ error: "Mother product not found." });
    }

    res.status(200).json({ message: "Mother product deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMotherProduct,
  addChildProduct,
  getMotherProducts,
  getMotherProductById,
  updateMotherProduct,
  deleteMotherProduct,
};
