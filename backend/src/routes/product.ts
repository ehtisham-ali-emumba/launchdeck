import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
  searchProducts, // Add this new controller
} from "../controllers/productController";

export const productRoutes = express.Router();

productRoutes.post("/", createProduct);

productRoutes.get("/", getAllProducts);

productRoutes.post("/search", searchProducts);

productRoutes.get("/:id", getProductById);

productRoutes.put("/:id", updateProductById);

productRoutes.delete("/:id", deleteProductById);
