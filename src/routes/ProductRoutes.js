// routes/motherProductRoutes.js
const express = require("express");
const router = express.Router();
const motherProductController = require("../controllers/ProductController");

router.post("/", motherProductController.createMotherProduct); // Create mother product
router.get("/", motherProductController.getMotherProducts); // Get all mother products
router.get("/:id", motherProductController.getMotherProductById); // Get mother product by ID
router.put("/:id", motherProductController.updateMotherProduct); // Update mother product
router.delete("/:id", motherProductController.deleteMotherProduct); // Delete mother product
router.post("/:id/child", motherProductController.addChildProduct); // Add child product

module.exports = router;
